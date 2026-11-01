export const WHATSAPP_NUMBER = '237651302996'
export const WHATSAPP_DISPLAY = '+237 6 51 30 29 96'

export const whatsappLink = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const portrait = '/images/kenneth.png'
export const cocoa = '/images/cocoa.jpg'

export const services = [
  {
    number: '01',
    title: 'Financial Advisory & Credit Risk Analysis',
    description:
      'Bankable business plans, loan file preparation, risk assessment, and credit approval strategy.',
    items: ['Business plans', 'Loan file preparation', 'Credit risk reviews'],
  },
  {
    number: '02',
    title: 'Negotiation & Cross-Border Trade Brokerage',
    description:
      'Expert brokering and negotiation for cross-border trade across the Cameroon–Nigeria–CEMAC corridor: securing deals, managing payment risk, and facilitating import-export transactions.',
    items: ['Deal facilitation', 'Payment risk management', 'Import-export support'],
  },
  {
    number: '03',
    title: 'Insurance Advisory',
    description:
      'Guidance on credit insurance, trade insurance, agricultural insurance, and business risk cover to protect your investments.',
    items: ['Credit & trade insurance', 'Agricultural cover', 'Business risk cover'],
  },
  {
    number: '04',
    title: 'Cocoa Cooperatives & CIG Advisory',
    description:
      'Specialised support for cocoa cooperatives and Common Initiative Groups: structuring, financing, governance, market access, and price negotiation.',
    items: ['Structuring & governance', 'Finance access', 'Price negotiation'],
  },
  {
    number: '05',
    title: 'Banking & Economic Consulting',
    description:
      'Consulting for banks, MFIs, and SMEs on regulatory compliance (OHADA, CEMAC, Cameroonian finance law), portfolio quality, and economic intelligence.',
    items: ['OHADA / CEMAC compliance', 'Portfolio review', 'Economic analysis'],
  },
  {
    number: '06',
    title: 'Debt Restructuring & Recovery',
    description:
      'Constructive negotiation with financial institutions for loan restructuring and sustainable debt management, for creditors and borrowers alike.',
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
