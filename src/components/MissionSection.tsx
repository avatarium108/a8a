const MissionSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            Наші клієнти — це ті, хто не здався
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground">
            Хто будує — в тилу, на фронті, за кордоном. 
            Ми віримо, що майбутнє України — в автоматизованому, вільному бізнесі. 
            <span className="font-semibold text-primary"> І ми будуємо його разом з вами.</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-8xl mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer">🇺🇦</div>
              <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-primary/80 transition-colors">Українські цінності</h3>
              <p className="text-muted-foreground text-base leading-relaxed">Працюємо з повагою до нашої культури та мови, підтримуючи український бізнес</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-8xl mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer">💪</div>
              <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-primary/80 transition-colors">Сила у єдності</h3>
              <p className="text-muted-foreground text-base leading-relaxed">Разом створюємо сильний цифровий бізнес для майбутнього нації</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="text-8xl mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer">🚀</div>
              <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-primary/80 transition-colors">Рух до перемоги</h3>
              <p className="text-muted-foreground text-base leading-relaxed">Кожен проєкт — крок до сильнішої України через інновації</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;