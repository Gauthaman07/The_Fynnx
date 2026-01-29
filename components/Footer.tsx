
import React from 'react';

const navigateTo = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
            <span className="font-heading font-bold tracking-tight text-xl">THE FYNNX</span>
          </div>
          <p className="text-xs text-brand-gray/50 font-mono">
            © {currentYear} THE FYNNX. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 md:gap-8 text-sm text-brand-gray">
          <a
            href="/privacy"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/privacy');
            }}
            className="hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a
            href="/terms"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/terms');
            }}
            className="hover:text-white transition-colors"
          >
            Terms
          </a>
          <a
            href="/philosophy"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/philosophy');
            }}
            className="hover:text-white transition-colors"
          >
            Engineering Principles
          </a>
          <a
            href="https://wa.me/917639530764?text=Hello%2C%20I%E2%80%99d%20like%20to%20discuss%20a%20software%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
