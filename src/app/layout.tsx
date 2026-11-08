import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollReveal } from "@/components/scroll-reveal";
import "./globals.css";
import { jsonLd, personJsonLd, siteDescription, siteKeywords, siteName, siteUrl, twitterHandle, websiteJsonLd } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Desmond Kwame Nunoo | Software Engineer, Designer & STEM Educator",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: siteKeywords,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName,
    title: "Desmond Kwame Nunoo | Software Engineer, Designer & STEM Educator",
    description: siteDescription,
    locale: "en_GB",
    firstName: "Desmond",
    lastName: "Nunoo",
    username: "desmondknunoo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desmond Kwame Nunoo | Software Engineer, Designer & STEM Educator",
    description: siteDescription,
    creator: twitterHandle,
    site: twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd([personJsonLd, websiteJsonLd]) }}
        />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
