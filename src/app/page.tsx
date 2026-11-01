"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { LogoSlider } from "@/components/logo-slider";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { landingHighlights } from "@/lib/landing-highlights";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroParallax products={landingHighlights} />
      <LogoSlider />
      <ContactSection />
      <Footer />
    </main>
  );
}
