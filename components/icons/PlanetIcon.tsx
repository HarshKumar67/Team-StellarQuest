
import React from 'react';

const PlanetIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-3.938 11.75c-1.63-.52-2.93-2.12-2.93-3.75 0-1.25.7-2.43 1.83-3.17.65.65 1.48 1.13 2.41 1.42-1.35.8-2.31 2.2-2.31 3.5zm7.876 0c0-1.3-0.96-2.7-2.31-3.5 0.93-0.29 1.76-0.77 2.41-1.42 1.13 0.74 1.83 1.92 1.83 3.17 0 1.63-1.3 3.23-2.93 3.75z" />
  </svg>
);

export default PlanetIcon;
