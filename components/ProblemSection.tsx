
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      id: "01",
      text: "Systems that cannot scale beyond their initial use case",
      description: "Technical debt accumulates silently until the platform collapses under its own weight."
    },
    {
      id: "02",
      text: "Projects slowed by unclear ownership and fragmented execution",
      description: "When everyone owns a piece, no one owns the outcome. Velocity grinds to a halt."
    },
    {
      id: "03",
      text: "Products that require repeated rebuilds to support growth",
      description: "The 'MVP trap' that requires a complete rewrite just to add the next feature."
    }
  ];

  return (
    <section className="relative bg-brand-black py-24 px-4 md:px-8 lg:px-12 min-h-screen border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Sticky Header */}
        <div className="sticky top-24 z-10 mb-24 mix-blend-difference pointer-events-none">
          <h2 className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold pl-2 border-l-2 border-brand-red">
            When Software Becomes a Liability
          </h2>
        </div>

        <div className="flex flex-col gap-32 pb-32">
          {problems.map((problem, index) => (
            <Card key={index} {...problem} index={index} range={[index * 0.25, 1]} targetScale={1 - (problems.length - index) * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  id: string;
  text: string;
  description: string;
  index: number;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ id, text, description, index, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);

  return (
    <div ref={container} className="h-[60vh] flex items-start sticky top-32">
      <motion.div 
        style={{ scale, opacity, top: `calc(10vh + ${index * 25}px)` }} 
        className="relative w-full h-[500px] flex flex-col justify-between bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden group hover:border-brand-red/30 transition-colors duration-500"
      >
        {/* Decorative Gradient Blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/10 transition-colors duration-500" />
        
        {/* Header Row */}
        <div className="flex justify-between items-start relative z-10">
          <span className="font-mono text-brand-red text-xl tracking-widest">{id}</span>
          <div className="w-2 h-2 rounded-full bg-brand-red/50 shadow-[0_0_10px_rgba(255,50,50,0.5)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-6">
          <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-white max-w-4xl">
            {text}
          </h3>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light">
            {description}
          </p>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red/0 via-brand-red/50 to-brand-red/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </div>
  );
};

export default ProblemSection;
