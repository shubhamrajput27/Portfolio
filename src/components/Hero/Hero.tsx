import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { userProfile } from '../../data/mockData';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import InstagramIcon from '../icons/InstagramIcon';
import FloatingTech from './FloatingTech';

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
    <span className="flex min-h-8 items-center justify-center text-center w-full">
      <span>{displayText}</span>
      <motion.span 
        className="inline-block w-0.5 h-8 bg-[#ff4500] ml-1"
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

function Hero() {
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
    try {
      // Create a temporary link with the download attribute to force file download
      const link = document.createElement('a');
      link.href = userProfile.resumeUrl;
  // Suggest a filename — force the download filename to "Shubham's Resume.pdf"
  // (some browsers may sanitize punctuation; this ensures the downloaded file appears with this name)
  link.download = "Shubham's Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      // Fallback: open in new tab if download attribute is not supported
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
        duration: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
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
        duration: 0.5
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#fffaf0] dark:bg-dark-secondary overflow-hidden transition-colors duration-300">
      {/* Floating Tech Icons Background */}
      <FloatingTech />
      
      <div id="tsparticles" className="absolute inset-0 z-0 opacity-30" />
      
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-muted"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-primary">
            {userProfile.name}
          </span>
        </motion.h1>
        
        <motion.h2 
          className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold bg-linear-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text text-transparent"
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
            className="inline-block bg-linear-to-r from-[#ff4500] to-[#ff6347] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            onClick={handleSmoothScroll}
            className="inline-block bg-cream text-[#ff4500] font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-orange-200"
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
            className="flex items-center gap-2 text-lg text-[#181717] hover:text-[#333] transition-colors duration-300"
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
            className="flex items-center gap-2 text-lg text-[#0A66C2] hover:text-[#004182] transition-colors duration-300"
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
            className="flex items-center gap-2 text-lg text-[#E4405F] hover:text-[#C13584] transition-colors duration-300"
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
