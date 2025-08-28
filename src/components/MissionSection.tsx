import { useLanguage } from "@/contexts/LanguageContext";

const MissionSection = () => {
  const { locale, t } = useLanguage();
  
  const getSectionClasses = () => {
    switch (locale) {
      case 'no':
        return 'py-20 section-gradient relative overflow-hidden bg-slate-50';
      case 'eu':
        return 'py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden';
      default:
        return 'py-20 mission-gradient relative overflow-hidden';
    }
  };

  const getPatternClasses = () => {
    if (locale === 'no') {
      return 'absolute inset-0 opacity-5';
    }
    return 'absolute inset-0 opacity-10';
  };

  const getNationalPattern = () => {
    switch (locale) {
      case 'no':
        return `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003f7f' fill-opacity='0.1'%3E%3Cpath d='M30 30l-6-6h12l-6 6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
      case 'eu':
        return `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003399' fill-opacity='0.08'%3E%3Cpath d='M25 25l-5-5h10l-5 5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
      default:
        return `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20l-4-4h8l-4 4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
    }
  };

  const getTitleClasses = () => {
    switch (locale) {
      case 'no':
        return 'text-3xl md:text-4xl font-medium mb-8 text-slate-800';
      case 'eu':
        return 'text-3xl md:text-4xl font-semibold mb-8 text-blue-800';
      default:
        return 'text-3xl md:text-4xl font-bold mb-8 text-primary';
    }
  };

  const getTextClasses = () => {
    switch (locale) {
      case 'no':
        return 'text-lg md:text-xl leading-relaxed mb-8 text-slate-700';
      case 'eu':
        return 'text-lg md:text-xl leading-relaxed mb-8 text-slate-600';
      default:
        return 'text-lg md:text-xl leading-relaxed mb-8 text-foreground';
    }
  };
  
  return (
    <section id="mission-section" className={getSectionClasses()}>
      <div className={getPatternClasses()}>
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: getNationalPattern() }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={getTitleClasses()}>
            {t.mission.title}
          </h2>
          
          <p className={getTextClasses()}>
            {t.mission.description.split('І ми будуємо його разом з вами.')[0]}
            <span className={`font-semibold ${locale === 'no' ? 'text-blue-700' : locale === 'eu' ? 'text-blue-600' : 'text-primary'}`}> 
              {locale === 'ua' ? 'І ми будуємо його разом з вами.' : 
               locale === 'no' ? 'Og vi bygger det sammen med deg.' : 
               'And we build it together with you.'}
            </span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-8xl mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer">
                {t.mission.values.first.title.split(' ')[0]}
              </div>
              <h3 className={`font-bold text-xl mb-3 group-hover:opacity-80 transition-colors ${
                locale === 'no' ? 'text-blue-700' : locale === 'eu' ? 'text-blue-600' : 'text-primary'
              }`}>
                {t.mission.values.first.title}
              </h3>
              <p className={`text-base leading-relaxed ${
                locale === 'no' ? 'text-slate-600' : locale === 'eu' ? 'text-slate-600' : 'text-muted-foreground'
              }`}>
                {t.mission.values.first.description}
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-8xl mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer">
                {t.mission.values.second.title.split(' ')[0]}
              </div>
              <h3 className={`font-bold text-xl mb-3 group-hover:opacity-80 transition-colors ${
                locale === 'no' ? 'text-blue-700' : locale === 'eu' ? 'text-blue-600' : 'text-primary'
              }`}>
                {t.mission.values.second.title}
              </h3>
              <p className={`text-base leading-relaxed ${
                locale === 'no' ? 'text-slate-600' : locale === 'eu' ? 'text-slate-600' : 'text-muted-foreground'
              }`}>
                {t.mission.values.second.description}
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-8xl mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer">
                {t.mission.values.third.title.split(' ')[0]}
              </div>
              <h3 className={`font-bold text-xl mb-3 group-hover:opacity-80 transition-colors ${
                locale === 'no' ? 'text-blue-700' : locale === 'eu' ? 'text-blue-600' : 'text-primary'
              }`}>
                {t.mission.values.third.title}
              </h3>
              <p className={`text-base leading-relaxed ${
                locale === 'no' ? 'text-slate-600' : locale === 'eu' ? 'text-slate-600' : 'text-muted-foreground'
              }`}>
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