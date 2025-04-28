import React from "react";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

interface FilterProps {
    filterPopup: boolean;
    isVisibleFilter: boolean;
    handleFilterClose: () => void;
    sortValue: string;
    handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    roomTypes: { label: string; id: string }[];
    aminities: { label: string; icon: React.ReactNode; id: string }[];
    starRating: { label: string; id: string }[];
    distanceVenue: { label: string; id: string }[];
    hotelBrand: { label: string; id: string }[];
    values: [number, number];
    setValues: (val: [number, number]) => void;
    inputs: string[];
    handleInputFocus: (index: number) => void;
    handleInputBlur: (index: number) => void;
    handleInputChange: (index: number, value: string) => void;
}

const Filter: React.FC<FilterProps> = ({
    filterPopup,
    isVisibleFilter,
    handleFilterClose,
    sortValue,
    handleSortChange,
    roomTypes,
    aminities,
    starRating,
    distanceVenue,
    hotelBrand,
    values,
    setValues,
    inputs,
    handleInputFocus,
    handleInputBlur,
    handleInputChange,
}) => {
    // Import RangeSlider here to avoid breaking SSR
    // const RangeSlider = require('react-range-slider-input').default;

    return (
        <div className={` ${filterPopup ? 'md:z-40 md:fixed md:w-7/12 sm:w-9/12 lg:w-2/5 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-full sm:h-[75vh]' : 'md:z-0 md:static md:bg-white bg-gray-100 top-0 left-0 h-full md:h-auto '} md:overflow-hidden xl:w-3/12 md:w-4/12 fixed w-full z-20 pb-15 pt-11 md:pt-0 md:pb-0 overflow-x-auto`}>
            <div className={`border border-gray-100 rounded-md bg-white px-4 py-3 pt-0 md:pt-3 overflow-hidden ${filterPopup ? 'flex flex-col h-full' : ''}`}>
                <div className="header flex justify-between border-b-gray-200 md:pt-1 pb-3 border-b -mx-4 px-4 pt-3 -mt-1 md:mt-0 fixed md:static top-0 w-full md:w-auto bg-white z-20">
                    <div className="flex items-center">
                        <span className={`cursor-pointer mr-4 ${filterPopup ? "" : "md:hidden"}`} onClick={handleFilterClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                            </svg>
                        </span>
                        <strong>Filters</strong>
                    </div>
                    <a href="#">Clear all filter (3)</a>
                </div>
                <div className={`bg-gray-100 -mx-4 px-4 -mb-4 pb-4 ${filterPopup ? 'grow overflow-y-auto' : ''}`}>
                    <div className="md:hidden block">
                        <label htmlFor="roomType" className="pt-2 text-gray-900 block pb-1">Sort By</label>
                        <div className="relative">
                            <select name="sort-by-filter" value={sortValue} onChange={handleSortChange} className="border border-gray-400 p-2 pr-6 rounded-sm appearance-none w-full">
                                <option value="price-low-high">Price : Low to High</option>
                                <option value="price-high-low">Price : High to Low</option>
                                <option value="star-rating">Star Rating</option>
                                <option value="airport-distance">Distance from Airport</option>
                            </select>
                            <svg className="absolute right-1 top-2 mt-1" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M16.44 9.146a.5.5 0 0 1 .706 0l.708.708a.5.5 0 0 1 0 .707l-5.147 5.146a1 1 0 0 1-1.414 0l-5.147-5.146a.5.5 0 0 1 0-.707l.708-.708a.5.5 0 0 1 .703-.003L12 13.586l4.44-4.44z"></path></svg>
                        </div>
                        <hr className="border-gray-200 mt-5 mb-2" />
                    </div>
                    {/* Room Type */}
                    <label htmlFor="roomType" className="pt-2 text-gray-900 block pb-1">Room Type</label>
                    <ul className="flex flex-wrap px-3 -mx-4">
                        {roomTypes.map((type, index)=>
                            <li className="px-1 mb-1" key={index}>
                                <input type="radio" id={type.id} name="room-type" value={type.id} className="hidden peer" required />
                                <label htmlFor={type.id} className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div className="block">
                                        <div className="w-full">{type.label}</div>
                                    </div>
                                </label>
                            </li>
                        )}
                    </ul>
                    <hr className="border-gray-200 my-3" />
                    {/* Aminities */}
                    <label htmlFor="aminities" className="pt-2 text-gray-900 block pb-1">Aminities</label>
                    <ul className="flex flex-wrap px-3 -mx-4">
                        {aminities.map((aminity,index) =>
                            <li className="px-1 mb-1" key={index}>
                                <input type="checkbox" id={aminity.id} name="aminities" value={aminity.id} className="hidden peer" required />
                                <label htmlFor={aminity.id} className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div className="block">
                                        <div className="w-full flex">
                                            {aminity.icon}
                                            {aminity.label}
                                        </div>
                                    </div>
                                </label>
                            </li>
                        )}
                    </ul>
                    <hr className="border-gray-200 my-3" />
                    {/* Price Range */}
                    <label htmlFor="price-range" className="pt-2 text-gray-900 block pb-1">Price Range</label>
                    <RangeSlider
                        min={0}
                        max={1000}
                        value={values}
                        onInput={(val: [number, number]) => setValues(val)}
                    />
                    <div className="flex px-2 -mx-4 mb-3">
                        <div className="px-2">
                            <div className="border border-gray-400 rounded-md pt-1 bg-white">
                                <label className="pl-3 block text-sm" htmlFor="min-value">Min</label>
                                <input
                                    id="min-value"
                                    type="text"
                                    value={inputs[0]}
                                    onFocus={() => handleInputFocus(0)}
                                    onBlur={() => handleInputBlur(0)}
                                    onChange={(e) => handleInputChange(0, e.target.value)}
                                    className="w-full pb-1 px-3 focus:outline-0"
                                />
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="border border-gray-400 rounded-md pt-1 bg-white">
                                <label className="pl-3 block text-sm" htmlFor="max-value">Max</label>
                                <input
                                    id="max-value"
                                    type="text"
                                    value={inputs[1]}
                                    onFocus={() => handleInputFocus(1)}
                                    onBlur={() => handleInputBlur(1)}
                                    onChange={(e) => handleInputChange(1, e.target.value)}
                                    className="w-full pb-1 px-3 focus:outline-0"
                                />
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-200 my-3" />
                    {/* Star Rating */}
                    <label htmlFor="price-range" className="pt-2 text-gray-900 block pb-1">Star Rating</label>
                    <ul className="flex flex-wrap px-3 -mx-4">
                        {starRating.map((star, index) =>
                            <li className="px-1 mb-1" key={index}>
                                <input type="radio" id={star.id} name="star-rating" value={star.id} className="hidden peer" required />
                                <label htmlFor={star.id} className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div className="block">
                                        <div className="w-full">{star.label}</div>
                                    </div>
                                </label>
                            </li>
                        )}
                    </ul>
                    <hr className="border-gray-200 my-3" />
                    {/* Distance to Venue */}
                    <label htmlFor="price-range" className="pt-2 text-gray-900 block pb-1">Distance to Venue(s)</label>
                    <ul className="flex flex-wrap px-3 -mx-4">
                        {distanceVenue.map((venue,index) =>
                            <li className="px-1 mb-1" key={index}>
                                <input type="radio" id={venue.id} name="distance-value" value={venue.id} className="hidden peer" required />
                                <label htmlFor={venue.id} className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div className="block">
                                        <div className="w-full">{venue.label}</div>
                                    </div>
                                </label>
                            </li>
                        )}
                    </ul>
                    <hr className="border-gray-200 my-3" />
                    {/* Hotel Brand */}
                    <label htmlFor="price-range" className="pt-2 text-gray-900 block pb-1">Hotel Brand</label>
                    <ul className="flex flex-wrap px-3 -mx-4">
                        {hotelBrand.map((brand, index) =>
                            <li className="px-1 mb-1" key={index}>
                                <input type="radio" id={brand.id} name="hotel-brand" value={brand.id} className="hidden peer" required />
                                <label htmlFor={brand.id} className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-950 dark:peer-checked:border-blue-600 peer-checked:text-blue-950 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div className="block">
                                        <div className="w-full">{brand.label}</div>
                                    </div>
                                </label>
                            </li>
                        )}
                    </ul>
                </div>
                {/* Mobile Done Button */}
                <div className="p-3 fixed bottom-0 w-full flex border-t border-gray-300 bg-white md:hidden">
                    <button className="ml-auto px-4 py-2 bg-blue-950 text-white rounded-l-full rounded-r-full cursor-pointer" onClick={handleFilterClose}>Done</button>
                </div>
            </div>
        </div>
    );
};

export default Filter;