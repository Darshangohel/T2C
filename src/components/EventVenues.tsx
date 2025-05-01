import { ArrowRight, Calendar, Tickets, Users } from "lucide-react";
import { getEventVenues } from "../data/mockData";

export default function EventVenues() {
    const venues = getEventVenues();

    return (
        <>
            <div className="flex -mx-4 px-2 pt-2 flex-wrap xl:flex-row flex-col mt-5">
                {venues.map(venue => (
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
                                        <span className="bg-white/15 text-sm px-2 py-1 rounded-full"><Tickets className="inline-block mr-1 align-text-top" size={15} /> Booked {venue.occupied} / {venue.capacity} </span>
                                    </div>
                                </div>
                                <img src={venue.imageUrl} alt="Hotel" className="w-full object-cover xl:h-[320px] h-full group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-3 xl:grow xl:shrink w-8/12 xl:w-auto flex flex-col">
                                <h5 className="my-2"><Calendar size={18} className="inline-block mr-1.5 align-text-top" />07/02/2026</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}