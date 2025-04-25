import { useState, useEffect } from 'react';
import NavSidebar from '../components/NavSidebar';
import TopBar from '../components/TopBar';
import VolleyballImg from "../assets/volleyball.jpg"
import SportLogo from "../assets/national-championships.png"
import { Link } from 'react-router-dom';
import HotelImage from "../assets/hotel-1.avif"
import HotelImage2 from "../assets/hotel-2.avif"
import HotelImage3 from "../assets/hotel-3.avif"
import HotelImage4 from "../assets/hotel-4.avif"
import HotelImage5 from '../assets/hotel-5.jpg'
import Map from "../assets/map.png"

const EventHotels = () => {
    const [isVisibleFilter, setIsVisibleFilter] = useState(window.innerWidth >= 768);
    const [isVisibleMobileNav, setIsVisibleMobileNav] = useState(false);
    const [isVisibleSearch, setIsVisibleSearch] = useState(window.innerWidth >= 768);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isVisibleMap, setIsVisibleMap] = useState(false);

    const date = new Date();
    date.setDate(date.getDate() + 7);


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
        {"title": "Hilton Grand Vacations Club on the Las Vegas Strip", "img" : HotelImage5, "distance" : "1", "distance-from" : "South Tower Building", "aminities": [{label: "pool", icon: poolIcon}], "star": "4.1", "rate": "139"}
    ]


    const [sortValue, setSortValue] = useState('price-low-high');

    const handleSortChange = (e: any) => {
        setSortValue(e.target.value);
    }

    // const [dateStartText, setDateStartText] = useState(`${formatDate(startDate)}`);
    // const [dateEndText, setDateEndText] = useState(`${formatDate(endDate)}`);

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
    

    // const formatDate = (date: any) =>
    //     date.toLocaleDateString("en-US", {
    //       month: "short",
    //       day: "2-digit",
    // });


    const handleFilterClose = () => {
        setIsVisibleFilter(false);
        setFilterPopup(false);
        document.body.classList.remove('overflow-hidden');
    }

    const handleCloseMap = () => {
        setIsVisibleMap(false)
        document.body.classList.remove('overflow-hidden');
    }

    const handleFilterToggle = () => {
        setIsVisibleFilter(true)
        document.body.classList.add('overflow-hidden');
    }

    const handleMap = () => {
        setIsVisibleMap(true);
        document.body.classList.add('overflow-hidden');
    }

    const [isPopupVisible, setPopupVisible] = useState(true);
    const[filterPopup, setFilterPopup] = useState(false);

    
    return (
        <div className="flex h-full">
            <NavSidebar isVisibleMobileNav={isVisibleMobileNav} />
            <div className={`xl:w-10/12 lg:w-9/12 md:w-9/12 sm:w-full flex transition-all duration-300 ease-in-out z-10 flex-col ${isVisibleMobileNav ? 'translate-x-4/12 md:translate-x-0' : ''} ${isVisibleFilter ? 'xl:translate-x-px lg:translate-x-px md:translate-x-px sm:translate-x-px' : ''}`}>
                <TopBar
                    isVisibleFilter={isVisibleFilter}
                    setIsVisibleFilter={setIsVisibleFilter}
                    isVisibleMobileNav={isVisibleMobileNav}
                    setIsVisibleMobileNav={setIsVisibleMobileNav}
                />
                <div className="grow overflow-auto bg-slate-100 p-4 relative">
                    <ul className='flex pt-2 pb-5 text-gray-500'>
                        <li className='me-2'><Link to="/event" className='text-blue-900'>Events</Link></li>
                        <li className='px-2'>/</li>
                        <li className='ps-2'><Link to="/event-detail" className='text-blue-900'>Volleyball National Championship</Link></li>
                        <li className='px-2'>/</li>
                        <li className='ps-2'>Manage allocated hotels</li>
                    </ul>
                    <div className="bg-no-repeat bg-cover bg-center px-7 py-15 pb-25 relative -mx-4 after:bg-linear-to-t after:from-zinc-950 after:from-natural-900 after:content-[''] after:top-0 after:left-0 after:h-full after:w-full after:absolute" style={{backgroundImage: `url(${VolleyballImg})`}}>
                    {/* <div className="bg-white p-5 rounded-md"> */}
                        <div className='flex relative items-center z-10'>
                            <img src={SportLogo} alt='Volleyball National Championship' className='w-30' />
                            <div className='text-white pl-10'>
                                <h2 className='font-bold text-3xl mb-2'>Volleyball National Championship</h2>
                                <ul className='flex -mx-3'>
                                    <li className='text-sm font-light px-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className='inline-block align-text-top mr-1.5' viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                        </svg>
                                        Boston, MA
                                    </li>
                                    <li className='text-sm font-light px-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className='inline-block align-text-top mr-1.5' viewBox="0 0 16 16">
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                        </svg>
                                        07/02/2026 - 07/10/2026
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <div className="flex justify-between pb-3">
                            {isMobile && !isVisibleSearch && (
                                <div className="pl-3 flex items-center">
                                    <div onClick={handleFilterToggle} className="border border-gray-400 p-3 rounded-md flex items-center cursor-pointer h-full sm:h-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="mr-3" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>
                                        </svg>
                                        Filters & Sort
                                    </div>
                                </div>
                            )}
                            {!isMobile && isVisibleSearch && (
                                <div className="relative">
                                    <label htmlFor='sortby'>Sort By</label>
                                    <select id='sortby' name="sort-by" value={sortValue} onChange={handleSortChange} className="border bg-white border-gray-400 p-2 pr-6 rounded-sm ml-2 appearance-none">
                                        <option value="price-low-high">Price : Low to High</option>
                                        <option value="price-high-low">Price : High to Low</option>
                                        <option value="star-rating">Star Rating</option>
                                        <option value="airport-distance">Distance from Airport</option>
                                    </select>
                                    <svg className="absolute right-1 top-2 mt-1" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M16.44 9.146a.5.5 0 0 1 .706 0l.708.708a.5.5 0 0 1 0 .707l-5.147 5.146a1 1 0 0 1-1.414 0l-5.147-5.146a.5.5 0 0 1 0-.707l.708-.708a.5.5 0 0 1 .703-.003L12 13.586l4.44-4.44z"></path></svg>
                                </div>
                            )}
                            <button onClick={handleMap} className="border border-gray-400 p-2 rounded-sm cursor-pointer flex items-center bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                                    <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
                                </svg>
                                View On Map
                            </button>
                        </div>
                        {isVisibleMap && (
                            <>
                                <div className="fixed top-0 left-0 w-full h-full z-20">
                                    <div className="absolute p-3 bg-white w-full flex justify-between">
                                        <div className="flex items-center">
                                            <i className="p-2 hover:bg-blue-50 rounded-full cursor-pointer mr-2 text-blue-600" onClick={handleCloseMap}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                                </svg>
                                            </i>
                                            California, United States of America
                                        </div>
                                    </div>
                                    <div className={`bg-gray-500/50 fixed left-0 top-0 w-full h-full ${filterPopup ? '' : 'hidden'}`}  onClick={handleFilterClose}></div>
                                    <img src={Map} alt="map" className="h-full w-full object-cover" />
                                </div>
                                {isPopupVisible && (
                                    <div className="fixed bottom-0 left-0 w-full z-20 p-4">
                                        <div className="max-w-3xl mx-auto border relative border-gray-200 rounded-2xl overflow-hidden flex bg-white">
                                            <div className="relative rounded-2xl w-4/12 overflow-hidden">
                                                <img alt="Hotel" className="w-full object-cover min-h-full" src={HotelImage} />
                                            </div>
                                            <div className="p-3 xl:grow xl:shrink w-8/12 flex flex-col">
                                                <span className="absolute right-1 top-1 p-3 hover:bg-blue-100 cursor-pointer rounded-full" onClick={() => setPopupVisible(false)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                                    </svg>
                                                </span>
                                                <h4 className="text-md font-bold leading-6 pr-10">Sonesta Los Angeles Airport LAX</h4>
                                                <p className="text-gray-500 text-sm pr-10">0.5 mi from South Tower Building</p>
                                                <ul className="flex flex-wrap pt-3 pb-2">
                                                    <li className="flex me-7 text-gray-500 text-sm">
                                                        <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="me-1 align-text-bottom" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                            <path fill-rule="evenodd" d="M15 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" clip-rule="evenodd"></path><path d="M5.5 6a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h.6a8 8 0 0 1 5.658 2.343l5.162 5.162a.5.5 0 0 1-.111.79l-.91.506a.5.5 0 0 1-.596-.084L12 9.414l-3.303 3.303a.5.5 0 0 1-.596.084l-.91-.505a.5.5 0 0 1-.11-.79L10.586 8l-.243-.243A6 6 0 0 0 6.101 6h-.6zM5 15.5c-.146 0-.29.04-.414.115l-1.214.728a4.61 4.61 0 0 1-1.873.63c-.274.03-.499-.197-.499-.473v-1c0-.276.226-.495.497-.548.297-.057.584-.167.846-.324l1.214-.728a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.214.728c.262.157.549.267.846.324.271.053.497.272.497.548v1c0 .276-.224.503-.499.473a4.61 4.61 0 0 1-1.873-.63l-1.214-.728a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985A.806.806 0 0 0 5 15.5zM5 20c-.146 0-.29.04-.414.115l-1.214.728a4.61 4.61 0 0 1-1.873.63C1.225 21.503 1 21.276 1 21v-1c0-.276.226-.495.497-.548.297-.057.584-.167.846-.324l1.214-.728a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.214.728c.262.157.549.267.846.324.271.053.497.272.497.548v1c0 .276-.224.503-.499.473a4.61 4.61 0 0 1-1.873-.63l-1.214-.728a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985A.806.806 0 0 0 5 20z"></path>
                                                        </svg>
                                                        Pool
                                                    </li>
                                                    <li className="flex me-7 text-gray-500 text-sm">
                                                        <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="me-1 align-text-bottom" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                            <path d="M22.86 8.991a.484.484 0 0 0-.008-.692A15.792 15.792 0 0 0 12 4 15.792 15.792 0 0 0 1.148 8.298a.484.484 0 0 0-.008.693l.696.705a.51.51 0 0 0 .71.008A13.818 13.818 0 0 1 12 5.981c3.654 0 6.978 1.413 9.455 3.723a.51.51 0 0 0 .709-.008l.695-.705zm-4.175 4.229a.477.477 0 0 0-.009-.689A9.868 9.868 0 0 0 12 9.943c-2.572 0-4.915.98-6.676 2.588-.2.183-.2.495-.01.688l.695.704a.52.52 0 0 0 .716.011A7.894 7.894 0 0 1 12 11.924c2.025 0 3.874.76 5.275 2.01a.52.52 0 0 0 .715-.01l.695-.705zm-4.17 4.223c.189-.19.192-.5-.016-.67a3.945 3.945 0 0 0-2.5-.888c-.947 0-1.816.333-2.498.888-.208.17-.205.479-.016.67l2.163 2.19c.194.197.51.197.705 0l2.162-2.19z"></path>
                                                        </svg>
                                                        Wifi
                                                    </li>
                                                    <li className="flex me-7 text-gray-500 text-sm">
                                                        <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="me-1 align-text-bottom" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                            <path d="M6 5a1 1 0 0 1 2 0v6h8V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-6H8v6a1 1 0 1 1-2 0V5zm-3 8H1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H3V8a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0v-3zm20-1.5a.5.5 0 0 0-.5-.5H21V8a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-3h1.5a.5.5 0 0 0 .5-.5v-1z"></path>
                                                        </svg>
                                                        Gym
                                                    </li>
                                                </ul>
                                                <div className="flex justify-between mt-auto items-center">
                                                    <div className="">
                                                        <span className="inline-block p-1 px-2 border border-gray-200 leading-none rounded-sm">4.5 <span className="text-amber-300 pl-1">★</span></span>
                                                    </div>
                                                    <div className="">
                                                        <span className="">$178 <small className="font-light">Nightly</small></span><strong className="block">$534 Total</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>

                        )}
                        <div className="flex">
                            <div className="w-full px-5">
                                <div className="flex bg-white rounded-md xl:flex-wrap xl:flex-row flex-col py-5 px-5 xl:px-0 -ml-5 -mr-5">
                                    {data.map((hotel, index) => (
                                        <div key={index} className="xl:px-5 xl:w-[33.33%] pb-5">
                                            <div className="border relative border-gray-200 flex flex-row xl:flex-col rounded-2xl overflow-hidden h-full">
                                                <a href="#" className="absolute left-0 top-0 w-full h-full"></a>
                                                <div className="relative rounded-2xl w-4/12 xl:w-auto overflow-hidden">
                                                    <img src={hotel.img} alt="Hotel" className="w-full object-cover xl:h-[320px] h-full" />
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
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventHotels;
