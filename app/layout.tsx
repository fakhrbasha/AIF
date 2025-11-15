import type React from 'react';
import { Almarai, Montserrat, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import ThemeProvider from '@/components/theme-provider';
import { Roboto } from 'next/font/google';

export const metadata = {
  title: 'AIF',
  description: 'AIF For AI Tools',
  icons: {
    icon: '/Logo.png',
    shortcut: '/Logo.ico',
    apple: '/Logo.png',
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>{children}</ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
