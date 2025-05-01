import { useState } from "react";
import { MapPin, Phone } from "lucide-react"

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
    mode?: string;
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
            <div className="bg-white border relative border-gray-200 flex flex-row xl:flex-col rounded-2xl overflow-hidden h-full">
                <div className="relative rounded-2xl w-4/12 xl:w-auto overflow-hidden">
                    {hotel.booked && 
                        <span className="absolute bg-black/50 px-3 py-1 rounded-md text-white text-sm top-2 left-2">Booked {hotel.booked} / {hotel.totalAvailbility}</span>
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
                                <Phone color="#1e3a8a" size={16} className="inline-block mr-2" />
                                (123) 456 - 789
                            </li>
                            <li className="relative">
                                <MapPin color="#1e3a8a" size={16} className="inline-block mr-2" />
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
