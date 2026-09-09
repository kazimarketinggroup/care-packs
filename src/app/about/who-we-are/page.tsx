import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhoWeAreHero from "@/components/about/WhoWeAreHero";
import WhoWeAreVideoBanner from "@/components/about/WhoWeAreVideoBanner";
import OurPurposeSection from "@/components/about/OurPurposeSection";
import BoardOfTrusteesSection from "@/components/about/BoardOfTrusteesSection";
import FoundingStorySection from "@/components/about/FoundingStorySection";
import PreFooterCTA from "@/components/PreFooterCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Who We Are | Care Packs",
  description:
    "Care Packs was founded by senior professionals from banking, technology, law and healthcare who wanted a more direct way to turn corporate goodwill into everyday support.",
};

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <WhoWeAreHero activeTab="Our Purpose" />
        <ScrollReveal>
          <WhoWeAreVideoBanner />
        </ScrollReveal>
        <ScrollReveal>
          <OurPurposeSection />
        </ScrollReveal>
        <ScrollReveal>
          <BoardOfTrusteesSection />
        </ScrollReveal>
        <ScrollReveal>
          <FoundingStorySection />
        </ScrollReveal>
        <ScrollReveal>
          <PreFooterCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
