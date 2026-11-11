"use client";

import React, { useState } from "react";

const linksData = [
  {
    id: 1,
    shortUrl: "https://thetiny.site/ARLSeN",
    originalUrl:
      "https://api.whatsapp.com/send?phone=8801880811048&text=i+want+to+be+a+...",
    clicks: "428 clicks",
  },
  {
    id: 2,
    shortUrl: "https://thetiny.site/BArxCj",
    originalUrl: "https://leena45945.softr.app",
    clicks: "271 clicks",
  },
  {
    id: 3,
    shortUrl: "https://thetiny.site/kLrnXd",
    originalUrl:
      "https://supportersframe.com/blog/supportersframecom-introduces-qr-code...",
    clicks: "87 clicks",
  },
  {
    id: 4,
    shortUrl: "https://thetiny.site/qQNTp0",
    originalUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSf3aBliGp4uunkBsQVLy_zLWcwkWh...",
    clicks: "67 clicks",
  },
  {
    id: 5,
    shortUrl: "https://thetiny.site/k4diP8",
    originalUrl: "https://solverfirm.com/",
    clicks: "37 clicks",
  },
];

const PopularLinks = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [selectedQr, setSelectedQr] = useState(null);

  const handleCopy = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Most Popular Links
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Check out the most clicked links on our platform
          </p>
        </div>

        {/* Links List */}
        <div className="space-y-3.5 sm:space-y-4">
          {linksData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-5 sm:px-6 rounded-2xl bg-[#fafafc] border border-slate-200/80 transition-all hover:border-slate-300 hover:shadow-xs"
            >
              {/* Left Details */}
              <div className="min-w-0 flex-1">
                <a
                  href={item.shortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-sm sm:text-base text-[#5b4df3] hover:underline truncate block"
                >
                  {item.shortUrl}
                </a>
                <p className="mt-1 text-xs sm:text-sm text-slate-400 truncate max-w-sm sm:max-w-md md:max-w-lg">
                  {item.originalUrl}
                </p>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-3 sm:gap-4 shrink-0 justify-between sm:justify-end">
                {/* Clicks count */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-700">
                  <svg
                    className="w-4 h-4 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 4.1 12 6" />
                    <path d="m5.1 8-2.9-.8" />
                    <path d="m6 12-1.9 2" />
                    <path d="M7.2 2.2 8 5.1" />
                    <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
                  </svg>
                  <span>{item.clicks}</span>
                </div>

                {/* Copy Button */}
                <button
                  type="button"
                  onClick={() => handleCopy(item.shortUrl, item.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#5b4df3] hover:bg-[#4d3ee3] text-white text-xs sm:text-sm font-semibold transition-colors active:scale-95 cursor-pointer shadow-xs"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                  <span>{copiedId === item.id ? "Copied!" : "Copy"}</span>
                </button>

                {/* QR Button */}
                <button
                  type="button"
                  onClick={() => setSelectedQr(item)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#f1edfe] hover:bg-[#e4dcfe] text-[#5b4df3] text-xs sm:text-sm font-semibold transition-colors active:scale-95 cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5"
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
                    <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
                    <path d="M12 7v3a2 2 0 0 1-2 2H7" />
                  </svg>
                  <span>QR</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* QR Code Popup Modal */}
        {selectedQr && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl text-center">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-sm font-bold text-slate-900">
                  QR Code for Link
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedQr(null)}
                  className="text-slate-400 hover:text-slate-700 text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="my-5 mx-auto flex h-44 w-44 items-center justify-center rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <rect x="5" y="5" width="28" height="28" rx="4" fill="#1e1b4b" />
                  <rect x="11" y="11" width="16" height="16" rx="2" fill="#ffffff" />
                  <rect x="15" y="15" width="8" height="8" rx="1" fill="#5b4df3" />
                  <rect x="67" y="5" width="28" height="28" rx="4" fill="#1e1b4b" />
                  <rect x="73" y="11" width="16" height="16" rx="2" fill="#ffffff" />
                  <rect x="77" y="15" width="8" height="8" rx="1" fill="#5b4df3" />
                  <rect x="5" y="67" width="28" height="28" rx="4" fill="#1e1b4b" />
                  <rect x="11" y="73" width="16" height="16" rx="2" fill="#ffffff" />
                  <rect x="15" y="77" width="8" height="8" rx="1" fill="#5b4df3" />
                  <rect x="40" y="8" width="6" height="6" rx="1" fill="#5b4df3" />
                  <rect x="52" y="8" width="6" height="6" rx="1" fill="#1e1b4b" />
                  <rect x="40" y="20" width="6" height="6" rx="1" fill="#1e1b4b" />
                  <rect x="52" y="20" width="6" height="6" rx="1" fill="#5b4df3" />
                  <rect x="8" y="40" width="6" height="6" rx="1" fill="#1e1b4b" />
                  <rect x="20" y="40" width="6" height="6" rx="1" fill="#5b4df3" />
                  <rect x="36" y="36" width="28" height="28" rx="4" fill="#5b4df3" />
                  <circle cx="50" cy="50" r="7" fill="#ffffff" />
                  <circle cx="50" cy="50" r="4" fill="#5b4df3" />
                  <rect x="70" y="40" width="6" height="6" rx="1" fill="#1e1b4b" />
                  <rect x="82" y="40" width="6" height="6" rx="1" fill="#5b4df3" />
                  <rect x="40" y="70" width="6" height="6" rx="1" fill="#5b4df3" />
                  <rect x="52" y="70" width="6" height="6" rx="1" fill="#1e1b4b" />
                  <rect x="70" y="70" width="20" height="20" rx="3" fill="#1e1b4b" />
                  <rect x="75" y="75" width="10" height="10" rx="1" fill="#ffffff" />
                </svg>
              </div>

              <p className="font-mono text-xs font-semibold text-slate-800 truncate">
                {selectedQr.shortUrl}
              </p>

              <button
                type="button"
                onClick={() => setSelectedQr(null)}
                className="mt-5 w-full rounded-xl bg-slate-900 py-2.5 text-xs font-semibold text-white hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularLinks;
