import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhoWeAreHero from "@/components/about/WhoWeAreHero";
import WhoWeAreVideoBanner from "@/components/about/WhoWeAreVideoBanner";
import OurPurposeSection from "@/components/about/OurPurposeSection";
import BoardOfTrusteesSection from "@/components/about/BoardOfTrusteesSection";
import FoundingStorySection from "@/components/about/FoundingStorySection";
import HowWeWorkHero from "@/components/about/HowWeWorkHero";
import ReferralModelSection from "@/components/about/ReferralModelSection";
import PackingDaysSection from "@/components/about/PackingDaysSection";
import BabyPackSpecSection from "@/components/about/BabyPackSpecSection";
import AccountabilityHero from "@/components/about/AccountabilityHero";
import GovernanceSection from "@/components/about/GovernanceSection";
import AnnualReportSection from "@/components/about/AnnualReportSection";
import FundraisingStandardsSection from "@/components/about/FundraisingStandardsSection";
import ProgrammesHero from "@/components/our-work/ProgrammesHero";
import Phase1aSection from "@/components/our-work/Phase1aSection";
import ProgrammeRoadmapSection from "@/components/our-work/ProgrammeRoadmapSection";
import DistributionSection from "@/components/our-work/DistributionSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { pagesLookup } from "@/lib/navigation";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(pagesLookup).map((pathKey) => ({
    slug: pathKey.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pathKey = slug.join("/");
  const page = pagesLookup[pathKey];

  const title = page
    ? page.title
    : slug[slug.length - 1]
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

  return {
    title: `${title} | Care Packs`,
    description: page?.description || "Care Packs - Essential items for parents in need.",
  };
}

export default async function DynamicSlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const pathKey = slug.join("/");
  const page = pagesLookup[pathKey];

  const formattedTitle = page
    ? page.title
    : slug[slug.length - 1]
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

  const category = page?.category || "Care Packs";

  // Check if this is a "Who We Are" related sub-page
  const isWhoWeAreGroup =
    pathKey === "about/who-we-are" ||
    pathKey === "who-we-are" ||
    pathKey === "about/our-purpose" ||
    pathKey === "about/board-of-trustees" ||
    pathKey === "about/founding-story";

  let activeTab: "Our Purpose" | "Board of Trustees" | "Founding Story" = "Our Purpose";
  if (pathKey === "about/board-of-trustees") activeTab = "Board of Trustees";
  if (pathKey === "about/founding-story") activeTab = "Founding Story";

  // Check if this is a "How We Work" related sub-page
  const isHowWeWorkGroup =
    pathKey === "about/how-we-work" ||
    pathKey === "how-we-work" ||
    pathKey === "about/referral-model" ||
    pathKey === "about/packing-days" ||
    pathKey === "about/baby-pack-spec";

  let activeWorkTab: "Referral Model" | "Packing Days" | "Baby Pack Spec" = "Referral Model";
  if (pathKey === "about/packing-days") activeWorkTab = "Packing Days";
  if (pathKey === "about/baby-pack-spec") activeWorkTab = "Baby Pack Spec";

  // Check if this is an "Accountability" related sub-page
  const isAccountabilityGroup =
    pathKey === "about/accountability" ||
    pathKey === "accountability" ||
    pathKey === "about/governance" ||
    pathKey === "about/governance-and-policies" ||
    pathKey === "about/annual-report" ||
    pathKey === "about/fundraising-standard" ||
    pathKey === "about/fundraising-standards";

  let activeAccountabilityTab: "Governance" | "Annual Report" | "Fundraising Standards" = "Governance";
  if (pathKey === "about/annual-report") activeAccountabilityTab = "Annual Report";
  if (pathKey === "about/fundraising-standard" || pathKey === "about/fundraising-standards")
    activeAccountabilityTab = "Fundraising Standards";

  // Check if this is a "Programmes" related sub-page
  const isProgrammesGroup =
    pathKey === "our-work/programmes" ||
    pathKey === "programmes" ||
    pathKey === "our-work/phase-1a-early-years" ||
    pathKey === "our-work/programme-roadmap" ||
    pathKey === "our-work/distribution";

  let activeProgrammesTab: "Phase 1a: Early Years" | "Programme Roadmap" | "Distribution" = "Phase 1a: Early Years";
  if (pathKey === "our-work/programme-roadmap") activeProgrammesTab = "Programme Roadmap";
  if (pathKey === "our-work/distribution") activeProgrammesTab = "Distribution";

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 w-full">
        {isWhoWeAreGroup ? (
          <div>
            <WhoWeAreHero activeTab={activeTab} />
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
          </div>
        ) : isHowWeWorkGroup ? (
          <div>
            <HowWeWorkHero activeTab={activeWorkTab} />
            <ScrollReveal>
              <ReferralModelSection />
            </ScrollReveal>
            <ScrollReveal>
              <PackingDaysSection />
            </ScrollReveal>
            <ScrollReveal>
              <BabyPackSpecSection />
            </ScrollReveal>
            <ScrollReveal>
              <PreFooterCTA />
            </ScrollReveal>
          </div>
        ) : isAccountabilityGroup ? (
          <div>
            <AccountabilityHero activeTab={activeAccountabilityTab} />
            <ScrollReveal>
              <GovernanceSection />
            </ScrollReveal>
            <ScrollReveal>
              <AnnualReportSection />
            </ScrollReveal>
            <ScrollReveal>
              <FundraisingStandardsSection />
            </ScrollReveal>
            <ScrollReveal>
              <PreFooterCTA />
            </ScrollReveal>
          </div>
        ) : isProgrammesGroup ? (
          <div>
            <ProgrammesHero activeTab={activeProgrammesTab} />
            <ScrollReveal>
              <Phase1aSection />
            </ScrollReveal>
            <ScrollReveal>
              <ProgrammeRoadmapSection />
            </ScrollReveal>
            <ScrollReveal>
              <DistributionSection />
            </ScrollReveal>
            <ScrollReveal>
              <PreFooterCTA />
            </ScrollReveal>
          </div>
        ) : (
          /* Placeholder for other pages until you design them */
          <div className="w-full flex flex-col items-center justify-center py-20 md:py-28 px-4 sm:px-6">
            <div className="max-w-[800px] w-full mx-auto text-center flex flex-col items-center">
              {/* Tag: Pink Square + Category */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-[10px] h-[10px] bg-[#ec008c] shrink-0" />
                <span className="text-[13px] leading-[17px] font-bold text-[#ec008c] uppercase tracking-wider">
                  {category}
                </span>
              </div>

              {/* Page Heading */}
              <h1 className="text-[32px] sm:text-[42px] md:text-[48px] leading-[1.2] font-bold text-[#1b1b1b] tracking-tight mb-5">
                {formattedTitle}
              </h1>

              <p className="text-[16px] sm:text-[17px] leading-[28px] text-[#555] max-w-[580px] mb-8">
                This section is staged and ready. The detailed content and custom layout for this section will be added here soon.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-[#ec008c] hover:bg-[#d6007e] text-white text-[14.5px] font-semibold px-6 h-[44px] rounded-[6px] shadow-sm transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
