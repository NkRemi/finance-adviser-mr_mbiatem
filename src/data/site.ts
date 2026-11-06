export const WHATSAPP_NUMBER = '237651302996'
export const WHATSAPP_DISPLAY = '+237 6 51 30 29 96'
export const EMAIL = 'mbiatemkenneth@gmail.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/mbiatem-kenneth-0250781a8'

export const whatsappLink = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const portrait = '/images/kenneth.jpg'
export const cocoa = '/images/cocoa.jpg'

export const services = [
  {
    number: '01',
    title: 'Financial Advisory & Credit Risk Analysis',
    image: '/images/expertise/advisory.jpg',
    description:
      'Bank-ready business plans, loan files, and credit-risk assessments grounded in graduate research on how Cameroonian banks actually make lending decisions.',
    items: ['Business plans', 'Loan file preparation', 'Credit risk reviews'],
  },
  {
    number: '02',
    title: 'Trade Finance & Cross-Border Trade',
    image: '/images/expertise/trade.jpg',
    description:
      'Trade finance and cross-border structuring across the Cameroon–Nigeria–CEMAC corridor — letters of credit, guarantees, documentary collections, and export pre-financing, with payment and compliance risk managed from first contact to settlement.',
    items: ['Trade finance structuring', 'Payment risk management', 'Import-export support'],
  },
  {
    number: '03',
    title: 'Insurance Advisory',
    image: '/images/expertise/insurance.jpg',
    description:
      'Independent guidance on credit, trade, agricultural, and business-risk cover, with insurer-side training behind a careful reading of what each policy actually promises.',
    items: ['Credit & trade insurance', 'Agricultural cover', 'Business risk cover'],
  },
  {
    number: '04',
    title: 'Cooperative Finance & CIG Advisory',
    image: '/images/expertise/cocoa-coop.jpg',
    description:
      'Cooperative finance and governance support for cocoa cooperatives and Common Initiative Groups — internal structuring, working-capital and credit needs, market access, and price negotiation that hold up with lenders and buyers.',
    items: ['Cooperative finance', 'Structuring & governance', 'Price negotiation'],
  },
  {
    number: '05',
    title: 'Banking & Economic Consulting',
    image: '/images/expertise/banking.jpg',
    description:
      'Advisory for banks, MFIs, and SMEs on OHADA, CEMAC, and Cameroonian finance law, portfolio quality, and digital-risk awareness, built on years inside a national ICT institution.',
    items: ['OHADA / CEMAC compliance', 'Portfolio review', 'Economic analysis'],
  },
  {
    number: '06',
    title: 'Debt Restructuring & Recovery',
    image: '/images/expertise/debt.jpg',
    description:
      'Constructive negotiation with financial institutions for loan restructuring and sustainable repayment plans, protecting relationships and recovery value for creditors and borrowers alike.',
    items: ['Debt assessment', 'Restructuring negotiation', 'Recovery strategy'],
  },
]

export const consultationFees: [string, string, string][] = [
  ['Initial diagnostic call (30 min)', 'Free', 'WhatsApp or phone'],
  ['Standard consultation (per hour)', '25,000 – 35,000 FCFA', 'At office or online'],
  ['Half-day strategy session (4h)', '100,000 FCFA', 'On-site or online'],
  ['Full day (8h)', '180,000 – 250,000 FCFA', 'SME / corporate'],
  ['Monthly retainer (SME)', '300,000 – 500,000 FCFA', '4 sessions + follow-up'],
  ['Monthly retainer (corporate / bank / coop)', '800,000 – 1,500,000 FCFA', 'Full advisory'],
]

export const flatFees: [string, string][] = [
  ['Bankable business plan', '150,000 – 350,000 FCFA'],
  ['Credit file preparation (bank loan)', '100,000 – 250,000 FCFA + 2–3% success fee'],
  ['Credit risk analysis report', '200,000 – 500,000 FCFA'],
  ['Cooperative structuring / CIG statutes + registration', '250,000 – 600,000 FCFA'],
  ['Cross-border trade brokerage', '3% – 5% of transaction value'],
  ['Insurance advisory', 'Free consultation — commission paid by insurer'],
]

export const travelFees: [string, string, string, string][] = [
  ['Yaoundé – Douala / Littoral', '40,000 – 60,000', '50,000', '15,000'],
  ['Yaoundé – South-West (Mamfe, Kumba, Buea)', '50,000 – 80,000', '50,000 – 65,000', '20,000'],
  ['Yaoundé – West, North-West', '30,000 – 50,000', '40,000 – 50,000', '15,000'],
  ['Yaoundé – North, Far North (flight)', '120,000 – 200,000', '65,000 – 85,000', '25,000'],
  ['Cross-border (Nigeria – Ikom, Calabar)', '150,000 – 250,000', '85,000 – 120,000', 'At cost'],
]
