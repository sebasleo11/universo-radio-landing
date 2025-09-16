const InspirationalSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-radio-purple/20 via-radio-gold/10 to-radio-blue/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-card">
          <h2 className="text-3xl md:text-4xl font-bold text-radio-blue mb-8 leading-relaxed">
            En Universo Radio creemos que tu voz es energía y vibración
          </h2>
          <p className="text-xl md:text-2xl text-radio-blue/80 leading-relaxed">
            Abrir un micrófono es abrir tu misión. Aquí tu voz se convierte en 
            <span className="font-semibold text-radio-gold"> sanación</span>,
            <span className="font-semibold text-radio-purple"> impacto</span> y
            <span className="font-semibold text-radio-blue"> expansión</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InspirationalSection;