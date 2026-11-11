import React from "react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "FREE",
    price: "$0",
    period: "/forever",
    description: "Great for individuals and casual use.",
    features: [
      "Unlimited link shortening",
      "Basic click counter",
      "HTTPS security",
      "QR code (basic)",
      "Cross-device support",
    ],
    buttonText: "Get Started Free",
    buttonHref: "/signup",
    isFeatured: false,
  },
  {
    name: "PRO",
    price: "$9",
    period: "/per month",
    description: "For creators, marketers, and power users.",
    features: [
      "Everything in Free",
      "Custom short links",
      "Advanced analytics",
      "UTM builder",
      "QR code (custom)",
      "Browser extension",
      "Priority support",
    ],
    buttonText: "Start 14-Day Trial",
    buttonHref: "/signup",
    isFeatured: true,
  },
  {
    name: "BUSINESS",
    price: "$29",
    period: "/per month",
    description: "For teams and growing companies.",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Developer API",
      "Bulk link creation",
      "White-label domain",
      "App integrations",
      "Dedicated support",
    ],
    buttonText: "Subscribe Now",
    buttonHref: "/signup",
    isFeatured: false,
  },
];

const Pricing = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            PRICING
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            No hidden fees. Start free, scale when you&apos;re ready.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all ${
                plan.isFeatured
                  ? "bg-[#5b4df3] text-white shadow-xl shadow-indigo-500/25"
                  : "bg-white border border-slate-200/90 hover:border-slate-300"
              }`}
            >
              <div>
                {/* Plan Name */}
                <span
                  className={`text-xs font-bold tracking-widest uppercase ${
                    plan.isFeatured ? "text-purple-200" : "text-slate-400"
                  }`}
                >
                  {plan.name}
                </span>

                {/* Price */}
                <div className="mt-3 flex items-baseline">
                  <span
                    className={`text-4xl sm:text-5xl font-black tracking-tight ${
                      plan.isFeatured ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`ml-1 text-xs sm:text-sm font-medium ${
                      plan.isFeatured ? "text-purple-200" : "text-slate-400"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                    plan.isFeatured ? "text-purple-100" : "text-slate-500"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="mt-8 space-y-3.5">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          plan.isFeatured
                            ? "bg-white/20 text-white"
                            : "bg-[#ede9fe] text-[#5b4df3]"
                        }`}
                      >
                        <svg
                          className="w-2.5 h-2.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span
                        className={`text-xs sm:text-sm font-medium ${
                          plan.isFeatured ? "text-white" : "text-slate-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-10">
                <Link
                  href={plan.buttonHref}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-[0.98] ${
                    plan.isFeatured
                      ? "bg-white hover:bg-slate-50 text-[#5b4df3] shadow-sm"
                      : "bg-[#5b4df3] hover:bg-[#4d3ee3] text-white"
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
