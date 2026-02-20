const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground font-light tracking-wide">
          © {new Date().getFullYear()} Psychoterapia. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;