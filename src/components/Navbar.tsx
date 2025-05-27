import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: "#projects" },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setScrolled(window.scrollY > 50);
      
      // Find which section is currently in viewport
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-3xl font-heading text-primary-700"
          >
            ZedVerse
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-body text-base transition-colors duration-300 hover:text-primary-600 ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary-600 border-b-2 border-primary-500'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 p-2 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full py-4 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 font-body text-base ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary-600'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </a>

            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;