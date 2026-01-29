import React, { useEffect, useState, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { updateMetaTags } from '../utils/seo';
import { motion, useInView } from 'framer-motion';

const principles = [
  {
    id: "01",
    title: "Structure before speed",
    description: "Systems are designed deliberately before implementation begins. We don't write a single line of code until the architecture is proven on paper.",
    visual: (
      <svg className="w-full h-full opacity-50" viewBox="0 0 100 100">
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
        <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
        <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
        <rect x="45" y="45" width="10" height="10" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "02",
    title: "Systems over features",
    description: "Architecture and coherence take precedence over short-term output. A feature that breaks the system is not a feature; it's a bug.",
    visual: (
      <svg className="w-full h-full opacity-50" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="80" cy="50" r="5" fill="currentColor" />
        <circle cx="20" cy="50" r="5" fill="currentColor" />
        <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    id: "03",
    title: "AI as leverage, not replacement",
    description: "Automation supports judgment; responsibility remains human. We use AI to accelerate execution, not to bypass understanding.",
    visual: (
      <svg className="w-full h-full opacity-50" viewBox="0 0 100 100">
        <path d="M20 80 L50 20 L80 80" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="20" r="4" fill="currentColor" />
        <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    id: "04",
    title: "Ownership over dependency",
    description: "Clients should understand and control the systems they rely on. We build with standard tools and clear documentation to prevent vendor lock-in.",
    visual: (
      <svg className="w-full h-full opacity-50" viewBox="0 0 100 100">
        <rect x="30" y="30" width="40" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M40 50 L50 60 L60 40" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: "05",
    title: "Documentation as infrastructure",
    description: "If a system is not documented, it is not complete. Our code is self-documenting, and our architecture is mapped out for future engineers.",
    visual: (
      <svg className="w-full h-full opacity-50" viewBox="0 0 100 100">
        <rect x="25" y="20" width="50" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
        <line x1="35" y1="35" x2="65" y2="35" stroke="currentColor" strokeWidth="1" />
        <line x1="35" y1="45" x2="65" y2="45" stroke="currentColor" strokeWidth="1" />
        <line x1="35" y1="55" x2="55" y2="55" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: "06",
    title: "Longevity as a constraint",
    description: "Every decision is evaluated against future change, not present convenience. We build for the 5-year horizon, not just the next sprint.",
    visual: (
      <svg className="w-full h-full opacity-50" viewBox="0 0 100 100">
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
        <line x1="90" y1="50" x2="85" y2="45" stroke="currentColor" strokeWidth="1" />
        <line x1="90" y1="50" x2="85" y2="55" stroke="currentColor" strokeWidth="1" />
        <line x1="30" y1="45" x2="30" y2="55" stroke="currentColor" strokeWidth="1" />
        <line x1="70" y1="45" x2="70" y2="55" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  }
];

const PhilosophyPage: React.FC = () => {
  const [activeId, setActiveId] = useState("01");

  useEffect(() => {
    updateMetaTags({
      title: 'Engineering Principles | The Fynnx',
      description: 'Our work is guided by a small set of principles. They exist to ensure clarity, reliability, and long-term ownership.',
      path: '/philosophy'
    });
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-brand-blue selection:text-white bg-brand-black">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 noise z-[9999]" />

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-grid pt-32 pb-20 border-b border-white/5">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black to-brand-charcoal/50 pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8 text-white">
              Engineering Principles
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-brand-gray leading-relaxed font-body">
              The non-negotiable rules that guide every line of code we write.
            </p>
          </div>
        </section>

        {/* Sticky Content Section */}
        <section className="relative px-6 md:px-12 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Sticky Left Column (Desktop Only) */}
            <div className="hidden lg:block w-1/2 h-fit sticky top-32">
              <div className="relative overflow-hidden">
                <motion.div 
                   key={activeId}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5 }}
                >
                  <span className="text-brand-blue font-mono text-xl mb-4 block">Principle {activeId}</span>
                  <h2 className="font-heading font-bold text-6xl text-white leading-tight">
                    {principles.find(p => p.id === activeId)?.title}
                  </h2>
                </motion.div>
                
                {/* Decorative Line */}
                <div className="w-24 h-1 bg-brand-blue mt-8" />
              </div>
            </div>

            {/* Scrollable Right Column */}
            <div className="w-full lg:w-1/2 flex flex-col gap-32 lg:pb-64">
              {principles.map((principle) => (
                <PrincipleCard 
                  key={principle.id} 
                  principle={principle} 
                  onInView={() => setActiveId(principle.id)} 
                />
              ))}
            </div>

          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-brand-charcoal/30 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-heading text-2xl md:text-4xl font-semibold text-white/90 leading-snug tracking-tight mb-8">
              "We don't just build software.<br />
              <span className="text-brand-gray">We build assets."</span>
            </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://api.whatsapp.com/send/?phone=917639530764&text=Hello%2C+I%E2%80%99d+like+to+discuss+a+software+project.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 py-6 bg-white text-black font-heading font-bold text-lg tracking-wide transition-all hover:bg-zinc-200 rounded-full"
              >
                Start a Project
              </a>
              <a href="/#services" className="text-brand-gray hover:text-white transition-colors underline underline-offset-8 font-medium">
                Explore our services
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const PrincipleCard: React.FC<{ principle: any; onInView: () => void }> = ({ principle, onInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView();
    }
  }, [isInView, onInView]);

  return (
    <div ref={ref} className="group scroll-mt-32">
       {/* Mobile Title (Visible only on small screens) */}
       <div className="lg:hidden mb-6">
          <span className="text-brand-blue font-mono text-sm mb-2 block">{principle.id}</span>
          <h3 className="font-heading font-bold text-3xl text-white">{principle.title}</h3>
       </div>

       {/* Card Content */}
       <div className={`p-8 md:p-12 border transition-all duration-500 rounded-3xl ${isInView ? 'bg-white/10 border-brand-blue/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]' : 'bg-white/5 border-white/10 opacity-50'}`}>
          
          {/* Visual Diagram */}
          <div className="w-16 h-16 mb-8 text-white/80 group-hover:text-brand-blue transition-colors">
             {principle.visual}
          </div>

          <p className="text-lg md:text-xl text-brand-gray leading-relaxed font-body">
            {principle.description}
          </p>
       </div>
    </div>
  );
};

export default PhilosophyPage;