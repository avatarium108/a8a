import teamImage from "@/assets/team-ukraine.jpg";

const TeamSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Team Image */}
          <div className="relative">
            <img 
              src={teamImage} 
              alt="Українська команда автоматизації" 
              className="rounded-xl shadow-ukraine w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl"></div>
          </div>

          {/* Team Info */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Звідки ми + 
              <span className="text-gradient-ukraine">емпатія</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🌍</span>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Глобальна присутність</h3>
                  <p className="text-muted-foreground">
                    Працюємо з клієнтами в Україні, Норвегії, Європейському Союзі
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">🧠</span>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Зрозуміло українською</h3>
                  <p className="text-muted-foreground">
                    Розмовляємо українською. Пишемо зрозуміло. Впроваджуємо ефективно.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">🔐</span>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Безпека та довіра</h3>
                  <p className="text-muted-foreground">
                    Офіційно зареєстровані в IT-реєстрі України. Сертифіковані за стандартами ISO 27001.
                    Партнер Дія.Бізнес для цифрової трансформації.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">💪</span>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Розуміємо ваші виклики</h3>
                  <p className="text-muted-foreground">
                    Знаємо, як важко вести бізнес в умовах війни. Тому створюємо рішення, 
                    які дійсно допомагають, а не ускладнюють.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">🇺🇦</span>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Команда з України</h3>
                  <p className="text-muted-foreground">
                    Київ, Львів, Рівне, Дніпро, Запоріжжя — ми тут, поруч, і розуміємо ваш контекст як ніхто інший.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-background rounded-xl p-6 mt-8">
              <h4 className="font-semibold text-lg mb-4 text-primary">Наші цінності:</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-primary">⚡</span>
                  <span>Ефективність</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">🎯</span>
                  <span>Точність</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary">🕊️</span>
                  <span>Свобода</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">🤝</span>
                  <span>Довіра</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">📈</span>
                  <span>Розвиток</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary">💪</span>
                  <span>Сила</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;