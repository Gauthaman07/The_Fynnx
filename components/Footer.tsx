
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 md:px-12 lg:px-24 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
              <span className="font-heading font-bold tracking-tight text-2xl">THE FYNNX</span>
            </div>
            <p className="text-brand-gray max-w-xs font-body leading-relaxed">
              Premium software engineering studio dedicated to building disciplined, scalable systems.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold uppercase tracking-wider text-[10px]">Studio</span>
              <a href="#" className="text-brand-gray hover:text-white transition-colors">Our Approach</a>
              <a href="#" className="text-brand-gray hover:text-white transition-colors">Case Studies</a>
              <a href="#" className="text-brand-gray hover:text-white transition-colors">Open Roles</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold uppercase tracking-wider text-[10px]">Connect</span>
              <a href="#" className="text-brand-gray hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-brand-gray hover:text-white transition-colors">Twitter (X)</a>
              <a href="#" className="text-brand-gray hover:text-white transition-colors">GitHub</a>
            </div>
            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <span className="text-white font-bold uppercase tracking-wider text-[10px]">Office</span>
              <address className="text-brand-gray not-italic leading-relaxed">
                Reforged in<br />
                Austin, Texas
              </address>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-brand-gray/40 font-mono tracking-tighter">
            © {currentYear} THE FYNNX LLC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-brand-gray/60">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
