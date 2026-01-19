
import React from 'react';

const navigateTo = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

const Navigation: React.FC = () => {
  const isPhilosophyPage = window.location.pathname === '/philosophy';

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
          <span className="font-heading font-bold tracking-tight text-xl">THE FYNNX</span>
        </a>
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
          href="https://wa.me/917639530764?text=Hello%2C%20I%E2%80%99d%20like%20to%20discuss%20a%20software%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-white/10 text-sm hover:border-brand-blue/50 hover:bg-brand-blue/5 transition-all"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
