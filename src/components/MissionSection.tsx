import { useLanguage } from "@/contexts/LanguageContext";

const MissionSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="mission-section" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            {t.mission.title}
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground">
            {t.mission.description.split('І ми будуємо його разом з вами.')[0]}
            <span className="font-semibold text-primary"> І ми будуємо його разом з вами.</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-8xl mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer">
                {t.mission.values.first.title.split(' ')[0]}
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-primary/80 transition-colors">
                {t.mission.values.first.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {t.mission.values.first.description}
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-8xl mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer">
                {t.mission.values.second.title.split(' ')[0]}
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-primary/80 transition-colors">
                {t.mission.values.second.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {t.mission.values.second.description}
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-8xl mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer">
                {t.mission.values.third.title.split(' ')[0]}
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-primary/80 transition-colors">
                {t.mission.values.third.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {t.mission.values.third.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;