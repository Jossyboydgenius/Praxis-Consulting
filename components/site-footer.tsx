import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone } from "lucide-react";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1BrrhtdetK/?mibextid=wwXIfr",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/praxisconsultinggh",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/113120940",
    icon: Linkedin,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@praxisconsultinggh",
    icon: TikTokIcon,
  },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.44v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.63 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05 6.33 6.33 0 0 0-5.8 9.47 6.33 6.33 0 0 0 11.51-3.66V9.09a8.37 8.37 0 0 0 4.87 1.56V7.21a4.85 4.85 0 0 1-.36-.52Z" />
    </svg>
  );
}

const footerServices = [
  { title: "Accounting", slug: "accounting" },
  { title: "Tax Consulting", slug: "tax-consulting" },
  { title: "Business Advisory", slug: "business-advisory" },
  { title: "Assurance Services", slug: "assurance-services" },
  { title: "Payroll Management", slug: "payroll-management" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Praxis Consulting"
                width={248}
                height={60}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-sm">
              Practical accounting, tax and assurance services for ambitious
              businesses across Ghana and West Africa.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:text-navy hover:bg-gold hover:border-gold transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-normal uppercase tracking-wider text-gold">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-gold transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-normal uppercase tracking-wider text-gold">
              Visit us
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=K11%20Hydraform%20Estate%2C%20Spintex%2C%20Accra%2C%20Ghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  K11 Hydraform Estate, Spintex, Accra, Ghana
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <a
                  href="tel:+233548636721"
                  className="hover:text-gold transition-colors"
                >
                  0548 636 721
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Praxis Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
