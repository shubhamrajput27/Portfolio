import React, { useState, useEffect, useRef } from 'react';
import Section from '../components/Section';
import { experiences } from '../data/mockData';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Section title="Experience">
      <div ref={sectionRef} className="relative border-l-2 border-secondary dark:border-dark-secondary ml-6">
        <div className={`absolute w-3 h-3 bg-accent dark:bg-dark-accent rounded-full -left-[7px] top-0 transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}></div>
        {experiences.map((exp, index) => (
          <div key={index} className={`mb-12 ml-12 relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 150}ms` }}>
            <div className={`absolute w-3 h-3 bg-accent dark:bg-dark-accent rounded-full -left-[54px] top-1 border-2 border-primary dark:border-dark-primary transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: `${index * 150}ms` }}></div>
            <h3 className="text-xl font-bold text-accent dark:text-dark-accent">{exp.role}</h3>
            <p className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-1">{exp.company}</p>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-3">{exp.duration}</p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-dark-text-secondary">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;