
import React from 'react';

const ApproachSection: React.FC = () => {
  const pillars = [
    {
      title: "Discipline over shortcuts",
      description: "Structure replaces guesswork.Every system is built to remain understandable and reliable over time."
    },
    {
      title: "Systems over features",
      description: "Features change. Systems endure.We design with growth, complexity, and integration in mind."
    },
    {
      title: "Longevity over speed",
      description: "Fast delivery is meaningless without durability.We build assets meant to last."
    }
  ];

  return (
    <section id="approach" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.4em] text-brand-gray font-medium mb-4">OUR APPROACH</h2>
          <div className="h-0.5 w-12 bg-brand-blue" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="relative p-10 border border-white/5 bg-brand-charcoal/50 group hover:border-brand-blue/30 transition-all duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                 <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-6 text-white group-hover:text-brand-blue transition-colors">
                {pillar.title}
              </h3>
              <p className="text-brand-gray leading-relaxed text-base font-body">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
