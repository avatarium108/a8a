import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.contact.title.split(' ').slice(0, 2).join(' ')} 
            <span className="text-gradient-ukraine"> {t.contact.title.split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 border-primary/20 shadow-blue">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{t.contact.form.title}</CardTitle>
              <CardDescription>
                {t.contact.form.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">{t.contact.form.fields.name}</Label>
                  <Input id="name" placeholder={t.contact.form.placeholders.name} />
                </div>
                <div>
                  <Label htmlFor="company">{t.contact.form.fields.company}</Label>
                  <Input id="company" placeholder={t.contact.form.placeholders.company} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">{t.contact.form.fields.phone}</Label>
                  <Input id="phone" placeholder={t.contact.form.placeholders.phone} />
                </div>
                <div>
                  <Label htmlFor="email">{t.contact.form.fields.email}</Label>
                  <Input id="email" type="email" placeholder={t.contact.form.placeholders.email} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="messenger">{t.contact.form.fields.messenger}</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t.contact.form.placeholders.messenger} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="telegram">Telegram</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="viber">Viber</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="messenger-contact">{t.contact.form.fields.messengerContact}</Label>
                  <Input id="messenger-contact" placeholder={t.contact.form.placeholders.messengerContact} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">{t.contact.form.fields.date}</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label htmlFor="time">{t.contact.form.fields.time}</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t.contact.form.fields.time.replace(' *', '')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="12:00">12:00</SelectItem>
                      <SelectItem value="13:00">13:00</SelectItem>
                      <SelectItem value="14:00">14:00</SelectItem>
                      <SelectItem value="15:00">15:00</SelectItem>
                      <SelectItem value="16:00">16:00</SelectItem>
                      <SelectItem value="17:00">17:00</SelectItem>
                      <SelectItem value="18:00">18:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="project">{t.contact.form.fields.project}</Label>
                <Textarea 
                  id="project" 
                  placeholder={t.contact.form.placeholders.project}
                  className="min-h-24"
                />
              </div>
              
              <Button variant="ukraine" size="lg" className="w-full">
                {t.contact.form.button}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                {t.contact.form.privacy}
              </p>
              
              {/* Security badges */}
              <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="text-green-600">🔒</span>
                  <span>{t.contact.form.security.ssl}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="text-blue-600">🛡️</span>
                  <span>{t.contact.form.security.gdpr}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="text-primary">🇪🇺</span>
                  <span>{t.contact.form.security.servers}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Contacts */}
          <Card className="bg-muted">
            <CardHeader>
              <CardTitle className="text-xl">{t.contact.info.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-primary">📱</span>
                <a href="https://t.me/a8abot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Telegram: @a8abot
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">📧</span>
                <a href="mailto:info@8a88a.io" className="hover:text-primary transition-colors">
                  info@8a88a.io
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">🌐</span>
                <a href="https://8a88a.io" className="hover:text-primary transition-colors">
                  8a88a.io
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">👥</span>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Facebook: @8a88a.io
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">🏢</span>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn: @8a88a.io
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">📸</span>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Instagram: @8a88a.io
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">🎬</span>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  YouTube: @8a88a.io
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">💬</span>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp: +380...
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust & Security Section */}
        <div className="text-center mt-16 p-8 bg-muted rounded-2xl">
          <h3 className="text-xl font-semibold mb-6 text-primary">
            {t.contact.info.trustTitle}
          </h3>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-primary">🤝</span>
              <span>Партнер Дія.Бізнес</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-green-600">🔐</span>
              <span>ISO 27001</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-blue-600">🛡️</span>
              <span>GDPR Compliance</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-primary">🇺🇦</span>
              <span>Реєстр IT України</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>🏢 IT-компанії</span>
            <span>🛒 E-commerce</span>
            <span>🎓 Освітні проєкти</span>
            <span>🤝 Волонтерські організації</span>
            <span>🏥 Медичні клініки</span>
            <span>🍕 Ресторани</span>
            <span>🏭 Виробництво</span>
            <span>🚛 Логістика</span>
            <span>💰 Фінтех</span>
            <span>🏠 Нерухомість</span>
            <span>💅 Салони краси</span>
            <span>🚗 Автосервіси</span>
          </div>
          
          {/* Data protection notice */}
          <div className="mt-6 p-4 bg-background rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground">
              {t.contact.info.dataProtection}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;