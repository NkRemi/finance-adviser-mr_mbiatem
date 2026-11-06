import type { CSSProperties } from 'react'
import type { Page } from '../data/navigation'
import { LINKEDIN_URL, portrait, whatsappLink } from '../data/site'
import { Arrow, FadeImg, LinkedInIcon, PageHero } from '../components/ui'

export function About({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <PageHero
        title="Experience across sectors."
        italic="Clarity across decisions."
        intro="Economist and banker with a Professional Master’s in Banking, Money & International Finance from IRIC and hands-on corporate-banking experience across credit, trade finance, cooperative finance, and compliance."
      />
      <section className="about-story">
        <div className="about-image">
          <FadeImg className="fade" src={portrait} alt="Mbiatem Egbe Kenneth, financial adviser" />
        </div>
        <div className="about-copy">
          <h2>Bridging strategy and execution.</h2>
          <p className="lead">
            Mbiatem Egbe Kenneth works where financial judgement, commercial opportunity, and
            institutional realities meet.
          </p>
          <p>
            He trained as an economist before specialising in banking, money, and international
            finance. His professional grounding came from corporate banking, with formal training in
            relationship management, credit structuring, trade and receivable finance, and
            compliance.
          </p>
          <p>
            That foundation is analytical as well as practical. His graduate research examined credit
            risk in commercial banking — the same discipline he applies today to loan files,
            portfolio reviews, and credit decisions.
          </p>
          <p>
            He also brings more than a decade of institutional experience in governance and
            digital-economy policy, including presenting on e-commerce and cybercrime risks to
            financial institutions at international forums.
          </p>
          <p>
            Whether structuring a loan file, evaluating credit risk, facilitating a cross-border
            transaction, reviewing insurance needs, or advising a cocoa cooperative, the objective
            remains the same: make complexity understandable and action possible.
          </p>
          <a className="wa-inline about-linkedin" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <LinkedInIcon /> View full professional profile on LinkedIn
          </a>
        </div>
      </section>
      <section className="credentials">
        <div className="credential-col" data-reveal>
          <h2 className="column-label">Education</h2>
          <ul>
            <li>
              <strong>Professional Master’s in Banking, Money &amp; International Finance</strong>
              <span>IRIC, 2012</span>
            </li>
            <li>
              <strong>Master’s in Economic Sciences</strong>
              <span>University of Yaoundé II, 2007</span>
            </li>
            <li>
              <strong>Bachelor’s in Economic Sciences</strong>
              <span>University of Yaoundé II, 2005</span>
            </li>
          </ul>
        </div>
        <div className="credential-col" data-reveal style={{ '--reveal-delay': '90ms' } as CSSProperties}>
          <h2 className="column-label">Professional training</h2>
          <ul>
            <li>
              <strong>Relationship Account Manager programme</strong>
              <span>Corporate banking programme, 2010–2012</span>
            </li>
            <li>
              <strong>CFA Level I candidate</strong>
              <span>2013</span>
            </li>
            <li>
              <strong>Commercial insurance agent training</strong>
              <span>2009</span>
            </li>
          </ul>
        </div>
        <div className="credential-col" data-reveal style={{ '--reveal-delay': '180ms' } as CSSProperties}>
          <h2 className="column-label">Research &amp; forums</h2>
          <ul>
            <li>
              <strong>
                “A comparative analysis of the credit risk of local and foreign commercial banks in
                Cameroon”
              </strong>
              <span>Master’s thesis, 2012</span>
            </li>
            <li>
              <strong>ITU Conference &amp; Exhibition, Bangkok</strong>
              <span>2016</span>
            </li>
            <li>
              <strong>AFRINIX, Lagos and Angola</strong>
              <span>2017, 2019</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="values">
        <h2 className="values-title">Working principles</h2>
        <div className="values-grid">
          {[
            ['Clarity', 'Plain language, disciplined analysis, and clear recommendations.'],
            ['Integrity', 'Advice grounded in professional judgement and long-term trust.'],
            ['Practicality', 'Solutions shaped for real operating and market conditions.'],
            ['Perspective', 'A connected view across disciplines, stakeholders, and borders.'],
          ].map(([title, text], index) => (
            <article
              key={title}
              data-reveal
              style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
            >
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="inline-cta">
        <h2>Bring a clearer perspective to your next decision.</h2>
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
