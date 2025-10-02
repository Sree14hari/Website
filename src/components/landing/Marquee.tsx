"use client";

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const MarqueeItem = ({ text, useLogo }: { text: string, useLogo?: boolean }) => (
  <div className="flex items-center">
    {useLogo ? (
        <div className="mx-4">
            {/* This space is reserved for a potential logo component if needed later */}
            <span className="mx-4 text-xl font-bold tracking-wider">{text.toUpperCase()}</span>
        </div>
    ) : (
        <span className="mx-4 text-xl font-bold tracking-wider">{text.toUpperCase()}</span>
    )}
    <Star className="w-5 h-5 fill-current" />
  </div>
);


export default function Marquee({ 
    content, 
    className, 
    useLogoForText 
} : { 
    content: string[], 
    className: string, 
    useLogoForText?: string 
}) {
  const fullContent = [...content, ...content, ...content, ...content];

  return (
    <div className={cn("relative flex overflow-x-hidden py-4 my-8", className)}>
      <div className="animate-marquee whitespace-nowrap flex">
        {fullContent.map((text, index) => (
          <MarqueeItem key={index} text={text} useLogo={useLogoForText === text} />
        ))}
      </div>
      <div className="absolute top-0 left-0 animate-marquee2 whitespace-nowrap flex">
        {fullContent.map((text, index) => (
          <MarqueeItem key={index} text={text} useLogo={useLogoForText === text} />
        ))}
      </div>
    </div>
  );
}
