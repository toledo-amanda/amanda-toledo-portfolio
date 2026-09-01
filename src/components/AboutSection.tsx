import { SectionTitle } from './SectionTitle'
import { TechnologyCarousel } from './TechnologyCarousel'
import styles from './AboutSection.module.css'

export function AboutSection() {
  return (
    <section
      id="about"
      className={styles.about}
      aria-labelledby="about-title"
      data-nav-section
    >
      <SectionTitle id="about-title">About</SectionTitle>
      <TechnologyCarousel />
    </section>
  )
}
