import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import successUkraine from "@/assets/success-ukraine.jpg";
import successChatbot from "@/assets/success-chatbot-stripe-sheets.jpg";
import successIoT from "@/assets/success-iot-ai-make.jpg";
import successROI from "@/assets/success-roi-dashboard.jpg";
import successVoiceBot from "@/assets/success-voice-bot-crm.jpg";
import successAutomation from "@/assets/success-home-automation.jpg";

const AchievementsSection = () => {
  const { locale, t } = useLanguage();

  const getSectionClasses = () => {
    switch (locale) {
      case 'no':
        return 'py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden';
      case 'eu':
        return 'py-16 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden';
      default:
        return 'py-16 results-gradient relative overflow-hidden';
    }
  };

  const getPatternClasses = () => {
    if (locale === 'no') {
      return 'absolute inset-0 opacity-3';
    }
    return 'absolute inset-0 opacity-15';
  };

  const getNationalPattern = () => {
    switch (locale) {
      case 'no':
        return `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003f7f' fill-opacity='0.04'%3E%3Cpath d='M50 50l10-10v20l-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
      case 'eu':
        return `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003399' fill-opacity='0.05'%3E%3Cpath d='M50 50l10-10v20l-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
      default:
        return `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50l10-10v20l-10-10zM30 30l5-5v10l-5-5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
    }
  };

  const getTitleClasses = () => {
    switch (locale) {
      case 'no':
        return 'text-3xl md:text-4xl font-medium mb-4 text-slate-800';
      case 'eu':
        return 'text-3xl md:text-4xl font-semibold mb-4 text-blue-800';
      default:
        return 'text-3xl md:text-4xl font-bold mb-4';
    }
  };

  const getSubtitleClasses = () => {
    switch (locale) {
      case 'no':
        return 'text-lg text-slate-600 max-w-2xl mx-auto';
      case 'eu':
        return 'text-lg text-slate-600 max-w-2xl mx-auto';
      default:
        return 'text-lg text-muted-foreground max-w-2xl mx-auto';
    }
  };

  const getCardClasses = () => {
    switch (locale) {
      case 'no':
        return 'text-center hover:shadow-lg transition-all duration-200 group border-l-4 border-l-blue-600 bg-white';
      case 'eu':
        return 'text-center hover:shadow-lg transition-all duration-200 group border-l-4 border-l-blue-600 bg-white';
      default:
        return 'text-center hover:shadow-lg transition-all duration-300 group border-l-4 border-l-primary';
    }
  };

  const getMetricClasses = () => {
    switch (locale) {
      case 'no':
        return 'text-3xl font-black text-blue-700 mb-2';
      case 'eu':
        return 'text-3xl font-black text-blue-600 mb-2';
      default:
        return 'text-3xl font-black text-primary mb-2';
    }
  };

  const getButtonClasses = () => {
    switch (locale) {
      case 'no':
        return 'bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200';
      case 'eu':
        return 'bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200';
      default:
        return 'bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300';
    }
  };

  // Key metrics data
  const results = [
    {
      title: t.results.items.medical.title,
      metric: t.results.items.medical.metric,
      description: t.results.items.medical.description,
      icon: "🏥",
      image: successUkraine
    },
    {
      title: t.results.items.business.title,
      metric: t.results.items.business.metric, 
      description: t.results.items.business.description,
      icon: "📈",
      image: successROI
    },
    {
      title: t.results.items.automation.title,
      metric: t.results.items.automation.metric,
      description: t.results.items.automation.description,
      icon: "🤖",
      image: successIoT
    },
    {
      title: t.results.items.iot.title,
      metric: t.results.items.iot.metric,
      description: t.results.items.iot.description,
      icon: "🌐",
      image: successAutomation
    }
  ];

  // Top testimonials data
  const getTopTestimonials = () => {
    if (locale === 'ua') {
      return [
        {
          name: "Олексій Петренко",
          company: "ТОВ 'Медтех Україна'",
          role: "Директор",
          text: "Para.tech створили для нас телемедичну платформу, яка збільшила кількість пацієнтів на 200%. Професійний підхід та розуміння специфіки медичного бізнесу.",
          rating: 5,
          results: "+200% пацієнтів",
          avatar: "👨‍⚕️"
        },
        {
          name: "Дмитро Іваненко",
          company: "IT-Консалтинг 'Цифра'",
          role: "CEO",
          text: "Автоматизували всі бізнес-процеси через CRM та чат-боти. Тепер заявок стало в 5 разів більше, а команда працює ефективніше.",
          rating: 5,
          results: "+500% заявок",
          avatar: "👨‍💻"
        }
      ];
    } else if (locale === 'no') {
      return [
        {
          name: "Erik Hansen",
          company: "Bergen Tech Solutions",
          role: "CEO",
          text: "Para.tech leverte en fantastisk IoT-løsning for vårt smart hjem-prosjekt. Profesjonell tilnærming og forståelse av våre behov.",
          rating: 5,
          results: "+300% effektivitet",
          avatar: "👨‍💼"
        }
      ];
    } else {
      return [
        {
          name: "Marco Rossi",
          company: "EU Digital Solutions",
          role: "Director",
          text: "Para.tech delivered an excellent automation solution that increased our efficiency by 300%. Professional approach and deep understanding of our business needs.",
          rating: 5,
          results: "+300% efficiency",
          avatar: "👨‍💼"
        }
      ];
    }
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % results.length);
    }, 3000);
    return () => clearInterval(imageTimer);
  }, []);

  return (
    <section id="achievements-section" className={getSectionClasses()}>
      <div className={getPatternClasses()}>
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: getNationalPattern() }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className={getTitleClasses()}>
            {locale === 'ua' ? (
              <>
                {t.results.title.split(' ')[0]} <span className="text-gradient-ukraine">{t.results.title.split(' ').slice(1).join(' ')}</span>
              </>
            ) : (
              t.results.title
            )}
          </h2>
          <p className={getSubtitleClasses()}>
            {t.results.subtitle}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => (
            <Card key={index} className={getCardClasses()}>
              <CardContent className="p-6">
                <div className={`text-4xl mb-4 transition-transform duration-200 ${
                  locale === 'no' ? 'group-hover:scale-105' : 'group-hover:scale-110 transition-transform duration-300'
                }`}>
                  {result.icon}
                </div>
                <div className={getMetricClasses()}>
                  {result.metric}
                </div>
                <div className={`text-base font-semibold mb-1 ${
                  locale === 'no' ? 'text-slate-700' : locale === 'eu' ? 'text-slate-700' : ''
                }`}>
                  {result.description}
                </div>
                <div className={`text-sm ${
                  locale === 'no' ? 'text-slate-500' : locale === 'eu' ? 'text-slate-500' : 'text-muted-foreground'
                }`}>
                  {result.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Case Showcase */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-xl">
            <img 
              src={results[currentImageIndex].image} 
              alt={`Кейс: ${results[currentImageIndex].title}`}
              className="w-full h-64 md:h-80 object-cover transition-all duration-500"
            />
            <div className={`absolute inset-0 ${
              locale === 'no' ? 'bg-gradient-to-t from-blue-700/80 to-transparent' :
              locale === 'eu' ? 'bg-gradient-to-t from-blue-600/80 to-transparent' :
              'bg-gradient-to-t from-primary/80 to-transparent'
            }`}></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {locale === 'ua' ? 'Кейс: ' : locale === 'no' ? 'Case: ' : 'Case: '}{results[currentImageIndex].title}
              </h3>
              <p className="text-base md:text-lg opacity-90">
                <span className={`font-bold ${
                  locale === 'no' ? 'text-red-300' :
                  locale === 'eu' ? 'text-yellow-300' :
                  'text-secondary'
                }`}>
                  {results[currentImageIndex].metric} {results[currentImageIndex].description}
                </span>
              </p>
            </div>
          </div>
          
          {/* Gallery Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {results.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? `${locale === 'no' ? 'bg-blue-600' : locale === 'eu' ? 'bg-blue-600' : 'bg-primary'} scale-125`
                    : `${locale === 'no' ? 'bg-blue-300' : locale === 'eu' ? 'bg-blue-300' : 'bg-primary/30'} hover:${locale === 'no' ? 'bg-blue-500' : locale === 'eu' ? 'bg-blue-500' : 'bg-primary/60'}`
                }`}
                aria-label={locale === 'ua' ? `Показати кейс ${index + 1}` : `Show case ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Top Client Testimonials */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
              ⭐ {locale === 'ua' ? 'Відгуки клієнтів' : locale === 'no' ? 'Kundetilbakemeldinger' : 'Client Reviews'}
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {locale === 'ua' ? 'Що кажуть наші клієнти' : locale === 'no' ? 'Hva våre kunder sier' : 'What Our Clients Say'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {getTopTestimonials().map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-8">
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="text-base mb-6 italic text-foreground leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Results badge */}
                  <div className="mb-4">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 font-bold">
                      📈 {testimonial.results}
                    </Badge>
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-foreground">{testimonial.role}</div>
                      <div className="text-sm font-medium text-primary">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Decorative quote */}
                  <div className="absolute top-4 right-4 text-6xl text-primary/10 font-serif">
                    "
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-muted/50 rounded-xl px-8 py-4 mb-8">
            <div className="text-2xl">🏆</div>
            <div>
              <div className="font-bold text-lg">
                {locale === 'ua' ? '4.9/5 середній рейтинг' : locale === 'no' ? '4.9/5 gjennomsnittlig vurdering' : '4.9/5 average rating'}
              </div>
              <div className="text-sm text-foreground">
                {locale === 'ua' ? 'на основі 500+ проєктів' : locale === 'no' ? 'basert på 500+ prosjekter' : 'based on 500+ projects'}
              </div>
            </div>
          </div>
          
          <button 
            className={getButtonClasses()}
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.results.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;