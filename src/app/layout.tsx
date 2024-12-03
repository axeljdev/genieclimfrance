import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

const EmOne = localFont({
  src: "./fonts/EmOne-SemiBold.ttf",
  variable: "--font-em-one",
  weight: "100 900",
});
const Kollektif = localFont({
  src: "./fonts/Kollektif.ttf",
  variable: "--font-kollektif",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GénieClim France",
  description:
    "GENIE CLIM FRANCE est le spécialiste de la rénovation globale énergétique. Profitez de la rénovation de votre système de chauffage, de distribution d'eau chaude sanitaire mais également de votre isolation à prix mini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${EmOne.variable} ${Kollektif.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
