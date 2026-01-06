"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { LogoSlider } from "@/components/logo-slider";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

// Using existing portfolio projects as products for the parallax
const products = [
  {
    title: "SmartSale ERP Website",
    link: "https://smartsaleerp.com",
    thumbnail: "/images/sserpImage.jpg",
  },
  {
    title: "Kampuze",
    link: "https://www.figma.com/proto/oiJYt62X4b2nbWeCQdVVat/Kampuze-Music",
    thumbnail: "/images/kampuzeImage.jpg",
  },
  {
    title: "U4nor",
    link: "https://www.behance.net/gallery/91548529/U4nor-Android-App-UIUX",
    thumbnail: "/images/u4norImage.jpg",
  },
  {
    title: "NSS Ghana",
    link: "#",
    thumbnail: "/images/nssGHImage.jpg",
  },
  {
    title: "Lamugin",
    link: "#",
    thumbnail: "/images/lamuginImage.jpg",
  },
  {
    title: "AWS Project",
    link: "#",
    thumbnail: "/images/awsImage.jpg",
  },
  {
    title: "1 Ghana Lon",
    link: "#",
    thumbnail: "/images/1ghalonImage.jpg",
  },
  {
    title: "Hormnes",
    link: "#",
    thumbnail: "/images/hormnesImage.jpg",
  },
  {
    title: "DMS",
    link: "#",
    thumbnail: "/images/dmsImage.jpg",
  },
  {
    title: "Fudrin",
    link: "#",
    thumbnail: "/images/fudrinImage.jpg",
  },
  {
    title: "SBS",
    link: "#",
    thumbnail: "/images/sbsImage.jpg",
  },
  {
    title: "SUT",
    link: "#",
    thumbnail: "/images/sutImage.jpg",
  },
  {
    title: "Logofolio",
    link: "#",
    thumbnail: "/images/logofolioImage.jpg",
  },
  {
    title: "OPD",
    link: "#",
    thumbnail: "/images/opdImage.jpg",
  },
  {
    title: "Ranxbrand",
    link: "#",
    thumbnail: "/images/ranxbrandImage.jpg",
  },
];

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
