import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-ukraine.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
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
          {/* Ukrainian flag emoji */}
          <div className="text-6xl mb-6">🇺🇦</div>
          
          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Автоматизуємо<br/>
            <span className="text-secondary">український бізнес</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-4 font-medium opacity-90">
            Створюємо сайти, додатки, чат-боти, CRM, AI, автоматизація та IoT
          </p>
          
          {/* Mission statement */}
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-80 font-light">
            Ми — українська команда, що допомагає бізнесу, медицині та волонтерству впровадити системність і цифрову свободу через розумні технології. 
            Працюємо з тими, хто діє, не чекає.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="ukraineYellow" size="lg" className="w-full sm:w-auto text-lg px-8 py-4" onClick={scrollToContact}>
              🔵 Залишити заявку
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary" onClick={scrollToContact}>
              🟡 Протестувати рішення
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 text-white hover:bg-white/20" onClick={scrollToContact}>
              🔶 Порахувати вартість
            </Button>
          </div>
          
          {/* Ukrainian features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center gap-2">
              <span className="text-secondary">🧷</span>
              <span>100% український сервіс</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-secondary">🛡</span>
              <span>Дані на європейських серверах</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-secondary">💙</span>
              <span>Команда з Києва, Львова, Рівного, Дніпра та Запоріжжя</span>
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