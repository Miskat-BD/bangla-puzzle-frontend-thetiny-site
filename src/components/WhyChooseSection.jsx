import React from "react";

const featuresData = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-[#5b4df3]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Lightning Fast",
    description: "Shorten URLs instantly with our optimized infrastructure",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-[#5b4df3]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 20V4M12 20V10M6 20v-4" />
      </svg>
    ),
    title: "Detailed Analytics",
    description: "Track clicks, referrers, locations, and devices",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-[#5b4df3]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
      </svg>
    ),
    title: "Global CDN",
    description: "Fast redirects from anywhere in the world",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-[#5b4df3]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="5" height="5" x="3" y="3" rx="1" />
        <rect width="5" height="5" x="16" y="3" rx="1" />
        <rect width="5" height="5" x="3" y="16" rx="1" />
        <path d="M21 16h-3a2 2 0 0 0-2 2v3M21 21v.01M12 7v3a2 2 0 0 1-2 2H7M3 12h.01M12 3h.01M12 16v.01M16 12h1M21 12v.01M12 21v-1" />
      </svg>
    ),
    title: "QR Codes",
    description: "Generate QR codes for any shortened link",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-[#5b4df3]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Secure",
    description: "All links are encrypted and malware scanned",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-[#5b4df3]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Expiration Control",
    description: "Set expiry dates or click limits",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Why Choose Our Platform?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            Everything you need to manage and track your links
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:border-slate-300"
            >
              {/* Icon */}
              <div>{feature.icon}</div>

              {/* Title */}
              <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
