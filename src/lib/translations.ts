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
    login: string;
    dashboard: string;
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
  // Mission section
  mission: {
    title: string;
    description: string;
    values: {
      first: { title: string; description: string; };
      second: { title: string; description: string; };
      third: { title: string; description: string; };
    };
  };
  // Services section
  services: {
    title: string;
    subtitle: string;
    calculator: {
      title: string;
      description: string;
      button: string;
    };
    items: {
      websites: { title: string; description: string; details: string; };
      mobile: { title: string; description: string; details: string; };
      chatbots: { title: string; description: string; details: string; };
      medical: { title: string; description: string; details: string; };
      volunteer: { title: string; description: string; details: string; };
      iot: { title: string; description: string; details: string; };
      ai: { title: string; description: string; details: string; };
      crm: { title: string; description: string; details: string; };
      integrations: { title: string; description: string; details: string; };
    };
  };
  // Results section
  results: {
    title: string;
    subtitle: string;
    cta: string;
    items: {
      medical: { title: string; metric: string; description: string; };
      business: { title: string; metric: string; description: string; };
      automation: { title: string; metric: string; description: string; };
      iot: { title: string; metric: string; description: string; };
      ai: { title: string; metric: string; description: string; };
      crm: { title: string; metric: string; description: string; };
    };
  };
  // Packages section
  packages: {
    title: string;
    subtitle: string;
    customTitle: string;
    customButton: string;
    items: {
      starter: {
        name: string;
        price: string;
        description: string;
        subtitle: string;
        features: string[];
      };
      professional: {
        name: string;
        price: string;
        description: string;
        subtitle: string;
        features: string[];
      };
      enterprise: {
        name: string;
        price: string;
        description: string;
        subtitle: string;
        features: string[];
      };
    };
  };
  // Team section
  team: {
    title: string;
    points: {
      global: { title: string; description: string; };
      language: { title: string; description: string; };
      security: { title: string; description: string; };
      understanding: { title: string; description: string; };
      location: { title: string; description: string; };
    };
    valuesTitle: string;
    values: {
      efficiency: string;
      accuracy: string;
      freedom: string;
      trust: string;
      development: string;
      strength: string;
    };
  };
  // Contact section
  contact: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      description: string;
      fields: {
        name: string;
        company: string;
        phone: string;
        email: string;
        messenger: string;
        messengerContact: string;
        date: string;
        time: string;
        project: string;
      };
      placeholders: {
        name: string;
        company: string;
        phone: string;
        email: string;
        messenger: string;
        messengerContact: string;
        project: string;
      };
      button: string;
      privacy: string;
      security: {
        ssl: string;
        gdpr: string;
        servers: string;
      };
    };
    info: {
      title: string;
      trustTitle: string;
      dataProtection: string;
    };
  };
  // Footer
  footer: {
    description: string;
    services: {
      title: string;
      items: string[];
    };
    company: {
      title: string;
      items: string[];
    };
    copyright: string;
    links: {
      privacy: string;
      terms: string;
    };
  };
  // Authentication
  auth: {
    login: {
      title: string;
      subtitle: string;
      email: string;
      password: string;
      forgotPassword: string;
      loginButton: string;
      noAccount: string;
      signUp: string;
    };
    signup: {
      title: string;
      subtitle: string;
      fullName: string;
      email: string;
      password: string;
      confirmPassword: string;
      signupButton: string;
      hasAccount: string;
      login: string;
    };
    dashboard: {
      title: string;
      welcome: string;
      profile: {
        title: string;
        fullName: string;
        company: string;
        phone: string;
        email: string;
        updateButton: string;
        updated: string;
      };
      logout: string;
    };
    messages: {
      loginSuccess: string;
      signupSuccess: string;
      logoutSuccess: string;
      profileUpdated: string;
      invalidCredentials: string;
      userExists: string;
      passwordMismatch: string;
      weakPassword: string;
      fillRequired: string;
    };
  };
  // Common
  common: {
    siteName: string;
    supportNote: string;
    year: string;
    loading: string;
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
      volunteer: "Волонтеримося ++",
      application: "Заявка",
      login: "Вхід",
      dashboard: "Кабінет"
    },
    hero: {
      title: "Автоматизуємо українські компанії та підприємців",
      subtitle: "Спеціалізований продукт для автоматизації: сайти, боти, CRM, AI та IoT",
      mission: "para.tech — наш спеціалізований продукт для автоматизації українського бізнесу. Частина більшого портфоліо технологічних рішень, створена для тих, хто будує сильну Україну через інновації.",
      cta: {
        application: "🔵 Залишити заявку",
        test: "🟡 Протестувати рішення", 
        calculate: "🔶 Порахувати вартість"
      },
      features: {
        service: "108% український сервіс та європейська якість",
        servers: "Дані на європейських серверах, відповідність GDPR, ISO 27001, SOC 2 протоколам безпеки",
        team: "Команда з 🏛️ Києва, 🦁 Львова, 🌾 Рівного, ⚡ Дніпра та <img src='/lovable-uploads/4fad7f41-3fa5-4c19-8fb1-cfd7699de53e.png' alt='Прапор Запоріжжя' style='display: inline; width: 16px; height: 12px; margin: 0 2px;'/> Запоріжжя",
        security: ""
      }
    },
    mission: {
      title: "Наші клієнти — це ті, хто не здався",
      description: "Хто будує — в тилу, на фронті, за кордоном. Ми віримо, що майбутнє України — в автоматизованому, вільному бізнесі. І ми будуємо його разом з вами.",
      values: {
        first: { title: "🇺🇦 Українські цінності", description: "Працюємо з повагою до нашої культури та мови, підтримуючи український бізнес" },
        second: { title: "💪 Сила у єдності", description: "Разом створюємо сильний цифровий бізнес для майбутнього нації" },
        third: { title: "🚀 Рух до перемоги", description: "Кожен проєкт — крок до сильнішої України через інновації" }
      }
    },
    services: {
      title: "Що робить para.tech:",
      subtitle: "Спеціалізуємося на автоматизації українського бізнесу — від простих сайтів до складних AI-систем",
      calculator: {
        title: "📊 Розрахувати вартість",
        description: "Отримайте приблизну вартість автоматизації за 2 хвилини",
        button: "Калькулятор вартості"
      },
      items: {
        websites: { title: "🌐 Веб-сайти", description: "Landing, корпоративні, інтернет-магазини", details: "Сучасні сайти, що продають 24/7" },
        mobile: { title: "📱 Мобільні додатки", description: "iOS, Android, гібридні рішення", details: "Додатки для бізнесу та клієнтів" },
        chatbots: { title: "🤖 Чат-боти та агенти", description: "Telegram, Viber, WhatsApp, Web", details: "AI-агенти, що працюють замість менеджера" },
        medical: { title: "🏥 Медичні рішення", description: "Телемедицина, запис до лікарів, медкарти", details: "Цифровізація медичних процесів" },
        volunteer: { title: "🤝 Волонтерські платформи", description: "Збір коштів, координація допомоги", details: "IT для добрих справ та волонтерства" },
        iot: { title: "🌐 IoT рішення", description: "Розумні пристрої, сенсори, моніторинг", details: "Автоматизація фізичних процесів" },
        ai: { title: "🧠 AI-асистенти", description: "GPT-помічники, ML-аналітика", details: "AI, які ведуть клієнта від питання до покупки" },
        crm: { title: "📊 CRM-системи", description: "Управління клієнтами та пацієнтами", details: "CRM, які допомагають організації рости" },
        integrations: { title: "🔗 Інтеграції", description: "API, системи, процеси", details: "Щоб системи говорили одна з одною" }
      }
    },
    results: {
      title: "Результати наших клієнтів",
      subtitle: "Реальні покращення для українського бізнесу",
      cta: "🚀 Хочу такі результати",
      items: {
        medical: { title: "Медицина", metric: "+200%", description: "більше пацієнтів" },
        business: { title: "Бізнес", metric: "+500%", description: "більше заявок" },
        automation: { title: "Автоматизація", metric: "95%", description: "процесів автоматизовано" },
        iot: { title: "IoT", metric: "+300%", description: "ефективності" },
        ai: { title: "AI", metric: "85%", description: "точності прогнозів" },
        crm: { title: "CRM", metric: "+400%", description: "конверсія продажів" }
      }
    },
    packages: {
      title: "Патріотичні пакети",
      subtitle: "Оберіть рівень автоматизації, який відповідає вашим цілям та можливостям",
      customTitle: "Потрібно індивідуальне рішення? Маєте особливі вимоги?",
      customButton: "💬 Обговорити індивідуальний проєкт",
      items: {
        starter: {
          name: "Воля",
          price: "15,000",
          description: "Стартап-набір",
          subtitle: "Для бізнесу, який тілько викликає, але має характер",
          features: [
            "Лендінг або простий сайт",
            "Чат-бот на одній платформі",
            "Базова CRM-система",
            "1 IoT пристрій (сенсор)",
            "Проста інтеграція",
            "Місяць підтримки",
            "Навчання роботи"
          ]
        },
        professional: {
          name: "Спротив",
          price: "45,000",
          description: "Повноцінна автоматизація",
          subtitle: "Для тих, хто готовий змінювати правила гри",
          features: [
            "Корпоративний сайт або додаток",
            "Боти на 2+ платформах",
            "Повна CRM з аналітикою",
            "До 5 IoT пристроїв",
            "3 API інтеграції",
            "AI-асистент для продажів",
            "Медичні або волонтерські модулі",
            "Мобільний додаток для контролю",
            "3 місяці підтримки",
            "Детальне навчання команди"
          ]
        },
        enterprise: {
          name: "Відбудова",
          price: "120,000",
          description: "Повна цифрова трансформація",
          subtitle: "Для лідерів, які будують майбутнє України",
          features: [
            "Повна екосистема сайт + додатки",
            "Повна автоматизація процесів",
            "AI та ML рішення",
            "Необмежена кількість IoT пристроїв",
            "Кастомні IoT розробки",
            "Медичні системи (телемедицина, EMR)",
            "Волонтерські платформи",
            "Кастомні розробки",
            "Інтеграція всіх систем",
            "Власний IoT хаб",
            "12 місяців підтримки",
            "Особистий менеджер проєкту"
          ]
        }
      }
    },
    team: {
      title: "Наша команда та досвід",
      points: {
        global: { title: "🌍 Глобальна присутність", description: "Працюємо з клієнтами в Україні, Норвегії, Європейському Союзі" },
        language: { title: "🧠 Зрозуміло українською", description: "Розмовляємо українською. Пишемо зрозуміло. Впроваджуємо ефективно." },
        security: { title: "🔐 Безпека та довіра", description: "Офіційно зареєстровані в IT-реєстрі України. Сертифіковані за стандартами ISO 27001. Партнер Дія.Бізнес для цифрової трансформації." },
        understanding: { title: "💪 Розуміємо ваші виклики", description: "Знаємо, як важко вести бізнес в умовах війни. Тому створюємо рішення, які дійсно допомагають, а не ускладнюють." },
        location: { title: "🇺🇦 Команда з України", description: "🏛️ Київ, 🦁 Львів, 🌾 Рівне, ⚡ Дніпро, <img src='/lovable-uploads/4fad7f41-3fa5-4c19-8fb1-cfd7699de53e.png' alt='Прапор Запоріжжя' style='display: inline; width: 16px; height: 12px; margin: 0 2px;'/> Запоріжжя — ми тут, поруч, і розуміємо ваш контекст як ніхто інший." }
      },
      valuesTitle: "Наші цінності:",
      values: {
        efficiency: "⚡ Ефективність",
        accuracy: "🎯 Точність",
        freedom: "🕊️ Свобода",
        trust: "🤝 Довіра",
        development: "📈 Розвиток",
        strength: "💪 Сила"
      }
    },
    contact: {
      title: "Готові до цифрової свободи?",
      subtitle: "Залишайте заявку — обговоримо ваш проєкт і покажемо, як автоматизація змінить ваш бізнес",
      form: {
        title: "📩 Залишити заявку",
        description: "Розкажіть про свій бізнес — ми знайдемо найкраще рішення",
        fields: {
          name: "Ім'я *",
          company: "Компанія або проект",
          phone: "Телефон *",
          email: "Email *",
          messenger: "Зручний месенджер *",
          messengerContact: "Логін / контакт *",
          date: "Зручна дата *",
          time: "Зручний час *",
          project: "Опишіть ваш проєкт *"
        },
        placeholders: {
          name: "Ваше ім'я",
          company: "Назва компанії або проекту",
          phone: "+380...",
          email: "email@example.com",
          messenger: "Оберіть месенджер",
          messengerContact: "@username, номер чи email",
          project: "Розкажіть, що хочете автоматизувати, які є завдання та цілі..."
        },
        button: "🚀 Відправити заявку",
        privacy: "Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних згідно з GDPR",
        security: {
          ssl: "🔒 SSL захист",
          gdpr: "🛡️ GDPR",
          servers: "🇪🇺 EU сервери"
        }
      },
      info: {
        title: "Контакти para.tech",
        trustTitle: "Понад 100 українських бізнесів довіряють нам автоматизацію",
        dataProtection: "🔒 Захист даних: Всі дані клієнтів зберігаються на європейських серверах з шифруванням AES-256. Ми дотримуємося стандартів GDPR та ISO 27001 для максимального захисту вашої інформації."
      }
    },
    footer: {
      description: "para.tech — спеціалізований продукт для автоматизації українського бізнесу. Частина портфоліо інноваційних рішень для сильної України.",
      services: {
        title: "Послуги",
        items: ["Чат-боти", "CRM-системи", "AI-асистенти", "Автоматизація", "Інтеграції"]
      },
      company: {
        title: "Компанія",
        items: ["Про нас", "Кейси", "Блог", "Кар'єра", "Контакти"]
      },
      copyright: "© 2025 para.tech. Всі права захищені. Слава Україні! 🇺🇦",
      links: {
        privacy: "Політика конфіденційності",
        terms: "Умови використання"
      }
    },
    common: {
      siteName: "para.tech",
      supportNote: "За підтримки:",
      year: "2025",
      loading: "Завантаження..."
    },
    auth: {
      login: {
        title: "Вхід",
        subtitle: "Увійдіть до свого акаунту",
        email: "Email",
        password: "Пароль",
        forgotPassword: "Забули пароль?",
        loginButton: "Увійти",
        noAccount: "Немає акаунту?",
        signUp: "Зареєструватись"
      },
      signup: {
        title: "Реєстрація",
        subtitle: "Створіть новий акаунт",
        fullName: "Повне ім'я",
        email: "Email",
        password: "Пароль",
        confirmPassword: "Підтвердити пароль",
        signupButton: "Зареєструватись",
        hasAccount: "Вже є акаунт?",
        login: "Увійти"
      },
      dashboard: {
        title: "Особистий кабінет",
        welcome: "Вітаємо",
        profile: {
          title: "Профіль",
          fullName: "Повне ім'я",
          company: "Компанія",
          phone: "Телефон",
          email: "Email",
          updateButton: "Оновити",
          updated: "Профіль оновлено"
        },
        logout: "Вийти"
      },
      messages: {
        loginSuccess: "Успішний вхід!",
        signupSuccess: "Реєстрація успішна! Перевірте email для підтвердження.",
        logoutSuccess: "Ви вийшли з системи",
        profileUpdated: "Профіль оновлено",
        invalidCredentials: "Неправильний email або пароль",
        userExists: "Користувач з таким email вже існує",
        passwordMismatch: "Паролі не збігаються",
        weakPassword: "Пароль має бути мінімум 6 символів",
        fillRequired: "Заповніть всі обов'язкові поля"
      }
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
      application: "Søknad",
      login: "Logg inn",
      dashboard: "Dashboard"
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
        team: "Team fra 🏛️ Oslo, ⛰️ Bergen, 🏔️ Trondheim og ⚡ Stavanger",
        security: "Overholder GDPR, ISO 27001, SOC 2 sikkerhetsstandarder"
      }
    },
    mission: {
      title: "Våre kunder gir aldri opp",
      description: "De som bygger - i hjemland, i krig, i utlandet. Vi tror at fremtiden til Norge ligger i automatisert, fri business. Og vi bygger det sammen med dere.",
      values: {
        first: { title: "🇳🇴 Norske verdier", description: "Jobber med respekt for vår kultur og språk, støtter norsk næringsliv" },
        second: { title: "💪 Styrke i enhet", description: "Sammen skaper vi sterke digitale bedrifter for nasjonens fremtid" },
        third: { title: "🚀 Bevegelse mot seier", description: "Hvert prosjekt er et skritt mot et sterkere Norge gjennom innovasjon" }
      }
    },
    services: {
      title: "Hva vi gjør:",
      subtitle: "Lager digitale løsninger for bedrifter, helse og frivillighet - fra nettsider til AI-agenter",
      calculator: {
        title: "📊 Beregn kostnad",
        description: "Få omtrentlig kostnad for automatisering på 2 minutter",
        button: "Kostnadskalkulator"
      },
      items: {
        websites: { title: "🌐 Nettsider", description: "Landing, bedrift, nettbutikker", details: "Moderne nettsider som selger 24/7" },
        mobile: { title: "📱 Mobile apper", description: "iOS, Android, hybride løsninger", details: "Apper for bedrift og kunder" },
        chatbots: { title: "🤖 Chatbots og agenter", description: "Messenger, WhatsApp, Web", details: "AI-agenter som jobber i stedet for manager" },
        medical: { title: "🏥 Medisinske løsninger", description: "Telemedisin, timebestilling, journaler", details: "Digitalisering av medisinske prosesser" },
        volunteer: { title: "🤝 Frivillige plattformer", description: "Innsamling, koordinering av hjelp", details: "IT for gode formål og frivillighet" },
        iot: { title: "🌐 IoT løsninger", description: "Smarte enheter, sensorer, overvåking", details: "Automatisering av fysiske prosesser" },
        ai: { title: "🧠 AI-assistenter", description: "GPT-hjelpere, ML-analyse", details: "AI som leder kunder fra spørsmål til kjøp" },
        crm: { title: "📊 CRM-systemer", description: "Kundeadministrasjon", details: "CRM som hjelper organisasjoner vokse" },
        integrations: { title: "🔗 Integrasjoner", description: "API, systemer, prosesser", details: "Så systemer kan snakke sammen" }
      }
    },
    results: {
      title: "Våre kunders resultater",
      subtitle: "Reelle forbedringer for norsk næringsliv",
      cta: "🚀 Vil ha slike resultater",
      items: {
        medical: { title: "Medisin", metric: "+200%", description: "flere pasienter" },
        business: { title: "Business", metric: "+500%", description: "flere forespørsler" },
        automation: { title: "Automatisering", metric: "95%", description: "prosesser automatisert" },
        iot: { title: "IoT", metric: "+300%", description: "effektivitet" },
        ai: { title: "AI", metric: "85%", description: "prognosenøyaktighet" },
        crm: { title: "CRM", metric: "+400%", description: "salgskonvertering" }
      }
    },
    packages: {
      title: "Patriotiske pakker",
      subtitle: "Velg automatiseringsnivå som passer dine mål og muligheter",
      customTitle: "Trenger skreddersydd løsning? Har spesielle krav?",
      customButton: "💬 Diskuter individuelt prosjekt",
      items: {
        starter: {
          name: "Vilje",
          price: "45,000",
          description: "Oppstart-pakke",
          subtitle: "For bedrifter som nettopp starter, men har karakter",
          features: [
            "Landing eller enkel nettside",
            "Chatbot på én plattform",
            "Basis CRM-system",
            "1 IoT-enhet (sensor)",
            "Enkel integrasjon",
            "Måned støtte",
            "Opplæring"
          ]
        },
        professional: {
          name: "Motstand",
          price: "135,000",
          description: "Full automatisering",
          subtitle: "For de som er klare til å endre spillereglene",
          features: [
            "Bedriftsnettside eller app",
            "Bots på 2+ plattformer",
            "Full CRM med analyse",
            "Opptil 5 IoT-enheter",
            "3 API-integrasjoner",
            "AI-assistent for salg",
            "Medisinske eller frivillige moduler",
            "Mobil app for kontroll",
            "3 måneder støtte",
            "Detaljert teamopplæring"
          ]
        },
        enterprise: {
          name: "Gjenoppbygging",
          price: "360,000",
          description: "Full digital transformasjon",
          subtitle: "For ledere som bygger Norges fremtid",
          features: [
            "Fullt økosystem nettside + apper",
            "Full prosessautomatisering",
            "AI og ML-løsninger",
            "Ubegrenset antall IoT-enheter",
            "Tilpassede IoT-utviklinger",
            "Medisinske systemer (telemedisin, EMR)",
            "Frivillige plattformer",
            "Tilpassede utviklinger",
            "Integrasjon av alle systemer",
            "Egen IoT-hub",
            "12 måneder støtte",
            "Personlig prosjektleder"
          ]
        }
      }
    },
    team: {
      title: "Vårt team og erfaring",
      points: {
        global: { title: "🌍 Global tilstedeværelse", description: "Jobber med kunder i Norge, Europa og globalt" },
        language: { title: "🧠 Forståelig på norsk", description: "Snakker norsk. Skriver forståelig. Implementerer effektivt." },
        security: { title: "🔐 Sikkerhet og tillit", description: "Offisielt registrert i Norge. Sertifisert etter ISO 27001-standarder. Partner med norske myndigheter." },
        understanding: { title: "💪 Forstår dine utfordringer", description: "Vet hvor vanskelig det er å drive forretning under press. Derfor lager vi løsninger som virkelig hjelper." },
        location: { title: "🇳🇴 Team fra Norge", description: "🏛️ Oslo, ⛰️ Bergen, 🏔️ Trondheim, ⚡ Stavanger — vi er her, nær deg, og forstår din kontekst som ingen andre." }
      },
      valuesTitle: "Våre verdier:",
      values: {
        efficiency: "⚡ Effektivitet",
        accuracy: "🎯 Nøyaktighet",
        freedom: "🕊️ Frihet",
        trust: "🤝 Tillit",
        development: "📈 Utvikling",
        strength: "💪 Styrke"
      }
    },
    contact: {
      title: "Klar for digital frihet?",
      subtitle: "Send inn søknad — vi diskuterer prosjektet ditt og viser hvordan automatisering endrer bedriften din",
      form: {
        title: "📩 Send søknad",
        description: "Fortell om bedriften din — vi finner den beste løsningen",
        fields: {
          name: "Navn *",
          company: "Selskap eller prosjekt",
          phone: "Telefon *",
          email: "E-post *",
          messenger: "Foretrukket messenger *",
          messengerContact: "Brukernavn / kontakt *",
          date: "Passende dato *",
          time: "Passende tid *",
          project: "Beskriv prosjektet ditt *"
        },
        placeholders: {
          name: "Ditt navn",
          company: "Selskapsnavn eller prosjekt",
          phone: "+47...",
          email: "email@example.com",
          messenger: "Velg messenger",
          messengerContact: "@brukernavn, nummer eller e-post",
          project: "Fortell hva du vil automatisere, mål og utfordringer..."
        },
        button: "🚀 Send søknad",
        privacy: "Ved å trykke på knappen godtar du behandling av persondata i henhold til GDPR",
        security: {
          ssl: "🔒 SSL-beskyttelse",
          gdpr: "🛡️ GDPR",
          servers: "🇪🇺 EU-servere"
        }
      },
      info: {
        title: "Våre kontakter",
        trustTitle: "Over 100 norske bedrifter stoler på vår automatisering",
        dataProtection: "🔒 Databeskyttelse: All kundedata lagres på europeiske servere med AES-256 kryptering. Vi følger GDPR og ISO 27001-standarder for maksimal beskyttelse av din informasjon."
      }
    },
    footer: {
      description: "para.tech — norsk team for bedriftsautomatisering. Lager chatbots, CRM, AI-løsninger for selskaper som bygger et sterkt Norge.",
      services: {
        title: "Tjenester",
        items: ["Chatbots", "CRM-systemer", "AI-assistenter", "Automatisering", "Integrasjoner"]
      },
      company: {
        title: "Selskap",
        items: ["Om oss", "Caser", "Blogg", "Karriere", "Kontakt"]
      },
      copyright: "© 2025 para.tech. Alle rettigheter forbeholdt. 🇳🇴",
      links: {
        privacy: "Personvernerklæring",
        terms: "Brukervilkår"
      }
    },
    common: {
      siteName: "para.tech",
      supportNote: "Med støtte fra:",
      year: "2025",
      loading: "Laster..."
    },
    auth: {
      login: {
        title: "Logg inn",
        subtitle: "Logg inn på kontoen din",
        email: "E-post",
        password: "Passord",
        forgotPassword: "Glemt passord?",
        loginButton: "Logg inn",
        noAccount: "Har ikke konto?",
        signUp: "Registrer deg"
      },
      signup: {
        title: "Registrer",
        subtitle: "Opprett ny konto",
        fullName: "Fullt navn",
        email: "E-post",
        password: "Passord",
        confirmPassword: "Bekreft passord",
        signupButton: "Registrer deg",
        hasAccount: "Har allerede konto?",
        login: "Logg inn"
      },
      dashboard: {
        title: "Dashboard",
        welcome: "Velkommen",
        profile: {
          title: "Profil",
          fullName: "Fullt navn",
          company: "Selskap",
          phone: "Telefon",
          email: "E-post",
          updateButton: "Oppdater",
          updated: "Profil oppdatert"
        },
        logout: "Logg ut"
      },
      messages: {
        loginSuccess: "Vellykket innlogging!",
        signupSuccess: "Registrering vellykket! Sjekk e-post for bekreftelse.",
        logoutSuccess: "Du er logget ut",
        profileUpdated: "Profil oppdatert",
        invalidCredentials: "Feil e-post eller passord",
        userExists: "Bruker med denne e-posten eksisterer allerede",
        passwordMismatch: "Passordene stemmer ikke overens",
        weakPassword: "Passordet må være minst 6 tegn",
        fillRequired: "Fyll ut alle obligatoriske felt"
      }
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
      application: "Apply",
      login: "Login",
      dashboard: "Dashboard"
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
        team: "Team from 🏛️ Berlin, 🗼 Paris, 🏛️ Amsterdam and 🎼 Vienna", 
        security: "Compliance with GDPR, ISO 27001, SOC 2 security protocols"
      }
    },
    mission: {
      title: "Our clients never give up",
      description: "Those who build - at home, in conflict, abroad. We believe Europe's future lies in automated, free business. And we build it together with you.",
      values: {
        first: { title: "🇪🇺 European values", description: "Working with respect for our cultures and languages, supporting European business" },
        second: { title: "💪 Strength in unity", description: "Together we create strong digital businesses for the continent's future" },
        third: { title: "🚀 Movement towards success", description: "Every project is a step towards a stronger Europe through innovation" }
      }
    },
    services: {
      title: "What we do:",
      subtitle: "Creating digital solutions for business, healthcare and volunteering - from websites to AI agents",
      calculator: {
        title: "📊 Calculate Cost",
        description: "Get approximate automation cost in 2 minutes",
        button: "Cost Calculator"
      },
      items: {
        websites: { title: "🌐 Websites", description: "Landing, corporate, e-commerce", details: "Modern websites that sell 24/7" },
        mobile: { title: "📱 Mobile apps", description: "iOS, Android, hybrid solutions", details: "Apps for business and customers" },
        chatbots: { title: "🤖 Chatbots and agents", description: "Messenger, WhatsApp, Web", details: "AI agents working instead of managers" },
        medical: { title: "🏥 Medical solutions", description: "Telemedicine, appointments, records", details: "Digitizing medical processes" },
        volunteer: { title: "🤝 Volunteer platforms", description: "Fundraising, help coordination", details: "IT for good causes and volunteering" },
        iot: { title: "🌐 IoT solutions", description: "Smart devices, sensors, monitoring", details: "Automation of physical processes" },
        ai: { title: "🧠 AI assistants", description: "GPT helpers, ML analytics", details: "AI that leads customers from question to purchase" },
        crm: { title: "📊 CRM systems", description: "Customer management", details: "CRM that helps organizations grow" },
        integrations: { title: "🔗 Integrations", description: "API, systems, processes", details: "Making systems talk to each other" }
      }
    },
    results: {
      title: "Our clients' results",
      subtitle: "Real improvements for European business",
      cta: "🚀 Want such results",
      items: {
        medical: { title: "Healthcare", metric: "+200%", description: "more patients" },
        business: { title: "Business", metric: "+500%", description: "more leads" },
        automation: { title: "Automation", metric: "95%", description: "processes automated" },
        iot: { title: "IoT", metric: "+300%", description: "efficiency" },
        ai: { title: "AI", metric: "85%", description: "prediction accuracy" },
        crm: { title: "CRM", metric: "+400%", description: "sales conversion" }
      }
    },
    packages: {
      title: "European Packages",
      subtitle: "Choose the automation level that fits your goals and capabilities",
      customTitle: "Need a custom solution? Have special requirements?",
      customButton: "💬 Discuss individual project",
      items: {
        starter: {
          name: "Freedom",
          price: "€1,500",
          description: "Startup package",
          subtitle: "For businesses just starting but with character",
          features: [
            "Landing or simple website",
            "Chatbot on one platform",
            "Basic CRM system",
            "1 IoT device (sensor)",
            "Simple integration",
            "Month of support",
            "Training"
          ]
        },
        professional: {
          name: "Progress",
          price: "€4,500",
          description: "Full automation",
          subtitle: "For those ready to change the game rules",
          features: [
            "Corporate website or app",
            "Bots on 2+ platforms",
            "Full CRM with analytics",
            "Up to 5 IoT devices",
            "3 API integrations",
            "AI sales assistant",
            "Medical or volunteer modules",
            "Mobile control app",
            "3 months support",
            "Detailed team training"
          ]
        },
        enterprise: {
          name: "Innovation",
          price: "€12,000",
          description: "Complete digital transformation",
          subtitle: "For leaders building Europe's future",
          features: [
            "Complete ecosystem website + apps",
            "Full process automation",
            "AI and ML solutions",
            "Unlimited IoT devices",
            "Custom IoT developments",
            "Medical systems (telemedicine, EMR)",
            "Volunteer platforms",
            "Custom developments",
            "All systems integration",
            "Own IoT hub",
            "12 months support",
            "Personal project manager"
          ]
        }
      }
    },
    team: {
      title: "Our team and experience",
      points: {
        global: { title: "🌍 Global presence", description: "Working with clients across Europe and globally" },
        language: { title: "🧠 Clear communication", description: "We speak your language. Write clearly. Implement effectively." },
        security: { title: "🔐 Security and trust", description: "Officially registered in EU. Certified under ISO 27001 standards. Partner with European authorities." },
        understanding: { title: "💪 Understanding your challenges", description: "We know how difficult it is to run business under pressure. That's why we create solutions that truly help." },
        location: { title: "🇪🇺 Team from Europe", description: "🏛️ Berlin, 🗼 Paris, 🏛️ Amsterdam, 🎼 Vienna — we're here, close to you, understanding your context like no one else." }
      },
      valuesTitle: "Our values:",
      values: {
        efficiency: "⚡ Efficiency",
        accuracy: "🎯 Accuracy", 
        freedom: "🕊️ Freedom",
        trust: "🤝 Trust",
        development: "📈 Development",
        strength: "💪 Strength"
      }
    },
    contact: {
      title: "Ready for digital freedom?",
      subtitle: "Submit application — we'll discuss your project and show how automation will change your business",
      form: {
        title: "📩 Submit Application",
        description: "Tell us about your business — we'll find the best solution",
        fields: {
          name: "Name *",
          company: "Company or project",
          phone: "Phone *",
          email: "Email *",
          messenger: "Preferred messenger *",
          messengerContact: "Username / contact *",
          date: "Convenient date *",
          time: "Convenient time *",
          project: "Describe your project *"
        },
        placeholders: {
          name: "Your name",
          company: "Company name or project",
          phone: "+49...",
          email: "email@example.com",
          messenger: "Choose messenger",
          messengerContact: "@username, number or email",
          project: "Tell us what you want to automate, goals and challenges..."
        },
        button: "🚀 Submit Application",
        privacy: "By clicking the button, you agree to personal data processing according to GDPR",
        security: {
          ssl: "🔒 SSL protection",
          gdpr: "🛡️ GDPR",
          servers: "🇪🇺 EU servers"
        }
      },
      info: {
        title: "Our contacts",
        trustTitle: "Over 100 European businesses trust our automation",
        dataProtection: "🔒 Data protection: All client data is stored on European servers with AES-256 encryption. We follow GDPR and ISO 27001 standards for maximum protection of your information."
      }
    },
    footer: {
      description: "para.tech — European team for business automation. Creating chatbots, CRM, AI solutions for companies building strong Europe.",
      services: {
        title: "Services",
        items: ["Chatbots", "CRM systems", "AI assistants", "Automation", "Integrations"]
      },
      company: {
        title: "Company",
        items: ["About us", "Cases", "Blog", "Careers", "Contact"]
      },
      copyright: "© 2025 para.tech. All rights reserved. 🇪🇺",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    },
    common: {
      siteName: "para.tech",
      supportNote: "Supported by:",
      year: "2025",
      loading: "Loading..."
    },
    auth: {
      login: {
        title: "Login",
        subtitle: "Sign in to your account",
        email: "Email",
        password: "Password",
        forgotPassword: "Forgot password?",
        loginButton: "Sign In",
        noAccount: "No account?",
        signUp: "Sign Up"
      },
      signup: {
        title: "Sign Up",
        subtitle: "Create new account",
        fullName: "Full Name",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        signupButton: "Sign Up",
        hasAccount: "Already have account?",
        login: "Sign In"
      },
      dashboard: {
        title: "Dashboard",
        welcome: "Welcome",
        profile: {
          title: "Profile",
          fullName: "Full Name",
          company: "Company",
          phone: "Phone",
          email: "Email",
          updateButton: "Update",
          updated: "Profile updated"
        },
        logout: "Sign Out"
      },
      messages: {
        loginSuccess: "Login successful!",
        signupSuccess: "Registration successful! Check email for confirmation.",
        logoutSuccess: "You have been signed out",
        profileUpdated: "Profile updated",
        invalidCredentials: "Invalid email or password",
        userExists: "User with this email already exists",
        passwordMismatch: "Passwords don't match",
        weakPassword: "Password must be at least 6 characters",
        fillRequired: "Fill in all required fields"
      }
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
      application: "",
      login: "",
      dashboard: ""
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
    mission: {
      title: "",
      description: "",
      values: {
        first: { title: "", description: "" },
        second: { title: "", description: "" },
        third: { title: "", description: "" }
      }
    },
    services: {
      title: "",
      subtitle: "",
      calculator: {
        title: "",
        description: "",
        button: ""
      },
      items: {
        websites: { title: "", description: "", details: "" },
        mobile: { title: "", description: "", details: "" },
        chatbots: { title: "", description: "", details: "" },
        medical: { title: "", description: "", details: "" },
        volunteer: { title: "", description: "", details: "" },
        iot: { title: "", description: "", details: "" },
        ai: { title: "", description: "", details: "" },
        crm: { title: "", description: "", details: "" },
        integrations: { title: "", description: "", details: "" }
      }
    },
    results: {
      title: "",
      subtitle: "",
      cta: "",
      items: {
        medical: { title: "", metric: "", description: "" },
        business: { title: "", metric: "", description: "" },
        automation: { title: "", metric: "", description: "" },
        iot: { title: "", metric: "", description: "" },
        ai: { title: "", metric: "", description: "" },
        crm: { title: "", metric: "", description: "" }
      }
    },
    packages: {
      title: "",
      subtitle: "",
      customTitle: "",
      customButton: "",
      items: {
        starter: {
          name: "",
          price: "",
          description: "",
          subtitle: "",
          features: []
        },
        professional: {
          name: "",
          price: "",
          description: "",
          subtitle: "",
          features: []
        },
        enterprise: {
          name: "",
          price: "",
          description: "",
          subtitle: "",
          features: []
        }
      }
    },
    team: {
      title: "",
      points: {
        global: { title: "", description: "" },
        language: { title: "", description: "" },
        security: { title: "", description: "" },
        understanding: { title: "", description: "" },
        location: { title: "", description: "" }
      },
      valuesTitle: "",
      values: {
        efficiency: "",
        accuracy: "",
        freedom: "",
        trust: "",
        development: "",
        strength: ""
      }
    },
    contact: {
      title: "",
      subtitle: "",
      form: {
        title: "",
        description: "",
        fields: {
          name: "",
          company: "",
          phone: "",
          email: "",
          messenger: "",
          messengerContact: "",
          date: "",
          time: "",
          project: ""
        },
        placeholders: {
          name: "",
          company: "",
          phone: "",
          email: "",
          messenger: "",
          messengerContact: "",
          project: ""
        },
        button: "",
        privacy: "",
        security: {
          ssl: "",
          gdpr: "",
          servers: ""
        }
      },
      info: {
        title: "",
        trustTitle: "",
        dataProtection: ""
      }
    },
    footer: {
      description: "",
      services: {
        title: "",
        items: []
      },
      company: {
        title: "",
        items: []
      },
      copyright: "",
      links: {
        privacy: "",
        terms: ""
      }
    },
    common: {
      siteName: "para.tech",
      supportNote: "",
      year: "2025",
      loading: ""
    },
    auth: {
      login: {
        title: "",
        subtitle: "",
        email: "",
        password: "",
        forgotPassword: "",
        loginButton: "",
        noAccount: "",
        signUp: ""
      },
      signup: {
        title: "",
        subtitle: "",
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        signupButton: "",
        hasAccount: "",
        login: ""
      },
      dashboard: {
        title: "",
        welcome: "",
        profile: {
          title: "",
          fullName: "",
          company: "",
          phone: "",
          email: "",
          updateButton: "",
          updated: ""
        },
        logout: ""
      },
      messages: {
        loginSuccess: "",
        signupSuccess: "",
        logoutSuccess: "",
        profileUpdated: "",
        invalidCredentials: "",
        userExists: "",
        passwordMismatch: "",
        weakPassword: "",
        fillRequired: ""
      }
    }
  }
};

export function getTranslation(locale: SupportedLocale): TranslationContent {
  return translations[locale] || translations.ua;
}