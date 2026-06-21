import { useState, useEffect } from 'react';
import '../styles/portfolio.css';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import styles from './App.module.css';

/*
  DARK / LIGHT MODE LOGIC
  ────────────────────────
  1. State: `isDark` lives in App. Default = true (dark theme).
  2. Persistence: useState lazy-initializer reads localStorage on mount,
     so the chosen theme survives page refreshes.
  3. Effect: every time `isDark` changes, we call
       document.documentElement.setAttribute('data-theme', 'dark' | 'light')
     This sets the attribute on <html>. The CSS selector [data-theme="dark"]
     in portfolio.css then activates the dark-mode CSS custom properties.
     Because custom properties cascade, every CSS Module that references
     var(--port-*) automatically re-skins without any JS prop-drilling.
  4. Toggle: `onToggleTheme` flips isDark and saves to localStorage.
*/
export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [isDark]);

  const handleToggleTheme = () => setIsDark(prev => !prev);

  return (
    <div className={styles.app}>
      <Navbar isDark={isDark} onToggleTheme={handleToggleTheme} />
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
