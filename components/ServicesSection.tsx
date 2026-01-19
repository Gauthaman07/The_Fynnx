
import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Custom Web Platforms",
      desc: "Complex, secure platforms designed to support real business logic, data integrity, and evolving operational needs."
    },
    {
      title: "Mobile Applications",
      desc: "Cross-platform applications engineered for performance, consistency, and long-term maintainability."
    },
    {
      title: "Internal Tooling",
      desc: "Custom dashboards and automation that reduce operational friction and help teams work with clarity and accuracy."
    },
    {
      title: "Architecture & Scalability",
      desc: "Backend systems and cloud infrastructure designed to withstand growth, traffic variation, and future expansion."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-[0.4em] text-brand-gray font-medium mb-6">WHAT WE BUILD</h2>
            <h3 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight">
              Precise solutions for <br />critical infrastructure.
            </h3>
          </div>
          <div className="hidden lg:block pb-2">
             <div className="w-12 h-[1px] bg-brand-blue mb-4" />
             <p className="text-xs font-mono text-brand-gray/60 uppercase tracking-widest">Capabilities Deck // Available Q3</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden">
          {services.map((service, index) => (
            <div key={index} className="bg-brand-black p-12 md:p-16 hover:bg-brand-charcoal transition-all duration-500 group relative">
              <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none overflow-hidden opacity-5">
                 <div className="absolute top-0 right-0 w-full h-full border-t border-r border-brand-blue" />
              </div>
              
              <span className="text-brand-blue font-mono text-xs mb-8 block font-medium opacity-50 group-hover:opacity-100 transition-opacity">
                SYSTEM_PROTO_0{index + 1}
              </span>
              
              <h4 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-white group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h4>
              
              <p className="text-brand-gray leading-relaxed text-lg font-body max-w-sm">
                {service.desc}
              </p>
              
              {/* <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="text-xs uppercase tracking-widest font-bold text-brand-blue flex items-center gap-2">
                  Learn More 
                  <span className="w-4 h-px bg-brand-blue" />
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
