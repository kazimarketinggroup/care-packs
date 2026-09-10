import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/PreFooterCTA";
import GalleryView from "@/components/gallery/GalleryView";

export const metadata: Metadata = {
  title: "Gallery | News & Events | Care Packs",
  description:
    "Care Packs gallery: Packathons, Cisco corporate events, and the moments behind thousands of packs built and distributed.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <GalleryView />
        <PreFooterCTA />
      </main>
      <Footer />
    </div>
  );
}
