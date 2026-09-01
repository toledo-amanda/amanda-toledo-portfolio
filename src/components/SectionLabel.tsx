import clsx from 'clsx'
import styles from './SectionLabel.module.css'

interface SectionLabelProps {
  children: string
  index: string
  inverse?: boolean
}

export function SectionLabel({ children, index, inverse = false }: SectionLabelProps) {
  return (
    <p className={clsx(styles.label, inverse && styles.inverse)}>
      <span aria-hidden="true">{index}</span>
      {children}
    </p>
  )
}
