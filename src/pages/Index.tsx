import HeroSection from "@/components/HeroSection";
import SuccessShowcase from "@/components/SuccessShowcase";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AIManagerChatbot from "@/components/AIManagerChatbot";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SuccessShowcase />
      <MissionSection />
      <ServicesSection />
      <ResultsSection />
      <TestimonialsSection />
      <PackagesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <AIManagerChatbot />
    </div>
  );
};

export default Index;