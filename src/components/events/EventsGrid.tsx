"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
import EventCard from './EventCard';

export interface Event {
  id: number;
  title: string;
  image: string;
}

export default function EventsGrid({ initialEvents }: { initialEvents: Event[] }) {
  const [events] = useState<Event[]>(initialEvents);
  const loading = !initialEvents || initialEvents.length === 0;

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="flex items-center justify-center gap-4 md:gap-8 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Bot className="w-12 h-12 md:w-16 md:h-16 text-foreground/80 transform -scale-x-100" />
          <h1 className="font-black text-4xl md:text-6xl tracking-wider">EVENTS</h1>
          <Bot className="w-12 h-12 md:w-16 md:h-16 text-foreground/80" />
        </motion.div>
        {loading ? (
          <p className="text-center text-lg text-foreground/80">Loading events...</p>
        ) : events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-foreground/80">No events found. Please check back later.</p>
        )}
      </div>
    </section>
  );
}
