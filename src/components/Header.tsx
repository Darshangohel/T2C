import logo from "../assets/logo-white.png"
import background from "../assets/bg.jpg"
import SportLogo from "../assets/national-championships.png"

const Header = () => {
    return (
        <header style={{backgroundImage: `url(${background})`}} className="bg-top-right relative bg-cover after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/30">
            <div className="w-[1400px] relative z-10 mx-auto mb-10 after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent">
                <div className="pt-7 flex justify-between items-center pb-3">
                    <img src={logo} alt="Logo" className="w-30"/>
                    <ul className="flex">
                        <li className="px-4"><a href="#" className="text-white">Hotel</a></li>
                        <li className="px-4"><a href="#" className="text-white">Event</a></li>
                        <li className="px-4"><a href="#" className="text-white">Sport</a></li>
                    </ul>
                </div>
            </div>
            <div className="w-[1400px] relative z-10 mx-auto">
                <div className="grid grid-flow-col gap-4 pb-30">
                    <div className="flex justify-center items-center">
                        <img src={SportLogo} alt="Sport Logo" className="w-50" />
                    </div>
                    <div className="col-span-7 flex flex-col justify-center text-white">
                        <h3 className="block text-2xl font-bold uppercase">Wallyball National Chanpionship</h3>
                        <p className="font-extralight">Mon 05/02/2025 - Sat 05/10/2025 </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;