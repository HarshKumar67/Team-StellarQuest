
import React from 'react';

const TelescopeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        className={className}
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
    >
        <path d="M5 21L8 18M13.5 15.5L10 12L12 10L15.5 13.5M13.5 15.5L17 19L19 17L15.5 13.5M13.5 15.5L12 17L10.5 15.5L12 14L13.5 15.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 5L19 3L14 8L16 10L21 5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 14L8 9L10 11L5 16L3 14Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default TelescopeIcon;
