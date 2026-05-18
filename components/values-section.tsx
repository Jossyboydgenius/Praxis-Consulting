import {
  ShieldCheck,
  Award,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  Users,
} from "lucide-react";
import { Reveal } from "./reveal";

const values = [
  {
    icon: ShieldCheck,
    name: "Integrity",
    description:
      "The highest ethical standards in every interaction, built on transparency and honesty.",
  },
  {
    icon: Award,
    name: "Excellence",
    description:
      "A relentless pursuit of superior quality and continuous improvement across our services.",
  },
  {
    icon: HeartHandshake,
    name: "Client-Centric",
    description:
      "Actionable solutions tailored to Ghanaian businesses, putting client success first.",
  },
  {
    icon: Sparkles,
    name: "Innovation",
    description:
      "Modern tools and forward-thinking approaches to solve real financial challenges.",
  },
  {
    icon: CheckCircle2,
    name: "Accountability",
    description:
      "Ownership of our work, supporting Ghana's economic development responsibly.",
  },
  {
    icon: Users,
    name: "Collaboration",
    description:
      "A unified team delivering seamless, comprehensive support across every engagement.",
  },
];

export function ValuesSection() {
  return (
    <section
      id="values"
      className="relative py-24 md:py-32 bg-navy text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[80%] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">
              Core Values
            </span>
            <h2 className="mt-3 heading-display text-balance">
              The <em className="text-gold italic font-normal">principles</em>{" "}
              behind every decision we make.
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
              Six commitments that shape how we serve clients and build lasting
              relationships.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.name} direction="up" delay={i * 80}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/3 p-7 hover:bg-white/6 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-xl bg-gold/15 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-navy group-hover:scale-110 transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-[20px] leading-7 font-normal text-[oklch(0.985_0.003_90)]">
                      {v.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
