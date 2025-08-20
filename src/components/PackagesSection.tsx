import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const PackagesSection = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const packages = [
    {
      name: t.packages.items.starter.name,
      flag: "🟦",
      price: t.packages.items.starter.price,
      description: t.packages.items.starter.description,
      subtitle: t.packages.items.starter.subtitle,
      features: t.packages.items.starter.features,
      popular: false,
      color: "border-primary"
    },
    {
      name: t.packages.items.professional.name,
      flag: "🟨",
      price: t.packages.items.professional.price,
      description: t.packages.items.professional.description,
      subtitle: t.packages.items.professional.subtitle,
      features: t.packages.items.professional.features,
      popular: true,
      color: "border-secondary"
    },
    {
      name: t.packages.items.enterprise.name,
      flag: "🔷", 
      price: t.packages.items.enterprise.price,
      description: t.packages.items.enterprise.description,
      subtitle: t.packages.items.enterprise.subtitle,
      features: t.packages.items.enterprise.features,
      popular: false,
      color: "border-gradient-ukraine"
    }
  ];

  return (
    <section id="packages-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-ukraine">{t.packages.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.packages.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl ${pkg.popular ? 'border-primary scale-105 shadow-xl ring-4 ring-primary/20' : 'border-border hover:border-primary/50'}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    🔥 Найпопулярніший • -20% до кінця місяця
                  </div>
                </div>
              )}
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  АКЦІЯ
                </div>
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
            {t.packages.customTitle}
          </p>
          <Button variant="ukraineYellow" size="lg" onClick={scrollToContact}>
            {t.packages.customButton}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;