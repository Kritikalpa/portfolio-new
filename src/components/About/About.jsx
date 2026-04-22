import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { about, personalInfo } from '../../data/resume';
import styles from './About.module.scss';

const fadeSlide = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={styles.about} id="about" aria-labelledby="about-heading">
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
            About Me
          </div>
          <h2 id="about-heading">The person behind the code</h2>
        </motion.div>

        <div className={styles.grid} ref={ref}>
          {/* Avatar */}
          <motion.div
            className={styles['avatar-wrapper']}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.avatar}>
              <img src="/dp.jpeg" alt={personalInfo.name} className={styles['avatar-img']} />
            </div>
            <div className={styles['floating-badge']}>
              <Briefcase size={16} className={styles.icon} />
              <span>6+ years building the web</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className={styles.content}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div className="section-tag" variants={fadeSlide}>
              <MapPin size={12} />
              India
            </motion.div>
            <motion.h2 variants={fadeSlide}>Who am I?</motion.h2>
            <motion.p className={styles.subtitle} variants={fadeSlide}>
              {personalInfo.title} · NIT Agartala
            </motion.p>
            <motion.p className={styles.bio} variants={fadeSlide}>
              {about.summary}
            </motion.p>
            <motion.div className={styles['fun-fact']} variants={fadeSlide}>
              <span>🛠️</span>
              <span><em>{about.funFact}</em></span>
            </motion.div>

            <motion.div className={styles.highlights} variants={fadeSlide}>
              {about.highlights.map((h, i) => (
                <div key={i} className={styles['highlight-item']}>
                  <CheckCircle2 size={15} />
                  <span>{h}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
