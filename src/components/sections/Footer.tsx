import { Instagram, Music, Facebook } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/invites/contact/?igsh=scz2519f19ne&utm_content=zcrr5bk",
      color: "hover:text-pink-500"
    },
    {
      name: "TikTok",
      icon: Music,
      url: "https://www.tiktok.com/@universo.radio.on?_t=ZS-8zaUuWGLc4W&_r=1",
      color: "hover:text-red-500"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/19tg7fjDG6/",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <footer className="bg-radio-blue text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">
            🌍 Universo Radio Online
          </h3>
          <p className="text-radio-blue-light text-lg">
            Tu voz es tu legado
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 text-white transition-colors duration-300 ${link.color}`}
            >
              <link.icon className="w-6 h-6" />
              <span className="hidden md:inline">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="border-t border-radio-blue-light/30 pt-8 text-center">
          <p className="text-radio-blue-light">
            © 2024 Universo Radio Online. Todos los derechos reservados.
          </p>
          <p className="text-sm text-radio-blue-light/70 mt-2">
            Conectando voces conscientes con el mundo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;