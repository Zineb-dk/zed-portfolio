import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight -150) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer id="footer"
      className={`fixed bottom-0 left-0 w-full z-10 py-8 transition-opacity duration-500 ${
        showFooter ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } bg-gradient-to-r from-primary-900 to-primary-800 text-white`}
    >
      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-3xl font-heading">ZedVerse</h3>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <nav className="flex flex-wrap justify-center mb-4 md:mb-0 md:mr-8">
              <a href="#home" className="px-3 py-1 text-primary-100 hover:text-white transition-colors">Home</a>
              <a href="#skills" className="px-3 py-1 text-primary-100 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="px-3 py-1 text-primary-100 hover:text-white transition-colors">Projects</a>
              <a href="#about" className="px-3 py-1 text-primary-100 hover:text-white transition-colors">About</a>
              <a href="#contact" className="px-3 py-1 text-primary-100 hover:text-white transition-colors">Contact</a>
            </nav>

            <div className="flex items-center text-primary-200">
              <p>Made with</p>
              <Heart size={16} className="mx-1 text-accent-400" />
              <p>in 2025</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-primary-700 text-center text-primary-300 text-sm">
          <p>© {currentYear} Zineb Dkier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
