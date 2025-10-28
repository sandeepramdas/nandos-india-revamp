import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nando's Brand Colors - Enhanced
        brand: {
          // Primary Reds (from logo and branding)
          red: {
            DEFAULT: '#D6001C',  // Signature Nando's Red
            50: '#FFE5E8',
            100: '#FFCCD1',
            200: '#FF99A3',
            300: '#FF6675',
            400: '#FF3347',
            500: '#D6001C',      // Main brand red
            600: '#AD0016',
            700: '#850011',
            800: '#5C000C',
            900: '#330007',
          },

          // Flame Oranges (PERi-PERi fire theme)
          orange: {
            DEFAULT: '#FF6B35',
            50: '#FFF4F0',
            100: '#FFE9E1',
            200: '#FFD3C3',
            300: '#FFBDA5',
            400: '#FFA787',
            500: '#FF6B35',      // Flame orange
            600: '#FF4500',
            700: '#CC3700',
            800: '#992900',
            900: '#661B00',
          },

          // Warm Yellows (Heat levels)
          yellow: {
            DEFAULT: '#FDB913',
            50: '#FFFBF0',
            100: '#FFF7E1',
            200: '#FFEFC3',
            300: '#FFE7A5',
            400: '#FFDF87',
            500: '#FDB913',      // Warm yellow
            600: '#E5A500',
            700: '#B38000',
            800: '#805C00',
            900: '#4D3700',
          },

          // Charcoal/Black (from logo and footer)
          charcoal: {
            DEFAULT: '#1A1A1A',
            50: '#F5F5F5',
            100: '#E8E8E8',
            200: '#D1D1D1',
            300: '#BABABA',
            400: '#8C8C8C',
            500: '#5E5E5E',
            600: '#3D3D3D',
            700: '#2D2D2D',
            800: '#1A1A1A',     // Deep charcoal
            900: '#0A0A0A',
          },

          // Cream/Beige (warmth and comfort)
          cream: {
            DEFAULT: '#FFF8F0',
            50: '#FFFEFB',
            100: '#FFF8F0',     // Soft cream
            200: '#FFF0E1',
            300: '#FFE8D2',
            400: '#FFE0C3',
            500: '#FFD8B4',
            600: '#E5C0A0',
            700: '#CCA88C',
            800: '#B39078',
            900: '#997864',
          },
        },

        // Semantic Colors for Light/Dark Mode
        background: {
          light: '#FFFFFF',
          dark: '#0A0A0A',
        },
        foreground: {
          light: '#1A1A1A',
          dark: '#F5F5F5',
        },

        // UI Element Colors
        border: {
          light: '#E8E8E8',
          dark: '#2D2D2D',
        },
        card: {
          light: '#FFFFFF',
          dark: '#1A1A1A',
        },
      },

      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },

      boxShadow: {
        'glow-red': '0 0 20px rgba(214, 0, 28, 0.4)',
        'glow-orange': '0 0 20px rgba(255, 107, 53, 0.4)',
        'glow-yellow': '0 0 20px rgba(253, 185, 19, 0.4)',
      },

      backgroundImage: {
        'gradient-fire': 'linear-gradient(135deg, #D6001C 0%, #FF6B35 50%, #FDB913 100%)',
        'gradient-fire-reverse': 'linear-gradient(135deg, #FDB913 0%, #FF6B35 50%, #D6001C 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)',
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-down': 'fadeDown 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'slide-in-left': 'slideInLeft 0.4s ease-out',
        'scale-up': 'scaleUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'gradient': 'gradient 3s ease infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(214, 0, 28, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(214, 0, 28, 0.8)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
}

export default config
