import { Button } from "@/components/ui/button";
import logoImage from "@/assets/trident-ukraine.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { locale, t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const changeLanguage = (newLocale: 'ua' | 'no' | 'eu' | 'ru') => {
    if (newLocale === 'ru') {
      window.location.href = '/ru';
      return;
    }
    window.location.href = `/${newLocale}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="8a88a.io тризуб логотип" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-xl text-foreground">{t.common.siteName}</span>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => changeLanguage('ua')}
              className={`text-2xl hover:scale-110 transition-transform ${locale === 'ua' ? 'scale-110' : ''}`}
              title="Українська"
            >
              🇺🇦
            </button>
            <button 
              onClick={() => changeLanguage('no')}
              className={`text-2xl hover:scale-110 transition-transform ${locale === 'no' ? 'scale-110' : ''}`}
              title="Norsk"
            >
              🇳🇴
            </button>
            <button 
              onClick={() => changeLanguage('eu')}
              className={`text-2xl hover:scale-110 transition-transform ${locale === 'eu' ? 'scale-110' : ''}`}
              title="European Union"
            >
              🇪🇺
            </button>
            <button 
              onClick={() => changeLanguage('ru')}
              className="text-2xl hover:scale-110 transition-transform opacity-60 hover:opacity-100"
              title="Русский военный корабль..."
            >
              🇷🇺
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('mission-section')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {t.nav.about}
            </button>
            <button 
              onClick={() => scrollToSection('services-section')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {t.nav.services}
            </button>
            <button 
              onClick={() => scrollToSection('packages-section')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {t.nav.packages}
            </button>
            <button 
              onClick={() => scrollToSection('team-section')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {t.nav.team}
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {locale === 'ua' && (
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex items-center gap-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                onClick={() => window.open('https://savelife.in.ua/donate/', '_blank')}
              >
                🤝 {t.nav.volunteer}
              </Button>
            )}
            {locale === 'no' && (
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                onClick={() => scrollToSection('contact-section')}
              >
                🤝 {t.nav.volunteer}
              </Button>
            )}
            {locale === 'eu' && (
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex items-center gap-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
                onClick={() => scrollToSection('contact-section')}
              >
                🤝 {t.nav.volunteer}
              </Button>
            )}
            <Button 
              variant="default" 
              size="sm"
              onClick={() => scrollToSection('contact-section')}
            >
              {t.nav.application}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;