import React from 'react';

const Css3Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path fill="#0277BD" d="m41.2 8.5-3.4 39.2L24 44l-13.8-3.3L6.8 8.5z" />
    <path fill="#039BE5" d="m24 11.2 11.4 0-2.9 31.6-8.5 2.3z" />
    <path
      fill="#FFF"
      d="m24 23.3-6.1 0-0.4-4.6 6.5 0 0-4.6-11.5 0 0.2 1.8 1 11.9 10.3 0-0.5 5.3-4.5 1.2-0.1 0-4.6 4.6 0z"
    />
    <path
      fill="#E0E0E0"
      d="m24 23.3v4.6l5.8 0-0.5 6-4.5 1.2v4.8l8.5-2.3 0.1-1.3 0.8-9.4 0.1-0.9-6.3 0z"
    />
  </svg>
);

export default Css3Icon;