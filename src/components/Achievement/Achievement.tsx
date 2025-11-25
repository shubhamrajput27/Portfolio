import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface AchievementEvent {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'work' | 'achievement';
  certificateUrl?: string;
}

function Achievement() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      const rect = lineRef.current.getBoundingClientRect();
      setLineHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);

  const events: AchievementEvent[] = [
    {
      year: '2025',
      title: 'Agentic AI Day Hackathon',
      organization: 'Hack2skill',
      description: 'Participated in the Agentic AI Day hackathon by Hack2skill, exploring cutting-edge agentic AI technologies and developing AI agents for real-world applications.',
      type: 'achievement',
      certificateUrl: '/AgenticAI.jpg',
    },
    {
      year: '2025',
      title: 'Hack2skill Gen AI Program',
      organization: 'Hack2skill',
      description: 'Successfully completed the Hack2skill Generative AI program, gaining hands-on experience with AI technologies and building innovative AI-powered solutions.',
      type: 'achievement',
      certificateUrl: '/GenAI.jpg',
    },
    {
      year: '2025',
      title: 'Smart India Hackathon Participant',
      organization: 'Government of India',
      description: 'Participated in Smart India Hackathon 2024, India\'s largest hackathon initiative, working on innovative solutions to real-world problems.',
      type: 'achievement',
    },
    {
      year: '2023',
      title: 'FOSS Hackathon - Top 5',
      organization: 'FOSS',
      description: 'Secured a position in the top 5 at the FOSS (Free and Open Source Software) Hackathon by developing an innovative open-source project that contributed to the developer community.',
      type: 'achievement',
      certificateUrl: '/FOSS.pdf',
    },
  ];

  return (
    <section
      id="achievements"
      className="py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-cream"
      aria-label="Achievements section"
      ref={containerRef}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-center text-muted mb-8 md:mb-12 px-2"
      >
        Achievements & Certifications 🏆
      </motion.h2>

      {events.length === 0 ? (
        <div className="max-w-4xl mx-auto text-center py-12">
          <p className="text-gray-600 text-lg">No achievements yet. Check back soon!</p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto relative">
          {/* Central vertical line - invisible background */}
          <div 
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-transparent"
          ></div>
          
          {/* Animated line that fills on scroll */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-0.5 md:-translate-x-1/2 z-10"
            style={{ 
              height: heightTransform,
              backgroundColor: '#ff6f10'
            }}
          ></motion.div>

          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => {
              const isLeft = index % 2 !== 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
                >
                  {/* Content - Left or Right */}
                  <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="bg-white rounded-2xl shadow-xl p-6"
                    >
                      {/* Trophy icon and year badge */}
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                        <span className="text-3xl" role="img" aria-label="achievement">
                          🏆
                        </span>
                        <span className="text-base font-bold text-neutral-800">
                          {event.year}
                        </span>
                      </div>
                      
                      <h3 className={`text-lg md:text-xl font-bold text-neutral-800 mb-3 ${isLeft ? 'md:text-right' : 'md:text-left'} text-left`}>
                        {event.organization}
                      </h3>
                      
                      <p className={`text-sm md:text-base text-neutral-700 mb-4 leading-relaxed ${isLeft ? 'md:text-right' : 'md:text-left'} text-left`}>
                        {event.description}
                      </p>
                      
                      {event.certificateUrl && (
                        <div className={`flex flex-wrap gap-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                          <button
                            onClick={() => setSelectedCertificate(event.certificateUrl!)}
                            className="inline-flex items-center gap-2 text-primary hover:text-orange-600 font-medium transition-colors text-sm"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View Certificate
                          </button>
                          <a
                            href={event.certificateUrl}
                            download
                            className="inline-flex items-center gap-2 text-primary hover:text-orange-600 font-medium transition-colors text-sm"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download
                          </a>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full z-20 bg-[#ff6f10] border-4 border-white shadow-lg"></div>

                  {/* Empty space on opposite side */}
                  <div className="w-full md:w-5/12 hidden md:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all"
              aria-label="Close certificate"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {selectedCertificate.endsWith('.pdf') ? (
              <iframe
                src={selectedCertificate}
                className="w-full h-[90vh]"
                onClick={(e) => e.stopPropagation()}
                title="Certificate PDF"
              />
            ) : (
              <img
                src={selectedCertificate}
                alt="Certificate"
                className="w-full h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Achievement;


