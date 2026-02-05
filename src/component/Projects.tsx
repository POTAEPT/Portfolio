
import { FaGithub } from "react-icons/fa"; 
import styles from '../styles/Projects.module.css';
import { projectsData } from '../data/ProjectsData';

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
          <h2> Projects</h2>
          <p>My recent works</p>
        </div>

        <div className={styles.grid}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              </div>
              
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
                    <a href={project.githubUrl} className={styles.iconLink}><FaGithub size={30} color="#f0f0f0"/></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;