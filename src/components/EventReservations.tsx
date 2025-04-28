type Reservation = {
    name: string;
    status: string;
    bookingDateTime: string;
    bookedFor: string;
    hotel: string;
    rooms: string;
    phase: string;
};

type EventReservationsProps = {
    reservationData: Reservation[];
};

function EventReservations({ reservationData }: EventReservationsProps) {
    return (
        <>
            <div className="grid xl:grid-cols-4 grid-cols-2 gap-4 mt-9">
                <div className="px-4 py-6 bg-white rounded-sm flex items-center justify-between shadow-[0_0.75rem_6rem_rgba(56,65,74,0.03)]">
                    <div className="p-4 rounded-md text-green-700 bg-green-100">
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
                    <div className="p-4 rounded-md  text-yellow-700 bg-yellow-100">
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
                    <div className="p-4 rounded-md text-red-700 bg-red-100">
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
            <div className="flex justify-between mt-4">
                <div className="lg:hidden border border-gray-300 w-70 focus-within:border-blue-800 px-3 rounded-sm py-2 bg-white">
                    <select className="peer pr-3 focus:outline-0 w-full truncate">
                        <option>All (50)</option>
                        <option>Confirmed (31)</option>
                        <option>Pending Changes (9)</option>
                        <option>Requested Cancellation (10)</option>
                    </select>
                </div>
                <div className="border block lg:hidden border-gray-300 w-70 focus-within:border-blue-800 px-3 rounded-sm py-2 bg-white">
                    <select id="select-hotel" className="peer pr-3 focus:outline-0 w-full truncate">
                        <option>
                            All Hotels
                        </option>
                        <option>
                            Sonesta Los Angeles Airport LAX
                        </option>
                        <option>
                            Hyatt Regency Los Angeles International Airport
                        </option>
                        <option>
                            Embassy Suites by Hilton Los Angeles International Airport North
                        </option>
                    </select>
                </div>
                <ul className="lg:flex my-7 rounded-md overflow-hidden hidden">
                    <li className="px-4 py-2 bg-slate-500 text-white cursor-pointer">All (50)</li>
                    <li className="px-4 py-2 bg-slate-300 text-slate-700 hover:bg-slate-400 hover:text-slate-100 cursor-pointer">Confirmed (31)</li>
                    <li className="px-4 py-2 bg-slate-300 text-slate-700 hover:bg-slate-400 hover:text-slate-100 cursor-pointer">Pending Changes (9)</li>
                    <li className="px-4 py-2 bg-slate-300 text-slate-700 hover:bg-slate-400 hover:text-slate-100 cursor-pointer">Requested Cancellation (10)</li>
                </ul>
                
            </div>
            <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                    <div className="border hidden lg:block border-gray-300 w-70 focus-within:border-blue-800 px-3 rounded-sm py-2 bg-white">
                        <select id="select-hotel" className="peer pr-3 focus:outline-0 w-full truncate">
                            <option>
                                All Hotels
                            </option>
                            <option>
                                Sonesta Los Angeles Airport LAX
                            </option>
                            <option>
                                Hyatt Regency Los Angeles International Airport
                            </option>
                            <option>
                                Embassy Suites by Hilton Los Angeles International Airport North
                            </option>
                        </select>
                    </div>
                </div>
                <div className="w-full lg:w-auto mt-4 lg:mt-0">
                    <div className="bg-white px-3 py-2 rounded-md border border-gray-200 focus-within:border-blue-800 flex items-center">
                        <input type="text" className="grow focus:outline-none" placeholder="Search..." name="search_reservation" />
                        <button className="text-gray-500 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {reservationData.map((reservation, key) => 
                <div key={key} className="bg-white p-5 rounded-md flex justify-between items-center mb-5 shadow-[0_0_2rem_rgba(56,65,74,0.03)]">
                    <div className="flex flex-col xl:flex-row">
                        <div className="xl:w-90 mb-3 xl:mb-0">
                            <h4 className="text-2xl">{reservation.name}</h4>
                            <p className="text-sm text-gray-400">{reservation.status === "Pending" ? "Requested" : "Confirmed"} @ {reservation.bookingDateTime}</p>
                        </div>
                        <div className="flex flex-col 2xl:flex-row">
                            <div className="text-sm text-gray-600 xl:w-90 2xl:w-120 xl:pl-9">
                                <p className="mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block align-text-bottom mr-2" viewBox="0 0 16 16">
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                                        <path d="M9 7.5a.5.5 0 0 1 .5-.5H15v2H9.5a.5.5 0 0 1-.5-.5zm-2 3v1a.5.5 0 0 1-.5.5H1v-2h5.5a.5.5 0 0 1 .5.5"/>
                                    </svg>
                                    {reservation.bookedFor}
                                </p>
                                <p className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="flex-shrink-0 align-text-bottom mr-2" viewBox="0 0 16 16">
                                        <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                                        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
                                    </svg>
                                    <a href="#">{reservation.hotel}</a>
                                </p>
                            </div>
                            <div className="text-sm flex items-end text-gray-600 xl:pl-9 w-50">
                                <p className="mt-2 2xl:mt-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block align-text-bottom mr-2" viewBox="0 0 16 16">
                                        <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z"/>
                                        <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
                                    </svg>
                                    Booked <strong>{reservation.rooms}</strong> Room(s)
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className={`bg-${reservation.phase}-100 text-${reservation.phase}-700 rounded-sm text-sm py-1 px-2`}>{reservation.status}</p>
                </div>
            )}
            <div className="flex justify-between py-1 items-center">
                <span className="text-gray-400">Showing 8 of 12 entries</span>
                <ul className="flex">
                    <li className="cursor-pointer w-8 h-8 p-2 bg-white rounded-sm text-gray-500 mx-1 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                        </svg>
                    </li>
                    <li className="cursor-pointer leading-4 w-8 h-8 p-2 bg-blue-900 font-light rounded-sm text-white text-center mx-1">
                        1
                    </li>
                    <li className="cursor-pointer leading-4 w-8 h-8 p-2 bg-white font-light rounded-sm text-gray-500 text-center mx-1">
                        2
                    </li>
                    <li className="cursor-pointer leading-4 w-8 h-8 p-2 bg-white font-light rounded-sm text-gray-500 text-center mx-1">
                        3
                    </li>
                    <li className="w-8 h-8 p-2 bg-white opacity-70 rounded-sm text-gray-500 mx-1 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default EventReservations;