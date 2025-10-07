
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Animation variants for different sections
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

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

    const sectionElements = Object.values(sectionRefs.current).filter(Boolean) as HTMLElement[];
    sectionElements.forEach((section) => {
      navObserver.observe(section);
    });

    return () => {
      navObserver.disconnect();
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <AnimatePresence>
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Loader onLoaded={() => setIsLoading(false)} />
        </motion.div>
      </AnimatePresence>
    );
  }

  const sectionComponents = [
    { component: Hero, id: SECTIONS[0].id },
    { component: About, id: SECTIONS[1].id },
    { component: Skills, id: SECTIONS[2].id },
    { component: Projects, id: SECTIONS[3].id },
    { component: Experience, id: SECTIONS[4].id },
    { component: Education, id: SECTIONS[5].id },
    { component: Contact, id: SECTIONS[6].id },
  ];

  return (
    <motion.div 
      className="flex flex-col min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        {sectionComponents.map(({ component: Component, id }, index) => (
          <motion.div
            key={id}
            id={id}
            ref={(el) => { sectionRefs.current[id] = el; }}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <Component />
          </motion.div>
        ))}
      </main>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
      <Chatbot />
    </motion.div>
  );
};

export default App;
