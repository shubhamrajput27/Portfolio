import React from 'react';
import { userProfile } from '../data/mockData';
import GithubIcon from '../components/icons/GithubIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import InstagramIcon from '../components/icons/InstagramIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary dark:bg-dark-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2">
          <a href={userProfile.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300">
            <GithubIcon className="h-5 w-5" />
            <span className="text-sm">GitHub</span>
          </a>
          <a href={userProfile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300">
            <LinkedinIcon className="h-5 w-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href={userProfile.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors duration-300">
            <InstagramIcon className="h-5 w-5" />
            <span className="text-sm">Instagram</span>
          </a>
        </div>
        <p className="mt-8 text-center text-sm text-text-secondary dark:text-dark-text-secondary">
          &copy; {new Date().getFullYear()} {userProfile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;