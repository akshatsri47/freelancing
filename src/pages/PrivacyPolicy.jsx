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
    if (!contentRef.current || !titleRef.current) return;

    // Initial setup
    gsap.set([titleRef.current, ".policy-section"], { opacity: 0, y: 50 });

    // Entrance animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(".policy-section", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.4");

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-milk">
      <NavBar showLogo={true} />
      
      <div ref={contentRef} className="container mx-auto px-5 py-20 pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            ref={titleRef}
            className="text-dark-brown text-5xl md:text-6xl font-bold uppercase tracking-tight mb-8 opacity-0"
          >
            Privacy Policy
          </h1>
          <p className="text-dark-brown/70 font-paragraph text-xl max-w-3xl mx-auto">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="policy-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Information We Collect</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you register for events, 
              subscribe to our newsletter, or contact us. This may include your name, email address, 
              phone number, and any other information you choose to provide.
            </p>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed">
              We also automatically collect certain information about your device and usage patterns 
              when you visit our website, including your IP address, browser type, and pages visited.
            </p>
          </div>

          <div className="policy-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">How We Use Your Information</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-lg leading-relaxed space-y-2 ml-6">
              <li>• Provide and maintain our services</li>
              <li>• Process event registrations and communications</li>
              <li>• Send you newsletters and updates about our events</li>
              <li>• Improve our website and user experience</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </div>

          <div className="policy-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Information Sharing</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share your information 
              with trusted service providers who assist us in operating our website and conducting our business.
            </p>
          </div>

          <div className="policy-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Data Security</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="policy-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Your Rights</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-lg leading-relaxed space-y-2 ml-6">
              <li>• Access and update your personal information</li>
              <li>• Request deletion of your personal information</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Withdraw consent at any time</li>
            </ul>
          </div>

          <div className="policy-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mt-4">
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
