import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f9ff] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      {/* Background soft ambient gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1edfe] border border-[#e2d9fd] text-[#5b4df3] text-xs sm:text-sm font-medium">
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
          <span>Trusted by thousands of users</span>
        </div>

        {/* Main Headline */}
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
          Shorten Your URL
          <br />
          <span className="text-[#5b4df3]">in seconds</span>
        </h1>

        {/* Description Paragraph */}
        <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
          Create short, memorable links that you can share anywhere.
          <br className="hidden sm:inline" /> Track every click with powerful analytics.
        </p>

        {/* Center Card */}
        <div className="mt-10 max-w-xl w-full mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-[0_12px_45px_rgba(0,0,0,0.05)] border border-slate-100/80 text-center">
          {/* Lock Icon Circle */}
          <div className="w-14 h-14 mx-auto rounded-full bg-[#f3efff] flex items-center justify-center text-[#5b4df3]">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="16" height="11" x="4" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          {/* Card Title */}
          <h2 className="mt-5 text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Login to make your URL short
          </h2>

          {/* Card Description */}
          <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
            Sign in or create a free account to start shortening links, generating QR codes, and tracking every click in real time.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5b4df3] hover:bg-[#4d3ee3] text-white text-sm font-semibold transition-all shadow-sm active:scale-[0.98]"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="14" height="10" x="5" y="11" rx="2" ry="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              <span>Login to Make URL</span>
            </Link>

            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-700 hover:border-slate-900 hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-all active:scale-[0.98]"
            >
              <span>Sign Up Free</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
