'use client';

import { useState, useMemo } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ToolCard } from '@/components/tool-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_TOOLS } from '@/lib/ai-tools';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Sparkles,
  Filter,
  X,
  Grid3x3,
  List,
  TrendingUp,
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'Text Generation',
  'Image Generation',
  'Productivity',
  'Code Generation',
  'Video Generation',
  'Video Editing',
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
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Hero Section with Gradient */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background pointer-events-none" />
        <div
          className="absolute inset-0 bg-grid-white/5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

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
                200+ AI Tools
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Discover AI Tools
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Search and filter from our curated collection of the best AI tools
              to supercharge your workflow
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {AI_TOOLS.length}+
                </div>
                <div className="text-sm text-muted-foreground">AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {CATEGORIES.length - 1}
                </div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  Daily
                </div>
                <div className="text-sm text-muted-foreground">Updates</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for AI tools, features, or use cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 h-14 text-lg rounded-2xl border-2 focus:border-primary bg-card shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 flex items-center justify-between flex-wrap gap-4"
        >
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="rounded-xl"
            >
              <Filter className="w-4 h-4 mr-2" />
              {showFilters ? 'Hide' : 'Show'} Filters
            </Button>

            {hasActiveFilters && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <Button
                  variant="ghost"
                  onClick={resetFilters}
                  className="rounded-xl text-primary hover:text-primary hover:bg-primary/10"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear All
                </Button>
              </motion.div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground mr-2">View:</span>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-lg"
            >
              <Grid3x3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="rounded-lg"
            >
              <List className="w-4 h-4" />
            </Button>
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
              <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
                {/* Category Filter */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-semibold text-lg">Categories</h3>
                    <span className="text-xs text-muted-foreground">
                      (
                      {categoryStats.find((c) => c.name === selectedCategory)
                        ?.count || AI_TOOLS.length}{' '}
                      tools)
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((category) => {
                      const stat = categoryStats.find(
                        (c) => c.name === category
                      );
                      return (
                        <motion.div
                          key={category}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant={
                              selectedCategory === category
                                ? 'default'
                                : 'outline'
                            }
                            onClick={() => setSelectedCategory(category)}
                            className={`rounded-full ${
                              selectedCategory === category
                                ? 'shadow-lg shadow-primary/25'
                                : ''
                            }`}
                          >
                            {category}
                            <span
                              className={`ml-2 text-xs ${
                                selectedCategory === category
                                  ? 'opacity-80'
                                  : 'opacity-50'
                              }`}
                            >
                              {stat?.count}
                            </span>
                          </Button>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Type Filter */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Pricing</h3>
                  <div className="flex flex-wrap gap-2">
                    {TYPES.map((type) => (
                      <motion.div
                        key={type}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant={
                            selectedType === type ? 'default' : 'outline'
                          }
                          onClick={() => setSelectedType(type)}
                          className={`rounded-full ${
                            selectedType === type
                              ? 'shadow-lg shadow-primary/25'
                              : ''
                          }`}
                        >
                          {type}
                        </Button>
                      </motion.div>
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
          transition={{ delay: 0.4 }}
          className="flex items-center justify-between mb-6"
        >
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-primary" />
            <p className="text-sm font-medium">
              Showing{' '}
              <span className="text-primary font-bold">
                {filteredTools.length}
              </span>{' '}
              tool{filteredTools.length !== 1 ? 's' : ''}
              {hasActiveFilters && (
                <span className="text-muted-foreground">
                  {' '}
                  matching your filters
                </span>
              )}
            </p>
          </div>
        </motion.div>

        {/* Results Grid/List */}
        {filteredTools.length > 0 ? (
          <motion.div
            layout
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
                : 'space-y-4'
            }
          >
            <AnimatePresence mode="popLayout">
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                >
                  <ToolCard tool={tool} index={index} viewMode={viewMode} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">No tools found</h3>
              <p className="text-muted-foreground mb-8">
                We couldn't find any tools matching your criteria. Try adjusting
                your filters or search query.
              </p>
              <Button
                onClick={resetFilters}
                size="lg"
                className="rounded-xl shadow-lg shadow-primary/25"
              >
                <X className="w-4 h-4 mr-2" />
                Reset All Filters
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
