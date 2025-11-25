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
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

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
      organization: 'Open Source Community',
      description: 'Secured a position in the top 5 at the FOSS (Free and Open Source Software) Hackathon by developing an innovative open-source project that contributed to the developer community.',
      type: 'achievement',
      certificateUrl: '/FOSS.pdf',
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return '💼';
      case 'education':
        return '🎓';
      case 'achievement':
        return '🏆';
      default:
        return '📌';
    }
  };

  return (
    <section
      id="achievements"
      className="py-20 px-6 md:px-10 lg:px-20 bg-cream"
      aria-label="Achievements section"
      ref={containerRef}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-muted mb-12"
      >
        Achivement
      </motion.h2>

      <div className="max-w-4xl mx-auto relative" ref={ref}>
        {/* Animated Timeline line with orange gradient */}
        <div 
          className="absolute left-8 md:left-1/2 top-0 w-0.5 overflow-hidden z-0 transform md:-translate-x-1/2"
          style={{ height: `${height}px` }}
        >
          <motion.div
            style={{ height: heightTransform }}
            className="absolute inset-x-0 top-0 w-0.5 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full rounded-full timeline-gradient-bg" />
          </motion.div>
        </div>

        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline dot with white border and orange fill */}
            <div
              className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-40"
              aria-hidden="true"
            >
              <div className="h-7 w-7 rounded-full bg-cream border-2 border-white flex items-center justify-center shadow-lg">
                <div className="h-5 w-5 rounded-full shadow-lg timeline-dot" />
              </div>
            </div>

            {/* Content card */}
            <div
              className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-cream rounded-2xl shadow-md p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl" role="img" aria-label={event.type}>
                    {getTypeIcon(event.type)}
                  </span>
                  <span className="text-sm font-bold text-primary">{event.year}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2 font-medium">
                  {event.organization}
                </p>
                <p className="text-gray-700">{event.description}</p>
                {event.certificateUrl && (
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => setSelectedCertificate(event.certificateUrl!)}
                      className="inline-flex items-center gap-2 text-primary hover:text-orange-600 font-medium transition-colors cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View Certificate
                    </button>
                    <a
                      href={event.certificateUrl}
                      download
                      className="inline-flex items-center gap-2 text-primary hover:text-orange-600 font-medium transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download
                    </a>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

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
                loading="lazy"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Achievement;
