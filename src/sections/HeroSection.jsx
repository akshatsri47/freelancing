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
  const videoRef = useRef(null);
  const openLumaRegistration = () => {
    window.open('https://luma.com/x0ikvz3i', '_blank');
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

    // Hero logo animation to top-left position - optimized for performance
    ScrollTrigger.create({
      trigger: heroContainerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.2, // Optimized scrub value
      anticipatePin: 1, // Better pinning performance
      onUpdate: (self) => {
        const progress = self.progress;
        
        if (logoRef.current) {
          // Calculate final positions for smooth transition
          const targetX = isMobile ? -35 : -45;
          const targetY = isMobile ? -40 : -45;
          const targetScale = isMobile ? 0.25 : 0.18;
          
          // Use transform3d for better performance
          logoRef.current.style.transform = `translate3d(${progress * targetX}%, ${progress * targetY}%, 0) scale(${1 - (progress * (1 - targetScale))})`;
        }
        
        // Batch DOM updates for better performance
        requestAnimationFrame(() => {
          const textElements = document.querySelectorAll(".hero-text-scroll, .hero-subtitle h1");
          textElements.forEach(el => {
            el.style.opacity = 1 - (progress * 0.8);
          });

          if (subtitleRef.current) {
            subtitleRef.current.style.opacity = 1 - (progress * 0.9);
            subtitleRef.current.style.transform = `translate3d(0, ${progress * -30}px, 0)`;
          }

          const buttonElements = document.querySelectorAll(".hero-button");
          buttonElements.forEach(el => {
            el.style.opacity = 1 - (progress * 0.9);
            el.style.transform = `translate3d(0, ${progress * 30}px, 0)`;
          });
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

  // Ensure video plays on mobile
  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Video autoplay failed:', error);
          // Fallback: try to play on user interaction
          const playOnInteraction = () => {
            videoRef.current?.play();
            document.removeEventListener('touchstart', playOnInteraction);
            document.removeEventListener('click', playOnInteraction);
          };
          document.addEventListener('touchstart', playOnInteraction);
          document.addEventListener('click', playOnInteraction);
        }
      }
    };

    // Small delay to ensure video is loaded
    const timer = setTimeout(playVideo, 100);
    return () => clearTimeout(timer);
  }, []);

  // Cleanup ScrollTrigger on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="home" className="bg-main-bg">
      <div ref={heroContainerRef} className="hero-container relative">
        {/* Optimized video loading with mobile considerations */}
        <video
          ref={videoRef}
          src="/videos/car_drifting.mp4"
          autoPlay
          muted
          playsInline
          loop
          preload={isMobile ? "metadata" : "auto"}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "transform" }}
        />

        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <img
              ref={logoRef}
              src="/photos/clip-logo.svg"
              alt="Cars and Coffee"
              className="w-[300px] md:w-[400px] h-[400px] mx-auto opacity-0 relative z-10"
              loading="eager"
              style={{
                transformOrigin: "center center", // Ensures scaling happens from center
                willChange: "transform"
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
              <h1> Live Now</h1>
            </div>
          </div>

          <h2 ref={subtitleRef} className="opacity-0 text-white">
            Live life in the fast lane: Shatter boredom, embrace nostalgia, and
            fuel your passion with every rev.
          </h2>

          <div className="hero-button" onClick={openLumaRegistration}>
            <p>Register Now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
