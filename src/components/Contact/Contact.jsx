import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowUp, MessageSquare } from 'lucide-react';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

import { personalInfo } from '../../data/resume';
import styles from './Contact.module.scss';

export default function Contact() {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    window.location.href = `mailto:${personalInfo.email}?subject=Hello from ${name}&body=${message}%0A%0AFrom: ${email}`;
  };

  return (
    <>
      <section className={styles.contact} id="contact" aria-labelledby="contact-heading">
        <div className="container">
          <div className={styles.inner}>
            <motion.div
              className={styles['heading-block']}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag" style={{ display: 'inline-flex', marginBottom: 16 }}>
                <MessageSquare size={13} />
                Contact
              </div>
              <h2 id="contact-heading">Let's build something great</h2>
              <span className={styles.quirk}>
                Got something interesting? Let's build it. 🚀
              </span>
            </motion.div>

            {/* Social buttons */}
            <motion.div
              className={styles.socials}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <a
                className={styles['social-btn']}
                href={`mailto:${personalInfo.email}`}
                id="contact-email-btn"
                aria-label="Send email"
              >
                <Mail size={18} />
                {personalInfo.email}
              </a>
              <a
                className={styles['social-btn']}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-btn"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon />
                LinkedIn
              </a>
              <a
                className={styles['social-btn']}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github-btn"
                aria-label="GitHub profile"
              >
                <GithubIcon />
                GitHub
              </a>
            </motion.div>

            {/* Contact form */}
            <motion.div
              className={styles.form}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className={styles['form-title']}>Send a message</p>
              <p className={styles['form-subtitle']}>
                This will open your email client. Old school, but reliable.
              </p>
              <form onSubmit={handleSubmit} id="contact-form" noValidate>
                <div className={styles['form-row']}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project, idea, or just say hi 👋"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className={styles['submit-btn']}
                  id="contact-submit-btn"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={16} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.logo}>KS.</span>
          <p className={styles['built-with']}>
            Built with caffeine &amp; curiosity{' '}
            <span className={styles.heart}>♥</span>
          </p>
          <button
            className={styles['back-top']}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            id="back-to-top-btn"
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
