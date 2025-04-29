import { useState } from 'react';
import NavSidebar from '../components/NavSidebar';
import TopBar from '../components/TopBar';
import RfpTable from '../components/RfpTable';
import Button from '../components/ui/Button';

const mockRfps: RfpType[] = [
    {
      id: '1',
      hotelName: 'Marriott Downtown',
      location: 'Chicago, IL',
      eventName: 'State Basketball Championship',
      startDate: '2025-03-15',
      endDate: '2025-03-18',
      roomsRequested: 45,
      estimatedValue: 15750,
      status: 'confirmed',
      lastUpdated: '2025-01-24T14:22:33'
    },
    {
      id: '2',
      hotelName: 'Hyatt Regency',
      location: 'Denver, CO',
      eventName: 'Regional Soccer Tournament',
      startDate: '2025-04-10',
      endDate: '2025-04-14',
      roomsRequested: 60,
      estimatedValue: 21600,
      status: 'pending',
      lastUpdated: '2025-01-27T09:15:00'
    },
    {
      id: '3',
      hotelName: 'Hilton Convention Center',
      location: 'Dallas, TX',
      eventName: 'Youth Volleyball Invitational',
      startDate: '2025-05-22',
      endDate: '2025-05-26',
      roomsRequested: 75,
      estimatedValue: 33750,
      status: 'negotiating',
      lastUpdated: '2025-01-26T16:48:12'
    },
    {
      id: '4',
      hotelName: 'Sheraton Waterfront',
      location: 'Seattle, WA',
      eventName: 'Swim Conference',
      startDate: '2025-02-18',
      endDate: '2025-02-21',
      roomsRequested: 30,
      estimatedValue: 10800,
      status: 'declined',
      lastUpdated: '2025-01-22T10:33:45'
    },
    {
      id: '5',
      hotelName: 'Embassy Suites',
      location: 'Atlanta, GA',
      eventName: 'Track & Field Championship',
      startDate: '2025-03-05',
      endDate: '2025-03-09',
      roomsRequested: 55,
      estimatedValue: 22000,
      status: 'awaiting_info',
      lastUpdated: '2025-01-28T11:20:18'
    },
    {
      id: '6',
      hotelName: 'Courtyard by Marriott',
      location: 'Boston, MA',
      eventName: 'Hockey Tournament',
      startDate: '2025-02-28',
      endDate: '2025-03-04',
      roomsRequested: 40,
      estimatedValue: 16000,
      status: 'pending',
      lastUpdated: '2025-01-25T14:10:26'
    }
  ];

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
                        <div className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md flex justify-between items-start p-5'>
                            <div className='rounded-md bg-blue-100 p-2 mr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hotel text-blue-900"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path><path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"></path><path d="M8 7h.01"></path><path d="M16 7h.01"></path><path d="M12 7h.01"></path><path d="M12 11h.01"></path><path d="M16 11h.01"></path><path d="M8 11h.01"></path><path d="M10 22v-6.5m4 0V22"></path></svg>
                            </div>
                            <div className='text-right'>
                                <div className='flex justify-end items-baseline'>
                                    <p className="mr-2 text-sm text-green-600">+12%</p>
                                    <p className="text-2xl font-semibold text-gray-900">5</p>
                                </div>
                                <h3 className="text-sm font-medium text-gray-500">Total Active RFPs</h3>
                            </div>
                        </div>

                        <div className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md flex justify-between items-start p-5'>
                            <div className='rounded-md bg-blue-100 p-2 mr-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar text-blue-900"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                            </div>
                            <div className='text-right'>
                                <div className='flex justify-end items-baseline'>
                                    <p className="mr-2 text-sm text-green-600">+8%</p>
                                    <p className="text-2xl font-semibold text-gray-900">1</p>
                                </div>
                                <h3 className="text-sm font-medium text-gray-500">Confirmed Bookings</h3>
                            </div>
                        </div>

                        <div className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md flex justify-between items-start p-5'>
                            <div className='rounded-md bg-blue-100 p-2 mr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-blue-900"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                            </div>
                            <div className='text-right'>
                                <div className='flex justify-end items-baseline'>
                                    <p className="text-2xl font-semibold text-gray-900">2</p>
                                </div>
                                <h3 className="text-sm font-medium text-gray-500">Pending Responses</h3>
                            </div>
                        </div>

                        <div className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md flex justify-between items-start p-5'>
                            <div className='rounded-md bg-blue-100 p-2 mr-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar text-blue-900"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                            </div>
                            <div className='text-right'>
                                <div className='flex justify-end items-baseline'>
                                    <p className="mr-2 text-sm text-green-600">+15%</p>
                                    <p className="text-2xl font-semibold text-gray-900">$119,900</p>
                                </div>
                                <h3 className="text-sm font-medium text-gray-500">Total Value</h3>
                            </div>
                        </div>

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
