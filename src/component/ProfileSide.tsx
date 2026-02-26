import { FaGithub, FaEnvelope } from "react-icons/fa";
import styles from '../styles/ProfileSide.module.css';
import profilePicture from '../assets/picture.jpg';



function ProfileSide() {
    return (
        <div className={styles.box}>
            {/* Profile Image Section */}
            <div className={styles.image}>
                <img src={profilePicture} alt="Natthawut Laeme" />
            </div>

            {/*Name Section */}
             <div className={styles.name}>
                <h1>Natthawut Laeme</h1>
                     <span className={styles.nickname}>Full-Stack Developer</span>
            </div>

           {/* Contact / Social Link */}
           <div className={styles.buttonGroup}>
                
                {/* GitHub */}
                <a href="https://github.com/POTAEPT" target="_blank" rel="noreferrer" className={styles.socialButton}>
                    <FaGithub size={20} />
                    <span>GitHub</span>
                </a>

                {/*  Devfolio  */}
                <a href="https://devfolio.co/@ptt__demo" target="_blank" rel="noreferrer" className={styles.socialButton}>
                    <span>Devfolio</span>
                </a>

                {/*  Email */}
                <a href="mailto:natthawutlaeme@gmail.com" className={styles.socialButton}>
                    <FaEnvelope size={20} />
                    <span>Email</span>
                </a>

            </div>
        </div>
    );
}
export default ProfileSide;