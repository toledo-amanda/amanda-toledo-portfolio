import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'
import { experiences } from './data/experience'
import { RESUME_PATH, profile } from './data/profile'

describe('portfolio', () => {
  it('renders the hero heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: profile.headline })).toBeInTheDocument()
  })

  it('renders the simplified hero without artwork controls or location copy', () => {
    render(<App />)

    const hero = screen.getByRole('heading', { level: 1, name: profile.headline }).closest('section')

    expect(hero).not.toBeNull()
    expect(within(hero as HTMLElement).queryByRole('img')).not.toBeInTheDocument()
    expect(within(hero as HTMLElement).queryByRole('button')).not.toBeInTheDocument()
    expect(within(hero as HTMLElement).queryByText(profile.location)).not.toBeInTheDocument()
    expect(within(hero as HTMLElement).queryByText('Interface systems')).not.toBeInTheDocument()
    expect(within(hero as HTMLElement).queryByText(/49\.28° N/)).not.toBeInTheDocument()
  })

  it('shows every technology icon and shares the work section title style', () => {
    render(<App />)

    const technologyNames = [
      'Android',
      'Git',
      'GraphQL',
      'JavaScript',
      'Jest',
      'Node.js',
      'React',
      'Redux',
      'Storybook',
      'TypeScript',
    ]

    technologyNames.forEach((technology) => {
      expect(screen.getByRole('img', { name: technology })).toBeInTheDocument()
    })

    const aboutTitle = screen.getByRole('heading', { level: 2, name: 'About' })
    const workTitle = screen.getByRole('heading', { level: 2, name: 'Work experience' })

    expect(aboutTitle.className).toBe(workTitle.className)
  })

  it('renders every experience with the shared poster layout and configured image', () => {
    render(<App />)

    experiences.forEach((experience) => {
      const article = screen.getByRole('heading', { name: experience.company }).closest('article')

      expect(article).not.toBeNull()
      expect(within(article as HTMLElement).getByRole('img')).toHaveAttribute(
        'src',
        experience.imagePath,
      )
      expect(within(article as HTMLElement).getAllByRole('listitem')).toHaveLength(
        experience.highlights.length,
      )
    })
  })

  it('renders the featured MB Labs work experience', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Work experience' })).toBeInTheDocument()

    const featuredExperience = screen.getByRole('heading', { name: 'MB Labs' }).closest('article')
    expect(featuredExperience).not.toBeNull()
    expect(
      within(featuredExperience as HTMLElement).getByText(
        '09/2023 - Present',
      ),
    ).toBeInTheDocument()
    expect(
      within(featuredExperience as HTMLElement).getByText(
        'Frontend Engineer (Web and Mobile)',
      ),
    ).toBeInTheDocument()
    expect(within(featuredExperience as HTMLElement).getAllByRole('listitem')).toHaveLength(8)
  })

  it('uses the same resume path in the header and footer', () => {
    render(<App />)

    const resumeLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href') === RESUME_PATH)

    expect(resumeLinks).toHaveLength(2)
    resumeLinks.forEach((link) => expect(link).toHaveAttribute('download'))
  })

  it('marks external social links safely', () => {
    render(<App />)

    profile.socialLinks.forEach((social) => {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    })
  })

  it('opens and closes the mobile navigation', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByLabelText('Open navigation'))
    expect(await screen.findByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close navigation' }))
    await waitFor(() => {
      expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    })
  })
})
