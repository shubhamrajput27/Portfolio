import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

type Theme = 'light' | 'dark';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme as Theme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full text-text-secondary dark:text-dark-text-secondary hover:bg-secondary dark:hover:bg-dark-secondary transition-colors"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: theme === 'dark' ? 180 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        {theme === 'light' ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MoonIcon className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <SunIcon className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
