import { Badge } from "@/components/ui/badge";
import successIoTAI from "@/assets/success-iot-ai-make.jpg";
import successChatbot from "@/assets/success-chatbot-stripe-sheets.jpg";
import successWebhook from "@/assets/success-webhook-gpt-email.jpg";
import successVoiceBot from "@/assets/success-voice-bot-crm.jpg";
import successHomeAuto from "@/assets/success-home-automation.jpg";
import successTelegram from "@/assets/success-telegram-notion-gpt.jpg";
import successROI from "@/assets/success-roi-dashboard.jpg";
import successIoTAgriculture from "@/assets/success-iot-agriculture.jpg";
import successIoTSmartCity from "@/assets/success-iot-smart-city.jpg";
import successIoTManufacturing from "@/assets/success-iot-manufacturing.jpg";
import successIoTHealthcare from "@/assets/success-iot-healthcare.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const SuccessShowcase = () => {
  const { locale } = useLanguage();

  const getSuccessData = () => {
    if (locale === 'ua') {
      return [
        {
          image: successROI,
          title: "ROI +340%",
          subtitle: "Аналітичний дашборд",
          description: "Dashboard з ростом після впровадження",
          icon: "📈"
        },
        {
          image: successIoTAgriculture,
          title: "IoT Сільське Господарство",
          subtitle: "Розумне фермерство",
          description: "Автоматичний контроль температури, вологості грунту та стану врожаю",
          icon: "🌾"
        },
        {
          image: successChatbot,
          title: "E-commerce бот",
          subtitle: "Автоматизація продажів",
          description: "Чат-бот з інтеграцією Stripe та Google Sheets",
          icon: "💬"
        },
        {
          image: successIoTSmartCity,
          title: "IoT Розумне Місто",
          subtitle: "Міська інфраструктура",
          description: "Система моніторингу трафіку, якості повітря та розумного освітлення",
          icon: "🏙️"
        },
        {
          image: successVoiceBot,
          title: "Voice AI асистент",
          subtitle: "Голосова аналітика",
          description: "Call tracking з AI обробкою розмов",
          icon: "📞"
        },
        {
          image: successIoTManufacturing,
          title: "IoT Виробництво",
          subtitle: "Індустрія 4.0",
          description: "Моніторинг обладнання та оптимізація виробничих процесів",
          icon: "🏭"
        },
        {
          image: successHomeAuto,
          title: "Розумний дім",
          subtitle: "IoT автоматизація",
          description: "Home automation з машинним навчанням",
          icon: "🏠"
        },
        {
          image: successIoTHealthcare,
          title: "IoT Healthcare",
          subtitle: "Медичний моніторинг",
          description: "Система віддаленого моніторингу пацієнтів з носимими пристроями",
          icon: "🏥"
        }
      ];
    } else if (locale === 'no') {
      return [
        {
          image: successROI,
          title: "ROI +340%",
          subtitle: "Analytics Dashboard",
          description: "Dashboard med vekst etter implementering",
          icon: "📈"
        },
        {
          image: successIoTAgriculture,
          title: "IoT Landbruk",
          subtitle: "Smart jordbruk",
          description: "Automatisk kontroll av temperatur, jordfuktighet og avlingsstatus",
          icon: "🌾"
        },
        {
          image: successChatbot,
          title: "E-handel bot",
          subtitle: "Salgsautomatisering",
          description: "Chatbot med Stripe og Google Sheets integrasjon",
          icon: "💬"
        },
        {
          image: successHomeAuto,
          title: "Smart hjem",
          subtitle: "IoT automatisering",
          description: "Hjemmeautomatisering med maskinlæring",
          icon: "🏠"
        }
      ];
    } else {
      return [
        {
          image: successROI,
          title: "ROI +340%",
          subtitle: "Analytics Dashboard",
          description: "Dashboard with growth after implementation",
          icon: "📈"
        },
        {
          image: successIoTAgriculture,
          title: "IoT Agriculture",
          subtitle: "Smart Farming",
          description: "Automatic control of temperature, soil moisture and crop status",
          icon: "🌾"
        },
        {
          image: successChatbot,
          title: "E-commerce Bot",
          subtitle: "Sales Automation",
          description: "Chatbot with Stripe and Google Sheets integration",
          icon: "💬"
        },
        {
          image: successHomeAuto,
          title: "Smart Home",
          subtitle: "IoT Automation",
          description: "Home automation with machine learning",
          icon: "🏠"
        }
      ];
    }
  };

  const getTitle = () => {
    if (locale === 'ua') return "автоматизуємо українські компанії та підприємців";
    if (locale === 'no') return "Våre vellykkede løsninger";
    return "Our Successful Solutions";
  };

  const getSubtitle = () => {
    if (locale === 'ua') return "успішні проекти";
    if (locale === 'no') return "Reelle resultater fra norske bedrifter som stolte på våre løsninger";
    return "Real results from European companies that trusted our solutions";
  };

  const getBadge = () => {
    if (locale === 'ua') return "🏆 Успішні проєкти";
    if (locale === 'no') return "🏆 Våre vellykkede prosjekter";
    return "🏆 Our Successful Projects";
  };

  const getTagline = () => {
    if (locale === 'ua') return "100% українські рішення для українського бізнесу";
    if (locale === 'no') return "100% norske løsninger for norsk næringsliv";
    return "100% European solutions for European business";
  };

  const getFlag = () => {
    if (locale === 'ua') return "🇺🇦";
    if (locale === 'no') return "🇳🇴";
    return "🇪🇺";
  };

  return (
    <section className="py-16 success-section-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {getSubtitle()}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {getSuccessData().map((item, index) => (
            <div key={index} className="card-premium interactive-hover animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-video relative overflow-hidden rounded-t-xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {item.icon}
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="glass-ukraine px-3 py-1 rounded-full text-white text-sm font-bold">
                    Новий кейс
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gradient-premium font-display">{item.title}</h3>
                <p className="font-semibold text-primary mb-3">{item.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                
                {/* Performance indicator */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Результат:</span>
                    <span className="font-bold text-success">+200% ефективності</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="card-premium inline-flex items-center gap-4 px-10 py-6 animate-glow">
            <span className="text-4xl animate-float">{getFlag()}</span>
            <div className="text-left">
              <div className="font-bold text-xl text-gradient-premium font-display">
                {getTagline()}
              </div>
              <div className="text-sm text-muted-foreground">
                Працюємо виключно для успіху українського бізнесу
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessShowcase;