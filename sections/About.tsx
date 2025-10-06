import React, { useRef, useEffect, useState } from 'react';
import Section from '../components/Section';
import { userProfile } from '../data/mockData';

const About: React.FC = () => {
  const imageWrapperRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.2 }
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

  useEffect(() => {
    const handleScroll = () => {
      if (!imageWrapperRef.current) return;

      const rect = imageWrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only apply effect when the element is in the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const scrollFactor = -0.1; // Negative for opposite direction, adjust magnitude for effect strength

        // Calculate the vertical offset based on the element's distance from the viewport center
        const yOffset = (elementCenter - viewportCenter) * scrollFactor;
        
        const image = imageWrapperRef.current.querySelector('img');
        if (image) {
          // Apply the parallax translation and maintain the initial scale
          image.style.transform = `translateY(${yOffset}px) scale(1.2)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <Section title="About Me">
      <div ref={sectionRef} className="grid md:grid-cols-3 gap-12 items-center">
        <div className={`md:col-span-1 flex justify-center ${isVisible ? 'animate-pop-in' : 'opacity-0 scale-50'}`}>
            <div 
                ref={imageWrapperRef}
                className="rounded-full w-60 h-60 shadow-lg border-4 border-secondary dark:border-dark-secondary overflow-hidden"
            >
                <img 
                    src="https://picsum.photos/seed/profile/400/400" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(1.2)' }}
                />
            </div>
        </div>
        <div className={`md:col-span-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {userProfile.bio}
            </p>
        </div>
      </div>
    </Section>
  );
};

export default About;