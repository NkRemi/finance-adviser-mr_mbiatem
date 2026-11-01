import type { Page } from '../data/navigation'
import { portrait, whatsappLink } from '../data/site'
import { Arrow, Eyebrow, PageHero } from '../components/ui'

export function About({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <PageHero
        eyebrow="About Kenneth"
        title="Experience across sectors."
        italic="Clarity across decisions."
        intro="An economist, banker, adviser, negotiator, and broker bringing a multidisciplinary lens to high-stakes financial and commercial questions."
      />
      <section className="about-story">
        <div className="about-image">
          <img src={portrait} alt="Mbiatem Egbe Kenneth, financial adviser" />
        </div>
        <div className="about-copy">
          <Eyebrow>A broad professional perspective</Eyebrow>
          <h2>Bridging strategy and execution.</h2>
          <p className="lead">
            Mbiatem Egbe Kenneth works where financial judgement, commercial opportunity, and
            institutional realities meet.
          </p>
          <p>
            His work supports entrepreneurs, businesses, lenders, cooperatives, Common Initiative
            Groups, and trading partners who need more than a narrow technical answer. He combines
            economic reasoning with practical banking, negotiation, risk, and agribusiness
            perspectives.
          </p>
          <p>
            Whether structuring a loan file, evaluating credit risk, facilitating a cross-border
            transaction, reviewing insurance needs, or advising a cocoa cooperative, the objective
            remains the same: make complexity understandable and action possible.
          </p>
        </div>
      </section>
      <section className="values">
        <Eyebrow>Working principles</Eyebrow>
        <div className="values-grid">
          {[
            ['01', 'Clarity', 'Plain language, disciplined analysis, and clear recommendations.'],
            ['02', 'Integrity', 'Advice grounded in professional judgement and long-term trust.'],
            ['03', 'Practicality', 'Solutions shaped for real operating and market conditions.'],
            ['04', 'Perspective', 'A connected view across disciplines, stakeholders, and borders.'],
          ].map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="inline-cta">
        <div>
          <Eyebrow light>Work together</Eyebrow>
          <h2>Bring a clearer perspective to your next decision.</h2>
        </div>
        <a
          className="button gold"
          href={whatsappLink('Hello Kenneth, I would like to book a consultation.')}
        >
          Book a consultation <Arrow />
        </a>
      </section>
    </>
  )
}
