'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <motion.div
        className="flex flex-col items-center gap-2 cursor-pointer group"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[#F9FAFB]/70 text-sm font-medium group-hover:text-[#E879F9] transition-colors duration-200">
          Scroll to explore
        </span>
        <div className="p-2 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
          <ChevronDown className="w-5 h-5 text-[#F9FAFB]/70 group-hover:text-[#E879F9] transition-colors duration-200" />
        </div>
      </motion.div>
    </motion.div>
  );
}