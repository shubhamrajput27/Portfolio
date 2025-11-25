import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import Modal from '../Modal/Modal';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
  bgColor: string;
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'MentorConnect',
      description: 'A comprehensive platform connecting mentors and mentees for professional growth and career guidance. Features real-time chat, video sessions, and progress tracking.',
      longDescription: 'MentorConnect is a full-featured mentorship platform that bridges the gap between experienced professionals and aspiring individuals. The platform includes user authentication, mentor/mentee matching algorithms, real-time messaging, video conferencing integration, session scheduling, progress tracking, and review systems. Built with modern web technologies for a seamless user experience.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express', 'JWT'],
      image: '🎓',
      github: 'https://github.com/shubhamrajput27/mentorconnect',
      featured: true,
      bgColor: '#FFE4D6',
    },
    {
      id: 2,
      title: 'CSE Portal PESITM',
      description: 'A comprehensive student portal for Computer Science Engineering department, providing centralized access to academic resources, announcements, and departmental information.',
      longDescription: 'CSE Portal PESITM is a full-featured departmental portal designed to streamline communication and resource sharing for CSE students. The platform includes course materials, faculty information, event updates, placement resources, and student collaboration features. Built to enhance the academic experience and foster community engagement within the department.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
      image: '🏫',
      github: 'https://github.com/shubhamrajput27/CSE-Portal-PESITM',
      featured: true,
      bgColor: '#E6F3FF',
    },
    {
      id: 3,
      title: 'Moodify',
      description: 'An innovative music recommendation system that suggests songs based on your current mood. Experience personalized playlists that match your emotions.',
      longDescription: 'Moodify is an intelligent music recommendation platform that uses mood analysis to curate personalized playlists. The application features mood detection through user input, smart song recommendations, playlist generation, and integration with music APIs. Built to enhance the music listening experience by matching songs to emotional states.',
      tech: ['Python', 'Flask', 'Machine Learning', 'Spotify API', 'HTML', 'CSS'],
      image: '🎵',
      github: 'https://github.com/shubhamrajput27/Moodify',
      featured: true,
      bgColor: '#F5E6FF',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, interactive personal portfolio showcasing projects, skills, and professional journey. Built with cutting-edge web technologies and smooth animations.',
      longDescription: 'A fully responsive, production-ready portfolio website built with the latest web technologies. Features include smooth scroll animations, interactive UI elements, dark mode support, and optimized performance. The site showcases projects, skills, and provides an easy way for potential clients to get in touch.',
      tech: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite', 'Vercel'],
      image: '💼',
      github: 'https://github.com/shubhamrajput27/Portfolio',
      demo: 'https://shubhamrajput27.github.io/Portfolio',
      featured: true,
      bgColor: '#B8E6E1',
    },
  ];

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (info.offset.x < -threshold && currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-cream py-20 px-6 md:px-10 lg:px-20"
      aria-label="Projects section"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-gray-800 mb-4"
      >
        Featured Projects
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
      >
        Here are some of my recent projects that showcase my skills in full-stack development, AI integration, and modern web technologies.
      </motion.p>

      {/* Sliding Stack Cards */}
      <div className="max-w-4xl mx-auto relative h-[600px] flex items-center justify-center mb-12">
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => {
            const isActive = index === currentIndex;
            const offset = index - currentIndex;
            
            return (
              <motion.div
                key={project.id}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={{
                  scale: isActive ? 1 : 0.85 - Math.abs(offset) * 0.05,
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                  y: Math.abs(offset) * 20,
                  x: offset * 30,
                  zIndex: projects.length - Math.abs(offset),
                  rotateZ: isActive ? 0 : offset * 2,
                }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute w-full max-w-2xl cursor-grab active:cursor-grabbing rounded-[28px]"
                style={{
                  // keep bgColor on the outer card container so gradient accents inherit
                  backgroundColor: project.bgColor,
                }}
                onClick={() => isActive && setSelectedProject(project)}
              >
                {/* Card wrapper: use a relative container so we can add decorative
                    layers (soft outer shadow, inner border, corner glow) without
                    affecting content flow. */}
                <div className="relative overflow-hidden rounded-[28px]">
                  {/* Soft shadow layer behind the card to emphasize edges */}
                  <div className="absolute inset-0 -z-10 rounded-[28px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] bg-linear-to-br from-black/5 to-transparent" />

                  {/* Subtle inner border / card edge definition */}
                  <div className="absolute inset-0 pointer-events-none rounded-[28px] ring-1 ring-black/5" />

                  {/* Card Content */}
                  <div className="p-8 md:p-12 bg-transparent">
                    <motion.h3 
                      className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isActive ? 1 : 0.5, y: 0 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isActive ? 1 : 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: isActive ? 1 : 0.5, scale: 1 }}
                          className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-[0_4px_12px_-6px_rgba(16,24,40,0.08)] ring-1 ring-black/5"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Buttons */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-4"
                      >
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Code
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-cream text-gray-800 rounded-xl font-medium hover:bg-peach transition-colors shadow-lg border-2 border-gray-800"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Live Demo
                          </a>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Project Navigation Indicator */}
      <div className="flex justify-center items-center gap-2 mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`group relative px-4 py-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-gray-800 text-white shadow-lg scale-105'
                  : 'bg-white/60 text-gray-600 hover:bg-white hover:shadow-md'
              }`}
              aria-label={`Go to ${project.title}`}
            >
              <span className="text-sm font-medium">{project.title}</span>
              {index === currentIndex && (
                <motion.div
                  layoutId="activeProject"
                  className="absolute inset-0 bg-gray-800 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Dots Indicator (minimal) */}
      <div className="flex justify-center gap-2 mb-8">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-gray-800 w-6'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-6">
        <button
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
          className="px-6 py-3 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
        >
          ← Previous
        </button>
        <button
          onClick={() => setCurrentIndex(Math.min(projects.length - 1, currentIndex + 1))}
          disabled={currentIndex === projects.length - 1}
          className="px-6 py-3 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
        >
          Next →
        </button>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
