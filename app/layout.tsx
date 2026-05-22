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
  title: "Praxis Consulting | Accounting, Tax & Assurance in Ghana",
  description:
    "Praxis Consulting provides high-quality accounting, tax consulting, and assurance services to businesses across Ghana. Through practical, actionable insights and unwavering integrity, we help clients achieve compliance, optimize performance, and unlock sustainable growth.",
  applicationName: "Praxis Consulting",
  generator: "Praxis Consulting",
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
  },
  keywords: [
    "Praxis Consulting",
    "Accounting and Assurance Ghana",
    "Accounting Firm Ghana",
    "Accounting Ghana",
    "Tax Consulting Ghana",
    "Assurance Services",
    "Business Advisory",
    "Payroll Management",
    "Spintex Accra",
    "West Africa Accounting",
  ],
  openGraph: {
    title: "Praxis Consulting | Accounting, Tax & Assurance in Ghana",
    description:
      "Praxis Consulting provides high-quality accounting, tax consulting, and assurance services to businesses across Ghana. Through practical, actionable insights and unwavering integrity, we help clients achieve compliance, optimize performance, and unlock sustainable growth.",
    type: "website",
    locale: "en_GH",
    siteName: "Praxis Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praxis Consulting | Accounting, Tax & Assurance in Ghana",
    description:
      "Praxis Consulting provides high-quality accounting, tax consulting, and assurance services to businesses across Ghana. Through practical, actionable insights and unwavering integrity, we help clients achieve compliance, optimize performance, and unlock sustainable growth.",
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
