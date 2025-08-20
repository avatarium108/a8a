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
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
            
            <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-black mb-2 leading-tight">
              {/* Main text with special styling */}
              <div className="relative inline-block">
                <span className="absolute -left-24 top-0 font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200 animate-fade-in">
                  para.tech
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-fade-in bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-700">
                  Автоматизуємо
                </span>
                {/* Underline effect only for Автоматизуємо */}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-fade-in" style={{ animationDelay: '0.3s' }}></div>
              </div>
              
              <div className="relative mt-4 text-center leading-none" style={{ lineHeight: '0.7' }}>
                <div className="-mb-6">
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-extrabold animate-fade-in transform hover:scale-105 transition-transform duration-300 text-2xl md:text-4xl lg:text-5xl" style={{ animationDelay: '0.5s' }}>
                    українські компанії
                  </span>
                </div>
                <div className="-mb-6">
                  <span className="text-secondary text-xl md:text-2xl animate-fade-in" style={{ animationDelay: '0.7s' }}>та</span>
                </div>
                <div>
                  <span className="inline-block text-secondary font-extrabold animate-fade-in transform hover:scale-105 transition-transform duration-300 text-2xl md:text-4xl lg:text-5xl" style={{ animationDelay: '0.9s' }}>
                    підприємців
                  </span>
                </div>
              </div>
            </h1>
            
            {/* Floating elements */}
            <div className="absolute top-0 left-1/4 w-3 h-3 bg-secondary rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-primary rounded-full animate-bounce opacity-70" style={{ animationDelay: '1.8s' }}></div>
            <div className="absolute top-1/2 right-0 w-4 h-4 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '2.2s' }}></div>
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
                  left: '-12.7rem' // зсунуто ще на 5см вліво
                }}
              >
                <div className="bg-yellow-400 px-2 py-1 rounded-md">{t.common.supportNote}</div>
                <div className="mt-2 flex justify-center">
                  <img 
                    src="/lovable-uploads/fafe9872-021b-43cb-9181-4655cc8ee039.png" 
                    alt="Хрест українських збройних сил" 
                    className="w-12 h-12"
                  />
                </div>
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