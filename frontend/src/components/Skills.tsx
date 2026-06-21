import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  SiReact, SiTypescript, SiPython,
  SiPostgresql, SiDocker, 
  SiGit, SiLinux,SiVite, SiHtml5, 
  SiMysql, SiPostman, SiFigma,
} from 'react-icons/si';
import {
  FiShield, FiLayout,
  FiGitPullRequest, FiTerminal,
  FiGlobe, FiTarget, FiMonitor,
} from 'react-icons/fi';
import { FaJava } from 'react-icons/fa';
import styles from './Skills.module.css';

type Category = 'Frontend' | 'Backend' | 'Tools' | 'Security';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const SKILLS: Record<Category, Skill[]> = {
  Frontend: [
    { name: 'React',       icon: <SiReact />       },
    { name: 'TypeScript',  icon: <SiTypescript /> },
    { name: 'Vite',       icon: <SiVite /> },
    { name: 'HTML5',       icon: <SiHtml5/>},
    { name: 'CSS3',        icon: <FiLayout />},
  ],
  Backend: [
    { name: 'Node.js',     icon: <FiGlobe /> },
    { name: 'Python',      icon: <SiPython />},
    { name: 'Java',       icon: <FaJava /> },
    { name: 'MySQL',      icon: <SiMysql /> },
    { name: 'PostgreSQL',  icon: <SiPostgresql />},
  ],
  Tools: [
    { name: 'Docker',      icon: <SiDocker /> },
    { name: 'GH Actions',  icon: <FiGitPullRequest />},
    { name: 'Nginx',       icon: <FiGlobe /> },
    { name: 'Git',        icon: <SiGit /> },
    { name: 'Postman',    icon: <SiPostman /> },
    { name: 'Figma',      icon: <SiFigma /> },
    { name: 'VS Code',    icon: <FiMonitor />},
  ],
  Security: [
    { name: 'Kali Linux',  icon: <FiTerminal /> },
    { name: 'Burp Suite',  icon: <FiTarget />},
    { name: 'OWASP',       icon: <FiShield />},
    { name: 'Linux',       icon: <SiLinux />},
    { name: 'Bash',        icon: <FiTerminal />},
  ],
};

const CATEGORIES: Category[] = ['Frontend', 'Backend', 'Tools', 'Security'];


export function Skills() {
  const [active, setActive] = useState<Category>('Frontend');

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const cardVariants = {
    hidden:  { opacity: 0, scale: 0.9, y: 10 },
    visible: { opacity: 1, scale: 1,   y: 0,  transition: { duration: 0.3 } },
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.inner}>
        {/* Label */}
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.labelNum}>02.</span>
          Skills &amp; Stack
        </motion.div>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.heading}>My Tech Stack</h2>
          <p className={styles.sub}>
            Tools I use daily to design, build, secure, and ship.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className={styles.tabs} role="tablist">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`${styles.tab} ${active === cat ? styles.tabActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {SKILLS[active].map(skill => (
              <motion.div
                key={skill.name}
                className={styles.card}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
              >
                <span className={styles.cardIcon}>{skill.icon}</span>
                <span className={styles.cardName}>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
