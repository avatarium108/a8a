import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готові до 
            <span className="text-gradient-ukraine"> цифрової свободи?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Залишайте заявку — обговоримо ваш проєкт і покажемо, як автоматизація змінить ваш бізнес
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 border-primary/20 shadow-blue">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">📩 Залишити заявку</CardTitle>
              <CardDescription>
                Розкажіть про свій бізнес — ми знайдемо найкраще рішення
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Ім'я *</Label>
                  <Input id="name" placeholder="Ваше ім'я" />
                </div>
                <div>
                  <Label htmlFor="company">Компанія або проект</Label>
                  <Input id="company" placeholder="Назва компанії або проекту" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" placeholder="+380..." />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="messenger">Зручний месенджер *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Оберіть месенджер" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="telegram">Telegram</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="viber">Viber</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Телефон</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="messenger-contact">Логін / контакт *</Label>
                  <Input id="messenger-contact" placeholder="@username, номер чи email" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Зручна дата *</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label htmlFor="time">Зручний час *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Оберіть час" />
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
                <Label htmlFor="project">Опишіть ваш проєкт *</Label>
                <Textarea 
                  id="project" 
                  placeholder="Розкажіть, що хочете автоматизувати, які є завдання та цілі..."
                  className="min-h-24"
                />
              </div>
              
              <Button variant="ukraine" size="lg" className="w-full">
                🚀 Відправити заявку
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних
              </p>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-6">
            {/* Calculator */}
            <Card className="border-secondary/20 hover:shadow-yellow transition-ukraine">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">📊 Розрахувати вартість</CardTitle>
                <CardDescription>
                  Отримайте приблизну вартість автоматизації за 2 хвилини
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ukraineYellow" className="w-full" onClick={scrollToContact}>
                  Калькулятор вартості
                </Button>
              </CardContent>
            </Card>

            {/* Consultation */}
            <Card className="border-primary/20 hover:shadow-blue transition-ukraine">
              <CardHeader>
                <CardTitle className="text-xl text-primary">📞 Записатися на консультацію</CardTitle>
                <CardDescription>
                  Безкоштовна 30-хвилинна консультація з нашим експертом
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white" onClick={scrollToContact}>
                  Обрати зручний час
                </Button>
              </CardContent>
            </Card>

            {/* Contacts */}
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="text-xl">Прямі контакти</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-primary">📱</span>
                  <span>Telegram: @a8abot</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">📧</span>
                  <span>a8a@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">📘</span>
                  <span>Facebook: </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">💼</span>
                  <span>LinkedIn: </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">📷</span>
                  <span>Instagram: </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">▶️</span>
                  <span>YouTube: </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">🎵</span>
                  <span>TikTok: </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary">💬</span>
                  <span>WhatsApp: </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16 p-8 bg-muted rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Понад 100 українських бізнесів довіряють нам автоматизацію
          </h3>
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;