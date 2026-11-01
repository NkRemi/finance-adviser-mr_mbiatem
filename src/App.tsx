import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { navItems, type Page } from './data/navigation'
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
    <div className="app-shell">
      <Header page={page} navigate={navigate} />
      <main key={page} className="page-enter">
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'about' && <About navigate={navigate} />}
        {page === 'services' && <Services />}
        {page === 'pricing' && <Pricing />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}
