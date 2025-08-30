export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  email: string;
  location: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface AnimationConfig {
  duration: number;
  delay: number;
  ease: string;
}

export interface LoadingScreenProps {
  onComplete: () => void;
}

export interface AppleHelloEffectProps {
  className?: string;
  speed?: number;
  onAnimationComplete?: () => void;
}

export interface SpinningTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export interface FloatingParticlesProps {
  count?: number;
  className?: string;
}