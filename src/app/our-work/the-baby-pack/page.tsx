import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TheBabyPackHero from "@/components/our-work/TheBabyPackHero";
import WhatIsInThePackSection from "@/components/our-work/WhatIsInThePackSection";
import WhyTheseItemsSection from "@/components/our-work/WhyTheseItemsSection";
import CostPerPackSection from "@/components/our-work/CostPerPackSection";
import WhoReceivesPackSection from "@/components/our-work/WhoReceivesPackSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "The Baby Pack | Care Packs",
  description:
    "Every Care Packs baby care pack contains eight essential items, selected for safety, utility and comfort for newborns. Each pack costs approximately £10 to build and deliver.",
};

export default function TheBabyPackPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <TheBabyPackHero activeTab="What is in the pack" />
        <ScrollReveal>
          <WhatIsInThePackSection />
        </ScrollReveal>
        <ScrollReveal>
          <WhyTheseItemsSection />
        </ScrollReveal>
        <ScrollReveal>
          <CostPerPackSection />
        </ScrollReveal>
        <ScrollReveal>
          <WhoReceivesPackSection />
        </ScrollReveal>
        <ScrollReveal>
          <PreFooterCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
