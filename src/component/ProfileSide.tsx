import { FaGithub, FaEnvelope } from "react-icons/fa";
import styles from '../styles/ProfileSide.module.css';
import profilePicture from '../assets/Profile.png';



function ProfileSide() {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <img src={profilePicture} alt="Natthawut Laeme" />
            </div>

            <div className={styles.content}>
                <p className={styles.kicker}>Hi, I&apos;m</p>
                <h1>Natthawut Laeme</h1>
                <h2>Full-Stack Developer</h2>

                <p className={styles.description}>
                    I build practical and user-focused web applications from front-end experiences to robust back-end systems.
                    I enjoy learning new technologies and turning ideas into real products.
                </p>

                <div className={styles.socialRow}>
                    <a href="https://github.com/POTAEPT" target="_blank" rel="noreferrer" className={styles.iconButton} aria-label="GitHub">
                        <FaGithub size={18} />
                    </a>

                    <a href="mailto:natthawutlaeme@gmail.com" className={styles.iconButton} aria-label="Email">
                        <FaEnvelope size={18} />
                    </a>

                    <span className={`${styles.iconButton} ${styles.devfolioButton}`} aria-label="Devfolio">
                        <span>Devfolio</span>
                    </span>

                </div>
            </div>
        </section>
    );
}
export default ProfileSide;