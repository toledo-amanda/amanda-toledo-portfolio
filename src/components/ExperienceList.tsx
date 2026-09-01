import { experiences } from '../data/experience'
import { ExperiencePanel } from './ExperiencePanel'
import { SectionTitle } from './SectionTitle'
import styles from './ExperiencePanel.module.css'
import workStyles from './WorkExperience.module.css'

export function ExperienceList() {
  const [featuredExperience, ...remainingExperiences] = experiences

  return (
    <section
      id="experience"
      className={styles.experienceList}
      aria-labelledby="experience-title"
      data-nav-section
    >
      <div className={workStyles.section}>
        <SectionTitle id="experience-title">Work experience</SectionTitle>
        <article
          className={workStyles.featured}
          aria-labelledby={`${featuredExperience.id}-featured-title`}
        >
          <div className={workStyles.experienceGrid}>
            <div className={workStyles.poster}>
              <div className={workStyles.brandRail}>
                <h3
                  id={`${featuredExperience.id}-featured-title`}
                  className={workStyles.companyTitle}
                >
                  {featuredExperience.company}
                </h3>
              </div>
              <div className={workStyles.posterBody}>
                <div className={workStyles.media}>
                  <img
                    src={featuredExperience.imagePath}
                    alt="Glass office buildings representing the MB Labs experience"
                  />
                  <p className={workStyles.roleLabel}>{featuredExperience.role}</p>
                  <p className={workStyles.dateLabel}>{featuredExperience.period}</p>
                </div>
                <div className={workStyles.posterFooter}>
                  <strong>{featuredExperience.company}</strong>
                  <span>Remote, Campinas — Brazil</span>
                  <span>Web, mobile &amp; financial products</span>
                </div>
              </div>
            </div>
            <div className={workStyles.responsibilities}>
              <p className={workStyles.listLabel}>Selected responsibilities</p>
              <ul className={workStyles.bulletList}>
                {featuredExperience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
      {remainingExperiences.map((experience) => (
        <ExperiencePanel key={experience.id} experience={experience} />
      ))}
    </section>
  )
}
