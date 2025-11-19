'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';

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

export default function ContactForm({ className }: { className?: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`${className} relative`}
    >
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent rounded-3xl blur-2xl" />
      <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
          Send a Message
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Fill out the form and we'll respond within 24 hours
        </p>

        <div className="space-y-6">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            {['name', 'email'].map((field) => (
              <div key={field} className="relative">
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  {field === 'name' ? 'Full Name *' : 'Email Address *'}
                </label>
                <div className="relative">
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={
                      field === 'name' ? 'John Doe' : 'john@example.com'
                    }
                    className="w-full px-5 py-4 rounded-2xl bg-background border-2 border-border focus:border-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  />
                  {focusedField === field && (
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
            ))}
          </div>

          {/* Subject */}
          <div className="relative">
            <label className="block text-sm font-semibold mb-2 text-foreground">
              What can we help you with? *
            </label>
            <div className="relative">
              <select
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
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <label className="block text-sm font-semibold mb-2 text-foreground">
              Your Message *
            </label>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows={6}
                placeholder="Tell us more about your inquiry..."
                className="w-full px-5 py-4 rounded-2xl bg-background border-2 border-border focus:border-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
              />
              {focusedField === 'message' && (
                <motion.div
                  layoutId="focus-ring"
                  className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
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
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
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
  );
}
