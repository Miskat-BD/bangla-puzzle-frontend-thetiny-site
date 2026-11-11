import React from "react";

const Stats = () => {
  const statsData = [
    {
      value: "100K+",
      label: "Links Created",
    },
    {
      value: "1M+",
      label: "Total Clicks",
    },
    {
      value: "180+",
      label: "Countries",
    },
    {
      value: "99.9%",
      label: "Uptime",
    },
  ];

  return (
    <section className="w-full bg-[#5b4df3] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center">
          {statsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {item.value}
              </span>
              <span className="mt-1 sm:mt-2 text-xs sm:text-sm text-purple-100 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
