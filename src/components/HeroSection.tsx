import { profile } from '../data/profile'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.canvas}>
        <div className={styles.contentPanel}>
          <div className={styles.heroContent}>
            <h1 id="hero-title">{profile.headline}</h1>
            <p className={styles.role}>{profile.role}</p>
            <p className={styles.summary}>{profile.summary}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
