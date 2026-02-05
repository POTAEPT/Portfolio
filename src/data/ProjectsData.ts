export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: string;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization platform.',
    image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?auto=format&fit=crop&q=80&w=1080',
    tags: ['React', 'TypeScript', 'Recharts'],
    status:'Success',
    githubUrl: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Online store with payment integration.',
    image: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?auto=format&fit=crop&q=80&w=1080',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    status:'In Processes',
    githubUrl: '#',
  },
];