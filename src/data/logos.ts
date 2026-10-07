import { organisationByName, type OrganisationName } from "./vocabularies";

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

const projectLogo = (name: OrganisationName, className: string) => ({
  ...logoFor(name),
  className,
});

// Project and consortium marks belong on their contribution cards, not in the
// organisation vocabulary or partner logo wall.
export const projectMarks: Partial<
  Record<string, { alt: string; src: string; className: string }>
> = {
  "biological-psychiatry-data-commons": {
    alt: "Consortium for Preclinical Psychiatric Research (CPPR)",
    src: "/assets/logos/cppr.png",
    className: "project-logo--cppr",
  },
  "integrated-human-multi-omics-data-commons": {
    alt: "PX4",
    src: "/assets/logos/px4.png",
    className: "project-logo--px4",
  },
};

export const partnerLogos = [
  logoFor("Australian BioCommons", "logo-mark--wide", "logo-tile--wide"),
  logoFor(
    "Baker Heart & Diabetes Institute",
    "logo-mark--baker",
    "logo-tile--wide",
  ),
  logoFor("Australian Access Federation", "logo-mark--wide", "logo-tile--wide"),
  logoFor(
    "National Computational Infrastructure",
    "logo-mark--wide",
    "logo-tile--wide",
  ),
  logoFor(
    "Children's Cancer Institute / Zero Childhood Cancer",
    "logo-mark--wide",
    "logo-tile--wide",
  ),
  logoFor(
    "Garvan Institute of Medical Research",
    "logo-mark--wide",
    "logo-tile--wide",
  ),
  logoFor(
    "Centre for Population Genomics",
    "logo-mark--cpg",
    "logo-tile--wide",
  ),
  logoFor(
    "QIMR Berghofer Medical Research Institute",
    "logo-mark--wide",
    "logo-tile--wide",
  ),
  logoFor("University of Sydney", "logo-mark--wide", "logo-tile--wide"),
  logoFor("Monash University", "logo-mark--monash", "logo-tile--wide"),
  // Keep the University of Melbourne last in the partner logo wall.
  logoFor("University of Melbourne", "logo-mark--uom-wall", "logo-tile--wide"),
];

export const funderLogos = [
  {
    ...logoFor("Australian BioCommons"),
    href: "https://www.biocommons.org.au/",
  },
  {
    ...logoFor("Bioplatforms Australia"),
    href: "https://bioplatforms.com/",
  },
  {
    ...logoFor("National Collaborative Research Infrastructure Strategy"),
    href: "https://www.education.gov.au/ncris",
  },
];

export const projectOrganisationLogos: Partial<
  Record<OrganisationName, { alt: string; src: string; className: string }>
> = {
  "Australian BioCommons": projectLogo(
    "Australian BioCommons",
    "project-logo--wide",
  ),
  "National Computational Infrastructure": projectLogo(
    "National Computational Infrastructure",
    "project-logo--compact",
  ),
  "Australian Access Federation": projectLogo(
    "Australian Access Federation",
    "project-logo--aaf",
  ),
  "Baker Heart & Diabetes Institute": projectLogo(
    "Baker Heart & Diabetes Institute",
    "project-logo--baker",
  ),
  "Monash University": projectLogo("Monash University", "project-logo--monash"),
  "Centre for Population Genomics": projectLogo(
    "Centre for Population Genomics",
    "project-logo--wide",
  ),
  "University of Melbourne": projectLogo(
    "University of Melbourne",
    "project-logo--seal",
  ),
  "University of Sydney": projectLogo(
    "University of Sydney",
    "project-logo--compact",
  ),
  "Children's Cancer Institute / Zero Childhood Cancer": projectLogo(
    "Children's Cancer Institute / Zero Childhood Cancer",
    "project-logo--wide",
  ),
  "QIMR Berghofer Medical Research Institute": projectLogo(
    "QIMR Berghofer Medical Research Institute",
    "project-logo--wide",
  ),
  "Garvan Institute of Medical Research": projectLogo(
    "Garvan Institute of Medical Research",
    "project-logo--garvan",
  ),
};
