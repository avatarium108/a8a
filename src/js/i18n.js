class I18n {
    constructor() {
        this.currentLang = this.getLanguageFromURL() || 'en';
        this.translations = {};
        this.init();
    }

    getLanguageFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('lang');
    }

    async init() {
        await this.loadTranslations(this.currentLang);
        this.updateContent();
        this.updateLanguageSelector();
        this.setupLanguageSelector();
    }

    async loadTranslations(lang) {
        try {
            const response = await fetch(`src/locales/${lang}.json`);
            if (response.ok) {
                this.translations = await response.json();
            } else {
                // Fallback to English if translation not found
                const fallbackResponse = await fetch('src/locales/en.json');
                if (fallbackResponse.ok) {
                    this.translations = await fallbackResponse.json();
                }
            }
        } catch (error) {
            console.error('Error loading translations:', error);
            // Use default English translations as fallback
            this.translations = {
                nav: { home: "Home", about: "About", services: "Services", contact: "Contact" },
                hero: { title: "Welcome to A8A", subtitle: "Your reliable partner in the digital world", cta: "Get Started" },
                about: { title: "About Us", description: "We are a team of professionals providing quality services in web development and digital marketing." },
                services: { 
                    title: "Our Services",
                    web: { title: "Web Development", description: "We create modern and functional websites" },
                    marketing: { title: "Digital Marketing", description: "We promote your business online" },
                    design: { title: "UI/UX Design", description: "We develop user-friendly and beautiful interfaces" }
                },
                contact: { title: "Contact Us", email: "Email", phone: "Phone", address: "Address" },
                footer: { copyright: "© 2025 A8A. All rights reserved." }
            };
        }
    }

    updateContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getNestedTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update page title and meta description based on language
        this.updatePageMeta();
    }

    updatePageMeta() {
        const titles = {
            en: 'A8A - Your Digital Partner',
            ua: 'A8A - Ваш цифровий партнер',
            no: 'A8A - Din digitale partner'
        };

        const descriptions = {
            en: 'Professional web development and digital marketing services. Your reliable partner in the digital world.',
            ua: 'Професійні послуги веб-розробки та цифрового маркетингу. Ваш надійний партнер у цифровому світі.',
            no: 'Profesjonelle webutviklingstjenester og digital markedsføring. Din pålitelige partner i den digitale verden.'
        };

        document.title = titles[this.currentLang] || titles.en;
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', descriptions[this.currentLang] || descriptions.en);
        }

        // Update html lang attribute
        document.documentElement.lang = this.currentLang;
    }

    getNestedTranslation(key) {
        return key.split('.').reduce((obj, k) => obj && obj[k], this.translations);
    }

    updateLanguageSelector() {
        const langSelect = document.getElementById('langSelect');
        if (langSelect) {
            langSelect.value = this.currentLang;
        }
    }

    setupLanguageSelector() {
        const langSelect = document.getElementById('langSelect');
        if (langSelect) {
            langSelect.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
        }
    }

    async changeLanguage(lang) {
        this.currentLang = lang;
        
        // Update URL with language parameter
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.pushState({}, '', url);

        // Load new translations and update content
        await this.loadTranslations(lang);
        this.updateContent();
    }
}

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});