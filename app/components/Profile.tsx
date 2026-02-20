import Image from "next/image";

const TherapistProfile = () => {
  return (
    <section id="o-mnie" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/face.jpg"
              width={100}
              height={100}
              alt="Zdjęcie terapeuty"
              className="w-full max-w-md object-cover shadow-lg"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-4">
                Monika Erens
              </h2>
              <div className="w-16 h-0.5 bg-primary mb-6" />
              <p className="text-muted-foreground italic leading-relaxed text-lg">
                  Dyplomowany psychoterapeuta psychodynamiczny.
                 </p>
            </div>

            <div id="kwalifikacje">
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-3">
                Kwalifikacje
              </h3>
              <div className="w-12 h-0.5 bg-primary mb-4" />
              <div className="space-y-4 text-foreground leading-relaxed font-light">
                 <p>
                   Ukończyłam czteroletnią Szkołę Psychoterapii Psychodynamicznej 
                   w Krakowskim Centrum Psychodynamicznym, które jest akredytowane 
                   przez Polskie Towarzystwo Psychologiczne oraz Polskie Towarzystwo 
                   Psychoterapii Psychodynamicznej.
                 </p>
                 <p>
                   Aktualnie pracuję jako psychoterapeuta w Wojewódzkim Szpitalu 
                   dla Nerwowo i Psychicznie Chorych w Bolesławcu. Prowadzę indywidualną 
                   psychoterapię osób dorosłych.
                 </p>
                 <p>
                   Regularnie korzystam z superwizji u certyfikowanego superwizora. 
                   Jestem ponadto członkiem Polskiego Towarzystwa Psychoterapii 
                   Psychodynamicznej.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapistProfile;