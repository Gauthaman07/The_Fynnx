
import React from 'react';

const CredibilitySection: React.FC = () => {
  const principles = [
    { label: "01", title: "Architectural Rigor", text: "Systems are planned before code is written. Decisions are based on structure and logic, not guesswork." },
    { label: "02", title: "Debt Elimination", text: "Critical paths are designed to remain clean. Problems are addressed permanently, not deferred." },
    { label: "03", title: "Deep Documentation", text: "Every system is documented for longevity, ensuring ownership remains with your team." },
    { label: "04", title: "Validated Delivery", text: "Testing and validation are integral to every release, not an afterthought." }
  ];

  return (
    <section id="principles" className="py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 overflow-hidden">
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
                <div key={i} className="group p-6 border border-white/10 bg-white/[0.07] backdrop-blur-sm hover:bg-white/[0.12] hover:border-brand-blue/50 transition-all duration-300 cursor-default rounded-lg">
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

          <div className="lg:w-1/2 w-full flex justify-center perspective-1000">
             {/* Holographic Core Container */}
             <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
                
                {/* HUD Elements */}
                <div className="absolute top-0 left-0 p-4 border-l-2 border-brand-blue/50 z-10">
                   <p className="text-[10px] font-mono text-brand-blue uppercase tracking-widest font-bold animate-pulse">System Core Online</p>
                   <p className="text-[9px] font-mono text-brand-gray/50 uppercase">v2.0.4 - Stability 99.9%</p>
                </div>
                <div className="absolute bottom-0 right-0 p-2 border-b-2 border-r-2 border-brand-red/30 z-10">
                   <p className="text-[9px] font-mono text-brand-red uppercase tracking-widest">Live Monitoring</p>
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-brand-blue/5 blur-[80px] rounded-full" />

                {/* Rotating Cube Group */}
                <div className="relative w-32 h-32 md:w-48 md:h-48 transform-style-3d animate-[spin_10s_linear_infinite]">
                  {/* Cube Faces */}
                  <div className="absolute inset-0 border border-brand-blue/50 bg-brand-blue/10 translate-z-[64px] md:translate-z-[96px] shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                  <div className="absolute inset-0 border border-brand-blue/50 bg-brand-blue/10 -translate-z-[64px] md:-translate-z-[96px] shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                  <div className="absolute inset-0 border border-brand-blue/50 bg-brand-blue/10 rotate-y-90 translate-z-[64px] md:translate-z-[96px] shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                  <div className="absolute inset-0 border border-brand-blue/50 bg-brand-blue/10 rotate-y-90 -translate-z-[64px] md:-translate-z-[96px] shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                  <div className="absolute inset-0 border border-brand-blue/50 bg-brand-blue/10 rotate-x-90 translate-z-[64px] md:translate-z-[96px] shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                  <div className="absolute inset-0 border border-brand-blue/50 bg-brand-blue/10 rotate-x-90 -translate-z-[64px] md:-translate-z-[96px] shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                  
                  {/* Inner Solid Core */}
                  <div className="absolute inset-8 border border-white/50 bg-white/5 translate-z-0 shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
                </div>

                {/* Gyroscopic Rings */}
                <div className="absolute w-56 h-56 md:w-72 md:h-72 border border-brand-blue/30 rounded-full animate-[spin_7s_linear_infinite_reverse]" style={{ transform: 'rotateX(60deg)' }} />
                <div className="absolute w-64 h-64 md:w-80 md:h-80 border border-dashed border-brand-red/30 rounded-full animate-[spin_15s_linear_infinite]" style={{ transform: 'rotateY(60deg)' }} />
                
             </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .translate-z-\\[64px\\] { transform: translateZ(64px); }
        .-translate-z-\\[64px\\] { transform: translateZ(-64px); }
        .rotate-y-90 { transform: rotateY(90deg); }
        .rotate-x-90 { transform: rotateX(90deg); }
        /* MD Breakpoint Z translations */
        @media (min-width: 768px) {
          .md\\:translate-z-\\[96px\\] { transform: translateZ(96px); }
          .md\\:-translate-z-\\[96px\\] { transform: translateZ(-96px); }
        }
      `}</style>
    </section>
  );
};

export default CredibilitySection;
