import { Button } from "@/components/ui/button";

const ClosingSection = () => {
  const handleFinalCTA = () => {
    const phoneNumber = "5491131772207";
    const message = encodeURIComponent("¡Quiero ser parte de Universo Radio Online! Me interesa comenzar mi programa radial y expandir mi marca personal.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-radio-purple via-radio-blue to-radio-gold">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-glow">
          <h2 className="text-3xl md:text-4xl font-bold text-radio-blue mb-8 leading-relaxed">
            🎙️ Tu voz es un regalo divino
          </h2>
          <p className="text-xl md:text-2xl text-radio-blue/80 mb-12 leading-relaxed">
            Universo Radio es el escenario donde ese regalo se convierte en 
            <span className="font-semibold text-radio-gold"> luz</span>,
            <span className="font-semibold text-radio-purple"> conciencia</span> y
            <span className="font-semibold text-radio-blue"> transformación global</span>.
          </p>

          <Button
            variant="hero"
            size="lg"
            onClick={handleFinalCTA}
            className="text-xl px-12 py-6 h-auto rounded-xl"
          >
            ✨ Quiero ser parte de Universo Radio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;