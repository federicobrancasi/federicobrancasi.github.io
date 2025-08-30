export const theme = {
  colors: {
    primary: 'hsl(var(--portfolio-text-primary))',
    secondary: 'hsl(var(--portfolio-text-secondary))',
    muted: 'hsl(var(--portfolio-text-muted))',
    accent: 'hsl(var(--portfolio-accent))',
    glow: 'hsl(var(--portfolio-glow))',
    background: 'hsl(var(--portfolio-bg))',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  typography: {
    sizes: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
    },
    weights: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
  },
  animations: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s',
      slower: '1s',
    },
    ease: {
      in: 'ease-in',
      out: 'ease-out',
      inOut: 'ease-in-out',
    },
  },
} as const;