import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/009093d6-0b98-47d4-8dd6-bd9c04675221.png" 
                alt="Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold text-gray-900">{t.common.siteName}</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://t.me/para_tech_ua" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                Telegram
              </a>
              <a 
                href="https://para.tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                Website
              </a>
              <a 
                href="https://linkedin.com/company/para-tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t.footer.services.title}</h3>
            <ul className="space-y-2">
              {t.footer.services.items.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t.footer.company.title}</h3>
            <ul className="space-y-2">
              {t.footer.company.items.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      if (index === 0) document.getElementById('mission-section')?.scrollIntoView({ behavior: 'smooth' });
                      else if (index === 4) document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">{t.footer.copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              {t.footer.links.privacy}
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              {t.footer.links.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;