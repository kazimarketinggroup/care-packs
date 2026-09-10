import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/PreFooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import ImpactHero from "@/components/impact/ImpactHero";
import {
  PacksDistributedSection,
  CostPerPackSection,
  ReportingCycleSection,
} from "@/components/impact/OurImpactSections";

export const metadata: Metadata = {
  title: "Our Impact | Care Packs",
  description:
    "What your money actually builds: £92,010 raised, 5,273 packs built, and our transparent £10 cost per complete baby pack.",
};

export default function OurImpactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <ImpactHero variant="our-impact" activeSubTab="Packs Distributed" />
        <ScrollReveal>
          <PacksDistributedSection />
        </ScrollReveal>
        <ScrollReveal>
          <CostPerPackSection />
        </ScrollReveal>
        <ScrollReveal>
          <ReportingCycleSection />
        </ScrollReveal>
        <ScrollReveal>
          <PreFooterCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
