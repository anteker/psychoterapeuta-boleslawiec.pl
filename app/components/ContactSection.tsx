import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-3">
          Zadbaj o swoje zdrowie psychiczne!
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
        <p className="text-muted-foreground mb-12 text-lg font-light">
          Umów się na pierwszą konsultację
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
              <Phone size={22} className="text-primary" />
            </div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground">Telefon</p>
            <a href="tel:+48664010733" className="text-foreground font-light hover:text-primary transition-colors">
              +48 664 010 733
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
              <Mail size={22} className="text-primary" />
            </div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground">Email</p>
            <a href="mailto:monika@erens.pl" className="text-foreground font-light hover:text-primary transition-colors">
              monika@erens.pl
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
              <MapPin size={22} className="text-primary" />
            </div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground">Adres</p>
            <p className="text-foreground font-light">
              Grunwaldzka 7/3, Drugie piętro, 59-700 Bolesławiec
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;