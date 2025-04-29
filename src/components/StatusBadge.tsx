import React from 'react';
import Badge from './ui/Badge';


type RfpStatus = 'pending' | 'confirmed' | 'declined' | 'negotiating' | 'awaiting_info';

type StatusBadgeProps = {
  status: RfpStatus;
  className?: string;
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const statusConfig = {
    pending: {
      variant: 'info' as const,
      label: 'Pending',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock mr-1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    },
    confirmed: {
      variant: 'success' as const,
      label: 'Confirmed',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
    },
    declined: {
      variant: 'danger' as const,
      label: 'Declined',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-xcircle mr-1"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
    },
    negotiating: {
      variant: 'warning' as const,
      label: 'Negotiating',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-circle mr-1"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
    },
    awaiting_info: {
      variant: 'default' as const,
      label: 'Awaiting Info',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-help-circle mr-1"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
    }
  };

  const { variant, label, icon } = statusConfig[status];

  return (
    <Badge variant={variant} className={`flex items-center ${className}`}>
      {icon}
      {label}
    </Badge>
  );
};

export default StatusBadge;