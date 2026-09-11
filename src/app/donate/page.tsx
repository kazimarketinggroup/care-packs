import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import DonateHero from "@/components/donate/DonateHero";
import DonateFormSection from "@/components/donate/DonateFormSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Donate | £10 funds one complete baby care pack | Care Packs",
  description:
    "Every donation goes directly to essential items for families experiencing poverty. No ambiguity. Just packs.",
};

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <DonateHero />
      <DonateFormSection />
      <Footer />
    </main>
  );
}
