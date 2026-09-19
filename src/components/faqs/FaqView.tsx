"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

const faqData: FaqCategory[] = [
  {
    title: "About Care Packs",
    items: [
      {
        id: "what-is-care-packs",
        question: "What is Care Packs?",
        answer:
          "Care Packs is a UK registered charity (No. 1209874) that turns corporate goodwill into practical support for families experiencing poverty. Companies fund and build packs of everyday essentials, and our distribution partners get them directly to the families who need them most.",
      },
      {
        id: "what-goes-into-a-care-pack",
        question: "What goes into a care pack?",
        answer:
          "Packs contain everyday essentials such as toiletries, hygiene products, household basics and items for children. Contents are tailored with our distribution partners so every pack matches what families in their community actually need.",
      },
      {
        id: "who-receives-the-packs",
        question: "Who receives the packs?",
        answer:
          "Packs reach families through trusted local organisations — councils, food banks, schools and community charities — who already support households in hardship and know exactly where help is needed.",
      },
    ],
  },
  {
    title: "Corporate partnerships",
    items: [
      {
        id: "how-can-my-company-get-involved",
        question: "How can my company get involved?",
        answer:
          "There are several ways in: sponsor a pack-building event, take part in our annual Packathon, provide ongoing funding, or run a team day where your staff build packs together. Get in touch and we will shape something that fits your team and budget.",
      },
      {
        id: "what-is-a-pack-building-team-day",
        question: "What is a pack-building team day?",
        answer:
          "Your team comes together — on-site or at one of our venues — to assemble care packs from supplied stock. It is a hands-on, meaningful volunteering experience, and every pack built goes straight to a family through our distribution network.",
      },
      {
        id: "what-is-the-packathon",
        question: "What is the Packathon?",
        answer:
          "Packathon is our flagship annual event where partner companies come together to build thousands of packs in a single day. Sponsors and participating companies get branding, team places and a measurable impact report afterwards.",
      },
      {
        id: "can-we-see-the-impact-of-our-support",
        question: "Can we see the impact of our support?",
        answer:
          "Yes. Every corporate partner receives clear reporting: how many packs were built, where they were distributed and the difference they made. Impact can be translated into everyday terms your team will connect with.",
      },
    ],
  },
  {
    title: "Distribution partners",
    items: [
      {
        id: "who-can-become-a-distribution-partner",
        question: "Who can become a distribution partner?",
        answer:
          "We work with councils, food banks, schools, baby banks and community charities that already support families in poverty. If your organisation reaches households in hardship, we would love to talk.",
      },
      {
        id: "how-does-the-partnership-work-in-practice",
        question: "How does the partnership work in practice?",
        answer:
          "We agree the pack contents and volumes your community needs, then deliver packs to you on a schedule that works. Your team hands them to the families you support — no extra administration or cost for your organisation.",
      },
      {
        id: "is-there-a-cost-for-distribution-partners",
        question: "Is there a cost for distribution partners?",
        answer:
          "No. Packs are funded by our corporate partners, so distribution partners receive them free of charge.",
      },
    ],
  },
  {
    title: "Donations & fundraising",
    items: [
      {
        id: "can-individuals-donate",
        question: "Can individuals donate?",
        answer:
          "Yes — individuals can support Care Packs through donations and fundraising. Every contribution goes towards pack contents and getting them to families.",
      },
      {
        id: "can-i-donate-items-instead-of-money",
        question: "Can I donate items instead of money?",
        answer:
          "Because pack contents are standardised for quality and safety, we generally source items in bulk rather than accepting individual product donations. Get in touch if your company can supply products at scale — that is always welcome.",
      },
    ],
  },
];

export default function FaqView() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-20 md:pb-24">
        {/* Back Link */}
        <div className="mb-6 md:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#4b5563] hover:text-[#111827] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-[#6b7280]" />
            <span>Back to Care Packs</span>
          </Link>
        </div>

        {/* Header Pink Accent Bar */}
        <div className="w-12 h-[3.5px] bg-[#ec008c] rounded-full mb-3" />

        {/* Page Title */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[44px] font-bold text-[#111827] tracking-tight leading-[1.18] mb-3">
          Frequently asked questions
        </h1>

        {/* Subtitle */}
        <p className="text-[15.5px] sm:text-[16px] leading-[26px] text-[#4b5563] mb-12 sm:mb-14">
          Everything you need to know about partnering with Care Packs, building packs and getting essentials to families. Can&apos;t find your answer?{" "}
          <Link
            href="/contact"
            className="text-[#ec008c] font-semibold underline underline-offset-2 hover:text-[#d6007e] transition-colors"
          >
            Contact us.
          </Link>
        </p>

        {/* FAQ Categories */}
        <div className="space-y-12 sm:space-y-14">
          {faqData.map((category) => (
            <section key={category.title} className="flex flex-col">
              {/* Category Pink Bar */}
              <div className="w-12 h-[3.5px] bg-[#ec008c] rounded-full mb-3" />

              {/* Category Title */}
              <h2 className="text-[22px] sm:text-[25px] font-bold text-[#111827] leading-snug mb-5">
                {category.title}
              </h2>

              {/* Category Accordion Items */}
              <div className="flex flex-col space-y-3.5">
                {category.items.map((item) => {
                  const isOpen = !!openItems[item.id];
                  return (
                    <div
                      key={item.id}
                      className={`bg-white rounded-[14px] border transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] ${
                        isOpen
                          ? "border-[#ec008c]/50 ring-1 ring-[#ec008c]/20"
                          : "border-[#e5e7eb] hover:border-[#d1d5db]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-center justify-between py-4 sm:py-[18px] px-5 sm:px-6 text-left cursor-pointer group select-none"
                        aria-expanded={isOpen}
                      >
                        <span className="text-[15.5px] sm:text-[16.5px] font-semibold text-[#1f2937] group-hover:text-[#111827] pr-4 transition-colors">
                          {item.question}
                        </span>
                        <span
                          className={`shrink-0 w-6 h-6 flex items-center justify-center text-[#ec008c] font-light text-[24px] leading-none transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          +
                        </span>
                      </button>

                      {/* Smooth collapsible content */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 pb-5"
                            : "grid-rows-[0fr] opacity-0 pb-0"
                        }`}
                      >
                        <div className="overflow-hidden px-5 sm:px-6">
                          <p className="text-[14.5px] sm:text-[15px] leading-[25px] text-[#4b5563] pt-1 border-t border-gray-100">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
