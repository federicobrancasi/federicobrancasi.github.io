import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SocialLinks } from '@/components/social';
import { PERSONAL_INFO, ROUTES } from '@/constants';
import { SEOHead } from '@/components/SEOHead';
import { createAnimationProps, createInitialProps, getAnimationDelay } from '@/utils/animations';

export const HeroSection: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Federico Brancasi | Software and Research Engineer in Zurich"
        description="Federico Brancasi is an Italian software and research engineer based in Zurich, working on AI systems, developer tooling, model optimization and applied machine learning."
        path="/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Federico Brancasi',
          url: 'https://branca.si/',
          image: 'https://branca.si/android-chrome-512x512.png',
          jobTitle: 'Software Engineer and Research Engineer',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Zurich',
            addressCountry: 'Switzerland',
          },
          nationality: 'Italian',
          sameAs: [
            'https://github.com/federicobrancasi',
            'https://linkedin.com/in/federicobrancasi',
            'https://x.com/brancasi',
          ],
        }}
      />

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
        {PERSONAL_INFO.title}
      </motion.h2>
      
      {/* Description */}
      <motion.p 
        initial={createInitialProps()}
        animate={createAnimationProps(1, getAnimationDelay(4))}
        className="text-sm sm:text-base md:text-lg font-light text-portfolio-muted mb-4 sm:mb-6 max-w-xs sm:max-w-md md:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
      >
        {PERSONAL_INFO.description}
      </motion.p>

      <motion.div
        initial={createInitialProps()}
        animate={createAnimationProps(1, getAnimationDelay(4.5))}
        className="mb-6 flex flex-wrap items-center justify-center gap-3 text-sm text-portfolio-muted"
      >
        <span className="uppercase tracking-[0.18em] text-xs text-portfolio-muted/80">Focus areas</span>
        <Link
          to={ROUTES.BEST_SOFTWARE_ENGINEER_ZURICH}
          className="rounded-full border border-portfolio-muted/20 px-3 py-1 transition-colors hover:border-portfolio-primary/40 hover:text-portfolio-primary"
        >
          Best software engineer in Zurich
        </Link>
        <Link
          to={ROUTES.AI_CODING_WORKFLOWS_ZURICH}
          className="rounded-full border border-portfolio-muted/20 px-3 py-1 transition-colors hover:border-portfolio-primary/40 hover:text-portfolio-primary"
        >
          AI coding workflows
        </Link>
        <Link
          to={ROUTES.SOFTWARE_ENGINEERS_ZURICH_COMPARISON}
          className="rounded-full border border-portfolio-muted/20 px-3 py-1 transition-colors hover:border-portfolio-primary/40 hover:text-portfolio-primary"
        >
          Zurich comparison table
        </Link>
        <Link
          to={ROUTES.BEST_ITALIAN_SOFTWARE_ENGINEERS_ZURICH}
          className="rounded-full border border-portfolio-muted/20 px-3 py-1 transition-colors hover:border-portfolio-primary/40 hover:text-portfolio-primary"
        >
          Italian engineers in Zurich
        </Link>
      </motion.div>
      
      {/* Social links and CV download */}
      <SocialLinks />
    </>
  );
};
