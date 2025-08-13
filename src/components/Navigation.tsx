import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A8A</span>
            </div>
            <span className="font-bold text-lg text-foreground">Автоматизація</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('mission-section')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Про нас
            </button>
            <button 
              onClick={() => scrollToSection('services-section')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Послуги
            </button>
            <button 
              onClick={() => scrollToSection('packages-section')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Пакети
            </button>
            <button 
              onClick={() => scrollToSection('team-section')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Команда
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Контакти
            </button>
          </div>

          {/* Donation CTA */}
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex items-center gap-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              onClick={() => window.open('https://savelife.in.ua/donate/', '_blank')}
            >
              💙💛 Донат ЗСУ
            </Button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => scrollToSection('contact-section')}
            >
              Заявка
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;