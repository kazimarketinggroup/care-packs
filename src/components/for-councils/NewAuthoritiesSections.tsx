"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

/* ── Section 1: Stats Bar ── */
export function StatsBar() {
  const stats = [
    { value: "4", label: "LA partnerships in 2025" },
    { value: "8", label: "Total distribution partners" },
    { value: "3,490", label: "Packs delivered" },
    { value: "Free", label: "Cost to partner authority" },
  ];

  return (
    <section className="w-full bg-white pt-10 pb-6">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] p-6 sm:p-7 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-center"
            >
              <span className="text-[34px] sm:text-[40px] md:text-[44px] font-bold text-[#ec008c] leading-none mb-2">
                {stat.value}
              </span>
              <span className="text-[13px] sm:text-[14px] font-medium text-[#4a4a53]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 2: Why Partner with Care Packs? ── */
export function WhyPartnerSection() {
  const leftItems = [
    {
      title: "Completely free",
      desc: "Packs are provided at no cost to your organisation. We fund procurement through corporate donations and fundraising.",
    },
    {
      title: "High-quality packs",
      desc: "Each baby pack contains eight specific items to a consistent specification. You can rely on quality.",
    },
    {
      title: "Safeguarding-first",
      desc: "Our model is designed around safeguarding best practice. We do not require partner organisations to share beneficiary data with us.",
    },
  ];

  const rightItems = [
    {
      title: "Positive press",
      desc: "Walsall Council received positive local press coverage for its Care Packs partnership. We support joint communications.",
    },
    {
      title: "Recurring supply",
      desc: "Active partners receive regular pack allocations, not one-off donations, as we build toward monthly supply cycles.",
    },
    {
      title: "Impact evidence",
      desc: "We publish annual impact reports and can support your own reporting with aggregated delivery data.",
    },
  ];

  return (
    <section id="why-partner" className="w-full bg-white py-14 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <h2 className="text-[28px] sm:text-[34px] font-bold text-[#1b1b1b] tracking-tight mb-10 sm:mb-14">
          Why partner with Care Packs?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative">
          {/* Left Column */}
          <div className="space-y-9 sm:space-y-10">
            {leftItems.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#1b1b1b] mb-2">
                  {item.title}
                </h3>
                <p className="text-[14.5px] sm:text-[15px] leading-[24px] text-[#4a4a53]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Dividing border visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200" />

          {/* Right Column */}
          <div className="space-y-9 sm:space-y-10 lg:pl-6">
            {rightItems.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#1b1b1b] mb-2">
                  {item.title}
                </h3>
                <p className="text-[14.5px] sm:text-[15px] leading-[24px] text-[#4a4a53]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section 3: Onboarding Process ── */
export function OnboardingProcessSection() {
  const steps = [
    {
      step: 1,
      title: "Initial contact",
      desc: "Complete our contact form or email our Director of Distribution. We'll respond within 2 working days.",
    },
    {
      step: 2,
      title: "Needs assessment call",
      desc: "A 30-minute conversation to understand your organisation's beneficiary profile, referral capacity and geographic area.",
    },
    {
      step: 3,
      title: "Agree referral criteria",
      desc: "We'll agree the eligibility criteria that will govern which families receive packs through your organisation.",
    },
    {
      step: 4,
      title: "Sign data-sharing agreement",
      desc: "A simple, GDPR-compliant agreement. Typically completed within one week.",
    },
    {
      step: 5,
      title: "First delivery",
      desc: "Your first pack allocation is confirmed and delivered. We'll follow up to check all went smoothly.",
    },
  ];

  return (
    <section id="onboarding-steps" className="w-full bg-white py-14 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Image with boxes in X formation */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-gray-100 border border-black/[0.04]">
              <Image
                src="/assets/images/for_councils_new_authorities__1765806963130_1__107_1322.webp"
                alt="Care Packs team with boxes arranged in X shape"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: 5 Steps */}
          <div className="lg:col-span-7">
            <h3 className="text-[26px] sm:text-[30px] font-bold text-[#1b1b1b] tracking-tight mb-8">
              Onboarding process
            </h3>

            <div className="space-y-6">
              {steps.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#ec008c] text-white flex items-center justify-center font-bold text-[14px] shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-[16px] sm:text-[17px] font-bold text-[#1b1b1b] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[14px] sm:text-[14.5px] leading-[22px] text-[#4a4a53]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section 4: Speak to the Team & Form ── */
export function SpeakToTheTeamSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    role: "",
    enquiryType: "New authority partnership",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="speak-to-the-team" className="w-full bg-white py-14 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        <h3 className="text-[26px] sm:text-[32px] font-bold text-[#1b1b1b] tracking-tight mb-4">
          Speak to the team
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Details */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#4a4a53]">
              Speak to our distribution team about partnership, referrals, onboarding or any other council and public sector enquiry.
            </p>

            {/* Response times card */}
            <div className="bg-[#fcfcfe] rounded-[14px] p-5 sm:p-6 border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
              <h4 className="text-[15px] sm:text-[16px] font-bold text-[#1b1b1b] mb-2">
                Response times
              </h4>
              <p className="text-[13.5px] sm:text-[14px] leading-[22px] text-[#555]">
                We aim to respond to all council enquiries within 2 working days. Urgent safeguarding concerns will be escalated immediately.
              </p>
            </div>

            {/* Registered address card */}
            <div className="bg-[#fcfcfe] rounded-[14px] p-5 sm:p-6 border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
              <h4 className="text-[15px] sm:text-[16px] font-bold text-[#1b1b1b] mb-2">
                Registered address
              </h4>
              <p className="text-[13.5px] sm:text-[14px] leading-[22px] text-[#555]">
                Care Packs<br />
                12 Blue Cedar Drive<br />
                Streetly, Sutton Coldfield<br />
                B74 2AE
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="bg-[#fff2f9] border border-[#fbdbe9] rounded-[16px] p-8 sm:p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-[#ec008c] text-white flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-[20px] sm:text-[22px] font-bold text-[#1b1b1b] mb-2">
                  Enquiry Received
                </h4>
                <p className="text-[14.5px] sm:text-[15px] leading-[24px] text-[#4a4a53] max-w-[440px] mx-auto mb-6">
                  Thank you for reaching out. Our distribution team will review your details and respond within 2 working days.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 h-[40px] bg-white border border-gray-300 text-[14px] font-semibold rounded-[6px] text-[#1b1b1b] hover:bg-gray-50"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1b1b1b] mb-1.5">
                      Your name <span className="text-[#ec008c]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-[46px] px-4 rounded-[8px] border border-gray-300 bg-white text-[14.5px] text-[#1b1b1b] placeholder:text-gray-400 focus:outline-none focus:border-[#ec008c] focus:ring-1 focus:ring-[#ec008c]"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1b1b1b] mb-1.5">
                      Organisation <span className="text-[#ec008c]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ansell Council"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full h-[46px] px-4 rounded-[8px] border border-gray-300 bg-white text-[14.5px] text-[#1b1b1b] placeholder:text-gray-400 focus:outline-none focus:border-[#ec008c] focus:ring-1 focus:ring-[#ec008c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1b1b1b] mb-1.5">
                      Your role
                    </label>
                    <input
                      type="text"
                      placeholder="Family Hub Manager"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full h-[46px] px-4 rounded-[8px] border border-gray-300 bg-white text-[14.5px] text-[#1b1b1b] placeholder:text-gray-400 focus:outline-none focus:border-[#ec008c] focus:ring-1 focus:ring-[#ec008c]"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1b1b1b] mb-1.5">
                      Enquiry type
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full h-[46px] px-4 rounded-[8px] border border-gray-300 bg-white text-[14.5px] text-[#1b1b1b] focus:outline-none focus:border-[#ec008c] focus:ring-1 focus:ring-[#ec008c]"
                    >
                      <option value="New authority partnership">New authority partnership</option>
                      <option value="Referral enquiry">Referral enquiry</option>
                      <option value="Bulk allocation">Bulk allocation</option>
                      <option value="Other public sector query">Other public sector query</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1b1b1b] mb-1.5">
                      Email <span className="text-[#ec008c]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@ansell.gov.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-[46px] px-4 rounded-[8px] border border-gray-300 bg-white text-[14.5px] text-[#1b1b1b] placeholder:text-gray-400 focus:outline-none focus:border-[#ec008c] focus:ring-1 focus:ring-[#ec008c]"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1b1b1b] mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Optional"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-[46px] px-4 rounded-[8px] border border-gray-300 bg-white text-[14.5px] text-[#1b1b1b] placeholder:text-gray-400 focus:outline-none focus:border-[#ec008c] focus:ring-1 focus:ring-[#ec008c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#1b1b1b] mb-1.5">
                    Message <span className="text-[#ec008c]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your organisation, the families you support, and what you're looking for from Care Packs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-[8px] border border-gray-300 bg-white text-[14.5px] text-[#1b1b1b] placeholder:text-gray-400 focus:outline-none focus:border-[#ec008c] focus:ring-1 focus:ring-[#ec008c]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 h-[46px] bg-[#ec008c] hover:bg-[#d6007e] text-white text-[15px] font-semibold rounded-[6px] transition-colors shadow-sm cursor-pointer"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section 5: Pre-Footer CTA for New Authorities ── */
export function NewAuthoritiesCTABanner() {
  const handleDonateClick = () => {
    window.dispatchEvent(new CustomEvent("open-donation-modal", { detail: { amount: 10 } }));
  };

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
          <button
            type="button"
            onClick={handleDonateClick}
            className="px-7 h-[46px] bg-[#ec008c] hover:bg-[#d6007e] text-white text-[15px] font-semibold rounded-[6px] inline-flex items-center justify-center transition-colors shadow-sm cursor-pointer"
          >
            Donate Now
          </button>
          <Link
            href="/get-involved"
            className="px-7 h-[46px] bg-white hover:bg-gray-50 text-[#1b1b1b] border border-gray-300 text-[15px] font-semibold rounded-[6px] inline-flex items-center justify-center transition-colors shadow-sm cursor-pointer"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function NewAuthoritiesSections() {
  return (
    <>
      <StatsBar />
      <WhyPartnerSection />
      <OnboardingProcessSection />
      <SpeakToTheTeamSection />
      <NewAuthoritiesCTABanner />
    </>
  );
}
