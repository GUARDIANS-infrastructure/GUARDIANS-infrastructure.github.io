import { defineCollection, z } from "astro:content";
import {
  capabilityValues,
  contributionTypes,
  deliveryUnitValues,
  intendedUserValues,
  organisationNames,
  outputTypes,
  statusValues,
  visibilityValues,
} from "./data/vocabularies";

const catalogue = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
      summary: z.string(),
      userValue: z.string(),
      capabilities: z.array(z.enum(capabilityValues)).min(1),
      primaryCapability: z.enum(capabilityValues),
      primaryOutputType: z.enum(outputTypes),
      outputTypes: z.array(z.enum(outputTypes)).min(1),
      status: z.enum(statusValues),
      visibility: z.enum(visibilityValues),
      leadOrganisations: z.array(z.enum(organisationNames)),
      contributingOrganisations: z.array(z.enum(organisationNames)).default([]),
      contributionTypes: z.array(z.enum(contributionTypes)),
      intendedUsers: z.array(z.enum(intendedUserValues)).default([]),
      partnerContributions: z
        .array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/))
        .default([]),
      href: z.string().optional(),
      featured: z.boolean().default(false),
    })
    .superRefine((data, context) => {
      if (!data.outputTypes.includes(data.primaryOutputType)) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["outputTypes"],
          message: "outputTypes must include primaryOutputType",
        });
      }

      if (!data.capabilities.includes(data.primaryCapability)) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["capabilities"],
          message: "capabilities must include primaryCapability",
        });
      }
    }),
});

const activity = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    type: z.enum(["Meeting", "News", "Output", "Release"]),
    href: z.string(),
  }),
});

const partnerContributions = defineCollection({
  type: "content",
  schema: z.object({
    projectSlug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string(),
    order: z.number(),
    leadOrganisations: z.array(z.enum(organisationNames)),
    deliveryUnits: z.array(z.enum(deliveryUnitValues)).default([]),
    collaboratingOrganisations: z.array(z.enum(organisationNames)).default([]),
    description: z.string(),
    capabilityAreas: z.array(z.enum(capabilityValues)),
  }),
});

export const collections = { activity, catalogue, "partner-contributions": partnerContributions };
