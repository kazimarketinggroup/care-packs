import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1b1b1b] text-white">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6 lg:px-0 pt-[56px] pb-[28px]">
        {/* Top 5-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[272px_170px_200px_176px_214px] lg:gap-[47px] gap-10">
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
            <p className="mt-4 text-[13.5px] leading-[21px] text-[#c9c9d0] font-normal max-w-[272px]">
              Essential household packs for families living in poverty, distributed through local authority referral.
            </p>
            <p className="mt-4 text-[13px] leading-[16px] text-[#9a9aa2] font-normal">
              Registered charity 1209874
            </p>
          </div>

          {/* Col 2: Our work */}
          <div>
            <h3 className="text-[13px] leading-[16px] font-bold text-white mb-3.5">
              Our work
            </h3>
            <ul className="space-y-[15px]">
              <li>
                <Link
                  href="#the-baby-pack"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  The baby pack
                </Link>
              </li>
              <li>
                <Link
                  href="#phase-1a"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Phase 1a: early years
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="#impact-reporting"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Impact and reporting
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: For councils */}
          <div>
            <h3 className="text-[13px] leading-[16px] font-bold text-white mb-3.5">
              For councils
            </h3>
            <ul className="space-y-[15px]">
              <li>
                <Link
                  href="#refer-family"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Refer a family
                </Link>
              </li>
              <li>
                <Link
                  href="#partner-authority"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Become a partner authority
                </Link>
              </li>
              <li>
                <Link
                  href="#referral-criteria"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Referral criteria
                </Link>
              </li>
              <li>
                <Link
                  href="#data-safeguarding"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Data and safeguarding
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Get involved */}
          <div>
            <h3 className="text-[13px] leading-[16px] font-bold text-white mb-3.5">
              Get involved
            </h3>
            <ul className="space-y-[15px]">
              <li>
                <Link
                  href="#donate"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="#packing-days"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Packing days
                </Link>
              </li>
              <li>
                <Link
                  href="#corporate-partnerships"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Corporate partnerships
                </Link>
              </li>
              <li>
                <Link
                  href="#our-sponsors"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Our sponsors
                </Link>
              </li>
              <li>
                <Link
                  href="#collection-drives"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  Collection drives
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Regulator Badge */}
          <div>
            <h3 className="text-[13px] leading-[16px] font-bold text-white mb-3.5">
              Contact
            </h3>
            <ul className="space-y-[15px]">
              <li>
                <a
                  href="mailto:hello@carepacks.org.uk"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  hello@carepacks.org.uk
                </a>
              </li>
              <li>
                <a
                  href="mailto:councils@carepacks.org.uk"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  councils@carepacks.org.uk
                </a>
              </li>
              <li>
                <a
                  href="mailto:partnerships@carepacks.org.uk"
                  className="text-[13.5px] leading-[16px] text-[#c9c9d0] hover:text-white transition-colors duration-150 inline-block"
                >
                  partnerships@carepacks.org.uk
                </a>
              </li>
            </ul>

            {/* Registered with Fundraising Regulator badge */}
            <div className="mt-[14px] w-[211px] h-[59px] border border-[#4a4a53] rounded-[2px] pt-[13px] pb-[10px] px-[14px] flex flex-col justify-center">
              <span className="text-[10.5px] leading-[13px] text-[#9a9aa2] font-normal tracking-[0.03em] uppercase">
                REGISTERED WITH
              </span>
              <span className="text-[13px] leading-[16px] font-bold text-white mt-[2px]">
                Fundraising Regulator
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12.5px] leading-[15px] text-[#9a9aa2]">
          <p className="font-normal">
            © 2026 Care Packs. Registered charity in England and Wales, number 1209874.
          </p>
          <div className="flex flex-wrap items-center gap-[18px]">
            <Link
              href="#privacy"
              className="hover:text-white transition-colors duration-150"
            >
              Privacy
            </Link>
            <Link
              href="#safeguarding"
              className="hover:text-white transition-colors duration-150"
            >
              Safeguarding
            </Link>
            <Link
              href="#complaints"
              className="hover:text-white transition-colors duration-150"
            >
              Complaints
            </Link>
            <Link
              href="#annual-report"
              className="hover:text-white transition-colors duration-150"
            >
              Annual report
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
