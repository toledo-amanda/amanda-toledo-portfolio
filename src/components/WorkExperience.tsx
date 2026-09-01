import type { Experience } from '../types/portfolio'
import styles from './WorkExperience.module.css'

interface WorkExperienceProps {
  experience: Experience
  prioritizeImage?: boolean
}

export function WorkExperience({ experience, prioritizeImage = false }: WorkExperienceProps) {
  return (
    <article
      id={experience.id}
      className={styles.featured}
      aria-labelledby={`${experience.id}-title`}
    >
      <div className={styles.experienceGrid}>
        <div className={styles.poster}>
          <div className={styles.brandRail}>
            <h3 id={`${experience.id}-title`} className={styles.companyTitle}>
              {experience.company}
            </h3>
          </div>
          <div className={styles.posterBody}>
            <div className={styles.media}>
              <img
                src={experience.imagePath}
                alt={experience.imageAlt}
                loading={prioritizeImage ? 'eager' : 'lazy'}
                decoding="async"
              />
              <p className={styles.roleLabel}>{experience.role}</p>
              <p className={styles.dateLabel}>{experience.period}</p>
            </div>
            <div className={styles.posterFooter}>
              <strong>{experience.company}</strong>
              {experience.posterDetails.map((detail) => (
                <span key={detail}>{detail}</span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.responsibilities}>
          <p className={styles.listLabel}>Selected responsibilities</p>
          <ul className={styles.bulletList}>
            {experience.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
