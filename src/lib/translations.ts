// Multilingual content for regional versions
export type SupportedLocale = 'ua' | 'no' | 'eu' | 'ru';

export interface TranslationContent {
  // Navigation
  nav: {
    about: string;
    services: string;
    packages: string;
    team: string;
    contact: string;
    volunteer: string;
    application: string;
  };
  // Hero section
  hero: {
    title: string;
    subtitle: string;
    mission: string;
    cta: {
      application: string;
      test: string;
      calculate: string;
    };
    features: {
      service: string;
      servers: string;
      team: string;
      security: string;
    };
  };
  // Common
  common: {
    siteName: string;
    supportNote: string;
  };
}

export const translations: Record<SupportedLocale, TranslationContent> = {
  ua: {
    nav: {
      about: "Про нас",
      services: "Послуги", 
      packages: "Пакети",
      team: "Команда",
      contact: "Контакти",
      volunteer: "💙💛 Волонтеримося",
      application: "Заявка"
    },
    hero: {
      title: "Автоматизуємо український бізнес",
      subtitle: "Створюємо сайти, додатки, чат-боти, CRM, AI, автоматизація та IoT",
      mission: "Ми — українська команда, що допомагає бізнесу, медицині та волонтерству впровадити системність і цифрову свободу через розумні технології. Працюємо з тими, хто діє, не чекає.",
      cta: {
        application: "🔵 Залишити заявку",
        test: "🟡 Протестувати рішення", 
        calculate: "🔶 Порахувати вартість"
      },
      features: {
        service: "100% український сервіс",
        servers: "Дані на європейських серверах",
        team: "Команда з Києва, Львова, Рівного, Дніпра та Запоріжжя",
        security: "Відповідність GDPR, ISO 27001, SOC 2 протоколам безпеки"
      }
    },
    common: {
      siteName: "8a88a.io",
      supportNote: "За підтримки:"
    }
  },
  no: {
    nav: {
      about: "Om oss",
      services: "Tjenester",
      packages: "Pakker", 
      team: "Team",
      contact: "Kontakt",
      volunteer: "🇳🇴 Støtt Norge",
      application: "Søknad"
    },
    hero: {
      title: "Digitaliserer norsk næringsliv",
      subtitle: "Vi lager nettsider, apper, chatbots, CRM, AI, automatisering og IoT",
      mission: "Vi er et norsk team som hjelper bedrifter, helse og frivillighet med å implementere systematikk og digital frihet gjennom smarte teknologier. Vi jobber med de som handler, ikke venter.",
      cta: {
        application: "🔵 Send søknad",
        test: "🟡 Test løsningen",
        calculate: "🔶 Beregn kostnad"
      },
      features: {
        service: "100% norsk service",
        servers: "Data på europeiske servere", 
        team: "Team fra Oslo, Bergen, Trondheim og Stavanger",
        security: "Overholder GDPR, ISO 27001, SOC 2 sikkerhetsstandarder"
      }
    },
    common: {
      siteName: "8a88a.io",
      supportNote: "Med støtte fra:"
    }
  },
  eu: {
    nav: {
      about: "About",
      services: "Services",
      packages: "Packages",
      team: "Team", 
      contact: "Contact",
      volunteer: "🇪🇺 Support EU",
      application: "Apply"
    },
    hero: {
      title: "Digitalizing European Business",
      subtitle: "We create websites, apps, chatbots, CRM, AI, automation and IoT",
      mission: "We are a European team that helps businesses, healthcare and volunteering implement systematics and digital freedom through smart technologies. We work with those who act, don't wait.",
      cta: {
        application: "🔵 Submit Application",
        test: "🟡 Test Solution",
        calculate: "🔶 Calculate Cost"
      },
      features: {
        service: "100% European service",
        servers: "Data on European servers",
        team: "Team from Berlin, Paris, Amsterdam and Vienna", 
        security: "Compliance with GDPR, ISO 27001, SOC 2 security protocols"
      }
    },
    common: {
      siteName: "8a88a.io",
      supportNote: "Supported by:"
    }
  },
  ru: {
    nav: {
      about: "",
      services: "",
      packages: "",
      team: "",
      contact: "",
      volunteer: "",
      application: ""
    },
    hero: {
      title: "Русский военный корабль",
      subtitle: "иди нах*й!",
      mission: "Слава Україні! Героям Слава! 🇺🇦",
      cta: {
        application: "",
        test: "",
        calculate: ""
      },
      features: {
        service: "",
        servers: "",
        team: "",
        security: ""
      }
    },
    common: {
      siteName: "8a88a.io",
      supportNote: ""
    }
  }
};

export function getTranslation(locale: SupportedLocale): TranslationContent {
  return translations[locale] || translations.ua;
}