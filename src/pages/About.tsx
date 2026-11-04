import type { CSSProperties } from 'react'
import type { Page } from '../data/navigation'
import { LINKEDIN_URL, portrait, whatsappLink } from '../data/site'
import { Arrow, Eyebrow, FadeImg, LinkedInIcon, PageHero } from '../components/ui'

export function About({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <PageHero
        eyebrow="About Kenneth"
        title="Experience across sectors."
        italic="Clarity across decisions."
        intro="Economist and banker with a Professional Master’s in Banking, Money & International Finance from IRIC and corporate-banking training at Standard Chartered Bank Cameroon."
      />
      <section className="about-story">
        <div className="about-image">
          <FadeImg className="fade" src={portrait} alt="Mbiatem Egbe Kenneth, financial adviser" />
        </div>
        <div className="about-copy">
          <Eyebrow>A broad professional perspective</Eyebrow>
          <h2>Bridging strategy and execution.</h2>
          <p className="lead">
            Mbiatem Egbe Kenneth works where financial judgement, commercial opportunity, and
            institutional realities meet.
          </p>
          <p>
            He trained as an economist at the University of Yaoundé II before specialising in
            banking, money, and international finance at IRIC. His professional grounding came from
            corporate banking at Standard Chartered Bank Cameroon, where he trained in relationship
            management, credit structuring, trade and receivable finance, and compliance.
          </p>
          <p>
            That foundation is analytical as well as practical. His graduate research compared the
            credit risk of local and foreign commercial banks in Cameroon — the same discipline he
            applies today to loan files, portfolio reviews, and credit decisions.
          </p>
          <p>
            Alongside banking, he spent more than a decade in institutional administration at the
            National Agency for Information and Communication Technologies (ANTIC), leading records
            and governance functions and presenting on e-commerce and cybercrime risks to financial
            institutions at national and international forums.
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
          <Eyebrow>Education</Eyebrow>
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
          <Eyebrow>Professional training</Eyebrow>
          <ul>
            <li>
              <strong>Relationship Account Manager programme</strong>
              <span>Standard Chartered Bank Cameroon, 2010–2012</span>
            </li>
            <li>
              <strong>CFA Level I candidate</strong>
              <span>2013</span>
            </li>
            <li>
              <strong>Commercial insurance agent training</strong>
              <span>Alpha Insurance, 2009</span>
            </li>
          </ul>
        </div>
        <div className="credential-col" data-reveal style={{ '--reveal-delay': '180ms' } as CSSProperties}>
          <Eyebrow>Research &amp; forums</Eyebrow>
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
        <Eyebrow>Working principles</Eyebrow>
        <div className="values-grid">
          {[
            ['01', 'Clarity', 'Plain language, disciplined analysis, and clear recommendations.'],
            ['02', 'Integrity', 'Advice grounded in professional judgement and long-term trust.'],
            ['03', 'Practicality', 'Solutions shaped for real operating and market conditions.'],
            ['04', 'Perspective', 'A connected view across disciplines, stakeholders, and borders.'],
          ].map(([number, title, text], index) => (
            <article
              key={number}
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
            >
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
