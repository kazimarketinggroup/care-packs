import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ForCouncilsHero from "@/components/for-councils/ForCouncilsHero";
import {
  PartnershipModelSection,
  DataAndSafeguardingSection,
  ServiceSpecificationSection,
  ReadyToPartnerCTA,
} from "@/components/for-councils/WorkingWithUsSections";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Working With Us | For Councils | Care Packs",
  description:
    "A partnership that costs your authority nothing. Learn how Care Packs works with local authorities, our data and safeguarding standards, and service specifications.",
};

export default function WorkingWithUsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <ForCouncilsHero variant="working-with-us" activeSubTab="The Partnership Model" />
        <ScrollReveal>
          <PartnershipModelSection />
        </ScrollReveal>
        <ScrollReveal>
          <DataAndSafeguardingSection />
        </ScrollReveal>
        <ScrollReveal>
          <ServiceSpecificationSection />
        </ScrollReveal>
        <ScrollReveal>
          <ReadyToPartnerCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
