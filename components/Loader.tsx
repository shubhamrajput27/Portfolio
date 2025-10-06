
import React, { useState, useEffect } from 'react';
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
        const newProgress = prev + 1;
        if (newProgress > 100) {
          clearInterval(interval);
          setTimeout(onLoaded, 500); 
          return 100;
        }

        if (newProgress > 25 && statusIndex === 0) setStatusIndex(1);
        if (newProgress > 50 && statusIndex === 1) setStatusIndex(2);
        if (newProgress > 85 && statusIndex === 2) setStatusIndex(3);
        
        return newProgress;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onLoaded, statusIndex]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-primary text-slate-300 font-sans">
      <div id="tsparticles-loader" className="absolute inset-0 z-0" />
      <div className="relative z-10 text-center w-full">
        <div className="animate-fade-in" style={{ animationDuration: '1s' }}>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            {userProfile.name}
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-slate-400">
            {userProfile.profession}
          </p>
        </div>

        <div className="mt-16 w-full max-w-md px-4 mx-auto animate-fade-in-up" style={{ animationDelay: '200ms', animationDuration: '1s' }}>
          <div className="flex justify-between items-center text-sm font-medium tracking-widest text-slate-400 mb-2">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
              <span>LOADING PORTFOLIO</span>
            </div>
            <span>{String(progress).padStart(3, '0')}%</span>
          </div>
          
          <div className="w-full bg-slate-700 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-400 to-pink-400 h-full rounded-full transition-all duration-300 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <div className="flex items-center space-x-2 h-8">
              <div className="w-7 h-7 border-2 border-slate-600 border-t-orange-400 rounded-full animate-spin"></div>
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
            <p className="mt-4 text-slate-500 text-sm h-5">
              {loadingStatuses[statusIndex]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
