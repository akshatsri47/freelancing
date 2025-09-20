import { useEffect, useRef } from "react";
import gsap from "gsap";

const NavBar = ({ showLogo = false }) => {
  const navRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // Animate navbar slide down on mount
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    if (showLogo && logoRef.current) {
      // Animate logo appearance when showLogo becomes true
      gsap.fromTo(logoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [showLogo]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
<nav ref={navRef} className="fixed top-0 left-0 right-0 z-30 md:px-9 px-3 flex items-center justify-between">

      {/* Logo on the left */}
      <div className="flex-shrink-0">
        <img 
          ref={logoRef}
          src="/photos/clip-logo.svg" 
          alt="nav-logo" 
          className="md:w-48 w-40"
          style={{ opacity: showLogo ? 1 : 0 }}
        />
      </div>

      {/* Center navigation - All nav items */}
      <div className="hidden md:flex flex-1 justify-center items-start space-x-10 -mt-2">
        <button
          onClick={() => scrollToSection("home")}
          className="text-white text-xl font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("events")}
          className="text-white text-xl font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
        >
          Events
        </button>
        <button
          onClick={() => scrollToSection("timeline")}
          className="text-white text-xl font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
        >
          Timeline
        </button>
        <button
          onClick={() => scrollToSection("privacy")}
          className="text-white text-xl font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
        >
          Privacy Policy
        </button>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden ml-auto">
        <button className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
