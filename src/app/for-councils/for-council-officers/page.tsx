import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ForCouncilsHero from "@/components/for-councils/ForCouncilsHero";
import {
  ReferAFamilySection,
  EligibilityCriteriaSection,
  WhoCanReferSection,
  TimescalesAndLogisticsSection,
  ForCouncilOfficersCTABanner,
} from "@/components/for-councils/ForCouncilOfficersSections";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "For Council Officers | Care Packs",
  description:
    "Everything you need before you refer a family. Check who is eligible, what information we need, and how quickly packs can reach a family in hardship.",
};

export default function ForCouncilOfficersPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <ForCouncilsHero variant="for-council-officers" activeSubTab="Refer a family" />
        <ScrollReveal>
          <ReferAFamilySection />
        </ScrollReveal>
        <ScrollReveal>
          <EligibilityCriteriaSection />
        </ScrollReveal>
        <ScrollReveal>
          <WhoCanReferSection />
        </ScrollReveal>
        <ScrollReveal>
          <TimescalesAndLogisticsSection />
        </ScrollReveal>
        <ScrollReveal>
          <ForCouncilOfficersCTABanner />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
