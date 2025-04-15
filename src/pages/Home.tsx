import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import HotelImage from "../assets/hotel-1.avif"
import HotelImage2 from "../assets/hotel-2.avif"
import HotelImage3 from "../assets/hotel-3.avif"
import HotelImage4 from "../assets/hotel-4.avif"
import "./Home.css";

function Home() {

    const poolIcon = (<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fillRule="evenodd" d="M15 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" clipRule="evenodd"></path><path d="M5.5 6a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h.6a8 8 0 0 1 5.658 2.343l5.162 5.162a.5.5 0 0 1-.111.79l-.91.506a.5.5 0 0 1-.596-.084L12 9.414l-3.303 3.303a.5.5 0 0 1-.596.084l-.91-.505a.5.5 0 0 1-.11-.79L10.586 8l-.243-.243A6 6 0 0 0 6.101 6h-.6zM5 15.5c-.146 0-.29.04-.414.115l-1.214.728a4.61 4.61 0 0 1-1.873.63c-.274.03-.499-.197-.499-.473v-1c0-.276.226-.495.497-.548.297-.057.584-.167.846-.324l1.214-.728a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.214.728c.262.157.549.267.846.324.271.053.497.272.497.548v1c0 .276-.224.503-.499.473a4.61 4.61 0 0 1-1.873-.63l-1.214-.728a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985A.806.806 0 0 0 5 15.5zM5 20c-.146 0-.29.04-.414.115l-1.214.728a4.61 4.61 0 0 1-1.873.63C1.225 21.503 1 21.276 1 21v-1c0-.276.226-.495.497-.548.297-.057.584-.167.846-.324l1.214-.728a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.214.728c.262.157.549.267.846.324.271.053.497.272.497.548v1c0 .276-.224.503-.499.473a4.61 4.61 0 0 1-1.873-.63l-1.214-.728a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985A.806.806 0 0 0 5 20z"></path></svg>);
    const wifiIcon = (<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M22.86 8.991a.484.484 0 0 0-.008-.692A15.792 15.792 0 0 0 12 4 15.792 15.792 0 0 0 1.148 8.298a.484.484 0 0 0-.008.693l.696.705a.51.51 0 0 0 .71.008A13.818 13.818 0 0 1 12 5.981c3.654 0 6.978 1.413 9.455 3.723a.51.51 0 0 0 .709-.008l.695-.705zm-4.175 4.229a.477.477 0 0 0-.009-.689A9.868 9.868 0 0 0 12 9.943c-2.572 0-4.915.98-6.676 2.588-.2.183-.2.495-.01.688l.695.704a.52.52 0 0 0 .716.011A7.894 7.894 0 0 1 12 11.924c2.025 0 3.874.76 5.275 2.01a.52.52 0 0 0 .715-.01l.695-.705zm-4.17 4.223c.189-.19.192-.5-.016-.67a3.945 3.945 0 0 0-2.5-.888c-.947 0-1.816.333-2.498.888-.208.17-.205.479-.016.67l2.163 2.19c.194.197.51.197.705 0l2.162-2.19z"></path></svg>);
    const gymIcon = (<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M6 5a1 1 0 0 1 2 0v6h8V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-6H8v6a1 1 0 1 1-2 0V5zm-3 8H1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H3V8a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0v-3zm20-1.5a.5.5 0 0 0-.5-.5H21V8a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-3h1.5a.5.5 0 0 0 .5-.5v-1z"></path></svg>);
    const petFriendlyIcon = (<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fillRule="evenodd" d="M12.5 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-.328 16H8.829a3.828 3.828 0 0 1-2.707-6.535l3.05-3.05a4 4 0 0 1 5.657 0l3.05 3.05A3.828 3.828 0 0 1 15.172 21zm-6.343-2h6.343a1.828 1.828 0 0 0 1.293-3.121l-3.05-3.05a2 2 0 0 0-2.829 0l-3.05 3.05A1.828 1.828 0 0 0 8.829 19zM20.5 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-19 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-7a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" clipRule="evenodd"></path></svg>);
    const evChargingIcon = (<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fillRule="evenodd" d="M18.06 3.146a.5.5 0 0 0-.706 0l-.708.708a.5.5 0 0 0 0 .707L18 5.914v2.258a2 2 0 0 0 .586 1.414L20 11v7a1 1 0 1 1-2 0v-3a3 3 0 0 0-3-3h-1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6h1a1 1 0 0 1 1 1v3a3 3 0 1 0 6 0V7.5a1 1 0 0 0-.293-.707l-3.646-3.647zM4 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v13H4V6zm5 2.667V11h1.25a.75.75 0 0 1 .6 1.2L8.2 15.733a.667.667 0 0 1-1.2-.4V13H5.75a.75.75 0 0 1-.6-1.2L7.8 8.267a.667.667 0 0 1 1.2.4z" clipRule="evenodd"></path></svg>);
    const data = [
        {"title" : "Sonesta Los Angeles Airport LAX", "img" : HotelImage , "distance" : "0.5", "distance-from" : "South Tower Building", "aminities": [{label: "Pool", icon: poolIcon},{label: "Wifi", icon: wifiIcon},{label: "Gym", icon: gymIcon}], "star": "4.5", "rate": "178" },
        {"title" : "Hyatt Regency Los Angeles International Airport", "img" : HotelImage2 , "distance" : "0.7", "distance-from" : "South Tower Building", "aminities": [{label: "Pool", icon: poolIcon},{label: "Wifi", icon: wifiIcon},{label: "Gym", icon: gymIcon},{label: "Pet Friendly", icon: petFriendlyIcon}], "star": "4.7", "rate": "181" },
        {"title" : "Holiday Inn Los Angeles - LAX Airport by IHG", "img" : HotelImage3 , "distance" : "1.88", "distance-from" : "South Tower Building", "aminities": [{label: "Gym", icon: gymIcon},{label: "Pet Friendly", icon: petFriendlyIcon},{"Electric car charging station": evChargingIcon}], "star": "4.8", "rate": "170" },
        {"title" : "Embassy Suites by Hilton Los Angeles International Airport North", "img" : HotelImage4 , "distance" : "0.97", "distance-from" : "South Tower Building", "aminities": [{label: "Pool", icon: poolIcon},{label: "Wifi",icon: wifiIcon},{label: "Gym", icon: gymIcon}], "star": "4.4", "rate": "174" },
    ]
    const date = new Date();
    date.setDate(date.getDate() + 7);
    const [startDate, setStartDate] = useState(new Date());

    const [endDate, setEndDate] = useState(date);
    const [values, setValues] = useState<[number, number]>([0, 50]);
    const [inputs, setInputs] = useState(['$0', '$50']);
    const [isEditing, setIsEditing] = useState([false, false]);

    const formatDate = (date: any) =>
        date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "2-digit",
    });
    
    const [dateStartText, setDateStartText] = useState(`${formatDate(startDate)}`);
    const [dateEndText, setDateEndText] = useState(`${formatDate(endDate)}`);

    const handleDateChange = (date: any) => {
        if (date) {
          setStartDate(date);
          setDateStartText(`${formatDate(date)}`);
        }
    };

    const handleEndDateChange = (date: any) => {
        if(date) {
            setEndDate(date);
            setDateEndText(`${formatDate(date)}`);
        }
    }
    

    useEffect(() => {
        setInputs([
          formatDisplayValue(values[0], false, isEditing[0]),
          formatDisplayValue(values[1], true, isEditing[1]),
        ]);
      }, [values, isEditing]);

    const formatDisplayValue = (value: any, isMax = false, isEditing = false) => {
        if (!isEditing) {
            if (isMax && value > 1000) return '$1,000+';
            if (value === 1000) return '$1,000+';
        }
        return `$${value.toLocaleString()}`;
    };

    const parseInput = (value: any) => {
        const numeric = value.replace(/[^\d]/g, '');
        return numeric ? parseInt(numeric, 10) : '';
    };

    const handleInputChange = (index: any, rawValue: any) => {
        const parsed = parseInput(rawValue);

        // Update input visually
        setInputs((prev) => {
            const updated = [...prev];
            updated[index] = rawValue;
            return updated;
        });

        if (parsed === '') return;

        let clamped = Math.max(0, parsed);

        // Cap max input to 1000
        if (index === 1) clamped = Math.min(clamped, 1000);

        // Prevent min > max and max < min
        if (index === 0 && clamped > values[1]) return;
        if (index === 1 && clamped < values[0]) return;

        const newValues = [...values];
        newValues[index] = clamped;
        setValues(newValues as [number, number]);
    };
    
    const handleInputFocus = (index: any) => {
    setIsEditing((prev) => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
    });
    };
    
    const handleInputBlur = (index: any) => {
    setIsEditing((prev) => {
        const updated = [...prev];
        updated[index] = false;
        return updated;
    });

    const parsed = parseInput(inputs[index]);
    let clamped = Math.max(0, parsed || 0);

    if (index === 1) clamped = Math.min(clamped, 1000);

    const newValues: [number, number] = [values[0], clamped];
    newValues[index] = clamped;
    setValues(newValues as [number, number]);
    };

    const [isVisibleSearch, setIsVisibleSearch] = useState(window.innerWidth >= 768);
    const [isVisibleFilter, setIsVisibleFilter] = useState(window.innerWidth >= 768);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
          const isNowMobile = window.innerWidth < 768;
          setIsMobile(isNowMobile);
          setIsVisibleSearch(!isNowMobile); // true on large screens, false on small screens
          setIsVisibleFilter(!isNowMobile); // true on large screens, false on small screens
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const handleFilterClose = () => {
        setIsVisibleFilter(false);
        document.body.classList.remove('overflow-hidden');
    }

    const handleFilterToggle = () => {
        setIsVisibleFilter(true)
        document.body.classList.add('overflow-hidden');
    }
    
    return (
        <>
            <Header />
            <div className="2xl:w-[1432px] xl:w-7xl lg:w-5xl w-auto px-4 mx-auto relative -mt-15">
                {isMobile && !isVisibleSearch && (
                    <div className="flex justify-between rounded-md shadow-[0_0_25px_rgba(0,0,0,0.25)] bg-white p-5 text-black relative z-20">
                        <div className="pr-3">        
                                <div onClick={() => setIsVisibleSearch(true)} className="border border-gray-300 p-3 rounded-md cursor-pointer">
                                    <p className="font-semibold text-lg">South Tower Building</p>
                                    <p className="text-sm inline-block text-gray-500 pr-5">{dateStartText} - {dateEndText}</p><p className="inline-block leading-0">&bull;</p><p className="text-sm inline-block text-gray-500 pl-5">4 Rooms</p>
                                </div>
                        </div>
                        <div className="pl-3 flex items-center">
                            <div onClick={handleFilterToggle} className="border border-gray-300 p-3 rounded-md flex items-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="mr-3" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>
                                </svg>
                                Filters & Sort
                            </div>
                        </div>
                    </div>
                )}
                {isVisibleSearch && (
                <div className="flex flex-col md:flex-row justify-between rounded-md shadow-[0_0_25px_rgba(0,0,0,0.25)] bg-white py-5 px-3 text-black relative z-20">
                        <div className="px-2 flex grow flex-col pb-1 mb-2 md:mb-0">
                            <div className="border border-gray-300 rounded-md p-2 pt-0">
                                <label htmlFor="checkIn" className="pt-2 text-gray-400 block">Check - in</label>
                                {/* <input id="checkIn" value={"Mon 10/05/2020"} className="focus:outline-0 font-bold w-full" type="text" /> */}
                                <DatePicker
                                    dateFormat="EEE MM/dd/yyyy"
                                    selected={startDate}
                                    selectsStart
                                    id="checkIn"
                                    startDate={startDate}
                                    endDate={endDate}
                                    className="focus:outline-0 font-bold w-full"
                                    onChange={handleDateChange}
                                    popperPlacement="bottom-start"
                                    renderDayContents={(day) => <span>{day}</span>}
                                />
                            </div>
                        </div>
                        <div className="px-2 flex grow flex-col pb-1 mb-2 md:mb-0">
                            <div className="border border-gray-300 rounded-md p-2 pt-0">
                                <label htmlFor="checkOut" className="pt-2 text-gray-400 block">Check - Out</label>
                                {/* <input id="checkOut" value={"Wed 10/07/2020"} className="focus:outline-0 font-bold w-full" type="text" /> */}
                                <DatePicker
                                    dateFormat="EEE MM/dd/yyyy"
                                    selected={endDate}
                                    selectsEnd
                                    id="checkOut"
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    className="focus:outline-0 font-bold w-full"
                                    onChange={handleEndDateChange}
                                    popperPlacement="bottom-start"
                                    renderDayContents={(day) => <span>{day}</span>}
                                />
                            </div>
                        </div>
                        <div className="px-2 flex grow flex-col pb-1 mb-2 md:mb-0">
                            <div className="border border-gray-300 rounded-md p-2 pt-0">
                                <label htmlFor="rooms" className="pt-2 text-gray-400 block">Number of Rooms</label>
                                <select id="rooms" className="focus:outline-0 font-bold w-full">
                                    <option value={1}>1 Rooms</option>
                                    <option value={2}>2 Rooms</option>
                                    <option value={3}>3 Rooms</option>
                                    <option value={4}>4 Rooms</option>
                                    <option value={5}>5 Rooms</option>
                                </select>
                            </div>
                        </div>
                        <div className="px-2 flex grow flex-col pb-1 mb-2 md:mb-0">
                            <button className="p-3 h-full bg-blue-950 rounded-md text-white cursor-pointer">Search</button>
                        </div>
                        <div className="md:hidden px-2 flex grow flex-col pb-1">
                            <button className="hover:bg-blue-50 p-3 cursor-pointer" onClick={() => setIsVisibleSearch(false)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="2xl:w-[1432px] xl:w-7xl lg:w-5xl w-auto px-4 mt-5 mx-auto">
                <div className="flex">
                    <div className="xl:w-9/12 md:w-8/12 w-full px-5">
                        <div className="flex -ml-5 flex-wrap justify-between xl:flex-row flex-col -mr-5 md:-mr-0">
                            {data.map((hotel, index) => (
                                <div key={index} className="xl:pr-7 xl:w-[50%] pb-5">
                                    <div className="border relative border-gray-200 flex flex-row xl:flex-col rounded-2xl overflow-hidden h-full">
                                        <a href="#" className="absolute left-0 top-0 w-full h-full"></a>
                                        <div className="relative rounded-2xl w-4/12 xl:w-auto overflow-hidden">
                                            <img src={hotel.img} alt="Hotel" className="w-full object-cover min-h-full xl:min-h-[320px]" />
                                        </div>
                                        <div className="p-3 xl:grow xl:shrink w-8/12 xl:w-auto flex flex-col">
                                            <h4 className="text-xl font-bold leading-6">{hotel.title}</h4>
                                            <p className="text-gray-500 text-sm">{hotel.distance} mi from {hotel["distance-from"]}</p>
                                            <ul className="flex flex-wrap pt-3 pb-2">
                                                {hotel.aminities.map((aminity, aminityIndex) => (
                                                    <li key={aminityIndex} className="flex me-7 text-gray-500">
                                                        {aminity.icon}
                                                        {aminity.label}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex justify-between xl:mt-auto items-center">
                                                <div className="">
                                                    <span className="inline-block p-1 px-2 border border-gray-200 leading-none rounded-sm">{hotel.star} <span className="text-amber-300 pl-1">★</span></span>
                                                </div>
                                                <div className="">
                                                    <span className="">${hotel.rate} <small className="font-light">Nightly</small></span>
                                                    <strong className="block">${Number(hotel.rate)*3} Total</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {isVisibleFilter && (
                        <div className="xl:w-3/12 md:w-4/12 fixed md:static top-0 left-0 w-full h-full z-20 bg-white">
                            <div className="border border-gray-100 rounded-md bg-white px-4 py-3">
                                <div className="header flex justify-between border-b-gray-200 pt-1 pb-3 border-b">
                                    <div className="flex items-center">
                                        <span className="cursor-pointer md:hidden mr-4" onClick={handleFilterClose}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                            </svg>
                                        </span>
                                        <strong>
                                            Filters
                                        </strong>
                                    </div>
                                    <a href="#">Clear all filter (3)</a>
                                </div>
                                <div className="bg-gray-100 -mx-4 px-4 -mb-4 pb-4">
                                    <label htmlFor="roomType" className="pt-2 text-gray-900 block pb-1">Room Type</label>
                                    <ul className="flex flex-wrap px-3 -mx-4">
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="room-type-1" name="room-type" value="room-type-1" className="hidden peer" required />
                                            <label htmlFor="room-type-1" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                <div className="block">
                                                    <div className="w-full">Type 1</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="room-type-2" name="room-type" value="room-type-2" className="hidden peer" />
                                            <label htmlFor="room-type-2" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">Type 2</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="room-type-3" name="room-type" value="room-type-3" className="hidden peer" />
                                            <label htmlFor="room-type-3" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">Type 3</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="room-type-4" name="room-type" value="room-type-4" className="hidden peer" />
                                            <label htmlFor="room-type-4" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">Type 4</div>
                                                </div>
                                            </label>
                                        </li>
                                    </ul>
                                    <hr className="border-gray-200 my-3" />
                                    <label htmlFor="aminities" className="pt-2 text-gray-900 block pb-1">Aminities</label>
                                    <ul className="flex flex-wrap px-3 -mx-4">
                                        <li className="px-1 mb-1">
                                            <input type="checkbox" id="pool" name="aminities" value="pool" className="hidden peer" required />
                                            <label htmlFor="pool" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                <div className="block">
                                                    <div className="w-full flex">
                                                        <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fillRule="evenodd" d="M15 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" clipRule="evenodd"></path><path d="M5.5 6a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h.6a8 8 0 0 1 5.658 2.343l5.162 5.162a.5.5 0 0 1-.111.79l-.91.506a.5.5 0 0 1-.596-.084L12 9.414l-3.303 3.303a.5.5 0 0 1-.596.084l-.91-.505a.5.5 0 0 1-.11-.79L10.586 8l-.243-.243A6 6 0 0 0 6.101 6h-.6zM5 15.5c-.146 0-.29.04-.414.115l-1.214.728a4.61 4.61 0 0 1-1.873.63c-.274.03-.499-.197-.499-.473v-1c0-.276.226-.495.497-.548.297-.057.584-.167.846-.324l1.214-.728a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.214.728c.262.157.549.267.846.324.271.053.497.272.497.548v1c0 .276-.224.503-.499.473a4.61 4.61 0 0 1-1.873-.63l-1.214-.728a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985A.806.806 0 0 0 5 15.5zM5 20c-.146 0-.29.04-.414.115l-1.214.728a4.61 4.61 0 0 1-1.873.63C1.225 21.503 1 21.276 1 21v-1c0-.276.226-.495.497-.548.297-.057.584-.167.846-.324l1.214-.728a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.214.728c.262.157.549.267.846.324.271.053.497.272.497.548v1c0 .276-.224.503-.499.473a4.61 4.61 0 0 1-1.873-.63l-1.214-.728a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985A.806.806 0 0 0 5 20z"></path></svg>
                                                        Pool
                                                    </div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="checkbox" id="wifi" name="aminities" value="wifi" className="hidden peer" />
                                            <label htmlFor="wifi" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full flex">
                                                    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M22.86 8.991a.484.484 0 0 0-.008-.692A15.792 15.792 0 0 0 12 4 15.792 15.792 0 0 0 1.148 8.298a.484.484 0 0 0-.008.693l.696.705a.51.51 0 0 0 .71.008A13.818 13.818 0 0 1 12 5.981c3.654 0 6.978 1.413 9.455 3.723a.51.51 0 0 0 .709-.008l.695-.705zm-4.175 4.229a.477.477 0 0 0-.009-.689A9.868 9.868 0 0 0 12 9.943c-2.572 0-4.915.98-6.676 2.588-.2.183-.2.495-.01.688l.695.704a.52.52 0 0 0 .716.011A7.894 7.894 0 0 1 12 11.924c2.025 0 3.874.76 5.275 2.01a.52.52 0 0 0 .715-.01l.695-.705zm-4.17 4.223c.189-.19.192-.5-.016-.67a3.945 3.945 0 0 0-2.5-.888c-.947 0-1.816.333-2.498.888-.208.17-.205.479-.016.67l2.163 2.19c.194.197.51.197.705 0l2.162-2.19z"></path></svg>
                                                        Wifi
                                                    </div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="checkbox" id="gym" name="aminities" value="gym" className="hidden peer" />
                                            <label htmlFor="gym" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full flex">
                                                    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M6 5a1 1 0 0 1 2 0v6h8V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-6H8v6a1 1 0 1 1-2 0V5zm-3 8H1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H3V8a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0v-3zm20-1.5a.5.5 0 0 0-.5-.5H21V8a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-3h1.5a.5.5 0 0 0 .5-.5v-1z"></path></svg>
                                                        Gym
                                                    </div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="checkbox" id="spa" name="aminities" value="spa" className="hidden peer" />
                                            <label htmlFor="spa" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full flex">
                                                    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fillRule="evenodd" d="M12.683 2.27a1 1 0 0 0-1.366 0c-2.382 2.224-3.79 5.057-4.195 7.993A10.952 10.952 0 0 0 2 9a1 1 0 0 0-1 1c0 6.075 4.925 11 11 11s11-4.925 11-11a1 1 0 0 0-1-1c-1.85 0-3.593.456-5.122 1.263-.405-2.936-1.813-5.769-4.195-7.994zm2.305 9.254C14.868 8.99 13.872 6.472 12 4.421c-1.872 2.05-2.868 4.568-2.988 7.103A11.039 11.039 0 0 1 12 15.411a11.039 11.039 0 0 1 2.988-3.887zm-4.05 7.414a9.004 9.004 0 0 1-7.876-7.876 9.004 9.004 0 0 1 7.876 7.876zm10-7.876a9.004 9.004 0 0 1-7.876 7.876 9.004 9.004 0 0 1 7.876-7.876z" clipRule="evenodd"></path></svg>
                                                        Spa
                                                    </div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="checkbox" id="pet-friendly" name="aminities" value="pet-friendly" className="hidden peer" />
                                            <label htmlFor="pet-friendly" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full flex">
                                                        <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fillRule="evenodd" d="M12.5 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-.328 16H8.829a3.828 3.828 0 0 1-2.707-6.535l3.05-3.05a4 4 0 0 1 5.657 0l3.05 3.05A3.828 3.828 0 0 1 15.172 21zm-6.343-2h6.343a1.828 1.828 0 0 0 1.293-3.121l-3.05-3.05a2 2 0 0 0-2.829 0l-3.05 3.05A1.828 1.828 0 0 0 8.829 19zM20.5 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-19 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-7a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" clipRule="evenodd"></path></svg>
                                                        Pet friendly
                                                    </div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="checkbox" id="ev-charging-station" name="aminities" value="ev-charging-station" className="hidden peer" />
                                            <label htmlFor="ev-charging-station" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full flex">
                                                    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fillRule="evenodd" d="M18.06 3.146a.5.5 0 0 0-.706 0l-.708.708a.5.5 0 0 0 0 .707L18 5.914v2.258a2 2 0 0 0 .586 1.414L20 11v7a1 1 0 1 1-2 0v-3a3 3 0 0 0-3-3h-1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6h1a1 1 0 0 1 1 1v3a3 3 0 1 0 6 0V7.5a1 1 0 0 0-.293-.707l-3.646-3.647zM4 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v13H4V6zm5 2.667V11h1.25a.75.75 0 0 1 .6 1.2L8.2 15.733a.667.667 0 0 1-1.2-.4V13H5.75a.75.75 0 0 1-.6-1.2L7.8 8.267a.667.667 0 0 1 1.2.4z" clipRule="evenodd"></path></svg>
                                                        Electric car charging station
                                                    </div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="checkbox" id="ev-charging-station" name="aminities" value="ev-charging-station" className="hidden peer" />
                                            <label htmlFor="ev-charging-station" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full flex">
                                                        <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fillRule="evenodd" d="M20 4.428c0-1.412-1.613-2.219-2.743-1.371A8.143 8.143 0 0 0 14 9.57V14a3 3 0 0 0 3 3h1v3.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V4.428zm-2 .608a6.143 6.143 0 0 0-2 4.535V14a1 1 0 0 0 1 1h1V5.036z" clipRule="evenodd"></path><path d="M4.347 3a.5.5 0 0 0-.497.45l-.515 5.152A4 4 0 0 0 7 12.988V20.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7.512a4 4 0 0 0 3.665-4.386L12.15 3.45a.5.5 0 0 0-.498-.45h-1.005a.5.5 0 0 0-.497.55l.525 5.25a2 2 0 0 1-1.99 2.2h-1.37a2 2 0 0 1-1.99-2.2l.525-5.25A.5.5 0 0 0 5.352 3H4.347z"></path><path d="M7 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"></path></svg>
                                                        Restaurant
                                                    </div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="checkbox" id="ev-charging-station" name="aminities" value="ev-charging-station" className="hidden peer" />
                                            <label htmlFor="ev-charging-station" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full flex">
                                                        <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path><path fillRule="evenodd" d="M8 14a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4-2a2 2 0 0 0-1.414 3.414l2.828-2.828A1.994 1.994 0 0 0 12 12z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7z" clipRule="evenodd"></path></svg>
                                                        Washer and dryer
                                                    </div>
                                                </div>
                                            </label>
                                        </li>
                                    </ul>
                                    <hr className="border-gray-200 my-3" />
                                    <label htmlFor="price-range" className="pt-2 text-gray-900 block pb-1">Price Range</label>
                                    <RangeSlider
                                        min={0}
                                        max={1000}
                                        value={values}
                                        onInput={(val) => setValues(val as [number, number])}
                                    />
                                    <div className="flex px-2 -mx-4 mb-3">
                                        <div className="px-2">
                                            <div className="border border-gray-400 rounded-md pt-1 bg-white">
                                                <label className="pl-3 block text-sm" htmlFor="min-value">Min</label>
                                                <input
                                                    id="min-value"
                                                    type="text"
                                                    value={inputs[0]}
                                                    onFocus={() => handleInputFocus(0)}
                                                    onBlur={() => handleInputBlur(0)}
                                                    onChange={(e) => handleInputChange(0, e.target.value)}
                                                    className="w-full pb-1 px-3 focus:outline-0"
                                                />
                                            </div>
                                        </div>
                                        <div className="px-2">
                                            <div className="border border-gray-400 rounded-md pt-1 bg-white">
                                                <label className="pl-3 block text-sm" htmlFor="max-value">Max</label>
                                                <input
                                                    id="max-value"
                                                    type="text"
                                                    value={inputs[1]}
                                                    onFocus={() => handleInputFocus(1)}
                                                    onBlur={() => handleInputBlur(1)}
                                                    onChange={(e) => handleInputChange(1, e.target.value)}
                                                    className="w-full pb-1 px-3 focus:outline-0"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="border-gray-200 my-3" />
                                    <label htmlFor="price-range" className="pt-2 text-gray-900 block pb-1">Star Rating</label>
                                    <ul className="flex flex-wrap px-3 -mx-4">
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="5-star" name="star-rating" value="5-star" className="hidden peer" required />
                                            <label htmlFor="5-star" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                <div className="block">
                                                    <div className="w-full">5 ★</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="4-star" name="star-rating" value="4-star" className="hidden peer" />
                                            <label htmlFor="4-star" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">4 ★</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="3-star" name="star-rating" value="3-star" className="hidden peer" />
                                            <label htmlFor="3-star" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">3 ★</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="2-star" name="star-rating" value="2-star" className="hidden peer" />
                                            <label htmlFor="2-star" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">2 ★</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="1-star" name="star-rating" value="1-star" className="hidden peer" />
                                            <label htmlFor="1-star" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">1 ★</div>
                                                </div>
                                            </label>
                                        </li>
                                    </ul>
                                    <hr className="border-gray-200 my-3" />
                                    <label htmlFor="price-range" className="pt-2 text-gray-900 block pb-1">Distance to Venue(s)</label>
                                    <ul className="flex flex-wrap px-3 -mx-4">
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="1-10-miles" name="distance-value" value="1-10-miles" className="hidden peer" required />
                                            <label htmlFor="1-10-miles" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                <div className="block">
                                                    <div className="w-full">1 - 10 Miles</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="10-20-miles" name="distance-value" value="10-20-miles" className="hidden peer" />
                                            <label htmlFor="10-20-miles" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">10 - 20 Miles</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">        
                                            <input type="radio" id="20-30-miles" name="distance-value" value="20-30-miles" className="hidden peer" />
                                            <label htmlFor="20-30-miles" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">20 - 30 Miles</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="30-40-miles" name="distance-value" value="30-40-miles" className="hidden peer" />
                                            <label htmlFor="30-40-miles" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">30 - 40 Miles</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="40-50-miles" name="distance-value" value="40-50-miles" className="hidden peer" />
                                            <label htmlFor="40-50-miles" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">40 - 50 Miles</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="50-miles" name="distance-value" value="50-miles" className="hidden peer" />
                                            <label htmlFor="50-miles" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">50+ Miles</div>
                                                </div>
                                            </label>
                                        </li>
                                    </ul>
                                    <hr className="border-gray-200 my-3" />
                                    <label htmlFor="price-range" className="pt-2 text-gray-900 block pb-1">Hotel Brand</label>
                                    <ul className="flex flex-wrap px-3 -mx-4">
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="1-10-miles" name="distance-value" value="1-10-miles" className="hidden peer" required />
                                            <label htmlFor="1-10-miles" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                                <div className="block">
                                                    <div className="w-full">Hotel Brand 1</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="10-20-miles" name="distance-value" value="10-20-miles" className="hidden peer" />
                                            <label htmlFor="10-20-miles" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">Hotel Brand 2</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">        
                                            <input type="radio" id="20-30-miles" name="distance-value" value="20-30-miles" className="hidden peer" />
                                            <label htmlFor="20-30-miles" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">Hotel Brand 3</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="30-40-miles" name="distance-value" value="30-40-miles" className="hidden peer" />
                                            <label htmlFor="30-40-miles" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">Hotel Brand 4</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li className="px-1 mb-1">
                                            <input type="radio" id="40-50-miles" name="distance-value" value="40-50-miles" className="hidden peer" />
                                            <label htmlFor="40-50-miles" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full">Hotel Brand 5</div>
                                                </div>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="p-3 absolute bottom-0 w-full flex border-t border-gray-300">
                                <button className="ml-auto px-4 py-2 bg-blue-950 text-white rounded-l-full rounded-r-full cursor-pointer" onClick={handleFilterClose}>Done</button>
                            </div>
                        </div>
                    )}
                </div>     
            </div>
            <Footer/>
        </>
    )
}

export default Home; 