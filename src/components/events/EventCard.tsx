"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Event } from './EventsGrid';

const BoardPin = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
    <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-red-700 shadow-md"></div>
  </div>
);

export default function EventCard({ event, index }: { event: Event, index: number }) {
  const rotation = index % 2 === 0 ? -2 : 2;
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50, rotate: rotation + 10 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative bg-white p-3 shadow-md border-t-2 border-gray-200" style={{ backgroundImage: "url('/images/notebook-paper.svg')", backgroundSize: 'cover' }}>
        <BoardPin />
        <div className="relative w-full aspect-[4/3] overflow-hidden border-2 border-gray-200">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            data-ai-hint="event photo"
          />
        </div>
      </div>
      <h3 className="font-['Rock_Salt'] text-center text-lg mt-4">{event.title}</h3>
    </motion.div>
  );
};
