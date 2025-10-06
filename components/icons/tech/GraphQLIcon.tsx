import React from 'react';

const GraphQLIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path
      fill="#E10098"
      d="M24 4l-20 12.12v15.75L24 44l20-12.12V16.12L24 4zm16.97 14.25l-7.03 4.1v8.2l7.03-4.1v-8.2zM7.03 18.25v8.2l7.03 4.1v-8.2l-7.03-4.1zm16.97 18.18l-7.03-4.1v-8.2l7.03 4.1v8.2zM17 14.15l7-4.1 7 4.1-7 4.1-7-4.1z"
    />
  </svg>
);

export default GraphQLIcon;