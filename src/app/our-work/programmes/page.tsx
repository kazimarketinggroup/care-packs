import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgrammesHero from "@/components/our-work/ProgrammesHero";
import Phase1aSection from "@/components/our-work/Phase1aSection";
import ProgrammeRoadmapSection from "@/components/our-work/ProgrammeRoadmapSection";
import DistributionSection from "@/components/our-work/DistributionSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Programmes | Care Packs",
  description:
    "Direct support programmes designed around specific vulnerability factors. Standardised packs, built by volunteers, and distributed through frontline organisations who understand local need.",
};

export default function ProgrammesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <ProgrammesHero activeTab="Phase 1a: Early Years" />
        <ScrollReveal>
          <Phase1aSection />
        </ScrollReveal>
        <ScrollReveal>
          <ProgrammeRoadmapSection />
        </ScrollReveal>
        <ScrollReveal>
          <DistributionSection />
        </ScrollReveal>
        <ScrollReveal>
          <PreFooterCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
