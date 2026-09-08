import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhoWeAreHero from "@/components/about/WhoWeAreHero";
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

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 w-full">
        {isWhoWeAreGroup ? (
          <div>
            <WhoWeAreHero activeTab={activeTab} />
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
