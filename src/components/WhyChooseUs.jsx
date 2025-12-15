"use client";

import React from "react";

export default function WhyChooseUs() {
  const items = [
    {
      title: "PERFORMANCE-DRIVEN EXPERTISE",
      desc:
        "We optimise your vehicle for better performance, efficiency, and responsiveness.",
    },
    {
      title: "FULL-SERVICE SOLUTIONS",
      desc:
        "From diagnostics to servicing — everything your vehicle needs under one roof.",
    },
    {
      title: "PRECISION. PASSION. CARE.",
      desc:
        "Your car is treated like our own with passion, precision tools, and expert care.",
    },
    {
      title: "TRANSPARENT PRICING",
      desc:
        "Clear pricing with no hidden costs. You know what’s being done — and why.",
    },
    {
      title: "FAST TURNAROUND",
      desc:
        "Efficient workflow and flexible scheduling to get you back on the road quickly.",
    },
    {
      title: "LOCAL & TRUSTED",
      desc:
        "Serving West Bromwich and the surrounding areas with honesty and reliability.",
    },
  ];

  return (
    <section id="why" className="py-20 bg-[#000000] text-white">
      <div className="container mx-auto px-4 md:px-12">

        {/* Eyebrow */}
        <div className="text-center mb-2">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C0C0C0]">
            <span className="h-[2px] w-4 bg-[#868386] inline-block" />
            Built for Results
          </span>
        </div>

        {/* Heading + Sub */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
            <span className="text-white">Why Choose </span>
            <span className="brand-gradient">Us?</span>
          </h2>

          <p className="mt-4 text-lg text-[#C0C0C0]">
            At{" "}
            <span className="font-semibold brand-gradient">
              AF-MOK PERFORMANCE
            </span>
            , we don’t just repair vehicles — we elevate them.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={i}
              className="bg-black border border-[#1f1f1f] rounded-2xl p-8 text-center shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-shadow"
            >
              {/* Number badge */}
              <div className="mx-auto mb-6 w-20 h-20 rounded-full grid place-items-center relative">
                <span className="absolute inset-0 rounded-full ring-1 ring-white/10" />
                <span className="badge-gradient relative inline-flex items-center justify-center w-14 h-14 rounded-full text-black font-extrabold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Card title */}
              <h3 className="text-lg md:text-xl font-extrabold tracking-wide brand-gradient uppercase">
                {it.title}
              </h3>

              <p className="mt-4 text-[#C0C0C0] leading-relaxed text-sm">
                {it.desc}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* BRAND GRADIENTS */}
      <style jsx global>{`
        .brand-gradient {
          background: linear-gradient(90deg, #D70C09 0%, #ffffff 40%, #868386 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          will-change: transform;
        }

        .badge-gradient {
          background-image: linear-gradient(135deg, #D70C09 0%, #ffffff 50%, #868386 100%);
          background-size: 100% 100%;
          background-repeat: no-repeat;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
