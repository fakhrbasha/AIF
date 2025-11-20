'use client';

import { useState, useMemo } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { AI_TOOLS } from '@/lib/ai-tools';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  MessageSquare,
  Image as ImageIcon,
  Briefcase,
  Code2,
  Video,
  Film,
  Search,
  FileText,
  Music,
  ArrowRight,
  TrendingUp,
  Zap,
  Star,
  Users,
  BarChart3,
  Crown,
  Lightbulb,
  Target,
  ShoppingCart,
  Headphones,
  Globe,
  Mail,
  BookOpen,
  Database,
  Shield,
  Settings,
  Palette,
  Megaphone,
  PieChart,
  Phone,
  Briefcase as BriefcaseIcon,
  Building,
  GraduationCap,
  Heart,
  Plane,
  Home,
  Scale,
  UtensilsCrossed,
  Shirt,
  HeartHandshake,
  PawPrint,
  Car,
  Umbrella,
  Newspaper,
  Trophy,
  Gamepad2,
  Tv,
  Pencil,
  Boxes,
  Wrench,
  Microscope,
  Calculator,
  FileCode,
  Network,
  Lock,
  TestTube,
  Presentation,
  LayoutDashboard,
} from 'lucide-react';
import Link from 'next/link';

// Complete Category configuration based on actual AI_TOOLS data
const CATEGORY_CONFIG = [
  {
    name: 'Search & Research',
    icon: Search,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    description:
      'Advanced AI-powered search engines and research tools for finding information efficiently',
  },
  {
    name: 'Content Creation',
    icon: FileText,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    description:
      'AI copywriting and content generation tools for marketing and creative writing',
  },
  {
    name: 'Video Generation',
    icon: Video,
    gradient: 'from-red-500 to-orange-500',
    bgGradient: 'from-red-500/10 to-orange-500/10',
    description:
      'Create professional videos with AI avatars and automated video generation',
  },
  {
    name: 'Audio Generation',
    icon: Headphones,
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
    description:
      'AI voice synthesis, music generation, and audio enhancement tools',
  },
  {
    name: 'Image Generation',
    icon: ImageIcon,
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-500/10 to-rose-500/10',
    description:
      'Generate stunning AI images and artwork from text descriptions',
  },
  {
    name: 'Image Editing',
    icon: Palette,
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-500/10 to-purple-500/10',
    description: 'AI-powered photo editing and enhancement tools',
  },
  {
    name: 'Design Tools',
    icon: Palette,
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-500/10 to-blue-500/10',
    description: 'Professional design tools with AI-powered features',
  },
  {
    name: 'Code Generation',
    icon: Code2,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    description: 'AI coding assistants for faster and smarter development',
  },
  {
    name: 'Development Tools',
    icon: Wrench,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/10 to-orange-500/10',
    description: 'Cloud platforms and tools for developers',
  },
  {
    name: 'Text Generation',
    icon: MessageSquare,
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-500/10 to-indigo-500/10',
    description:
      'Advanced AI language models for text generation and conversation',
  },
  {
    name: 'Productivity',
    icon: Briefcase,
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10',
    description: 'Boost efficiency with AI-powered workspace tools',
  },
  {
    name: 'Transcription',
    icon: FileText,
    gradient: 'from-purple-500 to-violet-500',
    bgGradient: 'from-purple-500/10 to-violet-500/10',
    description: 'AI transcription and meeting notes automation',
  },
  {
    name: 'Translation',
    icon: Globe,
    gradient: 'from-sky-500 to-blue-500',
    bgGradient: 'from-sky-500/10 to-blue-500/10',
    description: 'AI-powered translation services for multiple languages',
  },
  {
    name: 'Summarization',
    icon: FileText,
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    description: 'Automatically summarize long content and documents',
  },
  {
    name: 'Research',
    icon: BookOpen,
    gradient: 'from-teal-500 to-cyan-500',
    bgGradient: 'from-teal-500/10 to-cyan-500/10',
    description: 'AI tools for academic and professional research',
  },
  {
    name: 'Chatbots',
    icon: MessageSquare,
    gradient: 'from-pink-500 to-purple-500',
    bgGradient: 'from-pink-500/10 to-purple-500/10',
    description: 'Build intelligent conversational AI chatbots',
  },
  {
    name: 'Customer Service',
    icon: Phone,
    gradient: 'from-blue-500 to-purple-500',
    bgGradient: 'from-blue-500/10 to-purple-500/10',
    description: 'AI-powered customer support and service platforms',
  },
  {
    name: 'Marketing Tools',
    icon: Megaphone,
    gradient: 'from-orange-500 to-pink-500',
    bgGradient: 'from-orange-500/10 to-pink-500/10',
    description: 'AI marketing and SEO optimization tools',
  },
  {
    name: 'Analytics',
    icon: BarChart3,
    gradient: 'from-purple-500 to-blue-500',
    bgGradient: 'from-purple-500/10 to-blue-500/10',
    description: 'AI-powered data analytics and insights platforms',
  },
  {
    name: 'Data Analysis',
    icon: PieChart,
    gradient: 'from-cyan-500 to-teal-500',
    bgGradient: 'from-cyan-500/10 to-teal-500/10',
    description: 'Advanced data analysis and visualization tools',
  },
  {
    name: 'Data Management',
    icon: Database,
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-500/10 to-purple-500/10',
    description: 'AI-powered data management and organization',
  },
  {
    name: 'CRM',
    icon: Users,
    gradient: 'from-green-500 to-teal-500',
    bgGradient: 'from-green-500/10 to-teal-500/10',
    description: 'Customer relationship management with AI features',
  },
  {
    name: 'Marketing',
    icon: Megaphone,
    gradient: 'from-red-500 to-pink-500',
    bgGradient: 'from-red-500/10 to-pink-500/10',
    description: 'Marketing automation and campaign tools',
  },
  {
    name: 'Marketing Automation',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-500/10 to-orange-500/10',
    description: 'Automate marketing workflows with AI',
  },
  {
    name: 'Email Marketing',
    icon: Mail,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    description: 'AI-powered email marketing platforms',
  },
  {
    name: 'Social Media',
    icon: Users,
    gradient: 'from-pink-500 to-purple-500',
    bgGradient: 'from-pink-500/10 to-purple-500/10',
    description: 'Social media management and scheduling tools',
  },
  {
    name: 'SEO',
    icon: TrendingUp,
    gradient: 'from-green-500 to-blue-500',
    bgGradient: 'from-green-500/10 to-blue-500/10',
    description: 'Search engine optimization tools powered by AI',
  },
  {
    name: 'Project Management',
    icon: LayoutDashboard,
    gradient: 'from-purple-500 to-indigo-500',
    bgGradient: 'from-purple-500/10 to-indigo-500/10',
    description: 'AI-enhanced project management platforms',
  },
  {
    name: 'Writing Tools',
    icon: Pencil,
    gradient: 'from-blue-500 to-purple-500',
    bgGradient: 'from-blue-500/10 to-purple-500/10',
    description: 'AI writing assistants for grammar and style',
  },
  {
    name: 'Automation',
    icon: Settings,
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    description: 'Workflow automation with AI-powered triggers',
  },
  {
    name: 'AI Development',
    icon: Code2,
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
    description: 'Platforms and tools for AI model development',
  },
  {
    name: 'API Management',
    icon: Network,
    gradient: 'from-teal-500 to-green-500',
    bgGradient: 'from-teal-500/10 to-green-500/10',
    description: 'API development and integration platforms',
  },
  {
    name: 'Backend Services',
    icon: Database,
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-500/10 to-blue-500/10',
    description: 'Cloud backend and database services',
  },
  {
    name: 'Security',
    icon: Shield,
    gradient: 'from-red-500 to-orange-500',
    bgGradient: 'from-red-500/10 to-orange-500/10',
    description: 'AI-powered cybersecurity platforms',
  },
  {
    name: 'DevOps',
    icon: Settings,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    description: 'DevOps and infrastructure tools',
  },
  {
    name: 'Testing',
    icon: TestTube,
    gradient: 'from-green-500 to-teal-500',
    bgGradient: 'from-green-500/10 to-teal-500/10',
    description: 'Automated testing platforms with AI',
  },
  {
    name: 'Document Management',
    icon: FileText,
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-500/10 to-indigo-500/10',
    description: 'Digital document management systems',
  },
  {
    name: 'Form Tools',
    icon: FileCode,
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    description: 'AI-powered form builders and surveys',
  },
  {
    name: 'Survey Tools',
    icon: BarChart3,
    gradient: 'from-purple-500 to-blue-500',
    bgGradient: 'from-purple-500/10 to-blue-500/10',
    description: 'Survey and feedback collection tools',
  },
  {
    name: 'AI Models',
    icon: Microscope,
    gradient: 'from-cyan-500 to-purple-500',
    bgGradient: 'from-cyan-500/10 to-purple-500/10',
    description: 'Large language models and AI frameworks',
  },
  {
    name: 'Music Generation',
    icon: Music,
    gradient: 'from-pink-500 to-purple-500',
    bgGradient: 'from-pink-500/10 to-purple-500/10',
    description: 'AI music composition and generation',
  },
  {
    name: 'Video Editing',
    icon: Film,
    gradient: 'from-red-500 to-pink-500',
    bgGradient: 'from-red-500/10 to-pink-500/10',
    description: 'Professional video editing with AI',
  },
  {
    name: 'Video Recording',
    icon: Video,
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    description: 'Screen recording and video capture tools',
  },
  {
    name: 'Audio Editing',
    icon: Headphones,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    description: 'Professional audio editing software',
  },
  {
    name: 'Music Production',
    icon: Music,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    description: 'Digital audio workstations and DAWs',
  },
  {
    name: 'Music Distribution',
    icon: Music,
    gradient: 'from-green-500 to-teal-500',
    bgGradient: 'from-green-500/10 to-teal-500/10',
    description: 'Music distribution and licensing platforms',
  },
  {
    name: '3D Modeling',
    icon: Boxes,
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-500/10 to-purple-500/10',
    description: '3D modeling and rendering software',
  },
  {
    name: 'CAD',
    icon: Wrench,
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    description: 'Computer-aided design software',
  },
  {
    name: 'Game Development',
    icon: Gamepad2,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    description: 'Game engines and development tools',
  },
  {
    name: 'Simulation',
    icon: Microscope,
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
    description: 'Engineering simulation software',
  },
  {
    name: 'Electronics',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-500/10 to-orange-500/10',
    description: 'Electronic design and circuit tools',
  },
  {
    name: 'Data Acquisition',
    icon: Database,
    gradient: 'from-green-500 to-teal-500',
    bgGradient: 'from-green-500/10 to-teal-500/10',
    description: 'Data collection and measurement tools',
  },
  {
    name: 'Scientific Computing',
    icon: Calculator,
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-500/10 to-indigo-500/10',
    description: 'Mathematical and scientific computing',
  },
  {
    name: 'Business Tools',
    icon: Building,
    gradient: 'from-slate-500 to-gray-500',
    bgGradient: 'from-slate-500/10 to-gray-500/10',
    description: 'Business productivity and office suites',
  },
  {
    name: 'Animation',
    icon: Film,
    gradient: 'from-pink-500 to-red-500',
    bgGradient: 'from-pink-500/10 to-red-500/10',
    description: 'Animation creation and editing software',
  },
  {
    name: 'Presentation',
    icon: Presentation,
    gradient: 'from-blue-500 to-purple-500',
    bgGradient: 'from-blue-500/10 to-purple-500/10',
    description: 'AI-powered presentation creation tools',
  },
  {
    name: 'Publishing',
    icon: BookOpen,
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    description: 'Content publishing and distribution',
  },
  {
    name: 'Education',
    icon: GraduationCap,
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10',
    description: 'AI-powered learning and education platforms',
  },
  {
    name: 'Health & Fitness',
    icon: Heart,
    gradient: 'from-red-500 to-pink-500',
    bgGradient: 'from-red-500/10 to-pink-500/10',
    description: 'AI fitness coaches and health trackers',
  },
  {
    name: 'Travel',
    icon: Plane,
    gradient: 'from-sky-500 to-blue-500',
    bgGradient: 'from-sky-500/10 to-blue-500/10',
    description: 'AI travel planning and booking tools',
  },
  {
    name: 'Real Estate',
    icon: Home,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    description: 'Real estate search and valuation platforms',
  },
  {
    name: 'Legal',
    icon: Scale,
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-500/10 to-blue-500/10',
    description: 'Legal services and contract automation',
  },
  {
    name: 'Food & Recipes',
    icon: UtensilsCrossed,
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    description: 'AI recipe and meal planning tools',
  },
  {
    name: 'Fashion',
    icon: Shirt,
    gradient: 'from-pink-500 to-purple-500',
    bgGradient: 'from-pink-500/10 to-purple-500/10',
    description: 'AI fashion and style recommendations',
  },
  {
    name: 'Dating',
    icon: HeartHandshake,
    gradient: 'from-red-500 to-pink-500',
    bgGradient: 'from-red-500/10 to-pink-500/10',
    description: 'AI-powered dating and matchmaking apps',
  },
  {
    name: 'Pet Care',
    icon: PawPrint,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/10 to-orange-500/10',
    description: 'AI pet health and care tracking',
  },
  {
    name: 'Automotive',
    icon: Car,
    gradient: 'from-slate-500 to-gray-500',
    bgGradient: 'from-slate-500/10 to-gray-500/10',
    description: 'Car buying and automotive platforms',
  },
  {
    name: 'Insurance',
    icon: Umbrella,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    description: 'AI-powered insurance platforms',
  },
  {
    name: 'News & Media',
    icon: Newspaper,
    gradient: 'from-gray-500 to-slate-500',
    bgGradient: 'from-gray-500/10 to-slate-500/10',
    description: 'News aggregation and media platforms',
  },
  {
    name: 'Sports',
    icon: Trophy,
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-500/10 to-orange-500/10',
    description: 'Sports analytics and updates',
  },
  {
    name: 'Gaming',
    icon: Gamepad2,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    description: 'Gaming platforms and AI predictions',
  },
  {
    name: 'Entertainment',
    icon: Tv,
    gradient: 'from-red-500 to-purple-500',
    bgGradient: 'from-red-500/10 to-purple-500/10',
    description: 'Streaming and entertainment platforms',
  },
  {
    name: 'E-commerce',
    icon: ShoppingCart,
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10',
    description: 'AI-powered e-commerce platforms',
  },
  {
    name: 'HR Tools',
    icon: Users,
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-500/10 to-indigo-500/10',
    description: 'Human resources and recruiting tools',
  },
  {
    name: 'Finance',
    icon: TrendingUp,
    gradient: 'from-green-500 to-teal-500',
    bgGradient: 'from-green-500/10 to-teal-500/10',
    description: 'Financial tools and accounting software',
  },
  {
    name: 'Data Privacy',
    icon: Lock,
    gradient: 'from-red-500 to-pink-500',
    bgGradient: 'from-red-500/10 to-pink-500/10',
    description: 'Data privacy and protection platforms',
  },
  {
    name: 'AI Operations',
    icon: Settings,
    gradient: 'from-purple-500 to-indigo-500',
    bgGradient: 'from-purple-500/10 to-indigo-500/10',
    description: 'AI model monitoring and governance',
  },
  {
    name: '3D & Modeling',
    icon: Boxes,
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
    description: '3D modeling and animation software',
  },
];

