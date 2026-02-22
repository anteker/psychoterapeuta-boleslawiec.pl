import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin", "latin-ext"], 
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"] 
});

const lato = Lato({ 
  subsets: ["latin", "latin-ext"], 
  weight: ["300", "400", "700"], 
  variable: "--font-lato" 
});

export const metadata: Metadata = {
  title: "Psychoterapeuta Bolesławiec | Terapia indywidualna",
  description: "Profesjonalna psychoterapia w Bolesławcu. Terapia indywidualna i wsparcie emocjonalne.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Psychoterapeuta Bolesławiec",
    description: "Profesjonalna pomoc psychoterapeutyczna w Bolesławcu.",
    url: "https://psychoterapeuta-boleslawiec.pl",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}