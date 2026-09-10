import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/PreFooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import GetInvolvedHero from "@/components/get-involved/GetInvolvedHero";
import {
  CorporatePartnershipsSection,
  ClosedVolunteeringDaysSection,
  SponsorAPackRunSection,
} from "@/components/get-involved/PartnerWithUsSections";

export const metadata: Metadata = {
  title: "Partner With Us | Get Involved | Care Packs",
  description:
    "Turn your organisation into a distribution partner. Book a corporate team day, sponsor a pack run, or become a year-round corporate partner.",
};

export default function PartnerWithUsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <GetInvolvedHero variant="partner-with-us" activeSubTab="Corporate partnerships" />
        <ScrollReveal>
          <CorporatePartnershipsSection />
        </ScrollReveal>
        <ScrollReveal>
          <ClosedVolunteeringDaysSection />
        </ScrollReveal>
        <ScrollReveal>
          <SponsorAPackRunSection />
        </ScrollReveal>
        <ScrollReveal>
          <PreFooterCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
