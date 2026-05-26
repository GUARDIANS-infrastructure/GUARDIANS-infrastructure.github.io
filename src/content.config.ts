import { defineCollection, z } from "astro:content";

const catalogue = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    userValue: z.string(),
    capability: z.enum([
      "Data discovery",
      "Data commons and repositories",
      "Scalable analysis environments",
      "Data access management",
      "Governance, policy and operations",
      "Trusted researcher identity",
    ]),
    outputType: z.enum([
      "Service",
      "Software / tool",
      "Data resource",
      "Infrastructure component",
      "Documentation / guidance",
      "Publication / report",
    ]),
    status: z.enum(["Available", "Pilot", "In development"]),
    visibility: z.enum(["Public", "Limited access", "Internal"]),
    leadOrganisations: z.array(z.string()),
    contributingOrganisations: z.array(z.string()).default([]),
    contributionTypes: z.array(
      z.enum([
        "Technical delivery",
        "Infrastructure operations",
        "Data stewardship",
        "Governance / expertise",
        "Standards / interoperability",
        "Training / capability building",
        "Community engagement",
        "Program coordination",
      ]),
    ),
    intendedUsers: z.array(z.string()).default([]),
    href: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { catalogue };
