import { FaGithub, FaEnvelope } from "react-icons/fa";
import { Education } from './Education'
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
const aboutItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
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
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
        >
            {/* ส่วนบน: รูปภาพ */}
            <motion.div className={styles.image} variants={imageVariants}>
                <img src={profilePicture} alt="Natthawut Laeme" />
            </motion.div>

            {/* ส่วนบนขวา: ข้อมูลพื้นฐาน */}
            <motion.div className={styles.content} variants={containerVariants}>
                <motion.p className={styles.kicker} variants={itemVariants}>Hi, I'm</motion.p>
                <motion.h1 variants={itemVariants}>Natthawut Laeme</motion.h1>
                <motion.h2 variants={itemVariants}>Full-Stack Developer</motion.h2>
                <motion.div className={styles.tagContent} variants={itemVariants}>
                    <span>DevSecOps Explorer</span>
                    <span>CyberSec Enthusiast</span>
                </motion.div>

                <motion.p className={styles.description} variants={itemVariants}>
                    I build practical and user-focused web applications from front-end experiences to robust back-end systems.
                </motion.p>
                <motion.div variants={itemVariants}>
                    <Education/>
                </motion.div>
                
                <motion.div className={styles.socialRow} variants={itemVariants}>
                    {/* ... ปุ่ม Social เดิมของเต้ ... */}
                </motion.div>
            </motion.div>

            {/* ส่วนล่าง: About Me (ที่เต้อยากให้ยาวลงไป) */}
            <motion.div className={styles.aboutFullWidth} variants={containerVariants}>
                <motion.h3 variants={aboutItemVariants}>About Me</motion.h3>
                <motion.div className={styles.aboutText} variants={aboutItemVariants}>
                    <p>I am a Digital Industry Integration student at Chiang Mai University who enjoys building systems from the ground up until they are fully functional. Whether it’s designing user-friendly Front-end interfaces or architecting robust Back-end structures, I find joy in the challenge of making every component work together seamlessly.
                    Beyond that, I am interested in other fields and have started exploring Cyber Security, IoT, and Web3. I love pushing my own limits.
                    For me, coding is a fun and never-ending learning journey. I am currently enjoying developing various projects while mastering new skills at the same time.</p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
export default ProfileSide;