import { useRef, useState } from 'react';
import TravelLogo from "../assets/travel-logo.png";
import { Link } from 'react-router-dom';

interface Props {
    isVisibleFilter: boolean;
    setIsVisibleFilter: (val: boolean) => void;
    isVisibleMobileNav: boolean;
    setIsVisibleMobileNav: (val: boolean) => void;
}

const TopBar = ({ setIsVisibleFilter, isVisibleMobileNav, setIsVisibleMobileNav }: Props) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    const handleMobileNav = () => {
        setIsVisibleMobileNav(!isVisibleMobileNav);
        if (!isVisibleMobileNav) setIsVisibleFilter(false);
    };

    const toggleUserDropdown = () => {
        setUserDropdownOpen(prev => !prev);
    };

    return (
        <div className="shadow-lg shadow-gray-200 min-h-18 py-3 px-4 flex justify-between z-10 relative bg-white">
            <div className="flex">
                <span
                    className="border border-gray-300 mr-4 self-center py-0.5 px-1 rounded-sm cursor-pointer inline-block md:hidden"
                    onClick={handleMobileNav}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </span>
                <img src={TravelLogo} alt="Travel Logo" className="w-25 hidden sm:block" />
            </div>
            <div className="flex items-center">
                <input type="text" name="search" className="border border-gray-400 rounded-md px-4 py-2 hidden md:block" placeholder="Search.." />
                <div className="flex ml-5 text-gray-500 relative cursor-pointer" onClick={toggleUserDropdown}>
                    <img src="https://avatar.iran.liara.run/username?username=Max+Lorem" className="w-7 mr-2" />
                    <span>Max Lorem</span>
                    <svg aria-hidden="true" fill="currentColor" className="mt-1 ml-1" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M16.44 9.146a.5.5 0 0 1 .706 0l.708.708a.5.5 0 0 1 0 .707l-5.147 5.146a1 1 0 0 1-1.414 0l-5.147-5.146a.5.5 0 0 1 0-.707l.708-.708a.5.5 0 0 1 .703-.003L12 13.586l4.44-4.44z" />
                    </svg>
                    {userDropdownOpen && (
                        <div ref={dropdownRef} className="absolute right-0 top-full mt-5 bg-white shadow-md w-35 rounded-sm">
                            <Link to="#" className="px-3 py-2 hover:bg-gray-100 block">Account</Link>
                            <Link to="#" className="px-3 py-2 hover:bg-gray-100 block">Settings</Link>
                            <hr className="border-gray-200" />
                            <Link to="/" className="px-3 py-2 hover:bg-gray-100 block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block align-text-bottom mr-1.5" viewBox="0 0 16 16">
                                    <path d="M7.5 1v7h1V1z"/>
                                    <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"/>
                                </svg>
                                Logout
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
