import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e1e1e] text-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-16 pb-12">
        
        {/* Top 5-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="flex flex-col">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90 w-fit">
              <Image
                src="/assets/icons/care-packs-footer-logo.svg"
                alt="Care Packs - A gift of Hope with Every Pack"
                width={162}
                height={49}
                className="w-[162px] h-[49px] object-contain"
              />
            </Link>
            <p className="mt-5 text-[13.5px] leading-[21px] text-[#c9c9d0] font-normal max-w-[260px]">
              Essential household packs for families living in poverty, distributed through local authority referral.
            </p>
            <p className="mt-4 text-[13px] leading-[16px] text-[#8e8e93] font-normal">
              Registered charity 1209874
            </p>
          </div>

          {/* Col 2: Our work */}
          <div>
            <h3 className="text-[13.5px] leading-[16px] font-bold text-white mb-4">
              Our work
            </h3>
            <ul className="space-y-[14px]">
              <li>
                <Link
                  href="/our-work/the-baby-pack"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  The baby pack
                </Link>
              </li>
              <li>
                <Link
                  href="/our-work/programmes"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Phase 1a: early years
                </Link>
              </li>
              <li>
                <Link
                  href="/about/how-we-work"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/impact/our-impact"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Impact and reporting
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: For councils */}
          <div>
            <h3 className="text-[13.5px] leading-[16px] font-bold text-white mb-4">
              For councils
            </h3>
            <ul className="space-y-[14px]">
              <li>
                <Link
                  href="/for-councils/for-council-officers"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Refer a family
                </Link>
              </li>
              <li>
                <Link
                  href="/for-councils/new-authorities"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Become a partner authority
                </Link>
              </li>
              <li>
                <Link
                  href="/for-councils/for-council-officers#criteria"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Referral criteria
                </Link>
              </li>
              <li>
                <Link
                  href="/for-councils/working-with-us"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Data and safeguarding
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Get involved */}
          <div>
            <h3 className="text-[13.5px] leading-[16px] font-bold text-white mb-4">
              Get involved
            </h3>
            <ul className="space-y-[14px]">
              <li>
                <Link
                  href="/donate"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved/volunteer-with-us"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Packing days
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved/corporate-partnerships"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Corporate partnerships
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved/corporate-partnerships#sponsors"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Our sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Regulator Badge */}
          <div>
            <h3 className="text-[13.5px] leading-[16px] font-bold text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-[14px]">
              <li>
                <a
                  href="mailto:hello@care-packs.org.uk"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  hello@care-packs.org.uk
                </a>
              </li>
              <li>
                <a
                  href="mailto:councils@care-packs.org.uk"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  councils@care-packs.org.uk
                </a>
              </li>
              <li>
                <a
                  href="mailto:partnerships@care-packs.org.uk"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  partnerships@care-packs.org.uk
                </a>
              </li>
            </ul>

            {/* Registered with Fundraising Regulator badge */}
            <div className="mt-5 w-[205px] border border-[#35353b] rounded-[2px] py-2.5 px-3.5 flex flex-col justify-center">
              <span className="text-[10px] leading-[13px] text-[#8e8e93] font-semibold tracking-[0.05em] uppercase">
                REGISTERED WITH
              </span>
              <span className="text-[13px] leading-[16px] font-bold text-white mt-1">
                Fundraising Regulator
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] leading-[16px] text-[#8e8e93]">
          <p className="font-normal">
            © 2026 Care Packs. Registered charity in England and Wales, number 1209874.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/about/governance-and-policies"
              className="hover:text-white transition-colors duration-150"
            >
              Privacy
            </Link>
            <Link
              href="/about/governance-and-policies"
              className="hover:text-white transition-colors duration-150"
            >
              Legal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
