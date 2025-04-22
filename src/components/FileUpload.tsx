import { useState, ChangeEvent, useEffect, DragEvent } from 'react';
import axios from 'axios';

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

const FileUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<UploadStatus>('idle');
    const [uploadProcess, setUploadProcess] = useState(0);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [dragActive, setDragActive] = useState(false);

    const handleFile = (selectedFile: File) => {
        setFile(selectedFile);
        if (selectedFile.type.startsWith('image/')) {
            const objectUrl = URL.createObjectURL(selectedFile);
            setPreviewUrl(objectUrl);
        } else {
            setPreviewUrl(null);
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    async function handleFileUpload() {
        if (!file) return;

        setStatus('uploading');
        setUploadProcess(0);

        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post("https://httpbin.org/post", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    const progress = progressEvent.total
                        ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        : 0;
                    setUploadProcess(progress);
                },
            });
            setStatus("success");
            setUploadProcess(100);
        } catch {
            setStatus("error");
            setUploadProcess(0);
        }
    }

    return (
        <>
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed px-6 py-10 rounded-md text-center transition-colors ${
                    dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
            >
                <p className="mb-2">Drag a file here to upload.</p>
                <p className="mb-2 text-gray-500">Alternatively, you can select a file here</p>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mx-auto appearance-none invisible"
                    id='uploadFile'
                />
                <label htmlFor='uploadFile' className='px-4 py-3 bg-blue-950 text-white rounded-sm cursor-pointer'>Select a file</label>
            </div>

            {file && (
                <div className="space-y-2 mt-4">
                    {previewUrl && (
                        <img
                            src={previewUrl}
                            alt="Preview"
                            className="w-48 h-auto rounded mx-auto"
                        />
                    )}
                    {/* <p>File Name: {file.name}</p>
                    <p>File Size: {(file.size / 1024).toFixed(2)} KB</p>
                    <p>File Type: {file.type}</p> */}
                </div>
            )}

            {status === 'uploading' && (
                <div className="space-y-2 mt-4">
                    <div className="h-2.5 w-full rounded-full bg-gray-200">
                        <div
                            className="h-2.5 rounded-full bg-blue-500 transition-all duration-300"
                            style={{ width: `${uploadProcess}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-gray-600">{uploadProcess}% Uploaded.</p>
                </div>
            )}

            {file && status !== 'uploading' && (
                <div className='text-center'>
                    <button
                        onClick={handleFileUpload}
                        className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-950 cursor-pointer"
                    >
                        Upload
                    </button>
                </div>
            )}

            {status === 'success' && <p className="text-green-600 text-center mt-2">File Uploaded Successfully!</p>}
            {status === 'error' && <p className="text-red-600 text-center mt-2">Error, Please try again.</p>}
        </>
    );
};

export default FileUpload;
