'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Heart, Users, Star } from 'lucide-react';

const reasons = [
  { icon: Zap, text: 'Tool Submission', color: 'text-yellow-500' },
  { icon: Heart, text: 'Partnership', color: 'text-red-500' },
  { icon: Users, text: 'General Inquiry', color: 'text-blue-500' },
  { icon: Star, text: 'Feedback', color: 'text-purple-500' },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-semibold text-primary">
            Let's Connect
          </span>
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-extrabold mb-6 leading-none"
        >
          Let's Build <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Together
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Have a question, feedback, or want to collaborate? Our team is here to
          help you succeed with AI.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4 mt-10">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-all"
            >
              <reason.icon className={`w-4 h-4 ${reason.color}`} />
              <span className="text-sm font-medium">{reason.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
