import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🔷</span>
              <h3 className="text-2xl font-bold">{t.common.siteName}</h3>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="https://t.me/a8abot" className="text-white/60 hover:text-secondary transition-ukraine">
                Telegram
              </a>
              <a href="https://8a88a.io" className="text-white/60 hover:text-secondary transition-ukraine">
                Website
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-ukraine">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.services.title}</h4>
            <ul className="space-y-2 text-white/80">
              {t.footer.services.items.map((item, index) => (
                <li key={index}>
                  <a href="#services-section" className="hover:text-secondary transition-ukraine" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.company.title}</h4>
            <ul className="space-y-2 text-white/80">
              {t.footer.company.items.map((item, index) => {
                const sectionIds = ['mission-section', 'results-section', '#', '#', 'contact-section'];
                return (
                  <li key={index}>
                    <a href={`#${sectionIds[index]}`} className="hover:text-secondary transition-ukraine" onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(sectionIds[index])?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm">
            {t.footer.copyright}
          </div>
          <div className="flex gap-6 text-sm text-white/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary transition-ukraine">{t.footer.links.privacy}</a>
            <a href="#" className="hover:text-secondary transition-ukraine">{t.footer.links.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;