import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const NavBar = ({ showLogo = false }) => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    console.log('Toggle clicked, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Simple mobile menu visibility (no GSAP for now to debug)
  useEffect(() => {
    console.log('Mobile menu state changed:', isMobileMenuOpen);
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        console.log('Opening mobile menu');
        mobileMenuRef.current.style.display = 'block';
        // Small delay to ensure display is set before animating
        setTimeout(() => {
          mobileMenuRef.current.style.opacity = '1';
          mobileMenuRef.current.style.transform = 'translateY(0) scale(1)';
        }, 10);
      } else {
        console.log('Closing mobile menu');
        mobileMenuRef.current.style.opacity = '0';
        mobileMenuRef.current.style.transform = 'translateY(-20px) scale(0.95)';
        setTimeout(() => {
          mobileMenuRef.current.style.display = 'none';
        }, 200);
      }
    } else {
      console.log('Mobile menu ref not found');
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
<nav ref={navRef} className="fixed top-0 left-0 right-0 z-30 md:px-9 px-3 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-white/20">

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
      <div className="hidden md:flex flex-1 justify-center items-start space-x-8 -mt-2">
        <button
          onClick={() => scrollToSection("home")}
          className="text-gray-800 text-lg font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("events")}
          className="text-gray-800 text-lg font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
        >
          Events
        </button>
        <Link
          to="/privacy-policy"
          className="text-gray-800 text-lg font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
        >
          Privacy
        </Link>
        <Link
          to="/terms-and-conditions"
          className="text-gray-800 text-lg font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
        >
          Terms
        </Link>
        <Link
          to="/accessibility"
          className="text-gray-800 text-lg font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
        >
          Accessibility
        </Link>
        <Link
          to="/refund-policy"
          className="text-gray-800 text-lg font-semibold px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
        >
          Refunds
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden ml-auto">
        <button 
          onClick={toggleMobileMenu}
          className="text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isMobileMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div 
        ref={mobileMenuRef}
        className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg z-50 transition-all duration-300 ease-out"
        style={{ 
          display: 'none',
          opacity: '0',
          transform: 'translateY(-20px) scale(0.95)'
        }}
      >
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-gray-800 text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="block w-full text-left text-gray-800 text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
            >
              Events
            </button>
            <Link
              to="/privacy-policy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-gray-800 text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-gray-800 text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/accessibility"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-gray-800 text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
            >
              Accessibility
            </Link>
            <Link
              to="/refund-policy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-gray-800 text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
            >
              Refund Policy
            </Link>
          </div>
        </div>
    </nav>
  );
};

export default NavBar;
