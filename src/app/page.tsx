import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CorporateDonors from "@/components/CorporateDonors";
import AboutUs from "@/components/AboutUs";
import OurImpact from "@/components/OurImpact";
import WhyCarePacks from "@/components/WhyCarePacks";
import HowItWorks from "@/components/HowItWorks";
import OurCarePacks from "@/components/OurCarePacks";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import WherePacksWent from "@/components/WherePacksWent";
import UpcomingEvent from "@/components/UpcomingEvent";
import ImpactInAction from "@/components/ImpactInAction";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <CorporateDonors />

      <ScrollReveal>
        <AboutUs />
      </ScrollReveal>

      <ScrollReveal>
        <OurImpact />
      </ScrollReveal>

      <ScrollReveal>
        <WhyCarePacks />
      </ScrollReveal>

      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>

      <ScrollReveal>
        <OurCarePacks />
      </ScrollReveal>

      <ScrollReveal>
        <GetInvolvedSection />
      </ScrollReveal>

      <ScrollReveal>
        <WherePacksWent />
      </ScrollReveal>

      <ScrollReveal>
        <UpcomingEvent />
      </ScrollReveal>

      <ScrollReveal>
        <ImpactInAction />
      </ScrollReveal>

      <ScrollReveal>
        <PreFooterCTA />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
