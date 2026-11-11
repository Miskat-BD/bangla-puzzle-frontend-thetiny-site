import React from "react";

const testimonialsData = [
  {
    id: 1,
    quote: '"A good platform for Link management."',
    name: "Nadim Majid",
    role: "User",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            TESTIMONIALS
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Loved by 80,000+ users worldwide.
          </h2>
        </div>

        {/* Testimonials Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:border-slate-300"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#5b4df3]">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                {item.quote}
              </p>

              {/* Author */}
              <div className="mt-6">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
