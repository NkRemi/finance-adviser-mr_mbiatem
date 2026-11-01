import type { Page } from '../data/navigation'
import { cocoa, portrait, services, WHATSAPP_DISPLAY, whatsappLink } from '../data/site'
import { Arrow, Eyebrow, WhatsAppIcon } from '../components/ui'

export function Home({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Eyebrow light>Strategic advisory · Cameroon & beyond</Eyebrow>
          <h1>
            Strategic financial solutions for
            <br />
            <em>sustainable growth.</em>
          </h1>
          <p className="hero-intro">
            I am <strong>Mbiatem Egbe Kenneth</strong> — financial adviser, economist, banker,
            negotiator, cross-border trade broker, insurance adviser, and counsellor to cocoa
            cooperatives and Common Initiative Groups. I help you secure funding, manage risk, and
            grow across borders.
          </p>
          <div className="hero-actions">
            <a
              className="button gold"
              href={whatsappLink('Hello Kenneth, I would like to book a consultation.')}
            >
              <WhatsAppIcon /> Book a consultation
            </a>
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
          <div className="hero-image-wrap">
            <img src={portrait} alt="Mbiatem Egbe Kenneth, financial adviser" />
          </div>
          <div className="hero-card">
            <span className="hero-card-label">Professional focus</span>
            <strong>Turning financial insight into practical action.</strong>
            <span className="hero-card-line" />
          </div>
          <div className="hero-orbit">
            <span>MEK</span>
          </div>
        </div>
      </section>

      <section className="positioning">
        <div className="positioning-lead">
          <Eyebrow>About</Eyebrow>
          <h2>
            Your trusted partner in
            <br />
            <em>finance, trade & agribusiness.</em>
          </h2>
        </div>
        <div className="positioning-copy">
          <p>
            From banking halls to cocoa farms and cross-border markets, I bridge finance and the
            real economy — combining credit-risk expertise with field experience as a trade broker
            and adviser to cocoa cooperatives. My role is simple: help you get financed, insured,
            and connected to profitable markets, safely.
          </p>
          <button className="text-link" onClick={() => navigate('about')}>
            Discover my approach <Arrow diagonal />
          </button>
        </div>
      </section>

      <section className="expertise-section">
        <div className="section-heading">
          <Eyebrow>Core expertise</Eyebrow>
          <h2>Advice built around the realities of business.</h2>
          <p>Six complementary areas of expertise. One clear standard of professional care.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <Arrow diagonal />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        <button className="button outline centered" onClick={() => navigate('services')}>
          View all services <Arrow />
        </button>
      </section>

      <section className="why-section">
        <div className="why-image">
          <img src={cocoa} alt="Ripe cocoa pods growing on a tree" />
          <span>Finance that understands the field.</span>
        </div>
        <div className="why-copy">
          <Eyebrow light>Why work with Kenneth</Eyebrow>
          <h2>Banker’s insight. Trader’s network.</h2>
          <div className="why-list">
            {[
              [
                'Banker’s insider view',
                'Decades of credit-committee thinking, applied to getting your file approved.',
              ],
              [
                'Agribusiness finance specialist',
                'Deep focus on cocoa cooperatives, CIGs, and agricultural value chains.',
              ],
              [
                'Cross-border corridor expertise',
                'Active brokering across the Cameroon–Nigeria–CEMAC trade corridor.',
              ],
              [
                'Risk, insurance & finance in one',
                'A single adviser connecting funding, protection, and market access.',
              ],
            ].map(([title, text], index) => (
              <div className="why-item" key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <Eyebrow>Start with a conversation</Eyebrow>
        <h2>
          In cocoa, cross-border trade, or need a bank credit?
          <br />
          <em>Let’s make your project bankable.</em>
        </h2>
        <p>
          Share your objectives, constraints, and questions. Together we will structure your
          project so it is bankable, insurable, and profitable.
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
