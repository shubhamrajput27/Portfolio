import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { education } from '../data/mockData';

const Education: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    }
  };

  return (
    <Section title="Education">
      <motion.div 
        className="max-w-4xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-600 overflow-hidden">
          <motion.div 
            className="w-full bg-gradient-to-b from-red-500 to-rose-400"
            variants={lineVariants}
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-20"
              variants={itemVariants}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              {/* Timeline Dot */}
              <motion.div 
                className="absolute left-6 w-4 h-4 bg-gradient-to-br from-red-500 to-rose-400 rounded-full border-4 border-primary dark:border-dark-primary shadow-lg"
                variants={dotVariants}
                whileHover={{ 
                  scale: 1.3,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)"
                }}
              />

              {/* Content Card */}
              <motion.div 
                className="bg-secondary dark:bg-dark-secondary p-6 rounded-lg shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <motion.h3 
                    className="text-xl font-bold text-accent dark:text-dark-accent"
                    whileHover={{ color: "#dc2626" }}
                  >
                    {edu.degree}
                  </motion.h3>
                  <motion.span 
                    className="text-sm font-semibold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-full mt-2 md:mt-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {edu.duration}
                  </motion.span>
                </div>
                
                <p className="text-lg font-medium text-text-primary dark:text-dark-text-primary mb-4">
                  {edu.institution}
                </p>
                
                {edu.achievements.length > 0 && (
                  <motion.ul 
                    className="space-y-2"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {edu.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        className="text-text-secondary dark:text-dark-text-secondary flex items-start"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-red-500 mr-2 mt-1.5">•</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Education;