import { cn } from '@/lib/utils';

export const componentStyles = {
  // Hero section styles
  hero: {
    container: 'min-h-screen flex items-center justify-center p-4 md:p-8 relative',
    content: 'text-center max-w-4xl mx-auto relative',
    greeting: 'text-lg font-light text-portfolio-muted mb-4 tracking-wide',
    nameContainer: 'relative mb-1 h-48 md:h-56 flex items-center justify-center',
    name: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient leading-tight tracking-tight',
    decorativeLine: 'mt-1 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-portfolio-primary to-transparent',
    description: 'text-base md:text-lg font-light text-portfolio-muted mb-12 max-w-3xl mx-auto leading-relaxed',
  },

  // Social links styles
  social: {
    container: 'flex flex-col sm:flex-row items-center justify-center gap-4 mb-8',
    linksContainer: 'flex items-center gap-3',
    link: 'p-3 rounded-full border border-portfolio-muted/20 hover:border-portfolio-primary/50 transition-colors bg-background/50 hover:bg-portfolio-primary/10',
    icon: 'w-5 h-5',
  },

  // Loading screen styles
  loading: {
    container: 'fixed inset-0 z-50 flex items-center justify-center bg-background',
    content: 'text-center',
    logo: 'h-16 md:h-20 text-portfolio-primary',
  },

  // Rotating titles styles
  titles: {
    container: 'mb-8 h-8',
    title: 'text-xl md:text-2xl font-medium text-portfolio-secondary',
  },
} as const;

// Helper function to merge component styles with custom classes
export const mergeStyles = (...classes: (string | undefined)[]) => {
  return cn(...classes);
};