import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { userProfile } from '../data/mockData';
import GithubIcon from '../components/icons/GithubIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import InstagramIcon from '../components/icons/InstagramIcon';

declare global {
  interface Window {
    tsParticles: any;
  }
}

type Theme = 'light' | 'dark';

const TypingAnimation: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [currentCharIndex, setCurrentCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  const texts = [
    'Full Stack Developer',
    'React Developer', 
    'Node.js Developer',
    'TypeScript Expert',
    'Frontend Specialist',
    'Backend Engineer'
  ];

  React.useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentCharIndex < currentText.length) {
          setCurrentCharIndex(prev => prev + 1);
        } else {
          // Finished typing, start deleting after pause
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
          return;
        }
      } else {
        // Deleting backward
        if (currentCharIndex > 0) {
          setCurrentCharIndex(prev => prev - 1);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % texts.length);
          return;
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentTextIndex, isDeleting, texts]);

  const displayText = texts[currentTextIndex].slice(0, currentCharIndex);

  return (
    <span className="inline-block min-h-[2rem] flex items-center justify-center text-center w-full">
      <span>{displayText}</span>
      <motion.span 
        className="inline-block w-0.5 h-8 bg-orange-400 ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    </span>
  );
};

const Hero: React.FC = () => {
  useEffect(() => {
    const loadParticles = (theme: Theme) => {
      if (window.tsParticles) {
        window.tsParticles.load({
          id: 'tsparticles',
          options: {
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: false },
                onClick: { enable: false },
              },
            },
            particles: {
              color: { value: theme === 'dark' ? '#334155' : '#cbd5e1' },
              links: {
                color: theme === 'dark' ? '#ef4444' : '#dc2626',
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: { default: 'bounce' },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 40,
              },
              opacity: { value: 0.3 },
              shape: { type: 'circle' },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
            background: { color: 'transparent' },
          },
        });
      }
    };

    const handleThemeChange = (event: Event) => {
        const customEvent = event as CustomEvent;
        loadParticles(customEvent.detail.theme);
    };

    window.addEventListener('themeChanged', handleThemeChange as EventListener);

    // Initial load
    const initialTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    loadParticles(initialTheme);


    return () => {
        window.removeEventListener('themeChanged', handleThemeChange as EventListener);
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadResume = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to download the resume?")) {
      window.open(userProfile.resumeUrl, '_blank');
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const socialVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-secondary dark:bg-dark-secondary overflow-hidden transition-colors duration-300">
      <div id="tsparticles" className="absolute inset-0 z-0" />
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary dark:text-dark-text-primary"
          variants={itemVariants}
        >
          Hi, I'm <motion.span 
            className="text-accent dark:text-dark-accent"
            initial={{ color: '#dc2626' }}
            animate={{ 
              color: ['#dc2626', '#ef4444', '#f87171', '#fca5a5', '#dc2626']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {userProfile.name}
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          <TypingAnimation />
        </motion.h2>
        
        <motion.p 
          className="mt-6 text-lg sm:text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {userProfile.tagline}
        </motion.p>
        
        <motion.div 
          className="mt-8 flex justify-center gap-6"
          variants={containerVariants}
        >
          <motion.a
            href={userProfile.resumeUrl}
            onClick={handleDownloadResume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent dark:bg-dark-accent text-primary dark:text-dark-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-red-600 dark:hover:bg-red-500 transition-colors duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            onClick={handleSmoothScroll}
            className="inline-block bg-primary dark:bg-dark-secondary text-text-primary dark:text-dark-text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-300 ring-1 ring-slate-300 dark:ring-slate-500"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Contact Me
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="mt-10 flex justify-center flex-wrap items-center gap-x-8 gap-y-4"
          variants={containerVariants}
        >
          <motion.a 
            href={userProfile.socials.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-lg text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300"
            variants={socialVariants}
            whileHover="hover"
          >
            <GithubIcon className="h-6 w-6" />
            <span className="font-medium">GitHub</span>
          </motion.a>
          <motion.a 
            href={userProfile.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-lg text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300"
            variants={socialVariants}
            whileHover="hover"
          >
            <LinkedinIcon className="h-6 w-6" />
            <span className="font-medium">LinkedIn</span>
          </motion.a>
          <motion.a 
            href={userProfile.socials.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-lg text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300"
            variants={socialVariants}
            whileHover="hover"
          >
            <InstagramIcon className="h-6 w-6" />
            <span className="font-medium">Instagram</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;