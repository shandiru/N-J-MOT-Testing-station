import React, { useState, useRef } from "react";
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function NandJServices() {
  const services = [
    {
      key: "mot",
      title: "MOT Testing (Class 4)",
      desc: "Certified MOT testing for cars and LCVs, ensuring safety and compliance.",
      whyTitle: "Why Choose MOT Testing?",
      whyDesc:
        "MOT testing is a legal requirement to ensure your vehicle meets road safety and environmental standards.",
      benefitsTitle: "Benefits of MOT Testing",
      benefits: [
        "Ensures vehicle roadworthiness",
        "Identifies safety issues early",
        "Meets legal requirements",
        "Improves vehicle safety",
        "Peace of mind",
      ],
      signsTitle: "Signs You Need an MOT Test",
      signs: [
        "MOT expiry approaching",
        "Dashboard warning lights",
        "Unusual exhaust smoke",
        "Driving safety concerns",
        "Vehicle age limit reached",
      ],
    },
    {
      key: "service",
      title: "Servicing & Repairs",
      desc: "Complete vehicle servicing and mechanical repairs.",
      whyTitle: "Why Choose Professional Servicing?",
      whyDesc:
        "Regular servicing improves reliability, safety, and long-term vehicle performance.",
      benefitsTitle: "Benefits of Regular Servicing",
      benefits: [
        "Improves reliability",
        "Extends vehicle life",
        "Maintains efficiency",
        "Reduces repair costs",
        "Manufacturer compliance",
      ],
      signsTitle: "Signs Your Vehicle Needs Servicing",
      signs: [
        "Warning lights",
        "Unusual noises",
        "Poor fuel economy",
        "Handling issues",
        "Service interval reached",
      ],
    },
    {
      key: "tuning",
      title: "Engine Tuning",
      desc: "Performance tuning for power and efficiency.",
      whyTitle: "Why Invest in Engine Tuning?",
      whyDesc:
        "Optimised tuning improves power delivery, responsiveness, and fuel efficiency.",
      benefitsTitle: "Benefits of Engine Tuning",
      benefits: [
        "Increased power",
        "Better fuel economy",
        "Smoother acceleration",
        "Improved response",
        "Custom setup",
      ],
      signsTitle: "Signs You Need Engine Tuning",
      signs: [
        "Sluggish acceleration",
        "Reduced efficiency",
        "Unresponsive engine",
        "Performance upgrades",
        "Need more power",
      ],
    },
    {
      key: "wetbelt",
      title: "Wet Belt Services",
      desc: "Inspection and replacement of wet timing belts.",
      whyTitle: "Why Are Wet Belts Important?",
      whyDesc:
        "Worn wet belts can cause severe engine damage if not replaced in time.",
      benefitsTitle: "Benefits of Wet Belt Service",
      benefits: [
        "Prevents engine failure",
        "Protects components",
        "Improves reliability",
        "Meets service intervals",
        "Long-term protection",
      ],
      signsTitle: "Signs You Need a Wet Belt Service",
      signs: [
        "Service interval reached",
        "Oil contamination",
        "Engine noise",
        "Warning lights",
        "Loss of power",
      ],
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B5ED7]">
            Professional Services
          </h2>
          <p className="max-w-3xl mx-auto text-[#94A3B8]">
            Expert vehicle servicing, diagnostics, repairs, and maintenance.
          </p>
        </div>

        {/* Service Slider */}
        <div className="relative mb-10">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1 -translate-y-1/2 z-10
                       hover:bg-[#0B5ED7] bg-[#D70C09] text-white p-2 rounded-full
                       md:hidden"
          >
            <FaChevronLeft />
          </button>

          {/* Services */}
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4
                       overflow-x-auto md:overflow-visible 
                       snap-x snap-mandatory py-10
                       scrollbar-hide"
          >
            {services.map((s) => (
              <div
                key={s.key}
                onClick={() => setActiveService(s)}
                className="min-w-[260px] md:min-w-0 snap-center
                           cursor-pointer rounded-2xl border px-5 py-6 text-center
                           transition hover:scale-105"
                style={{
                  borderColor: "#1E293B",
                  backgroundColor:
                    activeService.key === s.key ? "#0B5ED7" : "#0B0E18",
                }}
              >
                <h3
                  className="font-bold mb-2"
                  style={{
                    color:
                      activeService.key === s.key ? "#FFFFFF" : "#0B5ED7",
                  }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-gray-200">{s.desc}</p>

                {activeService.key === s.key && (
                  <div className="mt-3 text-xs font-semibold text-white">
                    VIEWING
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1 -translate-y-1/2 z-10
                       hover:bg-[#0B5ED7] bg-[#D70C09] text-white p-2 rounded-full
                       md:hidden"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* WHY & BENEFITS */}
          <div>
            <h3 className="text-3xl font-bold mb-3 text-[#0B5ED7]">
              {activeService.whyTitle}
            </h3>
            <p className="mb-6 text-[#94A3B8]">
              {activeService.whyDesc}
            </p>

            <h4 className="text-xl font-bold mb-4 text-[#D70C09]">
              {activeService.benefitsTitle}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeService.benefits.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <FaCheckCircle className="mt-1 text-[#0B5ED7]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SIGNS */}
          <div className="rounded-xl border p-6 md:p-8 bg-[#0B0E18] border-[#1E293B]">
            <h4 className="text-2xl font-bold mb-4 text-[#D70C09]">
              {activeService.signsTitle}
            </h4>
            <ul className="space-y-3 text-[#94A3B8]">
              {activeService.signs.map((sign, i) => (
                <li key={i}>• {sign}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
