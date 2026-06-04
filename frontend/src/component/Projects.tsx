
import { FaGithub } from "react-icons/fa"; 
import styles from '../styles/Projects.module.css';
import { motion, type Variants } from "motion/react";
import { projectsData } from '../data/ProjectsData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

export function Projects() {
  const getStatusClass = (status: string)=>{
    if (status == 'Success'){
      return styles.statusSuccess;
    }else{
      return styles.statusPending;
    }
  };



  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2> Projects  & Activities</h2>
          <p>My recent works</p>
        </div>

        <motion.div 
         className={styles.grid}
         variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}>
          {projectsData.map((project, index) => (
            <motion.div key={index} className={styles.card} variants={itemVariants}>
              {project.image && (
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                </div>
              )}
              
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className={styles.tagsWrapper}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={`${styles.status} ${getStatusClass(project.status)}`}>
                  <p style={{ margin: 0 }}>{project.status}</p> 
                </div>

                <div className={styles.links}>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.iconLink}
                    >
                        <FaGithub size={30} color="#f0f0f0"/>
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;