'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Support',
    subtitle: 'Drop us a line anytime',
    content: 'ahmed.msalaa@gmail.com',
    action: 'Send Email',
    gradient: 'from-primary via-primary/80 to-primary/60',
    link: 'mailto:ahmed.msalaa@gmail.com',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    subtitle: 'Chat with our team',
    content: 'Available 24/7',
    action: 'Start Chat',
    gradient: 'from-accent via-accent/80 to-accent/60',
    link: 'https://wa.me/201212534375',
  },
];

export default function ContactMethodsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <motion.div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {contactMethods.map((method, i) => (
          <motion.div key={i} className="group relative">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500`}
            />
            <div className="relative h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all backdrop-blur-sm flex flex-col">
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
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all"
              >
                {method.action} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
