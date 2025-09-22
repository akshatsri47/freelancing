import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import NavBar from "../components/NavBar";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TermsAndConditions = () => {
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
            Terms & Conditions
          </h1>
          <p className="text-dark-brown/70 font-paragraph text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-4 sm:mb-6 sm:mb-8 bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Acceptance of Terms</h2>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed">
              By accessing and using the Cars and Coffee Dehradun website and services, you accept and 
              agree to be bound by the terms and provision of this agreement. If you do not agree to 
              abide by the above, please do not use this service.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-4 sm:mb-6 sm:mb-8 bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Event Registration</h2>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Event registration is subject to availability and may be limited. By registering for an event, you agree to:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed space-y-2 ml-4 sm:ml-6">
              <li>• Provide accurate and complete information</li>
              <li>• Follow all event rules and regulations</li>
              <li>• Respect other participants and their vehicles</li>
              <li>• Comply with local traffic laws and safety requirements</li>
            </ul>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-4 sm:mb-6 sm:mb-8 bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Code of Conduct</h2>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              All participants must adhere to our code of conduct:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed space-y-2 ml-4 sm:ml-6">
              <li>• No reckless driving or dangerous behavior</li>
              <li>• No excessive noise or revving</li>
              <li>• Respect for private property and venue rules</li>
              <li>• No alcohol consumption during events</li>
              <li>• Maintain a respectful and inclusive environment</li>
            </ul>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-4 sm:mb-6 sm:mb-8 bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Liability and Safety</h2>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Participation in our events is at your own risk. Cars and Coffee Dehradun is not liable for:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed space-y-2 ml-4 sm:ml-6">
              <li>• Vehicle damage or theft</li>
              <li>• Personal injury or accidents</li>
              <li>• Property damage</li>
              <li>• Any other losses or damages</li>
            </ul>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed mt-4">
              All participants must have valid insurance and driver's licenses.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-4 sm:mb-6 sm:mb-8 bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Event Cancellation</h2>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed">
              Events may be cancelled or postponed due to weather conditions, safety concerns, or other 
              circumstances beyond our control. We will provide reasonable notice when possible and 
              may offer alternative dates or refunds as appropriate.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-4 sm:mb-6 sm:mb-8 bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Intellectual Property</h2>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed">
              All content on this website, including text, graphics, logos, and images, is the property 
              of Cars and Coffee Dehradun and is protected by copyright laws. You may not reproduce, 
              distribute, or use any content without written permission.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-4 sm:mb-6 sm:mb-8 bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h2 className="text-dark-brown text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Contact Information</h2>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed">
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="text-dark-brown/80 font-paragraph text-sm sm:text-base md:text-lg leading-relaxed mt-4">
              Email: legal@carsandcoffeedehradun.com<br />
              Phone: +91-XXXXXXXXXX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;


