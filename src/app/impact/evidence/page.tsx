import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/PreFooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import ImpactHero from "@/components/impact/ImpactHero";
import {
  EarlyYearsPovertyDataSection,
  ReferralOutcomesSection,
  MethodAndLimitationsSection,
} from "@/components/impact/EvidenceSections";

export const metadata: Metadata = {
  title: "Evidence | Our Impact | Care Packs",
  description:
    "The need, and the numbers behind our answer to it. Early years poverty data, referral outcomes, and our methodology & limitations.",
};

export default function EvidencePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <ImpactHero variant="evidence" activeSubTab="Early Years Data" />
        <ScrollReveal>
          <EarlyYearsPovertyDataSection />
        </ScrollReveal>
        <ScrollReveal>
          <ReferralOutcomesSection />
        </ScrollReveal>
        <ScrollReveal>
          <MethodAndLimitationsSection />
        </ScrollReveal>
        <ScrollReveal>
          <PreFooterCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
