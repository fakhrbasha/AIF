'use client';

import { useParams } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { AI_TOOLS } from '@/lib/ai-tools';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Star,
  Zap,
  Users,
  TrendingUp,
  Check,
} from 'lucide-react';

export default function ToolDetailsPage() {
  const params = useParams();
  const toolId = params.id as string;

  const tool = AI_TOOLS.find((t) => t.id === toolId);

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold mb-4">Tool Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The tool you're looking for doesn't exist.
            </p>
            <Link href="/tools">
              <Button>Back to Tools</Button>
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedTools = AI_TOOLS.filter(
    (t) => t.category === tool.category && t.id !== tool.id
  ).slice(0, 4);

  const features = [
    {
      icon: Star,
      title: 'Premium Quality',
      desc: 'Industry-leading performance',
    },
    { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed' },
    { icon: Users, title: 'User Friendly', desc: 'Intuitive interface' },
    { icon: TrendingUp, title: 'Proven Results', desc: 'Trusted by thousands' },
  ];

  const benefits = [
    'Save up to 10 hours per week',
    'Increase productivity by 3x',
    'Professional-grade results',
    'Seamless integration',
    'Regular updates & support',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-white/5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Tools
            </Link>
          </motion.div>

          {/* Hero Content */}
          <div className="mt-12 mb-16">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Left: Tool Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex-1"
              >
                <div className="flex items-center gap-6 mb-6">
                  <motion.div
                    className="text-8xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {tool.logo}
                  </motion.div>
                  <div>
                    <motion.h1
                      className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {tool.name}
                    </motion.h1>
                    <p className="text-lg text-muted-foreground font-medium">
                      {tool.category}
                    </p>
                  </div>
                </div>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {tool.description}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 group shadow-lg shadow-primary/25"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </a>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span
                      className={`px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap border-2 ${
                        tool.type === 'Free'
                          ? 'bg-green-500/10 text-green-400 border-green-500/30'
                          : tool.type === 'Paid'
                          ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                          : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                      }`}
                    >
                      {tool.type}
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right: Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:w-96"
              >
                <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
                  <h3 className="text-lg font-semibold mb-6">Key Benefits</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Choose {tool.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                  <div className="relative bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tool Details Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 hover:scale-105 transition-transform">
            <h3 className="font-semibold text-lg mb-2 text-blue-400">
              Category
            </h3>
            <p className="text-foreground text-xl font-medium">
              {tool.category}
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 hover:scale-105 transition-transform">
            <h3 className="font-semibold text-lg mb-2 text-purple-400">
              Pricing Type
            </h3>
            <p className="text-foreground text-xl font-medium">{tool.type}</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 hover:scale-105 transition-transform">
            <h3 className="font-semibold text-lg mb-2 text-green-400">
              Official Website
            </h3>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground text-xl font-medium hover:text-primary transition-colors flex items-center gap-2 group"
            >
              Visit
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Perfect For Your Workflow
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how {tool.name} can transform your productivity
            </p>
          </div>
          <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-3xl p-10 shadow-2xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {tool.name} is the ultimate solution for{' '}
                {tool.category.toLowerCase()} tasks. Whether you're a
                professional seeking to streamline your workflow, a student
                looking to enhance your learning, or an entrepreneur building
                the next big thing, this tool empowers you to achieve more in
                less time. Experience the perfect blend of power and simplicity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                More Tools in {tool.category}
              </h2>
              <p className="text-muted-foreground">
                Explore similar tools that might interest you
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTools.map((relatedTool, index) => (
                <motion.div
                  key={relatedTool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Link href={`/tools/${relatedTool.id}`}>
                    <div className="group relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                      <div className="relative p-6 rounded-2xl border border-border bg-card hover:bg-card/80 transition-all h-full flex flex-col">
                        <motion.div
                          className="text-5xl mb-4"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {relatedTool.logo}
                        </motion.div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {relatedTool.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">
                          {relatedTool.description}
                        </p>
                        <div className="mt-4 pt-4 border-t border-border">
                          <span className="text-xs text-primary font-medium group-hover:underline">
                            Learn more →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
