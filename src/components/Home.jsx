import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import NavBar from "./NavBar";
import HeroSection from "../sections/HeroSection";
import MessageSection from "../sections/MessageSection";
import FlavorSection from "../sections/FlavorSection";
import BenefitSection from "../sections/BenefitSection";
import TestimonialSection from "../sections/TestimonialSection";
import FooterSection from "../sections/FooterSection";
import LogoSlider from "./LogoSlider";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showNavBarLogo, setShowNavBarLogo] = useState(false);
  const heroSectionRef = useRef(null);
  const location = useLocation();

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1.2, // Further reduced for better performance
      effects: true,
      normalizeScroll: true, // Better cross-browser compatibility
      ignoreMobileResize: true, // Prevent mobile resize issues
      smoothTouch: 0.1, // Optimize touch scrolling
      overscroll: false, // Prevent overscroll issues
    });
    
    // Store the smoother instance globally for navigation access
    window.scrollSmoother = smoother;

    // Show NavBar when scrolling past hero section
    ScrollTrigger.create({
      trigger: heroSectionRef.current,
      start: "bottom top",
      onEnter: () => {
        setShowNavBar(true);
        // Delay logo appearance to sync with hero logo transition
        setTimeout(() => {
          setShowNavBarLogo(true);
        }, 200);
      },
      onLeaveBack: () => {
        setShowNavBarLogo(false);
        setShowNavBar(false);
      }
    });
  });

  // Handle hash navigation when Home component loads
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # symbol
      // Wait for ScrollSmoother to be ready
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element && window.scrollSmoother) {
          window.scrollSmoother.scrollTo(element, true, "top top");
          // Removed unnecessary ScrollTrigger.refresh() call
        }
      }, 1000); // Give more time for all components to load

      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <main>
      {showNavBar && <NavBar showLogo={showNavBarLogo} />}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div ref={heroSectionRef}>
            <HeroSection />
          </div>
          <MessageSection />
          <FlavorSection />
          {/* <NutritionSection /> */}
         
          <div>
            <BenefitSection />            
            <TestimonialSection />
          </div>

          <LogoSlider />
          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default Home;
