import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Axeptio from "./components/Axeptio";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

// EmOne variants
const EmOneSemiBold = localFont({
  src: [
    {
      path: "./fonts/EmOne-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/EmOne-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-em-one",
});

// Kollektif variants
const Kollektif = localFont({
  src: [
    {
      path: "./fonts/Kollektif.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Kollektif-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Kollektif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Kollektif-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-kollektif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://genieclimfrance.fr"),
  title: "GénieClim France",
  description:
    "GENIE CLIM FRANCE est le spécialiste de la rénovation globale énergétique. Profitez de la rénovation de votre système de chauffage, de distribution d'eau chaude sanitaire mais également de votre isolation à prix mini.",
  openGraph: {
    type: "website",
    url: "https://genieclimfrance.fr",
    title: "GénieClim France",
    description:
      "GENIE CLIM FRANCE est le spécialiste de la rénovation globale énergétique. Profitez de la rénovation de votre système de chauffage, de distribution d'eau chaude sanitaire mais également de votre isolation à prix mini.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GénieClim France",
      },
    ],
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
  return (
    <html lang="fr">
      <head>
        {gaTrackingId ? (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}');
                `}
            </Script>
          </>
        ) : null}
      </head>
      <body className={`${EmOneSemiBold.variable} ${Kollektif.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <Axeptio />
        <Analytics />
      </body>
    </html>
  );
}
