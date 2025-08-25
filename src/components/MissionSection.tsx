import { useLanguage } from "@/contexts/LanguageContext";

const MissionSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="mission-section" className="py-20 mission-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20l-4-4h8l-4 4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
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