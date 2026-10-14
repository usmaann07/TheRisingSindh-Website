import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap"
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://therisingsindh.com"),
  title: "The Rising Sindh | The School That Builds What Universities Can't",
  description:
    "Pakistan's first future school in Sehwan Sharif, Sindh — where children master the Sindh board syllabus and build with AI, run real companies before Matric, and graduate with proof, not just certificates.",
  keywords: [
    "The Rising Sindh",
    "Rising Sindh Sehwan",
    "Pakistan future school",
    "Sindh Board school",
    "AI school Pakistan",
    "Matric curriculum",
    "Sindhi language school",
    "Ali Murtaza Solangi",
    "Builders not degree holders"
  ],
  authors: [{ name: "The Rising Sindh Academic Foundation" }],
  openGraph: {
    title: "The Rising Sindh | Builders, Not Degree-Holders",
    description:
      "Pakistan's first future school in Sehwan Sharif. Full Sindh Board curriculum + AI from Class 1 + registered student companies by Class 8.",
    url: "https://therisingsindh.com",
    siteName: "The Rising Sindh",
    images: [
      {
        url: "/images/hero-students.jpg",
        width: 1200,
        height: 630,
        alt: "Students of The Rising Sindh building robotics and AI prototypes in Sehwan"
      }
    ],
    locale: "en_PK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Rising Sindh | The School That Builds What Universities Can't",
    description: "Nursery to Matric in Sehwan Sharif — AI from Class 1, student companies by Class 8.",
    images: ["/images/hero-students.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "The Rising Sindh",
    alternateName: "دي رائزنگ سنڌ",
    url: "https://therisingsindh.com",
    logo: "https://therisingsindh.com/images/hero-students.jpg",
    slogan: "Builders, not degree-holders.",
    description:
      "Pakistan's first future school in Sehwan Sharif, where children master the Sindh Board syllabus and build with AI, run companies before Matric, and graduate with proof.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sehwan Sharif",
      addressRegion: "Sindh",
      addressCountry: "Pakistan"
    },
    founder: {
      "@type": "Person",
      name: "Ali Murtaza Solangi"
    }
  };

  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#161412] text-[#1c1917] selection:bg-[#d97706] selection:text-white font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
