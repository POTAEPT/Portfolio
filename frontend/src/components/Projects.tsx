import { motion } from 'motion/react';
import { FiGithub, FiExternalLink, FiShare2, FiCpu, FiPlayCircle } from 'react-icons/fi';
import styles from './Projects.module.css';

interface Project {
  title: string;
  description: string;
  longDesc: string;
  tags: string[];
  icon: React.ReactNode;
  github: string;
  live?: string;
  highlight?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: 'ReliefMesh',
    description: 'Offline-first P2P disaster management platform',
    longDesc:
      'An offline-first, peer-to-peer (P2P) platform allowing victims to broadcast SOS signals without a central server. Integrates Ethereum Smart Contracts for direct, fee-free financial aid from donors to victims.',
    tags: ['React', 'TypeScript', 'CSS', 'Ethereum', 'Smart Contracts', 'P2P'],
    icon: <FiShare2 size={22} />,
    github: 'https://github.com/POTAEPT/ReliefMesh-UIAteam',
    highlight: true, 
  },
  {
    title: 'CAMT DeSci: Laying Down The Small Bricks',
    description: 'Decentralized floating infrastructure network',
    longDesc:
      'Leveraging ESP-NOW combined with Distributed Ledger Technology (DLT) for floating infrastructure. Establishes emergency communication channels and explores digital assets for SROI and Green Development.',
    tags: ['C++', 'Arduino', 'ESP-NOW', 'Blockchain'],
    icon: <FiCpu size={22} />,
    github: 'https://github.com/POTAEPT/Web3-Student-Club-Showcase',
  },
  {
    title: 'DII-MINI GAME',
    description: 'Real-time multiplayer educational minigames',
    longDesc:
      'A multiplayer platform built for CAMT OPEN HOUSE. Features Debug, Logic, and Typing games to simulate software roles. Powered by Firebase Realtime Database and Firestore for seamless Host-Client data synchronization.',
    tags: ['TypeScript', 'Firebase', 'HTML', 'CSS', 'Realtime DB'],
    icon: <FiPlayCircle size={22} />,
    github: 'https://github.com/POTAEPT/DII-minigame',
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as const } },
};

export function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        {/* Label */}
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.labelNum}>03.</span>
          Projects
        </motion.div>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.heading}>Things I've Built</h2>
          <p className={styles.sub}>
            A selection of projects focused on full-stack development, decentralized networks, and interactive platforms.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              className={`${styles.card} ${project.highlight ? styles.highlight : ''}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Card header */}
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{project.icon}</span>
                <div className={styles.cardLinks}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label="GitHub repository"
                  >
                    <FiGithub size={18} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      aria-label="Live demo"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardShort}>{project.description}</p>
              <p className={styles.cardDesc}>{project.longDesc}</p>

              {/* Tags */}
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* More on GitHub CTA */}
        <motion.div
          className={styles.moreCta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/POTAEPT"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.moreLink}
          >
            <FiGithub size={16} />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}