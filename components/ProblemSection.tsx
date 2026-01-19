
import React from 'react';

const ProblemSection: React.FC = () => {
  const problems = [
    "Systems that cannot scale beyond their initial use case",
    "Projects slowed by unclear ownership and fragmented execution",
    "Products that require repeated rebuilds to support growth"
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-brand-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.4em] text-brand-red font-medium mb-16">
          WHEN SOFTWARE BECOMES A LIABILITY
        </h2>

        <div className="flex flex-col gap-12">
          {problems.map((problem, index) => (
            <div key={index} className="group flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 transition-colors hover:border-white/30">
              <span className="text-brand-gray text-sm font-mono mb-4 md:mb-0">0{index + 1}</span>
              <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white/90 group-hover:text-white transition-colors max-w-3xl">
                {problem}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
