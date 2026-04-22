import { motion } from 'framer-motion';
import { Star, ExternalLink, Zap, FolderOpen } from 'lucide-react';
import { projects } from '../../data/resume';
import styles from './Projects.module.scss';

const projectEmojis = ['🤖', '🧠', '🩺', '☕', '🎬', '🎮'];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <FolderOpen size={13} />
            Projects
          </div>
          <h2 id="projects-heading">Things I've built</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: 12 }}>
            A collection of work I'm proud of — from AI orchestration to indie game dev.
          </p>
        </motion.div>

        <div className={styles.grid} role="list">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`${styles.card} ${project.featured ? styles.featured : ''}`}
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              aria-label={`Project: ${project.title}`}
            >
              <div className={styles['card-top']}>
                <div
                  className={styles['color-bar']}
                  style={{ background: `${project.color}20`, border: `1px solid ${project.color}30` }}
                >
                  <span role="img" aria-label={project.title}>{projectEmojis[index]}</span>
                </div>
                <div className={styles.badges}>
                  {project.featured && (
                    <span className={styles['featured-badge']}>
                      <Star size={10} /> Featured
                    </span>
                  )}
                  <span className={styles['company-badge']}>{project.company}</span>
                </div>
              </div>

              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.highlight}>
                <Zap size={13} />
                <span>{project.highlight}</span>
              </div>

              <div className={styles['tech-stack']}>
                {project.tech.map(t => (
                  <span key={t} className={styles['tech-tag']}>{t}</span>
                ))}
              </div>

              {/* {(project.productHunt || project.github) && (
                <div className={styles['card-links']}>
                  {project.productHunt && (
                    <a
                      href={project.productHunt}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-${project.id}-link`}
                    >
                      <ExternalLink size={13} /> View on PH
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-${project.id}-github`}
                    >
                      <ExternalLink size={13} /> GitHub
                    </a>
                  )}
                </div>
              )} */}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
