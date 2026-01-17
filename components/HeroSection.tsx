
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
        
        <h1 className="font-heading font-bold text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter mb-10 max-w-5xl">
          SOFTWARE, <br />
          <span className="text-brand-gray/20 outline-text">REFORGED.</span>
        </h1>
        
        <p className="max-w-xl text-lg md:text-xl text-brand-gray mb-12 leading-relaxed font-body font-normal">
          We build disciplined software systems designed to scale, adapt, and last. Modern engineering for decision-makers who value longevity over hype.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="group relative px-10 py-5 bg-brand-blue text-white font-heading font-semibold tracking-wide overflow-hidden transition-all active:scale-95">
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button className="px-10 py-5 border border-white/10 text-white font-heading font-semibold tracking-wide hover:bg-white/5 transition-all flex items-center gap-2 group">
            Our Philosophy
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute bottom-12 right-12 hidden lg:block opacity-20 font-mono text-[10px] text-brand-gray space-y-1 uppercase tracking-widest">
        <p>Coordinate // 30.2672° N, 97.7431° W</p>
        <p>Protocol // Discipline.v2</p>
        <p>Status // Ready</p>
      </div>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.12);
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Hero;
