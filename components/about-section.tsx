import Image from "next/image";
import { ContainerParallax } from "./container-parallax";
import { Target, Compass } from "lucide-react";
import { Reveal } from "./reveal";

export function AboutSection() {
  const experienceYears = Math.max(1, new Date().getFullYear() - 2011);

  return (
    <section id="about" className="relative py-24 md:py-32 bg-soft-grey">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal direction="right">
            <div className="relative">
              <ContainerParallax>
                <div className="image-tilt relative rounded-2xl overflow-hidden shadow-xl w-full max-w-90 mx-auto sm:max-w-none">
                  <Image
                    src="/images/about-office.jpg"
                    alt="Praxis Consulting office"
                    width={900}
                    height={1100}
                    className="w-full h-105 md:h-140 object-cover"
                  />
                </div>
              </ContainerParallax>

              <div className="absolute -bottom-8 right-0 sm:-right-4 md:-right-8 bg-navy text-white rounded-2xl p-6 md:p-8 max-w-xs shadow-2xl">
                <div className="font-serif text-gold text-5xl md:text-6xl font-medium leading-none">
                  {experienceYears}+
                </div>
                <div className="mt-2 text-sm text-white/70 leading-relaxed">
                  Years of experience in accounting, tax & assurance services
                  across Ghana.
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal direction="up">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal">
                About Praxis
              </span>
              <h2 className="mt-3 heading-display text-navy text-balance">
                Accounting expertise built on{" "}
                <em className="text-gold italic font-normal">local</em>{" "}
                knowledge.
              </h2>
              <p className="mt-6 text-base md:text-lg text-charcoal/80 leading-relaxed">
                We work with Ghanaian businesses to translate complex accounting
                and tax requirements into practical solutions. Our team combines
                global professional standards with deep understanding of Ghana's
                regulatory environment, so you can operate with confidence,
                maintain compliance, and focus on growth.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              <Reveal direction="up" delay={120}>
                <div className="rounded-2xl border border-border bg-white p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="h-10 w-10 rounded-lg bg-navy text-white flex items-center justify-center">
                    <Compass className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-normal text-navy">
                    Our Vision
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/75 leading-relaxed">
                    To be the trusted accounting partner for ambitious Ghanaian
                    businesses, enabling sustainable growth across West Africa.
                  </p>
                </div>
              </Reveal>
              <Reveal direction="up" delay={220}>
                <div className="rounded-2xl border border-border bg-white p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="h-10 w-10 rounded-lg bg-gold text-navy flex items-center justify-center">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-normal text-navy">
                    Our Mission
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/75 leading-relaxed">
                    Provide high-quality accounting, tax and assurance services,
                    helping clients achieve compliance, optimize performance,
                    and unlock sustainable growth.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
