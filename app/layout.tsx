import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}