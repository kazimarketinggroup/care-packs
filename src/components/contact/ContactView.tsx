"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, CheckCircle2 } from "lucide-react";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    subject: "Corporate partnership",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-20 md:pb-24">
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

        {/* Pink Accent Bar */}
        <div className="w-12 h-[3.5px] bg-[#ec008c] rounded-full mb-3" />

        {/* Page Title */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[44px] font-bold text-[#111827] tracking-tight leading-[1.18] mb-3">
          Get in touch
        </h1>

        {/* Subtitle */}
        <p className="text-[15.5px] sm:text-[16px] leading-[26px] text-[#4b5563] max-w-[760px] mb-12 sm:mb-14">
          Whether you want to run a pack-building day with your team, become a corporate partner, or distribute packs to the families you already support, we would love to hear from you.
        </p>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: 4 Information Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {/* Card 1 */}
            <div className="bg-white rounded-[14px] border border-[#e5e7eb] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#d1d5db] transition-colors">
              <h3 className="text-[16.5px] font-bold text-[#111827] mb-2">
                Corporate partnerships
              </h3>
              <p className="text-[14px] leading-[22px] text-[#4b5563]">
                Team days, Packathons, sponsorship and recurring partnerships for organisations of any size.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[14px] border border-[#e5e7eb] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#d1d5db] transition-colors">
              <h3 className="text-[16.5px] font-bold text-[#111827] mb-2">
                Distribution partners
              </h3>
              <p className="text-[14px] leading-[22px] text-[#4b5563]">
                Charities, schools, food banks and local authorities working directly with families in hardship.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[14px] border border-[#e5e7eb] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#d1d5db] transition-colors">
              <h3 className="text-[16.5px] font-bold text-[#111827] mb-2">
                Common questions
              </h3>
              <p className="text-[14px] leading-[22px] text-[#4b5563]">
                Many answers are covered on our{" "}
                <Link
                  href="/faqs"
                  className="text-[#ec008c] font-semibold hover:underline"
                >
                  FAQ page
                </Link>
                .
              </p>
            </div>

            {/* Card 4 - Registered charity pink box */}
            <div className="bg-[#fff0f6] rounded-[14px] border border-[#fce7f3] p-6">
              <h3 className="text-[16.5px] font-bold text-[#831843] mb-2">
                Registered charity
              </h3>
              <p className="text-[14px] leading-[22px] text-[#831843]">
                Care Packs is a registered charity in England &amp; Wales, charity number 1209874.
              </p>
            </div>
          </div>

          {/* Right Column: Message Form Card */}
          <div className="lg:col-span-7 bg-white rounded-[18px] border border-[#e5e7eb] p-6 sm:p-8 md:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            {/* Form Pink Accent Bar */}
            <div className="w-10 h-[3.5px] bg-[#ec008c] rounded-full mb-3" />

            <h2 className="text-[24px] sm:text-[28px] font-bold text-[#111827] mb-7">
              Send us a message
            </h2>

            {isSubmitted ? (
              <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[12px] p-6 text-center py-10 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] mx-auto mb-3" />
                <h3 className="text-[18px] font-bold text-[#15803d] mb-1">
                  Thank you! Your message has been sent.
                </h3>
                <p className="text-[14.5px] text-[#166534] max-w-[420px] mx-auto mb-6">
                  A member of our team will review your inquiry and get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      organisation: "",
                      subject: "Corporate partnership",
                      message: "",
                    });
                  }}
                  className="text-[14px] text-[#166534] font-semibold underline hover:text-[#14532d]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[13.5px] font-medium text-[#111827] mb-2"
                    >
                      Your name <span className="text-[#ec008c]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border border-[#e5e7eb] rounded-[8px] px-4 py-2.5 text-[14.5px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#ec008c] focus:ring-1 focus:ring-[#ec008c] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[13.5px] font-medium text-[#111827] mb-2"
                    >
                      Email address <span className="text-[#ec008c]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@company.co.uk"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-[#e5e7eb] rounded-[8px] px-4 py-2.5 text-[14.5px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#ec008c] focus:ring-1 focus:ring-[#ec008c] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Organisation and Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="organisation"
                      className="block text-[13.5px] font-medium text-[#111827] mb-2"
                    >
                      Organisation
                    </label>
                    <input
                      id="organisation"
                      type="text"
                      placeholder="Company or charity name"
                      value={formData.organisation}
                      onChange={(e) =>
                        setFormData({ ...formData, organisation: e.target.value })
                      }
                      className="w-full border border-[#e5e7eb] rounded-[8px] px-4 py-2.5 text-[14.5px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#ec008c] focus:ring-1 focus:ring-[#ec008c] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[13.5px] font-medium text-[#111827] mb-2"
                    >
                      What is this about? <span className="text-[#ec008c]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full border border-[#e5e7eb] rounded-[8px] px-4 py-2.5 text-[14.5px] text-[#111827] bg-white focus:outline-none focus:border-[#ec008c] focus:ring-1 focus:ring-[#ec008c] transition-colors appearance-none cursor-pointer pr-10"
                      >
                        <option value="Corporate partnership">
                          Corporate partnership
                        </option>
                        <option value="Distribution partner">
                          Distribution partner
                        </option>
                        <option value="Local authority referral">
                          Local authority referral
                        </option>
                        <option value="Packathon 2026 inquiry">
                          Packathon 2026 inquiry
                        </option>
                        <option value="Donations & fundraising">
                          Donations &amp; fundraising
                        </option>
                        <option value="General inquiry">General inquiry</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#6b7280] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Message with Character Counter */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[13.5px] font-medium text-[#111827] mb-2"
                  >
                    Message <span className="text-[#ec008c]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    maxLength={1000}
                    placeholder="Tell us a little about your organisation and what you have in mind..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full border border-[#e5e7eb] rounded-[8px] p-4 text-[14.5px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#ec008c] focus:ring-1 focus:ring-[#ec008c] transition-colors resize-y leading-relaxed"
                  />
                  <div className="text-[12px] text-[#9ca3af] text-right mt-1 font-mono">
                    {formData.message.length}/1000
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#ec008c] hover:bg-[#d6007e] disabled:opacity-70 text-white font-semibold text-[15px] px-7 py-3 rounded-[6px] transition-colors shadow-sm cursor-pointer"
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
