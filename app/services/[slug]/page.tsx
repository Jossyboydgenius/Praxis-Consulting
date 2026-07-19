import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { services, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

const serviceSEOData: Record<
  string,
  { seoTitle: string; seoDescription: string; keywords: string[] }
> = {
  accounting: {
    seoTitle: "Accounting & Bookkeeping Services in Ghana",
    seoDescription: "Professional accounting and bookkeeping services in Ghana. Praxis Consulting provides monthly management accounts, financial reporting, and cloud accounting setup in Accra.",
    keywords: [
      "Accounting services for businesses in Ghana",
      "Outsourced accounting services Ghana",
      "SME accounting services Ghana",
      "Bookkeeping services in Ghana",
      "Financial reporting services Ghana",
      "Corporate accounting solutions Ghana",
      "Accra bookkeeping",
      "Accounting firms in Ghana",
      "Best accounting firm in Ghana",
    ],
  },
  "tax-consulting": {
    seoTitle: "Tax Consulting & Compliance Services in Ghana",
    seoDescription: "Expert tax consultants in Ghana. We assist with GRA compliance, corporate income tax planning, VAT, withholding tax filing, and audits from Spintex, Accra.",
    keywords: [
      "Tax consulting services in Ghana",
      "Tax consultants in Ghana",
      "Ghana tax compliance services",
      "Tax consultant for SMEs Ghana",
      "GRA compliance Accra",
      "Withholding tax compliance Ghana",
      "VAT filings Ghana",
    ],
  },
  "business-advisory": {
    seoTitle: "Business Advisory & Consulting in Ghana",
    seoDescription: "Unlock growth with business advisory services in Ghana. We provide budgeting, forecasting, cash flow modeling, and investor readiness support.",
    keywords: [
      "Business advisory services in Ghana",
      "Corporate advisory Ghana",
      "SME business consulting Ghana",
      "Business compliance services Ghana",
      "Budgeting and forecasting Ghana",
    ],
  },
  "assurance-services": {
    seoTitle: "Audit & Assurance Services in Ghana",
    seoDescription: "Independent audit and assurance services in Ghana. Build trust with statutory audits, internal controls audit, and compliance reviews in Accra.",
    keywords: [
      "Assurance services in Ghana",
      "Audit firms in Ghana",
      "External audit services Ghana",
      "Internal audit services Ghana",
      "Audit and assurance firm Ghana",
      "Statutory audits Ghana",
    ],
  },
  "payroll-management": {
    seoTitle: "Payroll Management Services in Ghana",
    seoDescription: "Outsourced payroll services in Ghana. Praxis Consulting handles monthly payroll processing, SSNIT, and PAYE filings accurately and on time.",
    keywords: [
      "Payroll management services Ghana",
      "Outsourced payroll Ghana",
      "SSNIT and PAYE filings Ghana",
      "Employee payroll Accra",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found | Praxis Consulting" };

  const seo = serviceSEOData[slug] || {
    seoTitle: `${service.title} | Praxis Consulting`,
    seoDescription: service.description,
    keywords: [],
  };

  return {
    title: seo.seoTitle,
    description: seo.seoDescription,
    keywords: seo.keywords,
    openGraph: {
      title: `${seo.seoTitle} | Praxis Consulting`,
      description: seo.seoDescription,
      type: "website",
      images: [
        {
          url: "/images/hero-team.jpg",
          width: 1200,
          height: 630,
          alt: `${service.title} - Praxis Consulting`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seo.seoTitle} | Praxis Consulting`,
      description: seo.seoDescription,
      images: ["/images/hero-team.jpg"],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-charcoal">
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 bg-navy text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-gold text-navy flex items-center justify-center">
              <Icon className="h-7 w-7" />
            </div>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">
              Service
            </span>
          </div>

          <h1 className="mt-6 heading-display text-balance max-w-3xl text-[oklch(0.985_0.003_90)]">
            {service.title}
          </h1>
          <p className="mt-5 font-serif italic text-xl md:text-2xl text-gold font-normal">
            {service.tagline}
          </p>
          <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed max-w-2xl text-pretty">
            {service.overview}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy hover:bg-gold-soft transition-colors"
            >
              Request a consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+233548636721"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 hover:border-gold/60 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call 054 863 6721
            </a>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal">
              What we deliver
            </span>
            <h2 className="mt-3 heading-display text-navy text-balance">
              Everything you need{" "}
              <em className="text-gold italic font-normal">under</em> one roof.
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {service.offerings.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-soft-grey border border-border p-7 hover:border-gold/50 hover:bg-white transition-colors"
              >
                <h3 className="font-serif text-xl font-normal text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Process */}
      <section className="py-20 md:py-28 bg-soft-grey">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal">
              Why it matters
            </span>
            <h2 className="mt-3 heading-display text-navy text-balance">
              Outcomes you can{" "}
              <em className="text-gold italic font-normal">measure</em>.
            </h2>
            <ul className="mt-8 space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-gold text-navy flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-charcoal/80 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal">
              How we work
            </span>
            <h2 className="mt-3 heading-display text-navy text-balance">
              A <em className="text-gold italic font-normal">clear</em> path
              from day one.
            </h2>
            <div className="mt-8 space-y-4">
              {service.process.map((p) => (
                <div
                  key={p.step}
                  className="rounded-2xl bg-white border border-border p-6 flex gap-5"
                >
                  <div className="font-serif text-3xl font-normal text-gold shrink-0 w-10 italic">
                    {p.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-normal text-navy">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-charcoal/75 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-navy text-white p-10 md:p-14">
            <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gold/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-teal/15 blur-3xl" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <h2 className="heading-display text-balance">
                  Ready to{" "}
                  <em className="text-gold italic font-normal">get started</em>{" "}
                  with {service.title.toLowerCase()}?
                </h2>
                <p className="mt-3 text-white/75 text-pretty">
                  Book a no-obligation consultation with our team today.
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy hover:bg-gold-soft transition-colors whitespace-nowrap"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-display text-navy">
            Explore <em className="text-gold italic font-normal">other</em>{" "}
            services
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {related.map((r) => {
              const RIcon = r.icon;
              return (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group rounded-2xl bg-soft-grey border border-border p-7 hover:border-gold/50 hover:bg-white transition-colors"
                >
                  <div className="h-11 w-11 rounded-xl bg-navy text-white flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-colors">
                    <RIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-normal text-navy">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/75 leading-relaxed">
                    {r.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-gold transition-colors">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
