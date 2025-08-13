import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: "🤖",
      title: "Чат-боти",
      description: "Telegram, Viber, WhatsApp, Web",
      details: "Боти, які продають замість менеджера"
    },
    {
      icon: "🧠", 
      title: "AI-асистенти",
      description: "GPT-помічники, ML-аналітика",
      details: "AI, які ведуть клієнта від питання до покупки"
    },
    {
      icon: "🌐",
      title: "IoT рішення", 
      description: "Розумні пристрої, сенсори, моніторинг",
      details: "Автоматизація фізичних процесів"
    },
    {
      icon: "📩",
      title: "Email-маркетинг", 
      description: "Автоматизовані розсилки",
      details: "Листи, що працюють на автопілоті"
    },
    {
      icon: "🔗",
      title: "Інтеграції",
      description: "API, системи, процеси", 
      details: "Щоб системи говорили одна з одною"
    },
    {
      icon: "📊",
      title: "CRM-системи",
      description: "Управління клієнтами",
      details: "CRM, які допомагають бізнесу рости"
    },
    {
      icon: "⚙️",
      title: "Автоматизація",
      description: "Процеси, робочі потоки",
      details: "Звільняємо 40+ годин на місяць"
    },
    {
      icon: "📱",
      title: "Мобільні додатки",
      description: "Управління IoT, віддалений контроль",
      details: "Керуйте всім з телефону"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Що ми робимо: 
            <span className="text-gradient-ukraine"> рішення для вільного часу</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Автоматизуємо рутину та підключаємо розумні пристрої, щоб ви могли зосередитися на розвитку бізнесу
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-blue transition-ukraine border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-ukraine">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-foreground leading-relaxed">
                  {service.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Cost Calculator Block */}
        <div className="mt-16 flex justify-center">
          <Card className="border-secondary/20 hover:shadow-yellow transition-ukraine max-w-md">
            <CardHeader>
              <CardTitle className="text-xl text-secondary text-center">📊 Розрахувати вартість</CardTitle>
              <CardDescription className="text-center">
                Отримайте приблизну вартість автоматизації за 2 хвилини
              </CardDescription>
            </CardHeader>
            <CardContent>
              <button 
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-3 rounded-lg font-semibold transition-ukraine"
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Калькулятор вартості
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;