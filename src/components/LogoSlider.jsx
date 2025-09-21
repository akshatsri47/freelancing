import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LogoSlider = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Logo data - using available assets and some placeholder brands
  const logos = [
    { src: "/logos/Img1.jpg", alt: "Brand 1" },
    { src: "/logos/Img2.png", alt: "Brand 2" },
    { src: "/logos/Img3.png", alt: "Brand 3" },
    { src: "/neecnclogo.svg", alt: "Brand 4" },
    { src: "/logos/Img5.png", alt: "Brand 5" },
    { src: "/logos/Img6.jpg", alt: "Brand 6" },
    // Duplicate logos for seamless infinite scroll
    { src: "/logos/Img1.jpg", alt: "Brand 1" },
    { src: "/logos/Img2.jpg", alt: "Brand 2" },
    { src: "/logos/Img3.jpg", alt: "Brand 3" },
    { src: "/logos/Img4.jpg", alt: "Brand 4" },
    { src: "/logos/Img5.png", alt: "Brand 5" },
    { src: "/logos/Img6.jpg", alt: "Brand 6" },
  ];

  useGSAP(() => {
    if (!sliderRef.current || !sectionRef.current) return;

    const slider = sliderRef.current;
    const section = sectionRef.current;
    const logoItems = slider.querySelectorAll(".logo-item");
    
    // Calculate total width for infinite scroll
    const logoWidth = isMobile ? 200 : 280;
    const totalWidth = logoItems.length * logoWidth;
    const halfWidth = totalWidth / 2;

    // Initial setup - hide logos
    gsap.set(logoItems, { opacity: 0, y: 30 });

    // Section entrance animation
    const sectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    sectionTl
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(logoItems, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.4");

    // Create infinite scroll animation
    const scrollTl = gsap.timeline({ repeat: -1, ease: "none" });
    
    scrollTl.to(slider, {
      x: -halfWidth,
      duration: 25,
      ease: "none"
    });

    // Add hover pause effect
    const pauseAnimation = () => scrollTl.pause();
    const resumeAnimation = () => scrollTl.resume();

    slider.addEventListener("mouseenter", pauseAnimation);
    slider.addEventListener("mouseleave", resumeAnimation);

    // Cleanup
    return () => {
      slider.removeEventListener("mouseenter", pauseAnimation);
      slider.removeEventListener("mouseleave", resumeAnimation);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="logo-slider-section bg-milk py-20 overflow-hidden">
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-dark-brown text-5xl md:text-6xl font-bold uppercase tracking-tight mb-8 opacity-0"
            style={{ transform: "translateY(30px)" }}
          >
            Our Partners
          </h2>
          <p className="text-dark-brown/70 font-paragraph text-2xl max-w-3xl mx-auto">
            Trusted by leading brands and organizations
          </p>
        </div>

        {/* Logo Slider */}
        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex items-center gap-16 md:gap-20 will-change-transform"
            style={{ width: "max-content" }}
          >
            {logos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="logo-item flex-shrink-0 flex items-center justify-center"
                style={{ 
                  width: isMobile ? "200px" : "280px",
                  height: isMobile ? "140px" : "180px"
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  style={{
                    filter: "grayscale(100%) brightness(0.7)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-6">
          <div className="flex gap-4">
            <div className="w-4 h-4 bg-dark-brown/30 rounded-full"></div>
            <div className="w-4 h-4 bg-dark-brown/50 rounded-full"></div>
            <div className="w-4 h-4 bg-dark-brown/70 rounded-full"></div>
            <div className="w-4 h-4 bg-dark-brown/50 rounded-full"></div>
            <div className="w-4 h-4 bg-dark-brown/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
