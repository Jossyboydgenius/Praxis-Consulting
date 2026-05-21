import {
  Calculator,
  FileCheck2,
  Lightbulb,
  ShieldCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  overview: string;
  offerings: { title: string; description: string }[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "accounting",
    icon: Calculator,
    title: "Accounting",
    tagline: "Accurate books. Clear decisions.",
    description:
      "Accurate bookkeeping, financial reporting, and management accounts that give you a real-time view of your business.",
    points: [
      "Bookkeeping & ledgers",
      "Monthly management accounts",
      "Financial statements",
    ],
    overview:
      "We take the day-to-day burden of bookkeeping off your plate and turn raw transactions into clear, decision-ready financial insight. From sole proprietors to multi-entity groups, our accounting team works alongside you to keep your books clean, compliant, and truly useful.",
    offerings: [
      {
        title: "Bookkeeping & Ledger Maintenance",
        description:
          "Complete recording and classification of transactions, bank reconciliations, and month-end closes, handled with precision.",
      },
      {
        title: "Management Accounts",
        description:
          "Monthly or quarterly management accounts with commentary, variance analysis, and KPI dashboards tailored to your business.",
      },
      {
        title: "Financial Statements",
        description:
          "Year-end financial statements prepared to IFRS and Ghanaian reporting standards, ready for lenders, investors, and regulators.",
      },
      {
        title: "Cloud Accounting Setup",
        description:
          "We implement and train your team on modern cloud accounting platforms so your books are accessible anywhere, anytime.",
      },
    ],
    benefits: [
      "Real-time visibility into cash flow and profitability",
      "Timely, accurate reporting for boards and lenders",
      "Reduced errors and stronger internal controls",
      "More time for you to focus on growing your business",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "We review your current setup, chart of accounts, and reporting needs.",
      },
      {
        step: "02",
        title: "Onboarding",
        description:
          "We clean up historical data and configure your systems for clarity.",
      },
      {
        step: "03",
        title: "Ongoing Delivery",
        description:
          "We handle the books and deliver timely management reports every cycle.",
      },
    ],
  },
  {
    slug: "tax-consulting",
    icon: FileCheck2,
    title: "Tax Consulting",
    tagline: "Compliant. Efficient. Stress-free.",
    description:
      "Stay compliant and tax-efficient with strategies tailored to Ghana Revenue Authority requirements.",
    points: [
      "Tax planning & filing",
      "VAT & withholding tax",
      "Tax health checks",
    ],
    overview:
      "Ghana's tax landscape changes constantly. Our tax advisors help you stay ahead, minimising liabilities, meeting every deadline, and structuring your affairs so that tax supports, rather than slows, your growth.",
    offerings: [
      {
        title: "Corporate & Personal Tax",
        description:
          "Preparation and filing of corporate income tax, PAYE, and personal income tax returns with the GRA.",
      },
      {
        title: "VAT, NHIL & GETFund",
        description:
          "Monthly VAT filings, input/output tax reconciliations, and advisory on complex transactions.",
      },
      {
        title: "Withholding Tax Compliance",
        description:
          "Accurate withholding, remittance, and certification across vendors, rent, and professional fees.",
      },
      {
        title: "Tax Health Checks & Disputes",
        description:
          "Independent reviews to surface exposure before GRA does, and representation during audits or disputes.",
      },
    ],
    benefits: [
      "Peace of mind on deadlines and compliance",
      "Lower effective tax rate through legitimate planning",
      "Fewer penalties and interest charges",
      "A seasoned advisor in your corner during GRA audits",
    ],
    process: [
      {
        step: "01",
        title: "Assessment",
        description:
          "We map your entities, transactions, and current compliance posture.",
      },
      {
        step: "02",
        title: "Strategy",
        description:
          "We design a tax plan that aligns with your business goals and risk appetite.",
      },
      {
        step: "03",
        title: "Execution",
        description:
          "We file, document, and defend, so you never worry about tax again.",
      },
    ],
  },
  {
    slug: "business-advisory",
    icon: Lightbulb,
    title: "Business Advisory",
    tagline: "Turn financial data into better decisions.",
    description:
      "Strategic guidance that turns financial data into decisions, budgeting, forecasting, and growth planning.",
    points: [
      "Budgeting & forecasting",
      "Financial modelling",
      "Strategy & KPIs",
    ],
    overview:
      "Great numbers are only half the story. Our advisory team works as an extension of your leadership, translating financials into strategy, pressure-testing plans, and helping you move faster with confidence.",
    offerings: [
      {
        title: "Budgeting & Forecasting",
        description:
          "Annual budgets, rolling forecasts, and cash flow projections that actually guide decisions.",
      },
      {
        title: "Financial Modelling",
        description:
          "Custom three-statement models for fundraising, investment, M&A, and scenario planning.",
      },
      {
        title: "Strategy & KPI Design",
        description:
          "We help you define the handful of metrics that matter, and the systems to track them.",
      },
      {
        title: "Fundraising & Investor Readiness",
        description:
          "Business plans, pitch decks, and data rooms that stand up to investor scrutiny.",
      },
    ],
    benefits: [
      "Clear, confident decisions backed by numbers",
      "Faster response to market shifts",
      "Stronger case when raising capital or borrowing",
      "A sparring partner who knows your business deeply",
    ],
    process: [
      {
        step: "01",
        title: "Diagnose",
        description:
          "We study your business model, economics, and strategic priorities.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "We build the models, dashboards, and frameworks you need to decide.",
      },
      {
        step: "03",
        title: "Advise",
        description:
          "We meet regularly to interpret results and refine the plan together.",
      },
    ],
  },
  {
    slug: "assurance-services",
    icon: ShieldCheck,
    title: "Assurance Services",
    tagline: "Build trust with rigour and independence.",
    description:
      "Independent reviews that build trust with investors, regulators, and partners through rigorous standards.",
    points: ["Statutory audits", "Internal audits", "Compliance reviews"],
    overview:
      "Assurance is about more than ticking boxes, it is about giving stakeholders the confidence to act. We deliver audits and reviews that meet international standards while remaining practical and commercially aware.",
    offerings: [
      {
        title: "Statutory Audits",
        description:
          "Independent audits of financial statements conducted in line with ISA and Ghanaian regulation.",
      },
      {
        title: "Internal Audits",
        description:
          "Risk-based internal audit programs that strengthen controls and surface opportunities.",
      },
      {
        title: "Compliance Reviews",
        description:
          "Targeted reviews across tax, regulatory, and policy frameworks relevant to your sector.",
      },
      {
        title: "Agreed-Upon Procedures",
        description:
          "Focused assurance engagements on specific areas like grants, revenue, or inventory.",
      },
    ],
    benefits: [
      "Credibility with investors, boards, and regulators",
      "Early visibility into control weaknesses",
      "A rigorous, no-surprises audit process",
      "Practical recommendations, not just findings",
    ],
    process: [
      {
        step: "01",
        title: "Planning",
        description:
          "We understand your business, assess risk, and scope the engagement.",
      },
      {
        step: "02",
        title: "Fieldwork",
        description:
          "We test controls and balances with discipline and minimal disruption.",
      },
      {
        step: "03",
        title: "Reporting",
        description:
          "We deliver a clear report with findings, opinions, and actionable next steps.",
      },
    ],
  },
  {
    slug: "payroll-management",
    icon: Wallet,
    title: "Payroll Management",
    tagline: "Paid right. Paid on time. Every time.",
    description:
      "End-to-end payroll handled with precision, from SSNIT to PAYE, so your team is paid right, on time.",
    points: [
      "Payroll processing",
      "SSNIT & PAYE filings",
      "Employee self-service",
    ],
    overview:
      "Payroll is personal. A missed deduction or a late payment erodes trust fast. We run payroll end-to-end with the care your team deserves and the compliance your business needs.",
    offerings: [
      {
        title: "Monthly Payroll Processing",
        description:
          "Accurate computation of gross-to-net, allowances, deductions, and net pay across all staff categories.",
      },
      {
        title: "SSNIT & Tier 2/3 Contributions",
        description:
          "Calculation, remittance, and reconciliation of statutory pension contributions.",
      },
      {
        title: "PAYE Filing & Compliance",
        description:
          "Timely PAYE computation, remittance, and annual reconciliations with the GRA.",
      },
      {
        title: "Payslips & Employee Support",
        description:
          "Clear digital payslips and a helpdesk your employees can actually reach.",
      },
    ],
    benefits: [
      "Happy employees who trust their pay",
      "Zero penalties from missed statutory deadlines",
      "Confidential, secure handling of sensitive data",
      "Leadership time back for higher-value work",
    ],
    process: [
      {
        step: "01",
        title: "Setup",
        description:
          "We migrate your employee data and configure pay elements correctly.",
      },
      {
        step: "02",
        title: "Run",
        description:
          "We process payroll each cycle with multiple checks before payout.",
      },
      {
        step: "03",
        title: "Report",
        description:
          "We file statutory returns and deliver clean reports to management.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
