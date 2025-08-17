import { useEffect } from 'react';

const RussianWarshipPage = () => {
  useEffect(() => {
    document.title = "Russian Warship - 8a88a.io";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-yellow-400 to-blue-800 flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Neptune Missile */}
        <div className="text-8xl mb-8 animate-bounce">
          🚀
        </div>
        
        {/* Historic Image */}
        <div className="mb-8 max-w-2xl mx-auto">
          <img 
            src="/lovable-uploads/917d445b-3c92-45e2-b9c3-c8582a414d3f.png" 
            alt="Український воїн і російський корабель" 
            className="w-full rounded-lg shadow-2xl border-4 border-yellow-400"
          />
        </div>
        
        {/* Main Message */}
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight animate-pulse">
          Русский военный корабль
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-yellow-300">
          иди нах*й!
        </h2>
        
        {/* Glory to Ukraine */}
        <div className="text-2xl md:text-4xl font-semibold mb-8">
          <div className="mb-2">Слава Україні!</div>
          <div>Героям Слава!</div>
        </div>
        
        {/* Decorative elements */}
        <div className="flex justify-center items-center gap-4 text-4xl mb-8">
          <span className="animate-spin">🌻</span>
          <span className="animate-pulse">💙💛</span>
          <span className="animate-spin">🌻</span>
        </div>
        
        {/* Return and Volunteer links */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/ua" 
            className="inline-block bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Повернутись на 8a88a.io
          </a>
          <a 
            href="#volunteer" 
            className="inline-block bg-yellow-400/80 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            💙💛 Волонтерка
          </a>
        </div>
        
        {/* Footer message */}
        <div className="mt-16 text-lg opacity-80">
          <p>Підтримаємо Україну разом! 🇺🇦</p>
        </div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RussianWarshipPage;