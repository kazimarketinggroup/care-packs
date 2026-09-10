import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ForCouncilsHero from "@/components/for-councils/ForCouncilsHero";
import {
  StatsBar,
  WhyPartnerSection,
  OnboardingProcessSection,
  SpeakToTheTeamSection,
  NewAuthoritiesCTABanner,
} from "@/components/for-councils/NewAuthoritiesSections";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "New Authorities | For Councils | Care Packs",
  description:
    "Bringing Care Packs to your authority. What it takes to get set up as a partner authority, from first conversation to your first referral.",
};

export default function NewAuthoritiesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <ForCouncilsHero variant="new-authorities" activeSubTab="Become a partner authority" />
        <ScrollReveal>
          <StatsBar />
        </ScrollReveal>
        <ScrollReveal>
          <WhyPartnerSection />
        </ScrollReveal>
        <ScrollReveal>
          <OnboardingProcessSection />
        </ScrollReveal>
        <ScrollReveal>
          <SpeakToTheTeamSection />
        </ScrollReveal>
        <ScrollReveal>
          <NewAuthoritiesCTABanner />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
