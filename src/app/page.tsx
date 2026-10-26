"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { LogoSlider } from "@/components/logo-slider";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { workItems } from "@/lib/work";

const products = workItems.map((item) => ({
  title: item.title,
  link: `/work/${item.slug}`,
  thumbnail: item.thumbnail,
}));

export default function Home() {
  return (
    <main className="bg-black">
      <HeroParallax products={products} />
      <LogoSlider />
      <ContactSection />
      <Footer />
    </main>
  );
}
