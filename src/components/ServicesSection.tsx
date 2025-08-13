import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: "🌐",
      title: "Веб-сайти",
      description: "Landing, корпоративні, інтернет-магазини",
      details: "Сучасні сайти, що продають 24/7"
    },
    {
      icon: "📱",
      title: "Мобільні додатки",
      description: "iOS, Android, гібридні рішення",
      details: "Додатки для бізнесу та клієнтів"
    },
    {
      icon: "🤖",
      title: "Чат-боти та агенти",
      description: "Telegram, Viber, WhatsApp, Web",
      details: "AI-агенти, що працюють замість менеджера"
    },
    {
      icon: "🏥",
      title: "Медичні рішення",
      description: "Телемедицина, запис до лікарів, медкарти",
      details: "Цифровізація медичних процесів"
    },
    {
      icon: "🤝",
      title: "Волонтерські платформи",
      description: "Збір коштів, координація допомоги",
      details: "IT для добрих справ та волонтерства"
    },
    {
      icon: "🌐",
      title: "IoT рішення", 
      description: "Розумні пристрої, сенсори, моніторинг",
      details: "Автоматизація фізичних процесів"
    },
    {
      icon: "🧠", 
      title: "AI-асистенти",
      description: "GPT-помічники, ML-аналітика",
      details: "AI, які ведуть клієнта від питання до покупки"
    },
    {
      icon: "📊",
      title: "CRM-системи",
      description: "Управління клієнтами та пацієнтами",
      details: "CRM, які допомагають організації рости"
    },
    {
      icon: "🔗",
      title: "Інтеграції",
      description: "API, системи, процеси", 
      details: "Щоб системи говорили одна з одною"
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
            Створюємо цифрові рішення для бізнесу, медицини та волонтерства — від сайтів до AI-агентів
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