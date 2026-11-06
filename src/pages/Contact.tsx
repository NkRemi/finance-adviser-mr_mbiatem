import { FormEvent, useState } from 'react'
import { EMAIL, LINKEDIN_URL, services, WHATSAPP_DISPLAY, whatsappLink } from '../data/site'
import { Arrow, LinkedInIcon, WhatsAppIcon } from '../components/ui'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [link, setLink] = useState('')

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const service = String(data.get('service') || '')
    const message = String(data.get('message') || '')
    setLink(
      whatsappLink(
        `Enquiry from ${name} (${email})\nService: ${service || 'Not specified'}\n\n${message}`,
      ),
    )
    setSent(true)
  }

  return (
    <>
      <section className="contact-page">
        <div className="contact-intro">
          <h1>
            Let’s move the
            <br />
            <em>conversation forward.</em>
          </h1>
          <p>
            Share a little about your challenge or opportunity. Kenneth will review your enquiry
            and identify the best next step.
          </p>
          <div className="contact-details">
            <div>
              <span>WhatsApp &amp; calls</span>
              <strong>
                <a href={whatsappLink()} className="plain-link">
                  {WHATSAPP_DISPLAY}
                </a>
              </strong>
              <small>Initial 30-minute diagnostic call is free</small>
            </div>
            <div>
              <span>Areas served</span>
              <strong>Cameroon &amp; cross-border</strong>
              <small>Remote and in-person engagements</small>
            </div>
            <div>
              <span>Email</span>
              <strong>
                <a href={`mailto:${EMAIL}`} className="plain-link">
                  {EMAIL}
                </a>
              </strong>
              <small>For documents and formal enquiries</small>
            </div>
            <div>
              <span>LinkedIn</span>
              <strong>
                <a
                  href={LINKEDIN_URL}
                  className="plain-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mbiatem Egbe Kenneth
                </a>
              </strong>
              <small>Professional background and experience</small>
            </div>
          </div>
        </div>
        <div className="contact-form-wrap">
          {sent ? (
            <div className="form-success">
              <span>Enquiry ready to send</span>
              <h2>Thank you for reaching out.</h2>
              <p>
                Your enquiry has been prepared. Continue below to send it to Kenneth directly on
                WhatsApp — he will respond with the best next step.
              </p>
              <a className="button primary full" href={link}>
                <WhatsAppIcon /> Send on WhatsApp
              </a>
              <button className="text-link" onClick={() => setSent(false)}>
                Edit enquiry <Arrow />
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-heading">
                <h2>How can Kenneth help?</h2>
              </div>
              <div className="field-row">
                <label>
                  Full name
                  <input required name="name" placeholder="Your name" />
                </label>
                <label>
                  Email address
                  <input required type="email" name="email" placeholder="name@company.com" />
                </label>
              </div>
              <label>
                Area of interest
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service.number}>{service.title}</option>
                  ))}
                </select>
              </label>
              <label>
                Tell us about your needs
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Briefly describe your objective, challenge, and preferred timeline."
                />
              </label>
              <button className="button primary full" type="submit">
                Prepare enquiry <Arrow />
              </button>
              <p className="form-disclaimer">
                Your enquiry opens directly in WhatsApp — nothing is stored on this website.
              </p>
            </form>
          )}
        </div>
      </section>
      <section className="contact-strip">
        <span>Finance</span>
        <i />
        <span>Trade</span>
        <i />
        <span>Risk</span>
        <i />
        <span>Agribusiness</span>
      </section>
    </>
  )
}
