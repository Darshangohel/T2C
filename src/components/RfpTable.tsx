import React, { useState } from 'react';
import Button from './ui/Button';
import StatusBadge from './StatusBadge';

type RfpStatus = 'pending' | 'confirmed' | 'declined' | 'negotiating' | 'awaiting_info';

export type RfpType = {
    id: string;
    hotelName: string;
    location: string;
    eventName: string;
    startDate: string;
    endDate: string;
    roomsRequested: number;
    estimatedValue: number;
    status: RfpStatus;
    lastUpdated: string;
};

type RfpTableProps = {
    rfps: RfpType[];
    onViewDetails: (id: string) => void;
};

const RfpTable: React.FC<RfpTableProps> = ({ rfps, onViewDetails }) => {
    const [sortField, setSortField] = useState<keyof RfpType>('lastUpdated');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
    const handleSort = (field: keyof RfpType) => {
      if (sortField === field) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    };
  
    const sortedRfps = [...rfps].sort((a, b) => {
      if (sortField === 'estimatedValue') {
        return sortDirection === 'asc'
          ? a.estimatedValue - b.estimatedValue
          : b.estimatedValue - a.estimatedValue;
      }
      
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      return 0;
    });
  
    const SortHeader: React.FC<{ field: keyof RfpType; label: string }> = ({ field, label }) => (
      <th 
        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
        onClick={() => handleSort(field)}
      >
        <div className="flex items-center space-x-1">
          <span>{label}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-down opacity-50"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>
          {/* <ArrowUpDown size={14} className="opacity-50" /> */}
        </div>
      </th>
    );
  
    return (
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <div className="p-2 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-medium">RFP Requests</h3>
          <Button variant="outline" size="sm" className="flex items-center space-x-1">
            {/* <Filter size={14} /> */}
            <span>Filter</span>
          </Button>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <SortHeader field="hotelName" label="Hotel" />
              <SortHeader field="eventName" label="Event" />
              <SortHeader field="startDate" label="Dates" />
              <SortHeader field="roomsRequested" label="Rooms" />
              <SortHeader field="estimatedValue" label="Value" />
              <SortHeader field="status" label="Status" />
              <SortHeader field="lastUpdated" label="Last Updated" />
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedRfps.map((rfp) => (
              <tr key={rfp.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{rfp.hotelName}</div>
                  <div className="text-sm text-gray-500">{rfp.location}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {rfp.eventName}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {new Date(rfp.startDate).toLocaleDateString()} - <br />
                  {new Date(rfp.endDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {rfp.roomsRequested}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  ${rfp.estimatedValue.toLocaleString()}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <StatusBadge status={rfp.status} />
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {new Date(rfp.lastUpdated).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right text-sm">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => onViewDetails(rfp.id)}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RfpTable;