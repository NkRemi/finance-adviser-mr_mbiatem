import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BookingProvider } from './components/Booking'
import { navItems, pageTitles, type Page } from './data/navigation'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Pricing } from './pages/Pricing'
import { Contact } from './pages/Contact'

export default function App() {
  const getPage = (): Page => {
    const hash = window.location.hash.replace('#/', '') as Page
    return navItems.some((item) => item.page === hash) ? hash : 'home'
  }
  const [page, setPage] = useState<Page>(getPage)

  useEffect(() => {
    const onHash = () => setPage(getPage())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    document.title = pageTitles[page]
  }, [page])

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-reveal]:not(.revealed)'))
    if (!targets.length) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [page])

  const navigate = (next: Page) => {
    if (next === 'home') {
      history.pushState(null, '', window.location.pathname)
      setPage('home')
    } else {
      window.location.hash = `/${next}`
      setPage(next)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <BookingProvider>
      <div className="app-shell">
        <a
          className="skip-link"
          href="#main"
          onClick={(event) => {
            event.preventDefault()
            document.getElementById('main')?.focus()
          }}
        >
          Skip to content
        </a>
        <Header page={page} navigate={navigate} />
        <main id="main" tabIndex={-1} key={page} className="page-enter">
          {page === 'home' && <Home navigate={navigate} />}
          {page === 'about' && <About navigate={navigate} />}
          {page === 'services' && <Services navigate={navigate} />}
          {page === 'pricing' && <Pricing navigate={navigate} />}
          {page === 'contact' && <Contact />}
        </main>
        <Footer navigate={navigate} />
      </div>
    </BookingProvider>
  )
}
