import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const aboutData = {
  title: 'About TinkerHub [College Name]',
  description: 'TinkerHub is a global community of technology enthusiasts. Our college branch is dedicated to fostering a culture of innovation, learning, and collaboration among students. We provide a platform for students to learn new skills, work on real-world projects, and connect with like-minded peers and industry professionals.',
  mission: 'Our mission is to empower students with the tools and knowledge to build a better future through technology. We believe in learning by doing and encourage hands-on experimentation and creativity.',
  image: 'about-us',
};

export const eventsData = {
  upcoming: [
    {
      id: 1,
      title: 'Intro to React Workshop',
      date: 'October 25, 2024',
      description: 'Join us for a beginner-friendly workshop on React.js. Learn the fundamentals and build your first web application.',
      image: 'event-1',
    },
    {
      id: 2,
      title: 'InnovateX Hackathon 2024',
      date: 'November 15-17, 2024',
      description: 'A 48-hour hackathon to build innovative solutions for real-world problems. Prizes, food, and fun await!',
      image: 'event-2',
    },
  ],
  past: [
    {
      id: 3,
      title: 'Tech Talk: The Future of AI',
      date: 'September 10, 2024',
      description: 'An insightful talk by an industry expert on the latest trends and future possibilities in Artificial Intelligence.',
      image: 'event-3',
    },
    {
      id: 4,
      title: 'Community Icebreaker',
      date: 'August 30, 2024',
      description: 'Our first event of the semester! A fun-filled evening of games, networking, and getting to know the community.',
      image: 'event-4',
    },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: 'Campus Navigator App',
    description: 'A mobile application to help new students navigate the college campus with ease, featuring an interactive map and event schedules.',
    image: 'project-1',
    link: '#',
  },
  {
    id: 2,
    title: 'Student Feedback Platform',
    description: 'A web platform for collecting and analyzing student feedback to improve college services and academic programs.',
    image: 'project-2',
    link: '#',
  },
  {
    id: 3,
    title: 'Autonomous Delivery Robot',
    description: 'A hardware project focused on building a small, autonomous robot for delivering items across the campus.',
    image: 'project-3',
    link: '#',
  },
  {
    id: 4,
    title: 'Library Occupancy Tracker',
    description: 'An IoT project that uses sensors to provide real-time data on library occupancy, displayed on a public dashboard.',
    image: 'project-4',
    link: '#',
  },
];

export const teamData = {
  faculty: [
    {
      id: 1,
      name: 'Dr. Evelyn Reed',
      role: 'Faculty Coordinator',
      major: 'Computer Science Dept.',
      year: '',
      image: 'team-faculty-1',
    },
  ],
  students: [
    {
      id: 2,
      name: 'Alice Johnson',
      role: 'Student Lead',
      major: 'Computer Engineering',
      year: '4th Year',
      image: 'team-student-1',
    },
    {
      id: 3,
      name: 'Bob Williams',
      role: 'Events Lead',
      major: 'Information Technology',
      year: '3rd Year',
      image: 'team-student-2',
    },
    {
      id: 4,
      name: 'Charlie Brown',
      role: 'Projects Lead',
      major: 'Electronics &amp; Comm.',
      year: '3rd Year',
      image: 'team-student-3',
    },
    {
      id: 5,
      name: 'Diana Prince',
      role: 'Outreach Lead',
      major: 'Mechanical Engineering',
      year: '2nd Year',
      image: 'team-student-4',
    },
  ],
};

export const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/tinkerhub' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/tinkerhub' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/tinkerhub' },
  { name: 'Email', icon: Mail, url: 'mailto:contact@tinkerhub.org' },
];
