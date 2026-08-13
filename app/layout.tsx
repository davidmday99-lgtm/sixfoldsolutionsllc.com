import type { Metadata } from "next";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MobileActionBar } from "./components/MobileActionBar";
import { businessInfo, siteUrl } from "./config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Barge & Marine Delivery | Six Fold Solutions LLC | Alton, IL",
    template: "%s | Six Fold Solutions LLC",
  },
  description:
    "Six Fold Solutions LLC provides dependable shoreside delivery services for barges, towboats and marine crews on the Mississippi River from Alton, Illinois.",
  applicationName: businessInfo.companyName,
  keywords: [
    "barge delivery Alton IL",
    "Mississippi River barge delivery",
    "towboat delivery service",
    "marine delivery service Alton Illinois",
    "vessel supply delivery",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: businessInfo.companyName,
    title: "River Delivery. Done Right.",
    description:
      "Dependable shoreside delivery for barges, towboats and marine crews on the Mississippi River.",
    images: [{ url: "/og.png", width: 1733, height: 907, alt: "Six Fold Solutions river delivery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "River Delivery. Done Right.",
    description:
      "Dependable shoreside delivery for Mississippi River vessels and crews.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: businessInfo.companyName,
  url: siteUrl,
  description:
    "Shoreside delivery support for barges, towboats, marine crews, and commercial river vessels in the Mississippi River region around Alton, Illinois.",
  areaServed: {
    "@type": "Place",
    name: "Mississippi River region surrounding Alton, Illinois",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: businessInfo.city,
    addressRegion: businessInfo.state,
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: businessInfo.ownerName,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileActionBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}

