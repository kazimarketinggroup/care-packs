"use client";

import React, { useState } from "react";
import Image from "next/image";

type GalleryTab = "packathon-2025" | "cisco-event" | "care-packs-launch";

export default function GalleryView() {
  const [activeTab, setActiveTab] = useState<GalleryTab>("packathon-2025");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const packathonImages = [
    {
      src: "/assets/images/gallery__rectangle_90__153_4469.webp",
      alt: "Team celebrating in pink shirts with trophy",
      span: "col-span-1 md:col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/assets/images/gallery__rectangle_91__153_4471.webp",
      alt: "Volunteer speaking into microphone",
      span: "col-span-1 md:col-span-1",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/assets/images/gallery__rectangle_93__153_4467.webp",
      alt: "Packed audience in hall listening to presentation",
      span: "col-span-1 md:col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/assets/images/gallery__rectangle_94__153_4470.webp",
      alt: "Corporate team around stacked boxes",
      span: "col-span-1 md:col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/assets/images/gallery__rectangle_95__153_4472.webp",
      alt: "Care Packs stacked neatly in rows",
      span: "col-span-1 md:col-span-1",
      aspect: "aspect-square",
    },
    {
      src: "/assets/images/gallery__rectangle_96__153_4474.webp",
      alt: "Panel discussion with leaders on stage",
      span: "col-span-1 md:col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/assets/images/gallery__rectangle_97__153_4468.webp",
      alt: "Packing table assembly session",
      span: "col-span-1 md:col-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/assets/images/gallery__rectangle_102__153_4473.webp",
      alt: "Folding corrugated cardboard care boxes",
      span: "col-span-1 md:col-span-1",
      aspect: "aspect-[4/3]",
    },
  ];

  const ciscoImages = Array.from({ length: 12 }, (_, i) => ({
    src: `/assets/images/cisco-event-${i + 1}.jpg`,
    alt: `Cisco Event volunteer packing photo ${i + 1}`,
  }));

  const launchEventImages = [
    {
      src: "/assets/images/care-packs-launch-event-1.webp",
      alt: "Care Packs Launch Event founders and trustees",
    },
    {
      src: "/assets/images/care-packs-launch-event-2.webp",
      alt: "Volunteer with stacked boxes at launch event",
    },
    {
      src: "/assets/images/our_impact__care_packs_launch_event__58_1626.webp",
      alt: "Launch event packing floor view",
    },
    {
      src: "/assets/images/Copy_of_DSC08711_1_21_1753.webp",
      alt: "All volunteers group photo at Care Packs launch",
    },
    {
      src: "/assets/images/Copy_of_DSC08607_1_21_1659.webp",
      alt: "Launch event presentation and stage",
    },
    {
      src: "/assets/images/DSC08980_1_21_1648.webp",
      alt: "Volunteers receiving awards and recognition",
    },
    {
      src: "/assets/images/Rectangle_12_21_1632.webp",
      alt: "Boxes ready for council distribution",
    },
    {
      src: "/assets/images/stories__community_impact__58_4745.webp",
      alt: "Launch event exhibition display table",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-[#f8f6f7] overflow-hidden pt-12 pb-10 md:py-16">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/assets/images/gallery-hero-bg.webp"
            alt="Care packs built"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white" />

        <div className="relative z-10 max-w-[1220px] mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-3">
            GALLERY
          </span>
          <h1 className="text-[32px] sm:text-[42px] md:text-[48px] leading-[1.15] font-semibold text-[#1b1b1b] max-w-[800px] mb-4">
            Care Packs, where the packs get built, and what changed this quarter
          </h1>
          <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.6] text-[#4a4a53] max-w-[720px] mb-8">
            Packing days, Packathons and delivery days the moments behind the numbers, from our first 300-pack launch to corporate teams building hundreds in an afternoon.
          </p>

          {/* Magenta Stat Block */}
          <div className="w-full max-w-[720px] bg-[#ec008c] rounded-[12px] p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white text-center shadow-md">
            <div>
              <div className="text-[26px] sm:text-[30px] font-bold leading-tight mb-0.5">
                548
              </div>
              <div className="text-[12px] text-white/90">Volunteers in 2025</div>
            </div>
            <div>
              <div className="text-[26px] sm:text-[30px] font-bold leading-tight mb-0.5">
                2,163
              </div>
              <div className="text-[12px] text-white/90">Volunteer hours</div>
            </div>
            <div>
              <div className="text-[26px] sm:text-[30px] font-bold leading-tight mb-0.5">
                144
              </div>
              <div className="text-[12px] text-white/90">Companies involved</div>
            </div>
            <div>
              <div className="text-[26px] sm:text-[30px] font-bold leading-tight mb-0.5">
                ~400
              </div>
              <div className="text-[12px] text-white/90">Packs from a team of 20</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Bar */}
      <div className="w-full bg-white border-b border-[#ececec] py-3.5 sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-[1220px] mx-auto px-4 md:px-6 flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab("packathon-2025")}
            className={`px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-medium transition-all whitespace-nowrap cursor-pointer ${
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
            className={`px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-medium transition-all whitespace-nowrap cursor-pointer ${
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
            className={`px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-medium transition-all whitespace-nowrap cursor-pointer ${
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
          {/* 1. Packathon 2025 Grid */}
          {activeTab === "packathon-2025" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {packathonImages.map((img, i) => (
                <div
                  key={i}
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

          {/* 3. Care Packs Launch Event Grid */}
          {activeTab === "care-packs-launch" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {launchEventImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImage(img.src)}
                  className="group relative aspect-[4/3] rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer bg-gray-100 border border-gray-100"
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
