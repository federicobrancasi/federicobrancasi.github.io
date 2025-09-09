import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SOCIAL_LINKS } from '@/constants';
import { createAnimationProps, createInitialProps, getAnimationDelay } from '@/utils/animations';

// Custom X icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const iconMap = {
  Github,
  Linkedin,
  X: XIcon,
  Mail
};

export const SocialLinks: React.FC = () => {
  return (
    <motion.div 
      initial={createInitialProps()}
      animate={createAnimationProps(1, getAnimationDelay(5))}
      className="flex flex-col items-center justify-center gap-3 sm:gap-4 mb-6"
    >
      {/* Social Media Links */}
      <div className="flex items-center gap-3 sm:gap-4">
        {SOCIAL_LINKS.map((link, index) => {
          const IconComponent = iconMap[link.icon as keyof typeof iconMap];
          
          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: getAnimationDelay(5) + (index * 0.1)
              }}
              className="p-3 sm:p-4 rounded-full border border-portfolio-muted/20 hover:border-portfolio-primary/50 transition-colors bg-background/50 hover:bg-portfolio-primary/10 touch-manipulation"
            >
              {IconComponent && <IconComponent className="w-5 h-5" />}
            </motion.a>
          );
        })}
      </div>

      {/* CV Download and Movie Recommendation Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: getAnimationDelay(6) }}
        className="flex flex-col items-center gap-3"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-4">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="gap-2 bg-portfolio-primary/10 border-portfolio-primary/30 hover:bg-portfolio-primary/20 hover:border-portfolio-primary/50 transition-colors touch-manipulation text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5"
          >
            <a
              href="/Federico_Brancasi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </Button>
          
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="gap-2 bg-portfolio-primary/10 border-portfolio-primary/30 hover:bg-portfolio-primary/20 hover:border-portfolio-primary/50 transition-colors touch-manipulation text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5"
            >
              <a href="/movies">
                <Film className="w-4 h-4" />
                Movie Picks
              </a>
            </Button>
            <p className="text-xs text-portfolio-muted absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">(Since I am a big Cinephile)</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};