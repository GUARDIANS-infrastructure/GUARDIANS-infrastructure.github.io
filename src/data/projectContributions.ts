export const organisationLogos: Record<string, { alt: string; src: string; className: string }> = {
  BioCommons: {
    alt: "Australian BioCommons",
    src: "/assets/logos/biocommons.png",
    className: "project-logo--wide",
  },
  NCI: {
    alt: "National Compute Infrastructure",
    src: "/assets/logos/nci.png",
    className: "project-logo--compact",
  },
  AAF: {
    alt: "Australian Access Federation",
    src: "/assets/logos/aaf.png",
    className: "project-logo--compact",
  },
  "UniMelb Law": {
    alt: "University of Melbourne",
    src: "/assets/logos/uom.png",
    className: "project-logo--seal",
  },
  USyd: {
    alt: "University of Sydney",
    src: "/assets/logos/usyd.png",
    className: "project-logo--compact",
  },
  "CCI/ZERO": {
    alt: "Children's Cancer Institute / Zero Childhood Cancer",
    src: "/assets/logos/zerocci.png",
    className: "project-logo--wide",
  },
  "UniMelb PX4/OMIX3": {
    alt: "University of Melbourne",
    src: "/assets/logos/uom.png",
    className: "project-logo--seal",
  },
  "QIMR Berghofer": {
    alt: "QIMR Berghofer Medical Research Institute",
    src: "/assets/logos/qimrb.png",
    className: "project-logo--wide",
  },
  Garvan: {
    alt: "Garvan Institute of Medical Research",
    src: "/assets/logos/garvan.png",
    className: "project-logo--wide",
  },
  "UniMelb CCGCM": {
    alt: "University of Melbourne",
    src: "/assets/logos/uom.png",
    className: "project-logo--seal",
  },
};

export const projectContributions = [
  {
    title: "Core Services and Expertise",
    organisations: ["BioCommons"],
    description:
      "Australian BioCommons is leading the Core Services and Expertise Platform, spanning leadership and coordination, technical expertise, supporting infrastructure, training and community development.",
    capabilityAreas: [
      "Governance, policy and operations",
      "Training and community capability",
      "Federated and scalable analysis",
    ],
  },
  {
    title: "A National Repository For Human Omics Research Data Connected To Computing Resources",
    organisations: ["NCI"],
    description:
      "The National Computational Infrastructure is developing a national repository capability for controlled-access human genomics data connected to high-performance computing.",
    capabilityAreas: [
      "Data commons and repositories",
      "Federated and scalable analysis",
      "Secure access",
    ],
  },
  {
    title: "Trust and Identity for Human Genomics Research Infrastructure",
    organisations: ["AAF"],
    description:
      "The Australian Access Federation is contributing authentication and authorisation infrastructure, single sign-on, policy baselines and access pathways for researchers using GUARDIANS services.",
    capabilityAreas: ["Secure access", "Governance, policy and operations"],
  },
  {
    title: "Omics data beyond Australia's borders: law, ethics and governance",
    organisations: ["USyd", "UniMelb Law"],
    description:
      "The University of Sydney and University of Melbourne Law Schools are examining legal, ethical and governance questions around international access to Australian human omics research data.",
    capabilityAreas: ["Governance, policy and operations"],
  },
  {
    title: "ZERO Data Commons: an interoperable human genome data sharing portal",
    organisations: ["CCI/ZERO"],
    description:
      "The Children's Cancer Institute ZERO Data Commons project is developing a standards-aligned data commons for paediatric cancer clinical, molecular and outcome data, supporting discovery while protecting privacy and consent conditions.",
    capabilityAreas: [
      "Data commons and repositories",
      "Data discovery",
      "Governance, policy and operations",
    ],
  },
  {
    title: "A data commons for integrated human multi-omics data",
    organisations: ["UniMelb PX4/OMIX3"],
    description:
      "The University of Melbourne OMIX3 data platform is establishing infrastructure for secure storage, sharing and analysis of clinically accredited human multi-omics datasets.",
    capabilityAreas: [
      "Data commons and repositories",
      "Federated and scalable analysis",
    ],
  },
  {
    title: "Genomic Data Commons",
    organisations: ["QIMR Berghofer"],
    description:
      "QIMR Berghofer Medical Research Institute is establishing an Australian genomic data sharing repository for major cancer genomics datasets, and documenting a reusable implementation pathway for other research groups.",
    capabilityAreas: [
      "Data commons and repositories",
      "Data discovery",
      "Secure access",
    ],
  },
  {
    title: "Scalable, Open and Connected Genomics Infrastructure",
    organisations: ["Garvan"],
    description:
      "Garvan Institute of Medical Research is contributing open, connected and scalable infrastructure for rare disease data analysis, consent management, data governance and reuse.",
    capabilityAreas: [
      "Data commons and repositories",
      "Data discovery",
      "Governance, policy and operations",
    ],
  },
  {
    title: "Genomic Data Nodes",
    organisations: ["UniMelb CCGCM"],
    description:
      "The Collaborative Centre for Genomic Cancer Medicine GDN project is piloting a framework for mutually trusted omics research environments, federated data exchange, shared services, access controls and operational reporting.",
    capabilityAreas: [
      "Data commons and repositories",
      "Federated and scalable analysis",
      "Secure access",
    ],
  },
];
