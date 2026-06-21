import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("up");

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      const diff = current - previous;
      if (current > 50 && diff > 0) {
        setScrollDirection("down");
      } else if (diff < 0 || current <= 50) {
        setScrollDirection("up");
      }
    }
  });

  return (
    <motion.nav
      className={styles.navbar}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" }
      }}
      initial="visible"
      animate={scrollDirection === "down" ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className={styles.logo}>Portfolio</div>

      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#project">Project</a></li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;