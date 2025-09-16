import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const OfferSection = () => {
  const benefits = [
    "Espacio semanal (55 minutos)",
    "Difusión en redes y comunidad",
    "Soporte técnico completo",
    "Acompañamiento personalizado",
    "Acceso a entrenamientos sobre marca personal",
    "Bono exclusivo: Taller de 2 horas para diseñar tu programa con impacto"
  ];

  const scrollToDirectors = () => {
    const directorsSection = document.getElementById('directores');
    if (directorsSection) {
      directorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-radio-blue to-radio-purple">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-12 shadow-glow">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-radio-blue mb-6">
              Oferta Exclusiva
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-radio-gold">
              Tu Propio Programa en Universo Radio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-radio-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-radio-blue font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="cta"
              size="lg"
              onClick={scrollToDirectors}
              className="text-xl px-12 py-6 h-auto rounded-xl"
            >
              📞 Hablar con un Director Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;