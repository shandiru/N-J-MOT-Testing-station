"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function VehicleSearch() {
  const data = [
    {
      make: "BMW",
      models: [
        {
          name: "3 Series",
          years: [
            { year: 2018, engines: ["320i", "330i", "M3"] },
            { year: 2020, engines: ["320d", "330e", "M340i"] },
          ],
        },
        {
          name: "5 Series",
          years: [
            { year: 2017, engines: ["520d", "530i", "M5"] },
            { year: 2019, engines: ["520i", "540i"] },
          ],
        },
      ],
    },
    {
      make: "Audi",
      models: [
        {
          name: "A4",
          years: [
            { year: 2016, engines: ["1.8 TFSI", "2.0 TDI"] },
            { year: 2018, engines: ["2.0 TFSI", "S4"] },
          ],
        },
      ],
    },
  ];

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");

  const selectedMake = data.find((m) => m.make === make);
  const selectedModel = selectedMake?.models.find((m) => m.name === model);
  const selectedYear = selectedModel?.years.find((y) => y.year == year);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  return (
    <section className="w-full bg-black text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE TEXT */}
        <div className="text-center lg:text-left space-y-6" data-aos="fade-right">
          <img src="/logo.png" alt="Logo" className="mx-auto lg:mx-0 w-64 opacity-90" />

          <p className="text-xl tracking-wide text-gray-400">Get a quote:</p>

          <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-sm leading-relaxed">
            Search for your vehicle to see estimated performance gains, then enter your details to receive a personalised quote.
          </p>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 space-y-4 w-full max-w-md mx-auto" data-aos="fade-left">
          <h3 className="text-xl font-semibold brand-gradient mb-4">Vehicle Search</h3>

          <Dropdown
            label="Select manufacturer"
            value={make}
            onChange={(value) => {
              setMake(value);
              setModel("");
              setYear("");
              setEngine("");
            }}
            options={data.map((m) => m.make)}
          />

          <Dropdown
            label="Select model"
            value={model}
            onChange={(value) => {
              setModel(value);
              setYear("");
              setEngine("");
            }}
            disabled={!make}
            options={selectedMake?.models.map((m) => m.name) || []}
          />

          <Dropdown
            label="Select year"
            value={year}
            onChange={(value) => {
              setYear(value);
              setEngine("");
            }}
            disabled={!model}
            options={selectedModel?.years.map((y) => y.year) || []}
          />

          <Dropdown
            label="Select engine"
            value={engine}
            onChange={setEngine}
            disabled={!year}
            options={selectedYear?.engines || []}
          />

          <button
            className="
              bg-red-700 hover:bg-red-800 text-white font-semibold 
              w-full py-3 rounded-lg transition shadow-md mt-4
              border border-gray-500
            "
            data-aos="fade-up"
            data-aos-delay="150"
          >
            → View tuning options
          </button>
        </div>
      </div>

      <style jsx global>{`
        .brand-gradient {
          background: linear-gradient(90deg, #d70c09, #c0c0c0, #868386);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}

function Dropdown({ label, value, onChange, disabled, options }) {
  return (
    <div className={`relative w-full ${disabled ? "opacity-50 pointer-events-none" : ""}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full bg-gray-800 border border-gray-600 text-gray-300
          px-4 py-3 rounded-lg appearance-none text-sm
          focus:outline-none focus:ring-2 focus:ring-red-700
        "
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o} value={o} className="text-black">
            {o}
          </option>
        ))}
      </select>

      <FaChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" />
    </div>
  );
}
