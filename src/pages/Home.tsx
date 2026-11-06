import type { CSSProperties } from 'react'
import type { Page } from '../data/navigation'
import { cocoa, portrait, services, WHATSAPP_DISPLAY, whatsappLink } from '../data/site'
import { Arrow, FadeImg, WhatsAppIcon } from '../components/ui'
import { useBooking } from '../components/Booking'

export function Home({ navigate }: { navigate: (page: Page) => void }) {
  const book = useBooking()
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>
            Strategic financial solutions for
            <br />
            <em>sustainable growth.</em>
          </h1>
          <p className="hero-intro">
            I am <strong>Mbiatem Egbe Kenneth</strong>, an economist and banker with a Professional
            Master’s in Banking, Money &amp; International Finance from IRIC, and hands-on
            corporate-banking experience across credit, trade finance, cooperative finance, and
            compliance. I help entrepreneurs, cooperatives, and institutions secure funding, manage
            credit and trade risk, and grow across borders.
          </p>
          <div className="hero-actions">
            <button type="button" className="button gold" onClick={book}>
              Book a consultation <Arrow />
            </button>
            <button className="button quiet" onClick={() => navigate('services')}>
              Explore services <Arrow diagonal />
            </button>
          </div>
          <div className="hero-trust">
            <span>Trusted perspective across</span>
            <div>
              <b>Finance</b>
              <b>Trade</b>
              <b>Agribusiness</b>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <figure className="hero-portrait">
            <FadeImg
              className="hero-photo fade"
              src={portrait}
              alt="Mbiatem Egbe Kenneth, financial adviser"
            />
            <figcaption className="hero-card">
              <span className="hero-card-label">Professional focus</span>
              <strong>Turning financial insight into practical action.</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="positioning">
        <div className="positioning-lead">
          <h2>
            Your trusted partner in
            <br />
            <em>finance, trade &amp; agribusiness.</em>
          </h2>
        </div>
        <div className="positioning-copy">
          <p>
            My work sits where financial analysis meets the real economy. I bring the rigour of
            formal credit-risk research. My graduate thesis compared the credit risk of local and
            foreign banks in Cameroon, together with practical experience in corporate banking,
            institutional governance, and trade across the Cameroon–Nigeria–CEMAC corridor. The
            goal is simple: financing that is bankable, protection that is adequate, and decisions
            that hold up under scrutiny.
          </p>
          <button className="text-link" onClick={() => navigate('about')}>
            Discover my approach <Arrow diagonal />
          </button>
        </div>
      </section>

      <section className="expertise-section">
        <div className="section-heading" data-reveal>
          <h2>Advice built around the realities of business.</h2>
          <p>Six complementary areas of expertise. One clear standard of professional care.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <a
              className="service-card"
              key={service.number}
              href="#/services"
              onClick={(event) => {
                event.preventDefault()
                navigate('services')
              }}
              aria-label={`Explore ${service.title} on the services page`}
              data-reveal
              style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
            >
              <FadeImg className="service-bg fade" src={service.image} alt="" />
              <div className="service-top">
                <span>{service.number}</span>
                <Arrow diagonal />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </a>
          ))}
        </div>
        <button className="button outline centered" onClick={() => navigate('services')}>
          View all services <Arrow />
        </button>
      </section>

      <section className="why-section">
        <div className="why-image">
          <FadeImg className="fade" src={cocoa} alt="Ripe cocoa pods growing on a tree" />
          <span>Finance that understands the field.</span>
        </div>
        <div className="why-copy">
          <h2>Banker’s insight. Trader’s network.</h2>
          <div className="why-list">
            {[
              [
                'Bank-trained, not self-taught',
                'Corporate relationship-banking training, applied to how credit committees actually read your file.',
              ],
              [
                'Research-grade credit insight',
                'Graduate research comparing the credit risk of local and foreign banks in Cameroon.',
              ],
              [
                'Cross-border corridor expertise',
                'Active brokering across the Cameroon–Nigeria–CEMAC trade corridor.',
              ],
              [
                'Finance, protection & governance in one',
                'A single adviser connecting funding, insurance, and compliance, including OHADA and CEMAC requirements.',
              ],
            ].map(([title, text]) => (
              <div className="why-item" key={title} data-reveal>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" data-reveal>
        <h2>
          In cocoa, cross-border trade, or need a bank credit?
          <br />
          <em>Let’s make your project bankable.</em>
        </h2>
        <p>
          Tell me your objective: financing, insurance, a cooperative structure, or a difficult
          debt file. You will leave the first conversation with a clear read on what is achievable,
          what it will cost, and the next step that moves it forward.
        </p>
        <div className="cta-actions">
          <a
            className="button primary"
            href={whatsappLink('Hello Kenneth, I would like to discuss my project.')}
          >
            <WhatsAppIcon /> WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <button className="button quiet" onClick={() => navigate('contact')}>
            Enquiry form <Arrow diagonal />
          </button>
        </div>
      </section>
    </>
  )
}
