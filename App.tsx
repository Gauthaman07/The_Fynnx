
import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ApproachSection from './components/ApproachSection';
import ServicesSection from './components/ServicesSection';
import CredibilitySection from './components/CredibilitySection';
import PhilosophySection from './components/PhilosophySection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-brand-blue selection:text-white">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 noise z-[9999]" />
      
      <Navigation />
      
      <main>
        <HeroSection />
        <ProblemSection />
        <ApproachSection />
        <ServicesSection />
        <CredibilitySection />
        <PhilosophySection />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
