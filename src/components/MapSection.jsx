
export default function MapSection() {
  return (
    <section className="relative py-20 bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl h-96">
          <iframe
            title="location-map"
            className="w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d148.4750467226486!2d-2.748555091282291!3d53.4577229195647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b1d6c9fe9fe95%3A0xcac7a630bc638897!2sN%26J%20MOT%20TESTING%20STATION!5e0!3m2!1sen!2slk!4v1768926378627!5m2!1sen!2slk"
          ></iframe>
        </div>
      </div>
    </section>
  );
}