'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function FloatingOrb() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  if (!isClient) {
    return (
      <div className="relative w-96 h-96 flex items-center justify-center">
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#7F00FF]/20 to-[#00F5D4]/20 blur-xl" />
      </div>
    );
  }

  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Main Orb */}
      <motion.div
        className="relative w-64 h-64"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
          rotateX: mousePosition.y * 10,
          rotateY: mousePosition.x * 10,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Core Sphere */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7F00FF] via-[#9333EA] to-[#00F5D4] opacity-80"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          style={{
            boxShadow: '0 0 60px rgba(127, 0, 255, 0.4), inset 0 0 60px rgba(0, 245, 212, 0.2)',
          }}
        />

        {/* Inner Glow */}
        <motion.div
          className="absolute inset-4 rounded-full bg-gradient-to-br from-[#00F5D4]/60 to-[#7F00FF]/60 blur-sm"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Outer Ring */}
        <motion.div
          className="absolute -inset-8 rounded-full border-2 border-[#00F5D4]/30"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00F5D4] rounded-full"
            style={{
              left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
              top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7F00FF]/10 to-[#00F5D4]/10 blur-3xl scale-150" />
    </div>
  );
}