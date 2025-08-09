'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Globe, RotateCcw, Shield, Rocket, Code } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Zero Config Deploys',
    description: 'Push your code and watch it go live instantly. No configuration files, no setup headaches.',
    side: 'left'
  },
  {
    icon: Globe,
    title: 'Edge-Optimized Hosting',
    description: 'Your apps served from 200+ global edge locations for lightning-fast performance worldwide.',
    side: 'right'
  },
  {
    icon: RotateCcw,
    title: 'One-Click Rollbacks',
    description: 'Made a mistake? Roll back to any previous deployment with a single click. Time travel for your code.',
    side: 'left'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Built-in DDoS protection, SSL certificates, and security headers. Your apps are fortress-level secure.',
    side: 'right'
  },
  {
    icon: Rocket,
    title: 'Instant Scaling',
    description: 'From zero to millions of users without breaking a sweat. Auto-scaling that just works.',
    side: 'left'
  },
  {
    icon: Code,
    title: 'Developer Experience',
    description: 'Intuitive CLI, real-time logs, and debugging tools that make development a joy, not a chore.',
    side: 'right'
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: feature.side === 'left' ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: feature.side === 'left' ? -100 : 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex items-center gap-8 ${feature.side === 'right' ? 'flex-row-reverse' : ''}`}
    >
      {/* Content */}
      <div className={`flex-1 ${feature.side === 'right' ? 'text-right' : ''}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[#00F5D4]/30 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-[#F8F9FA] mb-4">{feature.title}</h3>
          <p className="text-[#F8F9FA]/70 text-lg leading-relaxed">{feature.description}</p>
        </motion.div>
      </div>

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="flex-shrink-0"
      >
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#7F00FF] to-[#00F5D4] flex items-center justify-center glow-violet">
          <Icon className="w-12 h-12 text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-black text-[#F8F9FA] mb-6">
            Why developers{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F00FF] to-[#00F5D4] neon-text">
              love
            </span>{' '}
            NovaHost
          </h2>
          <p className="text-xl text-[#F8F9FA]/70 max-w-3xl mx-auto">
            We've reimagined hosting from the ground up, focusing on what matters most: your developer experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}