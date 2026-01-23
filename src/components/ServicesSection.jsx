import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DesignCards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Engine Tuning",
      description: "Professional engine tuning and performance optimization to enhance efficiency and power.",
      colSpan: "md:col-span-1"
    },
    {
      id: 2,
      title: "Servicing & Repairs",
      description: "Full vehicle servicing and repairs including brakes, suspension, and maintenance.",
      colSpan: "md:col-span-2"
    },
    {
      id: 3,
      title: "MOT Testing (Class 4, 5 & 7)",
      description: "Certified MOT testing for cars and LCVs, ensuring safety and compliance.",
      colSpan: "md:col-span-2"
    },
    {
      id: 5,
      title: "Wet Belt Services",
      description: "Inspection and replacement of wet belts to ensure smooth engine operation.",
      colSpan: "md:col-span-1"
    },
  ];

  return (
    <div className="relative py-24 bg-gradient-to-b from-[#020617] to-[#020617] overflow-hidden"
      id="services"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/10 blur-3xl rounded-full" />
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-white sm:mb-6">
          Transforming Imagination<br />
          into <span className="text-[#0B5ED7]">Reality</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
          Unlock the full potential of your creativity with our AI-powered design assistant.
          Explore new dimensions of design, from futuristic visuals to timeless craftsmanship,
          and witness how AI can turn your wildest ideas into stunning realities.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
        {cards.map((card) => (
          <div
            key={card.id}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`
              relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10
              transition-all duration-500 ease-out
              cursor-pointer overflow-hidden
              bg-white/5 border border-white/10
              ${hoveredCard === card.id ? 'bg-[#084298] scale-[1.02] shadow-2xl shadow-[#084298]/30' : 'scale-100'}
              ${card.colSpan}
              group
            `}
            style={{
              minHeight: '320px'
            }}
          >
            {/* Arrow Icon */}
            <Link 
              to="/service"
              className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20">
              <div className={`
                w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                bg-white/5 backdrop-blur-sm
                flex items-center justify-center
                transition-all duration-300
                ${hoveredCard === card.id ? 'bg-white/5 scale-110 rotate-45' : 'scale-100 rotate-0'}
              `}>
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </Link>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full pr-12 sm:pr-16 lg:pr-20">
              <div>
                {/* Description - Shows on hover */}
                <div className={`
                  transition-all duration-500 ease-out
                  ${hoveredCard === card.id
                    ? 'opacity-100 translate-y-0 mb-6 sm:mb-8'
                    : 'opacity-0 -translate-y-4 mb-0 h-0 overflow-hidden'
                  }
                `}>
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Title - Always visible */}
              <h2 className={`
                text-2xl sm:text-3xl lg:text-4xl font-bold text-white
                transition-all duration-500
                ${hoveredCard === card.id ? 'mt-auto' : ''}
              `}>
                {card.title}
              </h2>
            </div>

            {/* Gradient Overlay on Hover */}
            <div className={`
              absolute inset-0 bg-gradient-to-br from-[#084298] to-transparent
              transition-opacity duration-500
              ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}
            `} />
          </div>
        ))}
      </div>
    </div>
  );
}