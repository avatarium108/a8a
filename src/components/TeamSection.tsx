import teamImage from "@/assets/team-ukraine.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const TeamSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="team-section" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
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