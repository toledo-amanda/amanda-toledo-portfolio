import { profile } from '../data/profile'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links} aria-label="Footer navigation">
        {profile.socialLinks.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
            {social.label}
          </a>
        ))}
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.resumePath} download>
          Resume
        </a>
      </nav>
      <p>© Copyright 2026 by Amanda Toledo</p>
    </footer>
  )
}
