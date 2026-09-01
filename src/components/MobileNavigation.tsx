import { Drawer } from '@base-ui/react/drawer'
import { useState } from 'react'
import { navigationItems } from '../data/navigation'
import { profile } from '../data/profile'
import type { NavigationSection } from '../types/portfolio'
import styles from './SiteHeader.module.css'

interface MobileNavigationProps {
  activeSection: NavigationSection | null
  resumePath: string
}

export function MobileNavigation({ activeSection, resumePath }: MobileNavigationProps) {
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root open={open} onOpenChange={setOpen} swipeDirection="right">
      <Drawer.Trigger className={styles.menuButton} aria-label="Open navigation">
        <span />
        <span />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop className={styles.drawerBackdrop} />
        <Drawer.Viewport className={styles.drawerViewport}>
          <Drawer.Popup className={styles.drawerPopup}>
            <Drawer.Content className={styles.drawerContent}>
              <div className={styles.drawerTopline}>
                <Drawer.Title className={styles.drawerTitle}>Navigate</Drawer.Title>
                <Drawer.Close className={styles.closeButton} aria-label="Close navigation">
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M5 5l14 14M19 5 5 19" />
                  </svg>
                </Drawer.Close>
              </div>
              <Drawer.Description className="srOnly">
                Navigate Amanda Toledo's portfolio.
              </Drawer.Description>
              <nav aria-label="Mobile navigation" className={styles.mobileNavLinks}>
                {navigationItems.map((item, index) => (
                  <a
                    key={item.id}
                    href={item.href}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span>0{index + 1}</span>
                    {item.label}
                  </a>
                ))}
                <a href={resumePath} download onClick={() => setOpen(false)}>
                  <span>04</span>
                  Résumé
                </a>
              </nav>
              <p className={styles.drawerNote}>
                {profile.role} · {profile.location}
              </p>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
