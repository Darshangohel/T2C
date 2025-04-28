import logo from "../assets/logo-white.png"
import background from "../assets/bg.jpg"
import SportLogo from "../assets/national-championships.png"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header style={{backgroundImage: `url(${background})`}} className="bg-top-right relative bg-cover after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/30">
            <div className="2xl:w-[1432px] xl:w-7xl lg:w-5xl w-auto px-4 relative z-10 mx-auto mb-10 after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent">
                <div className="pt-7 flex justify-between items-center pb-3">
                    <img src={logo} alt="Logo" className="w-30"/>
                    <ul className="flex">
                        <li className="px-4">
                            <Link to="/hotel" className="text-white">Hotel</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/event" className="text-white">Event</Link>
                        </li>
                        <li className="px-4">
                            <Link to="#" className="text-white">Sport</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="2xl:w-[1432px] xl:w-7xl lg:w-5xl w-auto px-4 relative z-10 mx-auto">
                <div className="grid grid-flow-col gap-4 pb-30">
                    <div className="flex justify-center items-center">
                        <img src={SportLogo} alt="Sport Logo" className="w-50" />
                    </div>
                    <div className="md:col-span-7 col-span-1 flex flex-col justify-center text-white">
                        <h3 className="block text-2xl font-bold uppercase">Wallyball National Chanpionship</h3>
                        <ul className='flex -mx-3 font-extralight'>
                            <li className='text-sm px-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className='inline-block align-text-top mr-1.5' viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                                Boston, MA
                            </li>
                            <li className='text-sm px-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className='inline-block align-text-top mr-1.5' viewBox="0 0 16 16">
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                </svg>
                                07/02/2026 - 07/10/2026
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;