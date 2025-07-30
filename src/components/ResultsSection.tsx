import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import successImage from "@/assets/success-ukraine.jpg";

const ResultsSection = () => {
  const results = [
    {
      before: "❌ Менеджер вручну писав клієнтам",
      after: "✅ Бот сам закриває на продаж",
      impact: "Економія 6 годин щодня"
    },
    {
      before: "❌ Плутанина з клієнтами",
      after: "✅ CRM все фіксує й нагадує", 
      impact: "0% втрачених лідів"
    },
    {
      before: "❌ Багато рутини",
      after: "✅ 40+ годин на місяць звільнено",
      impact: "Фокус на стратегії"
    }
  ];

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
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-blue transition-ukraine">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="text-destructive font-medium">
                      {result.before}
                    </div>
                    <div className="text-primary font-semibold text-lg">
                      {result.after}
                    </div>
                    <div className="text-sm text-secondary font-bold bg-secondary/10 px-3 py-1 rounded-full inline-block">
                      {result.impact}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Success Story Image */}
          <div className="relative">
            <img 
              src={successImage} 
              alt="Результати автоматизації" 
              className="rounded-xl shadow-ukraine w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Кейс: Волонтерська платформа</h3>
              <p className="text-lg opacity-90">
                За 5 днів налаштували бота для збору заявок і логістики — 
                <span className="font-bold text-secondary"> економія 15 год/тиждень</span>
              </p>
            </div>
          </div>
        </div>

        {/* ROI Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-black text-primary mb-2">300%</div>
            <div className="text-lg font-semibold">Середній ROI</div>
            <div className="text-muted-foreground">за перші 3 місяці</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-secondary mb-2">40+</div>
            <div className="text-lg font-semibold">Годин економії</div>
            <div className="text-muted-foreground">щомісяця на автоматизації</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-primary mb-2">98%</div>
            <div className="text-lg font-semibold">Задоволених клієнтів</div>
            <div className="text-muted-foreground">рекомендують нас іншим</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;