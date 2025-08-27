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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto py-4 px-6">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <img 
                src="/lovable-uploads/009093d6-0b98-47d4-8dd6-bd9c04675221.png" 
                alt="Ukraine EU Tech Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Navigation Menu - центр */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              <button 
                onClick={() => scrollToSection('mission-section')}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {t.nav.about}
              </button>
              <button 
                onClick={() => scrollToSection('services-section')}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {t.nav.services}
              </button>
              <button 
                onClick={() => scrollToSection('packages-section')}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {t.nav.packages}
              </button>
              <button 
                onClick={() => scrollToSection('contact-section')}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {t.nav.contact}
              </button>
            </div>

            {/* CTA Buttons - вправо */}
            <div className="flex items-center gap-4 flex-shrink-0 ml-auto">
              <Button 
                variant="outline" 
                size="sm"
                className="hidden sm:flex border-gray-300 text-gray-700 hover:bg-gray-50"
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