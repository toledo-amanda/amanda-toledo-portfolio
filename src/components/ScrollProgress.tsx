import { motion, useReducedMotion, useScroll } from 'motion/react'
import styles from './ScrollProgress.module.css'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className={styles.progress}
      style={{ scaleX: reducedMotion ? 1 : scrollYProgress }}
    />
  )
}
