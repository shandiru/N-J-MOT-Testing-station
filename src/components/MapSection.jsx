"use client";

export default function MapSection() {
  return (
    <section className="relative py-20 bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-6 rounded-2xl overflow-hidden border border-white/10 shadow-xl h-96">
        <iframe
          title="location-map"
          className="w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.0157263003894!2d-2.7484085!3d53.45770019999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b1b332a0a173b%3A0xfd8cefc6b473c9e5!2sN%26J%20Autocare%20mot%20station!5e1!3m2!1sen!2slk!4v1765828468097!5m2!1sen!2slk"
          ></iframe>
      </div>
    </section>
  );
}
