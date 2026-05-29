import { organisationByName, type OrganisationName } from "./vocabularies";

export {
  capabilities,
  contributionTypes,
  outputTypes,
  statusValues,
  visibilityValues,
} from "./vocabularies";

export const site = {
  title: "GUARDIANS",
  description:
    "A national partnership building secure, interoperable infrastructure for human omics research.",
  siteFeedbackEmail: "conrad@biocommons.org.au",
  collaborationEnquiryEmail: "bernie@biocommons.org.au",
  coordinationEnquiryEmail: "jess@biocommons.org.au",
  serviceResourceEmail: "conrad@biocommons.org.au",
  fundingAcknowledgement:
    "Australian BioCommons and the GUARDIANS program are supported by Bioplatforms Australia. Bioplatforms Australia is enabled by NCRIS.",
  hostingAcknowledgement:
    "The Australian BioCommons project is led by the University of Melbourne, and hosted within the University’s Faculty of Medicine, Dentistry and Health Sciences.",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services-resources", label: "Services & resources" },
  { href: "/partners-contributions", label: "Partners & contributions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const logoFor = (
  name: OrganisationName,
  className?: string,
  tileClassName?: string,
) => {
  const organisation = organisationByName[name];

  if (!organisation.logoSrc) {
    throw new Error(`Missing logo source for ${name}`);
  }

  return {
    alt: organisation.displayName ?? organisation.name,
    src: organisation.logoSrc,
    ...(className ? { className } : {}),
    ...(tileClassName ? { tileClassName } : {}),
  };
};

export const partnerLogos = [
  logoFor("Australian BioCommons", "logo-mark--wide", "logo-tile--wide"),
  logoFor("Australian Access Federation", "logo-mark--compact", "logo-tile--wide"),
  logoFor("University of Melbourne", "logo-mark--seal", "logo-tile--square"),
  logoFor("National Compute Infrastructure", "logo-mark--compact", "logo-tile--wide"),
  logoFor("University of Sydney", "logo-mark--compact", "logo-tile--wide"),
  logoFor("Children's Cancer Institute / Zero Childhood Cancer", "logo-mark--wide", "logo-tile--wide"),
  logoFor("QIMR Berghofer Medical Research Institute", "logo-mark--wide", "logo-tile--wide"),
  logoFor("Garvan Institute of Medical Research", "logo-mark--wide", "logo-tile--wide"),
];

export const funderLogos = [
  logoFor("Australian BioCommons"),
  logoFor("Bioplatforms Australia"),
  logoFor("National Collaborative Research Infrastructure Strategy"),
];
