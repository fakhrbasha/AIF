'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import React, { useRef } from 'react';
import {
  Sparkles,
  Target,
  Users,
  Zap,
  Heart,
  Shield,
  Code,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground overflow-hidden"
    >
      <Navigation />

      {/* Hero Section with Parallax */}
      <section className="relative overflow-hidden py-32 md:py-40">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-6xl mx-auto text-center px-6 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Discover the Future of AI
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            About{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                AIFinder
              </span>
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}
                viewBox="0 0 200 20"
                className="absolute -bottom-2 left-0 w-full"
              >
                <motion.path
                  d="M5 15 Q 100 5, 195 15"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  fill="none"
                />
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Your gateway to discovering the world's most powerful AI tools —
            beautifully curated, intelligently organized, and designed to help
            you work smarter and faster.
          </motion.p>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -left-20 top-20 w-96 h-96 rounded-full blur-3xl opacity-20 bg-primary"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -right-20 bottom-20 w-96 h-96 rounded-full blur-3xl opacity-20 bg-accent"
          />
          <motion.div
            animate={{
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-1/3 top-1/2 w-64 h-64 rounded-full blur-3xl opacity-10 bg-secondary"
          />
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </section>

      {/* What is AIFinder Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What is AIFinder?
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  AIFinder is a comprehensive platform built to simplify the
                  process of discovering, comparing, and selecting AI tools.
                  With hundreds of AI solutions emerging daily, finding the
                  right one can be overwhelming — and that's exactly what we
                  solve.
                </p>
                <p>
                  Our mission is to empower creators, developers, and businesses
                  by curating verified, high-quality AI tools across all
                  categories: productivity, design, writing, development,
                  marketing, and more.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {[
                { icon: Zap, label: 'Fast Discovery' },
                { icon: Shield, label: 'Verified Tools' },
                { icon: Heart, label: 'Curated Quality' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-border bg-card">
              <Image
                src="/Logo.png"
                alt="AI Finder Overview"
                fill
                className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '600+', label: 'AI Tools' },
            { value: '70+', label: 'Categories' },
            { value: '400+', label: 'Happy Users' },
            { value: '24/7', label: 'Updated' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {[
            {
              icon: Target,
              title: 'Our Mission',
              desc: 'To simplify the discovery of AI tools by offering a clean, user-friendly interface, intelligent filtering, and curated content that helps users save time, find inspiration, and unlock new levels of creativity through artificial intelligence.',
              gradient: 'from-primary/10 to-transparent',
            },
            {
              icon: Sparkles,
              title: 'Our Vision',
              desc: 'To become the leading platform for AI exploration — a trusted hub that connects innovators, developers, and creators with the tools that will shape the future of technology and human potential.',
              gradient: 'from-accent/10 to-transparent',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className={`relative p-8 rounded-3xl backdrop-blur border border-border bg-gradient-to-br ${item.gradient} group overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The principles that guide everything we do at AIFinder
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Shield,
              title: 'Transparency',
              desc: 'We provide accurate, unbiased information about every AI tool — no hidden sponsorships or paid rankings.',
              iconBg: 'from-primary to-primary/80',
            },
            {
              icon: Zap,
              title: 'Innovation',
              desc: 'We embrace creativity and cutting-edge design to keep our platform inspiring and forward-thinking.',
              iconBg: 'from-accent to-accent/80',
            },
            {
              icon: Users,
              title: 'Community',
              desc: 'We believe in empowering users — creators, developers, and AI enthusiasts — to learn, share, and grow together.',
              iconBg: 'from-secondary to-secondary/80',
            },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
              <div className="relative p-8 rounded-3xl bg-card border border-border backdrop-blur h-full hover:border-primary/30 transition-colors">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <v.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-3">{v.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Developer Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the Developer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built with passion and dedication to revolutionize AI tool discovery
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl" />
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 backdrop-blur">
            <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
              {/* Developer Avatar */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative mx-auto md:mx-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-50" />
                <div className="relative w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                  <Code className="w-24 h-24 text-primary" />
                </div>
              </motion.div>

              {/* Developer Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">FAKHR</h3>
                  <p className="text-xl text-primary font-medium mb-4">
                    Front End Developer
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Front-End Developer Final-year Computer Science student with
                    a solid foundation in C++ and JavaScript, and hands-on
                    experience in building secure, scalable, and feature-rich
                    web applications using HTML, CSS, and JavaScript. Proficient
                    in React.js, Next.js, and TypeScript, with practical
                    experience using React Query for efficient data fetching and
                    state management. Passionate about solving real-world
                    problems through innovative and modern web development
                    solutions
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {[
                    'Next.js',
                    'React',
                    'TypeScript',
                    'TailwindCSS',
                    'Ai-Tools',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <motion.a
                    href="https://github.com/fakhrbasha"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/20 transition-all group"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/ahmed-mo-salah-19b489286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-accent-foreground font-medium hover:shadow-lg hover:shadow-accent/20 transition-all group"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>

                  <motion.a
                    href="mailto:ahmed.msalaa@gmail.com"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-medium hover:shadow-lg hover:shadow-secondary/20 transition-all group"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-10" />
          <div className="relative p-12 md:p-16 text-center border border-border backdrop-blur bg-card">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-8 right-8 w-20 h-20 border-2 border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-8 left-8 w-16 h-16 border-2 border-accent/20 rounded-full"
            />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Discover Amazing AI Tools?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of creators and developers who trust AIFinder to
              find the perfect AI solutions
            </p>
            <Link href={'/tools'}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full cursor-pointer  bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Explore AI Tools
              </motion.button>
            </Link>
            {/* <Button className="text-sm cursor-pointer  font-bold">
              Explore AI Tools
            </Button> */}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
