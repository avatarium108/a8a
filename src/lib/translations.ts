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
      packages: "Løsninger", 
      team: "Team",
      contact: "Kontakt",
      volunteer: "🇳🇴 Støtt Norge",
      application: "Søknad",
      login: "Logg inn",
      dashboard: "Dashboard"
    },
    hero: {
      title: "AI-rådgivning og chatbot-løsninger for norske SMB-bedrifter",
      subtitle: "Vi hjelper små og mellomstore bedrifter med å automatisere kundeservice, øke salg og spare tid gjennom smarte AI-løsninger",
      mission: "Spesialisert på praktiske AI-løsninger for norske SMB-bedrifter. Vi forstår utfordringene dere står overfor og leverer teknologi som faktisk fungerer i hverdagen.",
      cta: {
        application: "Book gratis konsultasjon",
        test: "Se demo av løsningen",
        calculate: "Beregn besparelse"
      },
      features: {
        service: "Norskspråklig support og implementering",
        servers: "Sikre norske og europeiske servere", 
        team: "Erfarne konsulenter med SMB-fokus",
        security: "GDPR-kompatibel og ISO-sertifisert sikkerhet"
      }
    },
    mission: {
      title: "Norske SMB-bedrifter som vokser med AI",
      description: "Vi hjelper ambisiøse norske bedriftseiere som vil ta steget inn i fremtiden. Våre AI-løsninger gir dere mer tid til det som virkelig betyr noe - å bygge bedriften deres.",
      values: {
        first: { title: "🎯 Resultatorientert", description: "Fokuserer på løsninger som gir målbare resultater for din bedrift" },
        second: { title: "🤝 Personlig service", description: "Tett oppfølging og support på norsk - vi er her når du trenger oss" },
        third: { title: "⚡ Rask implementering", description: "Fra idé til fungerende løsning på få uker, ikke måneder" }
      }
    },
    services: {
      title: "Våre tjenester for SMB-bedrifter",
      subtitle: "Praktiske AI-løsninger som gir umiddelbar verdi for din bedrift",
      calculator: {
        title: "📊 Beregn din besparelse",
        description: "Se hvor mye tid og penger du kan spare med automatisering",
        button: "Beregn besparelse"
      },
      items: {
        websites: { title: "🌐 Bedriftsnettsider", description: "Profesjonelle nettsider som konverterer", details: "Responsive nettsider optimalisert for norske kunder" },
        mobile: { title: "📱 Bedriftsapper", description: "Kundeapper og interne verktøy", details: "Native og hybride apper for iOS og Android" },
        chatbots: { title: "🤖 AI-chatbots", description: "Automatisert kundeservice 24/7", details: "Intelligente chatbots som håndterer 80% av kundehenvendelser" },
        medical: { title: "🏥 Helseteknologi", description: "Digitale løsninger for helsesektoren", details: "Timebestilling, pasientportaler og telemedisin" },
        volunteer: { title: "🤝 Organisasjonsverktøy", description: "Digitale løsninger for foreninger", details: "Medlemssystemer og arrangementsplanlegging" },
        iot: { title: "🌐 Smart overvåking", description: "IoT-sensorer for bedriftsoptimalisering", details: "Temperatur, fuktighet, energiforbruk og sikkerhet" },
        ai: { title: "🧠 AI-assistenter", description: "Personlige AI-hjelpere for bedriften", details: "AI som kvalifiserer leads og booker møter automatisk" },
        crm: { title: "📊 Kundestyring", description: "CRM tilpasset norske SMB-bedrifter", details: "Enkel kundeoppfølging med norsk språkstøtte" },
        integrations: { title: "🔗 Systemintegrasjoner", description: "Koble sammen eksisterende systemer", details: "Integrasjoner med Tripletex, Visma og andre norske systemer" },
        banking: { title: "🏦 Betalingsløsninger", description: "Sømløse betalingsopplevelser", details: "Vipps, BankID og andre norske betalingsmetoder" }
      }
    },
    results: {
      title: "Resultater fra norske SMB-bedrifter",
      subtitle: "Dokumenterte forbedringer hos våre kunder",
      cta: "Book gratis konsultasjon",
      items: {
        medical: { title: "Tannlegepraksis Oslo", metric: "60%", description: "færre telefoner til resepsjon" },
        business: { title: "Rørleggerfirma Bergen", metric: "3x", description: "flere kvalifiserte henvendelser" },
        automation: { title: "Regnskapsbyrå Trondheim", metric: "40 timer", description: "spart per måned" },
        iot: { title: "Bakeri Stavanger", metric: "25%", description: "redusert energikostnad" },
        ai: { title: "Eiendomsmegler Tromsø", metric: "80%", description: "av leads kvalifiseres automatisk" },
        crm: { title: "Konsulentfirma Kristiansand", metric: "2.5x", description: "høyere kundetilfredshet" }
      }
    },
    packages: {
      title: "SMB-løsninger tilpasset norske bedrifter",
      subtitle: "Velg pakken som passer din bedrifts størrelse og behov",
      customTitle: "Trenger en skreddersydd løsning for din bedrift?",
      customButton: "Book gratis konsultasjon",
      items: {
        starter: {
          name: "Starter",
          price: "Fra 25,000 kr",
          description: "Perfekt for små bedrifter",
          subtitle: "Kom i gang med automatisering uten store investeringer",
          features: [
            "Enkel AI-chatbot for nettside",
            "Automatisk e-postoppfølging",
            "Grunnleggende CRM-system",
            "Integrasjon med eksisterende systemer",
            "2 måneders support og opplæring",
            "Norskspråklig brukergrensesnitt",
            "GDPR-kompatibel databehandling"
          ]
        },
        professional: {
          name: "Professional",
          price: "Fra 75,000 kr",
          description: "For voksende SMB-bedrifter",
          subtitle: "Komplett automatiseringsløsning for seriøse bedrifter",
          features: [
            "Avansert AI-chatbot med lead-kvalifisering",
            "Automatisk møtebooking og kalendersync",
            "Komplett CRM med rapportering",
            "Integrasjoner med Tripletex/Visma",
            "Mobil app for kundeoppfølging",
            "WhatsApp Business API",
            "6 måneders support og opplæring",
            "Månedlige optimaliseringsrapporter"
          ]
        },
        enterprise: {
          name: "Enterprise",
          price: "Fra 150,000 kr",
          description: "For etablerte bedrifter",
          subtitle: "Full digital transformasjon med dedikert support",
          features: [
            "Skreddersydd AI-løsning for din bransje",
            "Komplett automatisering av salgsprosess",
            "Avansert analyse og prediktiv modellering",
            "Integrasjon med alle eksisterende systemer",
            "Dedikert kundesuksess-manager",
            "24/7 teknisk support",
            "Kvartalsvise strategimøter",
            "Ubegrenset tilpasninger og oppdateringer"
          ]
        }
      }
    },
    team: {
      title: "Hvorfor norske SMB-bedrifter velger oss",
      points: {
        global: { title: "🎯 SMB-spesialisering", description: "Vi forstår utfordringene små og mellomstore bedrifter står overfor" },
        language: { title: "🇳🇴 Norsk ekspertise", description: "Norsktalende team som forstår norsk forretningskultur og regelverk" },
        security: { title: "🔐 Trygg partner", description: "Registrert norsk selskap med full GDPR-compliance og ISO-sertifiseringer" },
        understanding: { title: "💼 Praktisk erfaring", description: "Over 50 implementerte løsninger hos norske SMB-bedrifter" },
        location: { title: "🤝 Lokal tilstedeværelse", description: "Kontorer i Oslo og Bergen - vi møter deg der du er" }
      },
      valuesTitle: "Våre prinsipper:",
      values: {
        efficiency: "⚡ Effektivitet først",
        accuracy: "🎯 Målbare resultater",
        freedom: "🕊️ Enkel implementering",
        trust: "🤝 Transparent kommunikasjon",
        development: "📈 Kontinuerlig forbedring",
        strength: "💪 Langsiktig partnerskap"
      }
    },
    contact: {
      title: "Klar for å automatisere bedriften din?",
      subtitle: "Book en gratis konsultasjon og få en skreddersydd plan for hvordan AI kan hjelpe din SMB-bedrift",
      form: {
        title: "📅 Book gratis konsultasjon",
        description: "Fortell oss om utfordringene dine — vi lager en tilpasset løsning",
        fields: {
          name: "Navn *",
          company: "Bedrift *",
          phone: "Telefon *",
          email: "E-post *",
          messenger: "Foretrukket kontaktmåte *",
          messengerContact: "Kontaktinformasjon *",
          date: "Ønsket dato for konsultasjon *",
          time: "Ønsket tidspunkt *",
          project: "Beskriv dine utfordringer *"
        },
        placeholders: {
          name: "Ditt navn",
          company: "Bedriftsnavn",
          phone: "+47 xxx xx xxx",
          email: "din@bedrift.no",
          messenger: "Telefon, Teams, Zoom",
          messengerContact: "Telefonnummer eller e-post",
          project: "Hvilke prosesser tar for mye tid? Hvor mister dere kunder? Hva ønsker dere å automatisere?"
        },
        button: "Book gratis konsultasjon",
        privacy: "Ved å sende inn skjemaet godtar du vår behandling av persondata i henhold til GDPR",
        security: {
          ssl: "🔒 SSL-kryptert",
          gdpr: "🛡️ GDPR-kompatibel",
          servers: "🇳🇴 Norske servere"
        }
      },
      info: {
        title: "Kontakt oss",
        trustTitle: "Allerede 50+ norske SMB-bedrifter har automatisert med oss",
        dataProtection: "🔒 Datasikkerhet: Vi lagrer all informasjon på norske servere med banknivå-sikkerhet. Full GDPR-compliance og ISO 27001-sertifisering."
      }
    },
    footer: {
      description: "para.tech — spesialisert på AI-rådgivning og chatbot-løsninger for norske SMB-bedrifter. Vi hjelper deg spare tid, øke salg og forbedre kundeservice.",
      services: {
        title: "Tjenester",
        items: ["AI-chatbots", "Automatisering", "CRM-systemer", "Systemintegrasjoner", "Konsultasjon"]
      },
      company: {
        title: "Selskap",
        items: ["Om oss", "Kundehistorier", "Blogg", "Karriere", "Kontakt"]
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
      siteName: "",
      supportNote: "",
      year: "",
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

export function getSupportedLocales(): SupportedLocale[] {
  return Object.keys(translations) as SupportedLocale[];
}