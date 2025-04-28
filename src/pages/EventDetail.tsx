import { useRef, useState, useEffect } from "react";
import NavSidebar from "../components/NavSidebar";
import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";
import SportLogo from "../assets/national-championships.png"
import VolleyballImg from "../assets/volleyball.jpg"
import EventHotels from "../components/EventHotels";
import EventReservations from "../components/EventReservations";

const EventDetail = () => {
    const [isVisibleFilter, setIsVisibleFilter] = useState(false);
    const [isVisibleMobileNav, setIsVisibleMobileNav] = useState(false);

    // const phaseStyles = {
    //     green: "bg-green-100 text-green-700",
    //     yellow: "bg-yellow-100 text-yellow-700",
    //     red: "bg-red-100 text-red-700",
    //     orange: "bg-orange-100 text-orange-700",
    // };

    const reservationData = [
        {name: "John Doe", bookingDateTime: "Thu 04/03/2025 4:00PM EST", bookedFor: "07/02/2025 - 07/11/2025", hotel: "Sonesta Los Angeles Airport LAX", rooms: "3", status: "Confirmed", phase: "green"},
        {name: "Max Mustermann", bookingDateTime: "Thu 04/03/2025 4:00PM EST", bookedFor: "07/02/2025 - 07/11/2025", hotel: "Hyatt Regency Los Angeles International Airport", rooms: "1", status: "Pending", phase: "yellow"},
        {name: "Joe Bloggs", bookingDateTime: "Thu 04/03/2025 4:00PM EST", bookedFor: "07/02/2025 - 07/11/2025", hotel: "Sonesta Los Angeles Airport LAX", rooms: "2", status: "Cancelled", phase: "red"},
        {name: "Jane Smith", bookingDateTime: "Thu 04/03/2025 4:00PM EST", bookedFor: "07/02/2025 - 07/11/2025", hotel: "Embassy Suites by Hilton Los Angeles International Airport North", rooms: "4", status: "Confirmed", phase: "green"},
        {name: "Fname Lname", bookingDateTime: "Thu 04/03/2025 4:00PM EST", bookedFor: "07/02/2025 - 07/11/2025", hotel: "Sonesta Los Angeles Airport LAX", rooms: "1", status: "Pending Cancellation", phase: "orange"}
    ];

    const tabs = [
        { label: "Hotels", value: "hotels" },
        { label: "Reservations", value: "reservations" },
        { label: "Venues", value: "venues" },
    ];

    const [activeTab, setActiveTab] = useState("hotels");
    const [gliderStyle, setGliderStyle] = useState({ left: 0, width: 0 });
    const containerRef = useRef(null);
    const buttonsRef = useRef<Record<string, HTMLButtonElement | null>>({});;

    const renderTabContent = () => {
        switch (activeTab) {
          case "hotels":
            return <EventHotels />;
          case "reservations":
            return <EventReservations reservationData={reservationData} />;
          case "venues":
            return(<h1>Venues</h1>);
        //     return <EventVenues />;
          default:
            return null;
        }
    };

    useEffect(() => {
        const updateGlider = () => {
          const activeButton = buttonsRef.current[activeTab];
    
          if (activeButton && containerRef.current) {
            const containerRect = (containerRef.current as HTMLElement).getBoundingClientRect();
            const buttonRect = (activeButton as HTMLElement).getBoundingClientRect();
            setGliderStyle({
              left: buttonRect.left - containerRect.left,
              width: buttonRect.width,
            });
          }
        };
    
        updateGlider();
        window.addEventListener("resize", updateGlider);
    
        return () => window.removeEventListener("resize", updateGlider);
    }, [activeTab]);


    return (
        <div className="flex h-full">
            <NavSidebar isVisibleMobileNav={isVisibleMobileNav} />
            <div className={`xl:w-10/12 lg:w-9/12 md:w-9/12 sm:w-full flex transition-all duration-300 ease-in-out z-10 flex-col ${isVisibleMobileNav ? 'translate-x-4/12 md:translate-x-0' : ''} ${isVisibleFilter ? 'xl:translate-x-3/10 lg:translate-x-4/12 md:translate-x-4/9 sm:translate-x-4/12' : ''}`}>
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
                        <li className='ps-2'>Volleyball National Championship</li>
                    </ul>
                    <div className="bg-no-repeat bg-cover bg-center mb-5 px-7 py-15 pb-25 relative -mx-4 after:bg-linear-to-t after:from-zinc-950 after:from-natural-900 after:content-[''] after:top-0 after:left-0 after:h-full after:w-full after:absolute" style={{backgroundImage: `url(${VolleyballImg})`}}>
                        <div className='flex relative items-center z-10'>
                            <img src={SportLogo} alt='Volleyball National Championship' className='w-30' />
                            <div className='text-white pl-10'>
                                {/* <span>Event</span> */}
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

                    {/* Tab Headers */}
                    <div className="inline-block p-2 bg-white rounded-full">
                        <div className="flex relative bg-white rounded-full" ref={containerRef}>
                            {tabs.map((tab) => (
                                <button
                                key={tab.value}
                                ref={(el: HTMLButtonElement | null): void => {
                                    if (el && tab.value) {
                                        buttonsRef.current = { ...buttonsRef.current, [tab.value]: el };
                                    }
                                }}
                                className={`px-4 py-2 text-sm font-medium relative z-10 cursor-pointer ${
                                    activeTab === tab.value ? "text-blue-950" : "text-gray-400"
                                }`}
                                onClick={() => setActiveTab(tab.value)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                            {/* Glider */}
                            <span
                                className="absolute top-0 h-full bg-blue-100 transition-all duration-300 ease-in-out rounded-full"
                                style={{
                                left: gliderStyle.left,
                                width: gliderStyle.width,
                                }}
                            />
                        </div>
                    </div>

                        {/* Tab Content */}
                        <div className="relative">{renderTabContent()}</div>
                    
                </div>
            </div>
        </div>
    );
}

export default EventDetail;