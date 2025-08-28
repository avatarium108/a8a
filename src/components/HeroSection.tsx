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
    if (locale === 'no') return <div className="w-32 h-32 mx-auto flex items-center justify-center text-6xl">🇳🇴</div>;
    if (locale === 'eu') return <img src="/lovable-uploads/807b38cd-175a-4cc2-bc43-b4bcc9e6004e.png" alt="Герб міста" className="w-32 h-32 mx-auto" />;
    return <img src={tridentImage} alt="Тризуб України" className="w-32 h-32 mx-auto" />;
  };

  const getHeroClasses = () => {
    if (locale === 'no') {
      return 'relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-white';
    }
    return 'relative min-h-screen flex items-center justify-center overflow-hidden pt-16';
  };

  const getContentClasses = () => {
    if (locale === 'no') {
      return 'relative z-10 container mx-auto px-4 text-center text-slate-700';
    }
    return 'relative z-10 container mx-auto px-4 text-center text-white';
  };

  const getBackgroundOverlay = () => {
    if (locale === 'no') {
      return (
        <div className="absolute inset-0 section-gradient opacity-60"></div>
      );
    }
    return (
      <>
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
      </>
    );
  };

  return (
    <>
      <Navigation />
      <section className={getHeroClasses()}>
        {/* Background */}
        {getBackgroundOverlay()}
        
        {/* Content */}
        <div className={getContentClasses()}>
          <div className="max-w-4xl mx-auto">
            
            {/* Main title */}
            <div className="relative mb-8">
              {/* Background accent - hidden for Norwegian */}
              {locale !== 'no' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
              )}
              
              <h1 className={`relative ${locale === 'no' ? 'text-3xl md:text-5xl lg:text-6xl font-medium' : 'text-4xl md:text-6xl lg:text-7xl font-black'} mb-2 leading-tight`}>
                {/* Norwegian simplified styling */}
                {locale === 'no' ? (
                  <div className="space-y-2">
                    <div className={`${locale === 'no' ? 'text-slate-800' : 'text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary'}`}>
                      {t.hero.title}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative inline-block">
                      <span className="absolute left-[-30rem] top-0 font-mono text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200 animate-fade-in">
                        para.tech
                      </span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-fade-in bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-700">
                        Автоматизуємо
                      </span>
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
                  </>
                )}
              </h1>
              
              {/* Floating elements - hidden for Norwegian */}
              {locale !== 'no' && (
                <>
                  <div className="absolute top-0 left-1/4 w-3 h-3 bg-secondary rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.2s' }}></div>
                  <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-primary rounded-full animate-bounce opacity-70" style={{ animationDelay: '1.8s' }}></div>
                  <div className="absolute top-1/2 right-0 w-4 h-4 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '2.2s' }}></div>
                </>
              )}
            </div>
          
            {/* Subtitle with support note */}
            <div className="relative mb-4">
              <p className={`${locale === 'no' ? 'text-lg md:text-xl font-normal text-slate-600' : 'text-xl md:text-2xl font-medium opacity-90'}`}>
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
                    left: '-12.7rem'
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
            <p className={`${locale === 'no' ? 'text-base md:text-lg mb-8 max-w-2xl mx-auto text-slate-600 font-normal' : 'text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-80 font-light'}`}>
              {t.hero.mission}
            </p>
            
            {/* Main CTA with premium styling */}
            <div className="relative mb-8">
              {/* Premium urgency badge - hidden for Norwegian */}
              {locale !== 'no' && (
                <div className="inline-flex items-center gap-2 glass-ukraine text-white px-6 py-3 rounded-full text-sm font-bold mb-6 animate-glow">
                  ⚡ Обмежена пропозиція • тільки цього місяця • -25%
                </div>
              )}
              
              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  variant={locale === 'no' ? 'default' : 'premium'}
                  size={locale === 'no' ? 'lg' : 'xl'}
                  className={locale === 'no' ? 
                    'btn-primary w-full sm:w-auto text-base px-8 py-3' : 
                    'w-full sm:w-auto font-display text-xl px-16 py-6 animate-scale-in shadow-premium'
                  }
                  onClick={scrollToContact}
                  style={{ animationDelay: '0.2s' }}
                >
                  {locale === 'no' ? '🚀' : '🚀'} {t.hero.cta.application}
                </Button>
                <Button 
                  variant={locale === 'no' ? 'outline' : 'glass'}
                  size="lg" 
                  className={locale === 'no' ? 
                    'btn-secondary w-full sm:w-auto text-base px-8 py-3' : 
                    'w-full sm:w-auto text-lg px-10 py-4 font-semibold animate-scale-in'
                  }
                  onClick={scrollToContact}
                  style={{ animationDelay: '0.4s' }}
                >
                  {locale === 'no' ? '💼' : '💎'} {t.hero.cta.calculate}
                </Button>
              </div>
            
            {/* Premium trust indicators */}
            <div className={`text-sm mt-6 animate-fade-in ${locale === 'no' ? 'opacity-80' : 'opacity-90'}`} style={{ animationDelay: '0.6s' }}>
              <div className={`flex flex-wrap justify-center gap-6 ${locale === 'no' ? 'text-slate-600' : 'text-white/90'}`}>
                <span className="flex items-center gap-2">
                  <span className={`text-lg ${locale === 'no' ? 'text-blue-600' : 'text-premium-gold'}`}>✨</span>
                  <span className="font-medium">{locale === 'no' ? 'Gratis konsultasjon' : 'Безкоштовна консультація'}</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className={`text-lg ${locale === 'no' ? 'text-red-600' : 'text-secondary'}`}>🏆</span>
                  <span className="font-medium">{locale === 'no' ? 'Erfarne eksperter' : 'Перші успішні кейси'}</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className={`text-lg ${locale === 'no' ? 'text-blue-700' : 'text-success-light'}`}>💎</span>
                  <span className="font-medium">{locale === 'no' ? 'Kvalitetsgaranti' : '108% гарантія результату'}</span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Premium social proof */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 text-sm ${locale === 'no' ? 'mt-12' : ''}`}>
            <div className={`card-premium p-6 text-center ${locale === 'no' ? '' : 'backdrop-blur-sm'} animate-scale-in`} style={{ animationDelay: '0.8s' }}>
              <div className={`text-3xl mb-3 ${locale !== 'no' ? 'animate-float' : ''}`}>🏆</div>
              <div className={`font-bold text-xl ${locale === 'no' ? 'text-slate-800' : 'text-gradient-premium'}`}>10+</div>
              <div className={`font-medium ${locale === 'no' ? 'text-slate-600' : 'text-primary-light'}`}>{locale === 'no' ? 'vellykkede prosjekter' : 'успішних проєктів'}</div>
              <div className={`text-xs opacity-80 mt-1 ${locale === 'no' ? 'text-slate-500' : ''}`}>{locale === 'no' ? 'levert på tid' : 'перші результати'}</div>
            </div>
            <div className={`card-premium p-6 text-center ${locale === 'no' ? '' : 'backdrop-blur-sm'} animate-scale-in`} style={{ animationDelay: '1.0s' }}>
              <div className={`text-3xl mb-3 ${locale !== 'no' ? 'animate-float' : ''}`} style={{ animationDelay: '0.5s' }}>⭐</div>
              <div className={`font-bold text-xl ${locale === 'no' ? 'text-slate-800' : 'text-gradient-premium'}`}>4.9/5</div>
              <div className={`font-medium ${locale === 'no' ? 'text-slate-600' : 'text-primary-light'}`}>{locale === 'no' ? 'kundetilfredshet' : 'рейтинг довіри'}</div>
              <div className={`text-xs opacity-80 mt-1 ${locale === 'no' ? 'text-slate-500' : ''}`}>{locale === 'no' ? 'fra våre klienter' : 'від наших клієнтів'}</div>
            </div>
            <div className={`card-premium p-6 text-center ${locale === 'no' ? '' : 'backdrop-blur-sm'} animate-scale-in`} style={{ animationDelay: '1.2s' }}>
              <div className={`text-3xl mb-3 ${locale !== 'no' ? 'animate-float' : ''}`} style={{ animationDelay: '1.0s' }}>💎</div>
              <div className={`font-bold text-xl ${locale === 'no' ? 'text-slate-800' : 'text-gradient-premium'}`}>{locale === 'no' ? '100%' : '108%'}</div>
              <div className={`font-medium ${locale === 'no' ? 'text-slate-600' : 'text-primary-light'}`}>{locale === 'no' ? 'kvalitetsgaranti' : 'гарантія якості'}</div>
              <div className={`text-xs opacity-80 mt-1 ${locale === 'no' ? 'text-slate-500' : ''}`}>{locale === 'no' ? 'eller pengene tilbake' : 'або повернення коштів'}</div>
            </div>
          </div>
          
          {/* Enhanced features */}
          <div className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm ${locale === 'no' ? 'opacity-80' : 'opacity-90'} animate-fade-in`} style={{ animationDelay: '1.4s' }}>
            <div className={`flex items-center justify-center gap-3 ${locale === 'no' ? 'bg-white/50 border border-slate-200' : 'glass-effect'} p-3 rounded-lg`}>
              <span className={`text-xl ${locale === 'no' ? 'text-blue-600' : 'text-secondary'}`}>🧷</span>
              <span className="font-medium">{t.hero.features.service}</span>
            </div>
            <div className={`flex items-center justify-center gap-3 ${locale === 'no' ? 'bg-white/50 border border-slate-200' : 'glass-effect'} p-3 rounded-lg`}>
              <span className={`text-xl ${locale === 'no' ? 'text-blue-600' : 'text-secondary'}`}>🛡</span>
              <span className="font-medium">{t.hero.features.servers}</span>
            </div>
            <div className={`flex items-center justify-center gap-3 ${locale === 'no' ? 'bg-white/50 border border-slate-200' : 'glass-effect'} p-3 rounded-lg md:col-span-2`}>
              <span className={`text-xl ${locale === 'no' ? 'text-red-600' : 'text-secondary'}`}>💙</span>
              <span className="font-medium">{t.hero.features.team}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${locale === 'no' ? 'text-slate-400' : 'text-white'} animate-bounce`}>
        <div className={`w-6 h-10 border-2 ${locale === 'no' ? 'border-slate-400' : 'border-white'} rounded-full flex justify-center`}>
          <div className={`w-1 h-3 ${locale === 'no' ? 'bg-slate-400' : 'bg-white'} rounded-full mt-2`}></div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;