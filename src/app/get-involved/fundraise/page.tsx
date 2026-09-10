import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/PreFooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import GetInvolvedHero from "@/components/get-involved/GetInvolvedHero";
import {
  FundPacksDirectlySection,
  WorkplaceFundraisingSection,
  CommunityCollectionsSection,
} from "@/components/get-involved/FundraiseSections";

export const metadata: Metadata = {
  title: "Fundraise | Get Involved | Care Packs",
  description:
    "£10 in, one pack out, no ambiguity. Support Care Packs through direct funding, workplace fundraising, or community collections.",
};

export default function FundraisePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <GetInvolvedHero variant="fundraise" activeSubTab="Fund packs directly" />
        <ScrollReveal>
          <FundPacksDirectlySection />
        </ScrollReveal>
        <ScrollReveal>
          <WorkplaceFundraisingSection />
        </ScrollReveal>
        <ScrollReveal>
          <CommunityCollectionsSection />
        </ScrollReveal>
        <ScrollReveal>
          <PreFooterCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
