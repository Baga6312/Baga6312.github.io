import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Baga - Full-Stack Developer & Software Engineer',
  description: 'Portfolio of Baga, a passionate full-stack developer specializing in modern web technologies, mobile development, and software engineering.',
  keywords: 'full-stack developer, software engineer, React, Next.js, TypeScript, Python, mobile development, portfolio',
  authors: [{ name: 'Baga' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}