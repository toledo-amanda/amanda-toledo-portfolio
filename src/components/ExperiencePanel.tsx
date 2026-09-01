import { Collapsible } from '@base-ui/react/collapsible'
import clsx from 'clsx'
import type { Experience } from '../types/portfolio'
import { Metric } from './Metric'
import { SectionLabel } from './SectionLabel'
import styles from './ExperiencePanel.module.css'

interface ExperiencePanelProps {
  experience: Experience
}

function ExperienceDetails({ experience }: ExperiencePanelProps) {
  return (
    <div className={styles.detailsGrid}>
      <div>
        <p className={styles.detailLabel}>Selected outcomes</p>
        <ul className={styles.highlights}>
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className={styles.detailLabel}>Technology</p>
        <ul className={styles.technologyList}>
          {experience.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function ExperiencePanel({ experience }: ExperiencePanelProps) {
  const inverse = experience.theme === 'dark'

  return (
    <article
      id={experience.id}
      className={clsx(styles.panel, inverse ? styles.dark : styles.light)}
      aria-labelledby={`${experience.id}-title`}
    >
      <div className={styles.topline}>
        <SectionLabel index={experience.number} inverse={inverse}>
          Case study
        </SectionLabel>
        <p>{experience.period}</p>
      </div>

      <div className={styles.caseGrid}>
        <div className={styles.identity}>
          <p className={styles.company}>{experience.company}</p>
          <h2 id={`${experience.id}-title`}>{experience.role}</h2>
        </div>
        <div className={styles.narrative}>
          <p>{experience.narrative}</p>
        </div>
      </div>

      <div className={styles.impactGrid} aria-label={`${experience.company} impact`}>
        {experience.impact.map((metric) => (
          <Metric key={metric.label} {...metric} inverse={inverse} />
        ))}
      </div>

      <div className={styles.desktopDetails}>
        <ExperienceDetails experience={experience} />
      </div>

      <Collapsible.Root className={styles.mobileDetails}>
        <Collapsible.Trigger className={styles.detailsTrigger}>
          View outcomes &amp; technology
          <svg aria-hidden="true" viewBox="0 0 16 16">
            <path d="M3 6l5 5 5-5" />
          </svg>
        </Collapsible.Trigger>
        <Collapsible.Panel className={styles.detailsPanel}>
          <ExperienceDetails experience={experience} />
        </Collapsible.Panel>
      </Collapsible.Root>
    </article>
  )
}
