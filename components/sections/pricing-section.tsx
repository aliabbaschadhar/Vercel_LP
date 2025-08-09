'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Rocket, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: 0,
    period: 'forever',
    description: 'Perfect for side projects and learning',
    features: [
      '3 projects',
      '100GB bandwidth',
      'Community support',
      'Basic analytics',
      'SSL certificates'
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Pro',
    icon: Rocket,
    price: 20,
    period: 'month',
    description: 'For serious developers and small teams',
    features: [
      'Unlimited projects',
      '1TB bandwidth',
      'Priority support',
      'Advanced analytics',
      'Custom domains',
      'Team collaboration',
      'One-click rollbacks'
    ],
    cta: 'Start Pro',
    popular: true
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 99,
    period: 'month',
    description: 'For large teams and organizations',
    features: [
      'Everything in Pro',
      'Unlimited bandwidth',
      'Dedicated support',
      'SLA guarantee',
      'Advanced security',
      'Custom integrations',
      'White-label options'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

function PricingCard({ plan, index }: { plan: typeof plans[0], index: number }) {
  const Icon = plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`relative backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
        plan.popular
          ? 'bg-gradient-to-br from-[#7F00FF]/10 to-[#00F5D4]/10 border-[#00F5D4]/50 glow-aqua'
          : 'bg-white/5 border-white/10 hover:border-[#7F00FF]/30'
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-[#7F00FF] to-[#00F5D4] text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
          plan.popular
            ? 'bg-gradient-to-br from-[#7F00FF] to-[#00F5D4] glow-violet'
            : 'bg-gradient-to-br from-[#7F00FF]/20 to-[#00F5D4]/20'
        }`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-[#F8F9FA] mb-2">{plan.name}</h3>
        <p className="text-[#F8F9FA]/60">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-black text-[#F8F9FA]">${plan.price}</span>
          <span className="text-[#F8F9FA]/60">/{plan.period}</span>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {plan.features.map((feature, featureIndex) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * featureIndex }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <Check className="w-5 h-5 text-[#00F5D4] flex-shrink-0" />
            <span className="text-[#F8F9FA]/80">{feature}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          className={`w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 ${
            plan.popular
              ? 'bg-gradient-to-r from-[#7F00FF] to-[#00F5D4] hover:from-[#00F5D4] hover:to-[#7F00FF] text-white glow-violet hover:glow-aqua'
              : 'bg-white/10 hover:bg-white/20 text-[#F8F9FA] border border-white/20 hover:border-[#00F5D4]/50'
          }`}
        >
          {plan.cta}
        </Button>
      </motion.div>
    </motion.div>
  );
}

export function PricingSection() {
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
            Simple{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F00FF] to-[#00F5D4] neon-text">
              pricing
            </span>
          </h2>
          <p className="text-xl text-[#F8F9FA]/70 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-[#F8F9FA]/60 mb-4">
            Need something custom? We've got you covered.
          </p>
          <Button
            variant="ghost"
            className="text-[#00F5D4] hover:text-[#7F00FF] hover:bg-white/5 transition-colors"
          >
            Talk to our team →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}