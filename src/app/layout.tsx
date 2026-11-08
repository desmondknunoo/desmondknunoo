import type { Metadata, Viewport } from "next";
import { Oxanium, Schibsted_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollReveal } from "@/components/scroll-reveal";
import "./globals.css";
import { jsonLd, personJsonLd, siteDescription, siteKeywords, siteName, siteUrl, twitterHandle, websiteJsonLd } from "@/lib/seo";

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-schibsted",
  display: "swap",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#141311" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oxanium.variable} ${schibsted.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd([personJsonLd, websiteJsonLd]) }}
        />
        <ThemeProvider>
          {children}
          <ScrollReveal />
        </ThemeProvider>
      </body>
    </html>
  );
}
