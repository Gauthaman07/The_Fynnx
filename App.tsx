
import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ApproachSection from './components/ApproachSection';
import ServicesSection from './components/ServicesSection';
import TechStackSection from './components/TechStackSection';
import CredibilitySection from './components/CredibilitySection';
import PhilosophySection from './components/PhilosophySection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import PhilosophyPage from './pages/PhilosophyPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Philosophy page
  if (currentPath === '/philosophy') {
    return <PhilosophyPage />;
  }

  // Privacy page
  if (currentPath === '/privacy') {
    return <PrivacyPage />;
  }

  // Terms page
  if (currentPath === '/terms') {
    return <TermsPage />;
  }

  // Home page
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
        <TechStackSection />
        <CredibilitySection />
        <PhilosophySection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
