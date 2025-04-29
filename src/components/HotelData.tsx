import { useState } from "react";

type Amenity = {
    label: string;
    icon: any; // You can replace 'any' with the correct type if you know it
};

type Hotel = {
    title: string;
    tel?: string;
    img: any;
    distance: string;
    "distance-from": string;
    aminities?: Amenity[];
    star?: string;
    rate?: string;
    booked?: string;
    totalAvailbility?: string;
    showStatus?: boolean;
    location? : string;
};

type HotelDataProps = {
    HotelDataJson: Hotel[];
    tileClassName?: string;
    mode: string;
}

type StatusType = 'live' | 'deactivate' | 'hold';

export default function HotelData({ HotelDataJson, tileClassName, mode }: HotelDataProps) {

    
    function StatusDropdown() {
        const [status, setStatus] = useState<{label: string, status: StatusType}>({label: "Live", status: "live"});
        const [open, setOpen] = useState(false);
      
        const handleSelect = (newStatus: any) => {
            // console.log(newStatus);
            setStatus(newStatus);
            setOpen(false);
        };
      
        const statusColor: Record<StatusType, string> = {
          live: "bg-green-900/70",
          deactivate: "bg-red-600/70",
          hold: "bg-gray-600/70",
        };
      
        return (
          <div className="relative z-10">
            <span
                onClick={() => setOpen((prev) => !prev)}
                className={`${statusColor[status.status]} px-3 py-1 rounded-full text-white text-sm cursor-pointer select-none`}
            >
              {status.label === "Deactivate" ? "Deactivated" : status.label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                className="inline-block ml-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
      
            {open && (
              <ul className="shadow-sm absolute bg-white right-0 top-full mt-1 rounded-md text-sm w-32 overflow-hidden">
                {[{label: "Live", status: "live"}, {label: "Deactivate", status: "deactivate"}, {label: "Hold", status: "hold"}].map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect({label: item.label, status : item.status})}
                    className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
    }
    
    return (
      <>
        {HotelDataJson.map((hotel, index) => (
          <div key={index} className={`pb-5 ${tileClassName ? tileClassName : "xl:px-5 xl:w-[33.33%]"}`}>
            <div className=" border relative border-gray-200 flex flex-row xl:flex-col rounded-2xl overflow-hidden h-full">
                <div className="relative rounded-2xl w-4/12 xl:w-auto overflow-hidden">
                    {hotel.booked && 
                        <span className="absolute bg-black/50 px-3 py-1 rounded-md text-white text-sm top-2 left-2">Booked {hotel.totalAvailbility} / {hotel.booked}</span>
                    }
                    <div className="absolute z-10 top-2 right-2">
                        {hotel.showStatus && <StatusDropdown /> }
                    </div>
                    <img src={hotel.img} alt="Hotel" className="w-full object-cover xl:h-[320px] h-full" />
                </div>
                <div className="p-3 xl:grow xl:shrink w-8/12 xl:w-auto flex flex-col">
                    <h4 className="text-xl font-bold leading-6">
                        <a href="#">{hotel.title}</a>
                    </h4>
                    <p className="text-gray-500 text-sm">{mode === "dashboard" ? hotel.location : hotel.distance + "mi from" + hotel["distance-from"]}</p>
                    
                    {hotel.aminities &&
                        (<ul className="flex flex-wrap pt-3 pb-2">
                            {hotel.aminities.map((aminity, aminityIndex) => (
                                <li key={aminityIndex} className="flex me-7 text-gray-500">
                                    {aminity.icon}
                                    {aminity.label}
                                </li>
                            ))}
                        </ul>)
                    }
                    {(hotel.tel && hotel["distance-from"]) &&
                        <ul className="text-sm flex flex-col items-start my-3">
                            <li className="mb-3 text-nowrap">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="inline-block text-blue-900 align-text-bottom mr-2" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                </svg>
                                (123) 456 - 789
                            </li>
                            <li className="relative pl-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block absolute left-0 text-blue-900 align-text-bottom mr-2" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                                {hotel.distance} mi from {hotel["distance-from"]}
                            </li>
                        </ul>
                    }
                    <div className="flex justify-between xl:mt-auto items-center">
                        {hotel.star && 
                            <div className="">
                                <span className="inline-block p-1 px-2 border border-gray-200 leading-none rounded-sm">{hotel.star} <span className="text-amber-300 pl-1">★</span></span>
                            </div>
                        }
                        {hotel.rate && 
                            <div className="">
                                <span className="">${hotel.rate} <small className="font-light">Nightly</small></span>
                                <strong className="block">${Number(hotel.rate)*3} Total</strong>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        ))}
      </>
    );
  }
