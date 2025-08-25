import teamImage from "@/assets/team-ukraine.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const TeamSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="team-section" className="py-20 team-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M25 25l5-10h-10l5 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Team Image */}
          <div className="relative">
            <img 
              src={teamImage} 
              alt="Українська команда автоматизації" 
              className="rounded-xl shadow-ukraine w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl"></div>
          </div>

          {/* Team Info */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              {t.team.title}
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🌍</span>
                <div>
                  <h3 className="font-semibold text-lg text-primary">{t.team.points.global.title}</h3>
                  <p className="text-muted-foreground">{t.team.points.global.description}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">🧠</span>
                <div>
                  <h3 className="font-semibold text-lg text-primary">{t.team.points.language.title}</h3>
                  <p className="text-muted-foreground">{t.team.points.language.description}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">🔐</span>
                <div>
                  <h3 className="font-semibold text-lg text-primary">{t.team.points.security.title}</h3>
                  <p className="text-muted-foreground">{t.team.points.security.description}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">💪</span>
                <div>
                  <h3 className="font-semibold text-lg text-primary">{t.team.points.understanding.title}</h3>
                  <p className="text-muted-foreground">{t.team.points.understanding.description}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">🇺🇦</span>
                <div>
                  <h3 className="font-semibold text-lg text-primary">{t.team.points.location.title}</h3>
                  <p className="text-muted-foreground">{t.team.points.location.description}</p>
                  
                  {/* City coats of arms */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    <img src="/lovable-uploads/d6cc748b-4003-4a4c-810f-c1e27e2d72c8.png" alt="Герб міста" className="w-12 h-8 object-contain" />
                    <img src="/lovable-uploads/e9621884-3c4e-4746-873c-964a9ac5c306.png" alt="Герб міста" className="w-12 h-8 object-contain" />
                    <img src="/lovable-uploads/eb865bae-8535-4bbf-b46c-5a8aa9480dbd.png" alt="Герб міста" className="w-12 h-8 object-contain" />
                    <img src="/lovable-uploads/574296d1-af1e-4687-9bbe-182756915edb.png" alt="Герб міста" className="w-12 h-8 object-contain" />
                    <img src="/lovable-uploads/ae39f00a-56ae-4e80-bf04-db906dafbc00.png" alt="Герб міста" className="w-12 h-8 object-contain" />
                    <img src="/lovable-uploads/4fad7f41-3fa5-4c19-8fb1-cfd7699de53e.png" alt="Прапор Запоріжжя" className="w-12 h-8 object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-background rounded-xl p-6 mt-8">
              <h4 className="font-bold text-2xl mb-6 text-primary">{t.team.valuesTitle}</h4>
              <div className="grid grid-cols-2 gap-6 text-lg font-semibold">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">⚡</span>
                  <span>{t.team.values.efficiency}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  <span>{t.team.values.accuracy}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl text-secondary">🕊️</span>
                  <span>{t.team.values.freedom}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🤝</span>
                  <span>{t.team.values.trust}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📈</span>
                  <span>{t.team.values.development}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl text-secondary">💪</span>
                  <span>{t.team.values.strength}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;