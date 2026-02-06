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
          src={`https://metrics.lecoq.io/${username}?template=classic&base=header,repositories&languages=1&wakatime=1&config.timezone=Asia%2FBangkok`}
          alt="Github Metrics"
          style={{ width: '100%', borderRadius: '8px' }}
        />


      </div>
    </div>
  );
}