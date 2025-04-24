import { useState } from "react";
import NavSidebar from "../components/NavSidebar";
import TopBar from "../components/TopBar";
import { Link } from "react-router-dom";
import SportLogo from "../assets/national-championships.png"
import VolleyballImg from "../assets/volleyball.jpg"

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
                    {/* <div className="mb-7">
                            <h3 className="text-xl font-bold">Volleyball National Championship</h3>
                            <p className="text-gray-400 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block align-text-bottom mr-1" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"></path><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
                                </svg>
                                Boston, MA
                            </p>
                            <div className="my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block" viewBox="0 0 16 16">
                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                </svg>
                                <span className="text-gray-500 align-middle pl-2">07/02/2025 - 07/02/2025</span>
                            </div>
                    </div> */}




                    <div className="bg-no-repeat bg-cover bg-center px-7 py-15 pb-25 relative -mx-4 after:bg-linear-to-t after:from-zinc-950 after:from-natural-900 after:content-[''] after:top-0 after:left-0 after:h-full after:w-full after:absolute" style={{backgroundImage: `url(${VolleyballImg})`}}>
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



                    <div className="grid grid-cols-4 gap-4 mt-5">
                        <div className="px-4 py-6 bg-white rounded-sm flex items-center justify-between shadow-[0_0.75rem_6rem_rgba(56,65,74,0.03)]">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                            </svg> */}
                            <div className="p-4 bg-blue-100 rounded-md text-blue-950">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-3xl text-right">31</p>
                                <p className="text-sm text-gray-400">Confirmed Reservations</p>
                            </div>
                        </div>
                        <div className="px-4 py-6 bg-white rounded-sm flex items-center justify-between shadow-[0_0.75rem_6rem_rgba(56,65,74,0.03)]">
                            <div className="p-4 bg-blue-100 rounded-md text-blue-950">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
                                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
                                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-3xl text-right">9</p>
                                <p className="text-sm text-gray-400">Pending Reservations</p>
                            </div>
                        </div>
                        <div className="px-4 py-6 bg-white rounded-sm flex items-center justify-between shadow-[0_0.75rem_6rem_rgba(56,65,74,0.03)]">
                            <div className="p-4 bg-blue-100 rounded-md text-blue-950">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-3xl text-right">10</p>
                                <p className="text-sm text-gray-400">Pending Cancellation</p>
                            </div>
                        </div>
                        <div className="px-4 py-6 bg-white rounded-sm flex items-center justify-between shadow-[0_0.75rem_6rem_rgba(56,65,74,0.03)]">
                            <div className="p-4 bg-blue-100 rounded-md text-blue-950">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-3xl text-right">5</p>
                                <p className="text-sm text-gray-400">Hotels allocated</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <ul className="flex my-7 rounded-md overflow-hidden">
                            <li className="px-4 py-2 bg-slate-500 text-white cursor-pointer">All (50)</li>
                            <li className="px-4 py-2 bg-slate-300 text-slate-700 hover:bg-slate-400 hover:text-slate-100 cursor-pointer">Confirmed (31)</li>
                            <li className="px-4 py-2 bg-slate-300 text-slate-700 hover:bg-slate-400 hover:text-slate-100 cursor-pointer">Pending (9)</li>
                            <li className="px-4 py-2 bg-slate-300 text-slate-700 hover:bg-slate-400 hover:text-slate-100 cursor-pointer">Requested Cancellation (10)</li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <h3>All (50)</h3>
                        <div className="bg-white px-3 py-2 rounded-md border border-gray-200 focus-within:border-blue-800 flex items-center">
                            <input type="text" className="focus:outline-none" placeholder="Search..." name="search_reservation" />
                            <button className="text-gray-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    {reservationData.map((reservation, key) => 
                        <div key={key} className="bg-white p-5 rounded-md flex justify-between items-center mb-5 shadow-[0_0_2rem_rgba(56,65,74,0.03)]">
                            <div className="flex ">
                                <div className="">
                                    <h4 className="text-2xl">{reservation.name}</h4>
                                    <p className="text-sm text-gray-400">Confirmed @ {reservation.bookingDateTime}</p>
                                </div>
                                <div className="text-sm text-gray-600 pl-9">
                                    <p className="mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block align-text-bottom mr-2" viewBox="0 0 16 16">
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                                            <path d="M9 7.5a.5.5 0 0 1 .5-.5H15v2H9.5a.5.5 0 0 1-.5-.5zm-2 3v1a.5.5 0 0 1-.5.5H1v-2h5.5a.5.5 0 0 1 .5.5"/>
                                        </svg>
                                        {reservation.bookedFor}
                                    </p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block align-text-bottom mr-2" viewBox="0 0 16 16">
                                            <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                                            <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
                                        </svg>
                                        <a href="#">{reservation.hotel}</a>
                                    </p>
                                </div>
                                <div className="text-sm text-gray-600 pl-9">
                                    <p className="mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block align-text-bottom mr-2" viewBox="0 0 16 16">
                                            <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z"/>
                                            <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
                                        </svg>
                                        Booked <strong>{reservation.rooms}</strong> Room(s)
                                    </p>
                                </div>
                            </div>
                            <p className={`bg-${reservation.phase}-100 text-${reservation.phase}-700 rounded-sm text-sm py-1 px-2`}>{reservation.status}</p>
                        </div>
                    )}
                    

                </div>
            </div>
        </div>
    );
}

export default EventDetail;