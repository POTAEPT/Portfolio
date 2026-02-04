import styles from '../styles/navbar.module.css';

function Navbar(){
    return(
        <nav className={styles.navbar}>
                <div className={styles.logo}>
                    Portfolio
                </div>
                <ul>
                        <a href="#home"> Home</a>
                </ul>
                <ul>
                        <a href="#about">About me</a>
                </ul>
                <ul>
                        <a href="#project">Project</a>
                </ul>
        </nav>
    )
}
export default Navbar