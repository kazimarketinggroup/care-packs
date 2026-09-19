import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/PreFooterCTA";
import ContactView from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Get in Touch | Contact Care Packs",
  description:
    "Whether you want to run a pack-building day with your team, become a corporate partner, or distribute packs to families you already support, we would love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <ContactView />
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
