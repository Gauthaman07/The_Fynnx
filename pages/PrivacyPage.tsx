
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { updateMetaTags } from '../utils/seo';

const PrivacyPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    updateMetaTags({
      title: 'Privacy Policy | The Fynnx',
      description: 'We respect your privacy and collect only the information necessary to communicate and deliver our services.',
      path: '/privacy',
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
            Privacy Policy
          </h1>
          <p className="text-brand-gray/50 text-sm mb-12">Last updated: 01-01-2026</p>

          <div className="space-y-10 text-brand-gray leading-relaxed font-body">
            <p>
              We respect your privacy and collect only the information necessary to communicate and deliver our services.
            </p>

            <section>
              <h2 className="text-white font-heading font-semibold text-lg mb-3">Information we collect</h2>
              <ul className="space-y-2 list-disc list-inside text-brand-gray/80">
                <li>Contact details you voluntarily provide (such as name, email, or phone number)</li>
                <li>Project-related information shared during inquiries or discussions</li>
                <li>Basic usage data to understand how this website is accessed and used</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white font-heading font-semibold text-lg mb-3">How we use this information</h2>
              <ul className="space-y-2 list-disc list-inside text-brand-gray/80">
                <li>To respond to inquiries and project discussions</li>
                <li>To communicate about services or potential engagements</li>
                <li>To maintain and improve this website</li>
              </ul>
              <p className="mt-4">We do not sell, rent, or trade personal information.</p>
            </section>

            <section>
              <h2 className="text-white font-heading font-semibold text-lg mb-3">Data storage</h2>
              <p>Information is stored securely and accessed only when required for legitimate business purposes.</p>
            </section>

            <section>
              <h2 className="text-white font-heading font-semibold text-lg mb-3">Third-party services</h2>
              <p>We may use trusted third-party services for hosting, analytics, and communication. These services follow standard privacy and security practices.</p>
            </section>

            <section>
              <h2 className="text-white font-heading font-semibold text-lg mb-3">Your rights</h2>
              <p>
                You may request access to, correction of, or deletion of your information by contacting us at:<br />
                <span className="text-white">gauthaman101@gmail.com</span>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
