"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { navLinks, megaMenus } from "@/lib/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const closeDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(null);
  };

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDropdown();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-donation-modal", { detail: { amount: 10 } }));
  };

  const currentMegaMenu = activeDropdown ? megaMenus[activeDropdown] : null;

  return (
    <header className="sticky top-0 z-40 bg-[#fefafc] border-b border-[#f3eef3] shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all">
      <div className="max-w-[1247px] mx-auto px-4 md:px-6 h-[74px] flex items-center justify-between relative">
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
        <nav className="hidden lg:flex items-center h-full gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const hasMenu = Boolean(megaMenus[link.label]);
            const isOpen = activeDropdown === link.label;

            return (
              <div
                key={link.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  onClick={closeDropdown}
                  className={`px-3 py-2 text-[15px] transition-colors rounded-md flex items-center gap-1.5 cursor-pointer ${
                    isOpen
                      ? "text-[#ec008c] font-medium"
                      : "font-normal text-[#1b1b1b] hover:text-[#ec008c]"
                  }`}
                >
                  <span>{link.label}</span>
                  {hasMenu && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#ec008c]" : "text-[#71717a]"
                      }`}
                      strokeWidth={1.8}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Right: Donate CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="hidden sm:inline-flex items-center justify-center bg-[#ec008c] hover:bg-[#d6007e] active:scale-[0.98] text-white font-bold text-[14.5px] px-6 h-[42px] rounded-[6px] shadow-sm transition-all duration-150 cursor-pointer"
          >
            Donate
          </Link>

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

      {/* Desktop Mega Menu Dropdown */}
      <div
        onMouseEnter={() => {
          if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
          }
        }}
        onMouseLeave={handleMouseLeave}
        className={`hidden lg:block absolute top-full left-0 right-0 w-full transition-all duration-250 z-50 ${
          currentMegaMenu
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-[1247px] mx-auto px-4 md:px-6 pt-2 pb-6">
          <div className="bg-white rounded-[20px] border border-[#f0ebf0] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] p-7 lg:p-8">
            {currentMegaMenu && (
              <div className="flex flex-row items-stretch gap-6 xl:gap-8">
                {/* Dynamic Columns */}
                {currentMegaMenu.columns.map((col, idx) => (
                  <React.Fragment key={col.title}>
                    <div className="flex-1 min-w-[190px] flex flex-col justify-between">
                      <div>
                        {/* Column Category Title as Clickable Link */}
                        <Link
                          href={col.href}
                          onClick={closeDropdown}
                          className="inline-block text-[13px] font-bold tracking-[0.06em] text-[#ec008c] uppercase mb-5 hover:underline transition-all"
                        >
                          {col.title}
                        </Link>
                        <ul className="flex flex-col">
                          {col.links.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                onClick={closeDropdown}
                                className={`group flex items-center justify-between py-3 border-b border-[#f2edf2] text-[15px] font-normal transition-colors ${
                                  item.isHighlight
                                    ? "text-[#1a5b58] hover:text-[#ec008c]"
                                    : "text-[#1b1b1b] hover:text-[#ec008c]"
                                }`}
                              >
                                <span>{item.label}</span>
                                <ArrowRight
                                  className="w-4 h-4 text-[#1b1b1b] group-hover:text-[#ec008c] group-hover:translate-x-1 transition-all shrink-0 ml-2"
                                  strokeWidth={1.5}
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Divider between link columns */}
                    {idx < currentMegaMenu.columns.length - 1 && (
                      <div className="w-[1px] bg-[#f0ebf0] self-stretch my-1 shrink-0" />
                    )}
                  </React.Fragment>
                ))}

                {/* Promo Card on Right */}
                <div
                  className={`shrink-0 flex flex-col ${
                    currentMegaMenu.columns.length === 2
                      ? "w-[360px] xl:w-[440px]"
                      : "w-[300px] xl:w-[330px]"
                  }`}
                >
                  {/* Promo Card: Solid Pink Type (News & Events) */}
                  {currentMegaMenu.promo.type === "solid-pink" && (
                    <div className="bg-[#ec008c] rounded-[16px] p-7 flex flex-col justify-between h-full text-white shadow-sm">
                      <div>
                        <span className="block text-[13px] font-medium text-white/85 mb-2">
                          {currentMegaMenu.promo.eyebrow}
                        </span>
                        <h4 className="text-[20px] font-bold text-white tracking-tight leading-[1.3] mb-3.5">
                          {currentMegaMenu.promo.title}
                        </h4>
                        <p className="text-[14px] text-white/95 leading-[1.6]">
                          {currentMegaMenu.promo.description}
                        </p>
                      </div>
                      <div className="mt-6 pt-2">
                        {currentMegaMenu.promo.href ? (
                          <Link
                            href={currentMegaMenu.promo.href}
                            onClick={closeDropdown}
                            className="inline-block text-[13.5px] font-bold text-white hover:underline transition-all"
                          >
                            {currentMegaMenu.promo.dateLocation}
                          </Link>
                        ) : (
                          <span className="inline-block text-[13.5px] font-bold text-white">
                            {currentMegaMenu.promo.dateLocation}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Promo Card: Price Type (Our work) */}
                  {currentMegaMenu.promo.type === "price" && (
                    <div className="bg-[#fef4f9] rounded-[16px] p-6 flex flex-col justify-between h-full">
                      <div>
                        <span className="block text-[12.5px] font-normal text-[#71717a] mb-2">
                          {currentMegaMenu.promo.eyebrow}
                        </span>
                        <span className="block text-[36px] sm:text-[38px] font-bold text-[#1b1b1b] leading-none mb-3.5">
                          {currentMegaMenu.promo.price}
                        </span>
                        <p className="text-[13.5px] text-[#4b5563] leading-[1.55]">
                          {currentMegaMenu.promo.description}
                        </p>
                      </div>
                      <div className="mt-6">
                        <Link
                          href={currentMegaMenu.promo.href || "#"}
                          onClick={(e) => {
                            closeDropdown();
                            if (!currentMegaMenu.promo.href || currentMegaMenu.promo.href === "#donation-widget") {
                              e.preventDefault();
                              window.dispatchEvent(new CustomEvent("open-donation-modal", { detail: { amount: 10 } }));
                            }
                          }}
                          className="inline-flex items-center text-[13.5px] font-semibold text-[#ec008c] hover:text-[#d6007e] hover:underline transition-colors"
                        >
                          {currentMegaMenu.promo.cta}
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Promo Card: Stat Type (Get involved) */}
                  {currentMegaMenu.promo.type === "stat" && (
                    <div className="bg-[#fef4f9] rounded-[16px] p-6 flex flex-col justify-between h-full">
                      <div>
                        <span className="block text-[34px] sm:text-[38px] font-extrabold text-[#1b1b1b] leading-none mb-1">
                          {currentMegaMenu.promo.statNumber}
                        </span>
                        <h4 className="text-[16px] font-bold text-[#1b1b1b] mb-3.5">
                          {currentMegaMenu.promo.statLabel}
                        </h4>
                        <h5 className="text-[13px] font-bold text-[#1b1b1b] mb-1">
                          {currentMegaMenu.promo.subheading}
                        </h5>
                        <p className="text-[13px] text-[#4b5563] leading-[1.5]">
                          {currentMegaMenu.promo.description}
                        </p>
                      </div>
                      <div className="mt-5">
                        <Link
                          href={currentMegaMenu.promo.href || "#get-involved"}
                          onClick={closeDropdown}
                          className="inline-flex items-center text-[13.5px] font-semibold text-[#ec008c] hover:text-[#d6007e] hover:underline transition-colors"
                        >
                          {currentMegaMenu.promo.cta}
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Promo Card: Default Type (About, For councils, Impact) */}
                  {(!currentMegaMenu.promo.type || currentMegaMenu.promo.type === "default") && (
                    <div className="bg-[#fef4f9] rounded-[16px] p-6 flex flex-col justify-between h-full">
                      <div>
                        <span className="block text-[12.5px] font-normal text-[#71717a] mb-2.5">
                          {currentMegaMenu.promo.eyebrow}
                        </span>
                        <h4 className="text-[17px] font-bold text-[#1b1b1b] leading-[1.35] mb-3">
                          {currentMegaMenu.promo.title}
                        </h4>
                        <p className="text-[13.5px] text-[#4b5563] leading-[1.6]">
                          {currentMegaMenu.promo.description}
                        </p>
                      </div>
                      <div className="mt-6">
                        <Link
                          href={currentMegaMenu.promo.href || "#about"}
                          onClick={closeDropdown}
                          className="inline-flex items-center text-[13.5px] font-semibold text-[#ec008c] hover:text-[#d6007e] hover:underline transition-colors"
                        >
                          {currentMegaMenu.promo.cta}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fefafc] border-b border-[#f3eef3] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const menu = megaMenus[link.label];
              const isExpanded = expandedMobileMenu === link.label;

              if (menu) {
                return (
                  <div key={link.label} className="border-b border-black/[0.04] py-1">
                    <button
                      type="button"
                      onClick={() => setExpandedMobileMenu(isExpanded ? null : link.label)}
                      className="w-full flex items-center justify-between text-[16px] font-medium text-[#1b1b1b] hover:text-[#ec008c] py-2 transition-colors text-left"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-[#ec008c]" : "text-[#71717a]"
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="pl-3 pr-2 py-3 flex flex-col gap-4 bg-[#fef5fa] rounded-xl my-2">
                        {menu.columns.map((col) => (
                          <div key={col.title}>
                            <Link
                              href={col.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setExpandedMobileMenu(null);
                              }}
                              className="block text-[11.5px] font-bold text-[#ec008c] uppercase tracking-wider mb-1.5 hover:underline"
                            >
                              {col.title}
                            </Link>
                            <div className="flex flex-col gap-1.5">
                              {col.links.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setExpandedMobileMenu(null);
                                  }}
                                  className="text-[14px] text-[#2d2d2d] hover:text-[#ec008c] py-1 flex items-center justify-between transition-colors"
                                >
                                  <span>{item.label}</span>
                                  <ArrowRight className="w-3.5 h-3.5 text-[#9ca3af]" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* Mobile Promo Card Summary */}
                        <div
                          className={`rounded-lg p-3.5 border ${
                            menu.promo.type === "solid-pink"
                              ? "bg-[#ec008c] text-white border-transparent"
                              : "bg-white text-[#1b1b1b] border-[#f3eef3]"
                          } mt-1`}
                        >
                          {menu.promo.eyebrow && (
                            <span
                              className={`block text-[11px] mb-1 ${
                                menu.promo.type === "solid-pink"
                                  ? "text-white/80"
                                  : "text-[#71717a]"
                              }`}
                            >
                              {menu.promo.eyebrow}
                            </span>
                          )}
                          {menu.promo.price && (
                            <span className="block text-[22px] font-bold mb-1">
                              {menu.promo.price}
                            </span>
                          )}
                          {menu.promo.statNumber && (
                            <span className="block text-[24px] font-bold mb-0.5">
                              {menu.promo.statNumber}
                            </span>
                          )}
                          {menu.promo.title && (
                            <h5 className="text-[13.5px] font-bold leading-snug mb-1">
                              {menu.promo.title}
                            </h5>
                          )}
                          {menu.promo.cta && menu.promo.href && (
                            <Link
                              href={menu.promo.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setExpandedMobileMenu(null);
                              }}
                              className={`inline-block text-[12px] font-semibold mt-2 ${
                                menu.promo.type === "solid-pink"
                                  ? "text-white underline"
                                  : "text-[#ec008c]"
                              }`}
                            >
                              {menu.promo.cta} →
                            </Link>
                          )}
                          {menu.promo.dateLocation && (
                            <span className="block text-[12px] font-bold text-white mt-1.5">
                              {menu.promo.dateLocation}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[16px] font-medium text-[#1b1b1b] hover:text-[#ec008c] py-2 transition-colors border-b border-black/[0.04]"
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 w-full flex items-center justify-center bg-[#ec008c] hover:bg-[#d6007e] text-white font-bold text-[15px] h-[44px] rounded-[6px] shadow-sm transition-all cursor-pointer"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
