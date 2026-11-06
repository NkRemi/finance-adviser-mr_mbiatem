import { useEffect, useState } from 'react'
import { hrefFor, navItems, type Page } from '../data/navigation'
import { Arrow, Mark } from './ui'
import { useBooking } from './Booking'

export function Header({ page, navigate }: { page: Page; navigate: (page: Page) => void }) {
  const [open, setOpen] = useState(false)
  const book = useBooking()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="brand"
          href={hrefFor('home')}
          onClick={(e) => {
            e.preventDefault()
            navigate('home')
          }}
          aria-label="Mbiatem Egbe Kenneth — go to homepage"
        >
          <Mark />
          <span>
            <strong>Mbiatem Egbe Kenneth</strong>
            <small>Financial Adviser</small>
          </span>
        </a>
        <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.page}
              href={hrefFor(item.page)}
              className={page === item.page ? 'nav-link active' : 'nav-link'}
              aria-current={page === item.page ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault()
                navigate(item.page)
                setOpen(false)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button type="button" className="header-cta" onClick={book}>
          Book a consultation <Arrow />
        </button>
        <button
          className={open ? 'menu-button open' : 'menu-button'}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
