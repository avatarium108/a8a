import { Badge } from "@/components/ui/badge";
import successIoTAI from "@/assets/success-iot-ai-make.jpg";
import successChatbot from "@/assets/success-chatbot-stripe-sheets.jpg";
import successWebhook from "@/assets/success-webhook-gpt-email.jpg";
import successVoiceBot from "@/assets/success-voice-bot-crm.jpg";
import successHomeAuto from "@/assets/success-home-automation.jpg";
import successTelegram from "@/assets/success-telegram-notion-gpt.jpg";
import successROI from "@/assets/success-roi-dashboard.jpg";

const SuccessShowcase = () => {
  const showcases = [
    {
      image: successROI,
      title: "ROI +340%",
      subtitle: "Аналітичний дашборд",
      description: "Dashboard з ростом після впровадження",
      icon: "📈"
    },
    {
      image: successIoTAI,
      title: "IoT + AI системи",
      subtitle: "Розумна аналітика",
      description: "Датчики + штучний інтелект + автоматизація",
      icon: "🤖"
    },
    {
      image: successChatbot,
      title: "E-commerce бот",
      subtitle: "Автоматизація продажів",
      description: "Чат-бот з інтеграцією Stripe та Google Sheets",
      icon: "💬"
    },
    {
      image: successWebhook,
      title: "Email маркетинг",
      subtitle: "AI-контент генерація",
      description: "Автоматизація розсилок з GPT",
      icon: "📧"
    },
    {
      image: successVoiceBot,
      title: "Voice AI асистент",
      subtitle: "Голосова аналітика",
      description: "Call tracking з AI обробкою розмов",
      icon: "📞"
    },
    {
      image: successHomeAuto,
      title: "Розумний дім",
      subtitle: "IoT автоматизація",
      description: "Home automation з машинним навчанням",
      icon: "🏠"
    },
    {
      image: successTelegram,
      title: "CRM інтеграція",
      subtitle: "Telegram + Notion",
      description: "Бот з базою даних та AI інсайтами",
      icon: "📊"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            🏆 Наші успішні проєкти
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наші <span className="text-primary">успішні рішення</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Реальні результати українських компаній, що довірилися нашим рішенням
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcases.map((item, index) => (
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
            <span className="text-2xl">🇺🇦</span>
            <span className="font-medium text-primary">
              100% українські рішення для українського бізнесу
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessShowcase;