import type { Profile } from '../types/portfolio'

// TODO: Replace these public contact placeholders with Amanda's verified details before publishing.
export const EMAIL = 'hello@amandatoledo.dev'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/amanda-toledo'
export const GITHUB_URL = 'https://github.com/amandatoledo'

export const RESUME_PATH = '/resume/amanda-toledo-frontend-engineer.pdf'

export const profile: Profile = {
  name: 'Amanda Toledo',
  monogram: 'AT',
  role: 'Frontend Software Engineer',
  location: 'Vancouver, BC',
  headline: "Hi, I'm Amanda",
  summary:
    'with 6 years of experience building scalable, maintainable web and mobile applications across banking, fintech, and marketplace environments. Experienced in owning user-focused features from technical planning through production rollout, partnering closely with product, design, backend, and cross-functional teams to deliver high-quality, performant, and testable solutions. Known for balancing speed with long-term maintainability, reducing customer friction, and adapting quickly in fast-moving, AI-assisted engineering environments.',
  about:
    'I am a frontend and mobile engineer with more than six years of experience translating complex product requirements into reliable, maintainable interfaces. My background in Psychobiology shaped how I think about user behaviour, clarity, and the relationship between people and systems. I care about accessible experiences, thoughtful architecture, testing, performance, and collaborative delivery.',
  email: EMAIL,
  resumePath: RESUME_PATH,
  // TODO: Verify every metric below against final résumé data before publishing.
  heroMetrics: [
    { value: '6+', label: 'years building products' },
    { value: '32%', label: 'smaller production bundle' },
    { value: '58%', label: 'faster Android builds' },
  ],
  skillGroups: [
    {
      id: 'frontend',
      label: 'Frontend',
      title: 'Product interfaces with durable foundations',
      summary:
        'Architecture that keeps intricate flows understandable, accessible, and maintainable as products evolve.',
      technologies: ['React', 'TypeScript', 'GraphQL', 'Redux', 'Design systems'],
    },
    {
      id: 'mobile',
      label: 'Mobile',
      title: 'Native-feeling journeys across platforms',
      summary:
        'Mobile banking and consumer experiences shaped around performance, release confidence, and platform conventions.',
      technologies: ['React Native', 'Android', 'iOS', 'White-label systems', 'App releases'],
    },
    {
      id: 'quality',
      label: 'Quality & delivery',
      title: 'Confidence from pull request to production',
      summary:
        'Testing, observability, measured performance work, and close collaboration across engineering and product teams.',
      technologies: ['Vitest', 'Testing Library', 'CI/CD', 'Performance', 'Accessibility'],
    },
  ],
  socialLinks: [
    { label: 'LinkedIn', href: LINKEDIN_URL },
    { label: 'GitHub', href: GITHUB_URL },
  ],
}
