import { FaGithub, FaEnvelope } from "react-icons/fa";
import { motion, type Variants } from "motion/react";
import styles from '../styles/ProfileSide.module.css';
import profilePicture from '../assets/Profile.png';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 120, damping: 15 }
    },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 }
    },
};

function ProfileSide() {
    return (
        <motion.section
            className={styles.hero}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className={styles.image} variants={imageVariants}>
                <img src={profilePicture} alt="Natthawut Laeme" />
            </motion.div>

            <motion.div className={styles.content} variants={containerVariants}>
                <motion.p className={styles.kicker} variants={itemVariants}>Hi, I&apos;m</motion.p>
                <motion.h1 variants={itemVariants}>Natthawut Laeme</motion.h1>
                <motion.h2 variants={itemVariants}>Full-Stack Developer</motion.h2>
                <motion.div className={styles.tagContent} variants={itemVariants}>
                    <span>DevSecOps Explorer</span>
                    <span>CyberSec Enthusiast</span>
                </motion.div>

                <motion.p className={styles.description} variants={itemVariants}>
                    I build practical and user-focused web applications from front-end experiences to robust back-end systems.
                    I enjoy learning new technologies and turning ideas into real products.
                </motion.p>

                <motion.div className={styles.socialRow} variants={itemVariants}>
                    <a href="https://github.com/POTAEPT" target="_blank" rel="noreferrer" className={styles.iconButton} aria-label="GitHub">
                        <FaGithub size={18} />
                    </a>

                    <a href="mailto:natthawutlaeme@gmail.com" className={styles.iconButton} aria-label="Email">
                        <FaEnvelope size={18} />
                    </a>

                    <span className={`${styles.iconButton} ${styles.devfolioButton}`} aria-label="Devfolio">
                        <span>Devfolio</span>
                    </span>

                </motion.div>
            </motion.div>
        </motion.section>
    );
}
export default ProfileSide;