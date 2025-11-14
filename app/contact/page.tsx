'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useTheme } from 'next-themes';
import React, { useState, useRef } from 'react';
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Github,
  Twitter,
  Linkedin,
  Clock,
  Globe,
  Zap,
  Heart,
  Users,
  ArrowRight,
  Star,
} from 'lucide-react';

export default function ContactPage() {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      subtitle: 'Drop us a line anytime',
      content: 'support@aifinder.com',
      action: 'Send Email',
      gradient: 'from-primary via-primary/80 to-primary/60',
      iconColor: 'text-primary',
      delay: 0,
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      subtitle: 'Chat with our team',
      content: 'Available 24/7',
      action: 'Start Chat',
      gradient: 'from-accent via-accent/80 to-accent/60',
      iconColor: 'text-accent',
      delay: 0.1,
    },
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: 'Mon-Fri 9AM-6PM EST',
      content: '+1 (555) 123-4567',
      action: 'Call Now',
      gradient: 'from-secondary via-secondary/80 to-secondary/60',
      iconColor: 'text-secondary',
      delay: 0.2,
    },
    {
      icon: MapPin,
      title: 'Visit Office',
      subtitle: 'Come say hello',
      content: 'San Francisco, CA',
      action: 'Get Directions',
      gradient: 'from-primary/80 via-accent/80 to-secondary/80',
      iconColor: 'text-primary',
      delay: 0.3,
    },
  ];

  const reasons = [
    { icon: Zap, text: 'Tool Submission', color: 'text-yellow-500' },
    { icon: Heart, text: 'Partnership', color: 'text-red-500' },
    { icon: Users, text: 'General Inquiry', color: 'text-blue-500' },
    { icon: Star, text: 'Feedback', color: 'text-purple-500' },
  ];

  const subjects = [
    'General Inquiry',
    'Tool Submission',
    'Partnership Opportunity',
    'Technical Support',
    'Feedback & Suggestions',
    'Report an Issue',
    'Press & Media',
    'Other',
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground overflow-hidden"
    >
      <Navigation />

      {/* Hero Section with Advanced Animations */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-none">
                Let's Build
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                    Together
                  </span>
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Have a question, feedback, or want to collaborate?
              <br className="hidden md:block" />
              Our team is here to help you succeed with AI.
            </motion.p>

            {/* Quick Reasons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mt-10"
            >
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <reason.icon className={`w-4 h-4 ${reason.color}`} />
                  <span className="text-sm font-medium">{reason.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Enhanced Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactMethods.map((method, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500`}
              />
              <div className="relative h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all backdrop-blur-sm">
                <div className="flex flex-col h-full">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {method.subtitle}
                  </p>
                  <p className="text-foreground font-semibold mb-6 flex-grow">
                    {method.content}
                  </p>
                  <button className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    {method.action}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Main Form Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <div className="mb-10">
                <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                  Send a Message
                </h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form and we'll respond within 24 hours
                </p>
              </div>

              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2 text-foreground"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-5 py-4 rounded-2xl bg-background border-2 border-border focus:border-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                        placeholder="John Doe"
                      />
                      {focusedField === 'name' && (
                        <motion.div
                          layoutId="focus-ring"
                          className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
                          transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2 text-foreground"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-5 py-4 rounded-2xl bg-background border-2 border-border focus:border-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                        placeholder="john@example.com"
                      />
                      {focusedField === 'email' && (
                        <motion.div
                          layoutId="focus-ring"
                          className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
                          transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    What can we help you with? *
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-5 py-4 rounded-2xl bg-background border-2 border-border focus:border-primary outline-none transition-all text-foreground appearance-none cursor-pointer"
                    >
                      <option value="">Choose a topic</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                    {focusedField === 'subject' && (
                      <motion.div
                        layoutId="focus-ring"
                        className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    Your Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={6}
                      className="w-full px-5 py-4 rounded-2xl bg-background border-2 border-border focus:border-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                      placeholder="Tell us more about your inquiry..."
                    />
                    {focusedField === 'message' && (
                      <motion.div
                        layoutId="focus-ring"
                        className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative w-full px-8 py-5 rounded-2xl font-bold text-lg text-primary-foreground transition-all overflow-hidden group ${
                    isSubmitted ? 'bg-green-600' : ''
                  }`}
                >
                  {!isSubmitted && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary group-hover:scale-105 transition-transform" />
                  )}
                  <span className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                        />
                        Sending Message...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-6 h-6" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </motion.button>

                <p className="text-center text-sm text-muted-foreground">
                  By submitting this form, you agree to our privacy policy
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sidebar - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Why Contact Us */}
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-transparent border border-primary/20 rounded-3xl p-8">
              <Sparkles className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Why Reach Out?</h3>
              <ul className="space-y-4">
                {[
                  'Submit your AI tool for listing',
                  'Partnership opportunities',
                  'Technical support & guidance',
                  'Feedback and suggestions',
                  'Press and media inquiries',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-card border border-border rounded-3xl p-8">
              <Clock className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-2xl bg-background">
                  <span className="font-medium">Email</span>
                  <span className="text-primary font-bold">24 hours</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-2xl bg-background">
                  <span className="font-medium">Live Chat</span>
                  <span className="text-accent font-bold">Instant</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-2xl bg-background">
                  <span className="font-medium">Phone</span>
                  <span className="text-secondary font-bold">Same day</span>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="bg-card border border-border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Twitter,
                    label: 'Twitter',
                    color:
                      'hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]/50 hover:text-[#1DA1F2]',
                  },
                  {
                    icon: Github,
                    label: 'GitHub',
                    color: 'hover:bg-foreground/10 hover:border-foreground/50',
                  },
                  {
                    icon: Linkedin,
                    label: 'LinkedIn',
                    color:
                      'hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/50 hover:text-[#0A66C2]',
                  },
                  {
                    icon: Globe,
                    label: 'Website',
                    color:
                      'hover:bg-primary/10 hover:border-primary/50 hover:text-primary',
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-border transition-all ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
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
              Join thousands of creators, developers, and AI enthusiasts
              building the future with AIFinder
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all"
              >
                Explore AI Tools
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-card border-2 border-border hover:border-primary/50 font-bold text-lg transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
