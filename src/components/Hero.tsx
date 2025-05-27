import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import NatureDecoration from './NatureDecoration';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden " >

      {/* Nature decorations */}
      <NatureDecoration type="cloud" size="lg" position="bottom-40 left-20" />
      
      <div className=" fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-custom-bluesky to-white z-0" /> 
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-800 mb-6">
              Hi, I'm <span className="text-4xl md:text-6xl font-heading font-bold text-primary-700 mb-6">Zineb Dkier</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-medium text-gray-700 mb-6">
              AI & Data Scientist Engineering Student
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Engineering has never been just a title to me... It's a way of thinking, of quietly improving lives through what we create.
              I don't build for the sake of building! I build to meet a need.
              Because technology, no matter how advanced, means nothing if it doesn't serve people. 
              Behind every line of code, there should be purpose. 
              The question isn't what you made... it's whether it truly matters. 
              True engineering isn't just about invention, it's about intention.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-600 text-white font-medium rounded-lg shadow-md hover:bg-primary-700 transition-colors duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-primary-600 font-medium rounded-lg shadow-md border border-primary-200 hover:bg-primary-50 transition-colors duration-300"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.a
        href="#skills"
        className="absolute bottom-10 left1/2 transform -translate-x-1/2 text-gray-600 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;