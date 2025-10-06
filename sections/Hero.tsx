import React, { useEffect } from 'react';
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
                color: theme === 'dark' ? '#38bdf8' : '#0ea5e9',
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

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-secondary dark:bg-dark-secondary overflow-hidden transition-colors duration-300">
      <div id="tsparticles" className="absolute inset-0 z-0" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary dark:text-dark-text-primary opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Hi, I'm <span className="text-accent dark:text-dark-accent">{userProfile.name}</span>
        </h1>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {userProfile.profession}
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          {userProfile.tagline}
        </p>
        <div className="mt-8 flex justify-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <a
            href={userProfile.resumeUrl}
            onClick={handleDownloadResume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent dark:bg-dark-accent text-primary dark:text-dark-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-sky-600 dark:hover:bg-sky-500 transition-colors duration-300"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={handleSmoothScroll}
            className="inline-block bg-primary dark:bg-dark-secondary text-text-primary dark:text-dark-text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-300 ring-1 ring-slate-300 dark:ring-slate-500"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-10 flex justify-center flex-wrap items-center gap-x-8 gap-y-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <a href={userProfile.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300">
            <GithubIcon className="h-6 w-6" />
            <span className="font-medium">GitHub</span>
          </a>
          <a href={userProfile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300">
            <LinkedinIcon className="h-6 w-6" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a href={userProfile.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300">
            <InstagramIcon className="h-6 w-6" />
            <span className="font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;