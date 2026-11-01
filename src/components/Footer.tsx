import { hrefFor, navItems, type Page } from '../data/navigation'
import { WHATSAPP_DISPLAY, whatsappLink } from '../data/site'
import { Mark, WhatsAppIcon } from './ui'

export function Footer({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Mark />
          <div>
            <strong>Mbiatem Egbe Kenneth</strong>
            <p>Finance. Trade. Risk. Agribusiness.</p>
          </div>
        </div>
        <div className="footer-note">
          <span>Let’s discuss your next move.</span>
          <a
            className="wa-inline"
            href={whatsappLink('Hello Kenneth, I would like to discuss an advisory engagement.')}
          >
            <WhatsAppIcon /> {WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mbiatem Egbe Kenneth. All rights reserved.</p>
        <div>
          {navItems.slice(1).map((item) => (
            <a
              key={item.page}
              href={hrefFor(item.page)}
              onClick={(e) => {
                e.preventDefault()
                navigate(item.page)
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <p className="footer-disclaimer">
        Advisory services only. Engagements begin with a written scope and agreed fees. Nothing on
        this site constitutes a binding offer, credit approval, or insurance contract.
      </p>
    </footer>
  )
}
