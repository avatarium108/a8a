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

  const results = [
    {
      title: "Медицина",
      metric: "+200%",
      description: "більше пацієнтів",
      icon: "🏥",
      image: successUkraine
    },
    {
      title: "Бізнес",
      metric: "+500%", 
      description: "більше заявок",
      icon: "📈",
      image: successROI
    },
    {
      title: "Автоматизація",
      metric: "95%",
      description: "процесів автоматизовано",
      icon: "🤖",
      image: successIoT
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % results.length);
    }, 3000);
    return () => clearInterval(imageTimer);
  }, []);

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наші <span className="text-gradient-ukraine">результати</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальні покращення для українського бізнесу
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {result.icon}
                </div>
                <div className="text-3xl font-black text-primary mb-2">
                  {result.metric}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {result.description}
                </div>
                <div className="text-sm text-muted-foreground">
                  {result.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Story */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-xl">
            <img 
              src={results[currentImageIndex].image} 
              alt={`Кейс: ${results[currentImageIndex].title}`}
              className="w-full h-64 md:h-80 object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Кейс: {results[currentImageIndex].title}
              </h3>
              <p className="text-base md:text-lg opacity-90">
                <span className="font-bold text-secondary">
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
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/60'
                }`}
                aria-label={`Показати кейс ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Simple CTA */}
        <div className="mt-12 text-center">
          <button 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🚀 Хочу такі результати
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;