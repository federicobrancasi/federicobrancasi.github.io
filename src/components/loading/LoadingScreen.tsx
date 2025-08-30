import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppleHelloEnglishEffect } from '@/components/AppleHelloEffect';
import { LoadingScreenProps } from '@/types';

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAnimationComplete = useCallback(() => {
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 200);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <AppleHelloEnglishEffect
              className="h-16 md:h-20 text-portfolio-primary"
              speed={1.3}
              onAnimationComplete={handleAnimationComplete}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};