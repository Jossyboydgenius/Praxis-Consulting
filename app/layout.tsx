import type { Metadata } from "next";
import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToggle } from "@/components/scroll-toggle";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const georgia = localFont({
  src: [
    { path: "./fonts/georgia.ttf", weight: "400", style: "normal" },
    { path: "./fonts/georgiai.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-georgia",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://praxisconsultinggh.org"),
  title: {
    default: "Praxis Consulting | Accounting, Tax & Assurance in Ghana",
    template: "%s | Praxis Consulting",
  },
  description:
    "Professional accounting firm in Ghana. Praxis Consulting offers chartered accounting, tax consulting, assurance, payroll, and business advisory services in Spintex, Accra.",
  applicationName: "Praxis Consulting",
  generator: "Praxis Consulting",
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
  },
  keywords: [
    "Praxis Consulting",
    "Accounting firms in Ghana",
    "Best accounting firm in Ghana",
    "Professional accountants in Ghana",
    "Chartered accountants in Ghana",
    "Accounting services for businesses in Ghana",
    "Tax consulting services in Ghana",
    "Tax consultants in Ghana",
    "Ghana tax compliance services",
    "Business advisory services in Ghana",
    "Assurance services in Ghana",
    "Audit firms in Ghana",
    "External audit services Ghana",
    "Internal audit services Ghana",
    "Payroll management services Ghana",
    "Outsourced accounting services Ghana",
    "SME accounting services Ghana",
    "Bookkeeping services in Ghana",
    "Financial reporting services Ghana",
    "Corporate accounting solutions Ghana",
    "Business compliance services Ghana",
    "Accounting firm near me Ghana",
    "Tax consultant for SMEs Ghana",
    "Outsourced accounting services for small businesses Ghana",
    "Affordable accounting services Ghana",
    "Audit and assurance firm Ghana",
    "Spintex Accra",
    "Ghana accounting",
    "Accra accounting",
    "West Africa accounting",
  ],
  openGraph: {
    title: "Praxis Consulting | Accounting, Tax & Assurance in Ghana",
    description:
      "Professional accounting firm in Ghana. Praxis Consulting offers chartered accounting, tax consulting, assurance, payroll, and business advisory services in Spintex, Accra.",
    type: "website",
    locale: "en_GH",
    siteName: "Praxis Consulting",
    images: [
      {
        url: "/images/hero-team.jpg",
        width: 1200,
        height: 630,
        alt: "Praxis Consulting Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praxis Consulting | Accounting, Tax & Assurance in Ghana",
    description:
      "Professional accounting firm in Ghana. Praxis Consulting offers chartered accounting, tax consulting, assurance, payroll, and business advisory services in Spintex, Accra.",
    images: ["/images/hero-team.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${georgia.variable} bg-background`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "Praxis Consulting",
              "image": "https://praxisconsultinggh.org/images/logo.png",
              "@id": "https://praxisconsultinggh.org/#organization",
              "url": "https://praxisconsultinggh.org",
              "telephone": "+233548636721",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "K11 Hydraform Estate, Spintex",
                "addressLocality": "Accra",
                "addressRegion": "Greater Accra",
                "addressCountry": "GH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 5.6264,
                "longitude": -0.1014
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "founder": {
                "@type": "Person",
                "name": "Joseph Kofi Wia"
              }
            })
          }}
        />
        {children}
        <ScrollToggle />
        <Toaster
          position="top-center"
          theme="dark"
          toastOptions={{
            style: {
              background: "#0b1f3a",
              color: "#ffffff",
              border: "1px solid rgba(201, 163, 78, 0.35)",
            },
          }}
        />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
