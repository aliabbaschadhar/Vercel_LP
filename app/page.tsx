'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { InteractiveDemo } from '@/components/sections/interactive-demo';
import { ComparisonSection } from '@/components/sections/comparison-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <InteractiveDemo />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </main>
  );
}