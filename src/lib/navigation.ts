export interface MegaMenuLink {
  label: string;
  href: string;
  isHighlight?: boolean;
}

export interface MegaMenuColumn {
  title: string;
  href: string;
  links: MegaMenuLink[];
}

export interface MegaMenuPromo {
  type?: "default" | "solid-pink" | "stat" | "price";
  eyebrow?: string;
  title?: string;
  description: string;
  cta?: string;
  href?: string;
  price?: string;
  statNumber?: string;
  statLabel?: string;
  subheading?: string;
  dateLocation?: string;
}

export interface MegaMenuItem {
  href: string;
  columns: MegaMenuColumn[];
  promo: MegaMenuPromo;
}

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Our work", href: "/our-work" },
  { label: "For councils", href: "/for-councils" },
  { label: "Get involved", href: "/get-involved" },
  { label: "Impact", href: "/impact" },
  { label: "News & events", href: "/news-events" },
];

export const megaMenus: Record<string, MegaMenuItem> = {
  About: {
    href: "/about",
    columns: [
      {
        title: "WHO WE ARE",
        href: "/about/who-we-are",
        links: [
          { label: "Our Purpose", href: "/about/our-purpose" },
          { label: "Board of Trustees", href: "/about/board-of-trustees" },
          { label: "Founding Story", href: "/about/founding-story" },
        ],
      },
      {
        title: "HOW WE WORK",
        href: "/about/how-we-work",
        links: [
          { label: "Referral Model", href: "/about/referral-model" },
          { label: "Packing Days", href: "/about/packing-days" },
          { label: "Baby Pack Specification", href: "/about/baby-pack-specification" },
        ],
      },
      {
        title: "ACCOUNTABILITY",
        href: "/about/accountability",
        links: [
          { label: "Governance and Policies", href: "/about/governance-and-policies" },
          { label: "Annual Report", href: "/about/annual-report" },
          { label: "Fundraising Standard", href: "/about/fundraising-standard" },
        ],
      },
    ],
    promo: {
      type: "default",
      eyebrow: "Phase 1a",
      title: "Early years poverty: families with children under five",
      description:
        "One fully costed pack for children under five. Distribution runs entirely through local authority referral.",
      cta: "Donate Now",
      href: "/about/baby-pack-specification",
    },
  },
  "Our work": {
    href: "/our-work",
    columns: [
      {
        title: "PROGRAMMES",
        href: "/our-work/programmes",
        links: [
          { label: "Phase 1a: early years", href: "/our-work/phase-1a-early-years" },
          { label: "Programme roadmap", href: "/our-work/programme-roadmap" },
          { label: "Distribution", href: "/our-work/distribution" },
        ],
      },
      {
        title: "THE BABY PACK",
        href: "/our-work/the-baby-pack",
        links: [
          { label: "What is in the pack", href: "/our-work/what-is-in-the-pack" },
          { label: "How it is costed", href: "/our-work/how-it-is-costed" },
          { label: "Who receives it", href: "/our-work/who-receives-it" },
        ],
      },
      {
        title: "WHO WE HELP",
        href: "/our-work/who-we-help",
        links: [
          { label: "Families in the referral route", href: "/our-work/families-in-the-referral-route" },
          { label: "Referring authorities", href: "/our-work/referring-authorities" },
          { label: "Where we operate", href: "/our-work/where-we-operate" },
        ],
      },
    ],
    promo: {
      type: "price",
      eyebrow: "Unit cost",
      price: "£10",
      description:
        "Eight items, fully costed, delivered to one family with a child under five.",
      cta: "Fund a baby pack",
      href: "/our-work/fund-a-baby-pack",
    },
  },
  "For councils": {
    href: "/for-councils",
    columns: [
      {
        title: "WORKING WITH US",
        href: "/for-councils/working-with-us",
        links: [
          { label: "The partnership model", href: "/for-councils/the-partnership-model" },
          { label: "Data and safeguarding", href: "/for-councils/data-and-safeguarding" },
          { label: "Service specification", href: "/for-councils/service-specification" },
        ],
      },
      {
        title: "FOR COUNCIL OFFICERS",
        href: "/for-councils/for-council-officers",
        links: [
          { label: "Refer a family", href: "/for-councils/refer-a-family" },
          { label: "Referral criteria", href: "/for-councils/referral-criteria" },
          { label: "Delivery timescales", href: "/for-councils/delivery-timescales" },
        ],
      },
      {
        title: "NEW AUTHORITIES",
        href: "/for-councils/new-authorities",
        links: [
          { label: "Become a partner authority", href: "/for-councils/become-a-partner-authority" },
          { label: "Onboarding steps", href: "/for-councils/onboarding-steps" },
          { label: "Speak to the team", href: "/for-councils/speak-to-the-team" },
        ],
      },
    ],
    promo: {
      type: "default",
      eyebrow: "Commercial terms",
      title: "No cost to the authority",
      description:
        "Eight items, fully costed, delivered to one family with a child under five.",
      cta: "Donate Now",
      href: "/for-councils/authority-information",
    },
  },
  "Get involved": {
    href: "/get-involved",
    columns: [
      {
        title: "VOLUNTEER WITH US",
        href: "/get-involved/volunteer-with-us",
        links: [
          { label: "Public packing days", href: "/get-involved/public-packing-days" },
          { label: "Collection drives", href: "/get-involved/collection-drives" },
          { label: "Volunteer enquiries", href: "/get-involved/volunteer-enquiries" },
        ],
      },
      {
        title: "FUNDRAISE",
        href: "/get-involved/fundraise",
        links: [
          { label: "Fund packs directly", href: "/get-involved/fund-packs-directly" },
          { label: "Workplace fundraising", href: "/get-involved/workplace-fundraising" },
          { label: "Community collections", href: "/get-involved/community-collections" },
        ],
      },
      {
        title: "PARTNER WITH US",
        href: "/get-involved/partner-with-us",
        links: [
          { label: "Corporate partnerships", href: "/get-involved/corporate-partnerships" },
          { label: "Closed volunteering days", href: "/get-involved/closed-volunteering-days" },
          { label: "Sponsor a Pack Run", href: "/get-involved/sponsor-a-pack-run", isHighlight: true },
        ],
      },
    ],
    promo: {
      type: "stat",
      statNumber: "144",
      statLabel: "Companies involved",
      subheading: "Corporate Partnerships",
      description:
        "Book a team day, sponsor packs, or become a year-round partner.",
      cta: "Partners & Sponsors",
      href: "/get-involved/corporate-partnerships",
    },
  },
  Impact: {
    href: "/impact",
    columns: [
      {
        title: "OUR IMPACT",
        href: "/impact/our-impact",
        links: [
          { label: "Packs distributed", href: "/impact/packs-distributed" },
          { label: "Cost per pack", href: "/impact/cost-per-pack" },
          { label: "Reporting cycle", href: "/impact/reporting-cycle" },
        ],
      },
      {
        title: "EVIDENCE",
        href: "/impact/evidence",
        links: [
          { label: "Early years poverty data", href: "/impact/early-years-poverty-data" },
          { label: "Referral outcomes", href: "/impact/referral-outcomes" },
          { label: "Method and limitations", href: "/impact/method-and-limitations" },
        ],
      },
      {
        title: "STORIES",
        href: "/impact/stories",
        links: [
          { label: "From council officers", href: "/impact/from-council-officers" },
          { label: "From volunteers", href: "/impact/from-volunteers" },
          { label: "From partners", href: "/impact/from-partners" },
        ],
      },
    ],
    promo: {
      type: "default",
      eyebrow: "Our Partners",
      title: "Making an Impact Together",
      description:
        "Businesses, charities, local authorities and community organisations working together to provide practical support for families experiencing poverty.",
      cta: "Partners & Sponsors",
      href: "/get-involved/corporate-partnerships",
    },
  },
  "News & events": {
    href: "/news-events",
    columns: [
      {
        title: "EVENTS",
        href: "/news-events",
        links: [
          { label: "Upcoming event", href: "/news-events#upcoming-event" },
          { label: "Public Sessions", href: "/news-events#public-sessions" },
          { label: "Announcements", href: "/news-events#announcements" },
        ],
      },
      {
        title: "GALLERY",
        href: "/news-events/gallery",
        links: [
          { label: "Care Packs Launch Event", href: "/news-events/care-packs-launch-event" },
          { label: "Cisco Event", href: "/news-events/cisco-event" },
          { label: "Packathon 2025", href: "/news-events/packathon-2025" },
        ],
      },
    ],
    promo: {
      type: "solid-pink",
      eyebrow: "Upcoming Event",
      title: "Packathon Challenge  2026",
      description:
        "Fifteen organisations. One hall in Paddington. A target of more than 4,500 packs in a single day. Team places are allocated on a first-come basis.",
      dateLocation: "13 October 2026 · Porchester Hall",
      href: "/news-events/packathon-challenge-2026",
    },
  },
};

