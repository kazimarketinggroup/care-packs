import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/PreFooterCTA";
import NewsEventsHero from "@/components/news-events/NewsEventsHero";
import NewsEventsUpcoming from "@/components/news-events/NewsEventsUpcoming";
import NewsEventsPublicSessions from "@/components/news-events/NewsEventsPublicSessions";
import NewsEventsAnnouncements from "@/components/news-events/NewsEventsAnnouncements";

export const metadata: Metadata = {
  title: "News & Events | What's happening at Care Packs",
  description:
    "The latest news, events and milestones from Care Packs and our partner network. Packathon 2026, corporate team days, community collections, and announcements.",
};

export default function NewsEventsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <NewsEventsHero />
        <NewsEventsUpcoming />
        <NewsEventsPublicSessions />
        <NewsEventsAnnouncements />
        <PreFooterCTA />
      </main>
      <Footer />
    </div>
  );
}
