"use client";
import { PortfolioHeader } from "@/components/portfolio-header";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { LogoSlider } from "@/components/logo-slider";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollHint } from "@/components/scroll-hint";
import { landingHighlights } from "@/lib/landing-highlights";

export default function Home() {
  return (
    <main className="bg-black">
      <PortfolioHeader />
      <HeroParallax products={landingHighlights} />
      <LogoSlider />
      <ContactSection />
      <Footer />
      <ScrollHint />
    </main>
  );
}
