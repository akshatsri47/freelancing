import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import NavBar from "../components/NavBar";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Accessibility = () => {
  const contentRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    if (!contentRef.current || !titleRef.current) return;

    // Initial setup
    gsap.set([titleRef.current, ".accessibility-section"], { opacity: 0, y: 50 });

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
    .to(".accessibility-section", {
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
            Accessibility
          </h1>
          <p className="text-dark-brown/70 font-paragraph text-xl max-w-3xl mx-auto">
            Committed to making our website and events accessible to everyone
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="accessibility-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed">
              Cars and Coffee Dehradun is committed to ensuring digital accessibility for people with 
              disabilities. We are continually improving the user experience for everyone and applying 
              the relevant accessibility standards to make our website and events more inclusive.
            </p>
          </div>

          <div className="accessibility-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Web Accessibility Standards</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mb-4">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
              Our website includes:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-lg leading-relaxed space-y-2 ml-6">
              <li>• Alternative text for images and visual content</li>
              <li>• Keyboard navigation support</li>
              <li>• High contrast color schemes</li>
              <li>• Scalable text and responsive design</li>
              <li>• Screen reader compatibility</li>
              <li>• Clear and consistent navigation</li>
            </ul>
          </div>

          <div className="accessibility-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Event Accessibility</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mb-4">
              We strive to make our events accessible to all participants:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-lg leading-relaxed space-y-2 ml-6">
              <li>• Wheelchair-accessible venues when possible</li>
              <li>• Clear signage and directions</li>
              <li>• Accessible parking spaces</li>
              <li>• Assistance for participants with mobility needs</li>
              <li>• Clear communication about event accessibility</li>
            </ul>
          </div>

          <div className="accessibility-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Assistive Technologies</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mb-4">
              Our website is designed to work with various assistive technologies:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-lg leading-relaxed space-y-2 ml-6">
              <li>• Screen readers (NVDA, JAWS, VoiceOver)</li>
              <li>• Voice recognition software</li>
              <li>• Keyboard-only navigation</li>
              <li>• High contrast mode support</li>
              <li>• Text-to-speech applications</li>
            </ul>
          </div>

          <div className="accessibility-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Feedback and Support</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mb-4">
              We welcome your feedback on the accessibility of our website and events. If you encounter 
              any accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-lg leading-relaxed space-y-2 ml-6">
              <li>• Email: accessibility@carsandcoffeedehradun.com</li>
              <li>• Phone: +91-XXXXXXXXXX</li>
              <li>• Response time: We aim to respond within 48 hours</li>
            </ul>
          </div>

          <div className="accessibility-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Ongoing Improvements</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed">
              We regularly review and update our website and event practices to improve accessibility. 
              This includes testing with assistive technologies, gathering user feedback, and staying 
              current with accessibility standards and best practices.
            </p>
          </div>

          <div className="accessibility-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Alternative Formats</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed">
              If you need information from our website in an alternative format, such as large print, 
              audio, or braille, please contact us and we will work with you to provide the information 
              in a format that meets your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;


