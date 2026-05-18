"use client";

import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send, Clock, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/services";
import { Reveal } from "./reveal";

const PHONE_DISPLAY = "054 863 6721";
const PHONE_TEL = "+233548636721";
const EMAIL = "info@praxisconsulting.com";
const ADDRESS_LINE_1 = "K11 Hydraform Estate, Spintex";
const ADDRESS_LINE_2 = "Accra, Ghana";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("K11 Hydraform Estate, Spintex, Accra, Ghana");

export function ContactSection() {
  const [service, setService] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const fireConfetti = () => {
    const colors = ["#0b1f3a", "#c9a34e", "#e2c884", "#2ca6a4"];

    confetti({
      particleCount: 140,
      spread: 90,
      startVelocity: 45,
      origin: { y: 0.6 },
      colors,
      zIndex: 9999,
    });

    const end = Date.now() + 900;
    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        startVelocity: 55,
        origin: { x: 0, y: 0.8 },
        colors,
        zIndex: 9999,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        startVelocity: 55,
        origin: { x: 1, y: 0.8 },
        colors,
        zIndex: 9999,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);

    // Simulate async send (replace with real API call later)
    await new Promise((resolve) => setTimeout(resolve, 700));

    setSubmitting(false);
    setSent(true);

    // Reset the form fields
    formRef.current?.reset();
    setService("");

    // Celebration
    fireConfetti();
    toast.success("Message sent successfully", {
      description:
        "Thank you for reaching out. Our team will get back to you within one business day.",
      className: "font-serif font-normal",
      descriptionClassName: "font-sans",
      duration: 6000,
    });
  };

  const resetToForm = () => setSent(false);

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Reveal direction="up">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-teal">
                Get in touch
              </span>
              <h2 className="mt-3 heading-display text-navy text-balance">
                Let&apos;s talk about your{" "}
                <em className="text-gold italic font-normal">next</em> financial
                move.
              </h2>
              <p className="mt-5 text-base md:text-lg text-charcoal/75 leading-relaxed text-pretty">
                Whether you need a second opinion, a full audit, or a long-term
                advisory partner, our team is ready to help.
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              <Reveal direction="up" delay={80}>
                <a
                  href={`tel:${PHONE_TEL}`}
                  aria-label={`Call Praxis Consulting at ${PHONE_DISPLAY}`}
                  className="group flex items-start gap-4 rounded-2xl border border-border p-5 hover:border-gold/60 hover:bg-soft-grey transition-colors"
                >
                  <div className="h-11 w-11 rounded-xl bg-navy text-white flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-charcoal/60">
                      Phone
                    </div>
                    <div className="mt-1 text-navy font-semibold group-hover:text-gold transition-colors font-serif">
                      {PHONE_DISPLAY}
                    </div>
                    <div className="text-xs text-charcoal/60 mt-0.5">
                      Tap to call, Mon-Fri, 9:00 - 17:00 GMT
                    </div>
                  </div>
                </a>
              </Reveal>

              <Reveal direction="up" delay={160}>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Praxis Consulting office location in Google Maps"
                  className="group flex items-start gap-4 rounded-2xl border border-border p-5 hover:border-gold/60 hover:bg-soft-grey transition-colors"
                >
                  <div className="h-11 w-11 rounded-xl bg-gold text-navy flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-charcoal/60">
                      Office
                    </div>
                    <div className="mt-1 text-navy font-semibold group-hover:text-gold transition-colors font-serif">
                      {ADDRESS_LINE_1}
                    </div>
                    <div className="text-sm text-charcoal/70 font-serif">
                      {ADDRESS_LINE_2}
                    </div>
                    <div className="text-xs text-charcoal/60 mt-0.5">
                      Tap to open in Google Maps
                    </div>
                  </div>
                </a>
              </Reveal>

              <Reveal direction="up" delay={240}>
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label={`Email Praxis Consulting at ${EMAIL}`}
                  className="group flex items-start gap-4 rounded-2xl border border-border p-5 hover:border-gold/60 hover:bg-soft-grey transition-colors"
                >
                  <div className="h-11 w-11 rounded-xl bg-teal text-white flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-charcoal/60">
                      Email
                    </div>
                    <div className="mt-1 text-navy font-semibold break-all group-hover:text-gold transition-colors font-serif">
                      {EMAIL}
                    </div>
                    <div className="text-xs text-charcoal/60 mt-0.5">
                      Tap to compose a message
                    </div>
                  </div>
                </a>
              </Reveal>

              <Reveal direction="up" delay={320}>
                <div className="flex items-start gap-4 rounded-2xl border border-border p-5">
                  <div className="h-11 w-11 rounded-xl bg-navy/10 text-navy flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-charcoal/60">
                      Working Hours
                    </div>
                    <div className="mt-1 text-navy font-semibold font-serif">
                      Mon-Fri, 9am - 5pm
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal
            direction="left"
            delay={120}
            className="rounded-3xl bg-navy text-white p-8 md:p-10 relative overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-60 w-60 rounded-full bg-gold/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-teal/15 blur-3xl" />

            {sent ? (
              <div className="relative flex flex-col items-center text-center py-6">
                <div className="h-16 w-16 rounded-full bg-gold/15 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-gold" />
                </div>
                <h3 className="mt-6 font-serif text-3xl md:text-4xl font-normal">
                  <em className="italic text-gold">Thank</em> you!
                </h3>
                <p className="mt-3 text-white/75 leading-relaxed max-w-sm">
                  Your message has been sent successfully. Our team will be in
                  touch within one business day.
                </p>
                <button
                  type="button"
                  onClick={resetToForm}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy hover:bg-gold-soft transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative"
                noValidate={false}
              >
                <h3 className="font-serif text-3xl font-normal">
                  Send us a message
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  We&apos;ll get back to you within one business day.
                </p>

                <div className="mt-8 grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-xs text-white/60 uppercase tracking-wider"
                      >
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-transparent"
                        placeholder="Ama Serwaa"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-xs text-white/60 uppercase tracking-wider"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-transparent"
                        placeholder="0241 234 567"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="text-xs text-white/60 uppercase tracking-wider"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-transparent"
                      placeholder="Your business name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="text-xs text-white/60 uppercase tracking-wider"
                    >
                      Service of interest
                    </label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger
                        id="service"
                        className="mt-2 w-full h-auto rounded-lg bg-white/5 border-white/10 px-4 py-3 text-sm text-white focus:ring-2 focus:ring-gold/60 focus:border-transparent data-placeholder:text-white/40 hover:bg-white/10"
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-navy text-white border-white/10">
                        {services.map((s) => (
                          <SelectItem
                            key={s.slug}
                            value={s.slug}
                            className="focus:bg-gold/20 focus:text-white"
                          >
                            {s.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-xs text-white/60 uppercase tracking-wider"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-transparent resize-none"
                      placeholder="Tell us a bit about your business and what you need..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy hover:bg-gold-soft transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Send message"}
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
