import {
  organisationByName,
  type DeliveryUnitName,
  type OrganisationName,
} from "./vocabularies";

type ProjectContribution = {
  title: string;
  leadOrganisations: OrganisationName[];
  deliveryUnits?: DeliveryUnitName[];
  collaboratingOrganisations?: OrganisationName[];
  description: string;
  capabilityAreas: string[];
};

const projectLogo = (name: OrganisationName, className: string) => {
  const organisation = organisationByName[name];

  if (!organisation.logoSrc) {
    throw new Error(`Missing logo source for ${name}`);
  }

  return {
    alt: organisation.displayName ?? organisation.name,
    src: organisation.logoSrc,
    className,
  };
};

export const organisationLogos: Partial<Record<OrganisationName, { alt: string; src: string; className: string }>> = {
  "Australian BioCommons": projectLogo("Australian BioCommons", "project-logo--wide"),
  "National Compute Infrastructure": projectLogo("National Compute Infrastructure", "project-logo--compact"),
  "Australian Access Federation": projectLogo("Australian Access Federation", "project-logo--compact"),
  "University of Melbourne": projectLogo("University of Melbourne", "project-logo--seal"),
  "University of Sydney": projectLogo("University of Sydney", "project-logo--compact"),
  "Children's Cancer Institute / Zero Childhood Cancer": projectLogo("Children's Cancer Institute / Zero Childhood Cancer", "project-logo--wide"),
  "QIMR Berghofer Medical Research Institute": projectLogo("QIMR Berghofer Medical Research Institute", "project-logo--wide"),
  "Garvan Institute of Medical Research": projectLogo("Garvan Institute of Medical Research", "project-logo--wide"),
};

export const projectContributions: ProjectContribution[] = [
  {
    title: "Core Services and Expertise",
    leadOrganisations: ["Australian BioCommons"],
    description:
      "Australian BioCommons is leading the Core Services and Expertise Platform, spanning leadership and coordination, technical expertise, supporting infrastructure, training and community development.",
    capabilityAreas: [
      "Data discovery",
      "Data access management",
      "Governance, policy and operations",
    ],
  },
  {
    title: "A National Repository For Human Omics Research Data Connected To Computing Resources",
    leadOrganisations: ["National Compute Infrastructure"],
    description:
      "The National Computational Infrastructure is developing a national repository capability for controlled-access human genomics data connected to high-performance computing.",
    capabilityAreas: [
      "Data commons and repositories",
      "Data access management",
      "Scalable analysis environments",
    ],
  },
  {
    title: "Trust and Identity for Human Genomics Research Infrastructure",
    leadOrganisations: ["Australian Access Federation"],
    description:
      "The Australian Access Federation is contributing authentication and authorisation infrastructure, single sign-on, policy baselines and access pathways for researchers using GUARDIANS services.",
    capabilityAreas: [
      "Trusted researcher identity",
      "Data access management",
      "Governance, policy and operations",
    ],
  },
  {
    title: "Omics data beyond Australia's borders: law, ethics and governance",
    leadOrganisations: ["University of Sydney", "University of Melbourne"],
    description:
      "The University of Sydney and University of Melbourne Law Schools are examining legal, ethical and governance questions around international access to Australian human omics research data.",
    capabilityAreas: ["Governance, policy and operations"],
  },
  {
    title: "ZERO Data Commons: an interoperable human genome data sharing portal",
    leadOrganisations: ["Children's Cancer Institute / Zero Childhood Cancer"],
    description:
      "The Children's Cancer Institute ZERO Data Commons project is developing a standards-aligned data commons for paediatric cancer clinical, molecular and outcome data, supporting discovery while protecting privacy and consent conditions.",
    capabilityAreas: [
      "Data discovery",
      "Data commons and repositories",
      "Data access management",
    ],
  },
  {
    title: "A Data Commons for Integrated Human Multi-Omics Data",
    leadOrganisations: ["University of Melbourne"],
    deliveryUnits: ["Melbourne School of Psychological Sciences", "Bio21 Institute"],
    description:
      "The University of Melbourne OMIX3 data platform is establishing infrastructure for secure storage, sharing and analysis of clinically accredited human multi-omics datasets.",
    capabilityAreas: [
      "Data commons and repositories",
      "Scalable analysis environments",
      "Data access management",
    ],
  },
  {
    title: "Genomic Data Commons",
    leadOrganisations: ["QIMR Berghofer Medical Research Institute"],
    description:
      "QIMR Berghofer Medical Research Institute is establishing an Australian genomic data sharing repository for major cancer genomics datasets, and documenting a reusable implementation pathway for other research groups.",
    capabilityAreas: [
      "Data discovery",
      "Data commons and repositories",
      "Data access management",
    ],
  },
  {
    title: "Scalable, Open and Connected Genomics Infrastructure",
    leadOrganisations: ["Garvan Institute of Medical Research"],
    collaboratingOrganisations: ["Murdoch Children's Research Institute"],
    description:
      "Garvan Institute of Medical Research is contributing open, connected and scalable infrastructure for rare disease data analysis, consent management, data governance and reuse.",
    capabilityAreas: [
      "Data discovery",
      "Scalable analysis environments",
      "Data access management",
    ],
  },
  {
    title: "Genomic Data Nodes",
    leadOrganisations: ["University of Melbourne"],
    deliveryUnits: ["Collaborative Centre for Genomic Cancer Medicine"],
    description:
      "The Collaborative Centre for Genomic Cancer Medicine GDN project is piloting a framework for mutually trusted omics research environments, federated data exchange, shared services, access controls and operational reporting.",
    capabilityAreas: [
      "Data commons and repositories",
      "Scalable analysis environments",
      "Data access management",
    ],
  },
];
