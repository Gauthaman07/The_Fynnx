
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ApproachSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to line width/height
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  const pillars = [
    {
      id: "01",
      title: "Discipline over shortcuts",
      description: "Structure replaces guesswork. Every system is built to remain understandable and reliable over time."
    },
    {
      id: "02",
      title: "Systems over features",
      description: "Features change. Systems endure. We design with growth, complexity, and integration in mind."
    },
    {
      id: "03",
      title: "Longevity over speed",
      description: "Fast delivery is meaningless without durability. We build assets meant to last."
    }
  ];

  return (
    <section ref={containerRef} id="approach" className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-900/50 relative overflow-hidden">
       {/* Background Grid Accent */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-brand-blue font-bold mb-4"
          >
            OUR APPROACH
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            className="h-1 bg-brand-blue mx-auto md:mx-0" 
          />
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop: Horizontal, Mobile: Vertical) */}
          {/* Desktop Line Track */}
          <div className="hidden md:block absolute top-[80px] left-0 w-full h-0.5 bg-white/10" />
          {/* Desktop Line Fill */}
          <motion.div 
            style={{ scaleX: lineProgress, transformOrigin: "left" }}
            className="hidden md:block absolute top-[80px] left-0 w-full h-0.5 bg-brand-blue shadow-[0_0_15px_rgba(59,130,246,0.5)] z-0" 
          />

          {/* Mobile Line Track */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-white/10" />
          {/* Mobile Line Fill */}
          <motion.div 
            style={{ scaleY: lineProgress, transformOrigin: "top" }}
            className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-brand-blue shadow-[0_0_15px_rgba(59,130,246,0.5)] z-0" 
          />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
            {pillars.map((pillar, index) => (
              <PipelineCard key={index} {...pillar} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PipelineCard: React.FC<{ title: string; description: string; id: string; index: number }> = ({ title, description, id, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="group relative pl-24 md:pl-0 md:pt-32 h-full flex flex-col"
    >
      {/* Node Point on the Line */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 md:top-[72px] w-4 h-4 bg-neutral-900 border-2 border-brand-blue rounded-full z-20 group-hover:scale-150 group-hover:bg-brand-blue transition-all duration-300 shadow-[0_0_0_4px_rgba(0,0,0,1)]">
        <div className="absolute inset-0 bg-brand-blue rounded-full animate-ping opacity-0 group-hover:opacity-100" />
      </div>

      {/* Card Content */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
        <div className="text-4xl font-mono font-bold text-white/10 absolute top-4 right-6 pointer-events-none group-hover:text-white/20 transition-colors">
          {id}
        </div>
        <h3 className="font-heading text-xl font-bold mb-4 text-white group-hover:text-brand-blue transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 leading-relaxed text-sm flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ApproachSection;
