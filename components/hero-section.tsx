'use client';

import { motion } from 'framer-motion';
import { AnimatedBackground } from './animated-background';
import { FloatingElements } from './floating-elements';
import { ScrollIndicator } from './scroll-indicator';
import { HeroCTA } from './hero-cta';

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#2E026D] via-[#9333EA] to-[#2E026D]">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Brand Name */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <h1 className="text-2xl lg:text-3xl font-bold text-[#E879F9] mb-2">
                  NovaHost
                </h1>
              </motion.div>

              {/* Main Headline - Staggered Layout */}
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl lg:text-6xl xl:text-7xl font-black text-[#F9FAFB] leading-tight"
                >
                  From local
                </motion.h2>
                
                <motion.h2
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-4xl lg:text-6xl xl:text-7xl font-black text-[#F9FAFB] leading-tight ml-8 lg:ml-16"
                >
                  to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E879F9] to-[#9333EA]">live</span>
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-1 bg-gradient-to-r from-[#E879F9] to-[#9333EA] rounded-full"></div>
                  <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black text-[#F9FAFB] leading-tight">
                    in a <span className="italic text-[#E879F9]">heartbeat</span>
                  </h2>
                </motion.div>
              </div>

              {/* Subheadline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20"
              >
                <p className="text-lg lg:text-xl text-[#F9FAFB]/90 leading-relaxed max-w-xl">
                  Spin up, scale, and ship — without touching a server. NovaHost empowers developers to deploy anywhere, instantly, with zero configuration.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <HeroCTA />
              </motion.div>
            </div>

            {/* Right Side - Floating Elements */}
            <div className="relative">
              <FloatingElements />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}