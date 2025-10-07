
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { userProfile } from '../data/mockData';

declare global {
  interface Window {
    tsParticles: any;
  }
}

interface LoaderProps {
  onLoaded: () => void;
}

const loadingStatuses = [
    'Initializing components...',
    'Fetching project data...',
    'Loading portfolio & experiences...',
    'Finalizing...',
];

const Loader: React.FC<LoaderProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    if (window.tsParticles) {
      window.tsParticles.load({
        id: 'tsparticles-loader',
        options: {
            fpsLimit: 60,
            particles: {
                number: { value: 20, density: { enable: true, area: 800 } },
                color: { value: "#475569" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 2, random: { enable: true, minimumValue: 1 } },
                move: {
                    enable: true,
                    speed: 0.5,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                },
            },
            interactivity: { events: { resize: true } },
            detectRetina: true,
            background: { color: "transparent" },
        }
      });
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 3;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onLoaded, 200); 
          return 100;
        }

        if (newProgress > 25 && statusIndex === 0) setStatusIndex(1);
        if (newProgress > 50 && statusIndex === 1) setStatusIndex(2);
        if (newProgress > 80 && statusIndex === 2) setStatusIndex(3);
        
        return newProgress;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onLoaded, statusIndex]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-primary text-slate-300 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div id="tsparticles-loader" className="absolute inset-0 z-0" />
      <div className="relative z-10 text-center w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Hello World!
          </motion.h1>
          <motion.p 
            className="mt-2 text-xl md:text-2xl text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {userProfile.profession}
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-16 w-full max-w-md px-4 mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex justify-between items-center text-sm font-medium tracking-widest text-slate-400 mb-2">
            <div className="flex items-center">
              <motion.span 
                className="w-2 h-2 bg-orange-400 rounded-full mr-2"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span>LOADING PORTFOLIO</span>
            </div>
            <motion.span
              key={progress}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.1 }}
            >
              {String(progress).padStart(3, '0')}%
            </motion.span>
          </div>
          
          <div className="w-full bg-slate-700 rounded-full h-1.5 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-orange-400 to-pink-400 h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>

          <div className="mt-8 flex flex-col items-center">
            <div className="flex items-center space-x-2 h-8">
              <motion.div 
                className="w-7 h-7 border-2 border-slate-600 border-t-orange-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              {[0, 0.2, 0.4, 0.6].map((delay, index) => (
                <motion.div 
                  key={index}
                  className="w-1.5 h-1.5 bg-slate-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            <motion.p 
              className="mt-4 text-slate-500 text-sm h-5"
              key={statusIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {loadingStatuses[statusIndex]}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
