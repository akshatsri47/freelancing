import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import NavBar from "../components/NavBar";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const RefundPolicy = () => {
  const contentRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    if (!contentRef.current || !titleRef.current) return;

    // Initial setup
    gsap.set([titleRef.current, ".refund-section"], { opacity: 0, y: 50 });

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
    .to(".refund-section", {
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
            Refund Policy
          </h1>
          <p className="text-dark-brown/70 font-paragraph text-xl max-w-3xl mx-auto">
            Our refund and cancellation policy for events and services
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="refund-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Event Registration Refunds</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mb-4">
              We understand that plans can change. Our refund policy for event registrations is as follows:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-lg leading-relaxed space-y-2 ml-6">
              <li>• <strong>7+ days before event:</strong> Full refund minus processing fees</li>
              <li>• <strong>3-6 days before event:</strong> 75% refund minus processing fees</li>
              <li>• <strong>1-2 days before event:</strong> 50% refund minus processing fees</li>
              <li>• <strong>Day of event or no-show:</strong> No refund</li>
            </ul>
          </div>

          <div className="refund-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Event Cancellation by Us</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mb-4">
              If we cancel an event due to circumstances beyond our control, you will receive:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-lg leading-relaxed space-y-2 ml-6">
              <li>• Full refund of registration fees</li>
              <li>• Option to transfer registration to a future event</li>
              <li>• Credit for future events (valid for 6 months)</li>
            </ul>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mt-4">
              We will notify you as soon as possible if an event is cancelled and provide clear 
              instructions for refund processing.
            </p>
          </div>

          <div className="refund-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Weather-Related Cancellations</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mb-4">
              For outdoor events, we may cancel due to severe weather conditions. In such cases:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-lg leading-relaxed space-y-2 ml-6">
              <li>• Full refund will be provided</li>
              <li>• Alternative indoor venue may be arranged</li>
              <li>• Event may be rescheduled to a later date</li>
            </ul>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mt-4">
              Weather-related decisions will be made 24 hours before the event when possible.
            </p>
          </div>

          <div className="refund-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Processing Fees</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed">
              All refunds are subject to processing fees charged by our payment processors. These fees 
              typically range from 2-3% of the original transaction amount and are non-refundable. 
              Processing fees will be deducted from your refund amount.
            </p>
          </div>

          <div className="refund-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Refund Processing Time</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mb-4">
              Once your refund request is approved:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-lg leading-relaxed space-y-2 ml-6">
              <li>• Credit card refunds: 5-10 business days</li>
              <li>• Bank transfer refunds: 3-5 business days</li>
              <li>• Digital wallet refunds: 1-3 business days</li>
            </ul>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mt-4">
              Processing time may vary depending on your financial institution.
            </p>
          </div>

          <div className="refund-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">How to Request a Refund</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mb-4">
              To request a refund, please contact us with the following information:
            </p>
            <ul className="text-dark-brown/80 font-paragraph text-lg leading-relaxed space-y-2 ml-6">
              <li>• Your full name and contact information</li>
              <li>• Event name and date</li>
              <li>• Registration confirmation number</li>
              <li>• Reason for cancellation</li>
              <li>• Preferred refund method</li>
            </ul>
          </div>

          <div className="refund-section bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h2 className="text-dark-brown text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed">
              For refund requests or questions about this policy, please contact us at:
            </p>
            <p className="text-dark-brown/80 font-paragraph text-lg leading-relaxed mt-4">
              Email: refunds@carsandcoffeedehradun.com<br />
              Phone: +91-XXXXXXXXXX<br />
              Response time: We aim to respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
