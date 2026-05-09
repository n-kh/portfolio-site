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
        stone: {
          deep: '#1a1614',
          DEFAULT: '#2a2422',
          light: '#3a322e',
        },
        system: {
          DEFAULT: '#f5b94a',
          dim: '#a87f33',
        },
        cyan: {
          terminal: '#5cf2e8',
          dim: '#2ea69e',
        },
        danger: '#e8453c',
        success: '#5cf284',
        warn: '#f2d95c',
        sponsor: '#f04ec0',
        xp: '#ffd56b',
        parchment: {
          DEFAULT: '#e8dfc6',
          dim: '#a89b7a',
          muted: '#6b624c',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Press Start 2P', 'Courier New', 'monospace'],
        body: ['var(--font-body)', 'Outfit', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        meme: ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
      },
      animation: {
        'system-flicker': 'systemFlicker 4s ease-in-out infinite',
        'level-up-flash': 'levelUpFlash 1.2s ease-out',
        'glitch': 'glitch 0.5s steps(2) infinite',
        'fog-drift': 'fogDrift 30s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        systemFlicker: {
          '0%, 100%': { opacity: '1' },
          '47%, 49%, 51%': { opacity: '0.6' },
          '48%, 50%': { opacity: '1' },
        },
        levelUpFlash: {
          '0%': { transform: 'scale(0.95)', filter: 'brightness(2)' },
          '20%': { transform: 'scale(1.05)', filter: 'brightness(2.5)' },
          '100%': { transform: 'scale(1)', filter: 'brightness(1)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-1px, 1px)' },
          '50%': { transform: 'translate(1px, -1px)' },
          '75%': { transform: 'translate(-1px, -1px)' },
        },
        fogDrift: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(10%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(245, 185, 74, 0.35)' },
          '50%': { boxShadow: '0 0 36px rgba(245, 185, 74, 0.7)' },
        },
        scanline: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100vh' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 24px rgba(92, 242, 232, 0.4)',
        'glow-system': '0 0 24px rgba(245, 185, 74, 0.45)',
        'glow-danger': '0 0 24px rgba(232, 69, 60, 0.5)',
        'loot': '0 0 32px rgba(255, 213, 107, 0.6)',
      },
      backgroundImage: {
        'stone-grain':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.18'/%3E%3C/svg%3E\")",
        'scanlines':
          'repeating-linear-gradient(0deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0.07) 3px)',
      },
    },
  },
  plugins: [],
};

export default config;
