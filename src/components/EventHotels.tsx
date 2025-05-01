import { useState } from 'react';
import HotelImage from "../assets/hotel-1.avif"
import HotelImage2 from "../assets/hotel-2.avif"
import HotelImage3 from "../assets/hotel-3.avif"
import HotelImage4 from "../assets/hotel-4.avif"
import HotelImage5 from '../assets/hotel-5.jpg'
import HotelData from './HotelData';
import { Plus, Search } from 'lucide-react';

const EventHotels = () => {
    
    const date = new Date();
    date.setDate(date.getDate() + 7);
    
    const data = [  
        {"title" : "Sonesta Los Angeles Airport LAX", "img" : HotelImage , "distance" : "0.5", "distance-from" : "South Tower Building", tel: "(123)456-789", location: "416 W 8th St, Los Angeles, CA 90014", booked: "10", totalAvailbility: "12", showStatus: true },
        {"title" : "Hyatt Regency Los Angeles International Airport", "img" : HotelImage2 , "distance" : "0.7", "distance-from" : "South Tower Building", tel: "(123)456-789", location: "1030 W El Segundo Blvd, Gardena, CA 90247", booked: "15", totalAvailbility: "20", showStatus: true },
        {"title" : "Holiday Inn Los Angeles - LAX Airport by IHG", "img" : HotelImage3 , "distance" : "1.88", "distance-from" : "South Tower Building", tel: "(123)456-789", location: "900 W Olympic Blvd, Los Angeles, CA 90015" , booked: "20", totalAvailbility: "20", showStatus: true },
        {"title" : "Embassy Suites by Hilton Los Angeles International Airport North", "img" : HotelImage4 , "distance" : "0.97", "distance-from" : "South Tower Building", tel: "(123)456-789", location: "665 Bush St #1, San Francisco, CA 94108", booked: "10", totalAvailbility: "30", showStatus: true },
        {"title": "Hilton Grand Vacations Club on the Las Vegas Strip", "img" : HotelImage5, "distance" : "1", "distance-from" : "South Tower Building", tel: "(123)456-789", location: "50 3rd St, San Francisco, CA 94103", booked: "10", totalAvailbility: "40", showStatus: true}
    ]

    const [sortValue, setSortValue] = useState('price-low-high');

    const handleSortChange = (e: any) => {
        setSortValue(e.target.value);
    }


    
    return (            
        <div className="mt-9">
            <div className="flex-col xs:flex-row flex justify-between pb-3">
                <div className="relative self-end mb-4">
                    <select id='sortby' name="sort-by" value={sortValue} onChange={handleSortChange} className="border bg-white border-gray-400 p-2 pr-6 rounded-sm ml-2 appearance-none">
                        <option value="price-low-high">Price : Low to High</option>
                        <option value="price-high-low">Price : High to Low</option>
                        <option value="star-rating">Star Rating</option>
                        <option value="airport-distance">Distance from Airport</option>
                    </select>
                    <label htmlFor='sortby'><svg className="absolute right-1 top-2 mt-1" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M16.44 9.146a.5.5 0 0 1 .706 0l.708.708a.5.5 0 0 1 0 .707l-5.147 5.146a1 1 0 0 1-1.414 0l-5.147-5.146a.5.5 0 0 1 0-.707l.708-.708a.5.5 0 0 1 .703-.003L12 13.586l4.44-4.44z"></path></svg></label>
                </div>
                <div className="flex items-center">
                    <button className="py-2 px-4 rounded-sm bg-blue-950 text-white cursor-pointer mr-4">
                        <Plus size={20} strokeWidth={1} className="inline-block align-text-bottom" /> Add Hotel
                    </button>
                    <div className="bg-white px-3 py-2 rounded-md border border-gray-200 focus-within:border-blue-800 flex items-center">
                        <input type="text" className="grow focus:outline-none" placeholder="Search..." name="search_reservation" />
                        <button className="text-gray-500 pl-2 cursor-pointer">
                            <Search />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-full">
                    <div className="flex xl:flex-wrap xl:flex-row flex-col xl:px-0 -ml-5 -mr-5">
                        <HotelData HotelDataJson={data} mode="dashboard" />
                    </div>
                </div>
            </div>     
        </div>
    );
};

export default EventHotels;
