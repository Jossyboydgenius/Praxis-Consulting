// cspell:ignore Kofi

import Image from "next/image";
import { ContainerParallax } from "./container-parallax";
import { GraduationCap, BadgeCheck } from "lucide-react";
import { Reveal } from "./reveal";

export function FounderSection() {
  const experienceYears = Math.max(1, new Date().getFullYear() - 2011);

  return (
    <section id="founder" className="relative py-24 md:py-32 bg-soft-grey">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal direction="right" className="lg:col-span-5">
            <ContainerParallax>
              <div className="image-tilt relative rounded-2xl overflow-hidden shadow-xl w-full max-w-90 mx-auto sm:max-w-none">
                <Image
                  src="/images/founder-img.png"
                  alt="Joseph Kofi Wia, Founder of Praxis Consulting"
                  width={800}
                  height={1000}
                  quality={100}
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="w-full h-125 md:h-155 object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-navy/95 via-navy/60 to-transparent">
                  <div className="text-white">
                    <div className="font-serif text-2xl font-normal">
                      Joseph Kofi Wia
                    </div>
                    <div className="text-sm text-gold uppercase tracking-wider mt-1">
                      Founder &amp; Principal Consultant
                    </div>
                  </div>
                </div>
              </div>
            </ContainerParallax>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal direction="up">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal">
                Meet the Founder
              </span>
              <h2 className="mt-3 heading-display text-navy text-balance">
                A <em className="text-gold italic font-normal">seasoned</em>{" "}
                voice in Ghanaian finance.
              </h2>
              <p className="mt-6 text-base md:text-lg text-charcoal/80 leading-relaxed">
                With over {experienceYears} years of hands-on experience in
                accounting, tax and assurance, Joseph Kofi Wia founded Praxis
                Consulting to bridge international best practice with the
                everyday realities of businesses operating in Ghana.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              <Reveal direction="up" delay={120}>
                <div className="rounded-2xl bg-white border border-border p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="h-10 w-10 rounded-lg bg-navy text-white flex items-center justify-center">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-normal text-navy uppercase tracking-wider">
                    Qualifications
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-charcoal/80">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      BSc Management
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      MSc Accounting &amp; Finance
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal direction="up" delay={220}>
                <div className="rounded-2xl bg-white border border-border p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="h-10 w-10 rounded-lg bg-gold text-navy flex items-center justify-center">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-normal text-navy uppercase tracking-wider">
                    Memberships
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-charcoal/80">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                      Institute of Financial Accountants, UK
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                      Institute of Public Accountants, Australia
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal direction="up" delay={320}>
              <blockquote className="mt-10 border-l-2 border-gold pl-6 font-serif italic font-normal text-[20px] leading-8.25 text-[oklab(0.22_-0.00173648_-0.00984808/0.9)]">
                &ldquo;Good financial advice should be practical. At Praxis, we
                turn numbers into decisions that move Ghanaian businesses
                forward.&rdquo;
                <footer className="mt-4 not-italic font-sans text-xs uppercase tracking-[0.2em] text-charcoal/60">
                  Joseph Kofi Wia
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
