import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/PreFooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import GetInvolvedHero from "@/components/get-involved/GetInvolvedHero";
import {
  PublicPackingDaysSection,
  CollectionDrivesSection,
  VolunteerEnquiriesSection,
} from "@/components/get-involved/VolunteerWithUsSections";

export const metadata: Metadata = {
  title: "Volunteer With Us | Get Involved | Care Packs",
  description:
    "Two hours of your team's time is roughly four hundred packs. Join a public packing day, run a collection point, or register your interest.",
};

export default function VolunteerWithUsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <GetInvolvedHero variant="volunteer-with-us" activeSubTab="Public packing days" />
        <ScrollReveal>
          <PublicPackingDaysSection />
        </ScrollReveal>
        <ScrollReveal>
          <CollectionDrivesSection />
        </ScrollReveal>
        <ScrollReveal>
          <VolunteerEnquiriesSection />
        </ScrollReveal>
        <ScrollReveal>
          <PreFooterCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
