import { motion } from 'motion/react';
import { FiCode, FiShield, FiServer, FiZap } from 'react-icons/fi';
import styles from './About.module.css';

const INTERESTS = [
  { icon: <FiCode size={18} />, label: 'Clean Architecture' },
  { icon: <FiShield size={18} />, label: 'AppSec & Pentesting' },
  { icon: <FiServer size={18} />, label: 'Cloud-Native Systems' },
  { icon: <FiZap size={18} />, label: 'Performance Engineering' },
];

const TIMELINE = [
  {
    period: '2025 → Present',
    role: 'Student | Full Stack Developer',
    place: 'Chiang Mai University',
    detail: 'College of Arts Media and Technology (CAMT), Digital Industry Integration (DII)',
  },

];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as const} },
};

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        {/* Section label */}
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className={styles.labelNum}>01.</span>
          About Me
        </motion.div>

        <div className={styles.grid}>
          {/* Left: bio */}
          <motion.div
            className={styles.bio}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className={styles.heading}>
              I build things that matter,{' '}
              <span className={styles.accent}>securely.</span>
            </h2>

            <p className={styles.para}>
             I'm a Digital Industry Integration student actively exploring the intersection of full-stack development and cybersecurity. Through my academic and personal projects, I focus on building functional applications while treating security as a core component, rather than an afterthought.
            </p>

            <p className={styles.para}>
              My current learning focus is shift-left security. I'm actively experimenting with integrating basic SAST and DAST tools into development workflows (like GitHub Actions) to understand how modern teams catch vulnerabilities early.
            </p>

            <p className={styles.para}>
              When I'm not writing code or studying for exams, you'll likely find me practicing my skills on HackTheBox, reading up on recent CVE advisories, or learning how to automate tasks via CLI.
            </p>

            {/* Interests grid
            <div className={styles.interests}>
              {INTERESTS.map(item => (
                <span key={item.label} className={styles.interest}>
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </div> */}
          </motion.div>

          {/* Right: timeline */}
          <motion.div
            className={styles.timeline}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h3 className={styles.timelineTitle}>Experience</h3>
            <div className={styles.timelineList}>
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <span className={styles.timePeriod}>{item.period}</span>
                  <div className={styles.timeContent}>
                    <div className={styles.timeRole}>{item.role}</div>
                    <div className={styles.timePlace}>{item.place}</div>
                    <div className={styles.timeDetail}>{item.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
