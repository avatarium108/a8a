import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PackagesSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const packages = [
    {
      name: "Воля",
      flag: "🟦",
      price: "15,000",
      description: "Стартап-набір",
      subtitle: "Для бізнесу, який тільки викликає, але має характер",
      features: [
        "Чат-бот на одній платформі",
        "Базова CRM-система",
        "1 IoT пристрій (сенсор)",
        "Проста інтеграція",
        "Місяць підтримки",
        "Навчання роботи"
      ],
      popular: false,
      color: "border-primary"
    },
    {
      name: "Спротив", 
      flag: "🟨",
      price: "45,000",
      description: "Повноцінна автоматизація",
      subtitle: "Для тих, хто готовий змінювати правила гри",
      features: [
        "Боти на 2+ платформах",
        "Повна CRM з аналітикою",
        "До 5 IoT пристроїв",
        "3 API інтеграції",
        "AI-асистент для продажів",
        "Мобільний додаток для контролю",
        "3 місяці підтримки",
        "Детальне навчання команди"
      ],
      popular: true,
      color: "border-secondary"
    },
    {
      name: "Відбудова",
      flag: "🇺🇦", 
      price: "120,000",
      description: "Повна цифрова трансформація",
      subtitle: "Для лідерів, які будують майбутнє України",
      features: [
        "Повна автоматизація процесів",
        "AI та ML рішення",
        "Необмежена кількість IoT пристроїв",
        "Кастомні IoT розробки",
        "Кастомні розробки",
        "Інтеграція всіх систем",
        "Власний IoT хаб",
        "12 місяців підтримки",
        "Особистий менеджер проєкту"
      ],
      popular: false,
      color: "border-gradient-ukraine"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-ukraine">Патріотичні пакети</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Оберіть рівень автоматизації, який відповідає вашим цілям та можливостям
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative ${pkg.color} ${pkg.popular ? 'ring-2 ring-primary shadow-ukraine' : ''} hover:shadow-blue transition-ukraine`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
                  Найпопулярніший 🏆
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{pkg.flag}</div>
                <CardTitle className="text-2xl font-bold text-primary">
                  {pkg.name}
                </CardTitle>
                <div className="text-3xl font-black text-foreground">
                  {pkg.price} <span className="text-lg font-normal text-muted-foreground">грн</span>
                </div>
                <CardDescription className="font-semibold text-lg">
                  {pkg.description}
                </CardDescription>
                <p className="text-sm text-muted-foreground italic mt-2">
                  {pkg.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full mt-6" 
                  variant={pkg.popular ? "ukraine" : "outline"}
                  size="lg"
                  onClick={scrollToContact}
                >
                  {pkg.popular ? "🚀 Обрати цей пакет" : "Дізнатися більше"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Потрібно індивідуальне рішення? Маєте особливі вимоги?
          </p>
          <Button variant="ukraineYellow" size="lg" onClick={scrollToContact}>
            💬 Обговорити індивідуальний проєкт
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;