'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const commands = [
  'bun create nova-app my-project',
  'cd my-project',
  'bun run dev',
  'nova deploy'
];

export function InteractiveDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentStep, setCurrentStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(commands.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-[#7F00FF]/10 to-[#00F5D4]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
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
            Deploy in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] to-[#7F00FF] neon-text">
              4 commands
            </span>
          </h2>
          <p className="text-xl text-[#F8F9FA]/70 max-w-2xl mx-auto">
            From idea to production in under 60 seconds. No complex configurations, no deployment pipelines.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Terminal Window */}
            <div className="backdrop-blur-lg bg-black/40 rounded-2xl border border-white/20 overflow-hidden glow-violet">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-2 text-[#F8F9FA]/60">
                    <Terminal className="w-4 h-4" />
                    <span className="text-sm font-mono">nova-terminal</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="text-[#F8F9FA]/60 hover:text-[#00F5D4] transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                {commands.map((command, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.3 }}
                    className={`mb-4 cursor-pointer transition-all duration-300 ${
                      currentStep === index ? 'text-[#00F5D4]' : 'text-[#F8F9FA]/70 hover:text-[#F8F9FA]'
                    }`}
                    onClick={() => handleStepClick(index)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#7F00FF]">$</span>
                      <span>{command}</span>
                      {currentStep === index && (
                        <motion.div
                          className="w-2 h-5 bg-[#00F5D4]"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </div>
                    
                    {/* Command Output */}
                    {currentStep >= index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="mt-2 text-[#F8F9FA]/50 text-xs"
                      >
                        {index === 0 && '✓ Project created successfully'}
                        {index === 1 && '✓ Changed directory'}
                        {index === 2 && '✓ Development server started on http://localhost:3000'}
                        {index === 3 && '✓ Deployed to https://my-project.nova.app'}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-[#00F5D4] rounded-full glow-aqua"
              animate={{
                y: [0, -10, 0],
                rotate: 360,
              }}
              transition={{
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#7F00FF] rounded-full glow-violet"
              animate={{
                y: [0, 10, 0],
                rotate: -360,
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}