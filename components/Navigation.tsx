
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-brand-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
          <span className="font-heading font-bold tracking-tight text-xl">THE FYNNX</span>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-medium text-brand-gray">
          <a href="#approach" className="hover:text-white transition-colors">Approach</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#principles" className="hover:text-white transition-colors">Principles</a>
        </div>
        <button className="px-4 py-2 border border-white/10 text-sm hover:border-brand-blue/50 hover:bg-brand-blue/5 transition-all">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
