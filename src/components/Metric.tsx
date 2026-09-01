import type { MetricData } from '../types/portfolio'
import styles from './Metric.module.css'

interface MetricProps extends MetricData {
  inverse?: boolean
}

export function Metric({ value, label, inverse = false }: MetricProps) {
  return (
    <div className={inverse ? styles.inverse : undefined}>
      <strong className={styles.value}>{value}</strong>
      <span className={styles.label}>{label}</span>
    </div>
  )
}
