import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { services } from "@/lib/services";
import { Reveal } from "@/components/reveal";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-charcoal flex flex-col justify-between">
      <SiteHeader />

      {/* Hero / Main 404 Content */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 bg-navy text-white overflow-hidden flex-grow flex items-center">
        {/* Glow accents */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-center py-12 md:py-20">
          <Reveal direction="up" duration={600}>
            <div className="flex items-center gap-3 text-gold justify-center">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[11px] md:text-xs font-medium tracking-[0.25em] uppercase">
                Praxis Consulting
              </span>
              <span className="h-px w-10 bg-gold/60" />
            </div>
          </Reveal>

          <Reveal direction="up" delay={80} duration={600}>
            <h1 className="mt-6 font-serif text-[100px] leading-none md:text-[160px] font-normal italic text-gold tracking-tight select-none">
              404
            </h1>
          </Reveal>

          <Reveal direction="up" delay={160} duration={600}>
            <h2 className="mt-4 heading-display text-balance text-white text-2xl md:text-4xl font-normal">
              Page Not Found
            </h2>
          </Reveal>

          <Reveal direction="up" delay={240} duration={600}>
            <p className="mt-6 text-base md:text-lg text-white/70 max-w-lg mx-auto text-pretty leading-relaxed">
              We couldn&apos;t find the page you were looking for. It may have been moved, deleted, or never existed.
            </p>
          </Reveal>

          <Reveal direction="up" delay={320} duration={600}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy hover:bg-gold-soft transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Return Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Suggested Services Section */}
      <section className="py-16 md:py-24 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal">
              Or find what you need
            </span>
            <h2 className="mt-3 heading-display text-navy text-balance text-3xl">
              Explore our <em className="text-gold italic font-normal">core</em> services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} direction="up" delay={100 + index * 60} duration={500}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex flex-col justify-between h-full rounded-2xl bg-soft-grey border border-border p-6 hover:border-gold/50 hover:bg-white transition-all duration-300"
                  >
                    <div>
                      <div className="h-10 w-10 rounded-xl bg-navy text-white flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-serif text-lg font-normal text-navy">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs text-charcoal/75 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-navy group-hover:text-gold transition-colors">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
