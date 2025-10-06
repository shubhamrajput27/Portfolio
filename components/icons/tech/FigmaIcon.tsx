import React from 'react';

const FigmaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" fill="#f24e1e"/>
    <path d="M9.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#ff7262"/>
    <path d="M7 9.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" fill="#a259ff"/>
    <path d="M9.5 14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#1abcfe"/>
    <path d="M14.5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" fill="#0acf83"/>
  </svg>
);

export default FigmaIcon;