import { motion } from 'framer-motion';
import { useState } from 'react';

interface ExperienceEvent {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'internship' | 'freelance';
  certificateUrl?: string;
}

function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const events: ExperienceEvent[] = [
    // Add your work experience here
    // Example:
    // {
    //   year: '2024-Present',
    //   title: 'Software Developer',
    //   organization: 'Company Name',
    //   description: 'Working on full-stack development projects...',
    //   type: 'work',
    // },
  ];
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return '💼';
      case 'internship':
        return '🎯';
      case 'freelance':
        return '🚀';
      default:
        return '📌';
    }
  };

  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-10 lg:px-20 bg-cream"
      aria-label="Experience section"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-muted mb-12"
      >
        Work Experience
      </motion.h2>

      {events.length === 0 ? (
        <div className="max-w-4xl mx-auto text-center py-12">
          <p className="text-gray-600 text-lg">No work experience entries yet. Check back soon!</p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto relative">
          {/* Animated Timeline line with orange gradient */}
          <div className="absolute left-8 md:left-1/2 top-0 w-[2px] overflow-hidden z-0 transform md:-translate-x-1/2">
            <div className="absolute inset-x-0 top-0 w-[2px] rounded-full shadow-lg">
              <div 
                className="w-full h-full rounded-full" 
                style={{
                  background: 'linear-gradient(rgba(255, 111, 16, 0.1) 0%, rgba(255, 111, 16, 0.2) 16%, rgba(255, 111, 16, 0.3) 33%, rgba(255, 111, 16, 0.4) 50%, rgba(255, 111, 16, 0.5) 66%, rgba(255, 111, 16, 0.6) 83%, rgb(255, 111, 16) 100%)'
                }}
              />
            </div>
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
            {/* Timeline dot with orange color */}
            <div
              className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-10"
              style={{ backgroundColor: '#ff6f10' }}
              aria-hidden="true"
            />

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
                <h3 className="text-xl font-semibold text-muted mb-1">
                  {event.title}
                </h3>
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
            <img
              src={selectedCertificate}
              alt="Certificate"
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;
