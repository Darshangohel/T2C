import { useState } from 'react';
import NavSidebar from '../components/NavSidebar';
import TopBar from '../components/TopBar';
import RfpTable from '../components/RfpTable';
import Button from '../components/ui/Button';
import { RfpType } from '../components/RfpTable';
import { CircleCheckBig, DollarSign, History, Hotel } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockRfps } from '../data/mockData';

const DashboardTiles = [
    {
        title: "Total Active RFPs",
        percentage: "12",
        count: "5",
        linkText: "View all RFPS",
        link: "#",
        icon: <Hotel/>
    },
    {
        title: "Confirmed Bookings",
        percentage: "8",
        count: "1",
        linkText: "View all Bookings",
        link: "#",
        icon: <CircleCheckBig/>
    },
    {
        title: "Pending Responses",
        count: "2",
        linkText: "View Pending Responses",
        link: "#",
        icon: <History/>
    },
    {
        title: "Total Value",
        percentage: "15",
        count: "$119,900",
        linkText: "View all Values",
        link: "#",
        icon: <DollarSign />
    },
]

const Dashboard = () => {
    const [isVisibleFilter, setIsVisibleFilter] = useState(false);
    const [isVisibleMobileNav, setIsVisibleMobileNav] = useState(false);

    const handleViewDetails = (id: string) => {
        console.log('View details for RFP:', id);
        // Would typically navigate to a details page or open a modal
    };

    return (
        <div className="flex h-full">
            <NavSidebar isVisibleMobileNav={isVisibleMobileNav} />
            <div className={`xl:w-10/12 lg:w-9/12 md:w-9/12 sm:w-full flex transition-all duration-300 ease-in-out z-10 flex-col ${isVisibleMobileNav ? 'translate-x-4/12 md:translate-x-0' : ''} ${isVisibleFilter ? 'xl:translate-x-3/10 lg:translate-x-4/12 md:translate-x-4/9 sm:translate-x-4/12' : ''}`}>
                <TopBar
                    isVisibleFilter={isVisibleFilter}
                    setIsVisibleFilter={setIsVisibleFilter}
                    isVisibleMobileNav={isVisibleMobileNav}
                    setIsVisibleMobileNav={setIsVisibleMobileNav}
                />
                <div className="grow overflow-auto bg-slate-100 p-4 relative">
                    <h3 className="font-bold text-2xl">Dashboard</h3>
                    <p className="text-gray-600">Welcome back to your RFP management portal</p>
                    
                    <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
                        {DashboardTiles.map((tile, index) =>
                            <div key={index} className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col p-5'>
                                <div className='flex justify-between shrink-0 grow'>
                                    <h3 className="text-sm font-medium text-gray-500 uppercase">{tile.title}</h3>
                                    <p className="mr-2 text-sm text-green-600">+{tile.percentage}%</p>
                                </div>
                                <p className="text-2xl pt-3 font-semibold text-gray-900">{tile.count}</p>
                                <div className='flex items-baseline justify-between'>
                                    <Link to={tile.link} className='underline text-sm text-slate-800'>{tile.linkText}</Link>
                                    <div className='rounded-md bg-blue-100 p-3'>
                                        {tile.icon}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='mb-6'>
                        <h3 className='font-semibold text-xl mb-3'>Recent RFP Requests</h3>
                        <RfpTable 
                            rfps={mockRfps} 
                            onViewDetails={handleViewDetails} 
                        />
                    </div>
                    <div className="text-center">
                        <Button 
                            variant="outline" 
                            className="flex items-center mx-auto"
                            >
                            <span>View All RFP Requests</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
