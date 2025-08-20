import { Button } from "@/components/ui/button";
import logoImage from "/lovable-uploads/6fb3d41c-2218-4d1a-8fb2-743fdd5ab229.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { User, LogIn } from "lucide-react";

const Navigation = () => {
  const { locale, t } = useLanguage();
  const { user, loading } = useAuth();
  
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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto py-3 pl-2 pr-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo - максимально вліво */}
            <div className="flex flex-col items-center gap-1 flex-shrink-0 -ml-2">
              <img 
                src={logoImage} 
                alt="para.tech тризуб логотип" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-sm text-foreground">{t.common.siteName}</span>
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

            {/* CTA Buttons - максимально вправо */}
            <div className="flex items-center gap-3 flex-shrink-0 ml-auto mr-2">
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
              
              {/* Auth Button - тепер останній */}
              {!loading && (
                user ? (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.location.href = '/dashboard'}
                    className="flex items-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    {t.nav.dashboard}
                  </Button>
                ) : (
                  <Button 
                    variant="success" 
                    size="sm"
                    onClick={() => window.location.href = '/auth'}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white border-green-600"
                  >
                    <LogIn className="h-4 w-4 text-white" />
                    {t.nav.login}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Language Selector - правий кут під меню */}
      <div className="fixed top-24 right-4 z-40">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => changeLanguage('ua')}
            className={`relative w-8 h-6 hover:scale-125 transition-transform duration-200 rounded-sm overflow-hidden shadow-md ${locale === 'ua' ? 'scale-125 ring-2 ring-primary' : ''}`}
            title="Українська"
          >
            <div className="w-full h-1/2 bg-blue-500"></div>
            <div className="w-full h-1/2 bg-yellow-400"></div>
          </button>
          <button 
            onClick={() => changeLanguage('no')}
            className={`relative w-8 h-6 hover:scale-125 transition-transform duration-200 rounded-sm overflow-hidden shadow-md ${locale === 'no' ? 'scale-125 ring-2 ring-primary' : ''}`}
            title="Norsk"
          >
            <div className="w-full h-full bg-red-600 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-1 bg-white"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-full bg-white"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-blue-800"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-0.5 h-full bg-blue-800"></div>
              </div>
            </div>
          </button>
          <button 
            onClick={() => changeLanguage('eu')}
            className={`relative w-8 h-6 hover:scale-125 transition-transform duration-200 rounded-sm overflow-hidden shadow-md ${locale === 'eu' ? 'scale-125 ring-2 ring-primary' : ''}`}
            title="European Union"
          >
            <img 
              src="/lovable-uploads/8a984c61-9175-48bb-b7f5-0d89c0dbb8b0.png" 
              alt="EU Flag" 
              className="w-full h-full object-cover"
            />
          </button>
          <button 
            onClick={() => changeLanguage('ru')}
            className="relative w-8 h-6 hover:scale-125 transition-transform duration-200 rounded-sm overflow-hidden shadow-md opacity-60 hover:opacity-100"
            title="Русский военный корабль..."
          >
            <div className="w-full h-1/3 bg-white"></div>
            <div className="w-full h-1/3 bg-blue-600"></div>
            <div className="w-full h-1/3 bg-red-600"></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;