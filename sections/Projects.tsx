import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import { projects } from '../data/mockData';
import GithubIcon from '../components/icons/GithubIcon';
import ExternalLinkIcon from '../components/icons/ExternalLinkIcon';
import ProjectModal from '../components/ProjectModal';
import type { Project } from '../types';


interface ProjectCardProps extends Project {
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, techStack, githubLink, liveDemoLink, className }) => (
  <motion.div 
    className={`bg-secondary dark:bg-dark-secondary rounded-lg overflow-hidden shadow-lg flex flex-col h-full ${className}`}
    whileHover={{ 
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.3 }
          }}
        />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <motion.h3 
        className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-2"
        whileHover={{ color: "#dc2626" }}
      >
        {title}
      </motion.h3>
      <p className="text-text-secondary dark:text-dark-text-secondary mb-4 flex-grow">{description}</p>
      <motion.div 
        className="flex flex-wrap gap-2 mb-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {techStack.map((tech, index) => (
          <motion.span 
            key={tech} 
            className="bg-primary dark:bg-dark-primary text-accent dark:text-dark-accent text-xs font-semibold px-3 py-1 rounded-full"
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "#dc2626",
              color: "#ffffff"
            }}
            custom={index}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
      <div className="mt-auto flex items-center gap-4">
        <motion.a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          onClick={(e) => e.stopPropagation()} 
          className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <GithubIcon className="h-5 w-5" />
          <span>Code</span>
        </motion.a>
        {liveDemoLink && (
          <motion.a 
            href={liveDemoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()} 
            className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLinkIcon className="h-5 w-5" />
            <span>Live Demo</span>
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

ProjectCard.displayName = 'ProjectCard';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section title="Projects">
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group cursor-pointer"
            variants={itemVariants}
            onClick={() => handleOpenModal(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleOpenModal(project)}
            aria-label={`View details for ${project.title}`}
            whileHover={{ 
              rotateY: 5,
              rotateX: 5,
              transition: { duration: 0.2 }
            }}
            custom={index}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;