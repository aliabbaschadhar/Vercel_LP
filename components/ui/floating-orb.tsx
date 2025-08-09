'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function FloatingOrb() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="relative w-96 h-96">
      {/* Main Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
          rotateY: mousePosition.x * 0.1,
          rotateX: -mousePosition.y * 0.1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        <div className="relative w-48 h-48">
          {/* Core Sphere */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7F00FF]/30 to-[#00F5D4]/30 backdrop-blur-lg border border-white/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Inner Glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#7F00FF]/50 to-[#00F5D4]/50 blur-xl" />
          </motion.div>

          {/* Orbiting Elements */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#00F5D4] rounded-full glow-aqua" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-[#7F00FF] rounded-full glow-violet" />
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#F8F9FA] rounded-full" />
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#00F5D4] rounded-full" />
          </motion.div>

          {/* Data Streams */}
          <svg className="absolute inset-0 w-full h-full">
            <motion.circle
              cx="50%"
              cy="50%"
              r="80"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, rotate: 360 }}
              transition={{ 
                pathLength: { duration: 2, ease: "easeInOut" },
                rotate: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="60"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="1"
              strokeDasharray="2,6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, rotate: -360 }}
              transition={{ 
                pathLength: { duration: 2, delay: 0.5, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "linear" }
              }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7F00FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00F5D4" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7F00FF" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#00F5D4] rounded-full"
          style={{
            top: `${20 + i * 10}%`,
            left: `${15 + i * 12}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}