import { motion } from 'motion/react';
import styles from './About.module.css';

// ----------------------------------------------------------------------
// 1. DATA
// ----------------------------------------------------------------------
const EDUCATION_DATA = [
  {
    period: 'Expect to graduate in 2028.',
    role: 'Student | Full Stack Developer',
    place: 'Chiang Mai University',
    detail: 'College of Arts Media and Technology (CAMT), Digital Industry Integration (DII)',
  },
];

const EXPERIENCE_DATA = [
  {
    period: 'Aug 2026 → Present',
    role: 'Website Quality Assurance (QA)',
    place: 'Keptcarbon, turnpro',
    detail: 'Conducted manual testing and simulated edge cases to identify hidden bugs, ensuring the reliability of the web application.',
  },
]

// ----------------------------------------------------------------------
// 2. ANIMATION VARIANTS
// ----------------------------------------------------------------------
const motionVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as const } },
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
  },
  slideLeftStagger: {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  },
};

// ----------------------------------------------------------------------
// 3. MAIN COMPONENT
// ----------------------------------------------------------------------
export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        
        {/* Section Label */}
        <motion.div
          className={styles.label}
          variants={motionVariants.slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className={styles.labelNum}>01.</span>
          About Me
        </motion.div>

        <div className={styles.grid}>
          
          {/* Left: Bio */}
          <motion.div
            className={styles.bio}
            variants={motionVariants.fadeUp}
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
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            className={styles.timeline}
            variants={motionVariants.fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }} 
          >
            <h3 className={styles.timelineTitle}>Education</h3>
            
            <div className={styles.timelineList}>
              {EDUCATION_DATA.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.timelineItem}
                  custom={i} 
                  variants={motionVariants.slideLeftStagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
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

            <h3 className={styles.timelineTitle}>Experience</h3>

            <div className={styles.timelineList}>
              {EXPERIENCE_DATA.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.timelineItem}
                  custom={i} 
                  variants={motionVariants.slideLeftStagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
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