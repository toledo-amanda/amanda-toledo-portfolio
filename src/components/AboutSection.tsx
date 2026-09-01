import { Tabs } from '@base-ui/react/tabs'
import { profile } from '../data/profile'
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

      <div className={styles.aboutContent}>
        <div className={styles.introduction}>
          <h3>Engineering for the space between people and systems.</h3>
          <p>{profile.about}</p>
        </div>

        <Tabs.Root className={styles.tabs} defaultValue={profile.skillGroups[0].id}>
          <div className={styles.tabHeader}>
            <span>Capabilities / working set</span>
            <span>03 disciplines</span>
          </div>
          <Tabs.List className={styles.tabList} aria-label="Engineering capabilities">
            {profile.skillGroups.map((group, index) => (
              <Tabs.Tab key={group.id} className={styles.tab} value={group.id}>
                <span>0{index + 1}</span>
                {group.label}
              </Tabs.Tab>
            ))}
            <Tabs.Indicator className={styles.indicator} />
          </Tabs.List>
          <div className={styles.panelViewport}>
            {profile.skillGroups.map((group) => (
              <Tabs.Panel key={group.id} className={styles.panel} value={group.id}>
                <p className={styles.panelKicker}>{group.label}</p>
                <h3>{group.title}</h3>
                <p className={styles.panelSummary}>{group.summary}</p>
                <ul aria-label={`${group.label} technologies`}>
                  {group.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </Tabs.Panel>
            ))}
          </div>
        </Tabs.Root>
      </div>

      <TechnologyCarousel />
    </section>
  )
}
