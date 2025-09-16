import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import InspirationalSection from "@/components/sections/InspirationalSection";
import OfferSection from "@/components/sections/OfferSection";
import DirectorsSection from "@/components/sections/DirectorsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ClosingSection from "@/components/sections/ClosingSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <InspirationalSection />
      <OfferSection />
      <DirectorsSection />
      <TestimonialsSection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Index;
