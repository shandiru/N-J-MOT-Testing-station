"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="relative py-32 bg-[#0B1220] text-white overflow-hidden" id="contact">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT — Contact Info */}
        <div className="space-y-10" data-aos="fade-right">
          <div className="bg-[#0B1220] border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-red-500/30 transition">
            <h2 className="text-3xl font-bold text-[#0B5ED7] mb-4">Contact Info</h2>
            <p className="text-[#C0C0C0] font-medium mb-1">Business: N&J MOT Testing station </p>
            <p className="text-[#C0C0C0] font-medium mb-1">Contact: Jen</p>
            <p className="text-[#C0C0C0] font-medium mb-1">
              Phone: <a href="tel:+44 1744 371225" className="hover:text-[#D70C09]">+44 1744 371225</a>
            </p>
            <p className="text-[#C0C0C0] font-medium mb-1">
              Email: <a href="mailto:n_causer@yahoo.co.uk" className="hover:text-[#D70C09]">n_causer@yahoo.co.uk</a>
            </p>
            <a
              href="https://maps.app.goo.gl/E7Xm6VpqUB6j5TTH8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-[#C0C0C0] font-medium">
                Address: 41 Dentons Green Ln, Windle, Saint Helens WA10 2QF, United Kingdom
              </p>
            </a>
          </div>

          <div className="bg-[#0B1220] border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/30 transition">
            <h2 className="text-3xl font-bold text-[#D70C09] mb-4">Business Hours</h2>
            <ul className="text-[#C0C0C0] space-y-2 font-medium text-lg">
              <li>Monday – Friday: 8 AM – 5 PM</li>
              <li>Saturday – Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="bg-[#0B1220] border border-white/10 p-10 rounded-2xl shadow-xl space-y-6" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-[#0B5ED7] mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#020617] border border-white/20 px-4 py-3 rounded text-white placeholder:text-[#94A3B8]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#020617] border border-white/20 px-4 py-3 rounded text-white placeholder:text-[#94A3B8]"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full bg-[#020617] border border-white/20 px-4 py-3 rounded text-white placeholder:text-[#94A3B8]"
            />
            <input
              type="text"
              placeholder="Vehicle Registration"
              className="w-full bg-[#020617] border border-white/20 px-4 py-3 rounded text-white placeholder:text-[#94A3B8]"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full bg-[#020617] border border-white/20 px-4 py-3 rounded text-white placeholder:text-[#94A3B8]"
            />
            <button className="w-full py-3 bg-[#D70C09] hover:bg-[#0B5ED7] transition rounded-lg font-semibold text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
