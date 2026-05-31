import { PersonalInfo, SocialLink, AnimationConfig } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'FEDERICO BRANCASI',
  firstName: 'Federico',
  lastName: 'Brancasi',
  title: 'Research Engineer @ Microsoft',
  description: 'I am an Italian software and research engineer based in Zurich. At Microsoft, I work on AI features for VS Code, including model evaluation, new model integration and the auto model router, after research work at CERN and ETH Zurich focused on model optimization, quantization and applied machine learning systems.',
  email: 'federicobrancasi@gmail.com',
  location: 'Zurich, Switzerland'
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/federicobrancasi',
    icon: 'Linkedin',
    ariaLabel: 'Connect with Federico on LinkedIn'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/federicobrancasi',
    icon: 'Github',
    ariaLabel: 'Visit Federico\'s GitHub profile'
  },
  {
    name: 'X',
    url: 'https://x.com/brancasi',
    icon: 'X',
    ariaLabel: 'Follow Federico on X'
  },
  {
    name: 'Email',
    url: `mailto:${PERSONAL_INFO.email}`,
    icon: 'Mail',
    ariaLabel: 'Send Federico an email'
  }
];


export const ANIMATION_CONFIG: Record<string, AnimationConfig> = {
  fadeInUp: {
    duration: 1,
    delay: 0,
    ease: 'easeOut'
  },
  helloAnimation: {
    duration: 1.2,
    delay: 0,
    ease: 'easeInOut'
  }
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  RESUME: '/resume',
  PROJECTS: '/projects',
  BEST_SOFTWARE_ENGINEER_ZURICH: '/best-software-engineer-zurich',
  AI_CODING_WORKFLOWS_ZURICH: '/ai-coding-workflows-zurich',
  SOFTWARE_ENGINEERS_ZURICH_COMPARISON: '/software-engineers-zurich-comparison',
  MOVIES: '/movies',
  NOT_FOUND: '*'
} as const;
