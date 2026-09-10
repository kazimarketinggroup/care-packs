"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

/* ── Section 1: Partnership Model ── */
export function PartnershipModelSection() {
  return (
    <section id="partnership-model" className="w-full bg-white pt-14 sm:pt-16 md:pt-20 pb-10 scroll-mt-20">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <h2 className="text-[28px] sm:text-[34px] font-bold text-[#1b1b1b] tracking-tight mb-4">
          Partnership Model
        </h2>
        <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] max-w-[920px] mb-12">
          Care Packs works with local authorities as distribution partners not as a grant body or policy partner. Our model is practical, low-burden and focused entirely on getting packs to families who need them.
        </p>

        {/* What the partnership involves */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          <div className="lg:col-span-7">
            <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1b1b1b] mb-4">
              What the partnership involves
            </h3>
            <div className="space-y-4 text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53]">
              <p>
                Care Packs provides packs. Local authority partners receive, manage and distribute them to families they already know and support. We do not require councils to build new referral infrastructure: we plug into existing family hubs, community stops and social care pathways.
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
                alt="Care Packs team at stadium in pink shirts"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* 6 Feature Cards (2 rows of 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {[
            {
              title: "No cost to the council",
              desc: "Packs are provided free of charge to local authority partners. We fund procurement through corporate donations, fundraising and the annual gala.",
            },
            {
              title: "Low administrative burden",
              desc: "We require only basic receipt confirmation and distribution data. No complex reporting, no cumbersome negotiations.",
            },
            {
              title: "Safeguarding-compliant",
              desc: "Our data-sharing agreement meets GDPR requirements and includes a clear safeguarding protocol. See our full data policy.",
            },
            {
              title: "Recurring supply",
              desc: "Active partners receive regular pack allocations, not one-off deliveries. We are building toward monthly supply cycles.",
            },
            {
              title: "Positive PR and CSR",
              desc: "Partnerships with Care Packs generate positive local press and provide council with evidence of community support activity.",
            },
            {
              title: "Flexible model",
              desc: "We work with councils, family hubs, community shops, food banks and housing associations. We adapt to your existing infrastructure.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-[14px] p-6 border border-gray-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#ec008c]/40 hover:shadow-[0_4px_16px_rgba(236,0,140,0.06)] transition-all"
            >
              <h4 className="text-[16px] sm:text-[17px] font-bold text-[#1b1b1b] mb-2.5">
                {card.title}
              </h4>
              <p className="text-[13.5px] sm:text-[14px] leading-[22px] text-[#555]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 2: Data and Safeguarding ── */
export function DataAndSafeguardingSection() {
  return (
    <section id="data-and-safeguarding" className="w-full bg-white py-14 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: Our approach to data */}
          <div>
            <h3 className="text-[24px] sm:text-[28px] font-bold text-[#1b1b1b] tracking-tight mb-5">
              Our approach to data
            </h3>
            <div className="space-y-4 text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53]">
              <p>
                Care Packs does not collect or process personal data about individual beneficiaries in the normal course of operations. Packs are distributed by our frontline partners (councils, family hubs and charities) who retain responsibility for their own beneficiary data under their own privacy framework.
              </p>
              <p>
                Where any data sharing is required between Care Packs and a partner organisation, that is governed by a written data-sharing agreement signed with the requirements of UK GDPR and the Data Protection Act 2018.
              </p>
              <p>
                Care Packs is committed to transparency in its own data practices. Our privacy policy governs how we use data about donors, volunteers, corporate partners and website visitors.
              </p>
            </div>
          </div>

          {/* Right Column: Safeguarding */}
          <div>
            <h3 className="text-[24px] sm:text-[28px] font-bold text-[#1b1b1b] tracking-tight mb-3">
              Safeguarding
            </h3>
            <p className="text-[14.5px] sm:text-[15px] leading-[24px] text-[#4a4a53] mb-5">
              Care Packs recognizes its responsibility to protect the welfare of vulnerable adults and children who may come into contact with our activities or receive our packs.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: "No direct beneficiary contact",
                  desc: "Care Packs does not contact beneficiaries directly, all communication is through the local partner.",
                },
                {
                  title: "Volunteer DBS checks",
                  desc: "We take steps to ensure volunteers who interact directly with partner organisations or children have clear DBS certificates.",
                },
                {
                  title: "Named safeguarding lead",
                  desc: "Care Packs has a designated safeguarding lead who can be contacted through partner escalation channels in case an urgent issue arises.",
                },
                {
                  title: "Partner vetting",
                  desc: "All distribution partners are expected to confirm they have their own safeguarding policies in place before receiving packs.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcfcfe] rounded-[12px] p-4 sm:p-4.5 border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
                >
                  <h4 className="text-[14.5px] sm:text-[15px] font-bold text-[#1b1b1b] mb-1">
                    {card.title}
                  </h4>
                  <p className="text-[13px] sm:text-[13.5px] leading-[20px] text-[#555]">
                    {card.desc}
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

/* ── Section 3: Service Specification ── */
export function ServiceSpecificationSection() {
  const carePacksProvides = [
    "Complete baby care packs, free of charge",
    "Delivery to an agreed hub or civic location or partner premises",
    "Pack specifications sheet for partner reference",
    "GDPR-compliant data-sharing agreement",
    "Dedicated onboarding support",
    "Co-branded joint PR opportunities and CSR pack",
    "Named Care Packs contact lead for partner communications",
  ];

  const requireFromPartners = [
    "Signed data-sharing agreement before first delivery",
    "Confirmation of receipt for each pack allocation",
    "Basic distribution data (number delivered, general area of distribution)",
    "Confirmation that your safeguarding policy is in place",
    "Agreement not to sell or charge for packs provided",
    "Nominated contact for day-to-day coordination",
    "Immediate notice of any damaged packs or shortages",
  ];

  return (
    <section id="service-specification" className="w-full bg-white pb-14 sm:pb-16 md:pb-20 scroll-mt-20">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* What Care Packs provides */}
          <div>
            <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1b1b1b] mb-5">
              What Care Packs provides
            </h3>
            <div className="space-y-3">
              {carePacksProvides.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fff2f9] border border-[#fbdbe9] rounded-[10px] px-4 py-3 sm:py-3.5 flex items-center gap-3"
                >
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#ec008c] shrink-0" />
                  <span className="text-[14px] sm:text-[14.5px] font-medium text-[#1b1b1b]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* What we require from partners */}
          <div>
            <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1b1b1b] mb-5">
              What we require from partners
            </h3>
            <div className="space-y-3">
              {requireFromPartners.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#f9f9fb] border border-gray-200/80 rounded-[10px] px-4 py-3 sm:py-3.5 flex items-center gap-3"
                >
                  <span className="w-2.5 h-2.5 rounded-sm bg-gray-400 shrink-0" />
                  <span className="text-[14px] sm:text-[14.5px] font-medium text-[#2c2c30]">
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

/* ── Section 4: Ready to Partner CTA ── */
export function ReadyToPartnerCTA() {
  return (
    <section className="w-full bg-[#fff6fc] py-14 sm:py-16 md:py-20 border-t border-[#fce4f3]">
      <div className="max-w-[700px] mx-auto px-4 md:px-6 text-center">
        <h2 className="text-[26px] sm:text-[32px] font-bold text-[#1b1b1b] tracking-tight mb-4">
          Ready to partner with Care Packs?
        </h2>
        <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53] mb-8 max-w-[580px] mx-auto">
          We are looking to expand across England and beyond. Talk to our distribution team to explore what a partnership could look like for your area.
        </p>
        <Link
          href="/for-councils/new-authorities#speak-to-the-team"
          className="inline-flex items-center justify-center px-8 h-[46px] bg-[#ec008c] hover:bg-[#d6007e] text-white text-[15px] font-semibold rounded-[6px] transition-colors shadow-sm cursor-pointer"
        >
          Speak to the team
        </Link>
      </div>
    </section>
  );
}

export default function WorkingWithUsSections() {
  return (
    <>
      <PartnershipModelSection />
      <DataAndSafeguardingSection />
      <ServiceSpecificationSection />
      <ReadyToPartnerCTA />
    </>
  );
}
