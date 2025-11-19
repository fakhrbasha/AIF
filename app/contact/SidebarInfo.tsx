'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  Clock,
  CheckCircle2,
  Twitter,
  Github,
  Linkedin,
  Globe,
} from 'lucide-react';

export default function SidebarInfo({ className }: { className?: string }) {
  const socialLinks = [
    {
      icon: Twitter,
      label: 'Twitter',
      color:
        'hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]/50 hover:text-[#1DA1F2]',
    },
    {
      icon: Github,
      label: 'GitHub',
      color: 'hover:bg-foreground/10 hover:border-foreground/50',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      color:
        'hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/50 hover:text-[#0A66C2]',
    },
    {
      icon: Globe,
      label: 'Website',
      color: 'hover:bg-primary/10 hover:border-primary/50 hover:text-primary',
    },
  ];

  const reasons = [
    'Submit your AI tool for listing',
    'Partnership opportunities',
    'Technical support & guidance',
    'Feedback and suggestions',
    'Press and media inquiries',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {/* Why Contact Us */}
      <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-transparent border border-primary/20 rounded-3xl p-8 mb-6">
        <Sparkles className="w-10 h-10 text-primary mb-4" />
        <h3 className="text-2xl font-bold mb-4">Why Reach Out?</h3>
        <ul className="space-y-4">
          {reasons.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Response Time */}
      <div className="bg-card border border-border rounded-3xl p-8 mb-6">
        <Clock className="w-10 h-10 text-accent mb-4" />
        <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 rounded-2xl bg-background">
            <span>Email</span>
            <span className="text-primary font-bold">24 hours</span>
          </div>
          <div className="flex justify-between items-center p-4 rounded-2xl bg-background">
            <span>Live Chat</span>
            <span className="text-accent font-bold">Instant</span>
          </div>
          <div className="flex justify-between items-center p-4 rounded-2xl bg-background">
            <span>Phone</span>
            <span className="text-secondary font-bold">Same day</span>
          </div>
        </div>
      </div>

      {/* Social Connect */}
    </motion.div>
  );
}
