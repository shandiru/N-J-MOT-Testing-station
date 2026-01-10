// File: WheelTyreHero.jsx
'use client'
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function WheelTyreHero() {
  const handleQuoteClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <section className="py-16 pt-30" style={{ background: "#020617", color: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">

          {/* Badge */}
          <span
            className="inline-flex items-center justify-center rounded-md px-3 py-1 text-xs font-medium mb-4"
            style={{
              backgroundColor: "#0B5ED7",  // blue badge
              color: "#FFFFFF",
            }}
          >
            Professional Wheel Services
          </span>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-black mb-6" style={{ color: "#FFFFFF" }}>
            Professional Services
          </h1>

          {/* Sub Copy */}
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#94A3B8" }}>
            Expert vehicle servicing, repairs, diagnostics, and maintenance solutions for all makes and models.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* Primary Button */}
            <a href="tel:+447746479840" className="inline-block">
              <button
                className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all duration-300"
                style={{
                  backgroundColor: "#0B5ED7",  // blue
                  color: "#FFFFFF",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(11,94,215,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaPhoneAlt className="h-5 w-5" />
                Book Service: 07746479840
              </button>
            </a>

            {/* Outline Button */}
            <button
              onClick={handleQuoteClick}
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold border transition-all duration-300"
              style={{
                borderColor: "#D70C09",   // red outline
                color: "#D70C09",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#D70C09";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(215,12,9,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#D70C09";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
