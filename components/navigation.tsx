'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Zap,
  DollarSign,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    {
      href: '/tools',
      label: 'Tools',
      hasDropdown: true,
      dropdown: [
        {
          href: '/tools',
          label: 'All Tools',
          icon: Sparkles,
          description: 'Browse entire collection',
        },
        {
          href: '/free',
          label: 'Free Tools',
          icon: Zap,
          description: 'No cost, full access',
        },
        {
          href: '/paid',
          label: 'Paid Tools',
          icon: DollarSign,
          description: 'Premium solutions',
        },
        {
          href: '/trial',
          label: 'Free Trials',
          icon: Clock,
          description: 'Try before you buy',
        },
      ],
    },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border'
            : 'bg-background/80 backdrop-blur-md border-b border-border/50'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors">
                  <Image
                    src="/Logo.png"
                    width={48}
                    height={48}
                    alt="AIFinder Logo"
                    className="object-contain"
                  />
                </div>
              </motion.div>
              <div className="hidden sm:block">
                <motion.span
                  className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                  style={{ backgroundSize: '200% 100%' }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  AIFinder
                </motion.span>
                <div className="text-xs text-muted-foreground -mt-1">
                  Discover AI Tools
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() =>
                    link.hasDropdown && setActiveDropdown(null)
                  }
                >
                  {link.hasDropdown ? (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                          isActive(link.href)
                            ? 'bg-primary/10 text-primary shadow-sm'
                            : 'hover:bg-accent/10 hover:text-primary'
                        }`}
                      >
                        {link.label}
                        <motion.div
                          animate={{
                            rotate: activeDropdown === link.label ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </motion.button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === link.label && link.dropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{
                              duration: 0.2,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="absolute top-full left-0 mt-2 w-72 bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden"
                          >
                            <div className="p-2">
                              {link.dropdown.map((item, i) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={`group flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 transition-all ${
                                    isActive(item.href) ? 'bg-primary/5' : ''
                                  }`}
                                >
                                  <div
                                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                                      i === 0
                                        ? 'from-primary to-primary/80'
                                        : i === 1
                                        ? 'from-accent to-accent/80'
                                        : i === 2
                                        ? 'from-secondary to-secondary/80'
                                        : 'from-primary/60 to-accent/60'
                                    } flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                                  >
                                    <item.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors">
                                      {item.label}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                      {item.description}
                                    </div>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={link.href}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                          isActive(link.href)
                            ? 'bg-primary/10 text-primary shadow-sm'
                            : 'hover:bg-accent/10 hover:text-primary'
                        }`}
                      >
                        {link.label}
                      </motion.div>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* CTA Button */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="hidden md:block"
              >
                <Link href="/tools">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-6 py-2.5 rounded-xl font-bold text-sm text-primary-foreground overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-all duration-500" />
                    <span className="relative flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Explore Tools
                    </span>
                  </motion.button>
                </Link>
              </motion.div> */}

              <ThemeToggle />

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl hover:bg-accent/10 transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden border-t border-border bg-background/98 backdrop-blur-xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.hasDropdown && link.dropdown ? (
                      <div className="space-y-2">
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === link.label ? null : link.label
                            )
                          }
                          className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                            isActive(link.href)
                              ? 'bg-primary/10 text-primary'
                              : 'hover:bg-accent/10'
                          }`}
                        >
                          <span>{link.label}</span>
                          <motion.div
                            animate={{
                              rotate: activeDropdown === link.label ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 space-y-1 overflow-hidden"
                            >
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                                    isActive(item.href)
                                      ? 'bg-primary/5 text-primary'
                                      : 'hover:bg-accent/5'
                                  }`}
                                >
                                  <item.icon className="w-4 h-4" />
                                  <div>
                                    <div className="text-sm font-medium">
                                      {item.label}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                      {item.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                          isActive(link.href)
                            ? 'bg-primary/10 text-primary'
                            : 'hover:bg-accent/10'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="pt-4"
                >
                  {/* <Link href="/tools">
                    <button className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20">
                      <Sparkles className="w-5 h-5" />
                      Explore AI Tools
                    </button>
                  </Link> */}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}
