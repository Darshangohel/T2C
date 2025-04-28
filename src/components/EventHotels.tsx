import { useState } from 'react';
import HotelImage from "../assets/hotel-1.avif"
import HotelImage2 from "../assets/hotel-2.avif"
import HotelImage3 from "../assets/hotel-3.avif"
import HotelImage4 from "../assets/hotel-4.avif"
import HotelImage5 from '../assets/hotel-5.jpg'
import HotelData from './HotelData';

const EventHotels = () => {
    
    const date = new Date();
    date.setDate(date.getDate() + 7);
    
    const data = [
        {"title" : "Sonesta Los Angeles Airport LAX", "img" : HotelImage , "distance" : "0.5", "distance-from" : "South Tower Building", "star": "4.5", "rate": "178", booked: "10", totalAvailbility: "12" },
        {"title" : "Hyatt Regency Los Angeles International Airport", "img" : HotelImage2 , "distance" : "0.7", "distance-from" : "South Tower Building", "star": "4.7", "rate": "181", booked: "15", totalAvailbility: "20" },
        {"title" : "Holiday Inn Los Angeles - LAX Airport by IHG", "img" : HotelImage3 , "distance" : "1.88", "distance-from" : "South Tower Building", "star": "4.8", "rate": "170", booked: "20", totalAvailbility: "20" },
        {"title" : "Embassy Suites by Hilton Los Angeles International Airport North", "img" : HotelImage4 , "distance" : "0.97", "distance-from" : "South Tower Building", "star": "4.4", "rate": "174", booked: "10", totalAvailbility: "30" },
        {"title": "Hilton Grand Vacations Club on the Las Vegas Strip", "img" : HotelImage5, "distance" : "1", "distance-from" : "South Tower Building", "star": "4.1", "rate": "139", booked: "10", totalAvailbility: "40"}
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
                <div>
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
            <div className="flex">
                <div className="w-full px-5">
                    <div className="flex bg-white rounded-md xl:flex-wrap xl:flex-row flex-col py-5 px-5 xl:px-0 -ml-5 -mr-5">
                        <HotelData HotelDataJson={data} />
                    </div>
                </div>
            </div>     
        </div>
    );
};

export default EventHotels;
