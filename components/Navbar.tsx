import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SECTIONS } from '../constants';
import ThemeToggle from './ThemeToggle';
import { userProfile } from '../data/mockData';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const NavLink = ({ id, title }: { id: string; title: string }) => (
    <motion.a
      href={`#${id}`}
      onClick={(e) => handleSmoothScroll(e, id)}
      className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        activeSection === id
          ? 'text-accent dark:text-dark-accent'
          : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {title}
      {activeSection === id && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent dark:bg-dark-accent"
          layoutId="activeTab"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </motion.a>
  );

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.header 
      className="bg-primary/80 dark:bg-dark-primary/80 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.a 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, 'home')} 
              className="text-accent dark:text-dark-accent text-xl font-bold"
              whileHover={{ 
                textShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)"
              }}
            >
              {userProfile.name}
            </motion.a>
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {SECTIONS.map((section) => (
                <NavLink key={`nav-${section.id}`} id={section.id} title={section.title} />
              ))}
              <ThemeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center gap-2">
             <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary hover:bg-secondary dark:hover:bg-dark-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                }
              }}
            >
              {SECTIONS.map((section, index) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleSmoothScroll(e, section.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    activeSection === section.id
                      ? 'text-accent dark:text-dark-accent bg-secondary dark:bg-dark-secondary'
                      : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary hover:bg-secondary dark:hover:bg-dark-secondary'
                  }`}
                  variants={mobileItemVariants}
                  custom={index}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.title}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;