import { useEffect } from 'react';

const RussianWarshipPage = () => {
  useEffect(() => {
    document.title = "Russian Warship - para.tech";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-black to-red-700 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #000000 30%, #000000 70%, #b91c1c 100%)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Historic Image */}
        <div className="mb-8 max-w-2xl mx-auto">
          <img 
            src="/lovable-uploads/917d445b-3c92-45e2-b9c3-c8582a414d3f.png" 
            alt="Український воїн і російський корабель" 
            className="w-full"
            style={{ background: 'transparent', mixBlendMode: 'multiply' }}
          />
        </div>
        
        {/* Glory to Nation and Decorative elements */}
        <div className="text-2xl md:text-4xl font-semibold mb-8">
          <div className="mb-2">Слава нації!</div>
          <div>Смерть ворогам!</div>
        </div>
        
        {/* Decorative elements with trident */}
        <div className="flex justify-center items-center gap-4 text-4xl mb-8">
          <span className="animate-spin">🌻</span>
          <span className="animate-pulse">💙💛</span>
          <img 
            src="/lovable-uploads/6fb3d41c-2218-4d1a-8fb2-743fdd5ab229.png" 
            alt="Тризуб України" 
            className="w-12 h-12"
          />
          <span className="animate-spin">🌻</span>
        </div>
        
        {/* Return and Volunteer links */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/ua" 
            className="inline-block bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Повернутись на para.tech
          </a>
          <a 
            href="#volunteer" 
            className="inline-block bg-red-600/80 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Волонтеримося ++
          </a>
        </div>
        
        {/* Footer message */}
        <div className="mt-16 text-lg opacity-80">
          <p>Підтримаємо Україну разом! 🇺🇦</p>
        </div>
      </div>
    </div>
  );
};

export default RussianWarshipPage;