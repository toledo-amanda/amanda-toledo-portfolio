import { profile } from '../data/profile'
import { CopyEmailButton } from './CopyEmailButton'
import { SectionLabel } from './SectionLabel'
import styles from './ContactSection.module.css'

export function ContactSection() {
  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-title"
      data-nav-section
    >
        <div className={styles.contactTopline}>
          <SectionLabel index="05" inverse>
            Contact
          </SectionLabel>
          <span>Available for thoughtful collaborations</span>
        </div>
        <div className={styles.contactContent}>
          <h2 id="contact-title">
            Have a complex product that needs a thoughtful frontend? <em>Let&apos;s talk.</em>
          </h2>
          <div className={styles.contactActions}>
            <a className={styles.emailLink} href={`mailto:${profile.email}`}>
              {profile.email}
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M4 20 20 4M8 4h12v12" />
              </svg>
            </a>
            <CopyEmailButton email={profile.email} />
          </div>
        </div>
        <div className={styles.linkGrid}>
          {profile.socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <span>{link.label}</span>
              <svg aria-hidden="true" viewBox="0 0 20 20">
                <path d="M5 15 15 5M8 5h7v7" />
              </svg>
            </a>
          ))}
          <a href={profile.resumePath} download>
            <span>Download résumé</span>
            <svg aria-hidden="true" viewBox="0 0 20 20">
              <path d="M10 3v11m0 0 4-4m-4 4-4-4M4 17h12" />
            </svg>
          </a>
        </div>
    </section>
  )
}
