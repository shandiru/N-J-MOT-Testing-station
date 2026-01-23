import React from 'react';

const reviews = [
  {
    text: "Had my car MOT here today, excellent service as always. My go-to garage for a service or any advice as well. Everyone is really trust worthy and friendly - highly recommend. Thanks again!",
    name: "Sophie Armer",
    aos: "fade-up",
    delay: 0,
  },
  {
    text: "Neil installed a new ABS pump/module on my vehicle, and charged me a reasonable price. He completed the job in the time frame he said he would, then got my MOT booked in time for me to go to the south for bank holiday weekend. So 10/10 on my only dealing with them - my now 'go to'.",
    name: "Hayden Jones",
    aos: "fade-down",
    delay: 100,
  },
  {
    text: "Took my daughters Polo for an oil change. Straightforward, no issues. Would recommend.",
    name: "David Rigby",
    aos: "fade-up",
    delay: 200,
  },
  {
    text: "A good, reliable garage with friendly staff and an always happy to help attitude is very hard to find!! It is nice to know that if my cars need anything doing that Neil will be there to help get me back on the road without any fuss. I can't recommend him highly enough! Simply the Best!",
    name: "Richie Deane",
    aos: "fade-down",
    delay: 300,
  },
  {
    text: "First time using NJ Autocare and very happy with the service. New timing belt & water pump replacement done efficiently at a good price. Will be using Neil moving forward for all my cars needs. Thanks again.",
    name: "Martin Lankertis",
    aos: "fade-up",
    delay: 400,
  },
  {
    text: "Had an emergency situation with two of my vans at the same time. Neil not only fixed my vans promptly, but he actually made me feel easy about the situation and charged me a very fair price. Thanks for everything Neil. I will be using you from now on. Great service!",
    name: "Prescot Fencing",
    aos: "fade-down",
    delay: 500,
  },
];

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 fill-current text-yellow-400"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ review, index }) => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-[#084298] transition-all duration-300 hover:shadow-lg hover:shadow-[#084298]/20 flex flex-col h-full overflow-hidden">
      {/* Bottom Right Gradient */}
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tl from-[#084298]/20 via-[#D70C09]/10 to-transparent blur-2xl rounded-full pointer-events-none" />

      <div className="relative z-10">
        <StarRating />
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 flex-grow">
          "{review.text}"
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#084298] to-[#D70C09] flex items-center justify-center text-white font-semibold text-sm md:text-base">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="text-white font-semibold text-sm md:text-base">
              {review.name}
            </p>
            <p className="text-gray-400 text-xs md:text-sm">Verified Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#020617] to-[#020617] overflow-hidden"
      id="testimonials"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Customers Love
            <br />
            Our Service
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Real customers, real results with honest and reliable service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <TestimonialCard key={index} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;