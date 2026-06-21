import styles  from '../styles/Content.module.css';


function AboutMe(){
    return(
        <section className={styles.wrapper}>
            <h2 >About Me</h2>
            <p>I am a Digital Industry Integration student at Chiang Mai University who enjoys building systems from the ground up until they are fully functional. Whether it’s designing user-friendly Front-end interfaces or architecting robust Back-end structures, I find joy in the challenge of making every component work together seamlessly.</p>
            <p>Beyond that, I am interested in other fields and have started exploring Cyber Security, IoT, and Web3. I love pushing my own limits.</p>
            <p>For me, coding is a fun and never-ending learning journey. I am currently enjoying developing various projects while mastering new skills at the same time.</p>
        </section>
    );
}

export default AboutMe;