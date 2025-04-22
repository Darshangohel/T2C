import { useEffect, useState, useRef } from 'react';
import Logo from "../assets/logo-dark.png"
// import TravelLogo from "../assets/travel-logo.png"
import { Link } from 'react-router-dom';
import FileUpload from '../components/FileUpload';


const CreateEvent = () => {
    
    const menuItems = [{label : "Dashboard", path : "/dashboard", active: false}, {label : "Hotel", path : "/hotel", active: false}, {label : "Event", path : "/event", active: true}, {label : "Reservations", path : "#", active: false}];
    const [isVisibleMobileNav, setIsVisibleMobileNav] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.classList.add("h-full");
        document.documentElement.classList.add("h-full");

        const root = document.querySelector("#root");
        if (root) {
            root.classList.add("h-full");
        }
    },[]);

    const handleMobileNav = () => {
        
        if(isVisibleMobileNav) {
            setIsVisibleMobileNav(false);
        } else {
            setIsVisibleMobileNav(true);
            setIsVisibleFilter(false);
        }
    }

    const [isVisibleFilter, setIsVisibleFilter] = useState(false);

    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    const toggleUserDropdown = () => {
        if(userDropdownOpen) {
            setUserDropdownOpen(false);
        } else {
            setUserDropdownOpen(true);
        }
    }

    return (
        <>
            <div className="flex h-full">
                <div className={`xl:w-2/12 lg:w-3/12 md:w-3/12 w-4/12 absolute md:static flex flex-col shadow-[0_0px_15px_rgba(0,0,0,0.25)] h-full bg-white md:z-20 ${isVisibleMobileNav ? 'flex z-20' : 'z-0'}`}>
                    <div className="p-3">
                        <img src={Logo} alt="Logo" className="w-30" />
                    </div>
                    <div className="p-4 md:hidden">
                        <input type="text" name="search" className="border border-gray-400 rounded-md px-4 py-2 w-full" placeholder="Search.." />
                    </div>
                    <div className="grow overflow-scroll px-2">
                        <ul>
                            {menuItems.map((item, index) => 
                                <li className="px-1" key={index}>
                                    <Link to={item.path} className={`block hover:bg-blue-50 p-3 rounded-sm ${item.active ? 'bg-blue-50' : ''}`}>{item.label}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="p-3 border-t border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block align-text-bottom mr-3" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                        </svg>
                        Settings
                    </div>
                </div>
                <div className={`xl:w-10/12 lg:w-9/12 md:w-9/12 sm:w-full flex transition-all duration-300 ease-in-out z-10 flex-col ${isVisibleMobileNav ? 'translate-x-4/12 md:translate-x-0' : ''} ${isVisibleFilter ? 'xl:translate-x-3/10 lg:translate-x-4/12 md:translate-x-4/9 sm:translate-x-4/12' : ''}`}>
                <div className="shadow-lg shadow-gray-200 min-h-18 py-3 px-4 flex justify-between z-10 relative bg-white">
                        <div className="flex">
                            <span className="border border-gray-300 mr-4 self-center py-0.5 px-1 rounded-sm cursor-pointer inline-block md:hidden" onClick={handleMobileNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                </svg>
                            </span>
                            <h2 className="self-center font-bold text-xl">Create Event</h2>
                        </div>
                        <div className="flex items-center">
                            <input type="text" name="search" className="border border-gray-400 rounded-md px-4 py-2 hidden md:block" placeholder="Search.." />
                            <div className="flex ml-5 text-gray-500 relative cursor-pointer" onClick={toggleUserDropdown}>
                                <img src="https://avatar.iran.liara.run/username?username=Max+Lorem" className="w-7 mr-2" />
                                <span>Max Lorem</span>
                                <svg aria-hidden="true" fill="currentColor" className="mt-1 ml-1" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M16.44 9.146a.5.5 0 0 1 .706 0l.708.708a.5.5 0 0 1 0 .707l-5.147 5.146a1 1 0 0 1-1.414 0l-5.147-5.146a.5.5 0 0 1 0-.707l.708-.708a.5.5 0 0 1 .703-.003L12 13.586l4.44-4.44z"></path></svg>
                                {userDropdownOpen && (
                                    <div ref={dropdownRef} className="absolute right-0 top-full mt-5 bg-white shadow-[0_0px_15px_rgba(0,0,0,0.15)] w-35 rounded-sm">
                                        <Link to="#" className="px-3 py-2 cursor-pointer hover:bg-gray-100 block">
                                            Account
                                        </Link>
                                        <Link to="#" className="px-3 py-2 cursor-pointer hover:bg-gray-100 block">
                                            Settings
                                        </Link>
                                        <hr className="border-gray-200" />
                                        <Link to="/" className="px-3 py-2 cursor-pointer hover:bg-gray-100 block">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block align-text-bottom mr-1.5" viewBox="0 0 16 16">
                                                <path d="M7.5 1v7h1V1z"/>
                                                <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"/>
                                            </svg>
                                            Logout
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="grow overflow-auto bg-slate-100 p-4 relative flex flex-col">
                        <ul className='flex pt-2 pb-5 text-gray-500'>
                            <li className='me-2'><Link to="/event" className='text-blue-900'>Events</Link></li>
                            <li className='px-2'>/</li>
                            <li className='ps-2'>Create Event</li>
                        </ul>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='bg-white rounded-md p-10 border border-gray-200'>
                                <h4 className='text-center font-bold text-lg mb-3'>Select event logo</h4>
                                <FileUpload />
                            </div>
                            <div className='bg-white p-10 col-span-2 rounded-md'>
                                <div className='flex items-center mb-10'>
                                    <label htmlFor='event-title' className='font-bold pr-4 w-3/12'>Event Title</label>
                                    <input name='event-title' id='event-title' type="text" placeholder='Please Enter Event Title' className='bg-white grow border border-gray-200 p-3 rounded-md' />
                                </div>

                                <div className='flex items-start mb-10'>
                                    <label htmlFor='street-address' className='font-bold mt-3 w-3/12'>Event Location</label>
                                    <div className='grow'>
                                        <input name='street-address' id='street-address' type='text' placeholder='Street Address' className='bg-white w-full border border-gray-200 p-3 rounded-md mb-4' />
                                        <input name='Street-address-2' id='Street-address-2' type="text" placeholder='Address Line 2' className='bg-white w-full border border-gray-200 p-3 rounded-md mb-4' />
                                        <div className='grid grid-cols-3 gap-4'>
                                            <input name='city' id='city' type='text' placeholder='City' className='bg-white w-full border border-gray-200 p-3 rounded-md mb-4' />
                                            <input name='state' id='state' type='text' placeholder='State' className='bg-white w-full border border-gray-200 p-3 rounded-md mb-4' />
                                            <input name='zip' id='zip' type='text' placeholder='Zip' className='bg-white w-full border border-gray-200 p-3 rounded-md mb-4' />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='flex items-start mb-10'>
                                    <label htmlFor='event-start' className='font-bold mt-3 w-3/12'>Event Date / Time</label>
                                    <div className='grow'>
                                        <div className='grid grid-cols-2 gap-4'>
                                            <input name='event-start' id='event-start' type='text' placeholder='Event Start Date / Time' className='bg-white w-full border border-gray-200 p-3 rounded-md mb-4' />
                                            <input name='event-end' id='event-end' type='text' placeholder='Event End Date / Time' className='bg-white w-full border border-gray-200 p-3 rounded-md mb-4' />
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center'>
                                    <label htmlFor='participants' className='font-bold pr-4 w-3/12'># of Participants</label>
                                    <input name='participants' id='participants' min="0" type="number" placeholder='Please Enter Event Title' className='bg-white grow border border-gray-200 p-3 rounded-md' />
                                </div>
                            </div>
                        </div>
                        <div className='flex pt-3 mt-auto'>
                            <button className='py-2 px-3 ml-auto bg-blue-950 text-white font-light rounded-sm cursor-pointer'>
                                Create Event
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='inline-block align-text-bottom ml-2' viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateEvent;