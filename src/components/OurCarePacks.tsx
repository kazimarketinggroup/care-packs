"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function OurCarePacks() {
  return (
    <section id="our-care-packs" className="w-full bg-[#fff6fc] pt-[40px] md:pt-[50px] pb-[50px] md:pb-[60px]">
      <div className="max-w-[1216px] mx-auto px-4 md:px-6 lg:px-0">
        {/* Top Tag */}
        <div className="flex items-center gap-2">
          <span className="w-[10px] h-[10px] bg-[#ec008c] shrink-0" />
          <span className="text-[13px] leading-[17px] font-medium text-[#1b1b1b]">
            What&apos;s Inside
          </span>
        </div>

        {/* Header Title & Subtitle */}
        <div className="mt-[14px] flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6">
          <h2 className="text-[26px] sm:text-[28px] md:text-[30px] leading-[34px] sm:leading-[38px] md:leading-[40px] font-medium text-[#1b1b1b]">
            Our care packs
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-[26px] md:leading-[28px] font-normal text-[#3a3a3f] max-w-[480px] lg:text-right">
            Our Care Packs bring together everyday essentials designed to provide immediate, practical support to people experiencing hardship.
          </p>
        </div>

        {/* 6 Pack Cards Grid */}
        <div className="mt-8 md:mt-[44px] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[28px]">
          {/* Card 1: Baby pack */}
          <div className="group bg-white rounded-[15px] p-6 sm:p-7 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#ec008c]/20">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fef0f7] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ShoppingCart className="w-4 h-4 text-[#ec008c]" />
                  </div>
                  <h3 className="text-[19px] md:text-[20px] leading-[24px] font-semibold text-[#1b1b1b]">
                    Baby pack
                  </h3>
                </div>
                <span className="text-[19px] md:text-[20px] leading-[24px] font-bold text-[#ec008c]">
                  £10
                </span>
              </div>
              <p className="mt-4 text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] font-normal text-[#3a3a3f]">
                Baby wipes, nappy sacks, cotton wool and pads, shampoo, lotion, body wash, sponges and a biodegradable bag.
              </p>
            </div>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("open-donation-modal", { detail: { amount: 10 } }));
                }}
                className="inline-flex items-center justify-center bg-[#ec008c] hover:bg-[#d6007e] text-white text-[14px] font-semibold px-5 py-2.5 rounded-[5px] transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer"
              >
                Fund this pack today
              </button>
            </div>
          </div>

          {/* Card 2: Personal Care */}
          <div className="group bg-white rounded-[15px] p-6 sm:p-7 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#ec008c]/20">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#fef0f7] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/assets/icons/icon-personal-care.svg"
                    alt="Personal Care"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px] object-contain"
                  />
                </div>
                <h3 className="text-[19px] md:text-[20px] leading-[24px] font-semibold text-[#1b1b1b]">
                  Personal Care
                </h3>
              </div>
              <p className="mt-4 text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] font-normal text-[#3a3a3f]">
                Toothbrush &amp; toothpaste · Soap · Shampoo · Deodorant · Feminine hygiene · Razors
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0edf0]">
              <p className="text-[13px] leading-[19px] font-normal text-[#6f6f77]">
                Everyday essentials for personal hygiene and wellbeing.
              </p>
            </div>
          </div>

          {/* Card 3: Food */}
          <div className="group bg-white rounded-[15px] p-6 sm:p-7 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#ec008c]/20">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#fef0f7] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/assets/icons/icon-food.svg"
                    alt="Food"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px] object-contain"
                  />
                </div>
                <h3 className="text-[19px] md:text-[20px] leading-[24px] font-semibold text-[#1b1b1b]">
                  Food
                </h3>
              </div>
              <p className="mt-4 text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] font-normal text-[#3a3a3f]">
                Canned goods · Dried foods · Cereal · Snacks · Long-life milk
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0edf0]">
              <p className="text-[13px] leading-[19px] font-normal text-[#6f6f77]">
                Essential food items to help households through difficult times.
              </p>
            </div>
          </div>

          {/* Card 4: Sleep */}
          <div className="group bg-white rounded-[15px] p-6 sm:p-7 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#ec008c]/20">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#fef0f7] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/assets/icons/icon-sleep.svg"
                    alt="Sleep"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px] object-contain"
                  />
                </div>
                <h3 className="text-[19px] md:text-[20px] leading-[24px] font-semibold text-[#1b1b1b]">
                  Sleep
                </h3>
              </div>
              <p className="mt-4 text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] font-normal text-[#3a3a3f]">
                Lavender spray · Eye mask · Night light · T-shirt · Socks
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0edf0]">
              <p className="text-[13px] leading-[19px] font-normal text-[#6f6f77]">
                Simple essentials to support comfort and a better night&apos;s rest.
              </p>
            </div>
          </div>

          {/* Card 5: Cleaning */}
          <div className="group bg-white rounded-[15px] p-6 sm:p-7 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#ec008c]/20">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#fef0f7] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/assets/icons/icon-cleaning.svg"
                    alt="Cleaning"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px] object-contain"
                  />
                </div>
                <h3 className="text-[19px] md:text-[20px] leading-[24px] font-semibold text-[#1b1b1b]">
                  Cleaning
                </h3>
              </div>
              <p className="mt-4 text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] font-normal text-[#3a3a3f]">
                Cleaner · Disinfectant · Dish soap · Laundry detergent · Sponges
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0edf0]">
              <p className="text-[13px] leading-[19px] font-normal text-[#6f6f77]">
                Household essentials for a cleaner, healthier home
              </p>
            </div>
          </div>

          {/* Card 6: Technology */}
          <div className="group bg-white rounded-[15px] p-6 sm:p-7 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#ec008c]/20">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#fef0f7] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/assets/icons/icon-tech.svg"
                    alt="Technology"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px] object-contain"
                  />
                </div>
                <h3 className="text-[19px] md:text-[20px] leading-[24px] font-semibold text-[#1b1b1b]">
                  Technology
                </h3>
              </div>
              <p className="mt-4 text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] font-normal text-[#3a3a3f]">
                Prepaid mobile phones · Charging cables · Basic laptops &amp; tablets
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0edf0]">
              <p className="text-[13px] leading-[19px] font-normal text-[#6f6f77]">
                Helping people stay connected in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
