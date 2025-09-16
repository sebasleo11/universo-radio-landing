import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-radio-bg.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5491131772207";
    const message = encodeURIComponent("¡Hola! Quiero mi espacio en Universo Radio Online. Me interesa tener mi propio programa.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-radio-blue/80 via-radio-purple/60 to-radio-gold/40"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          🌍 <span className="bg-gradient-to-r from-radio-gold-light to-radio-purple bg-clip-text text-transparent">
            Universo Radio Online
          </span>
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mb-4">
          Tu voz es tu legado
        </p>
        
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-xl md:text-2xl mb-4 font-medium">
            <span className="text-radio-gold-light">Locución Consciente:</span> comunica desde el alma
          </p>
          <p className="text-lg md:text-xl text-radio-blue-light">
            Haz crecer tu marca personal y vende más con tu propio programa radial
          </p>
        </div>

        <Button
          variant="hero"
          size="lg"
          onClick={handleWhatsAppClick}
          className="text-xl px-12 py-6 h-auto rounded-xl"
        >
          🎙️ Quiero mi espacio en la radio
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;