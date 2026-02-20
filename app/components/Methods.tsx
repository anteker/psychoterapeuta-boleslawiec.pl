const WorkMethods = () => {
  return (
    <section id="metody" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-3">
            Oferta
          </h2>
          <div className="w-12 h-0.5 bg-primary mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-background p-8 shadow-sm space-y-4">
              <h3 className="font-heading text-2xl font-medium text-foreground">
                Konsultacja psychoterapeutyczna
              </h3>
              <p className="text-primary text-3xl font-heading font-semibold">
                200 zł
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                To rozmowa z terapeutą, podczas której możesz opowiedzieć o tym, co Cię martwi i zastanowić się, 
                jakie wsparcie będzie dla Ciebie najlepsze. To taki pierwszy krok, żeby lepiej zrozumieć swoją sytuację.
              </p>
            </div>

           
            <div className="bg-background p-8 shadow-sm space-y-4">
              <h3 className="font-heading text-2xl font-medium text-foreground">
                Psychoterapia indywidualna
              </h3>
              <p className="text-primary text-3xl font-heading font-semibold">
                200 zł
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                To regularne spotkania, podczas których pracujesz nad sobą, swoimi emocjami i trudnościami. 
                Pomaga lepiej siebie poznać, znaleźć rozwiązania i poczuć się pewniej w codziennym życiu.
              </p>
            </div>
          </div>

          <p className="mt-8 text-muted-foreground font-light text-center">
            Każda konsultacja trwa 50 minut.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkMethods;