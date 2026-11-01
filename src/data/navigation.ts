export type Page = 'home' | 'about' | 'services' | 'pricing' | 'contact'

export const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Pricing', page: 'pricing' },
  { label: 'Contact', page: 'contact' },
]

export function hrefFor(page: Page) {
  return page === 'home' ? '#/' : `#/${page}`
}
