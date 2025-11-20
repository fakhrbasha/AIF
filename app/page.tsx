'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ToolCard } from '@/components/tool-card';
import { Button } from '@/components/ui/button';
import { AI_TOOLS } from '@/lib/ai-tools';
import AIToolChatbot from '@/components/AIToolChatbot';
import ChatbotWidget from '@/components/chat';

const FEATURED_TOOLS = AI_TOOLS.slice(0, 6);

export default function HomeCreative() {
  const { theme, setTheme } = useTheme();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (!theme) setTheme('dark');
  }, [theme, setTheme]);

  const categories = [
    {
      name: 'Image Generation',
      count: 48,
      description: 'AI-powered image generation and editing tools',
    },
    {
      name: 'Chatbot',
      count: 6,
      description: 'Conversational AI and chatbot solutions',
    },
    {
      name: 'Code Generation',
      count: 22,
      description: 'Code generation and development assistants',
    },
    {
      name: 'Video',
      count: 40,
      description: 'Video creation and editing with AI',
    },
    {
      name: 'Audio',
      count: 34,
      description: 'Voice synthesis and audio processing',
    },
    {
      name: 'Marketing',
      count: 18,
      description: 'Marketing automation and content tools',
    },
    {
      name: 'Analytics',
      count: 5,
      description: 'Data analysis and business intelligence',
    },
    {
      name: 'Design',
      count: 21,
      description: 'UI/UX and graphic design assistants',
    },
  ];

  // Interactive parallax for hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useTransform(mouseX, [-300, 300], [-40, 40]);
  const glowY = useTransform(mouseY, [-200, 200], [-30, 30]);
  const rotateX = useTransform(mouseY, [-300, 300], [2, -2]);
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Enhanced Animated Background Orbs */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute left-[-10%] top-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          style={{ x: glowX }}
          className="absolute right-[-5%] bottom-[-15%] w-[700px] h-[700px] bg-primary/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            delay: 2,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Hero with interactive tilt */}
      <section
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
          mouseX.set(e.clientX - rect.left - rect.width / 2);
          mouseY.set(e.clientY - rect.top - rect.height / 2);
        }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-10 md:py-12"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-primary">
                150+ Curated AI Tools
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-6xl md:text-7xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-8">
              <span className="block text-foreground">Discover & play</span>
              <span className="block text-primary mt-2">with AI tools</span>
              <span className="block text-muted-foreground text-4xl sm:text-5xl md:text-6xl lg:text-5xl mt-2">
                beautifully presented.
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl  text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Dynamic previews, trending lists, and immersive cards — everything
              designed to inspire exploration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <Link href="/tools">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="sm"
                    className="group px-8 py-6 text-sm font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all"
                  >
                    Explore Tools
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Button>
                </motion.div>
              </Link>

              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="px-8 py-6 text-sm font-semibold rounded-xl border-2 bg-transparent hover:bg-accent transition-all"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
            >
              {[
                { value: '600+', label: 'AI Tools' },
                { value: '400+', label: 'Active Users' },
                { value: '4.8★', label: 'Avg Rating' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right preview card cluster */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md lg:max-w-lg"
            style={{ perspective: 1200 }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative transform-gpu will-change-transform"
            >
              <motion.div
                style={{ x: glowX, y: glowY }}
                className="rounded-3xl p-6 bg-card/50 backdrop-blur-xl border border-border shadow-2xl"
              >
                <div className="flex gap-4 items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-lg font-bold text-primary">
                    AI
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-foreground">
                      Live Preview
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Hover cards to preview features
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {FEATURED_TOOLS.slice(0, 3).map((t, i) => (
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      whileHover={{ scale: 1.02, x: 6 }}
                      className="group p-4 rounded-xl bg-accent/50 hover:bg-accent border border-border transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            <h4 className="font-semibold text-foreground">
                              {t.name}
                            </h4>
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                              {t.category || 'Tool'}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {t.description}
                          </p>
                        </div>
                        <svg
                          className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [-10, 10, -10],
                }}
                transition={{
                  opacity: { delay: 0.9, duration: 0.4 },
                  scale: { delay: 0.9, duration: 0.4 },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute -top-6 -right-6 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground shadow-xl shadow-primary/30 font-semibold text-sm"
              >
                🔥 Trending
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Tools Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Featured Tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Hand-picked by our community
            </p>
          </div>
          <Link href="/tools">
            <Button
              variant="outline"
              className="hidden sm:flex items-center gap-2 rounded-lg"
            >
              View All
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {FEATURED_TOOLS.map((tool, idx) => (
            <motion.div
              key={tool.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <ToolCard tool={tool} index={idx} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Browse by Category
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of AI tools across different
            categories
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="text-left p-6 rounded-xl bg-card hover:bg-accent border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-foreground">
                  {category.name}
                </h4>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {category.count}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Trending Tools */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Trending Now
          </h3>
          <p className="text-lg text-muted-foreground">
            Most popular tools this week
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AI_TOOLS.slice(10, 13).map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -6 }}
              className="group rounded-2xl p-6 bg-card/50 backdrop-blur-sm hover:bg-card border border-border transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                    {t.name}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {t.description}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
                  Hot
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Handpicked',
              description:
                'Only top-rated tools that pass our rigorous review process.',
              icon: (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ),
            },
            {
              title: 'Immersive UI',
              description:
                'Interactive previews and delightful micro-interactions.',
              icon: (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              ),
            },
            {
              title: 'Always Fresh',
              description:
                'Weekly updates with trending tools and new arrivals.',
              icon: (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card border border-border transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-6 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                {feature.icon}
              </div>
              <h4 className="font-bold text-xl text-foreground mb-3">
                {feature.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* <AIToolChatbot /> */}

      <Footer />
    </div>
  );
}
