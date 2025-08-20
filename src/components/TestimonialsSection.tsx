import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { locale } = useLanguage();

  const getTestimonials = () => {
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
          name: "Марина Коваленко",
          company: "Еко-Ферма 'Золоте поле'",
          role: "Власниця",
          text: "IoT рішення для моніторингу врожаю допомогло нам оптимізувати витрати води на 40% та підвищити врожайність. Рекомендую!",
          rating: 5,
          results: "+40% ефективності",
          avatar: "👩‍🌾"
        },
        {
          name: "Дмитро Іваненко",
          company: "IT-Консалтинг 'Цифра'",
          role: "CEO",
          text: "Автоматизували всі бізнес-процеси через CRM та чат-боти. Тепер заявок стало в 5 разів більше, а команда працює ефективніше.",
          rating: 5,
          results: "+500% заявок",
          avatar: "👨‍💻"
        },
        {
          name: "Анна Волошина",
          company: "Волонтерський фонд 'Допомога'",
          role: "Координаторка",
          text: "Платформа для збору коштів та координації допомоги працює бездоганно. Допомогли автоматизувати всі процеси волонтерської діяльності.",
          rating: 5,
          results: "100% автоматизація",
          avatar: "👩‍🤝‍👩"
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
        },
        {
          name: "Ingrid Larsen",
          company: "Larsen Gård",
          role: "Eier",
          text: "Automatiseringssystemet for gården hjalp oss med å redusere vannforbruket med 40% og øke avlingen betydelig.",
          rating: 5,
          results: "+40% avling",
          avatar: "👩‍🌾"
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
        },
        {
          name: "Sophie Laurent",
          company: "French Innovation Hub",
          role: "CEO",
          text: "The AI-powered CRM system transformed our sales process. We now have 5x more leads and our team works much more efficiently.",
          rating: 5,
          results: "+500% leads",
          avatar: "👩‍💻"
        }
      ];
    }
  };

  const getTitle = () => {
    if (locale === 'ua') return "Що кажуть наші клієнти";
    if (locale === 'no') return "Hva våre kunder sier";
    return "What Our Clients Say";
  };

  const getSubtitle = () => {
    if (locale === 'ua') return "Реальні відгуки від компаній, які довірили нам свою автоматизацію";
    if (locale === 'no') return "Ekte tilbakemeldinger fra bedrifter som stolte på våre løsninger";
    return "Real feedback from companies that trusted our automation solutions";
  };

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
            ⭐ Відгуки клієнтів
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {getTitle()}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {getSubtitle()}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {getTestimonials().map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-8">
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-base mb-6 italic text-muted-foreground leading-relaxed">
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
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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

        {/* CTA for reviews */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-muted/50 rounded-xl px-8 py-4">
            <div className="text-2xl">🏆</div>
            <div>
              <div className="font-bold text-lg">4.9/5 середній рейтинг</div>
              <div className="text-sm text-muted-foreground">на основі 500+ проєктів</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;