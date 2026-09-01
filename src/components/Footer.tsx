import { GITHUB_URL, LINKEDIN_URL, profile } from '../data/profile'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links} aria-label="Footer navigation">
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
          Linkedin
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer">
          Github
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.resumePath} download>
          Resume
        </a>
      </nav>
      <p>© Copyright 2026 by Amanda Toledo</p>
    </footer>
  )
}
