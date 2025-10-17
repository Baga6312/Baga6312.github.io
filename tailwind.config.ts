import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		 colors: {
  background: 'hsl(var(--background) / <alpha-value>)',
  foreground: 'hsl(var(--foreground) / <alpha-value>)',
  primary: 'hsl(var(--primary) / <alpha-value>)',
  'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
  secondary: 'hsl(var(--secondary) / <alpha-value>)',
  muted: 'hsl(var(--muted) / <alpha-value>)',
  border: 'hsl(var(--border) / <alpha-value>)',
  navy: '#0a192f',
  'light-navy': '#112240',
  'lightest-navy': '#233554',
  slate: '#8892b0',
  'light-slate': '#a8b2d1',
  'lightest-slate': '#ccd6f6',
  white: '#e6f1ff',
  green: '#64ffda',
},
  	
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate") , require('daisyui')],
};
export default config;
