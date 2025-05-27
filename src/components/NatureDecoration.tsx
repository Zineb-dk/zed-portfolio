import React from 'react';
import { motion } from 'framer-motion';

interface NatureDecorationProps {
  type: 'leaf' | 'flower' | 'cloud';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  position?: string;
}

const NatureDecoration: React.FC<NatureDecorationProps> = ({
  type,
  className = '',
  size = 'md',
  position = ''
}) => {
  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'w-8 h-8';
      case 'lg': return 'w-20 h-20';
      default: return 'w-12 h-12';
    }
  };

  const getAnimation = () => {
    switch (type) {
      case 'leaf': return 'animate-sway';
      case 'cloud': return 'animate-float';
      case 'flower': return 'animate-pulse';
      default: return '';
    }
  };

  const getColor = () => {
    switch (type) {
      case 'leaf': return 'text-nature-leaf';
      case 'flower': return 'text-nature-flower';
      case 'cloud': return 'text-nature-sky';
      default: return '';
    }
  };

  const renderDecoration = () => {
    switch (type) {
      case 'leaf':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={`${getSizeClass()} ${getColor()} ${getAnimation()}`}>
            <path d="M17.75 1.36a12.51 12.51 0 0 0-3.44 11.55c-1.12-2.1-1.22-4.75-.24-7.13a10.54 10.54 0 0 1 3.68-4.42zM11.9 5.29A12.51 12.51 0 0 0 7.64 16.2c-.12-2.38.53-4.8 2.1-6.65a10.54 10.54 0 0 1 2.16-1.97zM12.77 17.87c-.53-1.55-1.53-2.84-2.82-3.76-1.3-.92-2.84-1.38-4.41-1.37A7.5 7.5 0 0 0 12.77 17.87z"/>
          </svg>
        );
      case 'flower':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={`${getSizeClass()} ${getColor()} ${getAnimation()}`}>
            <path d="M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-8 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm4 4a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm8-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-4 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
          </svg>
        );
      case 'cloud':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={`${getSizeClass()} ${getColor()} ${getAnimation()}`}>
            <path d="M6.5 20a3.5 3.5 0 0 1-.5-6.96V13a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v.04a3.5 3.5 0 0 1-.5 6.96z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className={`absolute opacity-70 ${position} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1 }}
    >
      {renderDecoration()}
    </motion.div>
  );
};

export default NatureDecoration;