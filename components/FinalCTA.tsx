
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-40 px-6 md:px-12 lg:px-24 bg-brand-black border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading font-bold text-5xl md:text-7xl mb-12 text-white leading-tight">
          Ready to build something that lasts?
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/917639530764?text=Hello%2C%20I%E2%80%99d%20like%20to%20discuss%20a%20software%20project.
"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-12 py-6 bg-brand-blue text-white font-heading font-bold text-lg tracking-wide transition-all shadow-[0_0_30px_rgba(0,71,255,0.2)] hover:bg-brand-blue/90 hover:shadow-[0_0_40px_rgba(0,71,255,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
          >
            Start a Project
          </a>

          <a href="/philosophy" className="text-brand-gray hover:text-white transition-colors underline underline-offset-8 font-medium">
            Our Engineering Principles
          </a>
        </div>

        <p className="mt-12 text-sm text-brand-gray/50 font-mono tracking-widest uppercase">
          Direct access to engineering.
          Clear ownership.
          No unnecessary overhead.

        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
