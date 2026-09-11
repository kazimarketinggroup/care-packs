import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/PreFooterCTA";
import CorporatePartnershipsView from "@/components/corporate-partnerships/CorporatePartnershipsView";

export const metadata: Metadata = {
  title: "Corporate Partnerships & Sponsors | Care Packs",
  description:
    "Care Packs turns corporate goodwill into visible, measurable support for families experiencing poverty across the UK. Explore our partners and sponsors making it happen.",
};

export default function CorporatePartnershipsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <CorporatePartnershipsView />
        <PreFooterCTA />
      </main>
      <Footer />
    </div>
  );
}
