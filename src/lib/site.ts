/**
 * Central site configuration — single source of truth for nav, contact (NAP),
 * and service taxonomy. Content draft lives in /docs/content-draft.md.
 *
 * NOTE: values marked [PLACEHOLDER] are pending client confirmation and must
 * NOT be presented as fact. See /docs/phase-0-plan.md "Open items".
 */

export const site = {
  name: "Altic Consult",
  tagline: "Tax, Accounting & Business Advisory for Businesses Operating in Kenya",
  description:
    "Altic Consult helps entrepreneurs, SMEs, multinationals and foreign investors navigate Kenya's complex tax and regulatory environment — staying compliant while unlocking growth.",
  // PROVISIONAL — client to confirm. Old site said 7 yrs, draft said ~10; client set 15.
  experienceYears: 15,
  url: "https://alticconsult.com",
  locale: "en_KE",
  contact: {
    phonePrimary: "+254 790 299 213",
    phoneSecondary: "+254 727 840 691",
    email: "info@alticconsult.com",
    // PROVISIONAL — client to confirm. Used for LocalBusiness schema / NAP.
    address: "Kimathi House, 2nd Floor, Suite 205, Nairobi",
    whatsapp: "+254790299213",
  },
  social: {
    twitter: "https://twitter.com/altic_consult",
    facebook: "https://facebook.com/altic_consult",
    instagram: "https://instagram.com/altic_consult",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const services = [
  {
    label: "Tax Advisory & Compliance",
    tag: "Tax",
    href: "/services/tax-advisory-compliance",
    blurb:
      "Navigate Kenya's tax regulations with confidence while minimising risk and exposure.",
    items: [
      "Corporate tax advisory",
      "VAT advisory & compliance",
      "Withholding tax management",
      "Tax returns preparation & filing",
      "PAYE & payroll tax compliance",
      "KRA audit representation",
      "Tax dispute resolution",
      "Transfer pricing advisory",
      "Cross-border tax advisory",
      "Tax planning & structuring",
    ],
  },
  {
    label: "Accounting & Financial Management",
    tag: "Accounting",
    href: "/services/accounting-financial-management",
    blurb:
      "Build the strong financial systems that reliable decisions and growth depend on.",
    items: [
      "Outsourced accounting services",
      "Financial reporting & management accounts",
      "Accounting system setup & optimisation",
      "Payroll management",
      "Cash flow management",
      "Internal financial controls",
    ],
  },
  {
    label: "Business Advisory",
    tag: "Advisory",
    href: "/services/business-advisory",
    blurb: "Strategic financial guidance that helps your business grow sustainably.",
    items: [
      "Business structuring",
      "Strategic financial planning",
      "Financial modelling",
      "Performance improvement",
      "Feasibility studies",
      "Business restructuring",
    ],
  },
  {
    label: "Business Setup & Market Entry",
    tag: "Setup",
    href: "/services/business-setup-market-entry",
    blurb: "Establish and run a compliant business in Kenya, from incorporation onward.",
    items: [
      "Company incorporation",
      "Tax registration",
      "Regulatory compliance advisory",
      "Financial & tax structuring",
      "Ongoing compliance support",
    ],
  },
] as const;

export const mainNav: NavItem[] = [
  { label: "Services", href: "/services", children: [...services] },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
