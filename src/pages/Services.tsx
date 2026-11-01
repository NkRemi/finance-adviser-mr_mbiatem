import { services, whatsappLink } from '../data/site'
import { Arrow, Eyebrow, PageHero, WhatsAppIcon } from '../components/ui'

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Strategic advice for"
        italic="decisions that matter."
        intro="Specialist support across finance, trade, risk, banking, agribusiness, and distressed obligations—tailored to your context."
      />
      <section className="services-list">
        {services.map((service) => (
          <article className="service-row" key={service.number}>
            <span className="service-number">{service.number}</span>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href={whatsappLink(`Hello Kenneth, I would like to enquire about: ${service.title}.`)}
              aria-label={`Enquire about ${service.title} on WhatsApp`}
            >
              <Arrow diagonal />
            </a>
          </article>
        ))}
      </section>
      <section className="cta-section compact">
        <Eyebrow>Not sure where to begin?</Eyebrow>
        <h2>
          Start with the challenge.
          <br />
          <em>We’ll define the right engagement.</em>
        </h2>
        <a
          className="button primary"
          href={whatsappLink('Hello Kenneth, I am not sure which service fits my situation.')}
        >
          <WhatsAppIcon /> Discuss your needs
        </a>
      </section>
    </>
  )
}
