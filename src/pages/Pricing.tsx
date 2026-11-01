import { consultationFees, flatFees, travelFees, whatsappLink } from '../data/site'
import { Arrow, Eyebrow, PageHero, WhatsAppIcon } from '../components/ui'

export function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear scope."
        italic="Fair professional value."
        intro="Published fees for consultation, project work, and field missions. Every engagement is confirmed in writing before work begins."
      />
      <section className="pricing-section">
        <div className="pricing-intro">
          <Eyebrow>Consultation fees</Eyebrow>
          <h2>Hourly and retainer rates.</h2>
        </div>
        <table className="fee-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Rate (FCFA)</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {consultationFees.map(([service, rate, note]) => (
              <tr key={service}>
                <td>{service}</td>
                <td className={rate === 'Free' ? 'fee-free' : ''}>{rate}</td>
                <td className="fee-note">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="pricing-section alt">
        <div className="pricing-intro">
          <Eyebrow>Specific services</Eyebrow>
          <h2>Flat-fee project work.</h2>
        </div>
        <table className="fee-table">
          <thead>
            <tr>
              <th>Deliverable</th>
              <th>Fee (FCFA)</th>
            </tr>
          </thead>
          <tbody>
            {flatFees.map(([service, rate]) => (
              <tr key={service}>
                <td>{service}</td>
                <td>{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="pricing-section">
        <div className="pricing-intro">
          <Eyebrow>Field missions</Eyebrow>
          <h2>Displacement costs outside Yaoundé.</h2>
          <p>Charged in addition to the daily fee, at cost, for each zone visited.</p>
        </div>
        <table className="fee-table">
          <thead>
            <tr>
              <th>Zone</th>
              <th>Transport</th>
              <th>Lodging & feeding / night</th>
              <th>Local transport / day</th>
            </tr>
          </thead>
          <tbody>
            {travelFees.map(([zone, transport, lodging, local]) => (
              <tr key={zone}>
                <td>{zone}</td>
                <td>{transport}</td>
                <td>{lodging}</td>
                <td>{local}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
        <Eyebrow>How it works</Eyebrow>
        <div className="process-grid">
          {[
            ['01', 'Share the context', 'Tell Kenneth about the challenge, objective, and timeline.'],
            ['02', 'Define the scope', 'Agree the right service, deliverables, and engagement format.'],
            ['03', 'Receive a proposal', 'Review a clear quotation before any professional work begins.'],
          ].map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <a
          className="button primary centered"
          href={whatsappLink('Hello Kenneth, I would like a quotation for your services.')}
        >
          <WhatsAppIcon /> Request a quotation <Arrow />
        </a>
      </section>
    </>
  )
}
