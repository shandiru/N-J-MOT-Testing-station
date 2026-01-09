import { Phone } from "lucide-react";
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Number = "+44 1744 371225";

  const scrollWithOffset = (el) => {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center min-w-0">
            <img
              src="/logo.png"
              alt="Broadway"
              className="rounded-full w-full h-14 lg:w-full lg:h-16 flex-shrink-0"
            />
          </div>

          {/* Desktop Navigation (LG+) */}
          <nav className="hidden lg:flex items-center gap-8 lg:gap-10">
            <HashLink smooth to="/#home" scroll={scrollWithOffset} className="text-gray-300 hover:text-white transition-colors">
              Home
            </HashLink>
            <HashLink smooth to="/#about" scroll={scrollWithOffset} className="text-gray-300 hover:text-white transition-colors">
              About
            </HashLink>
            <HashLink smooth to="/#services" scroll={scrollWithOffset} className="text-gray-300 hover:text-white transition-colors">
              Services
            </HashLink>

            <HashLink smooth to="/#testimonials" scroll={scrollWithOffset} className="text-gray-300 hover:text-white transition-colors">
              Testimonials
            </HashLink>

            <HashLink smooth to="/#contact" scroll={scrollWithOffset} className="text-gray-300 hover:text-white transition-colors">
              Contact
            </HashLink>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">

            {/* WhatsApp Desktop (LG+) */}
            <a
              href={`tel:${Number}`}
              rel="noopener noreferrer"
              aria-label="Call on WhatsApp"
              className="hidden lg:inline-flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-red-400 hover:text-white hover:bg-red-500/20 transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm font-semibold whitespace-nowrap">CallNow</span>
            </a>

            {/* WhatsApp Mobile/Tablet */}
            <a
              href={`tel:${Number}`}
              rel="noopener noreferrer"
              aria-label="Call on WhatsApp"
              className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-red-400 hover:text-white hover:bg-red-500/20 transition-colors"
            >
              <Phone size={22} />
            </a>


            {/* Mobile/Tablet Menu Button */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden ml-1 text-white inline-flex items-center justify-center p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <HashLink smooth to="/#home" scroll={scrollWithOffset} className="text-gray-300 hover:text-white transition-colors">
                Home
              </HashLink>

              <HashLink smooth to="/#about" scroll={scrollWithOffset} className="text-gray-300 hover:text-white transition-colors">
                About
              </HashLink>
              <HashLink smooth to="/#services" scroll={scrollWithOffset} className="text-gray-300 hover:text-white transition-colors">
                Services
              </HashLink>
              <HashLink smooth to="/#testimonials" scroll={scrollWithOffset} className="text-gray-300 hover:text-white transition-colors">
                Testimonials
              </HashLink>

              <HashLink smooth to="/#contact" scroll={scrollWithOffset} className="text-gray-300 hover:text-white transition-colors">
                Contact
              </HashLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
