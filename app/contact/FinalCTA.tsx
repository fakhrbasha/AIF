'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-10" />
        <div className="relative p-12 md:p-16 text-center border border-border backdrop-blur">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-8 right-8 w-24 h-24 border-2 border-primary/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-8 left-8 w-20 h-20 border-2 border-accent/20 rounded-full"
          />

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Can't Wait to Hear From You
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of creators, developers, and AI enthusiasts building
            the future with AIFinder
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href={'/tools'}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all"
              >
                Explore AI Tools
              </motion.button>
            </Link>
            <Link href={'/about'}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-card border-2 border-border hover:border-primary/50 font-bold text-lg transition-all"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
