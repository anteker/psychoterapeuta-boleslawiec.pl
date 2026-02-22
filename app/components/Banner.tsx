import Image from "next/image";

const Banner = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/logo.png"
          alt="Psychoterapia"
          width={1900}
          priority
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-12 px-6 py-16 md:py-20">
        <div className="max-w-3xl text-center">
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-foreground italic">
            Wewnętrzny spokój. Większa samoświadomość.
            <br />
            Poczucie własnej wartości. Dobre relacje.
          </p>
          <p className="mt-6 text-lg md:text-xl font-light tracking-wide text-muted-foreground">
            Czy tego właśnie szukasz?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;