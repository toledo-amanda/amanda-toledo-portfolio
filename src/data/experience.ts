import type { Experience } from '../types/portfolio'

// TODO: Verify dates, company wording, and every metric before publishing.
export const experiences: readonly Experience[] = [
  {
    id: 'mb-labs-travelex',
    number: '01',
    company: 'MB Labs',
    imagePath: '/images/travelex.jpg',
    role: 'Frontend Engineer (Web and Mobile)',
    period: '09/2023 - Present',
    narrative:
      'Builds and maintains mobile banking, internet banking, and internal financial products involving payment flows, white-label configurations, backend integrations, releases, testing, security, and performance.',
    highlights: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum vitae.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos ratione.',
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius.',
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.',
    ],
    impact: [
      { value: '32%', label: 'smaller production bundle' },
      { value: '58%', label: 'faster Android builds' },
    ],
    technologies: ['React', 'React Native', 'TypeScript', 'Android', 'Testing'],
    theme: 'dark',
  },
  {
    id: 'fretebras',
    number: '02',
    company: 'Fretebras',
    imagePath: '/images/fretebras.jpg',
    role: 'Frontend Engineer',
    period: 'Dates to confirm',
    narrative:
      'Developed data-heavy marketplace interfaces and dashboards within a micro-frontend architecture and shared design system.',
    highlights: [
      'Built interfaces used by more than 17,000 transportation companies',
      'Contributed to products serving hundreds of thousands of drivers',
      'Worked with React, TypeScript, Redux, micro-frontends, and a design system',
      'Added test coverage to critical workflows',
    ],
    impact: [{ value: '17K+', label: 'transportation companies served' }],
    technologies: ['React', 'TypeScript', 'Redux', 'Micro-frontends', 'Design systems'],
    theme: 'light',
  },
  {
    id: 'streaming-platform',
    number: '03',
    company: 'Streaming platform / Rede Bandeirantes',
    imagePath: '/images/hirix.jpg',
    role: 'Frontend Engineer',
    period: 'Dates to confirm',
    narrative:
      'Developed React applications for web and Smart TV environments, including authentication, content search, remote-control navigation, GraphQL integrations, and performance improvements.',
    highlights: [
      'Improved initial load performance by approximately 38%',
      'Built interfaces for web and television navigation',
      'Worked with React, TypeScript, Apollo Client, GraphQL, Node, and MongoDB',
      'Integrated authentication, content discovery, and external services',
    ],
    impact: [{ value: '38%', label: 'faster initial load' }],
    technologies: ['React', 'TypeScript', 'Apollo Client', 'GraphQL', 'Node', 'MongoDB'],
    theme: 'dark',
  },
]
