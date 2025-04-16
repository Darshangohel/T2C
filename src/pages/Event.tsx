import { useEffect } from "react";
import "./Event.css";
import Logo from "../assets/logo-dark.png"
import { Link } from "react-router-dom";
import TravelLogo from "../assets/travel-logo.png"

const Event = () => {

    const menuItems = [{label : "Event", path : "/event"}, {label : "Home", path : "/dashboard"}, {label : "Reservations", path : "#"}];

    useEffect(() => {
        document.body.classList.add("h-full");
        document.documentElement.classList.add("h-full");

        const root = document.querySelector("#root");
        if (root) {
        root.classList.add("h-full");
        }
    });
    return (
        <>
            <div className="flex h-full">
                <div className="w-2/12 flex flex-col shadow-[0_0px_35px_rgba(0,0,0,0.25)] h-full">
                    <div className="p-3">
                        <img src={Logo} alt="Logo" className="w-30 mx-auto" />
                    </div>
                    <div className="grow overflow-scroll px-2">
                        <ul>
                            {menuItems.map((item, index) => 
                                <li className="px-1" key={index}>
                                    <Link to={item.path} className="block hover:bg-blue-50 p-3 rounded-sm">{item.label}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="">
                        Bottom
                    </div>
                </div>
                <div className="w-10/12 flex flex-col">
                    <div className="shadow-lg shadow-gray-100 min-h-18 py-3 px-4 flex justify-between z-10 relative">
                        <img src={TravelLogo} alt="Travel Logo" className="w-25" />
                        <div className="flex items-center">
                            <input type="text" name="search" className="border border-gray-400 rounded-md p-2" placeholder="Search.." />
                            <div className="flex ml-5 text-gray-500">
                                <img src="https://avatar.iran.liara.run/username?username=Max+Lorem" className="w-7 mr-2" />
                                <span>Max Lorem</span>
                                <svg aria-hidden="true" fill="currentColor" className="mt-1 ml-1" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M16.44 9.146a.5.5 0 0 1 .706 0l.708.708a.5.5 0 0 1 0 .707l-5.147 5.146a1 1 0 0 1-1.414 0l-5.147-5.146a.5.5 0 0 1 0-.707l.708-.708a.5.5 0 0 1 .703-.003L12 13.586l4.44-4.44z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="grow overflow-auto bg-slate-100 p-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Events (42)</h2>
                            <div>
                                <input type="text" name="search-event" className="border border-gray-400 rounded-md p-2 bg-white" placeholder="Search.." />
                                <button className="p-2 rounded-sm bg-blue-950 text-white">New Event</button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        Footer
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event;