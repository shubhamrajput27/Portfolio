
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import CloseIcon from './icons/CloseIcon';
import GithubIcon from './icons/GithubIcon';
import PlayIcon from './icons/PlayIcon';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import { modalBackdrop, modalContent } from '../utils/animations';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    if (project && project.images.length > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }
  }, [project]);

  const prevImage = useCallback(() => {
    if (project && project.images.length > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    }
  }, [project]);

  useEffect(() => {
    if (project) {
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, prevImage, nextImage]);
  
  if (!project) return null;

  const { title, detailedDescription, images, challenges, techStack, githubLink, liveDemoLink } = project;
  
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
        variants={modalBackdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
      >
        <motion.div
          className="bg-primary dark:bg-dark-secondary rounded-xl shadow-2xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col overflow-hidden"
          variants={modalContent}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
        <header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 flex-shrink-0">
          <motion.h2 
            id="project-title" 
            className="text-xl font-bold text-text-primary dark:text-dark-text-primary"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.button
            onClick={onClose}
            className="p-2 rounded-full text-text-secondary dark:text-dark-text-secondary hover:bg-secondary dark:hover:bg-dark-secondary transition-colors"
            aria-label="Close project details"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <CloseIcon className="w-6 h-6" />
          </motion.button>
        </header>

        <main className="flex-grow overflow-y-auto p-6 space-y-6">
          {images && images.length > 0 && (
            <div className="relative group rounded-lg overflow-hidden">
              <img src={images[currentImageIndex]} alt={`${title} screenshot ${currentImageIndex + 1}`} className="w-full h-auto max-h-96 object-contain bg-slate-100 dark:bg-slate-900" />
              {images.length > 1 && (
                <>
                  <motion.button 
                    onClick={prevImage} 
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100" 
                    aria-label="Previous image"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                  </motion.button>
                  <motion.button 
                    onClick={nextImage} 
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100" 
                    aria-label="Next image"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </motion.button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <motion.button 
                        key={index} 
                        onClick={() => setCurrentImageIndex(index)} 
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`} 
                        aria-label={`Go to image ${index + 1}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold mb-2 text-text-primary dark:text-dark-text-primary">About this project</h3>
            <p className="text-text-secondary dark:text-dark-text-secondary whitespace-pre-wrap leading-relaxed">{detailedDescription}</p>
          </div>

          {challenges && challenges.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-text-primary dark:text-dark-text-primary">Challenges & Solutions</h3>
              <div className="space-y-4">
                {challenges.map((item, index) => (
                  <div key={index} className="bg-secondary dark:bg-dark-primary p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                    <h4 className="font-bold text-accent dark:text-dark-accent mb-1">Challenge:</h4>
                    <p className="text-text-secondary dark:text-dark-text-secondary mb-2">{item.challenge}</p>
                    <h4 className="font-bold text-green-600 dark:text-green-400 mb-1">Solution:</h4>
                    <p className="text-text-secondary dark:text-dark-text-secondary">{item.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold mb-3 text-text-primary dark:text-dark-text-primary">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="bg-secondary dark:bg-dark-primary text-accent dark:text-dark-accent text-sm font-semibold px-3 py-1 rounded-full ring-1 ring-inset ring-slate-200 dark:ring-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </main>
        
        <motion.footer 
          className="p-4 border-t border-slate-200 dark:border-slate-800 flex-shrink-0 flex items-center justify-end gap-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
            <motion.a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-secondary dark:bg-dark-primary text-text-primary dark:text-dark-text-primary font-medium py-2 px-4 rounded-lg shadow-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300 ring-1 ring-slate-300 dark:ring-slate-700 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <GithubIcon className="h-5 w-5" />
              <span>View Code</span>
            </motion.a>
            {liveDemoLink && liveDemoLink !== '#' && (
              <motion.a 
                href={liveDemoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-accent dark:bg-dark-accent text-primary dark:text-dark-primary font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-red-600 dark:hover:bg-red-500 transition-transform duration-300 hover:scale-105 flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayIcon className="h-5 w-5" />
                <span>Launch Demo</span>
              </motion.a>
            )}
        </motion.footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
