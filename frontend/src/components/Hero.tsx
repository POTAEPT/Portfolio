import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { FaGithub} from 'react-icons/fa';
import { FiArrowRight, FiMail, FiTerminal } from 'react-icons/fi';
import styles from './Hero.module.css';

/* Terminal typing animation data */
const TERMINAL_SCRIPT = [
  { type: 'cmd',    text: 'whoami' },
  { type: 'output', text: 'potae — fullstack' },
  { type: 'blank',  text: '' },
  { type: 'cmd',    text: 'cat focus.txt' },
  { type: 'output', text: '→ Writing full-stack code and building functional apps' },
  { type: 'output', text: '→ Actively expanding my cybersecurity knowledge' },
  { type: 'blank',  text: '' },
  { type: 'cmd',    text: 'echo $STATUS' },
  { type: 'output', text: '✓ Open to new opportunities' },
];

const CHAR_SPEED = 38;   // ms per character for command lines
const LINE_DELAY = 420;  // ms delay between lines

function useTerminalAnim() {
  const [visibleLines, setVisibleLines] = useState<{ type: string; text: string }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (currentLine >= TERMINAL_SCRIPT.length) {
      setDone(true);
      return;
    }

    const line = TERMINAL_SCRIPT[currentLine];

    if (line.type === 'blank' || line.type === 'output') {
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, LINE_DELAY);
      return () => clearTimeout(timer);
    }

    /* Animate command character by character */
    if (currentChar < line.text.length) {
      const timer = setTimeout(() => {
        setCurrentChar(c => c + 1);
      }, CHAR_SPEED);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, { ...line, text: line.text }]);
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, LINE_DELAY);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, done]);

  const partialCmd =
    !done &&
    currentLine < TERMINAL_SCRIPT.length &&
    TERMINAL_SCRIPT[currentLine].type === 'cmd'
      ? TERMINAL_SCRIPT[currentLine].text.slice(0, currentChar)
      : null;

  return { visibleLines, partialCmd, done };
}

const ROLES = ['Full Stack Developer', 'DevOps',];

export function Hero() {
  const { visibleLines, partialCmd, done } = useTerminalAnim();
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % ROLES.length);
        setRoleVisible(true);
      }, 350);
    }, 2800);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 as const } },
  };

  const itemVariants = {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] as const } },
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Subtle grid background */}
      <div className={styles.grid} aria-hidden="true" />



      <div className={styles.inner}>
        {/* ── Left: intro text ── */}
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
                  {/* Avatar Image */}
          <motion.div className={styles.avatarWrapper} variants={itemVariants}>
            <img 
              src="https://github.com/POTAEPT.png" 
              alt="Natthawut Laeme" 
              className={styles.avatar} 
            />
          </motion.div>
          <motion.p className={styles.greeting} variants={itemVariants}>
            <span className={styles.promptChar}>{'>_'}</span>
            &nbsp;Hello, World!
          </motion.p>

          <motion.h1 className={styles.name} variants={itemVariants}>
            I'm <span className={styles.nameHighlight}>Natthawut Laeme (Potae)</span>
          </motion.h1>

          <motion.div className={styles.roleRow} variants={itemVariants}>
            <span
              className={`${styles.role} ${roleVisible ? styles.roleVisible : styles.roleHidden}`}
            >
              {ROLES[roleIndex]}
            </span>
          </motion.div>

          <motion.p className={styles.tagline} variants={itemVariants}>
            Coding is a fun and never-ending learning journey. I am currently enjoying developing various projects while mastering new skills at the same time.
          </motion.p>

          <motion.div className={styles.cta} variants={itemVariants}>
            <a
              href="#projects"
              className={styles.btnPrimary}
              onClick={e => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects <FiArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className={styles.btnSecondary}
              onClick={e => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <FiMail size={16} /> Get in Touch
            </a>
          </motion.div>

          <motion.div className={styles.socials} variants={itemVariants}>
            <a
              href="https://github.com/POTAEPT"
              target="https://github.com/POTAEPT"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <span className={styles.socialDivider} />
            <span className={styles.availBadge}>
              <span className={styles.availDot} />
              Actively learning Full Stack & Cybersecurity
            </span>
          </motion.div>
        </motion.div>

        {/* ── Right: terminal window ── */}
        <motion.div
          className={styles.terminal}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Terminal chrome */}
          <div className={styles.termHeader}>
            <span className={styles.dot} style={{ backgroundColor: '#ff5f57' }} />
            <span className={styles.dot} style={{ backgroundColor: '#febc2e' }} />
            <span className={styles.dot} style={{ backgroundColor: '#28c840' }} />
            <span className={styles.termTitle}>
              <FiTerminal size={12} />
              &nbsp;potae@portfolio: ~
            </span>
          </div>

          {/* Terminal body */}
          <div className={styles.termBody}>
            {visibleLines.map((line, i) => (
              <div key={i} className={styles.termLine}>
                {line.type === 'cmd' && (
                  <>
                    <span className={styles.termPrompt}>{'$ '}</span>
                    <span className={styles.termCmd}>{line.text}</span>
                  </>
                )}
                {line.type === 'output' && (
                  <span className={styles.termOut}>{line.text}</span>
                )}
                {line.type === 'blank' && <br />}
              </div>
            ))}

            {/* Partially-typed current command */}
            {partialCmd !== null && (
              <div className={styles.termLine}>
                <span className={styles.termPrompt}>{'$ '}</span>
                <span className={styles.termCmd}>{partialCmd}</span>
                <span className={styles.cursor}>█</span>
              </div>
            )}

            {/* Idle cursor when done */}
            {done && (
              <div className={styles.termLine}>
                <span className={styles.termPrompt}>{'$ '}</span>
                <span className={styles.cursor}>█</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className={styles.scrollArrow}
        >
          ↓
        </motion.span>
        <span>scroll</span>
      </motion.div>
    </section>
  );
}
