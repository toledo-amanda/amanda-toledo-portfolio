export interface MetricData {
  value: string
  label: string
}

export interface SkillGroup {
  id: 'frontend' | 'mobile' | 'quality'
  label: string
  title: string
  summary: string
  technologies: readonly string[]
}

export interface SocialLink {
  label: 'LinkedIn' | 'GitHub'
  href: string
}

export interface Profile {
  name: string
  monogram: string
  role: string
  location: string
  headline: string
  summary: string
  about: string
  email: string
  resumePath: string
  heroMetrics: readonly MetricData[]
  skillGroups: readonly SkillGroup[]
  socialLinks: readonly SocialLink[]
}

export interface Experience {
  id: string
  number: string
  company: string
  imagePath: string
  role: string
  period: string
  narrative: string
  highlights: readonly string[]
  impact: readonly MetricData[]
  technologies: readonly string[]
  theme: 'light' | 'dark'
}

export type NavigationSection = 'about' | 'experience' | 'contact'
