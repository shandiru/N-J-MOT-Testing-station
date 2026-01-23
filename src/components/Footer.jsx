
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const mapsUrl = "https://maps.app.goo.gl/qfMU2kft7Wx3mdDn7";

  return (
    <footer className="bg-[#000000] border-t border-[#1C1C1C] py-12 text-white">
      <div className="container mx-auto px-4 md:px-12">

        <div className="grid md:grid-cols-3 gap-8">

          {/* ================= COMPANY INFO ================= */}
          <div>
            {/* Logo */}
            <img
              src="/logo.png"
              loading="lazy"
              alt="N&J MOT Testing station  Logo"
              className="h-12 w-auto mb-4"
            />

            <h2 className="text-2xl font-bold brand-gradient">
              N&J <span className="text-[#C0C0C0]">MOT Testing station</span>
            </h2>

            <p className="text-[#C0C0C0] mt-3 text-sm leading-relaxed">
              Professional MOT testing, servicing, and engine tuning.
              Trusted for repairs, air con regass, wet belts, and MOT classes 4, 5 & 7.
            </p>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h3 className="font-bold mb-4 text-lg brand-gradient">Services</h3>
            <ul className="space-y-2 text-[#C0C0C0] text-sm">
              <li className="hover:text-[#D70C09] transition">Services & Repairs</li>
              <li className="hover:text-[#D70C09] transition">Air Con Regass</li>
              <li className="hover:text-[#D70C09] transition">Engine Tuning</li>
              <li className="hover:text-[#D70C09] transition">MOT Class 4, 5 & 7</li>
              <li className="hover:text-[#D70C09] transition">Wet Belts</li>
                     </ul>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div>
            <h3 className="font-bold mb-4 text-lg brand-gradient">Contact Info</h3>
            <ul className="space-y-2 text-[#C0C0C0] text-sm">
              <li>N&J MOT Testing station</li>

              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D70C09] transition block leading-relaxed"
                >
                  Windle, 41-43 Dentons Green Ln,
                  <br /> Saint Helens WA10 2QF
                  <br />
                  United Kingdom
                </a>
              </li>

              <li>
                <a
                  href="tel:+44 1744 371225"
                  className="hover:text-[#D70C09] transition"
                >
                  +44 1744 371225
                </a>
              </li>

              <li>
                <a
                  href="mailto:n_causer@yahoo.co.uk"
                  className="hover:text-[#D70C09] transition break-all"
                >
                  n_causer@yahoo.co.uk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-[#1C1C1C] mt-10 pt-6 text-center text-[#868386] text-sm">
          <p>&copy; 2025 N&J MOT Testing station . All rights reserved.</p>
        </div>

        {/* ================= POWERED BY ================= */}
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
          {/* Left: Terms & Privacy */}
          <div className="flex gap-4 text-sm">
            <Link
              to="/terms-conditions"
              className="text-gray-400 hover:text-[#D70C09] transition duration-300"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-[#D70C09] transition duration-300"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Center: Powered by Ansely (unchanged) */}
          <p className="text-center font-semibold text-gray-400">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D70C09] hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>

      </div>

      {/* ================= BRAND GRADIENT ================= */}
      <style jsx global>{`
        .brand-gradient {
          background: linear-gradient(90deg, #0B5ED7, #D70C09, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </footer>
  );
}
