'use client';

import { motion, useScroll } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useTheme } from 'next-themes';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  TrendingUp,
  Bookmark,
  Share2,
  Eye,
  MessageCircle,
  Filter,
  X,
  Star,
  Award,
  Zap,
} from 'lucide-react';
import router from 'next/router';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BlogPage() {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { name: 'All', icon: Sparkles },
    { name: 'AI News', icon: TrendingUp },
    { name: 'Tool Reviews', icon: Star },
    { name: 'Tutorials', icon: Zap },
    { name: 'Industry Trends', icon: Award },
    { name: 'Case Studies', icon: MessageCircle },
  ];

  const featuredPost = {
    id: 1,
    title: 'The AI Revolution: How 2025 is Reshaping Creative Work',
    excerpt:
      'Discover how artificial intelligence is transforming creative industries, from design to content creation, and what it means for professionals worldwide.',
    author: {
      name: 'Fakhr Basha',
      avatar: '/Logo.png',
      bio: 'AI enthusiast with 10+ years in tech',
    },
    category: 'Industry Trends',
    date: 'Jan 15, 2025',
    readTime: '12 min read',
    image: '/Logo.png',
    comments: 127,
    featured: true,
    tags: ['AI', 'Creativity', 'Future of Work'],
  };

  const posts = [
    {
      id: 2,
      title: 'ChatGPT vs Claude: The Ultimate AI Assistant Showdown',
      excerpt:
        'An in-depth comparison of the leading AI assistants, their unique capabilities, and which one suits your needs best.',
      author: {
        name: 'Fakhr basha',
        avatar: '/Logo.png',
        verified: true,
      },
      category: 'Tool Reviews',
      date: 'Jan 14, 2025',
      readTime: '8 min read',
      image: '/Logo.png',
      views: '18.2K',
      comments: 89,
      trending: true,
      tags: ['ChatGPT', 'Claude', 'Comparison'],
    },
    {
      id: 3,
      title: "Midjourney 6.0: Complete Beginner's Guide",
      excerpt:
        'Learn how to create stunning AI-generated images from scratch with our comprehensive step-by-step tutorial.',
      author: {
        name: 'Fakhr basha',
        avatar: '/Logo.png',
        verified: true,
      },
      category: 'Tutorials',
      date: 'Jan 12, 2025',
      readTime: '15 min read',
      image: '/Logo.png',
      views: '31.3K',
      comments: 156,
      popular: true,
      tags: ['Midjourney', 'Tutorial', 'AI Art'],
    },
    {
      id: 4,
      title: 'How AI Tools Boosted Our Startup Productivity by 400%',
      excerpt:
        'Real-world case study: How a small team leveraged AI to scale operations and compete with industry giants.',
      author: {
        name: 'Fakhr basha',
        avatar: '/Logo.png',
        verified: true,
      },
      category: 'Case Studies',
      date: 'Jan 10, 2025',
      readTime: '10 min read',
      image: '/Logo.png',
      views: '15.8K',
      comments: 73,
      tags: ['Productivity', 'Startup', 'Success Story'],
    },
    {
      id: 5,
      title: 'OpenAI Announces GPT-5: Everything You Need to Know',
      excerpt:
        "Breaking news: The next generation of GPT is here. What's new, what's improved, and how it will change AI forever.",
      author: {
        name: 'Fakhr basha',
        avatar: '/Logo.png',
        verified: true,
      },
      category: 'AI News',
      date: 'Jan 8, 2025',
      readTime: '6 min read',
      image: '/Logo.png',
      views: '45.1K',
      comments: 234,
      trending: true,
      tags: ['GPT-5', 'OpenAI', 'Breaking News'],
    },
    {
      id: 6,
      title: '20 Free AI Tools Every Creator Must Try in 2025',
      excerpt:
        'Our curated collection of the best free AI tools for content creation, design, writing, and more.',
      author: {
        name: 'Fakhr basha',
        avatar: '/Logo.png',
        verified: true,
      },
      category: 'Tool Reviews',
      date: 'Jan 6, 2025',
      readTime: '14 min read',
      image: '/Logo.png',
      views: '28.7K',
      comments: 112,
      popular: true,
      tags: ['Free Tools', 'Creators', 'Guide'],
    },
    {
      id: 7,
      title: 'Building Custom GPTs: Advanced Tutorial',
      excerpt:
        'Master the art of creating custom AI assistants with this advanced guide to GPT customization.',
      author: {
        name: 'Fakhr basha',
        avatar: '/Logo.png',
        verified: true,
      },
      category: 'Tutorials',
      date: 'Jan 4, 2025',
      readTime: '18 min read',
      image: '/Logo.png',
      views: '12.4K',
      comments: 67,
      tags: ['GPT', 'Advanced', 'Development'],
    },
    {
      id: 8,
      title: 'The Ethics of AI: Balancing Innovation and Responsibility',
      excerpt:
        'Exploring the ethical implications of AI technology and how the industry is addressing key concerns.',
      author: {
        name: 'Fakhr basha',
        avatar: '/Logo.png',
        verified: true,
      },
      category: 'Industry Trends',
      date: 'Jan 2, 2025',
      readTime: '11 min read',
      image: '/Logo.png',
      views: '9.6K',
      comments: 45,
      tags: ['Ethics', 'AI Safety', 'Future'],
    },
  ];

  const trendingTopics = [
    { name: 'GPT-5', count: 67, growth: '+23%' },
    { name: 'AI Art', count: 54, growth: '+18%' },
    { name: 'Productivity', count: 48, growth: '+31%' },
    { name: 'ChatGPT', count: 42, growth: '+15%' },
    { name: 'Machine Learning', count: 38, growth: '+12%' },
    { name: 'Automation', count: 33, growth: '+9%' },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground overflow-hidden"
    >
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                AI Insights & Updates
              </span>
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-extrabold mb-6 leading-none"
            >
              AIFinder{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Blog
                </span>
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Discover the latest AI tools, tutorials, and industry insights to
              stay ahead in the AI revolution
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="max-w-2xl mx-auto relative"
            >
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles, topics, tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-16 py-5 rounded-2xl bg-card border-2 border-border focus:border-primary outline-none transition-all text-lg placeholder:text-muted-foreground"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-1 hover:bg-accent/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl"
          />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-2xl font-bold">Browse by Category</h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-primary/50 transition-all lg:hidden"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.name)}
              className={`relative p-6 rounded-2xl transition-all group ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-card border border-border hover:border-primary/50'
              }`}
            >
              <category.icon
                className={`w-8 h-8 mx-auto mb-3 ${
                  selectedCategory === category.name
                    ? 'text-white'
                    : 'text-primary'
                }`}
              />
              <div className="font-semibold text-sm mb-1">{category.name}</div>
              <div
                className={`text-xs ${
                  selectedCategory === category.name
                    ? 'text-white/80'
                    : 'text-muted-foreground'
                }`}
              ></div>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 lg:h-full bg-gradient-to-br from-primary/10 via-accent/10 to-transparent">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-contain p-12 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-bold backdrop-blur-sm shadow-lg">
                    ⭐ Featured
                  </span>
                  <span className="px-4 py-2 rounded-xl bg-background/80 backdrop-blur-sm text-sm font-semibold shadow-lg">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredPost.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-background text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden border-2 border-border">
                      <Image
                        src={featuredPost.author.avatar}
                        width={56}
                        height={56}
                        alt={featuredPost.author.name}
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <div className="font-bold">
                        {featuredPost.author.name}
                      </div>
                      <div className="text-sm text-muted-foreground"></div>
                    </div>
                  </div>

                  {/* Stats & CTA */}
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-4 h-4" />
                      </span>
                      <span className="flex items-center gap-1.5">
                        {/* <MessageCircle cla/sssName="w-4 h-4" /> */}
                        {/* {featuredPost.comments}/ */}
                      </span>
                    </div>
                    <Link href={'/blogs/1'}>
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all"
                      >
                        Read Article
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr,350px] gap-12">
          {/* Posts Grid */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">
                {selectedCategory === 'All'
                  ? 'Latest Articles'
                  : selectedCategory}
              </h2>
              <span className="text-muted-foreground">
                {filteredPosts.length} articles
              </span>
            </div>

            <div className="grid gap-8">
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all">
                    <div className="flex flex-col sm:flex-row gap-6 p-6">
                      {/* Image */}
                      <div className="relative w-full sm:w-48 h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                        />
                        {post.trending && (
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-red-500 text-white text-xs font-bold flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </div>
                        )}
                        {post.popular && (
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-amber-500 text-white text-xs font-bold flex items-center gap-1">
                            <Star className="w-3 h-3 fill-white" />
                            Popular
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-xs font-semibold">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-md bg-background text-xs text-muted-foreground"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                          {/* Author */}
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                              <Image
                                src={post.author.avatar}
                                width={40}
                                height={40}
                                alt={post.author.name}
                                className="object-contain p-2"
                              />
                            </div>
                            <div className="min-w-0">
                              <div className="font-semibold text-sm truncate flex items-center gap-1">
                                {post.author.name}
                                {post.author.verified && (
                                  <Award className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <Link href={`/blogs/${post.id}`}>
                              <Button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg">
                                Read Article <ArrowRight className="w-4 h-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <Search className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-xl font-semibold mb-2">No articles found</p>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-6">
              <h3 className="text-xl font-bold">Trending Topics</h3>
              <ul className="space-y-2">
                {trendingTopics.map((topic) => (
                  <li
                    key={topic.name}
                    className="flex justify-between text-sm text-muted-foreground"
                  >
                    <span>#{topic.name}</span>
                    <span>
                      {topic.count} ({topic.growth})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
