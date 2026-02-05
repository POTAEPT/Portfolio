export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  status: string;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    title: 'ReliefMesh',
    description: 'Real-time data visualization platform.',
    tags: ['React', 'TypeScript','Solidity','CSS'],
    status:'Success',
    githubUrl: 'https://github.com/POTAEPT/ReliefMesh-UIAteam',
  },
  {
    title: 'LAYING DOWN THE SMALL BRICKS',
    description: 'Online store with payment integration.',
    tags: ['C++', 'Arduino Framework', 'ESP-NOW'],
    status:'Success',
    githubUrl: 'https://github.com/POTAEPT/Web3-Student-Club-Showcase',
  },
  {
    title: 'LAYING DOWN THE SMALL BRICKS',
    description: 'Online store with payment integration.',
    tags: ['C++', 'Arduino Framework', 'ESP-NOW'],
    status:'Success',
    githubUrl: 'https://github.com/POTAEPT/DII-minigame',
  },
];