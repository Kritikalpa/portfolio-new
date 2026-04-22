import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronDown, CheckCircle2 } from 'lucide-react';
import { experience } from '../../data/resume';
import styles from './Experience.module.scss';

export default function Experience() {
  const [openId, setOpenId] = useState(experience[0].id);

  return (
    <section className={styles.experience} id="experience" aria-labelledby="exp-heading">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <Briefcase size={13} />
            Experience
          </div>
          <h2 id="exp-heading">The journey so far</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: 12 }}>
            7+ years of shipping, debugging, refactoring, and doing it all again.
          </p>
        </motion.div>

        <div className={styles.timeline} role="list">
          {experience.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                className={styles.item}
                role="listitem"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.dot} />
                <div
                  className={`${styles.card} ${isOpen ? styles.active : ''}`}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  role="button"
                  aria-expanded={isOpen}
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && setOpenId(isOpen ? null : item.id)}
                >
                  <div className={styles['card-header']}>
                    <div className={styles['role-info']}>
                      <div className={styles.role}>{item.role}</div>
                      <div className={styles['company-row']}>
                        <span className={styles.company}>{item.company}</span>
                        <span className={styles['type-badge']}>{item.type}</span>
                      </div>
                      <div className={styles.meta}>
                        <span><Calendar />{item.duration}</span>
                        <span><MapPin />{item.location}</span>
                      </div>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`${styles.chevron} ${isOpen ? styles.open : ''}`}
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className={styles.achievements}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {item.achievements.map((ach, i) => (
                          <div key={i} className={styles.achievement}>
                            <CheckCircle2 />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
