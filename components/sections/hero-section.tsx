'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { FloatingOrb } from '@/components/ui/floating-orb';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#7F00FF]/20 to-[#00F5D4]/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#00F5D4]/10 to-[#7F00FF]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-[#7F00FF] to-[#00F5D4] rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-[#F8F9FA]">NovaHost</h1>
              </div>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-black text-[#F8F9FA] leading-tight"
              >
                From{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F00FF] to-[#00F5D4] neon-text">
                  local
                </span>
              </motion.h2>
              
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl lg:text-7xl font-black text-[#F8F9FA] leading-tight ml-8 lg:ml-16"
              >
                to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7F00FF] neon-text">
                  live
                </span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center gap-4"
              >
                <div className="w-16 h-1 bg-gradient-to-r from-[#7F00FF] to-[#00F5D4] rounded-full"></div>
                <h2 className="text-5xl lg:text-7xl font-black text-[#F8F9FA] leading-tight">
                  in a <span className="italic text-[#00F5D4]">heartbeat</span>
                </h2>
              </motion.div>
            </div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <p className="text-lg lg:text-xl text-[#F8F9FA]/80 leading-relaxed max-w-xl">
                Deploy anywhere, instantly, with zero configuration. NovaHost empowers developers to ship faster than ever before.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-[#7F00FF] to-[#00F5D4] hover:from-[#00F5D4] hover:to-[#7F00FF] text-white font-semibold px-8 py-6 text-lg rounded-2xl border-0 glow-violet hover:glow-aqua transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Deploy Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className="backdrop-blur-lg bg-white/5 hover:bg-white/10 text-[#F8F9FA] font-semibold px-8 py-6 text-lg rounded-2xl border border-white/20 hover:border-[#00F5D4]/50 transition-all duration-300"
                >
                  View Docs
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - 3D Element */}
          <div className="relative flex justify-center">
            <FloatingOrb />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
          <span className="text-[#F8F9FA]/60 text-sm font-medium group-hover:text-[#00F5D4] transition-colors duration-200">
            Explore features
          </span>
          <div className="w-6 h-10 border-2 border-[#F8F9FA]/30 rounded-full flex justify-center group-hover:border-[#00F5D4]/50 transition-colors duration-200">
            <motion.div
              className="w-1 h-3 bg-[#00F5D4] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}