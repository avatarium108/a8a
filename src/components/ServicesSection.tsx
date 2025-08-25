import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();
  
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
    <section id="services-section" className="py-20 services-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M40 40l8-8v16l-8-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.services.title}
            <span className="text-gradient-ukraine"> рішення для вільного часу</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.services.subtitle}
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
              <CardTitle className="text-xl text-secondary text-center">{t.services.calculator.title}</CardTitle>
              <CardDescription className="text-center">
                {t.services.calculator.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <button 
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-3 rounded-lg font-semibold transition-ukraine"
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