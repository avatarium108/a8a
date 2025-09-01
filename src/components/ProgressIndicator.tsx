import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProgressIndicator = () => {
  const { locale } = useLanguage();
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'hero-section', label: locale === 'ua' ? 'Головна' : locale === 'no' ? 'Hjem' : 'Home' },
    { id: 'services-section', label: locale === 'ua' ? 'Послуги' : locale === 'no' ? 'Tjenester' : 'Services' },
    { id: 'achievements-section', label: locale === 'ua' ? 'Досягнення' : locale === 'no' ? 'Resultater' : 'Achievements' },
    { id: 'packages-section', label: locale === 'ua' ? 'Пакети' : locale === 'no' ? 'Pakker' : 'Packages' },
    { id: 'team-section', label: locale === 'ua' ? 'Команда' : locale === 'no' ? 'Team' : 'Team' },
    { id: 'contact-section', label: locale === 'ua' ? 'Контакти' : locale === 'no' ? 'Kontakt' : 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Find current section
      let current = 0;
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = index;
          }
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIndicatorClasses = () => {
    switch (locale) {
      case 'no':
        return 'fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-blue-200';
      case 'eu':
        return 'fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-blue-200';
      default:
        return 'fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-primary/20';
    }
  };

  const getProgressBarClasses = () => {
    switch (locale) {
      case 'no':
        return 'w-1 bg-blue-200 rounded-full relative overflow-hidden';
      case 'eu':
        return 'w-1 bg-blue-200 rounded-full relative overflow-hidden';
      default:
        return 'w-1 bg-primary/20 rounded-full relative overflow-hidden';
    }
  };

  const getProgressFillClasses = () => {
    switch (locale) {
      case 'no':
        return 'absolute top-0 left-0 w-full bg-blue-600 transition-all duration-300 ease-out rounded-full';
      case 'eu':
        return 'absolute top-0 left-0 w-full bg-blue-600 transition-all duration-300 ease-out rounded-full';
      default:
        return 'absolute top-0 left-0 w-full bg-primary transition-all duration-300 ease-out rounded-full';
    }
  };

  const getSectionDotClasses = (index: number) => {
    const isActive = index === currentSection;
    const baseClasses = 'w-3 h-3 rounded-full cursor-pointer transition-all duration-200 hover:scale-125';
    
    switch (locale) {
      case 'no':
        return `${baseClasses} ${isActive ? 'bg-blue-600 scale-125' : 'bg-blue-300 hover:bg-blue-500'}`;
      case 'eu':
        return `${baseClasses} ${isActive ? 'bg-blue-600 scale-125' : 'bg-blue-300 hover:bg-blue-500'}`;
      default:
        return `${baseClasses} ${isActive ? 'bg-primary scale-125' : 'bg-primary/30 hover:bg-primary/60'}`;
    }
  };

  return (
    <div className={getIndicatorClasses()}>
      {/* Progress Bar */}
      <div className={`${getProgressBarClasses()} h-40 mb-4`}>
        <div 
          className={getProgressFillClasses()}
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Section Dots */}
      <div className="flex flex-col gap-3">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="relative group"
          >
            <div
              className={getSectionDotClasses(index)}
              onClick={() => scrollToSection(section.id)}
              title={section.label}
            />
            
            {/* Tooltip */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className={`px-3 py-1 text-sm font-medium rounded-lg shadow-lg whitespace-nowrap ${
                locale === 'no' ? 'bg-blue-600 text-white' :
                locale === 'eu' ? 'bg-blue-600 text-white' :
                'bg-primary text-primary-foreground'
              }`}>
                {section.label}
                <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 rotate-45 ${
                  locale === 'no' ? 'bg-blue-600' :
                  locale === 'eu' ? 'bg-blue-600' :
                  'bg-primary'
                }`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;