import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppleHelloEnglishEffect } from './AppleHelloEffect';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Wait for exit animation
    }, 200); // Show completed animation briefly
  };

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

export default LoadingScreen;