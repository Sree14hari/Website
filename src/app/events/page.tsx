import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import EventsGrid from '@/components/events/EventsGrid';
import type { Event } from '@/components/events/EventsGrid';

// Mock data to replace Supabase fetch
const events: Event[] = [
  { id: 1, title: 'Intro to Web Dev', image: 'https://picsum.photos/seed/event1/400/300' },
  { id: 2, title: 'Design Workshop', image: 'https://picsum.photos/seed/event2/400/300' },
  { id: 3, title: 'Hackathon 2024', image: 'https://picsum.photos/seed/event3/400/300' },
  { id: 4, title: 'AI/ML Talk', image: 'https://picsum.photos/seed/event4/400/300' },
  { id: 5, title: 'Capture The Flag', image: 'https://picsum.photos/seed/event5/400/300' },
  { id: 6, title: 'Community Meetup', image: 'https://picsum.photos/seed/event6/400/300' },
];

export default async function EventsPage() {
  return (
    <div className="flex min-h-dvh flex-col crumpled-paper">
      <Header />
      <main className="flex-1">
        <EventsGrid initialEvents={events} />
      </main>
      <Footer />
    </div>
  );
}
