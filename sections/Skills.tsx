import React, { useState, useEffect, useRef, useMemo } from 'react';
import Section from '../components/Section';
import { skillCategories } from '../data/mockData';
import SkillIcon from '../components/SkillIcon';

const Skills: React.FC = () => {
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

  const allSkills = useMemo(() => skillCategories.flatMap(category => category.skills), []);

  return (
    <Section title="My Skills">
      <div ref={sectionRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {allSkills.map((skill, index) => {
          const delay = index * 75;
          return (
            <div
              key={skill.name}
              className={`relative group flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-br from-secondary to-slate-100 dark:from-slate-800 dark:to-dark-secondary rounded-lg border border-slate-200 dark:border-slate-800 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 dark:hover:shadow-dark-accent/20 hover:border-accent dark:hover:border-dark-accent ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${delay}ms` }}
            >
              <div className="w-16 h-16 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_12px_rgba(3,105,161,0.6)] dark:group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">
                <SkillIcon iconId={skill.iconId} className="w-full h-full object-contain" />
              </div>
              <p className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary mt-2 text-center">
                {skill.name}
              </p>

              {/* Tooltip */}
              {(skill.description || skill.proficiency) && (
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 bg-slate-900 text-white text-sm rounded-lg shadow-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <h4 className="font-bold text-base mb-2 text-dark-accent">{skill.name}</h4>
                  {skill.description && (
                    <p className="text-xs text-slate-300 mb-3">{skill.description}</p>
                  )}
                  {skill.proficiency && (
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-slate-400">Proficiency</span>
                        <span className="text-xs font-bold text-dark-accent">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-dark-accent h-2 rounded-full"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-slate-900"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;