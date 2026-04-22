import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye, Code2 } from 'lucide-react';
import { personalInfo, roles } from '../../data/resume';
import styles from './Hero.module.scss';

const TYPING_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_DURATION = 1800;

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    } else {
      const speed = isDeleting ? DELETE_SPEED : TYPING_SPEED;
      timeout = setTimeout(() => {
        setDisplayText(prev =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = id => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className={styles.hero} id="hero" aria-label="Hero">
      {/* Animated blobs */}
      <div className={styles.blobs} aria-hidden="true">
        <motion.div
          className={`${styles.blob} ${styles['blob--1']}`}
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`${styles.blob} ${styles['blob--2']}`}
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`${styles.blob} ${styles['blob--3']}`}
          animate={{ x: [0, 30, -40, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className={styles['grid-pattern']} aria-hidden="true" />

      <div className={`${styles.content} container`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={itemVariants}>
            <span className={styles.dot} />
            Available for opportunities
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Hi, I'm{' '}
            <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
            {' '}
            <span className="gradient-text">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.div className={styles['roles-wrapper']} variants={itemVariants}>
            <span className={styles['role-label']}>{displayText}</span>
            <span className={styles.cursor} aria-hidden="true" />
          </motion.div>

          <motion.p className={styles.tagline} variants={itemVariants}>
            {personalInfo.tagline}{' '}
            <span className={styles.quirk}>Yes, I do center divs. Sometimes.</span>
          </motion.p>

          <motion.div className={styles['cta-group']} variants={itemVariants}>
            <button
              id="view-work-btn"
              className={styles['btn-primary']}
              onClick={() => scrollTo('#projects')}
            >
              <Eye size={18} />
              View Work
            </button>
            <a
              id="download-resume-btn"
              href={personalInfo.resume}
              download
              className={styles['btn-ghost']}
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles['scroll-hint']}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-hidden="true"
      >
        <span>scroll</span>
        <div className={styles['scroll-line']} />
      </motion.div>
    </section>
  );
}
