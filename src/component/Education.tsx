import { FaGraduationCap } from "react-icons/fa";
import styles from '../styles/SidebarSection.module.css';

export function Education() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <FaGraduationCap /> Education
      </h3>
      
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.dot}></div>
          <div className={styles.year}>2023 - Present</div>
          <h4 className={styles.school}>Chiang Mai University</h4>
          <p className={styles.degree}>Digital Industry Integration</p>
        </div>
      </div>
    </div>
  );
}