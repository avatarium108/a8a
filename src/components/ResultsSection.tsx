import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import successUkraine from "@/assets/success-ukraine.jpg";
import successChatbot from "@/assets/success-chatbot-stripe-sheets.jpg";
import successIoT from "@/assets/success-iot-ai-make.jpg";
import successROI from "@/assets/success-roi-dashboard.jpg";
import successVoiceBot from "@/assets/success-voice-bot-crm.jpg";
import successAutomation from "@/assets/success-home-automation.jpg";
import { useState, useEffect } from "react";

const ResultsSection = () => {
  const [progressValues, setProgressValues] = useState<number[]>([0, 0, 0, 0, 0]);

  const results = [
    {
      before: "❌ Клініка втрачала пацієнтів через черги",
      after: "✅ Онлайн запис та телемедицина",
      improvement: 200,
      metric: "більше пацієнтів",
      category: "Медицина",
      image: successUkraine,
      caseTitle: "Медична клініка",
      caseDescription: "За 10 днів запустили онлайн запис та телемедицину"
    },
    {
      before: "❌ Волонтери не координувалися",
      after: "✅ Платформа об'єднала всіх", 
      improvement: 300,
      metric: "ефективніша допомога",
      category: "Волонтерство",
      image: successChatbot,
      caseTitle: "Чат-бот для допомоги",
      caseDescription: "Автоматизація прийому заявок та координації волонтерів"
    },
    {
      before: "❌ Ручний контроль обладнання",
      after: "✅ IoT сенсори контролюють автоматично",
      improvement: 95,
      metric: "автоматизації",
      category: "Промисловість",
      image: successIoT,
      caseTitle: "IoT система",
      caseDescription: "Розумний контроль промислового обладнання"
    },
    {
      before: "❌ Сайт не приводив клієнтів",
      after: "✅ Новий сайт з AI-чатом",
      improvement: 500,
      metric: "більше заявок",
      category: "Бізнес",
      image: successROI,
      caseTitle: "ROI дашборд",
      caseDescription: "Аналітика ефективності маркетингових кампаній"
    },
    {
      before: "❌ Багато рутини",
      after: "✅ 40+ годин на місяць звільнено",
      improvement: 85,
      metric: "економії часу",
      category: "Ефективність",
      image: successVoiceBot,
      caseTitle: "Голосовий бот",
      caseDescription: "Автоматизація телефонних дзвінків та CRM"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValues(results.map(result => Math.min(result.improvement, 100)));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % results.length);
    }, 4000);
    return () => clearInterval(imageTimer);
  }, []);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Результати: 
            <span className="text-gradient-ukraine">було → стало</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Реальні покращення, які відчують ваші клієнти та ваш гаманець
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Results Cards */}
          <div className="space-y-6">
            {results.map((result, index) => (
              <Card key={index} className="group border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Category Badge */}
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                      {result.category}
                    </Badge>
                    
                    {/* Before State */}
                    <div className="text-destructive font-medium flex items-center gap-2">
                      <span className="w-2 h-2 bg-destructive rounded-full"></span>
                      {result.before}
                    </div>
                    
                    {/* After State */}
                    <div className="text-primary font-semibold text-lg flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {result.after}
                    </div>
                    
                    {/* Progress Section */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Покращення:</span>
                        <span className="font-bold text-primary">
                          {result.improvement > 100 ? `+${result.improvement}%` : `${result.improvement}%`}
                        </span>
                      </div>
                      <Progress 
                        value={progressValues[index]} 
                        className="h-2 bg-muted"
                      />
                      <div className="text-xs text-center text-primary font-semibold">
                        {result.metric}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Success Stories Gallery */}
          <div className="relative h-fit">
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={results[currentImageIndex].image} 
                alt={`Кейс: ${results[currentImageIndex].caseTitle}`}
                className="w-full h-80 object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Кейс: {results[currentImageIndex].caseTitle}
                </h3>
                <p className="text-lg opacity-90">
                  {results[currentImageIndex].caseDescription} — 
                  <span className="font-bold text-secondary">
                    {results[currentImageIndex].improvement > 100 
                      ? ` +${results[currentImageIndex].improvement}%` 
                      : ` ${results[currentImageIndex].improvement}%`} {results[currentImageIndex].metric}
                  </span>
                </p>
              </div>
            </div>
            
            {/* Gallery Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {results.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-primary/30 hover:bg-primary/60'
                  }`}
                  aria-label={`Показати кейс ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Interactive ROI Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">300%</div>
              <div className="text-lg font-semibold">Середній ROI</div>
              <div className="text-muted-foreground">за перші 3 місяці</div>
              <div className="mt-3 w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-primary to-primary h-2 rounded-full transition-all duration-1000 ease-out" 
                     style={{ width: progressValues[0] > 0 ? "85%" : "0%" }}></div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-secondary/20 hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="text-4xl font-black text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">40+</div>
              <div className="text-lg font-semibold">Годин економії</div>
              <div className="text-muted-foreground">щомісяця на автоматизації</div>
              <div className="mt-3 w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-secondary to-secondary h-2 rounded-full transition-all duration-1000 ease-out delay-300" 
                     style={{ width: progressValues[0] > 0 ? "90%" : "0%" }}></div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-lg font-semibold">Задоволених клієнтів</div>
              <div className="text-muted-foreground">рекомендують нас іншим</div>
              <div className="mt-3 w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out delay-600" 
                     style={{ width: progressValues[0] > 0 ? "98%" : "0%" }}></div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Consultation Block */}
        <div className="mt-16 flex justify-center">
          <Card className="border-primary/20 hover:shadow-lg transition-all duration-300 max-w-md">
            <CardHeader>
              <CardTitle className="text-xl text-primary text-center">📞 Записатися на консультацію</CardTitle>
              <CardDescription className="text-center">
                Безкоштовна 30-хвилинна консультація з нашим експертом
              </CardDescription>
            </CardHeader>
            <CardContent>
              <button 
                className="w-full border border-primary text-primary hover:bg-primary hover:text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300"
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Обрати зручний час
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;