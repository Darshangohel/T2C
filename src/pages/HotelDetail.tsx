import { useState } from "react";
import NavSidebar from "../components/NavSidebar";
import TopBar from "../components/TopBar";

const HotelDetail = () => {
    const [isVisibleFilter, setIsVisibleFilter] = useState(window.innerWidth >= 768);
    const [isVisibleMobileNav, setIsVisibleMobileNav] = useState(false);

    return (
        <>
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
                        <div className="bg-white p-5 rounded-md">
                            <h2 className="text-3xl mb-1">Sonesta Los Angeles Airport LAX</h2>
                            <p className="text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block align-text-top mt-0.5 mr-2" viewBox="0 0 16 16">
                                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>
                                Volleyball National Championship
                            </p>
                            Number of rooms required date wise. + Type of rooms + Aminities Included <br/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelDetail;