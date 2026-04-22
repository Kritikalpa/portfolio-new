import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import styles from './Navbar.module.scss';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        className={styles['scroll-progress']}
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
      />

      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={`${styles['nav-inner']} container`}>
          <a
            className={styles.logo}
            href="#hero"
            onClick={e => handleNavClick(e, '#hero')}
            aria-label="Go to top"
          >
            KS.
          </a>

          <nav className={styles['nav-links']} aria-label="Main navigation">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} onClick={e => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles['nav-actions']}>
            <button
              className={styles['theme-toggle']}
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              id="theme-toggle-btn"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              id="mobile-menu-btn"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles['mobile-menu']}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map(link => (
              <a key={link.label} href={link.href} onClick={e => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
