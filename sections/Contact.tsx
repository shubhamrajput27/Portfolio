import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { slideUp, staggerContainer, hoverScale } from '../utils/animations';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const inputVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.4)",
      transition: {
        duration: 0.2
      }
    },
    tap: { scale: 0.95 },
    loading: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Section title="Contact Me">
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p 
          className="text-lg text-text-secondary dark:text-dark-text-secondary mb-8"
          variants={slideUp}
        >
          Have a question or want to work together? Feel free to reach out.
        </motion.p>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          variants={staggerContainer}
        >
          <motion.div variants={inputVariants}>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-secondary dark:bg-dark-secondary border border-slate-300 dark:border-slate-600 rounded-md py-3 px-4 text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent"
              whileFocus="focus"
              whileHover={{ borderColor: "#0ea5e9" }}
            />
          </motion.div>
          
          <motion.div variants={inputVariants}>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-secondary dark:bg-dark-secondary border border-slate-300 dark:border-slate-600 rounded-md py-3 px-4 text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent"
              whileFocus="focus"
              whileHover={{ borderColor: "#0ea5e9" }}
            />
          </motion.div>
          
          <motion.div variants={inputVariants}>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full bg-secondary dark:bg-dark-secondary border border-slate-300 dark:border-slate-600 rounded-md py-3 px-4 text-text-primary dark:text-dark-text-primary focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent resize-none"
              whileFocus="focus"
              whileHover={{ borderColor: "#0ea5e9" }}
            />
          </motion.div>
          
          <motion.div variants={buttonVariants}>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent dark:bg-dark-accent text-primary dark:text-dark-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-sky-600 dark:hover:bg-sky-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              variants={buttonVariants}
              whileHover={!isSubmitting ? "hover" : undefined}
              whileTap={!isSubmitting ? "tap" : undefined}
              animate={isSubmitting ? "loading" : "visible"}
            >
              {isSubmitting ? (
                <motion.span
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </motion.span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </Section>
  );
};

export default Contact;