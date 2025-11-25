import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set background blur when scrolled
      setIsScrolled(currentScrollY > 50);

      // Hide/show navbar based on scroll direction (but not when mobile menu is open)
      if (!isMobileMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
  className={`fixed top-0 left-0 right-0 z-9999 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-lg'
            : 'bg-cream/90 md:bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
          <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="text-2xl font-bold cursor-pointer"
            style={{ color: '#ff6f10' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shubham Singh
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-4 py-2 rounded-lg text-base font-semibold transition-colors cursor-pointer hover:bg-gray-50"
                style={{ color: '#000' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ff6f10'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors ${isMobileMenuOpen ? 'hidden' : ''}`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 origin-left"
          style={{ 
            scaleX,
            background: 'linear-gradient(to right, #ff6f10, #ff8534)'
          }}
        />
      </motion.nav>

      {/* Mobile Menu Overlay & Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-9998 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white text-gray-900 shadow-2xl z-10000 md:hidden overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="p-6">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="w-full text-left px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 hover:bg-primary/10 hover:pl-6 active:scale-95 flex items-center gap-3 group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {item.name === 'Home' && '🏠'}
                        {item.name === 'About' && '👨‍💻'}
                        {item.name === 'Skills' && '⚡'}
                        {item.name === 'Projects' && '💼'}
                        {item.name === 'Education' && '🎓'}
                        {item.name === 'Achievements' && '🏆'}
                        {item.name === 'Contact' && '📧'}
                      </span>
                      <span className="text-gray-800 group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </nav>

              {/* Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
                <p className="text-sm text-gray-600 text-center">
                  © 2025 Shubham Singh
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
