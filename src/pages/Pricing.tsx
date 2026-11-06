import type { CSSProperties } from 'react'
import type { Page } from '../data/navigation'
import { consultationFees, flatFees, travelFees, whatsappLink } from '../data/site'
import { Arrow, PageHero, WhatsAppIcon } from '../components/ui'

export function Pricing({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <PageHero
        title="Clear scope."
        italic="Fair professional value."
        intro="Transparent fees for consultation, project work, and field missions — agreed in writing before any work begins. No hidden charges, no surprise invoices."
      />

      <section className="pricing-section">
        <div className="pricing-intro">
          <h2>Choose the rhythm that fits.</h2>
          <p>
            A free first call to understand the question, then hourly advice, focused sessions, or a
            standing monthly retainer. Prices in FCFA.
          </p>
        </div>
        <ul className="price-list">
          {consultationFees.map(([service, rate, note], index) => (
            <li key={service} data-reveal style={{ '--reveal-delay': `${index * 40}ms` } as CSSProperties}>
              <div className="price-name">
                <span>{service}</span>
                <small>{note}</small>
              </div>
              <strong className="price-figure">{rate}</strong>
              <a
                className="price-link"
                href={whatsappLink(`Hello Kenneth, I would like to book: ${service}.`)}
              >
                Book <Arrow diagonal />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="pricing-section alt">
        <div className="pricing-intro">
          <h2>One agreed price for a defined outcome.</h2>
          <p>
            Flat fees for the deliverables clients ask for most — business plans, credit files,
            risk reports, and cooperative structuring. Scope confirmed before work starts.
          </p>
        </div>
        <ul className="fee-list">
          {flatFees.map(([service, rate], index) => (
            <li key={service} data-reveal style={{ '--reveal-delay': `${index * 40}ms` } as CSSProperties}>
              <span>{service}</span>
              <strong>{rate}</strong>
            </li>
          ))}
        </ul>
      </section>

      <section className="pricing-section">
        <div className="pricing-intro">
          <h2>Displacement, clearly stated.</h2>
          <p>
            Charged in addition to the daily fee, at cost, for each zone visited. Missions outside
            Yaoundé are quoted in advance with a proforma invoice.
          </p>
        </div>
        <div className="table-scroll">
          <table className="travel-table">
            <thead>
              <tr>
                <th scope="col">Zone</th>
                <th scope="col">Transport</th>
                <th scope="col">Lodging &amp; feeding / night</th>
                <th scope="col">Local transport / day</th>
              </tr>
            </thead>
            <tbody>
              {travelFees.map(([zone, transport, lodging, local]) => (
                <tr key={zone}>
                  <th scope="row">{zone}</th>
                  <td>
                    <span className="cell-label">Transport</span>
                    {transport}
                  </td>
                  <td>
                    <span className="cell-label">Lodging &amp; feeding / night</span>
                    {lodging}
                  </td>
                  <td>
                    <span className="cell-label">Local transport / day</span>
                    {local}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pricing-conditions">
          <h3>Engagement conditions</h3>
          <ol>
            <li>Transport and lodging are prepaid 48 hours before the mission.</li>
            <li>For missions longer than two days, 50% of the fee is paid in advance.</li>
            <li>Credit success fees are payable only when the credit is disbursed.</li>
            <li>A detailed proforma invoice is issued before any travel begins.</li>
          </ol>
        </div>
        <p className="pricing-note">
          All fees are agreed in writing before work begins. Scope, urgency, and third-party costs
          may affect the final quotation.
        </p>
      </section>

      <section className="process-section">
        <h2>How it works</h2>
        <div className="process-grid">
          {[
            ['01', 'Share the context', 'Tell Kenneth about the challenge, objective, and timeline.'],
            ['02', 'Define the scope', 'Agree the right service, deliverables, and engagement format.'],
            ['03', 'Receive a proposal', 'Review a clear quotation before any professional work begins.'],
          ].map(([number, title, text]) => (
            <article key={number} data-reveal>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="cta-actions">
          <a
            className="button primary"
            href={whatsappLink('Hello Kenneth, I would like a quotation for your services.')}
          >
            <WhatsAppIcon /> Request a quotation
          </a>
          <button className="button quiet" onClick={() => navigate('services')}>
            Compare services <Arrow diagonal />
          </button>
        </div>
      </section>
    </>
  )
}
