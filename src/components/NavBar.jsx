import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NavBar = ({ showLogo = false }) => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Handle hash navigation when landing on home page with hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # symbol
      // Wait for the page to load and ScrollSmoother to be ready
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element && window.scrollSmoother) {
          window.scrollSmoother.scrollTo(element, true, "top top");
          // Removed unnecessary ScrollTrigger.refresh() call
        }
      }, 500); // Give time for ScrollSmoother to initialize

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  const scrollToSection = (sectionId) => {
    // Check if we're on the home page
    if (location.pathname !== '/') {
      // If we're not on home page, navigate to home first with section hash
      navigate(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
      return;
    }

    // If we're already on home page, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      // Use ScrollSmoother for smooth scrolling
      if (window.scrollSmoother) {
        window.scrollSmoother.scrollTo(element, true, "top top");
      } else {
        // Fallback to regular smooth scroll
        element.scrollIntoView({ behavior: "smooth" });
      }
      
      // Removed unnecessary ScrollTrigger.refresh() call to improve performance
    }
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Simple mobile menu visibility
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        mobileMenuRef.current.style.display = 'block';
        // Small delay to ensure display is set before animating
        setTimeout(() => {
          mobileMenuRef.current.style.opacity = '1';
          mobileMenuRef.current.style.transform = 'translateY(0) scale(1)';
        }, 10);
      } else {
        mobileMenuRef.current.style.opacity = '0';
        mobileMenuRef.current.style.transform = 'translateY(-20px) scale(0.95)';
        setTimeout(() => {
          mobileMenuRef.current.style.display = 'none';
        }, 200);
      }
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-30 md:px-12 px-4 py-4 flex items-center justify-between bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">

      {/* Logo on the left */}
      <div className="flex-shrink-0">
        <img 
          ref={logoRef}
          src="/photos/clip-logo.svg" 
          alt="nav-logo" 
          className="md:w-52 w-44 h-auto"
          style={{ opacity: showLogo ? 1 : 0 }}
        />
      </div>

      {/* Center navigation - All nav items */}
      <div className="hidden md:flex flex-1 justify-center items-center space-x-2">
        <Link
          to="/"
          className="text-dark-gray text-xl font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-accent-red hover:text-white hover:scale-105 hover:shadow-lg"
        >
          Home
        </Link>
        <Link
          to="/teams"
          className="text-dark-gray text-xl font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-accent-red hover:text-white hover:scale-105 hover:shadow-lg"
        >
          Teams
        </Link>
        <Link
          to="/privacy-policy"
          className="text-dark-gray text-xl font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-accent-red hover:text-white hover:scale-105 hover:shadow-lg"
        >
          Privacy
        </Link>
        <Link
          to="/terms-and-conditions"
          className="text-dark-gray text-xl font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-accent-red hover:text-white hover:scale-105 hover:shadow-lg"
        >
          Terms
        </Link>
        <Link
          to="/accessibility"
          className="text-dark-gray text-xl font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-accent-red hover:text-white hover:scale-105 hover:shadow-lg"
        >
          Accessibility
        </Link>
        {/* <Link
          to="/refund-policy"
          className="text-dark-gray text-xl font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-accent-red hover:text-white hover:scale-105 hover:shadow-lg"
        >
          Refunds
        </Link> */}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden ml-auto">
        <button 
          onClick={toggleMobileMenu}
          className="text-dark-gray p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div 
        ref={mobileMenuRef}
        className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl z-50 transition-all duration-300 ease-out"
        style={{ 
          display: 'none',
          opacity: '0',
          transform: 'translateY(-20px) scale(0.95)'
        }}
      >
          <div className="px-6 py-8 space-y-3">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-dark-gray text-xl font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-accent-red hover:text-white hover:scale-105 hover:shadow-lg"
            >
              Home
            </Link>
            <Link
              to="/teams"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-dark-gray text-xl font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-accent-red hover:text-white hover:scale-105 hover:shadow-lg"
            >
              Teams
            </Link>
            <Link
              to="/privacy-policy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-dark-gray text-xl font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-accent-red hover:text-white hover:scale-105 hover:shadow-lg"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-dark-gray text-xl font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-accent-red hover:text-white hover:scale-105 hover:shadow-lg"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/accessibility"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-dark-gray text-xl font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-accent-red hover:text-white hover:scale-105 hover:shadow-lg"
            >
              Accessibility
            </Link>
            <Link
              to="/refund-policy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-dark-gray text-xl font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:bg-accent-red hover:text-white hover:scale-105 hover:shadow-lg"
            >
              Refund Policy
            </Link>
          </div>
        </div>
    </nav>
  );
};

export default NavBar;
