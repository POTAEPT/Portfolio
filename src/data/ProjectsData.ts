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
    description: 'ReliefMesh is an offline-first, peer-to-peer (P2P) disaster management platform. It allows victims to broadcast SOS signals that hop between devices without needing a central server. Simultaneously, it integrates Ethereum Smart Contracts to enable direct, transparent, and fee-free financial aid from donors to victims.',
    tags: ['React', 'TypeScript','Solidity','CSS'],
    status:'Success',
    githubUrl: 'https://github.com/POTAEPT/ReliefMesh-UIAteam',
  },
  {
    title: 'LAYING DOWN THE SMALL BRICKS',
    description: 'CAMT DeSci: Leveraging ESP-NOW technology combined with Distributed Ledger Technology (DLT) to design a decentralized network system, utilizing Blockchain-based techniques for floating infrastructure development. The project aims to establish an emergency communication channel for local communities and explore the feasibility of using digital assets to incentivize activities aligned with community goals, such as Social Return on Investment (SROI) or Green Development.',
    tags: ['C++', 'Arduino Framework', 'ESP-NOW'],
    status:'Success',
    githubUrl: 'https://github.com/POTAEPT/Web3-Student-Club-Showcase',
  },
  {
    title: 'DII-MINI GAME',
    description: 'DII Minigame Platform is a multiplayer minigame platform developed with TypeScript and Firebase for CAMT OPEN HOUSE event. It features three main games: Debug Game (finding code errors), Logic Game (solving logical problems), and Typing Game (testing code typing speed). Designed to give participants hands-on experience in various software development roles (Frontend, Backend, UX/UI Designer, QA Tester, Data Scientist) through a real-time multiplayer system powered by Firebase Realtime Database and Firestore for seamless Host-Client data synchronization. The platform emphasizes gamification to introduce IT career paths and skills to prospective students in an engaging and interactive way.',
    tags: ['C++', 'Arduino Framework', 'ESP-NOW'],
    status:'Success',
    githubUrl: 'https://github.com/POTAEPT/DII-minigame',
  },
];