"use client";

import React, { useState, useEffect } from "react";
import Masonry from "../components/Masonry";
import InteractiveViewer from "../components/InteractiveViewer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Gallery() {
 const items = [
  { id: "1", img: "/im.jpg", height: 720 },
  { id: "2", img: "/im1.jpg", height: 680 },
  { id: "3", img: "/im2.jpg", height: 700 },
  { id: "4", img: "/im3.jpg", height: 660 },
  { id: "5", img: "/im4.jpg", height: 740 },
  { id: "6", img: "/im5.jpg", height: 710 },
  { id: "7", img: "/im6.jpg", height: 650 },
  { id: "8", img: "/im7.jpg", height: 720 },
  { id: "9", img: "/im8.jpg", height: 700 },
  { id: "10", img: "/im9.jpg", height: 730 },
  { id: "11", img: "/b1.jpeg", height: 700 },
  { id: "12", img: "/b2.jpeg", height: 680 },
  { id: "13", img: "/b3.jpeg", height: 710 },
  { id: "14", img: "/b4.jpeg", height: 690 },
  { id: "15", img: "/b5.jpeg", height: 720 },
  { id: "16", img: "/b6.jpeg", height: 700 },
  { id: "17", img: "/b7.jpeg", height: 680 },
];


  const [activeIndex, setActiveIndex] = useState(null);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <section className="w-full py-20 bg-[#000000] text-white" id="gallery">

        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-16 px-4">
          <h2
            className="text-5xl font-extrabold uppercase tracking-wide"
            data-aos="fade-up"
          >
            Workshop Gallery
          </h2>

          {/* Red Highlight Line */}
          <div
            className="w-20 h-[3px] bg-[#D70C09] mx-auto mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>

          <p
            className="text-[#C0C0C0] text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore our workshop — craftsmanship, precision, and passion in every detail.
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          className="max-w-[1600px] mx-auto px-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Masonry items={items} onImageClick={setActiveIndex} />
        </div>
      </section>

      {/* Fullscreen Viewer */}
      <InteractiveViewer
        items={items}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNext={() => setActiveIndex((i) => (i + 1) % items.length)}
        onPrev={() =>
          setActiveIndex((i) => (i === 0 ? items.length - 1 : i - 1))
        }
      />
    </>
  );
}
