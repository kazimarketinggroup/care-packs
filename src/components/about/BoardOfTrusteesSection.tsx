"use client";

import React from "react";
import Image from "next/image";

interface Trustee {
  name: string;
  role: string;
  title: string;
  company: string;
  image: string;
}

const trustees: Trustee[] = [
  {
    name: "Jay Rohman",
    role: "Chair",
    title: "Head of IT Sourcing",
    company: "@ Lloyds Banking Group",
    image: "/assets/images/trustee-jay-rohman.webp",
  },
  {
    name: "Dr Colin Williams",
    role: "Vice Chair",
    title: "CTO – Networks & Security",
    company: "@Computacenter",
    image: "/assets/images/trustee-dr-colin-williams.webp",
  },
  {
    name: "Farida Gibbs",
    role: "Treasurer",
    title: "CEO @ Gibbs Consulting &",
    company: "President, Atrium EMEA",
    image: "/assets/images/trustee-farida-gibbs.webp",
  },
  {
    name: "Karyn Sheridan",
    role: "Lawyer",
    title: "Senior Legal Counsel",
    company: "@Lenovo",
    image: "/assets/images/trustee-karyn-sheridan.webp",
  },
];

export default function BoardOfTrusteesSection() {
  return (
    <section id="board-of-trustees" className="w-full bg-white py-12 sm:py-16 md:py-20 scroll-mt-24">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <h2 className="text-[32px] sm:text-[38px] font-semibold text-[#1b1b1b] tracking-tight mb-8 sm:mb-12">
          Board of trustees
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustees.map((trustee) => (
            <div
              key={trustee.name}
              className="bg-white rounded-[6px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.09)] transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                {/* Top Pink Accent Bar */}
                <div className="w-6 h-[3px] bg-[#ec008c] mb-4" />

                {/* Photo */}
                <div className="relative w-full aspect-[4/3.2] rounded-[3px] overflow-hidden bg-[#f4f4f6] mb-4">
                  <Image
                    src={trustee.image}
                    alt={trustee.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* Name */}
                <h3 className="text-[17px] font-bold text-[#1b1b1b] leading-tight mb-1">
                  {trustee.name}
                </h3>

                {/* Role */}
                <p className="text-[13px] text-[#6b7280] font-normal mb-3">
                  {trustee.role}
                </p>

                {/* Fine Divider Line */}
                <hr className="border-t border-gray-100 my-3" />

                {/* Title & Organization */}
                <div className="text-[13px] sm:text-[13.5px] text-[#4a4a53] leading-[20px]">
                  <p>{trustee.title}</p>
                  <p>{trustee.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
