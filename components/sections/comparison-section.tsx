'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X, Zap } from 'lucide-react';

const features = [
  'Zero Configuration',
  'Instant Deployments',
  'Global Edge Network',
  'One-Click Rollbacks',
  'Real-time Analytics',
  'Custom Domains',
  'Team Collaboration',
  'API-First Design'
];

const providers = [
  {
    name: 'NovaHost',
    logo: '⚡',
    color: 'from-[#7F00FF] to-[#00F5D4]',
    features: [true, true, true, true, true, true, true, true]
  },
  {
    name: 'Vercel',
    logo: '▲',
    color: 'from-gray-600 to-gray-400',
    features: [false, true, true, false, true, true, true, false]
  },
  {
    name: 'Netlify',
    logo: '◆',
    color: 'from-gray-600 to-gray-400',
    features: [false, true, true, true, false, true, true, false]
  },
  {
    name: 'Railway',
    logo: '🚂',
    color: 'from-gray-600 to-gray-400',
    features: [false, false, false, false, true, true, false, true]
  }
];

export function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black text-[#F8F9FA] mb-6">
            Why choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F00FF] to-[#00F5D4] neon-text">
              NovaHost
            </span>
            ?
          </h2>
          <p className="text-xl text-[#F8F9FA]/70 max-w-2xl mx-auto">
            See how we stack up against the competition. Spoiler alert: we're pretty awesome.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 p-6 border-b border-white/10">
              <div className="text-[#F8F9FA] font-semibold">Features</div>
              {providers.map((provider, index) => (
                <motion.div
                  key={provider.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${provider.color} text-white font-semibold`}>
                    <span className="text-lg">{provider.logo}</span>
                    <span>{provider.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Rows */}
            {features.map((feature, featureIndex) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.1 * featureIndex }}
                className="grid grid-cols-5 gap-4 p-6 border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
              >
                <div className="text-[#F8F9FA]/80 font-medium">{feature}</div>
                {providers.map((provider, providerIndex) => (
                  <div key={provider.name} className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full"
                    >
                      {provider.features[featureIndex] ? (
                        <Check className={`w-5 h-5 ${providerIndex === 0 ? 'text-[#00F5D4]' : 'text-green-500'}`} />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            ))}

            {/* Footer CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="p-8 text-center bg-gradient-to-r from-[#7F00FF]/10 to-[#00F5D4]/10"
            >
              <p className="text-[#F8F9FA]/80 mb-4">
                Ready to experience the difference?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7F00FF] to-[#00F5D4] text-white font-semibold rounded-xl glow-violet hover:glow-aqua transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                Start Building
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}