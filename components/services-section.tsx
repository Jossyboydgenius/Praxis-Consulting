import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { Reveal } from "./reveal";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal">
              What we do
            </span>
            <h2 className="mt-3 heading-display text-navy text-balance">
              Comprehensive accounting and advisory, one{" "}
              <em className="text-gold italic font-normal">trusted</em> partner.
            </h2>
            <p className="mt-5 text-base md:text-lg text-charcoal/75 leading-relaxed text-pretty">
              From daily bookkeeping to boardroom-ready audits, we manage all your
              accounting, tax, and compliance needs.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const featured = i === 0;
            return (
              <Reveal
                key={service.slug}
                direction="up"
                delay={i * 90}
                className={featured ? "lg:row-span-2 lg:col-span-1" : ""}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={
                    featured
                      ? "group relative rounded-2xl p-8 bg-navy text-white overflow-hidden flex flex-col h-full hover:bg-navy/95 hover:-translate-y-1 transition-all duration-300"
                      : "group relative rounded-2xl p-8 bg-soft-grey border border-border hover:border-gold/50 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                  }
                >
                  {featured && (
                    <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gold/15 blur-3xl" />
                  )}
                  <div
                    className={
                      featured
                        ? "relative h-12 w-12 rounded-xl bg-gold text-navy flex items-center justify-center group-hover:scale-110 transition-transform"
                        : "h-12 w-12 rounded-xl bg-navy text-white flex items-center justify-center group-hover:bg-gold group-hover:text-navy group-hover:scale-110 transition-all"
                    }
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3
                    className={
                      featured
                        ? "relative mt-6 font-serif text-3xl font-normal leading-tight"
                        : "mt-6 font-serif text-2xl font-normal text-navy leading-tight"
                    }
                  >
                    {service.title}
                  </h3>
                  <p
                    className={
                      featured
                        ? "relative mt-3 text-white/75 leading-relaxed"
                        : "mt-3 text-charcoal/75 leading-relaxed text-sm"
                    }
                  >
                    {service.description}
                  </p>
                  <ul
                    className={
                      featured
                        ? "relative mt-6 space-y-2 flex-1"
                        : "mt-6 space-y-2 flex-1"
                    }
                  >
                    {service.points.map((p) => (
                      <li
                        key={p}
                        className={
                          featured
                            ? "flex items-center gap-2 text-sm text-white/80"
                            : "flex items-center gap-2 text-sm text-charcoal/70"
                        }
                      >
                        <span
                          className={
                            featured
                              ? "h-1.5 w-1.5 rounded-full bg-gold"
                              : "h-1.5 w-1.5 rounded-full bg-teal"
                          }
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={
                      featured
                        ? "relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold"
                        : "mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-gold transition-colors"
                    }
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
