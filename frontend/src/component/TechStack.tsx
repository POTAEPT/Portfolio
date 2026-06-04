// src/component/TechStack.tsx
import { motion, type  Variants } from 'motion/react';
import styles from '../styles/TechStack.module.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants : Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 150, damping: 12 } 
  },
};

function TechStack() {
  // เปลี่ยนมาใช้ className ของ Devicon (อย่าลืมเติมคำว่า colored จะได้มีสีสวยๆ)
  const proficient = {
    TechStack: [
      { name: "React", iconPath: "/icons/library/React_dark.svg" },
      { name: "TypeScript", iconPath: "/icons/language/typescript.svg" },
      { name: "Vite", iconPath:"/icons/library/vite.svg" },
      { name: "HTML5", iconPath: "/icons/language/html5.svg" },
      { name: "CSS3", iconPath: "/icons/language/css.svg" },
      { name: "Java", iconPath: "/icons/language/java.svg" },
      { name: "MySQL", iconPath: "/icons/database/MySQL_dark.svg" },
      

    ],
    Tools: [
      { name: "Git", iconPath: "/icons/tool/git.svg" },
      { name: "Postman", iconPath: "/icons/tool/postman.svg" },
      { name: "Figma", iconPath: "/icons/tool/figma.svg" },
      { name: "Docker", iconPath: "/icons/tool/docker.svg"},
    ]
  };

  const renderTechGroup = (title: string, techs: any[]) => {
    if (!techs || techs.length === 0) return null;
    return (
      <div className={styles.categoryGroup}>
        <h4 className={styles.categoryTitle}>{title}</h4>
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {techs.map((tech, index) => (
            <motion.div key={index} className={styles.iconWrapper}  variants={itemVariants}>
              <img src={tech.iconPath} alt={tech.name} style={{ width: '3rem', height: '3rem' }} />
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.zoneTitle} style={{ textAlign: 'center', marginBottom: '30px' }}>
        My Core Technologies
      </h3>
      
      <div className={styles.zoneContent}>
         {renderTechGroup("Tech Stack", proficient.TechStack)}
         {renderTechGroup("Tools", proficient.Tools)}
      </div>
    </div>
  )
}

export default TechStack;