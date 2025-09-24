import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./components/Home";
import Teams from "./pages/Teams";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Accessibility from "./pages/Accessibility";
import RefundPolicy from "./pages/RefundPolicy";

const AppContent = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  // Get loader text based on current route
  const getLoaderText = (pathname) => {
    switch (pathname) {
      case "/":
        return { text: "#One Last Violation", highlightWord: "Violation" };
      case "/teams":
        return { text: "#Meet The Team", highlightWord: "Team" };
      case "/privacy-policy":
        return { text: "#Privacy Matters", highlightWord: "Privacy" };
      case "/terms-and-conditions":
        return { text: "#Terms & Conditions", highlightWord: "Terms" };
      case "/accessibility":
        return { text: "#Accessibility First", highlightWord: "Accessibility" };
      case "/refund-policy":
        return { text: "#Refund Policy", highlightWord: "Refund" };
      default:
        return { text: "#One Last Violation", highlightWord: "Violation" };
    }
  };

  useEffect(() => {
    // Show loader when route changes
    if (location.pathname !== currentPath) {
      setIsLoading(true);
      setCurrentPath(location.pathname);
      
      // Hide loader after animation completes
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3700); // Match the loader animation duration (3.7s)

      return () => clearTimeout(timer);
    } else {
      // Initial load
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3700);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, currentPath]);

  const loaderProps = getLoaderText(location.pathname);

  return (
    <div className="App">
      {isLoading && <Loader text={loaderProps.text} highlightWord={loaderProps.highlightWord} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;