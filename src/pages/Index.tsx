import HeroSection from "@/components/HeroSection";
import SuccessShowcase from "@/components/SuccessShowcase";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import PackagesSection from "@/components/PackagesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SuccessShowcase />
      <MissionSection />
      <ServicesSection />
      <ResultsSection />
      <PackagesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;