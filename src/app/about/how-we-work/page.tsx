import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowWeWorkHero from "@/components/about/HowWeWorkHero";
import ReferralModelSection from "@/components/about/ReferralModelSection";
import PackingDaysSection from "@/components/about/PackingDaysSection";
import BabyPackSpecSection from "@/components/about/BabyPackSpecSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "How We Work | Care Packs",
  description:
    "See how a council referral becomes a packing day, and a packing day becomes a pack in someone's hands the model behind every number on this site.",
};

export default function HowWeWorkPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <HowWeWorkHero activeTab="Referral Model" />
        <ScrollReveal>
          <ReferralModelSection />
        </ScrollReveal>
        <ScrollReveal>
          <PackingDaysSection />
        </ScrollReveal>
        <ScrollReveal>
          <BabyPackSpecSection />
        </ScrollReveal>
        <ScrollReveal>
          <PreFooterCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
