import { PortfolioHeader } from "@/components/portfolio-header";
import { PhotoBoard } from "@/components/photo-board";
import { LatestRow } from "@/components/latest-row";
import { LogoSlider } from "@/components/logo-slider";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-paper text-ink">
      <PortfolioHeader />
      <PhotoBoard />
      <LatestRow />
      <LogoSlider />
      <ContactSection />
      <Footer />
    </main>
  );
}
