import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0c1728',
        steel: '#10233d',
        mist: '#e7edf5',
        gold: '#cfa45c',
        aqua: '#71c7c0',
        slate: '#5c6b83',
      },
      fontFamily: {
        sans: ['"Aptos"', '"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 30px 80px rgba(7, 17, 34, 0.15)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
