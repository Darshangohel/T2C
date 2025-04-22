import { useEffect, useRef, useState } from "react";
import Logo from "../assets/logo-dark.png"
import { Link } from "react-router-dom";
import TravelLogo from "../assets/travel-logo.png"
import LogoWallyBall from "../assets/national-championships.png"
import asaLogo from "../assets/asa-logo.png"
import weddingLogo from "../assets/wedding-festival.png"

const Event = () => {

    const poolIcon = (<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fillRule="evenodd" d="M15 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" clipRule="evenodd"></path><path d="M5.5 6a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h.6a8 8 0 0 1 5.658 2.343l5.162 5.162a.5.5 0 0 1-.111.79l-.91.506a.5.5 0 0 1-.596-.084L12 9.414l-3.303 3.303a.5.5 0 0 1-.596.084l-.91-.505a.5.5 0 0 1-.11-.79L10.586 8l-.243-.243A6 6 0 0 0 6.101 6h-.6zM5 15.5c-.146 0-.29.04-.414.115l-1.214.728a4.61 4.61 0 0 1-1.873.63c-.274.03-.499-.197-.499-.473v-1c0-.276.226-.495.497-.548.297-.057.584-.167.846-.324l1.214-.728a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.214.728c.262.157.549.267.846.324.271.053.497.272.497.548v1c0 .276-.224.503-.499.473a4.61 4.61 0 0 1-1.873-.63l-1.214-.728a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985A.806.806 0 0 0 5 15.5zM5 20c-.146 0-.29.04-.414.115l-1.214.728a4.61 4.61 0 0 1-1.873.63C1.225 21.503 1 21.276 1 21v-1c0-.276.226-.495.497-.548.297-.057.584-.167.846-.324l1.214-.728a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.643.985a.806.806 0 0 0 .828 0l1.643-.985a2.805 2.805 0 0 1 2.886 0l1.214.728c.262.157.549.267.846.324.271.053.497.272.497.548v1c0 .276-.224.503-.499.473a4.61 4.61 0 0 1-1.873-.63l-1.214-.728a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985a.806.806 0 0 0-.828 0l-1.643.985a2.805 2.805 0 0 1-2.886 0l-1.643-.985A.806.806 0 0 0 5 20z"></path></svg>);
    const wifiIcon = (<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M22.86 8.991a.484.484 0 0 0-.008-.692A15.792 15.792 0 0 0 12 4 15.792 15.792 0 0 0 1.148 8.298a.484.484 0 0 0-.008.693l.696.705a.51.51 0 0 0 .71.008A13.818 13.818 0 0 1 12 5.981c3.654 0 6.978 1.413 9.455 3.723a.51.51 0 0 0 .709-.008l.695-.705zm-4.175 4.229a.477.477 0 0 0-.009-.689A9.868 9.868 0 0 0 12 9.943c-2.572 0-4.915.98-6.676 2.588-.2.183-.2.495-.01.688l.695.704a.52.52 0 0 0 .716.011A7.894 7.894 0 0 1 12 11.924c2.025 0 3.874.76 5.275 2.01a.52.52 0 0 0 .715-.01l.695-.705zm-4.17 4.223c.189-.19.192-.5-.016-.67a3.945 3.945 0 0 0-2.5-.888c-.947 0-1.816.333-2.498.888-.208.17-.205.479-.016.67l2.163 2.19c.194.197.51.197.705 0l2.162-2.19z"></path></svg>);
    const gymIcon = (<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M6 5a1 1 0 0 1 2 0v6h8V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-6H8v6a1 1 0 1 1-2 0V5zm-3 8H1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H3V8a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0v-3zm20-1.5a.5.5 0 0 0-.5-.5H21V8a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-3h1.5a.5.5 0 0 0 .5-.5v-1z"></path></svg>);
    const spaIcon = (<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fillRule="evenodd" d="M12.683 2.27a1 1 0 0 0-1.366 0c-2.382 2.224-3.79 5.057-4.195 7.993A10.952 10.952 0 0 0 2 9a1 1 0 0 0-1 1c0 6.075 4.925 11 11 11s11-4.925 11-11a1 1 0 0 0-1-1c-1.85 0-3.593.456-5.122 1.263-.405-2.936-1.813-5.769-4.195-7.994zm2.305 9.254C14.868 8.99 13.872 6.472 12 4.421c-1.872 2.05-2.868 4.568-2.988 7.103A11.039 11.039 0 0 1 12 15.411a11.039 11.039 0 0 1 2.988-3.887zm-4.05 7.414a9.004 9.004 0 0 1-7.876-7.876 9.004 9.004 0 0 1 7.876 7.876zm10-7.876a9.004 9.004 0 0 1-7.876 7.876 9.004 9.004 0 0 1 7.876-7.876z" clipRule="evenodd"></path></svg>);
    const petFriendlyIcon = (<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fillRule="evenodd" d="M12.5 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-.328 16H8.829a3.828 3.828 0 0 1-2.707-6.535l3.05-3.05a4 4 0 0 1 5.657 0l3.05 3.05A3.828 3.828 0 0 1 15.172 21zm-6.343-2h6.343a1.828 1.828 0 0 0 1.293-3.121l-3.05-3.05a2 2 0 0 0-2.829 0l-3.05 3.05A1.828 1.828 0 0 0 8.829 19zM20.5 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-19 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-7a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" clipRule="evenodd"></path></svg>);
    const evChargingIcon = (<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fillRule="evenodd" d="M18.06 3.146a.5.5 0 0 0-.706 0l-.708.708a.5.5 0 0 0 0 .707L18 5.914v2.258a2 2 0 0 0 .586 1.414L20 11v7a1 1 0 1 1-2 0v-3a3 3 0 0 0-3-3h-1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6h1a1 1 0 0 1 1 1v3a3 3 0 1 0 6 0V7.5a1 1 0 0 0-.293-.707l-3.646-3.647zM4 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v13H4V6zm5 2.667V11h1.25a.75.75 0 0 1 .6 1.2L8.2 15.733a.667.667 0 0 1-1.2-.4V13H5.75a.75.75 0 0 1-.6-1.2L7.8 8.267a.667.667 0 0 1 1.2.4z" clipRule="evenodd"></path></svg>);
    const restaurantIcon = (<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fillRule="evenodd" d="M20 4.428c0-1.412-1.613-2.219-2.743-1.371A8.143 8.143 0 0 0 14 9.57V14a3 3 0 0 0 3 3h1v3.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V4.428zm-2 .608a6.143 6.143 0 0 0-2 4.535V14a1 1 0 0 0 1 1h1V5.036z" clipRule="evenodd"></path><path d="M4.347 3a.5.5 0 0 0-.497.45l-.515 5.152A4 4 0 0 0 7 12.988V20.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7.512a4 4 0 0 0 3.665-4.386L12.15 3.45a.5.5 0 0 0-.498-.45h-1.005a.5.5 0 0 0-.497.55l.525 5.25a2 2 0 0 1-1.99 2.2h-1.37a2 2 0 0 1-1.99-2.2l.525-5.25A.5.5 0 0 0 5.352 3H4.347z"></path><path d="M7 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"></path></svg>);
    const washerIcon = (<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path><path fillRule="evenodd" d="M8 14a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4-2a2 2 0 0 0-1.414 3.414l2.828-2.828A1.994 1.994 0 0 0 12 12z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7z" clipRule="evenodd"></path></svg>);

    const menuItems = [{label : "Dashboard", path : "/dashboard", active: false}, {label : "Hotel", path : "/hotel", active: false}, {label : "Event", path : "/event", active: true}, {label : "Reservations", path : "#", active: false}];

    const [openDropdownId, setOpenDropdownId] = useState(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const toggleDropdown = (id: any) => {
        setOpenDropdownId(prev => (prev === id ? null : id));
    };

    useEffect(() => {
        document.body.classList.add("h-full");
        document.documentElement.classList.add("h-full");

        const root = document.querySelector("#root");
        if (root) {
        root.classList.add("h-full");
        }
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
              setOpenDropdownId(null);
              setUserDropdownOpen(false);
            }
          };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        };
    },[]);

    const [isVisibleFilter, setIsVisibleFilter] = useState(false);

    const handleFilterClick = () => {
        if(isVisibleFilter) {
            setIsVisibleFilter(false);
        } else {
            setIsVisibleFilter(true);
            setIsVisibleMobileNav(false);
        }
        document.body.classList.toggle("overflow-hidden");
    }

    // const [isVisibleMobileNav, setIsVisibleMobileNav] = useState(window.innerWidth >= 768);
    const [isVisibleMobileNav, setIsVisibleMobileNav] = useState(false);

    const handleMobileNav = () => {
        
        if(isVisibleMobileNav) {
            setIsVisibleMobileNav(false);
        } else {
            setIsVisibleMobileNav(true);
            setIsVisibleFilter(false);
        }
    }

    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    const toggleUserDropdown = () => {
        if(userDropdownOpen) {
            setUserDropdownOpen(false);
        } else {
            setUserDropdownOpen(true);
        }
    }

    const Events = [
        {id: 1, title: "Wallyball National Championship", logo: LogoWallyBall, location: "Boston, MA", date: "07/02/2025 - 07/02/2025", peak: "250", nights: "100/1,000", ind: "20/10", group: "16/20"},
        {id: 2, title: "ESA Annual Conference", logo: asaLogo, logoLight: true , location: "Boston, MA", date: "09/04/2025 - 12/04/2025", peak: "25", nights: "77/890", ind: "65/5", group: "11/20"},
        {id: 3, title: "Wedding Festival", logo: weddingLogo , location: "Boston, MA", date: "10/10/2025 - 10/12/2025", peak: "40", nights: "23/345", ind: "35/8", group: "18/20"},
        {id: 4, title: "ESA Annual Conference", logo: asaLogo, logoLight: true , location: "Boston, MA", date: "09/04/2025 - 12/04/2025", peak: "25", nights: "77/890", ind: "65/5", group: "11/20"},
        {id: 5, title: "Wedding Festival", logo: weddingLogo , location: "Boston, MA", date: "10/10/2025 - 10/12/2025", peak: "40", nights: "23/345", ind: "35/8", group: "18/20"},
        {id: 6, title: "Wallyball National Championship", logo: LogoWallyBall, location: "Boston, MA", date: "07/02/2025 - 07/02/2025", peak: "250", nights: "100/1,000", ind: "20/10", group: "16/20"},
    ];

    const aminities = [
        {label: "Pool", icon: poolIcon, id: "pool"},
        {label: "Wifi", icon: wifiIcon, id: "wifi"},
        {label: "Gym", icon: gymIcon, id: "gym"},
        {label: "Spa", icon: spaIcon, id: "spa"},
        {label: "Pet Friendly", icon: petFriendlyIcon, id: "pet-friendly"},
        {label: "Electric car charging station", icon: evChargingIcon, id: "ev-charging"},
        {label: "Restaurant", icon: restaurantIcon, id: "restaurant"},
        {label: "Washer and dryer", icon: washerIcon, id: "washer-dryer"},
    ]
    
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
                <div className={`absolute xl:left-2/12 lg:left-3/12 md:left-3/12 h-full flex-col shadow-[0px_0_15px_rgba(0,0,0,0.15)] bg-white z-10 xl:w-3/12 lg:w-3/12 md:w-4/12 sm:w-4/12 ${isVisibleFilter ? 'flex z-20' : 'z-0 hidden'}`}>
                    <div className="px-5 py-3 border-b border-gray-200 min-h-18 flex justify-between items-center">
                        <h4 className="text-xl font-bold">Filters</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cursor-pointer" onClick={() => {document.body.classList.remove("overflow-hidden"); setIsVisibleFilter(false);}} viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                    </div>
                    <div className="sm:hidden p-4">
                        <input type="text" name="search-event" className="w-full transition-all duration-300 ease-in-out border border-gray-300 rounded-md bg-white px-4 py-2" placeholder="Search.." required />
                    </div>
                    <div className="grow overflow-auto px-5 py-3">
                        <label htmlFor="aminities" className="pt-2 text-gray-900 font-semibold block pb-1">Aminities</label>
                        <ul className="flex flex-wrap px-3 -mx-5">
                            {aminities.map((aminity,index) =>
                                <li className="px-1 mb-1" key={index}>
                                    <input type="checkbox" id={aminity.id} name="aminities" value={aminity.id} className="hidden peer" required />
                                    <label htmlFor={aminity.id} className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                        <div className="block">
                                            <div className="w-full flex">
                                                {aminity.icon}
                                                {aminity.label}
                                            </div>
                                        </div>
                                    </label>
                                </li>
                            )}
                        </ul>
                        <hr className="border-gray-200 my-3" />
                    </div>
                    <div className="border-t border-gray-200 flex justify-end p-2 items-end">
                        <button className="bg-blue-900 text-white rounded-l-full rounded-r-full py-1 px-4 cursor-pointer" onClick={() => {document.body.classList.remove("overflow-hidden"); setIsVisibleFilter(false);}}>Apply</button>
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
                            <img src={TravelLogo} alt="Travel Logo" className="w-25 hidden sm:block" />
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
                    <div className="grow overflow-auto bg-slate-100 p-4 relative">
                        <div className="bg-white px-4 py-2 -mt-4 mb-4 -mx-4 sm:hidden">
                            <img src={TravelLogo} alt="Travel Logo" className="w-25 mb-4" />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center">
                                <h2 className="text-xl font-bold mt-3 sm:mt-0 absolute sm:static top-3 right-3">Events (18)</h2>
                                <button className="py-1 px-3 rounded-sm cursor-pointer bg-white border border-gray-300 ml-0 sm:ml-5" onClick={handleFilterClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block -mt-0.5 mr-3" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
                                </svg>
                                    Filter
                                </button>
                            </div>
                            <div className="grow flex justify-end self-start sm:self-center">
                                <input type="text" name="search-event" className="w-40 lg:focus:w-64 transition-all duration-300 ease-in-out border border-gray-300 rounded-md bg-white lg:valid:w-64 px-4 py-2 mr-4 hidden sm:block" placeholder="Search.." required />
                                <Link to={"/create-event"} className="py-2 px-4 rounded-sm bg-blue-950 text-white cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="inline-block -mt-0.5 mr-3">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                    </svg>
                                    New Event
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            {Events.map((event, index) => 
                                <div key={index} className="xl:w-4/12 md:w-1/2 sm:w-1/2 w-full p-3">
                                    <div className="p-5 bg-white shadow-[0_0px_15px_rgba(0,0,0,0.15)] rounded-lg relative flex flex-col h-full">
                                        <div className="absolute p-1 right-4 top-4 cursor-pointer rounded-md hover:shadow-[0_0px_7px_rgba(0,0,0,0.15)]" onClick={() => toggleDropdown(event.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                                            </svg>
                                            {openDropdownId === event.id && (
                                            <div ref={dropdownRef} className="absolute z-10 top-full rounded-md right-0 border shadow-[0_0px_7px_rgba(0,0,0,0.15)] border-gray-100 mt-1 bg-white">
                                                <ul>
                                                    <li><a href="#" className="py-2 text-gray-600 hover:bg-gray-100 block px-3">Edit/View</a></li>
                                                    <li><a href="#" className="py-2 text-gray-600 hover:bg-gray-100 block px-3">Booking Site</a></li>
                                                    <li><a href="#" className="py-2 text-gray-600 hover:bg-gray-100 block px-3">Groups</a></li>
                                                    <li><a href="#" className="py-2 text-gray-600 hover:bg-gray-100 block px-3">Reservations</a></li>
                                                </ul>
                                            </div>
                                            )}
                                        </div>
                                        <img src={event.logo} className={`h-30 self-start ${event.logoLight ? 'bg-gray-900 rounded-lg p-2' : ''}`} />
                                        <h3 className="text-xl font-bold mt-5">{event.title}</h3>
                                        <p className="text-gray-400 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block align-text-bottom mr-1" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                        </svg>
                                            {event.location}
                                        </p>
                                        <div className="my-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block" viewBox="0 0 16 16">
                                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                            </svg>
                                            <span className="text-gray-500 align-middle pl-2">{event.date}</span>
                                        </div>
                                        <div className="flex flex-wrap mt-auto">
                                            <div className="w-1/2 mb-3 text-blue-950">
                                                <span className="font-semibold">{event.peak}</span>
                                                <p className="text-gray-500">Avail on Peak</p>
                                            </div>
                                            <div className="w-1/2 mb-3 text-blue-950">
                                                <span className="font-semibold">{event.nights}</span>
                                                <p className="text-gray-500">Nights Booked</p>
                                            </div>
                                            <div className="w-1/2 mb-3 text-blue-950">
                                                <span className="font-semibold">{event.ind}</span>
                                                <p className="text-gray-500">Ind/Group</p>
                                            </div>
                                            <div className="w-1/2 mb-3 text-blue-950">
                                                <span className="font-semibold">{event.group}</span>
                                                <p className="text-gray-500">Group Pickup</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-between py-1 items-center">
                            <span className="text-gray-400">Showing 8 of 12 entries</span>
                            <ul className="flex">
                                <li className="cursor-pointer w-8 h-8 p-2 bg-white rounded-sm text-gray-500 mx-1 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                                    </svg>
                                </li>
                                <li className="cursor-pointer leading-4 w-8 h-8 p-2 bg-white font-light rounded-sm text-gray-500 text-center mx-1">
                                    1
                                </li>
                                <li className="cursor-pointer leading-4 w-8 h-8 p-2 bg-white font-light rounded-sm text-gray-500 text-center mx-1">
                                    2
                                </li>
                                <li className="cursor-pointer leading-4 w-8 h-8 p-2 bg-blue-900 font-light rounded-sm text-white text-center mx-1">
                                    3
                                </li>
                                <li className="w-8 h-8 p-2 bg-white opacity-70 rounded-sm text-gray-500 mx-1 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="bg-white">
                        <div className="p-3 border-t border-gray-200">
                            Lorem
                        </div>
                    </div> */}
                </div>
            </div>
            
        </>
    )
}

export default Event;