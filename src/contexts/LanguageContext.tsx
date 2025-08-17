import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLocale, getTranslation, TranslationContent } from '@/lib/translations';

interface LanguageContextType {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLocale?: SupportedLocale }> = ({ 
  children, 
  initialLocale = 'ua' 
}) => {
  const [locale, setLocale] = useState<SupportedLocale>(initialLocale);
  const [t, setT] = useState<TranslationContent>(getTranslation(initialLocale));

  useEffect(() => {
    setT(getTranslation(locale));
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};