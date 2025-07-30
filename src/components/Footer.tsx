const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🇺🇦</span>
              <h3 className="text-2xl font-bold">Automation.UA</h3>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Українська команда з автоматизації бізнесу. Створюємо чат-боти, CRM, AI-рішення 
              для компаній, які будують сильну Україну.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-secondary transition-ukraine">
                Telegram
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-ukraine">
                LinkedIn
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-ukraine">
                Facebook
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Послуги</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-secondary transition-ukraine">Чат-боти</a></li>
              <li><a href="#" className="hover:text-secondary transition-ukraine">CRM-системи</a></li>
              <li><a href="#" className="hover:text-secondary transition-ukraine">AI-асистенти</a></li>
              <li><a href="#" className="hover:text-secondary transition-ukraine">Автоматизація</a></li>
              <li><a href="#" className="hover:text-secondary transition-ukraine">Інтеграції</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Компанія</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-secondary transition-ukraine">Про нас</a></li>
              <li><a href="#" className="hover:text-secondary transition-ukraine">Кейси</a></li>
              <li><a href="#" className="hover:text-secondary transition-ukraine">Блог</a></li>
              <li><a href="#" className="hover:text-secondary transition-ukraine">Кар'єра</a></li>
              <li><a href="#" className="hover:text-secondary transition-ukraine">Контакти</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm">
            © 2024 Automation.UA. Всі права захищені. Слава Україні! 🇺🇦
          </div>
          <div className="flex gap-6 text-sm text-white/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary transition-ukraine">Політика конфіденційності</a>
            <a href="#" className="hover:text-secondary transition-ukraine">Умови використання</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;