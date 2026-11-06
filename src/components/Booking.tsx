import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react'
import { EMAIL, services, WHATSAPP_DISPLAY, whatsappLink } from '../data/site'
import { Arrow } from './ui'

const BookingContext = createContext<() => void>(() => {})

export const useBooking = () => useContext(BookingContext)

export function BookingProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [name, setName] = useState('')
  const [service, setService] = useState('')
  const [details, setDetails] = useState('')

  const open = useCallback(() => dialogRef.current?.showModal(), [])
  const close = () => dialogRef.current?.close()

  const sender = name.trim() ? `Consultation request from ${name.trim()}` : 'Consultation request'
  const message = `${sender}\nService: ${service || 'Not specified'}\n\n${
    details.trim() || 'I would like to book a consultation.'
  }`
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent('Consultation enquiry')}&body=${encodeURIComponent(message)}`

  return (
    <BookingContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        className="booking-dialog"
        aria-labelledby="booking-title"
        aria-describedby="booking-intro"
        onClick={(event) => {
          if (event.target === dialogRef.current) close()
        }}
      >
        <div className="booking-head">
          <h2 id="booking-title">Book a consultation</h2>
          <button type="button" className="booking-close" onClick={close} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p id="booking-intro" className="booking-intro">
          Tell Kenneth what you need, then send it directly by WhatsApp or email. Nothing is stored
          on this site.
        </p>
        <div className="booking-fields">
          <label>
            Full name
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
          </label>
          <label>
            Area of interest
            <select value={service} onChange={(event) => setService(event.target.value)}>
              <option value="">Select a service</option>
              {services.map((item) => (
                <option key={item.number}>{item.title}</option>
              ))}
            </select>
          </label>
          <label>
            Your request
            <textarea
              rows={3}
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Briefly describe your objective, challenge, and preferred timeline."
            />
          </label>
        </div>
        <p className="booking-send-label">Send this request</p>
        <div className="booking-options">
          <a className="booking-option" href={whatsappLink(message)} onClick={close}>
            <span>
              <strong>WhatsApp</strong>
              <small>{WHATSAPP_DISPLAY}</small>
            </span>
            <Arrow diagonal />
          </a>
          <a className="booking-option" href={mailto} onClick={close}>
            <span>
              <strong>Email</strong>
              <small>{EMAIL}</small>
            </span>
            <Arrow diagonal />
          </a>
        </div>
      </dialog>
    </BookingContext.Provider>
  )
}
