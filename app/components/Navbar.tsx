"use client";

import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Psychoterapia", href: "#psychoterapia" },
  { label: "O mnie", href: "#o-mnie" },
  { label: "Oferta", href: "#metody" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsOpen(false);

      if (typeof document !== "undefined") {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        } else if (href === "#") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    },
    []
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => handleClick(e, "#")}
          className="flex items-center gap-2"
        >
          <Image src="/logo_nav.webp" alt="Logo" width={60} height={60} className="h-10 w-auto" />
          <span className="font-heading text-lg tracking-wide text-foreground">
            Gabinet Psychoterapii
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm font-light tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.znanylekarz.pl/monika-erens/psychoterapeuta/boleslawiec"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2.5 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Umów wizytę
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="block text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.znanylekarz.pl/monika-erens/psychoterapeuta/boleslawiec"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-4 px-6 py-2.5 border border-primary text-primary text-sm tracking-widest uppercase"
          >
            Umów wizytę
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;