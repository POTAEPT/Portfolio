import { FaAward } from "react-icons/fa";
import styles from '../styles/SidebarSection.module.css';

export function Activities() {
  const events = [
    {
      year: "Feb 2026",
      name: "ETHChiangmai Hackathon",
      role: "ReliefMesh Project"
    },
    {
      year: "Jan 2026",
      name: "Water Data Center",
      role: "Lamphun PAO Project"
    }
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <FaAward /> Activities
      </h3>
      
      <div>
        {events.map((event, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.dot} style={{ borderColor: index === 0 ? '#ffffff' : '#ffffff', background: index === 0 ? '#ffffff' : '#ffffff' }}></div>
            <div className={styles.year}>{event.year}</div>
            <h4 className={styles.school}>{event.name}</h4>
            <p className={styles.degree}>{event.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}