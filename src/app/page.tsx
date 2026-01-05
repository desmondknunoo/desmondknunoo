import { HeroSection } from "@/components/ui/hero-section-5";
import { PortfolioSection } from "@/components/portfolio-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </>
  );
}
