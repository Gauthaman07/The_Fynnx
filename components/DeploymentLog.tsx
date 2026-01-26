import React from 'react';

const DeploymentLog: React.FC = () => {
  const logs = [
    { type: "OPTIMIZED", message: "Fintech Core Latency", result: "< 12ms Response" },
    { type: "SCALED", message: "Healthcare Data Pipeline", result: "1M+ Daily Records" },
    { type: "DEPLOYED", message: "E-Commerce Architecture", result: "99.99% Uptime" },
    { type: "REFACTORED", message: "Legacy Monolith Migration", result: "Zero Downtime" },
    { type: "SECURED", message: "Enterprise Auth System", result: "SOC2 Compliant" },
    { type: "AUDITED", message: "SaaS Infrastructure Cost", result: "Reduced by 40%" },
  ];

  // Duplicate logs for seamless infinite scroll
  const allLogs = [...logs, ...logs, ...logs, ...logs];

  return (
    <section className="py-12 bg-brand-black border-t border-b border-white/5 overflow-hidden relative">
      {/* Label */}
      <div className="absolute top-0 left-0 h-full bg-brand-black z-10 px-6 md:px-12 flex items-center border-r border-white/5 shadow-[10px_0_20px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-3">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-xs font-mono font-bold text-brand-gray tracking-widest uppercase">Deployment Log</span>
        </div>
      </div>

      {/* Ticker Container */}
      <div className="flex w-full">
        <div className="flex animate-marquee whitespace-nowrap gap-12 pl-48 md:pl-64">
          {allLogs.map((log, index) => (
            <div key={index} className="flex items-center gap-4 text-sm font-mono opacity-60 hover:opacity-100 transition-opacity cursor-default">
              <span className={`
                ${log.type === 'OPTIMIZED' ? 'text-cyan-400' : ''}
                ${log.type === 'SCALED' ? 'text-purple-400' : ''}
                ${log.type === 'DEPLOYED' ? 'text-green-400' : ''}
                ${log.type === 'REFACTORED' ? 'text-yellow-400' : ''}
                ${log.type === 'SECURED' ? 'text-red-400' : ''}
                ${log.type === 'AUDITED' ? 'text-blue-400' : ''}
                font-bold
              `}>[{log.type}]</span>
              <span className="text-white">{log.message}</span>
              <span className="text-brand-gray/50">::</span>
              <span className="text-white font-bold">{log.result}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
            animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default DeploymentLog;
