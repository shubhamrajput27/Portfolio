import type { UserProfile, SkillCategory, Project, Experience, Education } from '../types';

export const userProfile: UserProfile = {
  name: 'Shubham',
  profession: 'Full Stack Developer',
  tagline: 'Crafting beautiful and functional web experiences.',
  bio: "I'm a passionate full stack developer with a knack for creating elegant user interfaces and robust backend systems. With over 5 years in the industry, I've honed my skills in React, Node.js, and modern web technologies. I thrive on solving complex problems and turning ideas into reality. When I'm not coding, you can find me exploring new hiking trails or contributing to open-source projects.",
  resumeUrl: '/shubham_resume.pdf',
  socials: {
    github: 'https://github.com/shubhamrajput27',
    linkedin: 'https://www.linkedin.com/in/shubham-singh-a96623290/',
    instagram: 'https://www.instagram.com/shubh_rajput.27?igsh=MTlwMTR4Z3k0MjVqag==',
  },
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', iconId: 'html5', proficiency: 95, description: 'Expert in semantic HTML for accessible and well-structured web content.' },
      { name: 'CSS', iconId: 'css3', proficiency: 90, description: 'Skilled in modern CSS, including Flexbox, Grid, and custom animations.' },
      { name: 'Sass', iconId: 'sass', proficiency: 85, description: 'Using Sass for more maintainable and organized stylesheets with variables and mixins.' },
      { name: 'JavaScript', iconId: 'javascript', proficiency: 95, description: 'Deep understanding of ES6+ features, asynchronous programming, and DOM manipulation.' },
      { name: 'React JS', iconId: 'react', proficiency: 95, description: '5+ years building complex, scalable web apps and reusable component libraries.' },
      { name: 'TypeScript', iconId: 'typescript', proficiency: 90, description: 'Enhancing code quality and maintainability in large-scale applications with static typing.' },
      { name: 'Next.js', iconId: 'nextjs', proficiency: 85, description: 'Building server-side rendered (SSR) and static site generated (SSG) React applications.' },
      { name: 'Tailwind CSS', iconId: 'tailwindcss', proficiency: 95, description: 'Rapidly building modern, responsive user interfaces with a utility-first approach.' },
      { name: 'Redux', iconId: 'redux', proficiency: 80, description: 'Managing complex application state for large-scale React projects.' },
      { name: 'Framer Motion', iconId: 'framer', proficiency: 80, description: 'Creating fluid and complex animations with a simple and intuitive API for React.' },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node JS', iconId: 'nodejs', proficiency: 90, description: 'Building fast and scalable server-side applications and RESTful APIs.' },
      { name: 'Express.js', iconId: 'express', proficiency: 90, description: 'Creating robust APIs and web servers with this minimal and flexible Node.js framework.' },
      { name: 'Firebase', iconId: 'firebase', proficiency: 80, description: 'Utilizing Firebase services like Firestore, Authentication, and Hosting for full-stack apps.' },
      { name: 'MongoDB', iconId: 'mongodb', proficiency: 85, description: 'Designing and managing NoSQL databases for flexible and scalable data storage.' },
      { name: 'GraphQL', iconId: 'graphql', proficiency: 75, description: 'Building efficient and flexible APIs with a query language for your data.' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'GitHub', iconId: 'github', proficiency: 95, description: 'Expert in version control, collaboration, and CI/CD workflows using Git and GitHub.' },
      { name: 'Docker', iconId: 'docker', proficiency: 70, description: 'Containerizing applications for consistent development and deployment environments.' },
      { name: 'Vercel', iconId: 'vercel', proficiency: 90, description: 'Deploying and scaling modern web applications with ease.' },
      { name: 'Jest', iconId: 'jest', proficiency: 80, description: 'Writing unit and integration tests for JavaScript applications to ensure code quality.' },
      { name: 'Webpack', iconId: 'webpack', proficiency: 75, description: 'Configuring module bundlers for optimizing and managing project assets.' },
      { name: 'Figma', iconId: 'figma', proficiency: 85, description: 'Collaborating with designers and translating high-fidelity designs into code.' },
      { name: 'Render', iconId: 'render', proficiency: 80, description: 'Deploying backend services and databases on a modern cloud platform.' },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'MentorConnect - Professional Mentorship Platform',
    description: 'A modern, full-stack mentorship platform connecting students with expert mentors worldwide. Features perfect Lighthouse scores, PWA capabilities, and comprehensive mentoring tools.',
    image: '/images/mentorconnect-landing.png',
    techStack: ['PHP 8.0+', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'PWA', 'Apache'],
    githubLink: 'https://github.com/shubhamrajput27/mentorconnect',
    liveDemoLink: 'http://localhost/mentorconnect',
    detailedDescription: 'MentorConnect is a cutting-edge mentorship platform that bridges the gap between students and experienced professionals worldwide. Built with modern web technologies and achieving perfect 100/100 Lighthouse scores across all metrics (Performance, Accessibility, Best Practices, SEO), this Progressive Web App offers an exceptional user experience. The platform features smart mentor matching, real-time messaging, integrated scheduling, progress tracking, and a comprehensive admin dashboard. With advanced security measures, offline capabilities, and mobile-first responsive design, MentorConnect represents the future of digital mentorship.',
    images: [
      '/images/mentorconnect-landing.png',
      'https://i.imgur.com/P4w58hS.png',
      'https://i.imgur.com/6Z2y2jZ.png',
    ],
    challenges: [
        {
            challenge: 'Achieving perfect Lighthouse scores while maintaining rich functionality and real-time features.',
            solution: 'Implemented advanced performance optimization techniques including service workers, intelligent caching strategies, image optimization, lazy loading, and code splitting. Used critical CSS inlining and resource preloading to minimize render-blocking resources.'
        },
        {
            challenge: 'Creating a scalable smart matching algorithm that considers multiple criteria for mentor-student pairing.',
            solution: 'Developed a sophisticated weighted scoring system using PHP and MySQL that evaluates skills, interests, career goals, availability, and user preferences. The algorithm runs as an optimized background process with caching to ensure fast matching results.'
        },
        {
            challenge: 'Building a Progressive Web App with offline capabilities and real-time messaging.',
            solution: 'Implemented service workers for offline functionality, background sync for message delivery, and WebSocket connections for real-time communication. Created a robust caching strategy that allows core functionality to work even without internet connectivity.'
        }
    ],
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with product listings, a shopping cart, and a secure checkout process. Built with a responsive design for a seamless experience on any device.',
    image: 'https://picsum.photos/seed/project1/400/300',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    githubLink: 'https://github.com/shubhamrajput27/ecommerce',
    liveDemoLink: 'https://example.com/ecommerce-demo',
    detailedDescription: 'This e-commerce platform is a complete online shopping solution built with the MERN stack. It features a dynamic product catalog, advanced search and filtering, user authentication, and a secure payment gateway integration with Stripe. The admin panel allows for easy product and order management.',
    images: [
      'https://picsum.photos/seed/ecomm1/800/600',
      'https://picsum.photos/seed/ecomm2/800/600',
      'https://picsum.photos/seed/ecomm3/800/600',
    ],
    challenges: [
        {
            challenge: 'Managing global state for the shopping cart across the entire application.',
            solution: 'Implemented Redux Toolkit for efficient and predictable state management, allowing for easy updates to the cart from any component and persisting the cart state in local storage.'
        }
    ],
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool that helps teams organize their work. Features include drag-and-drop boards, real-time updates, and user authentication.',
    image: 'https://picsum.photos/seed/project2/400/300',
    techStack: ['React', 'Firebase', 'Tailwind CSS', 'Redux Toolkit'],
    githubLink: 'https://github.com/shubhamrajput27/task-manager',
    detailedDescription: 'A Kanban-style task management application designed for team collaboration. Users can create projects, add tasks to boards, and move them through different stages (e.g., "To Do", "In Progress", "Done") using a smooth drag-and-drop interface. Real-time updates are handled by Firebase Firestore, ensuring all team members are synchronized.',
    images: [
      'https://picsum.photos/seed/task1/800/600',
      'https://picsum.photos/seed/task2/800/600',
    ],
    challenges: [
        {
            challenge: 'Implementing real-time, multi-user collaboration for the drag-and-drop board.',
            solution: 'Leveraged Firebase Firestore\'s real-time database capabilities to listen for changes and instantly update the UI for all connected clients, providing a seamless collaborative experience.'
        }
    ],
  },
  {
    title: 'Portfolio Website V2',
    description: 'The very portfolio you are looking at. A dynamic, modern website to showcase my professional work and skills, built with the MERN stack.',
    image: 'https://picsum.photos/seed/project3/400/300',
    techStack: ['React', 'Express.js', 'Framer Motion', 'TypeScript'],
    githubLink: 'https://github.com/shubhamrajput27/portfolio-v2',
    liveDemoLink: '#',
    detailedDescription: 'This personal portfolio was built from the ground up using React, TypeScript, and Tailwind CSS to create a fast, modern, and fully responsive user experience. It features smooth animations with Framer Motion, a dark/light theme toggle, and an interactive AI chatbot powered by the Gemini API for engaging with visitors.',
    images: [
      'https://picsum.photos/seed/port1/800/600',
      'https://picsum.photos/seed/port2/800/600',
    ],
    challenges: [
        {
            challenge: 'Creating smooth, performant animations that work across the entire site.',
            solution: 'Utilized the Framer Motion library to implement declarative, physics-based animations, ensuring a fluid and engaging user experience without sacrificing performance.'
        }
    ],
  },
  {
    title: 'Weather Dashboard',
    description: 'A clean and simple weather application that provides real-time weather data for any location using a third-party API. Includes a 5-day forecast.',
    image: 'https://picsum.photos/seed/project4/400/300',
    techStack: ['React', 'OpenWeatherMap API', 'CSS Modules'],
    githubLink: 'https://github.com/shubhamrajput27/weather-app',
    detailedDescription: 'A minimalist weather dashboard that allows users to search for a city and get current weather conditions, as well as a 5-day forecast. The application fetches data from the OpenWeatherMap API and presents it in a clean, easy-to-read interface. The background dynamically changes based on the weather conditions.',
    images: [
      'https://picsum.photos/seed/weather1/800/600',
      'https://picsum.photos/seed/weather2/800/600',
    ],
    challenges: [
        {
            challenge: 'Handling API rate limits and caching data to improve performance and user experience.',
            solution: 'Implemented a client-side caching mechanism using local storage to store recent searches, reducing the number of redundant API calls and providing faster load times for previously viewed locations.'
        }
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2021 - Present',
    description: [
      'Led the development of a new client-facing dashboard using React and TypeScript, improving user engagement by 25%.',
      'Mentored junior developers and conducted code reviews to maintain high code quality standards.',
      'Collaborated with UX/UI designers to translate wireframes into pixel-perfect, responsive web pages.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Innovate Co.',
    duration: 'Jun 2018 - Dec 2020',
    description: [
      'Developed and maintained features for a large-scale SaaS application using React and Redux.',
      'Improved application performance by optimizing component rendering and state management.',
      'Worked in an Agile team, participating in daily stand-ups, sprint planning, and retrospectives.',
    ],
  },
];

export const education: Education[] = [
    {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Technology',
        duration: '2014 - 2018',
        achievements: [
            'Graduated with Summa Cum Laude honors.',
            'President of the University Coding Club.',
            'Published a research paper on machine learning algorithms.',
        ]
    }
];