// Calculate category statistics
const getCategoryStats = (categoryName: string) => {
  const tools = AI_TOOLS.filter((tool) => tool.category === categoryName);
  const freeCount = tools.filter((t) => t.type === 'Free').length;
  const paidCount = tools.filter((t) => t.type === 'Paid').length;
  const trialCount = tools.filter((t) => t.type === 'Trial').length;

  return {
    total: tools.length,
    free: freeCount,
    paid: paidCount,
    trial: trialCount,
    trending: tools.length > 10,
  };
};

const CategoryCard = ({
  category,
  index,
}: {
  category: any;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const stats = getCategoryStats(category.name);
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/tools?category=${encodeURIComponent(category.name)}`}>
        <div className="group relative bg-card rounded-3xl p-8 border-2 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden cursor-pointer h-full shadow-lg hover:shadow-2xl hover:shadow-primary/10">
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            animate={
              isHovered
                ? {
                    background: [
                      'linear-gradient(to bottom right, var(--primary-rgb, 0.05), transparent, var(--primary-rgb, 0.1))',
                      'linear-gradient(to bottom right, var(--primary-rgb, 0.1), transparent, var(--primary-rgb, 0.05))',
                    ],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />

          {/* Spotlight Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-3xl" />
          </div>

          {/* Trending Badge */}
          {stats.trending && (
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: index * 0.08 + 0.3,
                type: 'spring',
                bounce: 0.6,
              }}
              className="absolute top-4 right-4 z-20"
            >
              <div className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                <TrendingUp className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold text-primary">Trending</span>
              </div>
            </motion.div>
          )}

          {/* Content */}
          <div className="relative z-10">
            {/* Icon & Illustrations */}
            <div className="flex items-start justify-between mb-6">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-4 bg-primary/10 border border-primary/20 rounded-2xl group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
              </motion.div>

              {/* Emoji Illustrations */}
              <motion.div
                className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity"
                animate={
                  isHovered
                    ? {
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              >
                {category.illustrations}
              </motion.div>
            </div>

            {/* Category Name */}
            <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-500">
              {category.name}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors duration-500">
              {category.description}
            </p>

            {/* Stats Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full group-hover:bg-primary group-hover:border-primary transition-all duration-300"
              >
                <span className="text-sm font-bold text-primary group-hover:text-primary-foreground transition-colors">
                  {stats.total} tools
                </span>
              </motion.div>
              {stats.free > 0 && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-muted rounded-full"
                >
                  <span className="text-sm font-semibold text-muted-foreground">
                    {stats.free} free
                  </span>
                </motion.div>
              )}
              {stats.paid > 0 && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-muted rounded-full flex items-center gap-1"
                >
                  <Crown className="w-3 h-3 text-muted-foreground" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    {stats.paid} paid
                  </span>
                </motion.div>
              )}
            </div>

            {/* Popular Tools Section */}
            {category.popularTools && category.popularTools.length > 0 && (
              <div className="mb-6 pb-6 border-b border-border group-hover:border-primary/20 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-primary" />
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Popular Tools
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.popularTools
                    .slice(0, 3)
                    .map((tool: string, i: number) => (
                      <motion.span
                        key={tool}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 + 0.2 + i * 0.1 }}
                        className="text-sm font-medium text-foreground/70 bg-muted hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/20"
                      >
                        {tool}
                      </motion.span>
                    ))}
                </div>
              </div>
            )}

            {/* Explore Button */}
            <motion.div
              className="flex items-center justify-between group/btn"
              whileHover={{ x: 5 }}
            >
              {/* <span className="font-bold text-primary group-hover:text-primary transition-colors">
                Explore Category
              </span> */}
              <motion.div
                animate={isHovered ? { x: [0, 5, 0] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {/* <ArrowRight className="w-5 h-5 text-primary group-hover/btn:translate-x-1 transition-transform duration-300" /> */}
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-1/2 -translate-x-1/2" />
        </div>
      </Link>
    </motion.div>
  );
};

export default function CategoriesPage() {
  const totalTools = AI_TOOLS.length;
  const totalCategories = CATEGORY_CONFIG.length;
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = CATEGORY_CONFIG.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.03, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-border">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8 shadow-lg shadow-primary/5"
            >
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-bold text-primary">
                {totalCategories} Categories • {totalTools}+ AI Tools
              </span>
              <Zap className="w-4 h-4 text-primary" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
            >
              Explore AI Categories
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Browse AI tools organized by category to find the perfect solution
              for your needs and transform your workflow
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-primary/20 rounded-2xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative flex items-center">
                  <Search className="absolute left-5 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <input
                    type="text"
                    placeholder="Search categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-5 py-4 bg-card border-2 border-border focus:border-primary rounded-2xl outline-none transition-all duration-300 shadow-lg focus:shadow-xl focus:shadow-primary/10 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {[
                {
                  label: 'Categories',
                  value: totalCategories,
                  icon: BarChart3,
                },
                { label: 'Total Tools', value: `${totalTools}+`, icon: Zap },
                { label: 'Top Rated', value: '4.7★', icon: Star },
                { label: 'Active Users', value: '50K+', icon: Users },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="relative group/stat"
                >
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/stat:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl" />
                  <div className="relative bg-card border-2 border-border group-hover/stat:border-primary/50 rounded-2xl p-6 transition-all duration-300 shadow-lg group-hover/stat:shadow-2xl group-hover/stat:shadow-primary/10">
                    <div className="flex flex-col items-center">
                      <div className="p-2.5 bg-primary/10 border border-primary/20 rounded-xl mb-3 group-hover/stat:bg-primary group-hover/stat:border-primary transition-all duration-300">
                        <stat.icon className="w-5 h-5 text-primary group-hover/stat:text-primary-foreground transition-colors" />
                      </div>
                      <div className="text-3xl font-bold mb-1 text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Categories Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/10 border border-primary/20 rounded-xl">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              All Categories
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {filteredCategories.length === totalCategories
              ? `Discover ${totalTools}+ AI tools across ${totalCategories} specialized categories`
              : `Found ${filteredCategories.length} categor${
                  filteredCategories.length === 1 ? 'y' : 'ies'
                } matching your search`}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <AnimatePresence mode="wait">
          {filteredCategories.length > 0 ? (
            <motion.div
              key="grid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredCategories.map((category, index) => (
                <CategoryCard
                  key={category.name}
                  category={category}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-20"
            >
              <div className="inline-flex p-6 bg-muted rounded-full mb-6">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                No categories found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search query
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-3xl" />
            <div className="relative bg-card border-2 border-border rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="inline-flex p-4 bg-primary/10 border border-primary/20 rounded-2xl mb-6 shadow-xl"
                >
                  <Lightbulb className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Can't Find What You Need?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Browse all tools or use our advanced search to find exactly
                  what you're looking for
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/tools">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2"
                    >
                      Browse All Tools
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <Link href="/free">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-card hover:bg-muted border-2 border-border hover:border-primary/50 text-foreground rounded-xl font-bold shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                      <Search className="w-5 h-5" />
                      Free Tools
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
