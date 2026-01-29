import React from 'react';
import { motion } from 'framer-motion';

const TechStackSection: React.FC = () => {
  const elements = [
    { symbol: "Re", name: "React", number: "18", category: "frontend", desc: "UI Library" },
    { symbol: "Ts", name: "TypeScript", number: "5.0", category: "lang", desc: "Type Safety" },
    { symbol: "Nx", name: "Next.js", number: "14", category: "frontend", desc: "Framework" },
    { symbol: "Tw", name: "Tailwind", number: "3.4", category: "frontend", desc: "Styling" },
    { symbol: "No", name: "Node.js", number: "20", category: "backend", desc: "Runtime" },
    { symbol: "Py", name: "Python", number: "3.12", category: "backend", desc: "Language" },
    { symbol: "Pg", name: "PostgreSQL", number: "16", category: "db", desc: "Database" },
    { symbol: "Rd", name: "Redis", number: "7.2", category: "db", desc: "Cache" },
    { symbol: "Aw", name: "AWS", number: "06", category: "infra", desc: "Cloud" },
    { symbol: "Dk", name: "Docker", number: "24", category: "infra", desc: "Container" },
    { symbol: "Fl", name: "Flutter", number: "3.19", category: "mobile", desc: "Mobile" },
    { symbol: "Tf", name: "Terraform", number: "1.7", category: "infra", desc: "IaC" },
  ];

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'frontend': return 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5';
      case 'backend': return 'text-green-400 border-green-400/30 bg-green-400/5';
      case 'db': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5';
      case 'infra': return 'text-purple-400 border-purple-400/30 bg-purple-400/5';
      case 'mobile': return 'text-blue-400 border-blue-400/30 bg-blue-400/5';
      default: return 'text-gray-400 border-gray-400/30 bg-gray-400/5';
    }
  };

  const getGlowColor = (cat: string) => {
    switch (cat) {
      case 'frontend': return 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]';
      case 'backend': return 'group-hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]';
      case 'db': return 'group-hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]';
      case 'infra': return 'group-hover:shadow-[0_0_30px_rgba(192,132,252,0.2)]';
      case 'mobile': return 'group-hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]';
      default: return 'group-hover:shadow-[0_0_30px_rgba(156,163,175,0.2)]';
    }
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-xs uppercase tracking-[0.4em] text-brand-gray font-medium mb-6">THE FUNDAMENTALS</h2>
          <p className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
           First Principles, Not Frameworks
          </p>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg">
            "Great software isn't magic; it's the right reaction between powerful elements. We combine the best technologies to create
     systems that are greater than the sum of their parts
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {elements.map((el, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`aspect-square p-4 border ${getCategoryColor(el.category).split(' ')[1]} ${getCategoryColor(el.category).split(' ')[2]} backdrop-blur-sm flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:border-opacity-100 ${getGlowColor(el.category)} relative overflow-hidden`}
            >
              {/* Atomic Number */}
              <div className="flex justify-between items-start opacity-50 group-hover:opacity-100 transition-opacity">
                <span className={`text-xs font-mono ${getCategoryColor(el.category).split(' ')[0]}`}>{el.number}</span>
              </div>

              {/* Symbol */}
              <div className={`font-heading font-bold text-3xl md:text-4xl text-center ${getCategoryColor(el.category).split(' ')[0]} group-hover:scale-110 transition-transform duration-300`}>
                {el.symbol}
              </div>

              {/* Name & Desc */}
              <div className="text-center">
                <div className="font-bold text-white text-sm tracking-wide">{el.name}</div>
                <div className="text-[10px] text-brand-gray uppercase tracking-wider mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{el.desc}</div>
              </div>
              
              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center gap-8 text-[10px] uppercase tracking-widest text-brand-gray font-mono">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-400/50" /> Frontend</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400/50" /> Backend</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-400/50" /> Data</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400/50" /> Infra</div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
