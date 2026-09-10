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
import TheBabyPackHero from "@/components/our-work/TheBabyPackHero";
import WhatIsInThePackSection from "@/components/our-work/WhatIsInThePackSection";
import WhyTheseItemsSection from "@/components/our-work/WhyTheseItemsSection";
import CostPerPackSection from "@/components/our-work/CostPerPackSection";
import WhoReceivesPackSection from "@/components/our-work/WhoReceivesPackSection";
import WhoWeHelpHero from "@/components/our-work/WhoWeHelpHero";
import RealityOfPovertySection from "@/components/our-work/RealityOfPovertySection";
import ReferringAuthoritiesSection from "@/components/our-work/ReferringAuthoritiesSection";
import WhereWeOperateSection from "@/components/our-work/WhereWeOperateSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import ForCouncilsHero from "@/components/for-councils/ForCouncilsHero";
import {
  PartnershipModelSection,
  DataAndSafeguardingSection,
  ServiceSpecificationSection,
  ReadyToPartnerCTA,
} from "@/components/for-councils/WorkingWithUsSections";
import {
  ReferAFamilySection,
  EligibilityCriteriaSection,
  WhoCanReferSection,
  TimescalesAndLogisticsSection,
  ForCouncilOfficersCTABanner,
} from "@/components/for-councils/ForCouncilOfficersSections";
import {
  StatsBar,
  WhyPartnerSection,
  OnboardingProcessSection,
  SpeakToTheTeamSection,
  NewAuthoritiesCTABanner,
} from "@/components/for-councils/NewAuthoritiesSections";
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

  // Check if this is a "The Baby Pack" related sub-page
  const isTheBabyPackGroup =
    pathKey === "our-work/the-baby-pack" ||
    pathKey === "the-baby-pack" ||
    pathKey === "our-work/what-is-in-the-pack" ||
    pathKey === "what-is-in-the-pack" ||
    pathKey === "our-work/how-it-is-costed" ||
    pathKey === "how-it-is-costed" ||
    pathKey === "our-work/who-receives-it" ||
    pathKey === "who-receives-it";

  let activeBabyPackTab: "What is in the pack" | "How it is costed" | "Who receives it" = "What is in the pack";
  if (pathKey === "our-work/how-it-is-costed" || pathKey === "how-it-is-costed") {
    activeBabyPackTab = "How it is costed";
  } else if (pathKey === "our-work/who-receives-it" || pathKey === "who-receives-it") {
    activeBabyPackTab = "Who receives it";
  }

  // Check if this is a "Who We Help" related sub-page
  const isWhoWeHelpGroup =
    pathKey === "our-work/who-we-help" ||
    pathKey === "who-we-help" ||
    pathKey === "our-work/families-in-the-referral-route" ||
    pathKey === "our-work/referring-authorities" ||
    pathKey === "our-work/where-we-operate";

  let activeWhoWeHelpTab: "Families in the referral route" | "Referring authorities" | "Where we operate" = "Families in the referral route";
  if (pathKey === "our-work/referring-authorities") {
    activeWhoWeHelpTab = "Referring authorities";
  } else if (pathKey === "our-work/where-we-operate") {
    activeWhoWeHelpTab = "Where we operate";
  }

  // Check if this is a "Working with us" related sub-page
  const isWorkingWithUsGroup =
    pathKey === "for-councils" ||
    pathKey === "for-councils/working-with-us" ||
    pathKey === "working-with-us" ||
    pathKey === "for-councils/the-partnership-model" ||
    pathKey === "for-councils/data-and-safeguarding" ||
    pathKey === "for-councils/service-specification" ||
    pathKey === "for-councils/authority-information";

  let activeWorkingWithUsTab = "The Partnership Model";
  if (pathKey === "for-councils/data-and-safeguarding") {
    activeWorkingWithUsTab = "Data and Safeguarding";
  } else if (pathKey === "for-councils/service-specification") {
    activeWorkingWithUsTab = "Service specification";
  }

  // Check if this is a "For council officers" related sub-page
  const isForCouncilOfficersGroup =
    pathKey === "for-councils/for-council-officers" ||
    pathKey === "for-council-officers" ||
    pathKey === "for-councils/refer-a-family" ||
    pathKey === "for-councils/referral-criteria" ||
    pathKey === "for-councils/delivery-timescales";

  let activeForCouncilOfficersTab = "Refer a family";
  if (pathKey === "for-councils/referral-criteria") {
    activeForCouncilOfficersTab = "Eligibility criteria";
  } else if (pathKey === "for-councils/delivery-timescales") {
    activeForCouncilOfficersTab = "Timescales & logistics";
  }

  // Check if this is a "New authorities" related sub-page
  const isNewAuthoritiesGroup =
    pathKey === "for-councils/new-authorities" ||
    pathKey === "new-authorities" ||
    pathKey === "for-councils/become-a-partner-authority" ||
    pathKey === "for-councils/onboarding-steps" ||
    pathKey === "for-councils/speak-to-the-team";

  let activeNewAuthoritiesTab = "Become a partner authority";
  if (pathKey === "for-councils/onboarding-steps") {
    activeNewAuthoritiesTab = "Onboarding steps";
  } else if (pathKey === "for-councils/speak-to-the-team") {
    activeNewAuthoritiesTab = "Speak to the team";
  }

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
        ) : isTheBabyPackGroup ? (
          <div>
            <TheBabyPackHero activeTab={activeBabyPackTab} />
            <ScrollReveal>
              <WhatIsInThePackSection />
            </ScrollReveal>
            <ScrollReveal>
              <WhyTheseItemsSection />
            </ScrollReveal>
            <ScrollReveal>
              <CostPerPackSection />
            </ScrollReveal>
            <ScrollReveal>
              <WhoReceivesPackSection />
            </ScrollReveal>
            <ScrollReveal>
              <PreFooterCTA />
            </ScrollReveal>
          </div>
        ) : isWhoWeHelpGroup ? (
          <div>
            <WhoWeHelpHero activeTab={activeWhoWeHelpTab} />
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
          </div>
        ) : isWorkingWithUsGroup ? (
          <div>
            <ForCouncilsHero variant="working-with-us" activeSubTab={activeWorkingWithUsTab} />
            <ScrollReveal>
              <PartnershipModelSection />
            </ScrollReveal>
            <ScrollReveal>
              <DataAndSafeguardingSection />
            </ScrollReveal>
            <ScrollReveal>
              <ServiceSpecificationSection />
            </ScrollReveal>
            <ScrollReveal>
              <ReadyToPartnerCTA />
            </ScrollReveal>
          </div>
        ) : isForCouncilOfficersGroup ? (
          <div>
            <ForCouncilsHero variant="for-council-officers" activeSubTab={activeForCouncilOfficersTab} />
            <ScrollReveal>
              <ReferAFamilySection />
            </ScrollReveal>
            <ScrollReveal>
              <EligibilityCriteriaSection />
            </ScrollReveal>
            <ScrollReveal>
              <WhoCanReferSection />
            </ScrollReveal>
            <ScrollReveal>
              <TimescalesAndLogisticsSection />
            </ScrollReveal>
            <ScrollReveal>
              <ForCouncilOfficersCTABanner />
            </ScrollReveal>
          </div>
        ) : isNewAuthoritiesGroup ? (
          <div>
            <ForCouncilsHero variant="new-authorities" activeSubTab={activeNewAuthoritiesTab} />
            <ScrollReveal>
              <StatsBar />
            </ScrollReveal>
            <ScrollReveal>
              <WhyPartnerSection />
            </ScrollReveal>
            <ScrollReveal>
              <OnboardingProcessSection />
            </ScrollReveal>
            <ScrollReveal>
              <SpeakToTheTeamSection />
            </ScrollReveal>
            <ScrollReveal>
              <NewAuthoritiesCTABanner />
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
