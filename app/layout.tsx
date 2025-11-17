import type React from 'react';
import { Almarai, Montserrat, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import ThemeProvider from '@/components/theme-provider';
import { Roboto } from 'next/font/google';
import Script from 'next/script';

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

        {/* ===== Chatbase Chatbot Script ===== */}
        <Script id="chatbase-config" strategy="afterInteractive">
          {`
    window.chatbaseConfig = {
      chatbotId: "u3vih1s7o4nmncue0ua3muuq7h8biozp",
    };
  `}
        </Script>

        <Script
          src="https://www.chatbase.co/embed.min.js"
          id="chatbase-script"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
