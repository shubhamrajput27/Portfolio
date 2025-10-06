import React from 'react';

const ExpressIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 80 30" {...props}>
    <rect width="80" height="30" rx="4" ry="4" fill="#fff"/>
    <text x="40" y="20"
      fontFamily="monospace"
      fontSize="12"
      fontWeight="bold"
      textAnchor="middle"
      fill="#333">
      Express
    </text>
  </svg>
);

export default ExpressIcon;