export interface PageInfo {
  title: string;
  category: string;
  description?: string;
  parentHref: string;
  parentLabel: string;
}

export const pagesLookup: Record<string, PageInfo> = {};

// Helper to register pages
function registerPage(path: string, info: PageInfo) {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  pagesLookup[cleanPath] = info;
}

// Populate pages lookup from mega menu data
Object.entries(megaMenus).forEach(([navKey, item]) => {
  registerPage(item.href, {
    title: navKey,
    category: "Care Packs",
    description: `Learn more about our ${navKey.toLowerCase()} initiative.`,
    parentHref: "/",
    parentLabel: "Home",
  });

  item.columns.forEach((col) => {
    registerPage(col.href, {
      title: col.title,
      category: navKey,
      description: `Explore ${col.title.toLowerCase()} as part of Care Packs.`,
      parentHref: item.href,
      parentLabel: navKey,
    });

    col.links.forEach((link) => {
      registerPage(link.href, {
        title: link.label,
        category: `${navKey} · ${col.title}`,
        description: `Detailed information about ${link.label}.`,
        parentHref: col.href,
        parentLabel: col.title,
      });
    });
  });

  if (item.promo.href && item.promo.href.startsWith("/")) {
    registerPage(item.promo.href, {
      title: item.promo.title || item.promo.cta || "Featured",
      category: `${navKey} · Spotlight`,
      description: item.promo.description,
      parentHref: item.href,
      parentLabel: navKey,
    });
  }
});
