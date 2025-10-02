import Image from 'next/image';
import { aboutData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === aboutData.image);

  return (
    <section id="about" className="bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            {aboutData.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-3">
            <p className="text-lg text-foreground/80 mb-4">
              {aboutData.description}
            </p>
            <p className="text-lg text-foreground/80">
              {aboutData.mission}
            </p>
          </div>
          <div className="md:col-span-2">
            <Card className="overflow-hidden transition-shadow duration-300">
              <CardContent className="p-0">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
