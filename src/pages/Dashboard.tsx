import { useState } from 'react';
import NavSidebar from '../components/NavSidebar';
import TopBar from '../components/TopBar';

const Dashboard = () => {
    const [isVisibleFilter, setIsVisibleFilter] = useState(false);
    const [isVisibleMobileNav, setIsVisibleMobileNav] = useState(false);

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
            </div>
        </div>
    );
};

export default Dashboard;
