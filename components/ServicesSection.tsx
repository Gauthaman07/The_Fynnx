
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
            <p className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight">
              Precise solutions for <br />critical infrastructure.
            </p>
          </div>
          <div className="hidden lg:block pb-2">
             <div className="w-12 h-[1px] bg-brand-blue mb-4" />
             <p className="text-xs font-mono text-brand-gray/60 uppercase tracking-widest">Capabilities Deck // Available Q3</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-brand-black/50 p-12 md:p-16 border border-white/5 group relative overflow-hidden transition-all duration-500 hover:border-brand-blue/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2 hover:bg-brand-blue/[0.02]">
              
              {/* Background Grid (Subtle) */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none overflow-hidden opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="absolute top-0 right-0 w-full h-full border-t border-r border-brand-blue" />
              </div>
              
              <span className="text-brand-blue font-mono text-xs mb-8 block font-medium opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition-all duration-300 w-fit">
                SYSTEM_PROTO_0{index + 1}
              </span>
              
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-white group-hover:text-brand-blue transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-brand-gray leading-relaxed text-lg font-body max-w-sm relative z-10">
                {service.desc}
              </p>

              {/* Bottom Right Tech Corner Accent */}
              <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
