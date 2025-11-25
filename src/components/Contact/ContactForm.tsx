import { useRef, useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputVariants = {
    focused: {
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    unfocused: {
      scale: 1,
      transition: { duration: 0.2 }
    }
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get form data
      const formData = new FormData(formRef.current);
      const fromEmail = formData.get('from_email') as string;
      
      // Set reply_to field with user's email for proper email replies
      const replyToInput = formRef.current.querySelector('[name="reply_to"]') as HTMLInputElement;
      if (replyToInput) {
        replyToInput.value = fromEmail;
      }

      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-cream py-20 px-6 md:px-10 lg:px-20"
      aria-label="Contact section"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-muted mb-4"
      >
        Get In Touch 📧
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
      >
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <motion.div
            animate={focusedField === 'from_name' ? 'focused' : 'unfocused'}
            variants={inputVariants}
          >
            <label htmlFor="from_name" className="block text-sm font-medium text-muted mb-2">
              Your Name *
            </label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              placeholder="Enter your name"
              required
              onFocus={() => setFocusedField('from_name')}
              onBlur={() => setFocusedField(null)}
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              aria-required="true"
            />
          </motion.div>

          <motion.div
            animate={focusedField === 'from_email' ? 'focused' : 'unfocused'}
            variants={inputVariants}
          >
            <label htmlFor="from_email" className="block text-sm font-medium text-muted mb-2">
              Your Email *
            </label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              placeholder="your.email@example.com"
              required
              onFocus={() => setFocusedField('from_email')}
              onBlur={() => setFocusedField(null)}
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              aria-required="true"
            />
            {/* Hidden field for reply_to (EmailJS uses this for Reply-To header) */}
            <input type="hidden" name="reply_to" value="" />
          </motion.div>

          <motion.div
            animate={focusedField === 'subject' ? 'focused' : 'unfocused'}
            variants={inputVariants}
          >
            <label htmlFor="subject" className="block text-sm font-medium text-muted mb-2">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Project Inquiry"
              onFocus={() => setFocusedField('subject')}
              onBlur={() => setFocusedField(null)}
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </motion.div>

          <motion.div
            animate={focusedField === 'message' ? 'focused' : 'unfocused'}
            variants={inputVariants}
          >
            <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              required
              rows={6}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              aria-required="true"
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: "0 20px 40px rgba(255, 111, 16, 0.3)" }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="group w-full bg-linear-to-r from-[#ff6f10] to-[#ff8534] hover:from-[#ff8534] hover:to-[#ff6f10] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold focus:outline-none focus:ring-2 focus:ring-[#ff6f10] focus:ring-offset-2 flex items-center justify-center gap-2"
            aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
          >
            {isSubmitting ? (
              <>
                <svg 
                  className="animate-spin h-5 w-5" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </>
            )}
          </motion.button>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-100 text-green-700 rounded-lg text-center"
              role="alert"
            >
              ✅ Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-100 text-red-700 rounded-lg text-center"
              role="alert"
            >
              ❌ Failed to send message. Please try again or email me directly at shubhamrajput2702@gmail.com
            </motion.div>
          )}
        </form>
      </motion.div>
    </section>
  );
}

export default ContactForm;
