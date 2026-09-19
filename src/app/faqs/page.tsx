import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/PreFooterCTA";
import FaqView from "@/components/faqs/FaqView";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Care Packs",
  description:
    "Everything you need to know about partnering with Care Packs, building packs, distribution channels, corporate volunteering, and getting essentials to families in poverty.",
};

export default function FaqsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <FaqView />
        <PreFooterCTA
          title="Are you a charity, school, or local authority working with vulnerable families?"
          subtitle=""
          primaryButtonText="Donate Now"
          secondaryButtonText="Get Involved"
          secondaryButtonHref="/get-involved"
        />
      </main>
      <Footer />
    </div>
  );
}
