import React from "react";

export function EarlyYearsPovertyDataSection() {
  const cards = [
    {
      stat: "1 in 5",
      desc: "UK children growing up in poverty",
      source: "Source: Child Poverty Action Group",
    },
    {
      stat: "210,000",
      desc: "Families supported by Baby Bank Alliance network in 2025",
      source: "Source: Baby Bank Alliance 2025 Impact Report",
    },
    {
      stat: "19m",
      desc: "Essential items provided by Baby Bank Alliance network annually",
      source: "Source: Baby Bank Alliance 2025",
    },
    {
      stat: "£10",
      desc: "Cost of a complete baby care pack from Care Packs",
      source: "Source: Care Packs 2025 Impact Statement",
    },
    {
      stat: "4",
      desc: "Local authority partnerships established in our first year",
      source: "Source: Care Packs 2025 Impact Statement",
    },
    {
      stat: "8",
      desc: "Distribution partner organisations",
      source: "Source: Care Packs 2025 Impact Statement",
    },
  ];

  return (
    <section id="early-years-poverty-data" className="w-full bg-white py-14 border-b border-[#f0f0f0] scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
          EVIDENCE
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-3">
          Early Years Poverty Data
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#4a4a53] max-w-[800px] leading-relaxed mb-10">
          Care Packs' Phase 1a focus on early years poverty is grounded in documented need. Hygiene poverty among families with babies is a significant and growing challenge across the UK.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-white border border-[#e8e8ee] rounded-[14px] p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="text-[28px] sm:text-[32px] font-bold text-[#ec008c] leading-tight mb-2">
                  {c.stat}
                </div>
                <p className="text-[14px] font-medium text-[#1b1b1b] leading-snug mb-4">
                  {c.desc}
                </p>
              </div>
              <div className="text-[11px] text-[#858590]">{c.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReferralOutcomesSection() {
  const outcomes = [
    {
      title: "Walsall Council",
      desc: "500+ packs distributed through four Family Hubs and community shops. Walsall Council confirmed continued demand and described Care Packs' support as outstanding.",
    },
    {
      title: "Babyzone",
      desc: "700 packs distributed across Croydon, Barking & Dagenham and Barnet in a six-week window during 2026.",
    },
    {
      title: "Bow Food Bank",
      desc: "300 packs delivered to Bow Food Bank as part of the same six-week distribution in 2026.",
    },
    {
      title: "Launch event",
      desc: "Families connected through local authority and charity networks received packs from the May 2025 launch event, with 300 assembled in under an hour.",
    },
  ];

  return (
    <section id="referral-outcomes" className="w-full bg-[#fdfafc] py-14 border-b border-[#f0f0f0] scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
          EVIDENCE
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-3">
          Referral Outcomes
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#4a4a53] max-w-[800px] leading-relaxed mb-10">
          Care Packs tracks packs delivered to distribution partners. Collection of direct beneficiary outcome data is at an early stage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((o, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ececef] rounded-[14px] p-6 sm:p-7 shadow-sm"
            >
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#1b1b1b] mb-2">
                {o.title}
              </h3>
              <p className="text-[14px] text-[#55555e] leading-relaxed">
                {o.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MethodAndLimitationsSection() {
  const limitations = [
    "The £92,010 figure is an operational report from leadership, not a filed annual account.",
    "Pack delivery figures represent packs transferred to distribution partners, not confirmed receipt by individual families.",
    "Volunteer hours (2,163) are based on event estimates and may not capture all informal volunteering.",
    "Company count (144) includes all organisations who participated in any capacity, including at Packathon events.",
    "Care Packs has not yet filed formal accounts with the Charity Commission due to its registration date.",
  ];

  return (
    <section id="method-and-limitations" className="w-full bg-white py-14 scroll-mt-24">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#ec008c] uppercase mb-2 block">
          EVIDENCE
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#1b1b1b] leading-tight mb-3">
          Method &amp; Limitations
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#4a4a53] max-w-[850px] leading-relaxed mb-10">
          Care Packs publishes what it knows and says clearly what it does not. All figures cited on this website come from the 2025 Impact Statement published by Care Packs leadership, or from third-party sources such as Walsall Council announcements and partner statements.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: Limitations list */}
          <div>
            <h3 className="text-[16px] font-bold text-[#1b1b1b] mb-4">
              The following limitations apply to the data presented:
            </h3>
            <div className="space-y-3.5">
              {limitations.map((lim, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#ec008c] mt-2 shrink-0" />
                  <span className="text-[14px] text-[#3e3e46] leading-relaxed">
                    {lim}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Commitment Card */}
          <div className="bg-[#fff6fb] border border-[#ec008c]/25 rounded-[16px] p-6 sm:p-8 shadow-sm">
            <h3 className="text-[18px] sm:text-[20px] font-bold text-[#1b1b1b] mb-4">
              Our commitment to transparency
            </h3>
            <div className="space-y-4 text-[14px] text-[#4a4a53] leading-relaxed">
              <p>
                Care Packs is committed to publishing verified figures and distinguishing clearly between leadership reports and formally audited data.
              </p>
              <p>
                As the charity matures, we intend to develop a more rigorous beneficiary outcome tracking system in partnership with our distribution partners. We welcome feedback from councils, charities and academics who can help improve our measurement approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
