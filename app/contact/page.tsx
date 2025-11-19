'use client';

import { useRef, useState } from 'react';
import { useScroll } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useTheme } from 'next-themes';

import HeroSection from './Hero-Section';
import ContactMethodsGrid from './ContactMethodsGrid';
import ContactForm from './ContactForm';
import SidebarInfo from './SidebarInfo';
import FinalCTA from './FinalCTA';

export default function ContactPage() {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground overflow-hidden"
    >
      <Navigation />

      <HeroSection />

      <ContactMethodsGrid />

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-5 gap-12">
        <ContactForm className="lg:col-span-3" />
        <SidebarInfo className="lg:col-span-2" />
      </section>

      <FinalCTA />

      <Footer />
    </div>
  );
}
