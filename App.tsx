
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Chatbot from './components/Chatbot';
import { SECTIONS } from './constants';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (isLoading) return;

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px', threshold: 0 }
    );

    const animationObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionElements = Object.values(sectionRefs.current);
    sectionElements.forEach((section) => {
      if (section) {
        navObserver.observe(section);
        animationObserver.observe(section);
      }
    });

    return () => {
      navObserver.disconnect();
      animationObserver.disconnect();
    };
  }, [isLoading]);

  if (isLoading) {
    return <Loader onLoaded={() => setIsLoading(false)} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <div id={SECTIONS[0].id} ref={(el) => { sectionRefs.current[SECTIONS[0].id] = el; }} className="opacity-0">
          <Hero />
        </div>
        <div id={SECTIONS[1].id} ref={(el) => { sectionRefs.current[SECTIONS[1].id] = el; }} className="opacity-0">
          <About />
        </div>
        <div id={SECTIONS[2].id} ref={(el) => { sectionRefs.current[SECTIONS[2].id] = el; }} className="opacity-0">
          <Skills />
        </div>
        <div id={SECTIONS[3].id} ref={(el) => { sectionRefs.current[SECTIONS[3].id] = el; }} className="opacity-0">
          <Projects />
        </div>
        <div id={SECTIONS[4].id} ref={(el) => { sectionRefs.current[SECTIONS[4].id] = el; }} className="opacity-0">
          <Experience />
        </div>
        <div id={SECTIONS[5].id} ref={(el) => { sectionRefs.current[SECTIONS[5].id] = el; }} className="opacity-0">
          <Education />
        </div>
        <div id={SECTIONS[6].id} ref={(el) => { sectionRefs.current[SECTIONS[6].id] = el; }} className="opacity-0">
          <Contact />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
