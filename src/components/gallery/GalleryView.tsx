"use client";

import React, { useState } from "react";
import Image from "next/image";

type GalleryTab = "packathon-2025" | "cisco-event" | "care-packs-launch";

export default function GalleryView() {
  const [activeTab, setActiveTab] = useState<GalleryTab>("packathon-2025");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
    src: `/assets/images/cisco-event-${i + 1}.jpg`,
    alt: `Cisco Event volunteer packing photo ${i + 1}`,
  }));

  const launchEventImages = Array.from({ length: 16 }, (_, i) => ({
    src: `/assets/images/launch-event-${i + 1}.webp`,
    alt: `Care Packs Launch Event photo ${i + 1}`,
  }));

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-white overflow-hidden pt-12 pb-12 md:py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/gallery-hero-clean-hd.webp"
            alt="Care packs built"
            fill
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
                548
              </div>
              <div className="text-[12px] sm:text-[12.5px] text-white/90 font-medium">Volunteers in 2025</div>
            </div>
            <div>
              <div className="text-[26px] sm:text-[30px] font-bold leading-tight mb-0.5 font-[family-name:var(--font-inter)]">
                2,163
              </div>
              <div className="text-[12px] sm:text-[12.5px] text-white/90 font-medium">Volunteer hours</div>
            </div>
            <div>
              <div className="text-[26px] sm:text-[30px] font-bold leading-tight mb-0.5 font-[family-name:var(--font-inter)]">
                144
              </div>
              <div className="text-[12px] sm:text-[12.5px] text-white/90 font-medium">Companies involved</div>
            </div>
            <div>
              <div className="text-[26px] sm:text-[30px] font-bold leading-tight mb-0.5 font-[family-name:var(--font-inter)]">
                ~400
              </div>
              <div className="text-[12px] sm:text-[12.5px] text-white/90 font-medium">Packs from a team of 20</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Bar */}
      <div className="w-full bg-white border-b border-[#fce7f3] py-3.5 sticky top-[72px] z-30 shadow-xs">
        <div className="max-w-[1220px] mx-auto px-4 md:px-6 flex items-center justify-start gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab("packathon-2025")}
            className={`px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "packathon-2025"
                ? "bg-[#ec008c] text-white shadow-sm"
                : "bg-transparent hover:bg-gray-100 text-[#4a4a53]"
            }`}
          >
            Packathon 2025
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("cisco-event")}
            className={`px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "cisco-event"
                ? "bg-[#ec008c] text-white shadow-sm"
                : "bg-transparent hover:bg-gray-100 text-[#4a4a53]"
            }`}
          >
            Cisco Event
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("care-packs-launch")}
            className={`px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "care-packs-launch"
                ? "bg-[#ec008c] text-white shadow-sm"
                : "bg-transparent hover:bg-gray-100 text-[#4a4a53]"
            }`}
          >
            Care Packs Launch Event
          </button>
        </div>
      </div>

      {/* Main Gallery Grids */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-[1220px] mx-auto px-4 md:px-6">
          {/* 1. Packathon 2025 Grid - Proportional Masonry Columns matching Figma exactly */}
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
