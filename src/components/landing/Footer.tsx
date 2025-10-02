"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Tinkerhub-SBCE' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/tinkerhub-sbce/', icon: Linkedin },
];


export default function Footer() {
  return (
    <motion.footer 
      className="w-full bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0 }}
    >
      <div className="container py-8 text-center">
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map((social) => (
            <motion.div
              key={social.name}
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <social.icon className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="w-24 h-px bg-white/20 mx-auto mb-4"></div>
        <p className="font-['Rock_Salt'] text-sm text-white/70 hidden md:block">
            made using loads of coffeee...
        </p>
      </div>
    </motion.footer>
  );
}
