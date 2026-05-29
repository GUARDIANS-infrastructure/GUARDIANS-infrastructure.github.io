import { site } from "./site";

type TextSegment = string | {
  text: string;
  href: string;
};

export const aboutContent = {
  meta: {
    title: "About",
    description:
      "Authoritative background on the GUARDIANS program, funding context, and coordination model.",
  },
  header: {
    eyebrow: "Program background",
    title: "About GUARDIANS",
    intro:
      "GUARDIANS is a national research infrastructure program focused on secure discovery, access, stewardship, and analysis pathways for sensitive human omics data in Australia.",
  },
  overview: {
    eyebrow: "Overview",
    title: "Program overview",
    quote: {
      text: "User-centric design must lie at the heart of Australia's NDRI system.",
      source: "National Digital Research Infrastructure Strategy",
      href: "https://www.education.gov.au/download/18373/national-digital-research-infrastructure-strategy/38409/document/pdf",
    },
    paragraphs: [
      [
        "Australia's human genomics research datasets present unparalleled opportunities to enhance our understanding of health, disease mechanisms, and precision medicine. However, data fragmentation, access barriers, and governance complexity limit their use. GUARDIANS is addressing these challenges by developing standardised interfaces, harmonised data formats, ethical access rules, and interoperable institutional policies and technologies. Delivering these vital components will enable researchers to discover, access, and analyse critical data from multiple research datasets, unlocking opportunities for discovery.",
      ],
      [
        "GUARDIANS aligns with international standards, including those of the Global Alliance for Genomics and Health (GA4GH), while addressing Australia's specific ethical, legal, and social context. Inspired by the ",
        {
          text: "NCRIS Roadmap",
          href: "https://www.education.gov.au/national-research-infrastructure/2021-national-research-infrastructure-roadmap",
        },
        " and ",
        {
          text: "NAGIM Implementation Recommendations",
          href: "https://www.australiangenomics.org.au/wp-content/uploads/2021/06/NAGIM-Implementation-Recommendations_January-2023.pdf",
        },
        ", the program builds on previous initiatives such as the ",
        {
          text: "Human Genomes Platform Project",
          href: "https://www.biocommons.org.au/hgpp",
        },
        ", and follows an iterative implementation model to ensure practical, scalable outcomes.",
      ],
    ] satisfies TextSegment[][],
  },
  coordination: {
    eyebrow: "Coordination",
    title: "Coordination and delivery",
    paragraph: [
      "Australian BioCommons coordinates the program, with delivery distributed across ",
      {
        text: "national partners",
        href: "/partners-contributions",
      },
      " contributing trusted researcher identity, data access management, infrastructure operations, repository and commons capability, stewardship, governance expertise, and standards alignment.",
    ] satisfies TextSegment[],
  },
  timeline: {
    eyebrow: "Timeline",
    title: "Program timeline",
    items: [
      {
        title: "Delivery start",
        icon: "flag",
        content: [
          "GUARDIANS delivery began in late 2024, establishing a four-year program of work across national infrastructure, governance, access, and analysis capabilities.",
        ] satisfies TextSegment[],
      },
      {
        title: "Delivery milestones",
        icon: "milestone",
        content: [
          "The program maintains a live ",
          {
            text: "milestone tracker",
            href: "https://github.com/GUARDIANS-infrastructure/roadmap/blob/main/tracker.md",
          },
          " for delivery activities and progress updates.",
        ] satisfies TextSegment[],
      },
      {
        title: "Funding horizon",
        icon: "calendar-range",
        content: [
          "The current funded delivery window runs to Q3 2028, supporting staged development, partner implementation, and transition planning for sustained national capability.",
        ] satisfies TextSegment[],
      },
    ],
  },
  funding: {
    eyebrow: "Funding",
    title: "Funding acknowledgement",
    paragraph: [
      "GUARDIANS is led by Australian BioCommons and delivered with in-kind support from ",
      {
        text: "program partners",
        href: "/partners-contributions",
      },
      ". Australian BioCommons and the GUARDIANS program are supported by ",
      {
        text: "Bioplatforms Australia",
        href: "https://bioplatforms.com/",
      },
      ". Bioplatforms Australia is enabled by the National Collaborative Research Infrastructure Strategy (",
      {
        text: "NCRIS",
        href: "https://www.education.gov.au/ncris",
      },
      ").",
    ] satisfies TextSegment[],
  },
  related: {
    eyebrow: "Related links",
    title: "Related program paths",
    cards: [
      {
        title: "Services & resources",
        description:
          "Explore data, services, infrastructure and other resources generated through GUARDIANS.",
        href: "/services-resources",
        linkLabel: "Open the catalogue",
      },
      {
        title: "Partners & contributions",
        description:
          "See how national partner projects contribute to GUARDIANS capabilities and delivery.",
        href: "/partners-contributions",
        linkLabel: "View partner entries",
      },
      {
        title: "Contact",
        description:
          "Get in touch about using resources, collaboration, media, funding, or site feedback.",
        href: '/contact',
        linkLabel: "Email the team",
      },
    ],
  },
};
