import { useState } from "react";
import NavSidebar from "../components/NavSidebar";
import TopBar from "../components/TopBar";
import venueImg from "../assets/venueimage.jpeg"
import venueImg2 from "../assets/venueimage-2.webp"
import venueImg3 from "../assets/venueimage-3.webp"


function Venues() {
    const [isVisibleMobileNav, setIsVisibleMobileNav] = useState(false);
    const [isVisibleFilter, setIsVisibleFilter] = useState(false);

    return (
        <>
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

                        {/* <div key={index} className={`pb-5 ${tileClassName ? tileClassName : "xl:px-5 xl:w-[33.33%]"}`}> */}
                        <div className="flex -mx-4 px-2 pt-2 flex-wrap justify-between xl:flex-row flex-col">
                            <div className={`xl:px-4 xl:w-[33.33%]`}>
                                <div className="bg-white border relative border-gray-200 flex flex-row xl:flex-col rounded-2xl overflow-hidden h-full">
                                    <div className="relative rounded-2xl w-4/12 xl:w-auto overflow-hidden after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-linear-to-t after:from-neutral-950/70 after:to-transparent">
                                        {/* <img src={hotel.img} alt="Hotel" className="w-full object-cover xl:h-[320px] h-full" /> */}
                                        <div className="absolute bottom-3 left-3 z-10 text-white">
                                            <h4 className="text-xl font-bold leading-6">
                                                <a href="#">The Secret House of Ivy</a>
                                            </h4>
                                            <p className="font-extralight text-sm relative pl-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="absolute left-0 top-1/2 -translate-y-1/2 align-text-bottom mr-2" viewBox="0 0 16 16">
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                                </svg>
                                                8140 2nd St, Downey, CA 90241, US
                                            </p>
                                        </div>
                                        <img src={venueImg} alt="Hotel" className="w-full object-cover xl:h-[320px] h-full" />
                                    </div>
                                    <div className="p-3 xl:grow xl:shrink w-8/12 xl:w-auto flex flex-col">
                                        <h5 className="font-bold my-2">Upcomming Events</h5>
                                        <ul className="pl-4 text-sm text-slate-500 list-disc">
                                            <li className="pb-1"><a href="#">Event Name one</a></li>
                                            <li className="pb-1"><a href="#">Event Name two</a></li>
                                            <li className="pb-1">+ 5</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={`xl:px-4 xl:w-[33.33%]`}>
                                <div className="bg-white border relative border-gray-200 flex flex-row xl:flex-col rounded-2xl overflow-hidden h-full">
                                    <div className="relative rounded-2xl w-4/12 xl:w-auto overflow-hidden after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-linear-to-t after:from-neutral-950 after:to-transparent">
                                        {/* <img src={hotel.img} alt="Hotel" className="w-full object-cover xl:h-[320px] h-full" /> */}
                                        <div className="absolute bottom-3 left-3 z-10 text-white">
                                            <h4 className="text-xl font-bold leading-6">
                                                <a href="#">Refined Venue</a>
                                            </h4>
                                            <p className="font-extralight text-sm relative pl-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="absolute left-0 top-1/2 -translate-y-1/2 align-text-bottom mr-2" viewBox="0 0 16 16">
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                                </svg>
                                                333 S Fair Oaks Ave, Pasadena, CA 91105, US
                                            </p>
                                        </div>
                                        <img src={venueImg2} alt="Hotel" className="w-full object-cover xl:h-[320px] h-full" />
                                    </div>
                                    <div className="p-3 xl:grow xl:shrink w-8/12 xl:w-auto flex flex-col">
                                        <h5 className="font-bold my-2">Upcomming Events</h5>
                                        <ul className="pl-4 text-sm text-slate-500 list-disc">
                                            <li className="pb-1"><a href="#">Engagement Festival</a></li>
                                            <li className="pb-1"><a href="#">Wedding Festival</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className={`xl:px-4 xl:w-[33.33%]`}>
                                <div className="bg-white border relative border-gray-200 flex flex-row xl:flex-col rounded-2xl overflow-hidden h-full">
                                    <div className="relative rounded-2xl w-4/12 xl:w-auto overflow-hidden after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-linear-to-t after:from-neutral-950 after:to-transparent">
                                        <div className="absolute bottom-3 left-3 z-10 text-white">
                                            <h4 className="text-xl font-bold leading-6">
                                                <a href="#">Palm Event Center in the Vineyard</a>
                                            </h4>
                                            <p className="font-extralight text-sm relative pl-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="absolute left-0 top-1/2 -translate-y-1/2 align-text-bottom mr-2" viewBox="0 0 16 16">
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                                </svg>
                                                1184 Vineyard Ave, Pleasanton, CA 94566, US
                                            </p>
                                        </div>
                                        <img src={venueImg3} alt="Hotel" className="w-full object-cover xl:h-[320px] h-full" />
                                    </div>
                                    <div className="p-3 xl:grow xl:shrink w-8/12 xl:w-auto flex flex-col">
                                        <h5 className="font-bold my-2">Upcomming Events</h5>
                                        <ul className="pl-4 text-sm text-slate-500 list-disc">
                                            <li className="pb-1"><a href="#">Volleyball National Championship</a></li>
                                            <li className="pb-1"><a href="#">ESA Annual Conference</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Venues