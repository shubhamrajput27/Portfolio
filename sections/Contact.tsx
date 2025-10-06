import React, { useState, useEffect, useRef } from 'react';
import Section from '../components/Section';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const containerRef = useRef<HTMLDivElement>(null);
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

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Section title="Contact Me">
      <div ref={containerRef} className="max-w-2xl mx-auto text-center">
        <p className={`text-lg text-text-secondary dark:text-dark-text-secondary mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          Have a question or want to work together? Feel free to reach out.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-secondary dark:bg-dark-secondary border border-slate-300 dark:border-slate-600 rounded-md py-3 px-4 text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent"
            />
          </div>
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-secondary dark:bg-dark-secondary border border-slate-300 dark:border-slate-600 rounded-md py-3 px-4 text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent"
            />
          </div>
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full bg-secondary dark:bg-dark-secondary border border-slate-300 dark:border-slate-600 rounded-md py-3 px-4 text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent"
            ></textarea>
          </div>
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
            <button
              type="submit"
              className="w-full bg-accent dark:bg-dark-accent text-primary dark:text-dark-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-sky-600 dark:hover:bg-sky-500 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;