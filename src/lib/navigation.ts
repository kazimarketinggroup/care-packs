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

export interface NavLink {
  label: string;
  href?: string;
}

export interface MegaMenuItem {
  href?: string;
  columns: MegaMenuColumn[];
  promo: MegaMenuPromo;
}

export const navLinks: NavLink[] = [
  { label: "About" },
  { label: "Our work" },
  { label: "For councils" },
  { label: "Get involved" },
  { label: "Impact" },
  { label: "News & events" },
];

export const megaMenus: Record<string, MegaMenuItem> = {
  About: {
    columns: [
      {
        title: "WHO WE ARE",
        href: "/about/who-we-are",
        links: [
          { label: "Our Purpose", href: "/about/who-we-are#our-purpose" },
          { label: "Board of Trustees", href: "/about/who-we-are#board-of-trustees" },
          { label: "Founding Story", href: "/about/who-we-are#founding-story" },
        ],
      },
      {
        title: "HOW WE WORK",
        href: "/about/how-we-work",
        links: [
          { label: "Referral Model", href: "/about/how-we-work#referral-model" },
          { label: "Packing Days", href: "/about/how-we-work#packing-days" },
          { label: "Baby Pack Specification", href: "/about/how-we-work#baby-pack-spec" },
        ],
      },
      {
        title: "ACCOUNTABILITY",
        href: "/about/accountability",
        links: [
          { label: "Governance and Policies", href: "/about/accountability#governance" },
          { label: "Annual Report", href: "/about/accountability#annual-report" },
          { label: "Fundraising Standard", href: "/about/accountability#fundraising-standards" },
        ],
      },
    ],
    promo: {
      type: "default",
      eyebrow: "Phase 1a",
      title: "Early years poverty: families with children under five",
      description:
        "One fully costed pack for children under five. Distribution runs entirely through local authority referral.",
      cta: "Refer a family",
      href: "/contact",
    },
  },
  "Our work": {
    columns: [
      {
        title: "PROGRAMMES",
        href: "/our-work/programmes",
        links: [
          { label: "Phase 1a: early years", href: "/our-work/programmes#phase-1a" },
          { label: "Programme roadmap", href: "/our-work/programmes#programme-roadmap" },
          { label: "Distribution", href: "/our-work/programmes#distribution" },
        ],
      },
      {
        title: "THE BABY PACK",
        href: "/our-work/the-baby-pack",
        links: [
          { label: "What is in the pack", href: "/our-work/the-baby-pack#what-is-in-the-pack" },
          { label: "How it is costed", href: "/our-work/the-baby-pack#how-it-is-costed" },
          { label: "Who receives it", href: "/our-work/the-baby-pack#who-receives-it" },
        ],
      },
      {
        title: "WHO WE HELP",
        href: "/our-work/who-we-help",
        links: [
          { label: "Families in the referral route", href: "/our-work/who-we-help#families-in-referral-route" },
          { label: "Referring authorities", href: "/our-work/who-we-help#referring-authorities" },
          { label: "Where we operate", href: "/our-work/who-we-help#where-we-operate" },
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
          { label: "The partnership model", href: "/for-councils/working-with-us#partnership-model" },
          { label: "Data and safeguarding", href: "/for-councils/working-with-us#data-and-safeguarding" },
          { label: "Service specification", href: "/for-councils/working-with-us#service-specification" },
        ],
      },
      {
        title: "FOR COUNCIL OFFICERS",
        href: "/for-councils/for-council-officers",
        links: [
          { label: "Refer a family", href: "/for-councils/for-council-officers#refer-a-family" },
          { label: "Referral criteria", href: "/for-councils/for-council-officers#eligibility-criteria" },
          { label: "Delivery timescales", href: "/for-councils/for-council-officers#timescales-logistics" },
        ],
      },
      {
        title: "NEW AUTHORITIES",
        href: "/for-councils/new-authorities",
        links: [
          { label: "Become a partner authority", href: "/for-councils/new-authorities#why-partner" },
          { label: "Onboarding steps", href: "/for-councils/new-authorities#onboarding-steps" },
          { label: "Speak to the team", href: "/for-councils/new-authorities#speak-to-the-team" },
        ],
      },
    ],
    promo: {
      type: "default",
      eyebrow: "Commercial terms",
      title: "No cost to the authority",
      description:
        "Eight items, fully costed, delivered to one family with a child under five.",
      cta: "Refer a family",
      href: "/contact",
    },
  },
  "Get involved": {
    href: "/get-involved",
    columns: [
      {
        title: "VOLUNTEER WITH US",
        href: "/get-involved/volunteer-with-us",
        links: [
          { label: "Public packing days", href: "/get-involved/volunteer-with-us#public-packing-days" },
          { label: "Collection drives", href: "/get-involved/volunteer-with-us#collection-drives" },
          { label: "Volunteer enquiries", href: "/get-involved/volunteer-with-us#volunteer-enquiries" },
        ],
      },
      {
        title: "FUNDRAISE",
        href: "/get-involved/fundraise",
        links: [
          { label: "Fund packs directly", href: "/get-involved/fundraise#fund-packs-directly" },
          { label: "Workplace fundraising", href: "/get-involved/fundraise#workplace-fundraising" },
          { label: "Community collections", href: "/get-involved/fundraise#community-collections" },
        ],
      },
      {
        title: "PARTNER WITH US",
        href: "/get-involved/partner-with-us",
        links: [
          { label: "Corporate partnerships", href: "/get-involved/partner-with-us#corporate-partnerships" },
          { label: "Closed volunteering days", href: "/get-involved/partner-with-us#closed-volunteering-days" },
          { label: "Sponsor a Pack Run", href: "/get-involved/partner-with-us#sponsor-a-pack-run", isHighlight: true },
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
          { label: "Packs distributed", href: "/impact/our-impact#packs-distributed" },
          { label: "Cost per pack", href: "/impact/our-impact#cost-per-pack" },
          { label: "Reporting cycle", href: "/impact/our-impact#reporting-cycle" },
        ],
      },
      {
        title: "EVIDENCE",
        href: "/impact/evidence",
        links: [
          { label: "Early years poverty data", href: "/impact/evidence#early-years-poverty-data" },
          { label: "Referral outcomes", href: "/impact/evidence#referral-outcomes" },
          { label: "Method and limitations", href: "/impact/evidence#method-and-limitations" },
        ],
      },
      {
        title: "STORIES",
        href: "/impact/stories",
        links: [
          { label: "From council officers", href: "/impact/stories#council-stories" },
          { label: "From volunteers", href: "/impact/stories#volunteer-stories" },
          { label: "From partners", href: "/impact/stories#partner-stories" },
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
          { label: "Care Packs Launch Event", href: "/news-events/gallery#care-packs-launch" },
          { label: "Cisco Event", href: "/news-events/gallery#cisco-event" },
          { label: "Packathon 2025", href: "/news-events/gallery#packathon-2025" },
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
  if (item.href) {
    registerPage(item.href, {
      title: navKey,
      category: "Care Packs",
      description: `Learn more about our ${navKey.toLowerCase()} initiative.`,
      parentHref: "/",
      parentLabel: "Home",
    });
  }

  item.columns.forEach((col) => {
    registerPage(col.href, {
      title: col.title,
      category: navKey,
      description: `Explore ${col.title.toLowerCase()} as part of Care Packs.`,
      parentHref: item.href || "/",
      parentLabel: navKey,
    });

    col.links.forEach((link) => {
      const cleanHref = link.href.split("#")[0];
      if (cleanHref) {
        registerPage(cleanHref, {
          title: link.label,
          category: `${navKey} · ${col.title}`,
          description: `Detailed information about ${link.label}.`,
          parentHref: col.href,
          parentLabel: col.title,
        });
      }
    });
  });

  if (item.promo.href && item.promo.href.startsWith("/")) {
    registerPage(item.promo.href, {
      title: item.promo.title || item.promo.cta || "Featured",
      category: `${navKey} · Spotlight`,
      description: item.promo.description,
      parentHref: item.href || "/",
      parentLabel: navKey,
    });
  }
});
