type Amenity = {
    label: string;
    icon: any; // You can replace 'any' with the correct type if you know it
};

type Hotel = {
    title: string;
    img: any;
    distance: string;
    "distance-from": string;
    aminities?: Amenity[];
    star: string;
    rate: string;
    booked?: string;
    totalAvailbility?: string;
};

type HotelDataProps = {
    HotelDataJson: Hotel[];
    tileClassName?: string; 
}

export default function HotelData({ HotelDataJson, tileClassName }: HotelDataProps) {
    return (
      <>
        {HotelDataJson.map((hotel, index) => (
          <div key={index} className={`pb-5 ${tileClassName ? tileClassName : "xl:px-5 xl:w-[33.33%]"}`}>
            <div className="border relative border-gray-200 flex flex-row xl:flex-col rounded-2xl overflow-hidden h-full">
                <a href="#" className="absolute left-0 top-0 w-full h-full"></a>
                <div className="relative rounded-2xl w-4/12 xl:w-auto overflow-hidden">
                {hotel.booked && 
                    <span className="absolute bg-black/50 px-3 py-1 rounded-md text-white text-sm top-2 left-2">Booked {hotel.totalAvailbility} / {hotel.booked}</span>
                }
                    <span className="absolute bg-green-900/70 px-3 py-1 rounded-full text-white text-sm top-2 right-2 cursor-pointer">
                        Live
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="inline-block ml-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </span>
                    <img src={hotel.img} alt="Hotel" className="w-full object-cover xl:h-[320px] h-full" />
                </div>
                <div className="p-3 xl:grow xl:shrink w-8/12 xl:w-auto flex flex-col">
                    <h4 className="text-xl font-bold leading-6">{hotel.title}</h4>
                    <p className="text-gray-500 text-sm">{hotel.distance} mi from {hotel["distance-from"]}</p>
                    <ul className="flex flex-wrap pt-3 pb-2">
                    {hotel.aminities &&
                        hotel.aminities.map((aminity, aminityIndex) => (
                            <li key={aminityIndex} className="flex me-7 text-gray-500">
                                {aminity.icon}
                                {aminity.label}
                            </li>
                        ))
                    }
                    </ul>
                    <ul>
                        <li className="text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="inline-block align-text-bottom mr-2" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                            </svg>
                            (123) 456 - 789
                        </li>
                    </ul>
                    <div className="flex justify-between xl:mt-auto items-center">
                        <div className="">
                            <span className="inline-block p-1 px-2 border border-gray-200 leading-none rounded-sm">{hotel.star} <span className="text-amber-300 pl-1">★</span></span>
                        </div>
                        <div className="">
                            <span className="">${hotel.rate} <small className="font-light">Nightly</small></span>
                            <strong className="block">${Number(hotel.rate)*3} Total</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))}
      </>
    );
  }
