import { useEffect } from 'react';
import Logo from "../assets/logo-dark.png";
import { Link } from 'react-router-dom';

interface Props {
    isVisibleMobileNav: boolean;
}

const NavSidebar = ({ isVisibleMobileNav }: Props) => {
    useEffect(() => {
        document.body.classList.add("h-full");
        document.documentElement.classList.add("h-full");

        const root = document.querySelector("#root");
        if (root) {
            root.classList.add("h-full");
        }
    }, []);

    const menuItems = [
        { label: "Dashboard", path: "/dashboard", active: true },
        { label: "Hotel", path: "/hotel", active: false },
        { label: "Events", path: "/event", active: false },
        { label: "Reservations", path: "#", active: false },
        { label: "Venues", path: "/venues", active: false }
    ];

    return (
        <div className={`xl:w-2/12 lg:w-3/12 md:w-3/12 w-4/12 absolute md:static flex flex-col shadow-md h-full bg-white transition-all duration-300 ease-in-out z-20 ${isVisibleMobileNav ? 'left-0' : '-left-full'} md:left-0`}>
            <div className="p-3">
                <img src={Logo} alt="Logo" className="w-30" />
            </div>
            <div className="p-4 md:hidden">
                <input type="text" name="search" className="border border-gray-400 rounded-md px-4 py-2 w-full" placeholder="Search.." />
            </div>
            <div className="grow overflow-scroll px-2">
                <ul>
                    {menuItems.map((item, index) => (
                        <li className="px-1" key={index}>
                            <Link to={item.path} className={`block hover:bg-blue-50 p-3 rounded-sm ${item.active ? 'bg-blue-50' : ''}`}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-3 border-t border-gray-200 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block mr-3" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                </svg>
                Settings
            </div>
        </div>
    );
};

export default NavSidebar;
