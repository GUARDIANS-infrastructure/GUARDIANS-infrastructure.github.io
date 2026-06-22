type TextSegment = string | {
  text: string;
  href: string;
};

export const site = {
  title: "GUARDIANS",
  description:
    "A national partnership building digital infrastructure for human omics research.",
  siteFeedbackEmail: "guardians-site-feedback@biocommons.org.au",
  collaborationEnquiryEmail: "guardians-collaboration@biocommons.org.au",
  coordinationEnquiryEmail: "guardians-coordination@biocommons.org.au",
  serviceResourceEmail: "guardians-services@biocommons.org.au",
  footerAcknowledgements: [
    [
      "The GUARDIANS program is led by ",
      {
        text: "Australian BioCommons",
        href: "https://www.biocommons.org.au/",
      },
      " with contributions from partner organisations including the ",
      {
        text: "Australian Access Federation",
        href: "https://aaf.edu.au/",
      },
      ", ",
      {
        text: "Children’s Cancer Institute Australia",
        href: "https://www.ccia.org.au/",
      },
      ", ",
      {
        text: "Garvan Institute of Medical Research",
        href: "https://www.garvan.org.au/",
      },
      ", ",
      {
        text: "National Computational Infrastructure",
        href: "https://nci.org.au/",
      },
      ", ",
      {
        text: "QIMR Berghofer Medical Research Institute",
        href: "https://www.qimrb.edu.au/",
      },
      ", ",
      {
        text: "The University of Melbourne",
        href: "https://www.unimelb.edu.au/",
      },
      ", and ",
      {
        text: "The University of Sydney",
        href: "https://www.sydney.edu.au/",
      },
      ".",
    ],
    [
      "The Australian BioCommons project is led by the University of Melbourne and hosted within the University’s Faculty of Medicine, Dentistry and Health Sciences.",
    ],
    [
      "Australian BioCommons and the GUARDIANS program are supported by ",
      {
        text: "Bioplatforms Australia",
        href: "https://bioplatforms.com/",
      },
      ". Bioplatforms Australia is enabled by ",
      {
        text: "NCRIS",
        href: "https://www.education.gov.au/ncris",
      },
      ".",
    ],
  ] satisfies TextSegment[][],
};
