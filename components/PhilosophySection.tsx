
import React from 'react';

const PhilosophySection: React.FC = () => {
  return (
    <section className="py-64 px-6 md:px-12 lg:px-24 bg-brand-charcoal relative overflow-hidden">
      {/* Subtle geometric pattern in background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <blockquote className="space-y-4">
          <p className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white tracking-tight">
            We don’t chase trends. <br />
            <span className="text-brand-gray/50">We engineer what survives them.</span>
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default PhilosophySection;
