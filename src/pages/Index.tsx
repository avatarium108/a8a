import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AchievementsSection from "@/components/AchievementsSection";
import PackagesSection from "@/components/PackagesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AIManagerChatbot from "@/components/AIManagerChatbot";
import Navigation from "@/components/Navigation";
import ProgressIndicator from "@/components/ProgressIndicator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AchievementsSection />
      <PackagesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <AIManagerChatbot />
      <ProgressIndicator />
    </div>
  );
};

export default Index;