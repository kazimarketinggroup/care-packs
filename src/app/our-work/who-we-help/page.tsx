import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhoWeHelpHero from "@/components/our-work/WhoWeHelpHero";
import RealityOfPovertySection from "@/components/our-work/RealityOfPovertySection";
import ReferringAuthoritiesSection from "@/components/our-work/ReferringAuthoritiesSection";
import WhereWeOperateSection from "@/components/our-work/WhereWeOperateSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Who We Help | Care Packs",
  description:
    "Behind every Care Pack is a family facing a moment of real hardship. Learn about the families, referring authorities, and areas where Care Packs operates.",
};

export default function WhoWeHelpPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full">
        <WhoWeHelpHero activeTab="Families in the referral route" />
        <ScrollReveal>
          <RealityOfPovertySection />
        </ScrollReveal>
        <ScrollReveal>
          <ReferringAuthoritiesSection />
        </ScrollReveal>
        <ScrollReveal>
          <WhereWeOperateSection />
        </ScrollReveal>
        <ScrollReveal>
          <PreFooterCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
