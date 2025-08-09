'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Primary CTA */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <Button
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-[#E879F9] to-[#9333EA] hover:from-[#9333EA] hover:to-[#E879F9] text-white font-semibold px-8 py-6 text-lg rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            Deploy Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </span>
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Button>
      </motion.div>

      {/* Secondary CTA */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <Button
          variant="ghost"
          size="lg"
          className="group backdrop-blur-lg bg-white/10 hover:bg-white/20 text-[#F9FAFB] font-semibold px-8 py-6 text-lg rounded-2xl border border-white/30 hover:border-white/50 transition-all duration-300"
        >
          <span className="flex items-center gap-2">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            Learn More
          </span>
        </Button>
      </motion.div>
    </div>
  );
}