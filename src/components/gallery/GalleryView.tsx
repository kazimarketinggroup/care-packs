"use client";

import React, { useState } from "react";
import Image from "next/image";

type GalleryTab = "packathon-2025" | "cisco-event" | "care-packs-launch";

export default function GalleryView() {
  const [activeTab, setActiveTab] = useState<GalleryTab>("packathon-2025");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const parseTabFromHash = (hashStr: string): GalleryTab | null => {
      const clean = hashStr.replace(/^#/, "").trim().toLowerCase();
      if (clean === "cisco-event" || clean === "cisco") {
        return "cisco-event";
      }
      if (clean === "packathon-2025" || clean === "packathon") {
        return "packathon-2025";
      }
      if (
        clean === "care-packs-launch" ||
        clean === "care-packs-launch-event" ||
        clean === "launch-event" ||
        clean === "launch"
      ) {
        return "care-packs-launch";
      }
      return null;
    };

    const handleHash = (forcedHash?: string) => {
      const targetHash = forcedHash || window.location.hash;
      const matched = parseTabFromHash(targetHash);
      if (matched) {
        setActiveTab(matched);
        const cleanId = targetHash.replace(/^#/, "");
        requestAnimationFrame(() => {
          const el = document.getElementById(cleanId) || document.getElementById("gallery-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      }
    };

    // Check immediately on mount
    handleHash();

    // Check with brief delays to catch client-side routing hash synchronization
    const t1 = setTimeout(() => handleHash(), 50);
    const t2 = setTimeout(() => handleHash(), 150);

    const onCustomEvent = (e: Event) => {
      const ce = e as CustomEvent<{ hash?: string }>;
      if (ce.detail?.hash) {
        handleHash(ce.detail.hash);
      } else {
        handleHash();
      }
    };

    window.addEventListener("hashchange", () => handleHash());
    window.addEventListener("popstate", () => handleHash());
    window.addEventListener("gallery-tab-select", onCustomEvent);
    window.addEventListener("route-hash-change", onCustomEvent);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("hashchange", () => handleHash());
      window.removeEventListener("popstate", () => handleHash());
      window.removeEventListener("gallery-tab-select", onCustomEvent);
      window.removeEventListener("route-hash-change", onCustomEvent);
    };
  }, []);

  const packathonColumn1 = [
    {
      src: "/assets/images/volunteer_with_us__dsc00064__1__1__155_6206.webp",
      alt: "Team celebrating in pink shirts with trophy",
      aspect: "aspect-[1.44/1]",
    },
    {
      src: "/assets/images/gallery__rectangle_93__153_4467.webp",
      alt: "Team cheering with arms raised behind circle of boxes",
      aspect: "aspect-[1.44/1]",
    },
    {
      src: "/assets/images/gallery__rectangle_97__153_4468.webp",
      alt: "Volunteers packing care boxes in hall with music screen",
      aspect: "aspect-[1.44/1]",
    },
  ];

  const packathonColumn2 = [
    {
      src: "/assets/images/gallery__rectangle_90__153_4469.webp",
      alt: "Volunteer speaking into microphone",
      aspect: "aspect-[0.67/1]", // Exact Figma tall portrait: 246 x 368
    },
    {
      src: "/assets/images/gallery__rectangle_95__153_4472.webp",
      alt: "Care Packs stacked neatly in circular spiral formation on floor",
      aspect: "aspect-[0.89/1]", // Exact Figma: 246 x 276
    },
    {
      src: "/assets/images/gallery__rectangle_102__153_4473.webp",
      alt: "Hands folding corrugated cardboard flatpack care boxes",
      aspect: "aspect-[1.23/1]", // Exact Figma: 246 x 200
    },
  ];

  const packathonColumn3 = [
    {
      src: "/assets/images/gallery__rectangle_91__153_4471.webp",
      alt: "Audience seated listening to presentation in hall",
      aspect: "aspect-[1.86/1]", // Exact Figma: 512 x 276
    },
    {
      src: "/assets/images/gallery__rectangle_94__153_4470.webp",
      alt: "Panel discussion with leaders on stage",
      aspect: "aspect-[1.86/1]", // Exact Figma: 512 x 276
    },
    {
      src: "/assets/images/gallery__rectangle_96__153_4474.webp",
      alt: "Volunteers packing care bottles and boxes at table",
      aspect: "aspect-[1.86/1]", // Exact Figma: 512 x 276
    },
  ];

  const ciscoImages = Array.from({ length: 12 }, (_, i) => ({
    src: `/assets/images/cisco-event-${i + 1}.webp`,
    alt: `Cisco Event volunteer packing photo ${i + 1}`,
  }));

  const launchEventImages = [
    { src: "/assets/images/launch-event-1.webp", alt: "Care Packs Launch Event atrium team gathering" },
    { src: "/assets/images/launch-event-2.webp", alt: "Volunteers holding care packs" },
    { src: "/assets/images/launch-event-3.webp", alt: "Executive panel discussion on stage" },
    { src: "/assets/images/launch-event-4.webp", alt: "Volunteers assembling boxes in packing hall" },
    { src: "/assets/images/launch-event-5.webp", alt: "Close up hands packing essential items" },
    { src: "/assets/images/launch-event-6.webp", alt: "Essential baby and hygiene products packed in box" },
    { src: "/assets/images/launch-event-7.webp", alt: "Volunteer stocking shelves with essentials" },
    { src: "/assets/images/launch-event-8.webp", alt: "Audience listening to presentation on stage" },
    { src: "/assets/images/launch-event-9.webp", alt: "Volunteers proudly presenting finished care packs" },
    { src: "/assets/images/launch-event-10.webp", alt: "Team members displaying numbered care packs" },
    { src: "/assets/images/launch-event-11.webp", alt: "Volunteer smiling with assembled care pack" },
    { src: "/assets/images/launch-event-12.webp", alt: "Care Packs event sign and packing stations" },
    { src: "/assets/images/launch-event-13.webp", alt: "Team celebration with trophy in front of banner" },
    { src: "/assets/images/launch-event-14.webp", alt: "Volunteers cheering behind care pack boxes" },
    { src: "/assets/images/launch-event-15.webp", alt: "Volunteers collaborating at assembly station" },
    { src: "/assets/images/launch-event-16.webp", alt: "High-angle view of packing tables in action" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-white overflow-hidden pt-12 pb-12 md:py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/gallery-hero-clean-hd.webp"
            alt="Care packs built"
            fill
            sizes="100vw"
            className="object-cover object-right sm:object-[85%_center]"
            priority
          />
          {/* Directional gradient: clean white on the left for text, transparent on the right to reveal the pack box */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-45% to-white/10 sm:to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1220px] mx-auto px-4 md:px-6 flex flex-col items-start text-left">
          <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-3 block">
            GALLERY
          </span>
          <h1 className="text-[32px] sm:text-[42px] md:text-[46px] leading-[1.15] font-bold text-[#1b1b1b] max-w-[620px] mb-4 tracking-tight">
            Care Packs, where the packs get built, and what changed this quarter
          </h1>
          <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.6] text-[#4a4a53] max-w-[560px] mb-7">
            Packing days, Packathons and delivery days the moments behind the numbers, from our first 300-pack launch to corporate teams building hundreds in an afternoon.
          </p>

          {/* Magenta Stat Block */}
          <div className="w-full max-w-[640px] bg-[#ec008c] rounded-[14px] p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white text-center shadow-[0_8px_30px_rgba(236,0,140,0.18)]">
            <div>
              <div className="text-[26px] sm:text-[30px] font-bold leading-tight mb-0.5 font-[family-name:var(--font-inter)]">
                300
              </div>
              <div className="text-[11px] sm:text-[12px] text-white/85 font-medium leading-tight">
                First pack build (London)
              </div>
            </div>
            <div>
              <div className="text-[26px] sm:text-[30px] font-bold leading-tight mb-0.5 font-[family-name:var(--font-inter)]">
                1,000
              </div>
              <div className="text-[11px] sm:text-[12px] text-white/85 font-medium leading-tight">
                Packs in 6 weeks
              </div>
            </div>
            <div>
              <div className="text-[26px] sm:text-[30px] font-bold leading-tight mb-0.5 font-[family-name:var(--font-inter)]">
                4,500+
              </div>
              <div className="text-[11px] sm:text-[12px] text-white/85 font-medium leading-tight">
                Target packs (Oct 2026)
              </div>
            </div>
            <div>
              <div className="text-[26px] sm:text-[30px] font-bold leading-tight mb-0.5 font-[family-name:var(--font-inter)]">
                15+
              </div>
              <div className="text-[11px] sm:text-[12px] text-white/85 font-medium leading-tight">
                Corporate partners
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Gallery Tabs */}
      <section id="gallery-section" className="w-full py-12 md:py-16 bg-[#fafafa] scroll-mt-24">
        {/* Hidden alias targets for route hashes */}
        <span id="care-packs-launch-event" className="sr-only pointer-events-none" />
        <span id="packathon" className="sr-only pointer-events-none" />

        <div className="max-w-[1247px] mx-auto px-4 md:px-6">
          {/* Tab Filter Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 md:mb-12">
            <button
              id="packathon-2025"
              onClick={() => {
                setActiveTab("packathon-2025");
                window.history.pushState(null, "", "#packathon-2025");
              }}
              className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all cursor-pointer scroll-mt-32 ${
                activeTab === "packathon-2025"
                  ? "bg-[#ec008c] text-white shadow-sm"
                  : "bg-white text-[#4a4a53] hover:bg-gray-100 hover:text-black border border-gray-200"
              }`}
            >
              Packathon 2025
            </button>
            <button
              id="cisco-event"
              onClick={() => {
                setActiveTab("cisco-event");
                window.history.pushState(null, "", "#cisco-event");
              }}
              className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all cursor-pointer scroll-mt-32 ${
                activeTab === "cisco-event"
                  ? "bg-[#ec008c] text-white shadow-sm"
                  : "bg-white text-[#4a4a53] hover:bg-gray-100 hover:text-black border border-gray-200"
              }`}
            >
              Cisco Event
            </button>
            <button
              id="care-packs-launch"
              onClick={() => {
                setActiveTab("care-packs-launch");
                window.history.pushState(null, "", "#care-packs-launch");
              }}
              className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all cursor-pointer scroll-mt-32 ${
                activeTab === "care-packs-launch"
                  ? "bg-[#ec008c] text-white shadow-sm"
                  : "bg-white text-[#4a4a53] hover:bg-gray-100 hover:text-black border border-gray-200"
              }`}
            >
              Care Packs Launch Event
            </button>
          </div>

          {/* 1. Packathon 2025 3-Column Masonry Grid */}
          {activeTab === "packathon-2025" && (
            <div className="grid grid-cols-1 md:grid-cols-[397fr_246fr_512fr] gap-4 sm:gap-5 items-start">
              {/* Column 1 (397fr) */}
              <div className="flex flex-col gap-4 sm:gap-5">
                {packathonColumn1.map((img, i) => (
                  <div
                    key={`col1-${i}`}
                    onClick={() => setLightboxImage(img.src)}
                    className={`group relative rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-gray-100 ${img.aspect}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 397px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                ))}
              </div>

              {/* Column 2 (246fr) */}
              <div className="flex flex-col gap-4 sm:gap-5">
                {packathonColumn2.map((img, i) => (
                  <div
                    key={`col2-${i}`}
                    onClick={() => setLightboxImage(img.src)}
                    className={`group relative rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-gray-100 ${img.aspect}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 246px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                ))}
              </div>

              {/* Column 3 (512fr) */}
              <div className="flex flex-col gap-4 sm:gap-5">
                {packathonColumn3.map((img, i) => (
                  <div
                    key={`col3-${i}`}
                    onClick={() => setLightboxImage(img.src)}
                    className={`group relative rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-gray-100 ${img.aspect}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 512px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Cisco Event 4x3 Grid (matching screenshot) */}
          {activeTab === "cisco-event" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
              {ciscoImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImage(img.src)}
                  className="group relative aspect-square rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-gray-100 border border-gray-100"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              ))}
            </div>
          )}

          {/* 3. Care Packs Launch Event 4x4 Grid matching Figma exactly */}
          {activeTab === "care-packs-launch" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
              {launchEventImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImage(img.src)}
                  className="group relative aspect-square rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-gray-100 border border-gray-100"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
        >
          <div className="relative max-w-[90vw] max-h-[85vh] w-[900px] h-[650px]">
            <Image
              src={lightboxImage}
              alt="Enlarged gallery view"
              fill
              unoptimized
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white text-[32px] font-bold hover:text-[#ec008c] transition-colors cursor-pointer"
            aria-label="Close image preview"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
