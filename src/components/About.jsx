"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSectionModern() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative py-24 bg-gradient-to-b from-[#020617] to-[#020617] overflow-hidden"
      id="about"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* TITLE */}
        <div className="max-w-3xl mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase">
            About{" "}
            <span style={{ color: "var(--primary)" }}>
              N&J MOT Testing station 
            </span>
          </h2>

          <div
            className="w-24 h-[3px] mt-4"
            style={{ backgroundColor: "var(--accent)" }}
          />

          <p className="mt-6 text-lg text-[#CBD5E1] leading-relaxed">
            We are a trusted MOT and vehicle service centre delivering
            professional workmanship, honest advice, and reliable results.
            From MOT testing to advanced diagnostics, we keep your vehicle
            safe and road legal.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          {/* LEFT – FEATURES */}
          <div className="space-y-6" data-aos="fade-right">
            {[
              {
                title: "Certified MOT Testing",
                desc: "MOT Class 4, 5 & 7 testing using modern approved equipment.",
              },
              {
                title: "Advanced Diagnostics",
                desc: "Accurate fault finding, engine tuning & wet belt services.",
              },
              {
                title: "Customer-First Service",
                desc: "Clear communication, honest advice, and fast turnaround.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-md bg-white/5 border border-white/10 hover:border-[var(--accent)] transition"
              >
                <h4 className="text-white font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[#94A3B8]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT – IMAGE (FIXED WIDTH) */}
          <div
            className="relative w-full max-w-[520px] mx-auto lg:mx-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {/* IMAGE */}
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/pexels-photo-17045319-2880w.webp"
                alt="MOT inspection"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>

            {/* FLOATING STAT – LEFT */}
            <div className="absolute bottom-6 left-6 bg-[#0F172A] border border-white/10 rounded-md p-5 shadow-xl z-20">
              <p className="text-2xl font-bold text-white">
                10+ Years
              </p>
              <p className="text-xs text-[#94A3B8]">
                Industry Experience
              </p>
            </div>

            {/* FLOATING STAT – RIGHT */}
            <div className="absolute top-6 right-6 bg-[#0F172A] border border-white/10 rounded-md p-5 shadow-xl z-20">
              <p className="text-2xl font-bold text-white">
                1000+
              </p>
              <p className="text-xs text-[#94A3B8]">
                Vehicles Tested
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
