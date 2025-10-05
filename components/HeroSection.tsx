
import React from 'react';
import StarryBackground from './StarryBackground';

// A more detailed and futuristic planet SVG
const FuturisticPlanet = () => (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[70vw] h-auto max-w-[700px] md:w-[50vw] md:max-w-[800px] pointer-events-none animate-slow-rotate opacity-60 md:opacity-80">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="planetCore" cx="30%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#6d28d9" />
                </radialGradient>
                <radialGradient id="planetSurface" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(25, 22, 57, 0.1)" />
                    <stop offset="80%" stopColor="rgba(25, 22, 57, 0.8)" />
                    <stop offset="100%" stopColor="rgba(10, 8, 28, 1)" />
                </radialGradient>
                 <filter id="atmosphere" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
            <g style={{ filter: 'url(#atmosphere)' }}>
                <circle cx="250" cy="250" r="200" fill="url(#planetCore)" />
            </g>
            <circle cx="250" cy="250" r="200" fill="url(#planetSurface)" />
            <g transform="rotate(-20 250 250)">
                <ellipse cx="250" cy="250" rx="300" ry="70" stroke="rgba(192, 132, 252, 0.3)" strokeWidth="3" fill="none" />
                <ellipse cx="250" cy="250" rx="280" ry="60" stroke="rgba(192, 132, 252, 0.5)" strokeWidth="5" fill="none" />
            </g>
        </svg>
    </div>
);


const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-start text-left overflow-hidden">
      <StarryBackground />
      
      {/* Additional nebula/galaxy layer for more depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-black/50 opacity-50"></div>
      
      <FuturisticPlanet />

      <style>{`
        @keyframes text-focus-in {
          0% {
            filter: blur(12px);
            opacity: 0;
          }
          100% {
            filter: blur(0px);
            opacity: 1;
          }
        }
        @keyframes button-glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(139, 92, 246, 0.4), 0 0 20px rgba(139, 92, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.7), 0 0 40px rgba(139, 92, 246, 0.5);
          }
        }
        @keyframes slow-rotate {
            from { transform: translateY(-50%) rotate(0deg); }
            to { transform: translateY(-50%) rotate(360deg); }
        }
        .animate-text-focus-in {
          animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        }
        .animate-button-glow {
            animation: button-glow 4s ease-in-out infinite;
        }
        .animate-slow-rotate {
            animation: slow-rotate 180s linear infinite;
        }
      `}</style>
      
      <div className="relative z-10 p-4 container mx-auto px-6 lg:px-8">
        <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-wide animate-text-focus-in" style={{ animationDelay: '0.2s' }}>
              A World Away:
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Hunting for Exoplanets with AI
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 animate-text-focus-in" style={{ animationDelay: '0.5s' }}>
              Exploring new worlds through data and intelligence
            </p>
            <a
              href="#intro"
              className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 animate-button-glow animate-text-focus-in"
              style={{ animationDelay: '0.8s' }}
            >
              Explore
            </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
