import { useState, useRef, useEffect } from "react";
import NavSidebar from "../components/NavSidebar";
import TopBar from "../components/TopBar";
import venueImg from "../assets/venueimage.jpeg"
import venueImg2 from "../assets/venueimage-2.webp"
import venueImg3 from "../assets/venueimage-3.webp"
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { Venue, VenueCategory } from "../types";
import { getVenues } from "../data/mockData";

interface VenuesProps {
    venues: Venue[];
}

const Venues: React.FC<VenuesProps> = ({ venues = getVenues() }) => {
    
    // const formattedAddress = `${venue.address}, ${venue.city}, ${venue.state} ${venue.zip}`;
    
    const [activeFilter, setActiveFilter] = useState<VenueCategory | 'ALL'>('ALL');
    const [isVisibleMobileNav, setIsVisibleMobileNav] = useState(false);
    const [isVisibleFilter, setIsVisibleFilter] = useState(false);

    const categories = [
        { id: 'ALL', label: 'All Venues' },
        ...Object.values(VenueCategory).map(category => ({
          id: category,
          label: category
        }))
      ];
      console.log(venues);
      const filteredVenues = activeFilter === 'ALL' 
      ? venues 
      : venues.filter(venue => venue.category === activeFilter);

    const [activeTab, setActiveTab] = useState("ALL");
    const [gliderStyle, setGliderStyle] = useState({ left: 0, width: 0 });
    const containerRef = useRef(null);
    const buttonsRef = useRef<Record<string, HTMLButtonElement | null>>({});

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
                        <div className="inline-block p-2 bg-white rounded-full">
                            <div className="flex relative bg-white rounded-full" ref={containerRef}>
                                {categories.map((category) => (
                                    <button
                                    key={category.id}
                                    ref={(el: HTMLButtonElement | null): void => {
                                        if (el && category.label) {
                                            buttonsRef.current = { ...buttonsRef.current, [category.id]: el };
                                        }
                                    }}
                                    className={`px-4 py-2 text-sm font-medium relative z-10 cursor-pointer ${
                                        activeTab === category.id ? "text-blue-950" : "text-gray-400"
                                    }`}
                                    onClick={() => {
                                        setActiveTab(category.id);
                                        setActiveFilter(category.id as VenueCategory | 'ALL');
                                    }}
                                    >
                                        {category.label}
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
                        {/* <div key={index} className={`pb-5 ${tileClassName ? tileClassName : "xl:px-5 xl:w-[33.33%]"}`}> */}
                        <div className="flex -mx-4 px-2 pt-2 flex-wrap xl:flex-row flex-col mt-5">
                            {filteredVenues.map(venue => (
                                <div className={`xl:px-4 xl:w-[33.33%] mb-7`}>
                                    <div className="bg-white border relative border-gray-200 flex flex-row xl:flex-col rounded-2xl overflow-hidden h-full group shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                        <div className="relative rounded-2xl w-4/12 xl:w-auto overflow-hidden after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-linear-to-t after:from-neutral-950/70 after:to-transparent">
                                            {/* <img src={hotel.img} alt="Hotel" className="w-full object-cover xl:h-[320px] h-full" /> */}
                                            <div className="absolute bottom-4 left-4 z-10 text-white">
                                                <h4 className="text-xl font-bold leading-6">
                                                    <a href="#">{venue.name}</a>
                                                </h4>
                                                <p className="font-extralight text-sm relative pl-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="absolute left-0 top-1/2 -translate-y-1/2 align-text-bottom mr-2" viewBox="0 0 16 16">
                                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                                    </svg>
                                                    {`${venue.address}, ${venue.city}, ${venue.state} ${venue.zip}`}
                                                </p>
                                                <div className="mt-3">
                                                    <span className="bg-white/15 text-sm px-2 py-1 rounded-full"><Users className="inline-block mr-1 align-text-top" size={15} /> Up to {venue.capacity}</span>
                                                </div>
                                            </div>
                                            <img src={venue.imageUrl} alt="Hotel" className="w-full object-cover xl:h-[320px] h-full group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                        <div className="p-3 xl:grow xl:shrink w-8/12 xl:w-auto flex flex-col">
                                            <h5 className="font-bold my-2"><Calendar size={18} className="inline-block mr-1.5 align-text-top" />Upcomming Events</h5>
                                            <ul className="space-y-3 mb-5">
                                                <li className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-slate-100 rounded-md flex flex-col items-center justify-center text-xs">
                                                        <span className="font-bold text-blue-800">10</span>
                                                        <span className="text-slate-500">Jun</span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-slate-800 line-clamp-1"><a href="#">Volleyball National Championship</a></p>
                                                        <p className="text-xs text-slate-500">7:00 PM - 9:00 PM</p></div>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-slate-100 rounded-md flex flex-col items-center justify-center text-xs">
                                                        <span className="font-bold text-blue-800">15</span>
                                                        <span className="text-slate-500">Jun</span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-slate-800 line-clamp-1"><a href="#">ESA Annual Conference</a></p>
                                                        <p className="text-xs text-slate-500">4:00 PM - 7:00 PM</p></div>
                                                </li>
                                            </ul>
                                            <button className="bg-blue-900 text-white p-2 rounded-md cursor-pointer mt-auto hover:bg-blue-800">Explore Venue <ArrowRight className="inline-block align-text-bottom" size={18}/></button>
                                        </div>
                                    </div>
                                </div>
                            ))}                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Venues;