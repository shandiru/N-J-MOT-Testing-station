"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ReviewsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative py-24 bg-gradient-to-b from-[#020617] to-[#020617]"
      id="testimonials"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: "url('logo-new.png')",
          backgroundSize: "contain", // makes it zoom out instead of cover
        }}
      ></div>


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h3
            className="text-2xl tracking-[4px] uppercase font-bold"
            style={{ color: "var(--primary)" }}
          >
            Customer Feedback
          </h3>

          {/* Accent Bar */}
          <div
            className="w-20 h-[3px] mx-auto mt-4"
            style={{ backgroundColor: "var(--accent)" }}
          ></div>

          <p className="text-[#94A3B8] mt-5 text-lg max-w-xl mx-auto">
            Here’s what our clients have to say about our service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ReviewCard
            text={`My car recently broke down in Manchester, Neil and Jen were able to arrange someone to tow the vehicle to their garage. Work was carried out which wasn’t easy and my car was returned with all work completed to a high standard. Thank you so much.`}
            name="Emma Spruell"
            dataAos="fade-up"
            delay={0}
          />
          <ReviewCard
            text={`Took my bmw in for an interim service, change the ignition coils, and to change the lambda sensor. Diagnostic done and I was advised I didn't need one, money saved. All other jobs done professionally and with care. My car is now driving like a new car. This garage is more than a 5☆ and are totally honest. I would highly recommend`}
            name="Stephen Clarke"
            dataAos="fade-down"
            delay={100}
          />
          <ReviewCard
            text={`What an absolute find this place is, fitted my own parts for me at a very reasonable price. I've been a taxi driver for 12 years and been to many garages, some rip offs but definitely not these guys. I will most definitely return here in future. Neil and team are fantastic. Thanks again N and J`}
            name="Leanne Williams"
            dataAos="fade-up"
            delay={200}
          />
          <ReviewCard
            text={`Went for my mot this morning couldn't believe how hasstle free it was thanks guys wonderful service.`}
            name="Pat Swain"
            dataAos="fade-down"
            delay={300}
          />
          <ReviewCard
            text={`Really friendly place and pleasant people.
Good reliable honest garage. Having been a mechanic for many years and now not on the spanners anymore I don't take my car anywhere else! Highly recommended. Thanks n&j`}
            name="Ad gray"
            dataAos="fade-up"
            delay={400}
          />
          <ReviewCard
            text={`Had my MOT done here today. Great customer service with friendly staff. Fab location and easy to get to. Genuine and don't try to rip you off! Thanks!`}
            name="Jenny Gore"
            dataAos="fade-down"
            delay={500}
          />
        </div>
      </div>
    </section>
  );
}

/* Review Card Component Using Your Color Codes */
function ReviewCard({ text, name, dataAos, delay }) {
  return (
    <div
      data-aos={dataAos}
      data-aos-delay={delay}
      className="
        bg-white/5 
        text-[#94A3B8] 
        p-6 
        border border-white/10 
        shadow-md 
        backdrop-blur-sm
        min-h-[200px]
        flex flex-col justify-between
        rounded-md
        transition
        hover:border-[var(--accent)]
      "
    >
      {/* Review Text */}
      <p className="text-base leading-relaxed mb-4 whitespace-pre-line">
        {text}
      </p>

      {/* Reviewer Name */}
      <h4 className="text-white text-sm tracking-wide font-semibold uppercase">
        — {name}
      </h4>
    </div>
  );
}
