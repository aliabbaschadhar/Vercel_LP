'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Twitter } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    handle: '@sarahbuilds',
    role: 'Senior Frontend Developer',
    company: 'TechCorp',
    content: 'NovaHost changed how I deploy. From git push to live site in 30 seconds. This is the future.',
    avatar: '👩‍💻',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    handle: '@marcusdev',
    role: 'Full Stack Engineer',
    company: 'StartupXYZ',
    content: 'Zero config deploys that actually work. I can focus on building instead of fighting deployment pipelines.',
    avatar: '👨‍💻',
    rating: 5
  },
  {
    name: 'Alex Kim',
    handle: '@alexcodes',
    role: 'DevOps Engineer',
    company: 'ScaleUp Inc',
    content: 'The edge performance is incredible. Our users in Asia see 80% faster load times since switching.',
    avatar: '🧑‍💻',
    rating: 5
  },
  {
    name: 'Emma Thompson',
    handle: '@emmabuild',
    role: 'Product Engineer',
    company: 'InnovateLab',
    content: 'One-click rollbacks saved our production deploy. NovaHost has our back when things go wrong.',
    avatar: '👩‍🔬',
    rating: 5
  },
  {
    name: 'David Park',
    handle: '@davidships',
    role: 'Lead Developer',
    company: 'WebStudio',
    content: 'The developer experience is unmatched. Clean CLI, great docs, and it just works every time.',
    avatar: '👨‍🎨',
    rating: 5
  },
  {
    name: 'Lisa Wang',
    handle: '@lisacodes',
    role: 'Software Architect',
    company: 'CloudNative Co',
    content: 'Migrated 20+ projects to NovaHost. The team loves the simplicity and reliability.',
    avatar: '👩‍🏫',
    rating: 5
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="flex-shrink-0 w-80 backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#00F5D4]/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7F00FF] to-[#00F5D4] flex items-center justify-center text-xl">
            {testimonial.avatar}
          </div>
          <div>
            <h4 className="text-[#F8F9FA] font-semibold">{testimonial.name}</h4>
            <p className="text-[#00F5D4] text-sm">{testimonial.handle}</p>
          </div>
        </div>
        <Twitter className="w-5 h-5 text-[#F8F9FA]/40" />
      </div>

      {/* Content */}
      <p className="text-[#F8F9FA]/80 mb-4 leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[#F8F9FA]/60 text-sm">{testimonial.role}</p>
          <p className="text-[#F8F9FA]/40 text-sm">{testimonial.company}</p>
        </div>
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-[#00F5D4] fill-current" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-[#00F5D4]/10 to-[#7F00FF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black text-[#F8F9FA] mb-6">
            Developers{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7F00FF] neon-text">
              love
            </span>{' '}
            NovaHost
          </h2>
          <p className="text-xl text-[#F8F9FA]/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what the developer community is saying.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.handle} testimonial={testimonial} index={index} />
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0D0D0D] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0D0D0D] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}