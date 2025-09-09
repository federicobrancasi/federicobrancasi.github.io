import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Portfolio specific colors
				portfolio: {
					DEFAULT: 'hsl(var(--portfolio-bg))',
					primary: 'hsl(var(--portfolio-text-primary))',
					secondary: 'hsl(var(--portfolio-text-secondary))',
					muted: 'hsl(var(--portfolio-text-muted))',
					accent: 'hsl(var(--portfolio-accent))',
					glow: 'hsl(var(--portfolio-glow))'
				}
			},
			fontFamily: {
				inter: ['Inter', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'spin-slow': {
					'0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
					'100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
				},
				'float-particles': {
					'0%': {
						transform: 'translateY(100vh) translateX(0px)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(-100px) translateX(100px)',
						opacity: '0'
					}
				},
				'background-shift': {
					'0%, 100%': { 
						transform: 'scale(1) rotate(0deg)' 
					},
					'50%': { 
						transform: 'scale(1.1) rotate(0.5deg)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 1s ease-out',
				'spin-slow': 'spin-slow 15s linear infinite',
				'float-particles': 'float-particles 20s linear infinite',
				'background-shift': 'background-shift 20s ease-in-out infinite'
			}
		}
	},
	plugins: [tailwindAnimate],
} satisfies Config;
