import React, { useState, useEffect } from 'react';

const navigateTo = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPhilosophyPage, setIsPhilosophyPage] = useState(false);

  useEffect(() => {
    const checkPath = () => setIsPhilosophyPage(window.location.pathname === '/philosophy');
    checkPath();
    window.addEventListener('popstate', checkPath);
    return () => window.removeEventListener('popstate', checkPath);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-brand-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/');
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
          <span className="font-heading font-bold tracking-tight text-xl text-white">THE FYNNX</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm font-medium text-brand-gray">
          {isPhilosophyPage ? (
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/');
              }}
              className="hover:text-white transition-colors"
            >
              Home
            </a>
          ) : (
            <>
              <a href="#approach" className="hover:text-white transition-colors">Approach</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
            </>
          )}
          <a
            href="/philosophy"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/philosophy');
            }}
            className={`hover:text-white transition-colors ${isPhilosophyPage ? 'text-white' : ''}`}
          >
            Principles
          </a>
        </div>

        <a 
          href="https://api.whatsapp.com/send/?phone=917639530764&text=Hello%2C+I%E2%80%99d+like+to+discuss+a+software+project.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-6 py-2.5 bg-white text-black font-heading font-bold text-sm tracking-wide hover:bg-zinc-200 transition-colors rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-brand-black border-b border-white/5 p-6 flex flex-col gap-6 shadow-2xl">
          <a href="#approach" className="text-white font-medium" onClick={() => setIsMobileMenuOpen(false)}>Approach</a>
          <a href="#services" className="text-white font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="/philosophy" className="text-white font-medium" onClick={() => { setIsMobileMenuOpen(false); navigateTo('/philosophy'); }}>Principles</a>
          <a 
            href="https://api.whatsapp.com/send/?phone=917639530764&text=Hello%2C+I%E2%80%99d+like+to+discuss+a+software+project.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-3 bg-white text-black font-bold rounded-full text-center"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;