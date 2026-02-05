import { FaCode } from "react-icons/fa";
import styles from '../styles/SidebarSection.module.css';

export function GithubStats() {
  const username = "POTAEPT"; 

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <FaCode /> Coding Stats
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <img 
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=1f2328&text_color=636c76&icon_color=1f2328`}
          alt="GitHub Stats"
          style={{ width: '100%' }}
        />
        <img 
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=1f2328&text_color=636c76`} 
          alt="Top Langs"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}