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
        
        {/* 1. ข้อมูลรวม (Commits, PRs, Issues) - อันนี้โหลดไวกว่า Metrics เยอะครับ */}
        <img 
          src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=transparent`} 
          alt="Profile Details"
          style={{ width: '100%' }}
        />

        {/* 2. ภาษาที่ใช้บ่อย */}
        <img 
          src={`http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=transparent`} 
          alt="Top Languages"
          style={{ width: '100%' }}
        />

        {/* 3. ช่วงเวลาที่ขยัน (Productive Time) */}
        <img 
           src={`http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${username}&theme=transparent&utcOffset=7`} 
           alt="Productive Time"
           style={{ width: '100%' }}
        />

      </div>
    </div>
  );
}