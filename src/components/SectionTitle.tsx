import type { ReactNode } from 'react'
import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  children: ReactNode
  id: string
}

export function SectionTitle({ children, id }: SectionTitleProps) {
  return (
    <h2 id={id} className={styles.title}>
      {children}
    </h2>
  )
}
