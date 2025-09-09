import React from 'react';
import { motion } from 'motion/react';
import { SocialLinks } from '@/components/social';
import { PERSONAL_INFO } from '@/constants';
import { createAnimationProps, createInitialProps, getAnimationDelay } from '@/utils/animations';

export const HeroSection: React.FC = () => {
  return (
    <>
      {/* Simple greeting and name */}
      <motion.div
        initial={createInitialProps()}
        animate={createAnimationProps(1, getAnimationDelay(0))}
        className="mb-8"
      >
        <p className="text-base sm:text-lg font-light text-portfolio-muted mb-4 sm:mb-6 tracking-wide">
          Welcome to my corner of the web, I'm
        </p>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient leading-tight tracking-tight mb-4">
          Federico Brancasi
        </h1>
        
        {/* Decorative line under name */}
        <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-portfolio-primary to-transparent mb-6" />
      </motion.div>
      
      {/* Job title */}
      <motion.h2
        initial={createInitialProps()}
        animate={createAnimationProps(1, getAnimationDelay(3))}
        className="text-lg sm:text-xl md:text-2xl font-medium text-portfolio-secondary mb-6 sm:mb-8"
      >
        Machine Learning Researcher
      </motion.h2>
      
      {/* Description */}
      <motion.p 
        initial={createInitialProps()}
        animate={createAnimationProps(1, getAnimationDelay(4))}
        className="text-sm sm:text-base md:text-lg font-light text-portfolio-muted mb-4 sm:mb-6 max-w-xs sm:max-w-md md:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
      >
        {PERSONAL_INFO.description}
      </motion.p>
      
      {/* Social links and CV download */}
      <SocialLinks />
    </>
  );
};