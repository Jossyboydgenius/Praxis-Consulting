import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedCounter } from "./animated-counter";
import { Reveal } from "./reveal";
import { ContainerParallax } from "./container-parallax";

export function HeroSection() {
  const experienceYears = Math.max(1, new Date().getFullYear() - 2011);

  return (
    <section id="top" className="relative overflow-hidden bg-navy text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-skyline.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy via-navy/90 to-navy" />
      </div>

      {/* Glow accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal direction="up">
              <div className="flex items-center gap-3 text-gold">
                <span className="h-px w-10 bg-gold/60" />
                <span className="text-[11px] md:text-xs font-medium tracking-[0.25em] uppercase">
                  Praxis Consulting
                </span>
              </div>
            </Reveal>
            <Reveal direction="up" delay={80}>
              <h1 className="mt-6 heading-hero text-balance text-[oklch(0.985_0.003_90)]">
                Practical accounting, tax and{" "}
                <em className="text-gold font-normal italic">assurance</em>{" "}
                services
              </h1>
            </Reveal>
            <Reveal direction="up" delay={160}>
              <p className="mt-6 text-base md:text-lg text-white/70 max-w-xl text-pretty leading-relaxed">
                We help Ghanaian businesses translate complex financial
                realities into practical, actionable plans. With deep local
                expertise and global standards, we support you at every stage of
                growth.
              </p>
            </Reveal>

            <Reveal direction="up" delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy hover:bg-gold-soft transition-colors"
                >
                  Book a consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
                >
                  Explore services
                </Link>
              </div>
            </Reveal>

            <dl className="mt-12 grid grid-cols-3 gap-6 md:gap-10 max-w-lg">
              <Reveal direction="up" delay={320}>
                <div>
                  <dt className="font-serif text-gold text-3xl md:text-4xl font-normal tabular-nums">
                    <AnimatedCounter value={experienceYears} suffix="+" />
                  </dt>
                  <dd className="mt-2 text-xs md:text-sm text-white/60 uppercase tracking-wider">
                    Years of experience
                  </dd>
                </div>
              </Reveal>
              <Reveal direction="up" delay={400}>
                <div>
                  <dt className="font-serif text-gold text-3xl md:text-4xl font-normal tabular-nums">
                    <AnimatedCounter value={5} />
                  </dt>
                  <dd className="mt-2 text-xs md:text-sm text-white/60 uppercase tracking-wider">
                    Core service lines
                  </dd>
                </div>
              </Reveal>
              <Reveal direction="up" delay={480}>
                <div>
                  <dt className="font-serif text-gold text-3xl md:text-4xl font-normal tabular-nums">
                    <AnimatedCounter value={100} suffix="%" duration={2200} />
                  </dt>
                  <dd className="mt-2 text-xs md:text-sm text-white/60 uppercase tracking-wider">
                    Integrity driven
                  </dd>
                </div>
              </Reveal>
            </dl>
          </div>

          <Reveal direction="left" delay={120} className="lg:col-span-5">
            <ContainerParallax>
              <div className="image-tilt relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 w-full max-w-90 mx-auto sm:max-w-none">
                <Image
                  src="/images/hero-team.jpg"
                  alt="Praxis Consulting team"
                  width={800}
                  height={1000}
                  className="w-full h-105 md:h-130 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-transparent to-transparent" />
              </div>
            </ContainerParallax>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
