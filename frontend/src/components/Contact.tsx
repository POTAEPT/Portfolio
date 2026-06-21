import { motion } from 'motion/react';
import { FaGithub,FaTrophy, } from 'react-icons/fa';
import { FiMail, FiArrowUpRight, FiTerminal } from 'react-icons/fi';
import styles from './Contact.module.css';

const LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/POTAEPT', // อัปเดตลิงก์ให้ชี้ไปที่โปรไฟล์เต้
    icon: <FaGithub size={22} />,
    desc: 'See my repositories', // ปรับคำให้ดูเป็นสาย Tech มากขึ้น
  },
  {
    label: 'Devfolio',
    href: 'https://devfolio.co/@ptt__demo',
    icon: <FaTrophy size={22} />, // แก้จาก FaTwitter เป็น FaDevfolio
    desc: 'Hackathon projects', // อธิบายให้คนอ่านรู้ว่าลิงก์นี้เกี่ยวกับอะไร
  },
  {
    label: 'Email',
    href: 'mailto:natthawutlaeme@gmail.com',
    icon: <FiMail size={22} />,
    desc: 'natthawutlaeme@gmail.com',
  },
];

export function Contact() {
  return (
    <footer id="contact" className={styles.contact}>
      <div className={styles.inner}>
        {/* Label */}
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.labelNum}>04.</span>
          Get In Touch
        </motion.div>

        {/* Heading block */}
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className={styles.heading}>Let's build together.</h2>
          <p className={styles.sub}>
            I'm currently open to internships, freelance projects, and tech collaborations.
            Whether you have a web application to build, a security challenge, or just want to talk tech
            — my inbox is always open.
          </p>
          <a
            href="mailto:natthawutlaeme@gmail.com"
            className={styles.emailBtn}
          >
            <FiMail size={18} />
            Say Hello
            <FiArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className={styles.links}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={styles.linkCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.18 } }}
            >
              <span className={styles.linkIcon}>{link.icon}</span>
              <div className={styles.linkInfo}>
                <span className={styles.linkLabel}>{link.label}</span>
                <span className={styles.linkDesc}>{link.desc}</span>
              </div>
              <FiArrowUpRight className={styles.linkArrow} size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer bar */}
        <div className={styles.bar}>
          <span className={styles.barLogo}>
            <FiTerminal size={14} />
            &nbsp;potae.dev
          </span>
          <span className={styles.barCopy}>
            © {new Date().getFullYear()} Natthawut Laeme. Built with React &amp; Motion.
          </span>
          <a
            href="#home"
            className={styles.backTop}
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}