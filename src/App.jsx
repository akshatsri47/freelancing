import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
import { useState, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showNavBarLogo, setShowNavBarLogo] = useState(false);
  const heroSectionRef = useRef(null);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });

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

  return (
    <main>
      <Loader />
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

          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
