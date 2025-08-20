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
    if (locale === 'no') return '🇳🇴';
    if (locale === 'eu') return '🇪🇺';
    return <img src={tridentImage} alt="Тризуб України" className="w-32 h-32 mx-auto" />;
  };

  return (
    <>
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Main title */}
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-7xl font-black mb-2 leading-tight">
              <span className="block text-gradient-ukraine drop-shadow-lg animate-fade-in">
                Автоматизуємо
              </span>
              <span className="block text-white drop-shadow-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                українські компанії
              </span>
              <span className="block text-secondary drop-shadow-lg animate-fade-in font-extrabold" style={{ animationDelay: '0.4s' }}>
                та підприємців
              </span>
            </h1>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary rounded-full animate-pulse opacity-70"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-secondary/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          {/* Subtitle with support note */}
          <div className="relative mb-4">
            <p className="text-xl md:text-2xl font-medium opacity-90">
              {t.hero.subtitle}
            </p>
            {locale === 'ua' && (
              <div 
                className="absolute top-10 text-black font-bold text-sm"
                style={{ 
                  transform: 'rotate(-25deg)',
                  fontFamily: 'marker, sans-serif',
                  textShadow: '2px 2px 0px rgba(255,255,255,0.9)',
                  lineHeight: '1.1',
                  left: '-3.5rem' // пересунуто на 32 см правіше
                }}
              >
                <div className="bg-yellow-400 px-2 py-1 rounded-md">{t.common.supportNote}</div>
              </div>
            )}
          </div>
          
          {/* Mission statement */}
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-80 font-light">
            {t.hero.mission}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="ukraineYellow" size="lg" className="w-full sm:w-auto text-lg px-8 py-4" onClick={scrollToContact}>
              {t.hero.cta.application}
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary" onClick={scrollToContact}>
              {t.hero.cta.test}
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 text-white hover:bg-white/20" onClick={scrollToContact}>
              {t.hero.cta.calculate}
            </Button>
          </div>
          
          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="flex items-center justify-center gap-2">
              <span className="text-secondary">🧷</span>
              <span>{t.hero.features.service}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-secondary">🛡</span>
              <span>{t.hero.features.servers}</span>
            </div>
            <div className="flex items-center justify-center gap-2 md:col-span-2">
              <span className="text-secondary">💙</span>
              <span>{t.hero.features.team}</span>
            </div>
            <div className="flex items-center justify-center gap-2 md:col-span-2">
              <span className="text-secondary">🔒</span>
              <span>{t.hero.features.security}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;