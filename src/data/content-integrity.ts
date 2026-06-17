type CatalogueEntry = {
  id: string;
  data: {
    title: string;
    partnerContributions: string[];
  };
};

type PartnerContributionEntry = {
  data: {
    projectSlug: string;
    title: string;
    order: number;
  };
};

export const validatePartnerContributionIntegrity = (
  catalogueEntries: CatalogueEntry[],
  partnerContributionEntries: PartnerContributionEntry[],
) => {
  const projectTitleBySlug = new Map<string, string>();
  const duplicateProjectSlugs = new Set<string>();

  for (const entry of partnerContributionEntries) {
    const { projectSlug, title } = entry.data;

    if (projectTitleBySlug.has(projectSlug)) {
      duplicateProjectSlugs.add(projectSlug);
      continue;
    }

    projectTitleBySlug.set(projectSlug, title);
  }

  const unknownReferences: string[] = [];

  for (const entry of catalogueEntries) {
    for (const slug of entry.data.partnerContributions) {
      if (!projectTitleBySlug.has(slug)) {
        unknownReferences.push(`${entry.id} -> ${slug}`);
      }
    }
  }

  if (duplicateProjectSlugs.size > 0 || unknownReferences.length > 0) {
    const messages: string[] = [];

    if (duplicateProjectSlugs.size > 0) {
      messages.push(
        `Duplicate partner contribution projectSlug values: ${[...duplicateProjectSlugs]
          .sort()
          .join(", ")}`,
      );
    }

    if (unknownReferences.length > 0) {
      messages.push(
        `Unknown partner contribution references in catalogue entries:\n${unknownReferences
          .sort()
          .map((reference) => `- ${reference}`)
          .join("\n")}`,
      );
    }

    throw new Error(messages.join("\n\n"));
  }

  return partnerContributionEntries
    .slice()
    .sort((first, second) => first.data.order - second.data.order)
    .map((entry) => ({
      value: entry.data.projectSlug,
      label: entry.data.title,
    }));
};
