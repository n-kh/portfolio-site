import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0a0f1c',
          dark: '#0d1321',
        },
        charcoal: '#1a1d29',
        'electric-indigo': '#5b21b6',
        'deep-purple': '#6b21a8',
        'cosmic-violet': '#7c3aed',
        'neon-cyan': '#22d3ee',
        'amber-gold': '#fbbf24',
        'hot-pink': '#ff006e',
        text: {
          primary: '#e5e7eb',
          secondary: '#9ca3af',
          muted: '#6b7280',
        },
      },
      fontFamily: {
        display: ['Righteous', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow': '0 0 24px rgba(34, 211, 238, 0.4)',
        'glow-lg': '0 0 40px rgba(34, 211, 238, 0.6)',
        'achievement': '0 0 32px rgba(251, 191, 36, 0.6)',
      },
    },
  },
  plugins: [],
};

export default config;
