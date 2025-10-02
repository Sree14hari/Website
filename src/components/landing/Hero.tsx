"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';


const PhoneBubble = () => (
    <motion.div
      className="hidden md:block absolute top-[-30%] left-[-15%] w-32 h-32 md:top-[-80%] md:left-[2%] md:w-64 md:h-64 z-10 transform -rotate-12"
      initial={{ opacity: 0, x: -100, rotate: -20 }}
      animate={{ opacity: 1, x: 0, rotate: -12 }}
      exit={{ opacity: 0, x: -100, rotate: -20, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
        <Image
            src="/images/phone.png"
            alt="Speaking phone"
            fill
            style={{ objectFit: 'contain' }}
        />
    </motion.div>
);
const LaptopIM = () => (
  <motion.div
    className="hidden md:block absolute bottom-[-15%] left-[5%] w-32 h-32 md:top-[80%] md:left-[2%] md:w-64 md:h-64 z-10 transform -rotate-12"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 100, transition: { duration: 0.3 } }}
    transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Image
          src="/images/laptop.png"
          alt="Laptop"
          fill
          style={{ objectFit: 'contain' }}
      />
  </motion.div>
);
const Gramo = () => (
  <motion.div
    className="hidden md:block absolute bottom-[-10%] right-[-5%] w-32 h-32 md:top-[80%] md:right-[-4%] md:w-80 md:h-80 z-10 transform -rotate-12"
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100, transition: { duration: 0.3 } }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
      <Image
          src="/images/gramo.png"
          alt="Gramophone"
          fill
          style={{ objectFit: 'contain' }}
      />
  </motion.div>
);



export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      id="home"
      className="relative text-center !py-24 md:!py-32 min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container relative z-10 flex flex-col items-center">
        
        <AnimatePresence>
          {isHovered && (
            <>
              <PhoneBubble />
              <LaptopIM />
              <Gramo />
            </>
          )}
        </AnimatePresence>

        <motion.div
          className="relative inline-block z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-[400px] h-[150px] md:w-[800px] md:h-[253px]">
            <Image
              src="/images/tinker.png"
              alt="TinkerHub SBCE"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
