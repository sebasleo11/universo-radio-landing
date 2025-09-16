import { Sparkles, Users, TrendingUp, Globe } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Impulsa tu marca personal",
      description: "Crea contenido auténtico que refleje tu esencia y conecte con tu audiencia ideal."
    },
    {
      icon: Users,
      title: "Conecta globalmente",
      description: "Únete a una comunidad consciente y diversa que trasciende fronteras."
    },
    {
      icon: TrendingUp,
      title: "Vende con autoridad",
      description: "Posiciónate como experto en tu área y genera confianza que convierte."
    },
    {
      icon: Globe,
      title: "Alcance internacional",
      description: "Forma parte de una plataforma con proyección mundial y crecimiento constante."
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-radio-blue mb-6">
            Beneficios de tener tu propio programa
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-radio-blue mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;