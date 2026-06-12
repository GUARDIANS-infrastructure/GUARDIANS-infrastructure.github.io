import type { LucideIconName } from "../icons/lucide";

export const capabilities = [
  {
    name: "Data discovery",
    icon: "database-search",
    summary:
      "National catalogues and metadata patterns that help researchers find relevant human omics datasets.",
  },
  {
    name: "Data commons and repositories",
    icon: "database",
    summary:
      "Repository and data commons capabilities for nationally significant human omics collections.",
  },
  {
    name: "Scalable analysis environments",
    icon: "workflow",
    summary:
      "Controlled computing environments and workflows for human omics analysis at scale.",
  },
  {
    name: "Trusted researcher identity",
    icon: "badge-check",
    summary:
      "Researcher identity, trust, and assurance capabilities that support access across national services.",
  },
  {
    name: "Data access management",
    icon: "key-round",
    summary:
      "Technical and governance workflows for requests, approvals, entitlements, and controlled access.",
  },
  {
    name: "Governance, policy and operations",
    icon: "book-open-check",
    summary:
      "Guidance, access models, and operational patterns that enable ethical and compliant national delivery.",
  },
] as const satisfies readonly {
  name: string;
  icon: LucideIconName;
  summary: string;
}[];

export const capabilityValues = capabilities.map((capability) => capability.name) as [
  (typeof capabilities)[number]["name"],
  ...(typeof capabilities)[number]["name"][],
];

export const outputTypes = [
  "Service",
  "Software / tool",
  "Data resource",
  "Infrastructure component",
  "Documentation / guidance",
  "Publication / report",
] as const;

export const statusValues = ["Available", "Pilot", "In development"] as const;

export const visibilityValues = [
  "Public",
  "Limited access",
  "Internal",
] as const;

export const contributionTypes = [
  "Technical delivery",
  "Infrastructure operations",
  "Data stewardship",
  "Governance / expertise",
  "Standards / interoperability",
  "Training / capability building",
  "Community engagement",
  "Program coordination",
] as const;

export const organisations = [
  {
    name: "Australian BioCommons",
    shortName: "BioCommons",
    logoSrc: "/assets/logos/biocommons.png",
  },
  {
    name: "Australian Access Federation",
    shortName: "AAF",
    logoSrc: "/assets/logos/aaf.png",
  },
  {
    name: "Bioplatforms Australia",
    shortName: "BPA",
    logoSrc: "/assets/logos/bpa.png",
  },
  {
    name: "Centre for Population Genomics",
    shortName: "CPG",
  },
  {
    name: "Children's Cancer Institute / Zero Childhood Cancer",
    shortName: "CCI/ZERO",
    logoSrc: "/assets/logos/zerocci.png",
  },
  {
    name: "Garvan Institute of Medical Research",
    shortName: "Garvan",
    logoSrc: "/assets/logos/garvan.png",
  },
  {
    name: "Murdoch Children's Research Institute",
    shortName: "MCRI",
  },
  {
    name: "National Collaborative Research Infrastructure Strategy",
    shortName: "NCRIS",
    displayName: "NCRIS",
    logoSrc: "/assets/logos/ncris.png",
  },
  {
    name: "National Computational Infrastructure",
    shortName: "NCI",
    logoSrc: "/assets/logos/nci.png",
  },
  {
    name: "QIMR Berghofer Medical Research Institute",
    shortName: "QIMR Berghofer",
    logoSrc: "/assets/logos/qimrb.png",
  },
  {
    name: "University of Melbourne",
    shortName: "UniMelb",
    logoSrc: "/assets/logos/uom.png",
  },
  {
    name: "University of Sydney",
    shortName: "USyd",
    logoSrc: "/assets/logos/usyd.png",
  },
] as const;

export const organisationNames = organisations.map((organisation) => organisation.name) as [
  (typeof organisations)[number]["name"],
  ...(typeof organisations)[number]["name"][],
];

export const deliveryUnitValues = [
  "Bio21 Institute",
  "Collaborative Centre for Genomic Cancer Medicine",
  "Melbourne School of Psychological Sciences",
] as const;

export const intendedUserValues = [
  "Clinician researchers",
  "Data owners",
  "Data stewards and custodians",
  "Funders and media",
  "Funding agencies",
  "Infrastructure operators",
  "Infrastructure providers",
  "Partners",
  "Product owners and engineers",
  "Researchers",
  "Software developers",
] as const;

export type OrganisationName = (typeof organisationNames)[number];
export type OrganisationShortName = (typeof organisations)[number]["shortName"];
export type DeliveryUnitName = (typeof deliveryUnitValues)[number];

export const organisationByName = Object.fromEntries(
  organisations.map((organisation) => [organisation.name, organisation]),
) as Record<OrganisationName, (typeof organisations)[number]>;

export const organisationByShortName = Object.fromEntries(
  organisations.map((organisation) => [organisation.shortName, organisation]),
) as Record<OrganisationShortName, (typeof organisations)[number]>;

export const organisationLabel = (name: OrganisationName) =>
  organisationByName[name].displayName ?? organisationByName[name].name;
