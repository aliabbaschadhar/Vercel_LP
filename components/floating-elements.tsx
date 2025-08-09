'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="relative h-96 lg:h-[500px]">
      {/* Main Server Stack */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        <div className="relative">
          {/* Server Blocks */}
          <motion.div
            className="w-16 h-4 bg-gradient-to-r from-[#E879F9] to-[#9333EA] rounded-md mb-2 backdrop-blur-lg border border-white/20"
            animate={{ rotateY: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="w-20 h-4 bg-gradient-to-r from-[#9333EA] to-[#E879F9] rounded-md mb-2 backdrop-blur-lg border border-white/20"
            animate={{ rotateY: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="w-14 h-4 bg-gradient-to-r from-[#E879F9] to-[#9333EA] rounded-md backdrop-blur-lg border border-white/20"
            animate={{ rotateY: [0, 3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-br from-[#E879F9]/80 to-[#9333EA]/80 rounded-full backdrop-blur-lg border border-white/30"
        animate={{
          y: [0, -20, 0],
          x: mousePosition.x * 0.01,
          rotate: 360,
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-gradient-to-br from-[#9333EA]/60 to-[#E879F9]/60 rounded-full backdrop-blur-lg border border-white/20"
        animate={{
          y: [0, 15, 0],
          x: mousePosition.y * 0.008,
          rotate: -360,
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          d="M 50 100 Q 200 50 350 150"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E879F9" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9333EA" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}