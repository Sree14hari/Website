"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const MissionIcon = () => (
    <Image 
        src="/logos/dart.png" 
        alt="Mission Icon" 
        width={80} 
        height={80} 
        className="w-16 h-16 md:w-20 md:h-20"
    />
);

const VisionIcon = () => (
    <Image 
        src="/logos/eye.png" 
        alt="Vision Icon" 
        width={80} 
        height={80} 
        className="w-16 h-16 md:w-20 md:h-20"
    />
);

export default function MissionVision() {
  return (
    <motion.section 
      id="mission-vision"
      className="relative !py-12 md:!py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 md:gap-12 items-start max-w-5xl mx-auto">
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col items-center gap-4 mb-6 md:flex-row">
              <MissionIcon />
              <h2 className="font-['Special_Elite'] text-4xl md:text-5xl font-bold tracking-wider">MISSION</h2>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              By 2025, cultivate a thriving maker culture in Kerala to ignite creativity and equip 10,000 young makers with the skills to innovate and shape the future.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative flex flex-col items-center text-center md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            >
            <div className="absolute left-0 top-0 bottom-0 w-px bg-foreground/20 hidden md:block"></div>
            <div className="flex flex-col items-center gap-4 mb-6 md:flex-row">
              <VisionIcon />
              <h2 className="font-['Special_Elite'] text-4xl md:text-5xl font-bold tracking-wider">VISION</h2>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Everyone has access to the knowledge required to set the course for a better future
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
