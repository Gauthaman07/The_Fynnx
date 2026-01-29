
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { updateMetaTags } from '../utils/seo';

const TermsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    updateMetaTags({
      title: 'Terms of Use | The Fynnx',
      description: 'Terms of use for The Fynnx website and services.',
      path: '/terms',
      robots: 'noindex, follow'
    });
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-brand-blue selection:text-white">
      <div className="fixed inset-0 noise z-[9999]" />

      <Navigation />

      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className={`max-w-2xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="font-heading font-bold text-4xl md:text-5xl tracking-tight mb-4 text-white">
            Terms of Use
          </h1>
          <p className="text-brand-gray/50 text-sm mb-12">Last updated: 01-01-2026</p>

          <div className="space-y-10 text-brand-gray leading-relaxed font-body">
            <p>
              By accessing this website, you agree to the following terms.
            </p>

            <section>
              <h2 className="text-white font-heading font-semibold text-lg mb-3">Use of content</h2>
              <p>
                All content on this website is provided for informational purposes only. You may not copy, reproduce, or distribute any content without prior permission.
              </p>
            </section>

            <section>
              <h2 className="text-white font-heading font-semibold text-lg mb-3">No guarantee of services</h2>
              <p>
                Information on this website does not constitute a binding offer, contract, or guarantee of services.
              </p>
            </section>

            <section>
              <h2 className="text-white font-heading font-semibold text-lg mb-3">Engagement terms</h2>
              <p>
                Any software development or engineering engagement is governed by separate written agreements defining scope, timelines, and commercial terms.
              </p>
            </section>

            <section>
              <h2 className="text-white font-heading font-semibold text-lg mb-3">Limitation of liability</h2>
              <p>
                We are not responsible for any loss or damage arising from the use of this website or reliance on its content.
              </p>
            </section>

            <section>
              <h2 className="text-white font-heading font-semibold text-lg mb-3">Changes to these terms</h2>
              <p>
                We may update these terms at any time. Continued use of the website constitutes acceptance of any changes.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
