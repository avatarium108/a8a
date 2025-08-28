import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const PackagesSection = () => {
  const { locale, t } = useLanguage();
  
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getSectionClasses = () => {
    switch (locale) {
      case 'no':
        return 'py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden';
      case 'eu':
        return 'py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden';
      default:
        return 'py-20 packages-gradient relative overflow-hidden';
    }
  };

  const getPatternClasses = () => {
    if (locale === 'no') {
      return 'absolute inset-0 opacity-3';
    }
    return 'absolute inset-0 opacity-10';
  };

  const getNationalPattern = () => {
    switch (locale) {
      case 'no':
        return `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003f7f' fill-opacity='0.04'%3E%3Cpath d='M60 60l8-8h-16l8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
      case 'eu':
        return `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003399' fill-opacity='0.05'%3E%3Cpath d='M60 60l8-8h-16l8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
      default:
        return `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M60 60l8-8h-16l8 8zM90 30l4-4h-8l4 4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
    }
  };

  const getTitleClasses = () => {
    switch (locale) {
      case 'no':
        return 'text-4xl md:text-5xl font-medium mb-6 text-slate-800';
      case 'eu':
        return 'text-4xl md:text-5xl font-semibold mb-6 text-blue-800';
      default:
        return 'text-4xl md:text-5xl font-bold mb-6';
    }
  };

  const getSubtitleClasses = () => {
    switch (locale) {
      case 'no':
        return 'text-xl text-slate-600 max-w-3xl mx-auto';
      case 'eu':
        return 'text-xl text-slate-600 max-w-3xl mx-auto';
      default:
        return 'text-xl text-muted-foreground max-w-3xl mx-auto';
    }
  };

  const getCardClasses = (pkg: any) => {
    const baseClasses = 'relative overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl';
    
    if (pkg.popular) {
      switch (locale) {
        case 'no':
          return `${baseClasses} border-blue-600 scale-105 shadow-xl ring-4 ring-blue-600/20 bg-white`;
        case 'eu':
          return `${baseClasses} border-blue-600 scale-105 shadow-xl ring-4 ring-blue-600/20 bg-white`;
        default:
          return `${baseClasses} border-primary scale-105 shadow-xl ring-4 ring-primary/20`;
      }
    }
    
    switch (locale) {
      case 'no':
        return `${baseClasses} border-slate-200 hover:border-blue-300 bg-white`;
      case 'eu':
        return `${baseClasses} border-slate-200 hover:border-blue-300 bg-white`;
      default:
        return `${baseClasses} border-border hover:border-primary/50`;
    }
  };

  const getPriceClasses = () => {
    switch (locale) {
      case 'no':
        return 'text-3xl font-black text-slate-800';
      case 'eu':
        return 'text-3xl font-black text-blue-800';
      default:
        return 'text-3xl font-black text-foreground';
    }
  };

  const getCardTitleClasses = () => {
    switch (locale) {
      case 'no':
        return 'text-2xl font-bold text-blue-700';
      case 'eu':
        return 'text-2xl font-bold text-blue-600';
      default:
        return 'text-2xl font-bold text-primary';
    }
  };

  const getCheckmarkClasses = () => {
    switch (locale) {
      case 'no':
        return 'text-blue-600 mt-1';
      case 'eu':
        return 'text-blue-600 mt-1';
      default:
        return 'text-primary mt-1';
    }
  };

  const getButtonVariant = (pkg: any) => {
    if (pkg.popular) {
      switch (locale) {
        case 'no':
        case 'eu':
          return 'default';
        default:
          return 'ukraine';
      }
    }
    return 'outline';
  };

  const getButtonClasses = (pkg: any) => {
    if (pkg.popular) {
      switch (locale) {
        case 'no':
        case 'eu':
          return 'bg-blue-600 hover:bg-blue-700 text-white';
        default:
          return '';
      }
    }
    return '';
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
    <section id="packages-section" className={getSectionClasses()}>
      <div className={getPatternClasses()}>
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: getNationalPattern() }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={getTitleClasses()}>
            {locale === 'ua' ? (
              <span className="text-gradient-ukraine">{t.packages.title}</span>
            ) : (
              t.packages.title
            )}
          </h2>
          <p className={getSubtitleClasses()}>
            {t.packages.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={getCardClasses(pkg)}
            >
              {pkg.popular && locale === 'ua' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    🔥 Найпопулярніший • -20% до кінця місяця
                  </div>
                </div>
              )}
              {pkg.popular && locale === 'no' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    🔥 Mest populær
                  </div>
                </div>
              )}
              {pkg.popular && locale === 'eu' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{pkg.flag}</div>
                <CardTitle className={getCardTitleClasses()}>
                  {pkg.name}
                </CardTitle>
                <div className={getPriceClasses()}>
                  {pkg.price} <span className={`text-lg font-normal ${
                    locale === 'no' ? 'text-slate-500' : 
                    locale === 'eu' ? 'text-slate-500' : 
                    'text-muted-foreground'
                  }`}>
                    {locale === 'ua' ? 'грн' : locale === 'no' ? 'kr' : '€'}
                  </span>
                </div>
                <CardDescription className={`font-semibold text-lg ${
                  locale === 'no' ? 'text-slate-600' : 
                  locale === 'eu' ? 'text-slate-600' : ''
                }`}>
                  {pkg.description}
                </CardDescription>
                <p className={`text-sm italic mt-2 ${
                  locale === 'no' ? 'text-slate-500' : 
                  locale === 'eu' ? 'text-slate-500' : 
                  'text-muted-foreground'
                }`}>
                  {pkg.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={getCheckmarkClasses()}>✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-6 ${getButtonClasses(pkg)}`}
                  variant={getButtonVariant(pkg)}
                  size="lg"
                  onClick={scrollToContact}
                >
                  {pkg.popular ? 
                    (locale === 'ua' ? "🚀 Обрати цей пакет" : 
                     locale === 'no' ? "🚀 Velg denne pakken" : 
                     "🚀 Choose this package") : 
                    (locale === 'ua' ? "Дізнатися більше" : 
                     locale === 'no' ? "Les mer" : 
                     "Learn more")
                  }
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className={`mb-4 ${
            locale === 'no' ? 'text-slate-600' : 
            locale === 'eu' ? 'text-slate-600' : 
            'text-muted-foreground'
          }`}>
            {t.packages.customTitle}
          </p>
          <Button 
            variant={locale === 'ua' ? 'ukraineYellow' : locale === 'no' ? 'default' : 'default'}
            className={locale === 'no' ? 'bg-red-600 hover:bg-red-700 text-white' : 
                      locale === 'eu' ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}
            size="lg" 
            onClick={scrollToContact}
          >
            {t.packages.customButton}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;