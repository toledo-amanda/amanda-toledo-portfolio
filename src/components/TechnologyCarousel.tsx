import styles from './TechnologyCarousel.module.css'

const technologies = [
  { name: 'Android', path: '/icons/android.svg' },
  { name: 'Git', path: '/icons/git.svg' },
  { name: 'GraphQL', path: '/icons/graphql.svg' },
  { name: 'JavaScript', path: '/icons/javascript.svg' },
  { name: 'Jest', path: '/icons/jest.svg' },
  { name: 'Node.js', path: '/icons/node.svg' },
  { name: 'React', path: '/icons/react.svg' },
  { name: 'Redux', path: '/icons/redux.svg' },
  { name: 'Storybook', path: '/icons/storybook.svg' },
  { name: 'TypeScript', path: '/icons/typescript.svg' },
] as const

interface TechnologyGroupProps {
  duplicate?: boolean
}

function TechnologyGroup({ duplicate = false }: TechnologyGroupProps) {
  return (
    <ul className={styles.group} aria-hidden={duplicate || undefined}>
      {technologies.map((technology) => (
        <li key={technology.name}>
          <img
            src={technology.path}
            alt={duplicate ? '' : technology.name}
            width="128"
            height="128"
          />
        </li>
      ))}
    </ul>
  )
}

export function TechnologyCarousel() {
  return (
    <div className={styles.carousel} aria-label="Technology stack">
      <div className={styles.track}>
        <TechnologyGroup />
        <TechnologyGroup duplicate />
      </div>
    </div>
  )
}
