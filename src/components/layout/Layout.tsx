import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FloatingParticles from '@/components/FloatingParticles';
import { createAnimationProps, createInitialProps } from '@/utils/animations';

interface LayoutProps {
  children: React.ReactNode;
  showParticles?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showParticles = true 
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={createInitialProps()}
        animate={createAnimationProps(1, 0, "easeOut")}
        className="min-h-screen relative"
      >
        
        <div className="min-h-screen flex items-start sm:items-center justify-center px-4 pt-8 pb-4 sm:py-8 sm:px-6 md:px-8 lg:px-12 relative">
          <div className="text-center max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto relative w-full">
            {children}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};