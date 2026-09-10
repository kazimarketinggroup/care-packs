"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

/* ── Section 1: Refer a Family ── */
export function ReferAFamilySection() {
  return (
    <section id="refer-a-family" className="w-full bg-white pt-14 sm:pt-16 md:pt-20 pb-10 scroll-mt-20">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <h2 className="text-[28px] sm:text-[34px] font-bold text-[#1b1b1b] tracking-tight mb-4">
          Refer a Family
        </h2>
        <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] max-w-[920px] mb-12">
          If your organisation is already a Care Packs distribution partner, use this page to submit a referral. If you are not yet a partner, please contact us to discuss onboarding first.
        </p>

        {/* What the partnership involves */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          <div className="lg:col-span-7">
            <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1b1b1b] mb-4">
              What the partnership involves
            </h3>
            <div className="space-y-4 text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53]">
              <p>
                Care Packs provides direct pack delivery to partner councils, volunteers and distribution points. There is no financial or administrative burden to the authority and no competing referral or safeguarding protocols.
              </p>
              <p>
                Packs are provided at no cost to the council. We ask only that partners confirm receipt, provide basic distribution data, and flag any safeguarding concerns through agreed channels.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-gray-100 border border-black/[0.04]">
              <Image
                src="/assets/images/for_councils_working_with_us__1765806963130_1__107_740.webp"
                alt="Care Packs team in pink shirts"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* 3 Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {[
            {
              step: "01",
              title: "Confirm eligibility",
              desc: "Check the family meets our basic criteria: experiencing hardship, pregnant or with a baby under 1.",
            },
            {
              step: "02",
              title: "Fill in a short referral form",
              desc: "Only 5 key fields needed: child age, borough/postcode, delivery preference, any specific needs.",
            },
            {
              step: "03",
              title: "Pack delivered and confirm",
              desc: "Dispatched within 24-48 hours. Delivered to your hub or directly to the family.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[14px] p-6 border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            >
              <span className="text-[26px] sm:text-[28px] font-bold text-[#ec008c] mb-2 block">
                {item.step}
              </span>
              <h4 className="text-[16px] sm:text-[17px] font-bold text-[#1b1b1b] mb-2">
                {item.title}
              </h4>
              <p className="text-[13.5px] sm:text-[14px] leading-[22px] text-[#555]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 2: Core Eligibility Criteria ── */
const CRITERIA_DATA = [
  {
    id: "financial-hardship",
    name: "Financial hardship",
    detail:
      "The family is experiencing financial hardship and is unable to afford essential baby care items. We do not require means-testing or proof of benefits: professional judgement of the referring officer is sufficient.",
  },
  {
    id: "baby-young-child",
    name: "Baby or young child present",
    detail:
      "The family includes a mother who is expecting (third trimester) or has a child under 1 year of age (or under 5 for general toddler packs where available).",
  },
  {
    id: "active-area",
    name: "Living in active area",
    detail:
      "The family resides in one of our active local authority partner zones (e.g. Walsall, Birmingham, Wolverhampton, Sandwell, Coventry, Solihull).",
  },
  {
    id: "family-consent",
    name: "Family consent",
    detail:
      "The family has consented to receiving a Care Pack and to having their anonymised referral details processed for distribution purposes.",
  },
  {
    id: "needs-identification",
    name: "Needs identification",
    detail:
      "The referring officer has identified that an immediate supply of essential hygiene and clothing items will relieve hardship and provide practical dignity.",
  },
  {
    id: "uk-resident",
    name: "UK resident",
    detail:
      "The family is currently living in the UK. No immigration status check is required or requested.",
  },
];

export function EligibilityCriteriaSection() {
  const [selectedCriteria, setSelectedCriteria] = useState(CRITERIA_DATA[0]);

  return (
    <section id="eligibility-criteria" className="w-full bg-white py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <h3 className="text-[22px] sm:text-[26px] font-bold text-[#1b1b1b] mb-3">
          Core eligibility criteria
        </h3>
        <p className="text-[14.5px] sm:text-[15.5px] leading-[25px] text-[#4a4a53] mb-8 max-w-[850px]">
          The following criteria guide your professional judgement when distributing packs. Packs are available to families who meet our core criteria:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Left Column: List of items */}
          <div className="lg:col-span-6 space-y-2.5">
            {CRITERIA_DATA.map((item) => {
              const isSelected = selectedCriteria.id === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedCriteria(item)}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-[12px] border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#ec008c] bg-[#fff5fa] shadow-sm"
                      : "border-gray-200/80 bg-white hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`text-[15px] sm:text-[15.5px] font-semibold ${
                      isSelected ? "text-[#ec008c]" : "text-[#1b1b1b]"
                    }`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`text-lg font-bold transition-transform ${
                      isSelected ? "text-[#ec008c] translate-x-1" : "text-gray-400"
                    }`}
                  >
                    ›
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Pink Detail Card */}
          <div className="lg:col-span-6">
            <div className="h-full bg-[#fff0f7] border border-[#fbdbe9] rounded-[20px] p-7 sm:p-10 flex flex-col justify-center">
              <h4 className="text-[22px] sm:text-[26px] font-bold text-[#1b1b1b] mb-4">
                {selectedCriteria.name}
              </h4>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53]">
                {selectedCriteria.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section 3: Who Can Make a Referral ── */
export function WhoCanReferSection() {
  const professionals = [
    "Local authority social workers",
    "Health visitors and midwives",
    "Family hub and children's centre staff",
    "Early help practitioners",
    "Housing association support officers",
    "Food bank and pantry coordinators",
    "Frontline voluntary and community sector practitioners",
  ];

  return (
    <section id="who-can-refer" className="w-full bg-white py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image of delivery man loading van */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] max-w-[440px] mx-auto rounded-[18px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-gray-100 border border-black/[0.04]">
              <Image
                src="/assets/images/for_councils_for_council_officers__1765806963130_1__107_975.webp"
                alt="Care Packs delivery worker stacking boxes into pink van"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: List of professionals */}
          <div className="lg:col-span-7">
            <h3 className="text-[24px] sm:text-[28px] font-bold text-[#1b1b1b] tracking-tight mb-3">
              Who can make a referral
            </h3>
            <p className="text-[14.5px] sm:text-[15.5px] leading-[25px] text-[#4a4a53] mb-6">
              Referrals must be made by a recognized professional working directly with families in an official capacity:
            </p>

            <div className="space-y-3">
              {professionals.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fff2f9] border border-[#fbdbe9] rounded-[10px] px-4.5 py-3 sm:py-3.5 flex items-center gap-3"
                >
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#ec008c] shrink-0" />
                  <span className="text-[14px] sm:text-[15px] font-medium text-[#1b1b1b]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section 4: Timescales and Logistics ── */
export function TimescalesAndLogisticsSection() {
  return (
    <section id="timescales-logistics" className="w-full bg-white pb-14 sm:pb-16 md:pb-20 scroll-mt-20">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Standard timescales */}
          <div>
            <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1b1b1b] mb-2.5">
              Standard timescales
            </h3>
            <p className="text-[14.5px] sm:text-[15px] leading-[24px] text-[#4a4a53] mb-6">
              Distribution timescales depend on the type of allocation and your partner agreement:
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Emergency allocations (24-48 hours)",
                  desc: "Dispatched via courier or direct drop for urgent safeguarding situations.",
                },
                {
                  title: "Standard partner delivery (5-7 days)",
                  desc: "Monthly or bi-weekly scheduled restock deliveries to agreed partner distribution hubs.",
                },
                {
                  title: "Bulk allocations (200+ packs)",
                  desc: "Larger quarterly shipments requiring forklift/pallet access. 2-3 weeks notice needed.",
                },
                {
                  title: "Out-of-area requests",
                  desc: "Considered on a case-by-case basis subject to available stock and transport.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcfcfe] rounded-[12px] p-4.5 border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
                >
                  <h4 className="text-[15px] sm:text-[15.5px] font-bold text-[#1b1b1b] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] leading-[21px] text-[#555]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Delivery logistics */}
          <div>
            <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1b1b1b] mb-2.5">
              Delivery logistics
            </h3>
            <p className="text-[14.5px] sm:text-[15px] leading-[24px] text-[#4a4a53] mb-6">
              We offer flexible delivery methods to match your council or hub infrastructure:
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Direct delivery",
                  desc: "Care Packs delivers directly to agreed hub locations, children's centres, or civic offices.",
                },
                {
                  title: "Drop-off and storage delivery",
                  desc: "Packs delivered directly to partner storage spaces, with tracking manifests provided.",
                },
                {
                  title: "Collection",
                  desc: "Partner teams can arrange collection directly from our central packing warehouse by prior agreement.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcfcfe] rounded-[12px] p-4.5 border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
                >
                  <h4 className="text-[15px] sm:text-[15.5px] font-bold text-[#1b1b1b] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] leading-[21px] text-[#555]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section 5: Pre-Footer Banner for Council Officers ── */
export function ForCouncilOfficersCTABanner() {
  return (
    <section className="w-full bg-[#fff6fc] py-14 sm:py-16 md:py-20 border-t border-[#fce4f3]">
      <div className="max-w-[700px] mx-auto px-4 md:px-6 text-center">
        <h2 className="text-[26px] sm:text-[32px] font-bold text-[#1b1b1b] tracking-tight mb-4">
          Every Pack Starts With Someone Who Cares.
        </h2>
        <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] mb-8 max-w-[580px] mx-auto">
          Whether you donate, volunteer, fundraise or partner with us, your support can become something tangible for someone experiencing hardship.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/for-councils/for-council-officers#refer-a-family"
            className="px-7 h-[46px] bg-[#ec008c] hover:bg-[#d6007e] text-white text-[15px] font-semibold rounded-[6px] inline-flex items-center justify-center transition-colors shadow-sm cursor-pointer"
          >
            Refer Now
          </Link>
          <Link
            href="/for-councils/new-authorities#speak-to-the-team"
            className="px-7 h-[46px] bg-white hover:bg-gray-50 text-[#1b1b1b] border border-gray-300 text-[15px] font-semibold rounded-[6px] inline-flex items-center justify-center transition-colors shadow-sm cursor-pointer"
          >
            Partner with us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ForCouncilOfficersSections() {
  return (
    <>
      <ReferAFamilySection />
      <EligibilityCriteriaSection />
      <WhoCanReferSection />
      <TimescalesAndLogisticsSection />
      <ForCouncilOfficersCTABanner />
    </>
  );
}
