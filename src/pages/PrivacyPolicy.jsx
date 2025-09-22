import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import NavBar from "../components/NavBar";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  const contentRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    // Simple fade-in animation for the entire page
    const tl = gsap.timeline({ delay: 0.1 });
    
    tl.fromTo(contentRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-milk">
      <NavBar showLogo={true} />
      
      <div ref={contentRef} className="container mx-auto px-4 sm:px-5 py-12 sm:py-16 md:py-20 pt-24 sm:pt-28 md:pt-32">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-dark-brown text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-6 sm:mb-8">
            Privacy Policy
          </h1>
          <p className="text-dark-brown/70 font-paragraph text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8">
            <h2 className="text-dark-brown text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Information We Collect</h2>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you register for events, 
              subscribe to our newsletter, or contact us. This may include your name, email address, 
              phone number, and any other information you choose to provide.
            </p>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed">
              We also automatically collect certain information about your device and usage patterns 
              when you visit our website, including your IP address, browser type, and pages visited.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8">
            <h2 className="text-dark-brown text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">How We Use Your Information</h2>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed space-y-2 ml-4 sm:ml-6">
              <li>• Provide and maintain our services</li>
              <li>• Process event registrations and communications</li>
              <li>• Send you newsletters and updates about our events</li>
              <li>• Improve our website and user experience</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8">
            <h2 className="text-dark-brown text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Information Sharing</h2>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share your information 
              with trusted service providers who assist us in operating our website and conducting our business.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8">
            <h2 className="text-dark-brown text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Data Security</h2>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8">
            <h2 className="text-dark-brown text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Your Rights</h2>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed space-y-2 ml-4 sm:ml-6">
              <li>• Access and update your personal information</li>
              <li>• Request deletion of your personal information</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Withdraw consent at any time</li>
            </ul>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-dark-brown text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Contact Us</h2>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed mt-4">
              Email: privacy@carsandcoffeedehradun.com<br />
              Phone: +91-XXXXXXXXXX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;


