"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Our work", href: "#our-work" },
    { label: "For councils", href: "#for-councils" },
    { label: "Get involved", href: "#get-involved" },
    { label: "Impact", href: "#impact" },
    { label: "News & events", href: "#news-events" },
  ];

  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const widget = document.getElementById("donation-widget");
    if (widget) {
      widget.scrollIntoView({ behavior: "smooth", block: "center" });
      window.dispatchEvent(new CustomEvent("highlight-donation-widget"));
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fefafc] border-b border-[#f3eef3] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6 h-[74px] flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center group transition-transform hover:opacity-95">
          <Image
            src="/assets/icons/care-packs-header-logo.svg"
            alt="Care Packs - A Gift of Hope with Every Pack"
            width={162}
            height={50}
            priority
            className="h-11 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 text-[15px] font-normal text-[#1b1b1b] hover:text-[#ec008c] transition-colors rounded-md"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Donate CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleDonateClick}
            className="hidden sm:inline-flex items-center justify-center bg-[#ec008c] hover:bg-[#d6007e] active:scale-[0.98] text-white font-bold text-[14.5px] px-6 h-[42px] rounded-[6px] shadow-sm transition-all duration-150 cursor-pointer"
          >
            Donate
          </button>


          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1b1b1b] hover:text-[#ec008c] hover:bg-black/5 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fefafc] border-b border-[#f3eef3] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-medium text-[#1b1b1b] hover:text-[#ec008c] py-2 transition-colors border-b border-black/[0.04]"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleDonateClick(e);
              }}
              className="mt-2 w-full flex items-center justify-center bg-[#ec008c] hover:bg-[#d6007e] text-white font-bold text-[15px] h-[44px] rounded-[6px] shadow-sm transition-all cursor-pointer"
            >
              Donate
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
