
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-40 px-6 md:px-12 lg:px-24 bg-brand-black border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading font-bold text-5xl md:text-7xl mb-12 text-white leading-tight">
          Ready to build something that lasts?
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-12 py-6 bg-brand-blue text-white font-heading font-bold text-lg tracking-wide hover:bg-brand-blue/90 transition-all shadow-[0_0_30px_rgba(0,71,255,0.2)]">
            Start a Project
          </button>
          <a href="mailto:hello@thefynnx.com" className="text-brand-gray hover:text-white transition-colors underline underline-offset-8 font-medium">
            Contact Engineering
          </a>
        </div>
        
        <p className="mt-12 text-sm text-brand-gray/50 font-mono tracking-widest uppercase">
          Availability: High Authority • Low Overhead • Direct Engineering Access
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
