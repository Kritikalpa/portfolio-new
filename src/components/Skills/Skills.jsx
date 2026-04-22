import { motion } from 'framer-motion';
import { Code2, Server, Wrench, Brain, Cpu, Database, Layout, Layers } from 'lucide-react';
import { skills } from '../../data/resume';
import styles from './Skills.module.scss';

const categoryIcons = {
  Frontend: Layout,
  Backend: Server,
  'AI & Data': Brain,
  'Architecture & Tools': Layers,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const pillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } },
};

export default function Skills() {
  return (
    <section className={styles.skills} id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <Code2 size={13} />
            Tech Stack
          </div>
          <h2 id="skills-heading">What I work with</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: 12 }}>
            My ever-growing toolkit — curated, battle-tested, and occasionally abused.
          </p>
        </motion.div>

        <div className={styles.categories}>
          {Object.entries(skills).map(([category, items]) => {
            const Icon = categoryIcons[category];
            return (
              <motion.div
                key={category}
                className={styles.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3>
                  {Icon && <Icon size={15} className={styles['cat-icon']} />}
                  {category}
                </h3>
                <motion.div
                  className={styles.pills}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  {items.map(skill => (
                    <motion.span
                      key={skill}
                      className={styles.pill}
                      variants={pillVariants}
                      whileHover={{ scale: 1.07, y: -3 }}
                    >
                      <span className={styles['pill-dot']} />
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
