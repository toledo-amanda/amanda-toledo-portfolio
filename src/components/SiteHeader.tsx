import { useEffect, useState } from 'react'
import { navigationItems } from '../data/navigation'
import { profile } from '../data/profile'
import type { NavigationSection } from '../types/portfolio'
import { MobileNavigation } from './MobileNavigation'
import styles from './SiteHeader.module.css'

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<NavigationSection | null>(null)

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-nav-section]'),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id as NavigationSection)
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.1, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={styles.header}>
      <nav className={styles.desktopNav} aria-label="Primary navigation">
        <div className={styles.navGroup}>
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className={styles.resumeLink} href={profile.resumePath} download>
            Résumé
          </a>
        </div>
      </nav>
      <MobileNavigation activeSection={activeSection} resumePath={profile.resumePath} />
    </header>
  )
}
