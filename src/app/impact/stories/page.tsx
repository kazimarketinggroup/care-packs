import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/PreFooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import {
  StoriesHero,
  FromCouncilOfficersSection,
  FromVolunteersSection,
  FromPartnersSection,
} from "@/components/impact/StoriesSections";

export const metadata: Metadata = {
  title: "Stories | Our Impact | Care Packs",
  description:
    "In the words of the people who were there: councils, volunteers and corporate partners on what a packing day and a delivery actually looked like.",
};

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <StoriesHero />
        <ScrollReveal>
          <FromCouncilOfficersSection />
        </ScrollReveal>
        <ScrollReveal>
          <FromVolunteersSection />
        </ScrollReveal>
        <ScrollReveal>
          <FromPartnersSection />
        </ScrollReveal>
        <ScrollReveal>
          <PreFooterCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
