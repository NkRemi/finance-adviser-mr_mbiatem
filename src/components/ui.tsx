import type { ReactNode } from 'react'

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d={diagonal ? 'M5 15 15 5M7 5h8v8' : 'M3 10h14M12 5l5 5-5 5'} />
    </svg>
  )
}

export function WhatsAppIcon() {
  return (
    <svg className="wa-ico" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.6 0-1.3.6-1.9.9-2.1.2-.3.5-.3.7-.3h.5c.2 0 .4-.1.6.4l.8 2c.1.2.1.4 0 .6l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.5.4 0 .1 0 .7-.2 1.2Z" />
    </svg>
  )
}

export function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 42 42">
        <path d="M7 31V11l14 13 14-13v20" />
        <path d="M13 31V23l8 7 8-7v8" />
      </svg>
    </span>
  )
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={light ? 'eyebrow light' : 'eyebrow'}>{children}</div>
}

export function PageHero({
  eyebrow,
  title,
  italic,
  intro,
}: {
  eyebrow: string
  title: string
  italic: string
  intro: string
}) {
  return (
    <section className="page-hero">
      <Eyebrow light>{eyebrow}</Eyebrow>
      <h1>
        {title}
        <br />
        <em>{italic}</em>
      </h1>
      <p>{intro}</p>
    </section>
  )
}
