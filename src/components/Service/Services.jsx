import React from "react";
import {
  FaCarSide,
  FaTools,
  FaTachometerAlt,
  FaSnowflake,
  FaCogs,
  FaRegCheckCircle,
} from "react-icons/fa";

// N&J MOT Centre color palette
const palette = {
  primary: "#0B5ED7",      // blue
  secondary: "#D70C09",    // red
  muted: "#94A3B8",        // gray text
  cardBg: "#0B0E18",       // dark card background
  cardBorder: "#1E293B",   // card border
  checkIcon: "#D70C09",    // red check icon
};

export default function WheelAlignmentServices() {
  const services = [
    {
      title: "MOT Testing (Class 4, 5 & 7)",
      desc: "Certified MOT testing for cars and LCVs, ensuring safety and compliance.",
      icon: <FaCarSide className="h-5 w-5" />,
      iconBg: palette.primary,
      points: [
        "Ensures vehicle roadworthiness",
        "Identifies safety issues early",
        "Meets legal requirements",
        "Improves overall vehicle safety",
        "Peace of mind for drivers",
      ],
    },
    {
      title: "Servicing & Repairs",
      desc: "Full vehicle servicing including brakes, suspension, and general maintenance.",
      icon: <FaTools className="h-5 w-5" />,
      iconBg: palette.secondary,
      points: [
        "Improves reliability and safety",
        "Extends component lifespan",
        "Maintains manufacturer schedules",
        "Improves fuel efficiency",
        "Reduces risk of major repairs",
      ],
    },
    {
      title: "Engine Tuning",
      desc: "Professional tuning and performance optimization for better efficiency and power.",
      icon: <FaTachometerAlt className="h-5 w-5" />,
      iconBg: palette.primary,
      points: [
        "Increased engine power and torque",
        "Improved fuel efficiency",
        "Smoother throttle response",
        "Enhanced driving experience",
        "Tailored performance for your driving style",
      ],
    },
    {
      title: "Wet Belt Services",
      desc: "Inspection and replacement of wet belts to ensure smooth engine operation.",
      icon: <FaCogs className="h-5 w-5" />,
      iconBg: palette.primary,
      points: [
        "Prevents catastrophic engine failure",
        "Maintains smooth engine operation",
        "Protects critical engine components",
        "Meets manufacturer service requirements",
        "Improves long-term engine reliability",
      ],
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#020617" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: palette.primary }}
          >
            Professional Vehicle Services
          </h2>
          <p
            className="text-lg font-body max-w-2xl mx-auto"
            style={{ color: palette.muted }}
          >
            N&J MOT Centre offers MOT testing, servicing, engine tuning, air con re-gas, and wet belt inspections for all vehicles. Trust our certified technicians for reliable and professional service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="
                flex flex-col gap-6 rounded-xl py-6
                bg-[var(--card-bg)] border
                transition-all duration-300 hover:shadow-[0_8px_24px_rgba(11,94,215,0.35)]
              "
              style={{ backgroundColor: palette.cardBg, borderColor: palette.cardBorder }}
            >
              <div className="grid auto-rows-min items-start gap-1.5 px-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: s.iconBg, color: "#FFFFFF" }}
                  >
                    {s.icon}
                  </div>
                  <div
                    className="text-xl font-bold"
                    style={{ color: palette.primary }}
                  >
                    {s.title}
                  </div>
                </div>
                <div className="text-base" style={{ color: palette.muted }}>
                  {s.desc}
                </div>
              </div>

              <div className="px-6">
                <ul className="space-y-2">
                  {s.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-center text-sm"
                      style={{ color: palette.primary + "cc" }} // semi-transparent
                    >
                      <FaRegCheckCircle
                        className="h-4 w-4 mr-2 flex-shrink-0"
                        style={{ color: palette.checkIcon }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
