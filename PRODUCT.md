# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: owners and managers of Cameroonian SMEs, cocoa cooperatives and Common Initiative Groups (CIGs), and independent entrepreneurs who need bank credit, trade finance, insurance cover, or agribusiness structuring. Most arrive on a smartphone, often after a referral or a forwarded link, and are deciding whether this adviser is credible enough to contact.

Secondary, per the service catalogue: banks, MFIs, and insurers that buy portfolio, compliance, or training work. They are not the lead audience.

## Product Purpose

A single-adviser professional site for Mbiatem Egbe Kenneth that turns a cautious prospect into a booked consultation. Success is a WhatsApp or phone consultation request; email and LinkedIn are secondary channels. The site has to establish credibility fast enough that the visitor starts the conversation.

## Positioning

Advice built from the lender's side of the table: credit-risk research on Cameroonian commercial banks plus corporate-banking training, applied to loan files, trade corridors, insurance reading, and cocoa cooperative structuring. The combination — bank-ready documentation, cross-border trade across the Cameroon–Nigeria–CEMAC corridor, and agribusiness/cooperative work in one adviser — is the differentiator, and the fees are public in FCFA.

## Operating Context

- Consultations happen by WhatsApp or phone, online, at the office, or on-site; travel is quoted from Yaoundé.
- Fees are quoted in FCFA and the published grid is final and approved by the client.
- Engagements outside Yaoundé are quoted in advance against a proforma invoice.
- The work spans OHADA/CEMAC regulation and the Cameroon–Nigeria trade corridor. Site copy is English.
- Typical client documents: business plans, loan files, credit-risk reports, cooperative statutes, insurance reviews.

## Capabilities and Constraints

- Five routes: Home, About, Services (six expertise areas), Pricing, Contact, with hash routing (`#/services`) and client-side navigation.
- The Pricing page publishes consultation, flat-fee, and travel grids sourced from `src/data/site.ts`.
- Contact is WhatsApp deep links plus email and LinkedIn. There is no form backend, booking system, CMS, or analytics.
- Static React 19 + Vite build deployed on Vercel; content ships through the repository.
- Public copy is de-identified: no employer names (bank or agency) and no career-dossier detail. Credential years and institution names still shown on About are pending client sign-off.
- No client names, testimonials, or case outcomes are approved for publication.

## Brand Commitments

- The adviser's full name, Mbiatem Egbe Kenneth, is the brand.
- Voice: plain, professional, evidence-led. No hype and no invented claims.
- Real assets only: his portrait, cocoa imagery, expertise photography. No stock people presented as clients.

## Evidence on Hand

- Portrait `public/images/kenneth.jpg`; cocoa `public/images/cocoa.jpg`; six expertise photos under `public/images/expertise/`; social card `public/images/og-cover.jpg`.
- CV-derived credentials: Professional Master's in Banking, Money & International Finance (IRIC); Master's in Economic Sciences (University of Yaoundé II); graduate research on the credit risk of local and foreign commercial banks in Cameroon; corporate-banking training in relationship management, credit structuring, trade and receivable finance, compliance; commercial insurance training; more than a decade in institutional governance and digital-economy policy; international forum presentations.
- LinkedIn: https://www.linkedin.com/in/mbiatem-kenneth-0250781a8
- Absent, and not to be fabricated: testimonials, named clients, engagement outcomes, revenue or portfolio figures, professional licence or accreditation claims.

## Product Principles

1. Survive the credit committee — every deliverable should hold up to how a Cameroonian lender actually reads a file.
2. Local operating truth — OHADA/CEMAC rules, the Nigeria corridor, FCFA pricing, field conditions.
3. Credibility without the dossier — prove competence without publishing the client's employment history.
4. One next step — every page leads to a WhatsApp consultation.
5. Phone-first trust — the first viewport must work on a mid-range Android over mobile data.
