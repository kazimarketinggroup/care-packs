import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CorporateDonors from "@/components/CorporateDonors";
import AboutUs from "@/components/AboutUs";
import OurImpact from "@/components/OurImpact";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <CorporateDonors />
      <AboutUs />
      <OurImpact />
      <PreFooterCTA />
      <Footer />
    </main>
  );
}
