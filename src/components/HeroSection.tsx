import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-ukraine.jpg";
import tridentImage from "@/assets/trident-ukraine.png";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { locale, t } = useLanguage();
  
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getTrident = () => {
    if (locale === 'ua') return <img src={tridentImage} alt="Тризуб України" className="w-32 h-32 mx-auto" />;
    if (locale === 'no') return <img src="/lovable-uploads/dafd268e-3dde-4b18-845e-b291930690bf.png" alt="Герб Львова" className="w-32 h-32 mx-auto" />;
    if (locale === 'eu') return <img src="/lovable-uploads/807b38cd-175a-4cc2-bc43-b4bcc9e6004e.png" alt="Герб міста" className="w-32 h-32 mx-auto" />;
    return <img src={tridentImage} alt="Тризуб України" className="w-32 h-32 mx-auto" />;
  };

  return (
    <>
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-gray-900">
        <div className="max-w-3xl mx-auto">
          
          {/* Clean Title */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
              {t.hero.title}
            </h1>
            </div>
            
            {/* Clean Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
            
            {/* Mission statement */}
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.hero.mission}
            </p>
            
            {/* Clean CTA */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg font-medium rounded-lg" 
                onClick={scrollToContact}
              >
                {t.hero.cta.application}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-medium rounded-lg" 
                onClick={scrollToContact}
              >
                {t.hero.cta.calculate}
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-gray-600 text-sm">
              <span className="flex items-center gap-2">
                <span>✓</span>
                {t.hero.features.service}
              </span>
              <span className="flex items-center gap-2">
                <span>✓</span>
                {t.hero.features.servers}
              </span>
              <span className="flex items-center gap-2">
                <span>✓</span>
                {t.hero.features.security}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;