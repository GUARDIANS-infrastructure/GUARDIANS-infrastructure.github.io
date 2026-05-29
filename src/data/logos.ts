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

export const projectOrganisationLogos: Partial<Record<OrganisationName, { alt: string; src: string; className: string }>> = {
  "Australian BioCommons": projectLogo("Australian BioCommons", "project-logo--wide"),
  "National Compute Infrastructure": projectLogo("National Compute Infrastructure", "project-logo--compact"),
  "Australian Access Federation": projectLogo("Australian Access Federation", "project-logo--compact"),
  "University of Melbourne": projectLogo("University of Melbourne", "project-logo--seal"),
  "University of Sydney": projectLogo("University of Sydney", "project-logo--compact"),
  "Children's Cancer Institute / Zero Childhood Cancer": projectLogo("Children's Cancer Institute / Zero Childhood Cancer", "project-logo--wide"),
  "QIMR Berghofer Medical Research Institute": projectLogo("QIMR Berghofer Medical Research Institute", "project-logo--wide"),
  "Garvan Institute of Medical Research": projectLogo("Garvan Institute of Medical Research", "project-logo--wide"),
};
