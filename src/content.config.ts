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
      "Federated and scalable analysis",
      "Secure access",
      "Governance, policy and operations",
      "Training and community capability",
    ]),
    outputType: z.enum([
      "Service",
      "Software / tool",
      "Data resource",
      "Infrastructure component",
      "Documentation / guidance",
      "Training material",
      "Publication / report",
      "Event / activity",
    ]),
    status: z.enum(["Available", "Pilot", "In development", "Planned"]),
    visibility: z.enum(["Public", "Limited access", "Internal / enabling"]),
    leadPartner: z.string(),
    contributingPartners: z.array(z.string()).default([]),
    contributionTypes: z.array(
      z.enum([
        "Technical delivery",
        "Infrastructure operations",
        "Data stewardship",
        "Governance / ELSI expertise",
        "Standards / interoperability",
        "Research translation",
        "Training / capability building",
        "Community engagement",
        "Program coordination",
      ]),
    ),
    intendedUsers: z.array(z.string()).default([]),
    href: z.string().optional(),
    relatedPartners: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draftInferred: z.boolean().default(true),
  }),
});

const partners = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    shortRole: z.string(),
    contributionAreas: z.array(
      z.enum([
        "Data discovery",
        "Data commons and repositories",
        "Federated and scalable analysis",
        "Secure access",
        "Governance, policy and operations",
        "Training and community capability",
      ]),
    ),
    contributionTypes: z.array(
      z.enum([
        "Technical delivery",
        "Infrastructure operations",
        "Data stewardship",
        "Governance / ELSI expertise",
        "Standards / interoperability",
        "Research translation",
        "Training / capability building",
        "Community engagement",
        "Program coordination",
      ]),
    ),
    relatedCatalogue: z.array(z.string()),
    website: z.string().optional(),
    logo: z.string().optional(),
    draftInferred: z.boolean().default(true),
  }),
});

export const collections = { catalogue, partners };
