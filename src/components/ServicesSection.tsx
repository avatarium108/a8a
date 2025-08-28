import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { locale, t } = useLanguage();
  
  const getSectionClasses = () => {
    switch (locale) {
      case 'no':
        return 'py-20 bg-white relative overflow-hidden';
      case 'eu':
        return 'py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden';
      default:
        return 'py-20 services-gradient relative overflow-hidden';
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
        return `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003f7f' fill-opacity='0.05'%3E%3Cpath d='M40 40l8-8v16l-8-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
      case 'eu':
        return `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003399' fill-opacity='0.06'%3E%3Cpath d='M40 40l8-8v16l-8-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
      default:
        return `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M40 40l8-8v16l-8-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
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

  const getCardClasses = () => {
    switch (locale) {
      case 'no':
        return 'group hover:shadow-lg transition-all duration-200 border hover:border-blue-200 bg-white';
      case 'eu':
        return 'group hover:shadow-lg transition-all duration-200 border hover:border-blue-200 bg-white';
      default:
        return 'group hover:shadow-blue transition-ukraine border-2 hover:border-primary/20';
    }
  };

  const services = [
    {
      icon: "🌐",
      title: t.services.items.websites.title,
      description: t.services.items.websites.description,
      details: t.services.items.websites.details
    },
    {
      icon: "📱",
      title: t.services.items.mobile.title,
      description: t.services.items.mobile.description,
      details: t.services.items.mobile.details
    },
    {
      icon: "🤖",
      title: t.services.items.chatbots.title,
      description: t.services.items.chatbots.description,
      details: t.services.items.chatbots.details
    },
    {
      icon: "🏥",
      title: t.services.items.medical.title,
      description: t.services.items.medical.description,
      details: t.services.items.medical.details
    },
    {
      icon: "🤝",
      title: t.services.items.volunteer.title,
      description: t.services.items.volunteer.description,
      details: t.services.items.volunteer.details
    },
    {
      icon: "🌐",
      title: t.services.items.iot.title,
      description: t.services.items.iot.description,
      details: t.services.items.iot.details
    },
    {
      icon: "🧠", 
      title: t.services.items.ai.title,
      description: t.services.items.ai.description,
      details: t.services.items.ai.details
    },
    {
      icon: "📊",
      title: t.services.items.crm.title,
      description: t.services.items.crm.description,
      details: t.services.items.crm.details
    },
    {
      icon: "🔗",
      title: t.services.items.integrations.title,
      description: t.services.items.integrations.description,
      details: t.services.items.integrations.details
    }
  ];

  return (
    <section id="services-section" className={getSectionClasses()}>
      <div className={getPatternClasses()}>
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: getNationalPattern() }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={getTitleClasses()}>
            {t.services.title}
            {locale === 'ua' && (
              <span className="text-gradient-ukraine"> рішення для вільного часу</span>
            )}
          </h2>
          <p className={getSubtitleClasses()}>
            {t.services.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={getCardClasses()}>
              <CardHeader className="text-center">
                <div className={`text-5xl mb-4 transition-transform duration-200 ${
                  locale === 'no' ? 'group-hover:scale-105' : 'group-hover:scale-110 transition-ukraine'
                }`}>
                  {service.icon}
                </div>
                <CardTitle className={`text-xl font-bold ${
                  locale === 'no' ? 'text-slate-800' : locale === 'eu' ? 'text-blue-800' : 'text-primary'
                }`}>
                  {service.title}
                </CardTitle>
                <CardDescription className={`font-medium ${
                  locale === 'no' ? 'text-slate-600' : locale === 'eu' ? 'text-slate-600' : 'text-muted-foreground'
                }`}>
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className={`leading-relaxed ${
                  locale === 'no' ? 'text-slate-700' : locale === 'eu' ? 'text-slate-700' : 'text-foreground'
                }`}>
                  {service.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Cost Calculator Block */}
        <div className="mt-16 flex justify-center">
          <Card className={`hover:shadow-lg transition-all duration-200 max-w-md ${
            locale === 'no' ? 'border-blue-200 bg-white' : 
            locale === 'eu' ? 'border-blue-200 bg-white' : 
            'border-secondary/20 hover:shadow-yellow transition-ukraine'
          }`}>
            <CardHeader>
              <CardTitle className={`text-xl text-center ${
                locale === 'no' ? 'text-blue-700' : 
                locale === 'eu' ? 'text-blue-600' : 
                'text-secondary'
              }`}>
                {t.services.calculator.title}
              </CardTitle>
              <CardDescription className="text-center">
                {t.services.calculator.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <button 
                className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  locale === 'no' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                  locale === 'eu' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                  'bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-ukraine'
                }`}
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.services.calculator.button}
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;