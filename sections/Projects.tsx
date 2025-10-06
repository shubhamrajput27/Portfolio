import React, { useState, useEffect, useRef } from 'react';
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

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, techStack, githubLink, liveDemoLink, className, style }) => (
  <div 
    className={`bg-secondary dark:bg-dark-secondary rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 flex flex-col h-full ${className}`}
    style={style}
  >
    <div className="overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary dark:text-dark-text-secondary mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span key={tech} className="bg-primary dark:bg-dark-primary text-accent dark:text-dark-accent text-xs font-semibold px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-4">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300 flex items-center gap-2">
          <GithubIcon className="h-5 w-5" />
          <span>Code</span>
        </a>
        {liveDemoLink && (
          <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300 flex items-center gap-2">
            <ExternalLinkIcon className="h-5 w-5" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

ProjectCard.displayName = 'ProjectCard';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
  
  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };


  return (
    <Section title="Projects">
      <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`group cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 150}ms` }}
            onClick={() => handleOpenModal(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleOpenModal(project)}
            aria-label={`View details for ${project.title}`}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </Section>
  );
};

export default Projects;