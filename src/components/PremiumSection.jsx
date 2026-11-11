import React from "react";

const PremiumSection = () => {
  const features = [
    "Custom branded short links",
    "UTM parameter builder",
    "Powerful analytics dashboard",
    "QR Code generator (PNG/SVG)",
    "REST API with full documentation",
  ];

  const analyticsData = [
    {
      url: "shorturl.bd/ig9Kp2",
      clicks: "1,247",
      barWidth: null,
    },
    {
      url: "shorturl.bd/yt3Nm8",
      clicks: "589",
      barWidth: "w-3/5",
    },
    {
      url: "shorturl.bd/lk7Rv1",
      clicks: "312",
      barWidth: "w-2/5",
    },
    {
      url: "shorturl.bd/fb2Wx9",
      clicks: "198",
      barWidth: "w-1/4",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Details & Checklist */}
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#5b4df3] uppercase">
              PREMIUM
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Unlock powerful tools for
              <br />
              serious growth.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg">
              Go beyond basic shortening with a full suite of marketing and developer
              tools — custom branded links, UTM builders, deep analytics, QR codes,
              and a REST API for your apps.
            </p>

            {/* Checklist */}
            <div className="mt-7 space-y-3.5">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ede9fe] text-[#5b4df3] flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-medium text-slate-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Link Analytics Dashboard Card */}
          <div>
            <div className="w-full bg-[#5b4df3] rounded-3xl p-6 sm:p-9 text-white shadow-xl shadow-indigo-500/20">
              <h3 className="text-base sm:text-lg font-bold text-white mb-6">
                Link Analytics Dashboard
              </h3>

              <div className="space-y-5">
                {analyticsData.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center justify-between text-sm sm:text-base">
                      <span className="font-medium text-purple-100">
                        {item.url}
                      </span>
                      <span className="font-bold text-white tracking-wide">
                        {item.clicks}
                      </span>
                    </div>

                    {/* Progress Bar Underneath */}
                    {item.barWidth && (
                      <div className="mt-2 w-full flex justify-end">
                        <div
                          className={`h-1 rounded-full bg-white/20 ${item.barWidth}`}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
