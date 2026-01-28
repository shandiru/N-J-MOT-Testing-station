
import React, { useState } from "react";
import { FaCar, FaTools, FaSnowflake } from "react-icons/fa";

export default function HeroSection() {
  const PHONE = "+44 1744 371225";
  const TEL_LINK = "tel:+44 1744 371225";

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const bookingUrl = "https://www.bookinmycar.co.uk/book_online/?key=17-987w54-soiubs0r780bu0erwgh43630B809f09f8g09bndorlfs-89048f&g=1&sl=Trchi";

  const openBookingPopup = () => {
    setIsPopupOpen(true);
  };

  const closeBookingPopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="relative bg-black overflow-hidden py-28 md:py-36" id="home">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/v.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/fall.png"
        onError={(e) => (e.currentTarget.style.display = "none")}
      >
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            data-aos="fade-up"
          >
            Professional MOT & Vehicle
            <span className="block"></span>
            <span style={{ color: "var(--primary)" }}>
              Servicing in St helens
            </span>
          </h1>

          {/* Text */}
          <p
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            N&J MOT Testing station  offers MOT Class 4 testing, vehicle servicing,
            repairs, air conditioning re-gas, engine tuning and wet belt
            services.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-5 justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button
              onClick={openBookingPopup}
              className="h-12 px-10 rounded-md text-white font-medium flex items-center justify-center transition"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Book Now
            </button>

            <a
              href={TEL_LINK}
              className="h-12 px-10 rounded-md text-white font-medium flex items-center justify-center border transition"
              style={{ borderColor: "var(--accent)" }}
            >
              Call Now: {PHONE}
            </a>
          </div>

          {/* FEATURES WITH ICONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
            {/* MOT */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div
                className="mx-auto mb-4 h-16 w-16 rounded-full flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: "rgba(11,94,215,0.2)",
                  color: "var(--primary)",
                }}
              >
                <FaCar />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                MOT Class 4
              </h3>
              <p className="text-sm text-gray-300">
                Certified MOT testing for cars, vans and light commercials.
              </p>
            </div>

            {/* Repairs */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div
                className="mx-auto mb-4 h-16 w-16 rounded-full flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: "rgba(215,12,9,0.2)",
                  color: "var(--accent)",
                }}
              >
                <FaTools />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Servicing & Repairs
              </h3>
              <p className="text-sm text-gray-300">
                Diagnostics, tuning, wet belts and full vehicle repairs.
              </p>
            </div>

            {/* Air Con */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div
                className="mx-auto mb-4 h-16 w-16 rounded-full flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: "rgba(11,94,215,0.2)",
                  color: "var(--primary)",
                }}
              >
                <FaSnowflake />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Air Con Re-Gas
              </h3>
              <p className="text-sm text-gray-300">
                Professional A/C servicing for all vehicle types.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeBookingPopup}
              aria-label="Close booking window"
              className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Iframe */}
            <iframe
              src={bookingUrl}
              title="Book Your Car"
              className="w-full h-full border-0"
              allow="payment"
            />
          </div>
        </div>
      )}
    </section>
  );
}
