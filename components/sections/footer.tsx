'use client';

import { motion } from 'framer-motion';
import { Zap, Github, Twitter, Disc as Discord, Mail } from 'lucide-react';

const links = {
  product: [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' }
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' }
  ],
  resources: [
    { name: 'Community', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Status', href: '#' },
    { name: 'Changelog', href: '#' }
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Cookies', href: '#' }
  ]
};

const socials = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Discord', icon: Discord, href: '#' },
  { name: 'Email', icon: Mail, href: '#' }
];

export function Footer() {
  return (
    <footer className="relative py-20 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-6 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-[#7F00FF] to-[#00F5D4] rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#F8F9FA]">NovaHost</h3>
              </div>
              <p className="text-[#F8F9FA]/60 mb-6 leading-relaxed">
                From local to live in a heartbeat. The developer-first hosting platform that just works.
              </p>
              <div className="flex gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00F5D4]/50 flex items-center justify-center text-[#F8F9FA]/60 hover:text-[#00F5D4] transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(links).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[#F8F9FA] font-semibold mb-4 capitalize">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <motion.a
                        href={item.href}
                        whileHover={{ x: 4 }}
                        className="text-[#F8F9FA]/60 hover:text-[#00F5D4] transition-colors duration-200"
                      >
                        {item.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center pt-12 mt-12 border-t border-white/10"
        >
          <p className="text-[#F8F9FA]/40 text-sm">
            © 2024 NovaHost. All rights reserved.
          </p>
          <p className="text-[#F8F9FA]/40 text-sm mt-4 sm:mt-0">
            Built with ⚡ by developers, for developers
          </p>
        </motion.div>
      </div>
    </footer>
  );
}