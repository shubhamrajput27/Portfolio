import React, { useState, useEffect, useRef } from 'react';
import Section from '../components/Section';
import { education } from '../data/mockData';

const Education: React.FC = () => {
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
        threshold: 0.2,
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
    <Section title="Education">
      <div ref={sectionRef} className="max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <div key={index} className={`bg-secondary dark:bg-dark-secondary p-8 rounded-lg shadow-lg ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-accent dark:text-dark-accent">{edu.degree}</h3>
            <p className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mt-1">{edu.institution}</p>
            <p className="text-md text-text-secondary dark:text-dark-text-secondary mt-1 mb-4">{edu.duration}</p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-dark-text-secondary">
              {edu.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;