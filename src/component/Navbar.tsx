import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Portfolio</div>

      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#project">Project</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;