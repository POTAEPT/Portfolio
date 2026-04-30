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
      { name: "React", iconPath: "public/icons/Library/React_dark.svg" },
      { name: "TypeScript", iconPath: "public/icons/Language/typescript.svg" },
      { name: "Vite", iconPath:"public/icons/Library/vite.svg" },
      { name: "HTML5", iconPath: "public/icons/Language/html5.svg" },
      { name: "CSS3", iconPath: "public/icons/Language/css.svg" },
      { name: "Java", iconPath: "public/icons/Language/java.svg" },
      { name: "MySQL", iconPath: "public/icons/Library/React_dark.svg" },
      

    ],
    Tools: [
      { name: "Git", iconPath: "public/icons/Tool/git.svg" },
      { name: "Postman", iconPath: "public/icons/Tool/postman.svg" },
      { name: "Figma", iconPath: "public/icons/Tool/figma.svg" },
      { name: "Docker", iconPath: "public/icons/Tool/docker.svg"},
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