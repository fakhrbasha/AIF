'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Sparkles,
  Filter,
  X,
  Grid3x3,
  List,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';
import { AI_TOOLS } from '@/lib/ai-tools';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { StickyBannerDemo } from '@/components/sticky-nav';

// Mock data - replace with your actual AI_TOOLS data

const CATEGORIES = [
  'All',
  'Search & Research',
  'Content Creation',
  'Video Generation',
  'Audio Generation',
  'Image Generation',
  'Image Editing',
  'Design Tools',
  'Code Generation',
  'Development Tools',
  'Text Generation',
  'Productivity',
  'Transcription',
  'Translation',
  'Summarization',
  'Research',
  'Chatbots',
  'Customer Service',
  'Marketing Tools',
  'Analytics',
  'Data Analysis',
  'Data Management',
  'CRM',
  'Marketing',
  'Marketing Automation',
  'Email Marketing',
  'Social Media',
  'SEO',
  'Project Management',
  'Writing Tools',
  'Automation',
  'AI Development',
  'API Management',
  'Backend Services',
  'Security',
  'DevOps',
  'Testing',
  'Document Management',
  'Form Tools',
  'Survey Tools',
  'AI Models',
  'Music Generation',
  'Video Editing',
  'Video Recording',
  'Audio Editing',
  'Music Production',
  'Music Distribution',
  '3D Modeling',
  'CAD',
  'Game Development',
  'Simulation',
  'Electronics',
  'Data Acquisition',
  'Scientific Computing',
  'Business Tools',
  'Animation',
  'Presentation',
  'Publishing',
  'Education',
  'Health & Fitness',
  'Travel',
  'Real Estate',
  'Legal',
  'Food & Recipes',
  'Fashion',
  'Dating',
  'Pet Care',
  'Automotive',
  'Insurance',
  'News & Media',
  'Sports',
  'Gaming',
  'Music',
  'Entertainment',
  'E-commerce',
  'HR Tools',
  'Finance',
  'Data Privacy',
  'AI Operations',
  '3D & Modeling',
  'Search',
  'Content Generation',
  'Audio',
];
const TYPES = ['All', 'Free', 'Paid', 'Trial'];

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(true);
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  const visibleCategories = showMoreCategories
    ? CATEGORIES
    : CATEGORIES.slice(0, 20);

  const filteredTools = useMemo(() => {
    return AI_TOOLS.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || tool.category === selectedCategory;
      const matchesType = selectedType === 'All' || tool.type === selectedType;
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedType]);

  const hasActiveFilters =
    selectedCategory !== 'All' || selectedType !== 'All' || searchQuery !== '';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedType('All');
  };

  const categoryStats = useMemo(() => {
    return CATEGORIES.map((cat) => ({
      name: cat,
      count:
        cat === 'All'
          ? AI_TOOLS.length
          : AI_TOOLS.filter((t) => t.category === cat).length,
    }));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <StickyBannerDemo />
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {AI_TOOLS.length}+ AI Tools
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover AI Tools
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Search and filter from our curated collection of the best AI tools
              to supercharge your workflow
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar - FIXED PLACEHOLDER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative group">
            <div className="relative flex items-center">
              <Search className="absolute left-5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search tools by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-5 py-4 bg-transparent border-2 border-gray-200 focus:border-primary rounded-2xl outline-none transition-all duration-300 shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Filters Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 flex items-center justify-between flex-wrap gap-4"
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              {showFilters ? 'Hide' : 'Show'} Filters
            </button>

            {hasActiveFilters && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primaryrounded-xl"
                >
                  <X className="w-4 h-4" />
                  Clear All
                </button>
              </motion.div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 mr-2">View:</span>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${
                viewMode === 'grid'
                  ? 'bg-primary text-white'
                  : 'border border-gray-300'
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${
                viewMode === 'list'
                  ? 'bg-primary text-white'
                  : 'border border-gray-300'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Filters Section */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-12 overflow-hidden"
            >
              <div className="bg-transparent border border-gray-200 rounded-2xl p-8 space-y-8">
                {/* Categories Filter */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-semibold text-lg">Categories</h3>
                    <span className="text-xs text-gray-500">
                      (
                      {categoryStats.find((c) => c.name === selectedCategory)
                        ?.count || AI_TOOLS.length}{' '}
                      tools)
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {visibleCategories.map((category) => {
                      const stat = categoryStats.find(
                        (c) => c.name === category
                      );
                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 rounded-full transition-all ${
                            selectedCategory === category
                              ? 'bg-primary text-white shadow-lg'
                              : 'border border-gray-300 hover:border-primary'
                          }`}
                        >
                          {category}
                          <span className="ml-2 text-xs opacity-70">
                            {stat?.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {CATEGORIES.length > 20 && (
                    <div className="mt-4">
                      <button
                        onClick={() =>
                          setShowMoreCategories(!showMoreCategories)
                        }
                        className="text-primary hover:underline"
                      >
                        {showMoreCategories ? 'Show Less' : 'Show More'}
                      </button>
                    </div>
                  )}
                </div>

                {/* Pricing Filter */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Pricing</h3>
                  <div className="flex flex-wrap gap-2">
                    {TYPES.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-4 py-2 rounded-full transition-all ${
                          selectedType === type
                            ? 'bg-primary text-white shadow-lg'
                            : 'border border-gray-300 hover:border-primary'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <TrendingUp className="w-5 h-5 text-primary" />
          <p className="text-sm font-medium">
            Showing{' '}
            <span className="text-primary font-bold">
              {filteredTools.length}
            </span>{' '}
            tool
            {filteredTools.length !== 1 ? 's' : ''}
            {hasActiveFilters && (
              <span className="text-gray-500"> matching your filters</span>
            )}
          </p>
        </motion.div>

        {/* Results */}
        {filteredTools.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
            }
          >
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className=" bg-transparent border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm px-3 py-1 bg-primary text-white rounded-full">
                    {tool.category}
                  </span>
                  <span className="text-sm text-gray-500">{tool.type}</span>
                </div>
                <a
                  href={`/tools/${tool.id}`}
                  className="mt-4 flex items-center gap-2 text-primary hover:text-primary"
                >
                  Visit <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">No tools found</h3>
              <p className="text-gray-600 mb-8">
                We couldn't find any tools matching your criteria. Try adjusting
                your filters or search query.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-3 bg-primary text-white rounded-xl shadow-lg hover:bg-primary flex items-center gap-2 mx-auto"
              >
                <X className="w-4 h-4" />
                Reset All Filters
              </button>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}
