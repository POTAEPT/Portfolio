import styles from '../styles/TechStack.module.css';
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiVite, SiSpringboot, SiSharp, SiCplusplus, SiSolidity, SiMysql, SiPostman } from "react-icons/si";

function Skills() {
  
  const proficient = {
    Frontend: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "Vite", icon: <SiVite />, color: "#646CFF" },
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
    ],
    Backend: [
      { name: "Java", icon: <FaJava />, color: "#007396" },
    ],
     Database: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    ],
    Tools: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    ]
  };


  const learning = {
    Backend: [
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
      { name: "C#", icon: <SiSharp />, color: "#239120" },
      { name: "Solidity", icon: <SiSolidity />, color: "#363636" },
    ],
  };

  const renderTechGroup = (title: string, techs: any[]) => {
    if (!techs || techs.length === 0) return null;
    return (
      <div className={styles.categoryGroup}>
        <h4 className={styles.categoryTitle}>{title}</h4>
        <div className={styles.grid}>
          {techs.map((tech, index) => (
            <div key={index} className={styles.iconWrapper}>
              <div style={{ color: tech.color }}>{tech.icon}</div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      
      {/* ---  PROFICIENT --- */}
      <div className={styles.zone}>
        <h3 className={styles.zoneTitle}> Proficient Skills</h3>
        <div className={styles.zoneContent}>
           {renderTechGroup("Frontend", proficient.Frontend)}
           {renderTechGroup("Backend", proficient.Backend)}
            {renderTechGroup("Database", proficient.Database)}
           {renderTechGroup("Tools", proficient.Tools)}
        </div>
      </div>

      {/* --- LEARNING --- */}
      <div className={styles.zone}>
        <h3 className={styles.zoneTitle} style={{ color: '#666' }}> Currently Learning</h3>
        <div className={styles.zoneContent}>
           {renderTechGroup("Backend", learning.Backend)}
        </div>
      </div>

    </div>
  )
}

export default Skills