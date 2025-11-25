import { motion } from 'framer-motion';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import InstagramIcon from '../icons/InstagramIcon';
import { userProfile } from '../../data/mockData';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Shubham Singh</h3>
            <p className="text-sm leading-relaxed">
              Full-Stack Developer passionate about building great web experiences.
              Always learning, always coding.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm hover:text-[#ff6f10] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm hover:text-[#ff6f10] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm hover:text-[#ff6f10] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-[#ff6f10] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <motion.a
                href={userProfile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-[#ff6f10] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={userProfile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-[#ff6f10] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={userProfile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-[#ff6f10] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </motion.a>
            </div>
            <div className="mt-4">
              <a
                href="mailto:shubhamrajput2702@gmail.com"
                className="text-sm hover:text-[#ff6f10] transition-colors"
              >
                shubhamrajput2702@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm">
            © {currentYear} Shubham Singh. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
