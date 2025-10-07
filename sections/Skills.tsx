import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { skillCategories } from '../data/mockData';
import SkillIcon from '../components/SkillIcon';

const Skills: React.FC = () => {
  const allSkills = useMemo(() => skillCategories.flatMap(category => category.skills), []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      rotateY: 180
    },
    visible: { 
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const tooltipVariants = {
    hidden: { 
      opacity: 0, 
      y: 10, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section title="My Skills">
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {allSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="relative group flex flex-col items-center justify-center gap-2 p-6 bg-gradient-to-br from-secondary to-slate-100 dark:from-slate-800 dark:to-dark-secondary rounded-lg border border-slate-200 dark:border-slate-800 shadow-lg"
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              borderColor: "rgb(14, 165, 233)",
              transition: { duration: 0.2 }
            }}
            custom={index}
          >
            <motion.div 
              className="w-16 h-16"
              variants={iconVariants}
              whileHover="hover"
            >
              <SkillIcon iconId={skill.iconId} className="w-full h-full object-contain" />
            </motion.div>
            <p className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary mt-2 text-center">
              {skill.name}
            </p>

            {/* Tooltip */}
            {(skill.description || skill.proficiency) && (
              <motion.div 
                className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 bg-slate-900 text-white text-sm rounded-lg shadow-xl p-4 pointer-events-none z-10"
                variants={tooltipVariants}
                initial="hidden"
                whileHover="visible"
              >
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
                      <motion.div
                        className="bg-dark-accent h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                )}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-slate-900"></div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;