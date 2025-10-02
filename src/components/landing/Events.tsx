"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

const Paperclip = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute -top-4 left-1/2 -translate-x-1/2 -rotate-12 w-10 h-10 text-gray-400 drop-shadow-md">
        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.59a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
    </svg>
);

interface UpcomingEvent {
    id: number;
    name: string;
    image: string;
}

export default function Events({ initialUpcomingEvent }: { initialUpcomingEvent: UpcomingEvent | null }) {
  const upcomingEvent = initialUpcomingEvent;
  const loading = !initialUpcomingEvent;


  return (
    <motion.section
      id="events"
      className="relative !py-12 md:!py-24 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container max-w-5xl mx-auto relative">
        <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
          <motion.div
            className="text-center md:text-left flex flex-col items-center md:items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative inline-block mb-8 md:-rotate-2">
              <div className="bg-black text-background font-black text-3xl md:text-4xl inline-block px-8 py-2">
                UPCOMING EVENTS
              </div>
            </div>
            {loading ? (
              <div className="space-y-4 w-full max-w-sm mx-auto md:mx-0">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
                <Skeleton className="h-6 w-3/4" />
              </div>
            ) : upcomingEvent ? (
              <div className="font-['Rock_Salt'] text-2xl text-foreground/80 leading-relaxed space-y-2">
                  <p>{upcomingEvent.name}</p>
              </div>
            ) : (
              <div className="font-['Rock_Salt'] text-2xl text-foreground/80 leading-relaxed space-y-2">
                <p>No upcoming events scheduled.</p>
                <p>Please check back soon!</p>
              </div>
            )}
          </motion.div>

          <motion.div
            className="relative mt-16 md:mt-0 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-[300px] h-[225px] md:w-[360px] md:h-[270px] bg-[#F0EAD6] p-4 border-2 border-black/10 shadow-[8px_8px_0px_#00000020] -rotate-3">
              <Paperclip />
              <div className="relative w-full h-full">
                {loading ? (
                  <Skeleton className="w-full h-full" />
                ) : upcomingEvent ? (
                  <Image
                    src={upcomingEvent.image}
                    alt={upcomingEvent.name}
                    fill
                    className="object-cover rounded-sm border-2 border-white/50"
                    data-ai-hint="event photo"
                  />
                ) : (
                   <Image
                    src='/images/eve.png'
                    alt="Upcoming event photo"
                    fill
                    className="object-cover rounded-sm border-2 border-white/50"
                    data-ai-hint="event photo"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
        <p className="font-['Rock_Salt'] text-sm text-foreground/70 text-center mt-12 md:hidden">
            made using loads of coffeee...
        </p>
      </div>
    </motion.section>
  );
}
