const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-radio-blue mb-6">
            Voces que Inspiran
          </h2>
          <p className="text-xl text-muted-foreground">
            Próximamente: testimonios de nuestros locutores
          </p>
        </div>

        <div className="bg-gradient-to-r from-radio-gold/10 via-radio-purple/10 to-radio-blue/10 rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-semibold text-radio-blue mb-6">
              "Cada voz que se suma a Universo Radio es una nueva estrella en nuestro firmamento sonoro"
            </p>
            <p className="text-lg text-radio-purple font-medium">
              - Equipo Universo Radio Online
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;