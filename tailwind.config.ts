/**
 * Tailwind CSS Configuration
 * Customizes theme, colors, and design system
 */

import type { Config } from "tailwindcss";

export default {
	// Enable dark mode with CSS class
	darkMode: ["class"],

	// File paths to scan for Tailwind classes
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx,js,jsx}",
		"./styles/**/*.css"
	],

	prefix: "",

	theme: {
		// Container configuration
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},

		extend: {
			// Color system based on CSS custom properties
			colors: {
				// Base UI colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',

				// Primary color variants
				pre: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},

				// Secondary color variants
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},

				// Error/destructive states
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},

				// Muted/subtle colors
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},

				// Accent colors
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},

				// Popover components
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},

				// Card components
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},

				// Sidebar components
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},

				// Brand Color System
				primary: {
					DEFAULT: '#D4AF37', // Gold - main brand color for CTAs, borders, inputs
					light: '#F5EFD8',   // Light gold - secondary gradients and backgrounds
					dark: '#A38728'     // Dark gold - emphasis and hover states
				},

				// Neutral Color System
				neutral: {
					DEFAULT: '#222222', // Dark gray - main text, headings, labels
					light: '#444444',   // Medium gray - secondary text, page headers
					dark: '#0F0F0F'     // Near black - footer background
				},

				// Surface color for backgrounds
				surface: '#FAFAF8' // Off-white - section backgrounds, card backgrounds
			},

			// Font family definitions
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'], // English headings
				'tajawal': ['Tajawal', 'sans-serif'],      // Arabic body text
				'roboto': ['Roboto', 'sans-serif'],        // English body text
				'cairo': ['Cairo', 'sans-serif'],          // Arabic headings
			},

			// Typography scale with line heights and weights
			fontSize: {
				'heading-1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],   // 40px
				'heading-2': ['2rem', { lineHeight: '1.25', fontWeight: '700' }],     // 32px
				'heading-3': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],   // 28px
				'heading-4': ['1.5rem', { lineHeight: '1.35', fontWeight: '600' }],   // 24px
				'heading-5': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],   // 20px
				'body-large': ['1.125rem', { lineHeight: '1.5' }],                    // 18px
				'body': ['1rem', { lineHeight: '1.5' }],                              // 16px
				'body-small': ['0.875rem', { lineHeight: '1.5' }],                    // 14px
			},

			// Animation keyframes
			keyframes: {
				// Accordion expand/collapse
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},

				// Fade in/out with subtle movement
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				}
			},

			// Animation utilities
			animation: {
				'accordion-down': 'accordion-down 0.8s ease-out',
				'accordion-up': 'accordion-up 0.8s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'fade-out': 'fade-out 0.8s ease-out'
			}
		}
	},

	// Required plugins
	plugins: [require("tailwindcss-animate")],
} satisfies Config;