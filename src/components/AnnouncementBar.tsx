import React from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#1b1b1b] text-white text-[13px] h-10 flex items-center border-b border-[#2d2d2d] z-50 relative">
      <div className="max-w-[1247px] w-full mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Left: Charity Registration */}
        <div className="text-white/80 whitespace-nowrap text-xs sm:text-[13px]">
          Registered charity <span className="text-white font-medium">1209874</span>
        </div>

        {/* Center: Upcoming Event */}
        <div className="hidden md:flex items-center gap-1.5 text-center truncate px-2 text-white/90">
          <span className="font-semibold text-white">Upcoming Event:</span>
          <span>Packathon 2026 · 13 October 2026 · Porchester Hall</span>
        </div>

        {/* Right: FAQs & Contact */}
        <div className="flex items-center gap-2 text-white/80 whitespace-nowrap text-xs sm:text-[13px]">
          <Link href="#faqs" className="hover:text-white transition-colors">
            FAQs
          </Link>
          <span className="text-white/40">·</span>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
