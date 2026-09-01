import type { NavigationSection } from '../types/portfolio'

export const navigationItems: ReadonlyArray<{
  label: string
  href: string
  id: NavigationSection
}> = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]
