import Image from 'next/image';
import { teamData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const TeamMemberCard = ({ member }: { member: { id: number; name: string; role: string; major: string; year: string; image: string; } }) => {
  const memberImage = PlaceHolderImages.find(p => p.id === member.image);
  const initials = member.name.split(' ').map(n => n[0]).join('');

  return (
    <div className="text-center transition-transform duration-300 hover:scale-105">
      <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {memberImage && (
          <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />
        )}
        <AvatarFallback className="text-3xl">{initials}</AvatarFallback>
      </Avatar>
      <h3 className="font-bold text-lg">{member.name}</h3>
      <p className="text-primary font-medium">{member.role}</p>
      <p className="text-sm text-muted-foreground">{member.major}</p>
      {member.year && <p className="text-sm text-muted-foreground">{member.year}</p>}
    </div>
  );
};


export default function Team() {
  return (
    <section id="team" className="bg-secondary/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The people who make it all happen.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Faculty Coordinator</h3>
          <div className="flex justify-center">
            {teamData.faculty.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Student Leads</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamData.students.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
