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
    if (locale === 'ua') return "Наші успішні рішення";
    if (locale === 'no') return "Våre vellykkede løsninger";
    return "Our Successful Solutions";
  };

  const getSubtitle = () => {
    if (locale === 'ua') return "Реальні результати українських компаній, що довірилися нашим рішенням";
    if (locale === 'no') return "Reelle resultater fra norske bedrifter som stolte på våre løsninger";
    return "Real results from European companies that trusted our solutions";
  };

  const getBadge = () => {
    if (locale === 'ua') return "🏆 Наші успішні проєкти";
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
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            {getBadge()}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {getTitle()}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {getSubtitle()}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getSuccessData().map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-card border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3 text-2xl">{item.icon}</div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 text-primary">{item.title}</h3>
                <p className="font-medium text-foreground mb-2">{item.subtitle}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
            <span className="text-2xl">{getFlag()}</span>
            <span className="font-medium text-primary">
              {getTagline()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessShowcase;