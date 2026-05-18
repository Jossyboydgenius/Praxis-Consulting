import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ValuesSection } from "@/components/values-section"
import { FounderSection } from "@/components/founder-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <FounderSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
