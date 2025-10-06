import React from 'react';

const FirebaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path fill="#FFCA28" d="M26.2 4.2 8.3 12.3v23.4l17.9 8.1 17.9-8.1V12.3L26.2 4.2z" />
    <path fill="#FFA000" d="m8.3 12.3 17.9 25.1 17.9-25.1-9-4.1-17.8 0z" />
    <path fill="#FFC107" d="m8.3 35.7 17.9-8.1V4.2l-17.9 8.1z" />
    <path d="m28.6 20.3-2.4-16.1-17.9 8.1 4.4 29.5 13.5-6.1z" fill="#F57C00" />
  </svg>
);

export default FirebaseIcon;