import { defineCollection, z } from "astro:content";
import {
  capabilityValues,
  contributionTypes,
  intendedUserValues,
  organisationNames,
  outputTypes,
  statusValues,
  visibilityValues,
} from "./data/vocabularies";

const catalogue = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    userValue: z.string(),
    capability: z.enum(capabilityValues),
    outputType: z.enum(outputTypes),
    status: z.enum(statusValues),
    visibility: z.enum(visibilityValues),
    leadOrganisations: z.array(z.enum(organisationNames)),
    contributingOrganisations: z.array(z.enum(organisationNames)).default([]),
    contributionTypes: z.array(z.enum(contributionTypes)),
    intendedUsers: z.array(z.enum(intendedUserValues)).default([]),
    href: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { catalogue };
