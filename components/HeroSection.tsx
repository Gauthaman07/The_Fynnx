
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [uptime, setUptime] = useState('99.998');

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setUptime((99.99 + Math.random() * 0.009).toFixed(3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-grid overflow-hidden">
      {/* Background gradients for subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-black via-brand-black to-brand-blue/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-black to-transparent pointer-events-none" />
      
      {/* Tech line indicator */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.02] -translate-y-1/2 pointer-events-none" />

      <div className={`relative z-10 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-3 py-1 border border-brand-blue/30 bg-brand-blue/5 rounded-full">
            <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-mono text-brand-blue">System Active</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest font-mono text-brand-gray/50">Uptime: {uptime}%</span>
        </div>
        
        <h1 className="font-heading font-bold text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tighter mb-10 max-w-5xl">
          SOFTWARE, <br />
          <span className="relative inline-block">
            {/* Base Layer (Dim) */}
            <span className="base-outline">BUILT TO LAST</span>
            
            {/* Surge Layer (Bright Glow + Animation) */}
            <span className="absolute top-0 left-0 surge-outline animate-surge" aria-hidden="true">
              BUILT TO LAST
            </span>
          </span>
        </h1>
        
        <p className="max-w-xl text-lg md:text-xl text-brand-gray mb-12 leading-relaxed font-body font-normal">
          Designed with structure and intent.
Disciplined engineering, supported by AI.

        </p>

        <div className="flex flex-col sm:flex-row gap-6">
            <a
  href="https://wa.me/917639530764?text=Hello%2C%20I%E2%80%99d%20like%20to%20discuss%20a%20software%20project.
"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center w-full sm:w-auto px-12 py-6 bg-brand-blue text-white font-heading font-bold text-lg tracking-wide transition-all shadow-[0_0_30px_rgba(0,71,255,0.2)] hover:bg-brand-blue/90 hover:shadow-[0_0_40px_rgba(0,71,255,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
>
  Start a Project
</a>
          <a
            href="/philosophy"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/philosophy');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="px-10 py-5 border border-white/10 text-white font-heading font-semibold tracking-wide hover:bg-white/5 transition-all flex items-center gap-2 group"
          >
            Our Philosophy
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute bottom-12 right-12 hidden lg:block opacity-20 font-mono text-[10px] text-brand-gray space-y-1 uppercase tracking-widest">
        <p>Coordinate // 30.2672° N, 97.7431° W</p>
        <p>Protocol // Discipline.v2</p>
        <p>Status // Ready</p>
      </div>

      <style>{`
        .base-outline {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
          color: transparent;
        }

        .surge-outline {
          -webkit-text-stroke: 2px #ffffff;
          color: transparent;
          filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.8)) 
                  drop-shadow(0 0 15px rgba(59, 130, 246, 0.4));
          /* Mask: Linear gradient with a transparent gap in the middle to create the moving "band" */
          mask-image: linear-gradient(
            60deg,
            transparent 20%,
            black 40%,
            black 60%,
            transparent 80%
          );
          mask-size: 200% 100%;
          mask-position: -100% 0;
        }

        @keyframes surge-anim {
          0% {
            mask-position: -50% 0;
          }
          100% {
            mask-position: 150% 0;
          }
        }

        .animate-surge {
          animation: surge-anim 3s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default Hero;
