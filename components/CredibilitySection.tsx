
import React from 'react';

const CredibilitySection: React.FC = () => {
  const principles = [
    { label: "01", title: "Architectural Rigor", text: "Systems are planned before code is written. Decisions are based on structure and logic, not guesswork." },
    { label: "02", title: "Debt Elimination", text: "Critical paths are designed to remain clean. Problems are addressed permanently, not deferred." },
    { label: "03", title: "Deep Documentation", text: "Every system is documented for longevity, ensuring ownership remains with your team." },
    { label: "04", title: "Validated Delivery", text: "Testing and validation are integral to every release, not an afterthought." }
  ];

  return (
    <section id="principles" className="py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-xs uppercase tracking-[0.4em] text-brand-gray font-medium mb-6">CREDIBILITY</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-white">Engineered for Reliability.</h3>
            
            <p className="text-xl text-brand-gray leading-relaxed mb-12 max-w-xl font-body">
            Our engineering culture is built on clarity, discipline,
and documentation. We design systems meant to be understood,
maintained, and relied upon over time.

            </p>

            <div className="space-y-4">
              {principles.map((p, i) => (
                <div key={i} className="group p-6 border border-white/5 bg-brand-charcoal/20 hover:border-brand-blue/30 transition-all cursor-default">
                  <div className="flex items-start gap-6">
                    <span className="text-brand-blue font-mono text-xs pt-1">{p.label}</span>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-brand-blue transition-colors">{p.title}</h4>
                      <p className="text-brand-gray text-sm leading-relaxed">{p.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            {/* Engineered Visualization Placeholder */}
            <div className="aspect-square bg-brand-charcoal border border-white/5 relative flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-grid opacity-10" />
               
               {/* Abstract Process Diagram SVG */}
               <svg width="300" height="300" viewBox="0 0 300 300" className="relative z-10 opacity-60">
                 <rect x="110" y="20" width="80" height="40" stroke="#0047FF" strokeWidth="2" fill="none" />
                 <path d="M150 60 V100" stroke="#0047FF" strokeWidth="1" strokeDasharray="4 4" />
                 
                 <rect x="50" y="100" width="80" height="40" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
                 <rect x="170" y="100" width="80" height="40" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
                 
                 <path d="M150 100 L90 100 V120 M150 100 L210 100 V120" stroke="white" strokeWidth="1" opacity="0.3" />
                 
                 <circle cx="90" cy="180" r="30" stroke="#0047FF" strokeWidth="1" fill="none" />
                 <circle cx="210" cy="180" r="30" stroke="#FF3B30" strokeWidth="1" fill="none" />
                 
                 <path d="M90 210 V250 H210 V210" stroke="white" strokeWidth="1" opacity="0.2" fill="none" />
                 
                 <text x="150" y="280" textAnchor="middle" fill="#888888" fontSize="10" fontFamily="monospace" letterSpacing="2">SYSTEM_FLOW_VERIFIED</text>
               </svg>

               <div className="absolute top-10 left-10 p-4 border-l border-brand-red/50">
                  <p className="text-[10px] font-mono text-brand-red uppercase tracking-widest font-bold">Critical Path Analysis</p>
                  <p className="text-[9px] font-mono text-brand-gray/50 uppercase">v0.9.4.82</p>
               </div>
            </div>
            
            <div className="mt-8 flex items-center justify-between px-2">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                <div className="w-2 h-2 rounded-full bg-brand-gray/20" />
                <div className="w-2 h-2 rounded-full bg-brand-gray/20" />
              </div>
              <span className="text-[10px] font-mono text-brand-gray tracking-widest uppercase">Methodology Visualization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
