
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { updateMetaTags } from '../utils/seo';

const principles = [
  {
    title: "Structure before speed",
    description: "Systems are designed deliberately before implementation begins."
  },
  {
    title: "Systems over features",
    description: "Architecture and coherence take precedence over short-term output."
  },
  {
    title: "AI as leverage, not replacement",
    description: "Automation supports judgment; responsibility remains human."
  },
  {
    title: "Ownership over dependency",
    description: "Clients should understand and control the systems they rely on."
  },
  {
    title: "Documentation as infrastructure",
    description: "If a system is not documented, it is not complete."
  },
  {
    title: "Longevity as a constraint",
    description: "Every decision is evaluated against future change, not present convenience."
  }
];

const PhilosophyPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visiblePrinciples, setVisiblePrinciples] = useState<number[]>([]);

  useEffect(() => {
    updateMetaTags({
      title: 'Engineering Principles | The Fynnx',
      description: 'Our work is guided by a small set of principles. They exist to ensure clarity, reliability, and long-term ownership.',
      path: '/philosophy'
    });

    setIsVisible(true);

    // Stagger principle appearances
    principles.forEach((_, index) => {
      setTimeout(() => {
        setVisiblePrinciples(prev => [...prev, index]);
      }, 400 + index * 150);
    });
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-brand-blue selection:text-white">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 noise z-[9999]" />

      <Navigation />

      <main>
        {/* Hero Section - Minimal */}
        <section className="relative min-h-[70vh] w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-grid pt-32">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black to-brand-charcoal/50 pointer-events-none" />

          <div className={`relative z-10 max-w-4xl transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8 text-white">
              Engineering Principles
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-brand-gray leading-relaxed font-body">
              Our work is guided by a small set of principles.<br />
              They exist to ensure clarity, reliability, and long-term ownership.
            </p>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-brand-black">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className={`py-16 md:py-20 border-b border-white/5 last:border-b-0 transition-all duration-700 ease-out transform ${
                    visiblePrinciples.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="text-brand-gray text-base md:text-lg font-body leading-relaxed max-w-2xl">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quiet Closing Statement */}
        <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-brand-charcoal/30 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 leading-snug tracking-tight">
              These principles are non-negotiable.<br />
              <span className="text-brand-gray/60">They shape every system we deliver.</span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PhilosophyPage;
