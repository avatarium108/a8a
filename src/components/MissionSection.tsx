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
            <div className="text-center">
              <div className="text-4xl mb-4">🇺🇦</div>
              <h3 className="font-semibold text-lg mb-2">Українські цінності</h3>
              <p className="text-muted-foreground">Працюємо з повагою до нашої культури та мови</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="font-semibold text-lg mb-2">Сила у єдності</h3>
              <p className="text-muted-foreground">Разом створюємо сильний цифровий бізнес</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-semibold text-lg mb-2">Рух до перемоги</h3>
              <p className="text-muted-foreground">Кожен проєкт — крок до сильнішої України</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;