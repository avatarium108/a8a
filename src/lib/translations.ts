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
      banking: { title: string; description: string; details: string; };
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
      volunteer: "4.5.0 ++",
      application: "Заявка",
      login: "Вхід",
      dashboard: "Кабінет"
    },
    hero: {
      title: "Молодий стартап для автоматизації українського бізнесу",
      subtitle: "Створюємо сайти, боти, CRM, AI та IoT рішення для тих, хто будує Україну",
      mission: "para.tech — молодий український стартап, що спеціалізується на автоматизації бізнесу. Ми тільки починаємо, але вже маємо великі плани та перших клієнтів, які довіряють нам свої проекти.",
      cta: {
        application: "🔵 Залишити заявку",
        test: "🟡 Протестувати рішення", 
        calculate: "🔶 Порахувати вартість"
      },
      features: {
        service: "Автоматизації корисні для користувачів інтернету",
        servers: "Безпечні сервери, дотримання GDPR та сучасних стандартів безпеки",
        team: "Невелика, але амбітна команда з <img src='/lovable-uploads/4fad7f41-3fa5-4c19-8fb1-cfd7699de53e.png' alt='Прапор Запоріжжя' style='display: inline; width: 16px; height: 12px; margin: 0 2px;'/> Запоріжжя, що активно розширюється",
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
      title: "Що вміє наш стартап:",
      subtitle: "Розвиваємо експертизу в автоматизації бізнесу — від простих рішень до амбітних проектів",
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
        integrations: { title: "🔗 Інтеграції", description: "API, системи, процеси", details: "Щоб системи говорили одна з одною" },
        banking: { title: "🏦 Банкінг", description: "Корисне інтернет користувачам", details: "Зручні фінансові рішення для повсякденного життя" }
      }
    },
    results: {
      title: "Наші перші успіхи",
      subtitle: "Реальні результати для перших клієнтів, які повірили в наш стартап",
      cta: "🚀 Хочу такі результати",
      items: {
        medical: { title: "Медицина", metric: "+200%", description: "більше пацієнтів" },
        business: { title: "Бізнес", metric: "108%", description: "більше заявок" },
        automation: { title: "Автоматизація", metric: "95%", description: "процесів автоматизовано" },
        iot: { title: "IoT", metric: "+300%", description: "ефективності" },
        ai: { title: "AI", metric: "85%", description: "точності прогнозів" },
        crm: { title: "CRM", metric: "+400%", description: "конверсія продажів" }
      }
    },
    packages: {
      title: "Стартап-пакети для зростання",
      subtitle: "Оберіть рівень автоматизації для вашого бізнесу. Ми тільки починаємо, тому ціни максимально доступні",
      customTitle: "Потрібно індивідуальне рішення? Маєте особливі вимоги?",
      customButton: "💬 Обговорити індивідуальний проєкт",
      items: {
        starter: {
          name: "Воля",
          price: "15,000",
          description: "Стартап-набір",
          subtitle: "Для стартапів та малого бізнесу — як ми самі",
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
          subtitle: "Для тих, хто зростає разом з нами",
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
          subtitle: "Для амбітних проектів - наша мрія стати великими",
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
      title: "Хто ми та куди йдемо",
      points: {
        global: { title: "🌍 Амбіції без кордонів", description: "Починаємо в Україні, але мріємо про клієнтів у всьому світі" },
        language: { title: "🧠 Зрозуміло українською", description: "Розмовляємо українською. Розуміємо проблеми українського бізнесу. Робимо так, щоб було просто." },
        security: { title: "🔐 Серйозно ставимося до безпеки", description: "Навіть як стартап, дотримуємося сучасних стандартів безпеки та плануємо отримати всі необхідні сертифікації." },
        understanding: { title: "💪 Розуміємо ваші виклики", description: "Самі є стартапом, знаємо, як важко починати. Особливо в умовах війни. Тому робимо доступні рішення." },
        location: { title: "🇺🇦 Стартап із Запоріжжя", description: "Базуємося в <img src='/lovable-uploads/4fad7f41-3fa5-4c19-8fb1-cfd7699de53e.png' alt='Прапор Запоріжжя' style='display: inline; width: 16px; height: 12px; margin: 0 2px;'/> Запоріжжі, але команда розподілена. Плануємо розширюватися на інші міста України." }
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
        trustTitle: "Перші українські бізнеси вже довіряють нашому молодому стартапу",
        dataProtection: "🔒 Захист даних: Навіть як стартап, серйозно ставимося до безпеки. Дані зберігаються на захищених серверах із сучасним шифруванням."
      }
    },
    footer: {
      description: "para.tech — молодий український стартап для автоматизації бізнесу. Починаємо з малого, але мріємо про велике майбутнє разом з вами.",
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
      title: "Vi hjelper deg å vokse",
      subtitle: "Enkle digitale løsninger for norske bedrifter",
      mission: "Vi lager nettsider, apper og automatisering som faktisk virker. Rett frem, rimelig, pålitelig.",
      cta: {
        application: "Bestill nå",
        test: "Les mer",
        calculate: "Beregn kostnad"
      },
      features: {
        service: "Norsk service",
        servers: "Sikre servere", 
        team: "Team fra Norge",
        security: "Vi beskytter dine data"
      }
    },
    mission: {
      title: "Enkelt og ærlig",
      description: "Vi hjelper norske bedrifter med teknologi som virker. Uten mas. Uten unødvendig kompleksitet.",
      values: {
        first: { title: "🏔️ Norsk kvalitet", description: "Vi leverer det vi lover. Punkt." },
        second: { title: "🤝 Enkel kommunikasjon", description: "Snakker norsk. Forklarer tydelig." },
        third: { title: "⚡ Rask levering", description: "Ferdig på tid. Fungerer fra dag én." }
      }
    },
    services: {
      title: "Våre tjenester",
      subtitle: "Digitale løsninger som fungerer",
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
        integrations: { title: "🔗 Integrasjoner", description: "API, systemer, prosesser", details: "Så systemer kan snakke sammen" },
        banking: { title: "🏦 Bank", description: "Nyttig internett for brukere", details: "Praktiske finansielle løsninger for hverdagen" }
      }
    },
    results: {
      title: "Resultater",
      subtitle: "Dette får du",
      cta: "Vil du ha dette?",
      items: {
        medical: { title: "Helse", metric: "108%", description: "mer effektivt" },
        business: { title: "Bedrift", metric: "108%", description: "flere kunder" },
        automation: { title: "Automatisering", metric: "108%", description: "mindre arbeid" },
        iot: { title: "IoT", metric: "108%", description: "bedre kontroll" },
        ai: { title: "AI", metric: "108%", description: "smartere drift" },
        crm: { title: "CRM", metric: "108%", description: "bedre salg" }
      }
    },
    packages: {
      title: "Våre pakker",
      subtitle: "Rimelige priser. Tydelige leveranser.",
      customTitle: "Trenger noe annet?",
      customButton: "Kontakt oss",
      items: {
        starter: {
          name: "Start",
          price: "25,000",
          description: "Grunnpakke",
          subtitle: "For småbedrifter",
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
          name: "Profi",
          price: "75,000",
          description: "Full løsning",
          subtitle: "For voksende bedrifter",
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
          name: "Bedrift",
          price: "150,000",
          description: "Komplett løsning",
          subtitle: "For større bedrifter",
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
      title: "Hvem vi er",
      points: {
        global: { title: "🇳🇴 Norsk kvalitet", description: "Vi leverer det vi lover" },
        language: { title: "🗣️ Snakker norsk", description: "Enkel kommunikasjon på norsk" },
        security: { title: "🔒 Trygg partner", description: "Vi beskytter dine data" },
        understanding: { title: "🤝 Forstår deg", description: "Vi hører på dine behov" },
        location: { title: "📍 Fra Norge", description: "Team fra hele Norge" }
      },
      valuesTitle: "Det vi står for:",
      values: {
        efficiency: "⚡ Raskt",
        accuracy: "🎯 Presist",
        freedom: "🕊️ Enkelt",
        trust: "🤝 Ærlig",
        development: "📈 Vekst",
        strength: "💪 Robust"
      }
    },
    contact: {
      title: "Klar til å starte?",
      subtitle: "Ta kontakt. Vi hjelper deg.",
      form: {
        title: "Kontakt oss",
        description: "Fortell hva du trenger",
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
        button: "Send melding",
        privacy: "Vi beskytter dine data",
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
      description: "Enkle digitale løsninger for norske bedrifter.",
      services: {
        title: "Tjenester",
        items: ["Nettsider", "Apper", "Chatbots", "Automatisering", "Integrasjoner"]
      },
      company: {
        title: "Selskap",
        items: ["Om oss", "Resultater", "Blogg", "Jobb", "Kontakt"]
      },
      copyright: "© 2025 para.tech. Alle rettigheter forbeholdt.",
      links: {
        privacy: "Personvern",
        terms: "Vilkår"
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
        integrations: { title: "🔗 Integrations", description: "API, systems, processes", details: "Making systems talk to each other" },
        banking: { title: "🏦 Banking", description: "Useful internet for users", details: "Convenient financial solutions for everyday life" }
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
        integrations: { title: "", description: "", details: "" },
        banking: { title: "", description: "", details: "" }
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