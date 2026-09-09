import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccountabilityHero from "@/components/about/AccountabilityHero";
import GovernanceSection from "@/components/about/GovernanceSection";
import AnnualReportSection from "@/components/about/AnnualReportSection";
import FundraisingStandardsSection from "@/components/about/FundraisingStandardsSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Accountability | Care Packs",
  description:
    "Our registration, our governance, our fundraising standards, and exactly where every pound goes published in full, not just claimed.",
};

export default function AccountabilityPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <AccountabilityHero activeTab="Governance" />
        <ScrollReveal>
          <GovernanceSection />
        </ScrollReveal>
        <ScrollReveal>
          <AnnualReportSection />
        </ScrollReveal>
        <ScrollReveal>
          <FundraisingStandardsSection />
        </ScrollReveal>
        <ScrollReveal>
          <PreFooterCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
