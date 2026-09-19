"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WhoWeAreHeroProps {
  activeTab?: "Our Purpose" | "Board of Trustees" | "Founding Story";
}

export default function WhoWeAreHero({ activeTab = "Our Purpose" }: WhoWeAreHeroProps) {
  const [selectedTab, setSelectedTab] = React.useState<string>(activeTab);

  const tabs = [
    { label: "Our Purpose", href: "/about/who-we-are#our-purpose", id: "our-purpose" },
    { label: "Board of Trustees", href: "/about/who-we-are#board-of-trustees", id: "board-of-trustees" },
    { label: "Founding Story", href: "/about/who-we-are#founding-story", id: "founding-story" },
  ];

  React.useEffect(() => {
    setSelectedTab(activeTab);
  }, [activeTab]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#board-of-trustees") {
        setSelectedTab("Board of Trustees");
        const el = document.getElementById("board-of-trustees");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (hash === "#founding-story") {
        setSelectedTab("Founding Story");
        const el = document.getElementById("founding-story");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (hash === "#our-purpose") {
        setSelectedTab("Our Purpose");
        const el = document.getElementById("our-purpose");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);

    // Observe sections to update active tab when scrolling
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "our-purpose") {
              setSelectedTab("Our Purpose");
            } else if (entry.target.id === "board-of-trustees") {
              setSelectedTab("Board of Trustees");
            } else if (entry.target.id === "founding-story") {
              setSelectedTab("Founding Story");
            }
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    ["our-purpose", "board-of-trustees", "founding-story"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("hashchange", handleHash);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#fdfafc] min-h-[480px] sm:min-h-[510px] md:min-h-[530px] flex flex-col justify-between">
      {/* Background Image on Right with Smooth Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] pointer-events-none z-0">
        <Image
          src="/assets/images/who-we-are-hero-bg.webp"
          alt="Care Packs - The people behind the packs"
          fill
          priority
          className="object-cover object-right opacity-90"
        />
        {/* Gradients to seamlessly blend image into background and text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfafc] via-[#fdfafc]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfafc]/30 via-transparent to-[#fdfafc]" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1247px] w-full mx-auto px-4 md:px-6 relative z-10 pt-14 sm:pt-16 md:pt-20 flex-1 flex flex-col justify-between">
        {/* Top Text Content */}
        <div>
          {/* Eyebrow Tag */}
          <span className="block text-[12px] sm:text-[12.5px] font-semibold tracking-[0.1em] text-[#ec008c] uppercase mb-4">
            ABOUT CARE PACKS
          </span>

          {/* Hero Title */}
          <h1 className="text-[34px] sm:text-[40px] md:text-[46px] lg:text-[48px] font-medium text-[#1b1b1b] leading-[1.18] tracking-tight mb-5 max-w-[620px]">
            The people behind<br />the packs
          </h1>

          {/* Hero Description */}
          <p className="text-[15.5px] sm:text-[16px] leading-[28px] text-[#3a3a3f] max-w-[580px] mb-8 sm:mb-12">
            Care Packs was founded by senior professionals from banking, technology, law and healthcare who wanted a more direct way to turn corporate goodwill into everyday support. Meet the trustees and the story behind the charity.
          </p>
        </div>

        {/* Sticky Sub-navigation Tabs */}
        <div className="w-full border-b border-[#ec008c] pb-3 flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar mt-auto">
          {tabs.map((tab) => {
            const isActive = selectedTab === tab.label;

            return (
              <Link
                key={tab.label}
                href={tab.href}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedTab(tab.label);
                  const el = document.getElementById(tab.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    window.history.pushState(null, "", `#${tab.id}`);
                  }
                }}
                className={`text-[14px] font-medium px-4 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#ec008c] text-white shadow-sm"
                    : "text-[#1b1b1b] hover:text-[#ec008c] hover:bg-black/[0.03]"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
