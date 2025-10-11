import React from 'react';

interface CIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const CIcon: React.FC<CIconProps> = ({ 
  size = 24, 
  className = '', 
  ...props 
}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 128 128" 
    width={size}
    height={size}
    className={`c-icon ${className}`}
    role="img"
    aria-label="C Programming Language"
    {...props}
  >
    <path fill="#a9bacd" d="M125 50c-4-32-24-50-62-50C29 0 3 24 3 64c0 39 24 64 64 64 32 0 55-19 58-50H87c-2 11-8 20-20 20-21 0-24-16-24-33 0-23 8-35 22-35 13 0 20 7 22 20z" />
  </svg>
);

export default CIcon;