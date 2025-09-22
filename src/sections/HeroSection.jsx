import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const logoRef = useRef(null);
  const subtitleRef = useRef(null);
  const heroContainerRef = useRef(null);

  const openTallyForm = () => {
    window.open('https://tally.so/r/3189Wg', '_blank');
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    // Initial hero animations (keep your existing timeline)
    const tl = gsap.timeline({ delay: 3 });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .fromTo(
        logoRef.current,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );

    // Hero logo animation to top-left position
    ScrollTrigger.create({
      trigger: heroContainerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        
        if (logoRef.current) {
          // Calculate final positions for smooth transition
          const targetX = isMobile ? -35 : -45;
          const targetY = isMobile ? -40 : -45;
          const targetScale = isMobile ? 0.25 : 0.18;
          
          // Animate logo to top-left
          gsap.to(logoRef.current, {
            x: progress * targetX + "%",
            y: progress * targetY + "%",
            scale: 1 - (progress * (1 - targetScale)),
            duration: 0.1,
            ease: "none"
          });
        }
        
        // Fade out other hero elements as user scrolls
        gsap.to(".hero-text-scroll, .hero-subtitle h1", {
          opacity: 1 - (progress * 0.8),
          duration: 0.1,
          ease: "none"
        });

        gsap.to(subtitleRef.current, {
          opacity: 1 - (progress * 0.9),
          y: progress * -30,
          duration: 0.1,
          ease: "none"
        });

        gsap.to(".hero-button", {
          opacity: 1 - (progress * 0.9),
          y: progress * 30,
          duration: 0.1,
          ease: "none"
        });
      },
      onComplete: () => {
        // Hide hero logo when animation completes
        if (logoRef.current) {
          gsap.to(logoRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    });

  }, [isMobile, isTablet]);

  // Cleanup ScrollTrigger on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="home" className="bg-main-bg">
      <div ref={heroContainerRef} className="hero-container relative">
        {/* Video will now play on all devices including mobile */}
        <video
          src="/videos/car_drifting.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <img
              ref={logoRef}
              src="/photos/clip-logo.svg"
              alt="Cars and Coffee"
              className="w-[300px] md:w-[400px] h-[400px] mx-auto opacity-0 relative z-10"
              style={{
                transformOrigin: "center center" // Ensures scaling happens from center
              }}
            />
          </div>

          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1> Dehradun</h1>
            </div>
          </div>

          <h2 ref={subtitleRef} className="opacity-0">
            Live life in the fast lane: Shatter boredom, embrace nostalgia, and
            fuel your passion with every rev.
          </h2>

          <div className="hero-button" onClick={openTallyForm}>
            <p>Register Now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;