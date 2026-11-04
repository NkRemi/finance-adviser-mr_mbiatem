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

export const pageTitles: Record<Page, string> = {
  home: 'Mbiatem Egbe Kenneth — Financial Adviser in Cameroon | Finance, Trade & Agribusiness',
  about: 'About Kenneth — Economist & Banker in Cameroon',
  services: 'Services — Finance, Trade, Risk & Agribusiness Advisory',
  pricing: 'Pricing & Fees — Advisory Services in Cameroon',
  contact: 'Contact — Book a consultation with Kenneth',
}
