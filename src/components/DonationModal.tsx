"use client";

import React, { useState, useEffect } from "react";
import { X, Check, Heart, ShieldCheck } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPack?: string;
  defaultAmount?: string;
}

export default function DonationModal({
  isOpen,
  onClose,
  defaultPack = "baby",
  defaultAmount = "7.89",
}: DonationModalProps) {
  const [frequency, setFrequency] = useState<"monthly" | "one-off">("monthly");
  const [pack, setPack] = useState(defaultPack);
  const [amount, setAmount] = useState(defaultAmount);
  const [customAmount, setCustomAmount] = useState("");
  const [giftAid, setGiftAid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setPack(defaultPack);
    setAmount(defaultAmount);
    setIsSubmitted(false);
  }, [defaultPack, defaultAmount, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectTier = (packKey: string, price: string) => {
    setPack(packKey);
    setAmount(price);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9.]/g, "");
    setCustomAmount(val);
    setAmount(val);
    setPack("custom");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-[540px] bg-white rounded-[20px] shadow-2xl p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200 border border-black/5">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#fef0f7] text-[#ec008c] flex items-center justify-center mb-5">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-[24px] font-bold text-[#1b1b1b]">
              Thank You for Giving Hope!
            </h3>
            <p className="mt-3 text-[15px] leading-[24px] text-[#4a4a53] max-w-[400px]">
              Your generous {frequency} contribution of{" "}
              <strong className="text-[#ec008c]">£{amount || "7.89"}</strong> will put
              essential care items straight into the hands of a local family in need.
            </p>
            <div className="mt-6 p-4 bg-[#fff4fb] rounded-[12px] border border-[#fcdfed] text-left text-[13.5px] text-[#3a3a3f]">
              <div className="flex items-center gap-2 font-semibold text-[#ec008c] mb-1">
                <Heart className="w-4 h-4 fill-current" />
                Direct Real-World Impact
              </div>
              <p>
                100% of your donation funds verified baby &amp; household essentials
                distributed through local Family Hubs and food banks.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-7 w-full h-[46px] bg-[#1b1b1b] hover:bg-[#333333] text-white font-semibold rounded-[8px] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 bg-[#ec008c] rounded-[1px]" />
              <span className="text-[12.5px] font-semibold text-[#ec008c] tracking-wider uppercase">
                Care Packs Impact Fund
              </span>
            </div>
            <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1b1b1b]">
              Fund a Care Pack Today
            </h3>
            <p className="text-[13.5px] leading-[20px] text-[#6f6f77] mt-1">
              Give practical essentials directly to parents and families experiencing hardship.
            </p>

            {/* Frequency Toggle */}
            <div className="mt-5 grid grid-cols-2 p-1 bg-gray-100 rounded-[10px]">
              <button
                type="button"
                onClick={() => setFrequency("monthly")}
                className={`py-2 text-[14px] font-bold rounded-[8px] transition-all ${
                  frequency === "monthly"
                    ? "bg-white text-[#ec008c] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly Gift
              </button>
              <button
                type="button"
                onClick={() => setFrequency("one-off")}
                className={`py-2 text-[14px] font-bold rounded-[8px] transition-all ${
                  frequency === "one-off"
                    ? "bg-white text-[#ec008c] shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                One-off Gift
              </button>
            </div>

            {/* Pack Selection Tiers */}
            <div className="mt-5 grid grid-cols-3 gap-2.5">
              {/* Tier 1: Baby Pack */}
              <button
                type="button"
                onClick={() => handleSelectTier("baby", "7.89")}
                className={`p-3 rounded-[12px] border text-left flex flex-col justify-between transition-all ${
                  pack === "baby"
                    ? "border-[#ec008c] bg-[#fff6fc] ring-2 ring-[#ec008c]/20"
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
              >
                <span className="text-[11px] font-bold uppercase text-[#ec008c]">
                  Baby Pack
                </span>
                <span className="text-[20px] font-extrabold text-[#1b1b1b] mt-1">
                  £7.89
                </span>
                <span className="text-[10.5px] text-gray-500 mt-1 leading-tight">
                  Wipes &amp; essentials
                </span>
              </button>

              {/* Tier 2: Personal Care */}
              <button
                type="button"
                onClick={() => handleSelectTier("personal", "15.00")}
                className={`p-3 rounded-[12px] border text-left flex flex-col justify-between transition-all ${
                  pack === "personal"
                    ? "border-[#ec008c] bg-[#fff6fc] ring-2 ring-[#ec008c]/20"
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
              >
                <span className="text-[11px] font-bold uppercase text-[#ec008c]">
                  Care Pack
                </span>
                <span className="text-[20px] font-extrabold text-[#1b1b1b] mt-1">
                  £15.00
                </span>
                <span className="text-[10.5px] text-gray-500 mt-1 leading-tight">
                  Hygiene &amp; comfort
                </span>
              </button>

              {/* Tier 3: Family Support */}
              <button
                type="button"
                onClick={() => handleSelectTier("family", "25.00")}
                className={`p-3 rounded-[12px] border text-left flex flex-col justify-between transition-all ${
                  pack === "family"
                    ? "border-[#ec008c] bg-[#fff6fc] ring-2 ring-[#ec008c]/20"
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
              >
                <span className="text-[11px] font-bold uppercase text-[#ec008c]">
                  Family Pack
                </span>
                <span className="text-[20px] font-extrabold text-[#1b1b1b] mt-1">
                  £25.00
                </span>
                <span className="text-[10.5px] text-gray-500 mt-1 leading-tight">
                  Full household pack
                </span>
              </button>
            </div>

            {/* Custom Amount Input */}
            <div className="mt-3.5 flex items-center gap-2">
              <span className="text-[13px] font-medium text-gray-600">Or other amount:</span>
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                  £
                </span>
                <input
                  type="text"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full pl-7 pr-3 py-1.5 text-[14px] rounded-[8px] border border-gray-200 focus:outline-none focus:border-[#ec008c] focus:ring-1 focus:ring-[#ec008c]"
                />
              </div>
            </div>

            {/* Gift Aid Checkbox */}
            <label className="mt-4 flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={giftAid}
                onChange={(e) => setGiftAid(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-[#ec008c] focus:ring-[#ec008c]"
              />
              <span className="text-[12px] leading-[17px] text-gray-600">
                <strong className="text-gray-800">Boost by 25% with Gift Aid:</strong> I am a UK taxpayer and confirm this donation qualifies for Gift Aid at no extra cost to me.
              </span>
            </label>

            {/* Submit CTA */}
            <form onSubmit={handleSubmit} className="mt-5">
              <button
                type="submit"
                disabled={isProcessing || !amount}
                className="w-full h-[46px] bg-[#ec008c] hover:bg-[#d6007e] active:scale-[0.99] text-white font-bold text-[15px] rounded-[8px] shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Complete Donation · £{amount || "7.89"}</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-3 text-center">
              <span className="text-[11px] text-gray-400">
                🔒 Secure 256-bit encryption · Registered with Fundraising Regulator
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
