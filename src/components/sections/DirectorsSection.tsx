import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import sebastianImg from "@/assets/director-sebastian.jpg";
import yarisImg from "@/assets/director-yaris.jpg";
import yaniraImg from "@/assets/director-yanira.jpg";
import ramonImg from "@/assets/director-ramon.jpg";

const DirectorsSection = () => {
  const directors = [
    {
      name: "Sebastián Acuña",
      role: "Director - Argentina",
      email: "cursoiainteligente@gmail.com",
      phone: "+54-91131772207",
      image: sebastianImg,
      whatsapp: "5491131772207"
    },
    {
      name: "Dra. Yaris Matellon",
      role: "Directora - Miami",
      email: "yarielkysmatellon@yahoo.com",
      phone: null,
      image: yarisImg,
      whatsapp: null
    },
    {
      name: "Yanira Domínguez",
      role: "Directora - Puerto Rico",
      email: "ydcastro395@gmail.com",
      phone: "+1-214-882-7216",
      image: yaniraImg,
      whatsapp: "12148827216"
    },
    {
      name: "Ramón Santos",
      role: "Fundador - Puerto Rico",
      email: "universoradioonline@gmail.com",
      phone: "+57-302-2975415",
      image: ramonImg,
      whatsapp: "573022975415"
    }
  ];

  const handleWhatsApp = (phone: string, name: string) => {
    const message = encodeURIComponent(`¡Hola ${name}! Me interesa tener mi propio programa en Universo Radio Online. ¿Podrías brindarme más información?`);
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const handleEmail = (email: string, name: string) => {
    const subject = encodeURIComponent("Interés en programa radial - Universo Radio Online");
    const body = encodeURIComponent(`Estimado/a ${name},\n\nMe interesa tener mi propio programa en Universo Radio Online. Me gustaría conocer más detalles sobre esta oportunidad.\n\nGracias por su tiempo.`);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
  };

  return (
    <section id="directores" className="py-20 bg-gradient-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-radio-blue mb-6">
            Nuestros Directores
          </h2>
          <p className="text-xl text-muted-foreground">
            Conecta directamente con nuestro equipo directivo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((director, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-radio-blue mb-2">
                {director.name}
              </h3>
              <p className="text-radio-gold font-semibold mb-4">
                {director.role}
              </p>

              <div className="space-y-3">
                <Button
                  variant="director"
                  size="sm"
                  onClick={() => handleEmail(director.email, director.name)}
                  className="w-full"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </Button>
                
                {director.whatsapp && (
                  <Button
                    variant="cta"
                    size="sm"
                    onClick={() => handleWhatsApp(director.whatsapp!, director.name)}
                    className="w-full"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;