import { PersonalInfo, SocialLink, AnimationConfig } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'FEDERICO BRANCASI',
  firstName: 'Federico',
  lastName: 'Brancasi',
  title: 'Machine Learning Researcher @ CERN',
  description: 'Currently, I\'m conducting ML research at CERN on model optimization techniques, after completing my Master\'s thesis research at ETH Zurich. I\'m on the lookout for like-minded visionaries eager to shape the future alongside me, let\'s connect:',
  email: 'federicobrancasi@gmail.com',
  location: 'Milan, Italy'
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
  MOVIES: '/movies',
  NOT_FOUND: '*'
} as const;