"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Check, Heart } from "lucide-react";

export interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPack?: string;
  defaultAmount?: string;
}

export default function DonationModal({
  isOpen,
  onClose,
  defaultAmount = "10",
}: DonationModalProps) {
  const [mounted, setMounted] = useState(false);
  const [frequency, setFrequency] = useState<"monthly" | "one-off">("monthly");
  const [amount, setAmount] = useState(defaultAmount);
  const [customAmount, setCustomAmount] = useState("");
  const [giftAid, setGiftAid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setAmount(defaultAmount);
    setCustomAmount("");
    setIsSubmitted(false);
  }, [defaultAmount, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const handleSelectAmount = (val: string) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9.]/g, "");
    setCustomAmount(val);
    setAmount(val || "10");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSubmitted(true);
    }, 600);
  };

  const numericAmount = parseFloat(amount) || 10;
  const packsCount = Math.max(1, Math.floor(numericAmount / 10));
  const giftAidWorth = (numericAmount * 1.25).toFixed(2);

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-[460px] bg-white rounded-[16px] shadow-2xl p-6 sm:p-7 z-10 animate-in fade-in zoom-in-95 duration-200 border border-gray-100">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
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
              <strong className="text-[#ec008c]">£{amount || "10"}</strong> will put
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
              className="mt-7 w-full h-[44px] bg-[#1b1b1b] hover:bg-[#333333] text-white font-semibold rounded-[6px] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            {/* Header: Fund a pack today | Secure donation */}
            <div className="flex items-center justify-between pr-8">
              <h3 className="text-[20px] font-bold text-[#1b1b1b]">
                Fund a pack today
              </h3>
              <span className="text-[12.5px] font-normal text-[#6f6f77]">
                Secure donation
              </span>
            </div>

            {/* Frequency Toggle: Monthly | One-off */}
            <div className="mt-5 grid grid-cols-2 p-1 bg-[#f4f4f5] rounded-[8px]">
              <button
                type="button"
                onClick={() => setFrequency("monthly")}
                className={`py-2 text-[14px] font-medium rounded-[6px] transition-all cursor-pointer ${
                  frequency === "monthly"
                    ? "bg-[#111111] text-white shadow-sm font-semibold"
                    : "text-[#6f6f77] hover:text-[#111111]"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setFrequency("one-off")}
                className={`py-2 text-[14px] font-medium rounded-[6px] transition-all cursor-pointer ${
                  frequency === "one-off"
                    ? "bg-[#111111] text-white shadow-sm font-semibold"
                    : "text-[#6f6f77] hover:text-[#111111]"
                }`}
              >
                One-off
              </button>
            </div>

            {/* Preset Amount Grid: £10 | £30 | £100 */}
            <div className="mt-4 grid grid-cols-3 gap-2.5 sm:gap-3">
              {["10", "30", "100"].map((preset) => {
                const isSelected = amount === preset && !customAmount;
                return (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handleSelectAmount(preset)}
                    className={`py-2.5 text-[15px] font-bold rounded-[6px] border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#111111] text-white border-[#111111] shadow-sm"
                        : "bg-white text-[#111111] border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    £{preset}
                  </button>
                );
              })}
            </div>

            {/* Custom Amount Input: £ Other amount */}
            <div className="mt-3 relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-[14px]">
                £
              </span>
              <input
                type="text"
                inputMode="decimal"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Other amount"
                className="w-full pl-8 pr-4 py-2.5 text-[14px] text-[#111111] placeholder:text-gray-400 bg-white border border-gray-200 rounded-[6px] focus:outline-none focus:border-[#111111] transition-colors"
              />
            </div>

            {/* Dynamic Impact Callout Box */}
            <div className="mt-4 p-3.5 bg-[#f4f4f6] rounded-[8px] text-left">
              <div className="text-[13.5px] font-bold text-[#111111]">
                £{amount || "10"} {frequency === "monthly" ? "a month assembles" : "assembles"}{" "}
                {packsCount} baby pack{packsCount > 1 ? "s" : ""}
              </div>
              <div className="text-[12px] text-[#6f6f77] mt-0.5">
                {frequency === "monthly"
                  ? "Charged monthly by Direct Debit or card. Cancel any time."
                  : "One-off donation via card, Apple Pay, Google Pay or Direct Debit."}
              </div>
            </div>

            {/* Gift Aid Checkbox */}
            <label className="mt-4 flex items-start gap-2.5 text-left cursor-pointer select-none">
              <input
                type="checkbox"
                checked={giftAid}
                onChange={(e) => setGiftAid(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded text-[#ec008c] focus:ring-[#ec008c] accent-[#ec008c] cursor-pointer"
              />
              <span className="text-[12px] leading-[17px] text-[#4a4a53]">
                Add Gift Aid. As a UK taxpayer you make your £{amount || "10"} worth{" "}
                <strong className="text-[#111111] font-semibold">£{giftAidWorth}</strong> at no extra cost.
              </span>
            </label>

            {/* Primary Action Button */}
            <form onSubmit={handleSubmit} className="mt-5">
              <button
                type="submit"
                disabled={isProcessing || !amount || parseFloat(amount) <= 0}
                className="w-full h-[48px] bg-[#ec008c] hover:bg-[#d6007e] active:scale-[0.99] text-white font-bold text-[15px] rounded-[6px] shadow-sm transition-all flex items-center justify-center cursor-pointer disabled:opacity-50"
              >
                {isProcessing
                  ? "Processing..."
                  : frequency === "monthly"
                  ? `Give £${amount || "10"} a month`
                  : `Give £${amount || "10"}`}
              </button>
            </form>

            {/* Payment Method Badges */}
            <div className="mt-4 flex items-center justify-start gap-2 flex-wrap">
              {["Card", "Apple Pay", "Google Pay", "Direct Debit"].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 text-[11px] text-[#6f6f77] border border-gray-200 rounded-[4px] bg-white font-medium select-none"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
