import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import TermsConditions from "./components/Term";
import Home from "./page/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import GDPRBanner from "./components/GDPRBanner";
import Service from "./page/Service";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS globally

function App() {
  // Initialize AOS globally
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out",
      once: false, // whether animation should happen only once
      mirror: true, // animate elements out while scrolling past them
    });

    // Optional: refresh AOS on route change (React Router)
    const handleRouteChange = () => AOS.refresh();
    window.addEventListener("load", handleRouteChange);
    return () => window.removeEventListener("load", handleRouteChange);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRBanner />
    </Router>
  );
}

export default App;
