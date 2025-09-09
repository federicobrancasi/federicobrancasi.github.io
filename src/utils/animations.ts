import { type TargetAndTransition } from "motion/react";

export const createAnimationProps = (
  duration: number,
  delay: number = 0,
  ease: string = "easeOut"
): TargetAndTransition => ({
  opacity: 1,
  y: 0,
  transition: {
    duration,
    delay,
    ease
  }
});

export const createInitialProps = (): TargetAndTransition => ({
  opacity: 0,
  y: 30
});

export const createPathAnimationProps = (
  duration: number,
  delay: number = 0
): TargetAndTransition => ({
  pathLength: 1,
  opacity: 1,
  transition: {
    duration,
    delay,
    ease: "easeInOut"
  }
});

export const createInitialPathProps = (): TargetAndTransition => ({
  pathLength: 0,
  opacity: 0
});

export const getAnimationDelay = (index: number, baseDelay: number = 0.2): number => {
  return baseDelay * (index + 1);
};