# Human Omics Research Data Infrastructure Roadmap

**User-centric design must lie at the heart of Australia's NDRI system**[^NDRIS]

This roadmap describes an evolution of national infrastructure supporting discovery, access and analysis of human omics research data in Australia.

It focuses on capabilities that should exist nationally, rather than detailed project milestones.

The roadmap baseline is Q1 2026, and the timeline extends to approximately mid-2029.

(2+2+2 timeline: next two quarters, then two halves, then two years)  
Q1 (0–3), Q2 (3–6), H2 (6–12), H3 (12–18), Y2+ (18–30), Y3+ (30–42)

![Fig 1. Roadmap](./diagrams/human-omics-capability-roadmap.svg)

---

# Purpose

Australia is experiencing rapid growth in research programs driven by genomics and other omics technologies. These technologies generate large and complex datasets that require robust infrastructure for storage, discovery, access and analysis.

However, current approaches to managing human omics research data in Australia are often fragmented and project-specific. This limits the ability of researchers to discover and reuse valuable datasets and to perform large-scale analysis across institutions.

The GUARDIANS program, funded through the National Collaborative Research Infrastructure Strategy (NCRIS), aims to address this challenge by delivering a coordinated national ecosystem of infrastructure, expertise and services.[^G7SGuidelines]

In short, Australia needs **a secure, interoperable data ecosystem for human omics research.**

---

# Scope and Audience

This roadmap provides a **strategic view of national human omics data infrastructure**.

Primary audience:

- Product owners, engineers and technical leads
- Infrastructure delivery teams within the GUARDIANS program

Secondary audience:

- Collaborators in the Australian genomics ecosystem
- National research infrastructure organisations
- Funding agencies

Operational delivery milestones for GUARDIANS Phase I are tracked separately [here](./tracker.md).

---

# Infrastructure Capability Model

The roadmap can be interpreted in terms of the capabilities required by key actors within the ecosystem.

## Researchers

Researchers should be able to:

- discover human omics datasets through national catalogues
- understand dataset access conditions
- request access to datasets
- analyse data securely using national compute infrastructure

---

## Data Owners

Data owners should be able to:

- host datasets within trusted national infrastructure
- define conditions for dataset access and use
- approve or reject access requests
- track usage of their datasets

---

## Data Stewards and Custodians

Data stewards and custodians should be able to:

- curate datasets using common metadata standards
- manage access requests on behalf of data owners
- host datasets securely within Australian jurisdiction

---

## Infrastructure Providers

Infrastructure providers should be able to:

- integrate with national identity and access systems
- monitor usage and cost of infrastructure resources
- deliver secure compute environments for analysis

---

# Alignment with FAIR Data Principles

The roadmap supports the FAIR data principles.

| Principle | Example infrastructure capability |
|-----------|-----------------------------------|
| **Findable** | National dataset catalogues and discovery services |
| **Accessible** | Data repositories and data access request systems |
| **Interoperable** | Standardised metadata, APIs and authentication |
| **Reusable** | Governance frameworks and analysis environments |

---

# Future Infrastructure Capabilities

The roadmap aims to enable several key national capabilities.


## National Data Repositories

Repositories capable of hosting and stewarding nationally significant human omics datasets within Australia.

These repositories should support both controlled data access and in-situ analysis.

---

## Secure Research Environments

Genome-scale environments enabling researchers to analyse sensitive datasets securely using national compute resources.

Both HPC and cloud compute infrastructure should be supported.

---

## Researcher Identity Infrastructure

National identity and access infrastructure enabling researchers to authenticate once and access authorised research services.

---

## National Dataset Catalogue

A comprehensive catalogue describing Australian human omics datasets, enabling researchers to discover data resources and understand access conditions.

---

## Ethical and Governance Frameworks

Best-practice frameworks supporting responsible sharing and reuse of human omics data.

These frameworks should align with national policy developments and international standards.

---

## Sustainable Infrastructure

Long-term sustainability models supporting the storage and analysis of nationally significant datasets.

This includes visibility of infrastructure costs and sustainable funding approaches.

---

# Architecture Principles

Development of national human omics data infrastructure should follow several key principles:

- **Federated infrastructure** — enabling collaboration across institutions while respecting data ownership
- **Standards-based interoperability** — alignment with international data and identity standards
- **Secure in-situ analysis** — enabling analysis without unnecessary data movement
- **Data sovereignty** — ensuring nationally significant datasets remain accessible within Australia
- **Open ecosystem** — enabling integration with research infrastructure and industry platforms

---

# Supporting Documentation

Detailed user stories describing the workflows of researchers, data owners, custodians and infrastructure providers are maintained as a living document:

https://github.com/GUARDIANS-infrastructure/architecture/blob/main/doc/stories/GUARDIANS_stories.md

---

# References

[^NDRIS]: National Digital Research Infrastructure Strategy  
https://www.education.gov.au/download/18373/national-digital-research-infrastructure-strategy/38409/document/pdf

[^G7SGuidelines]: GUARDIANS Guidelines  
https://docs.google.com/document/d/1n5Fdks1WBJuVrn8O4XpQy7N5VTtTgX_EBFMKweqR0ek/edit?usp=sharing
