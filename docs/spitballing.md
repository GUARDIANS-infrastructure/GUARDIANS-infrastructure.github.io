```
## Context

The [GUARDIANS](https://www.biocommons.org.au/guardians) program of work is 18 months into Phase I of its delivery (total timeline=3.5 years, Phase I = 2 years; Phase II = 18 months).

We have established that there is a need for a web page or pages to achieve the following:
* Communication & awareness. "what is GUARDIANS". Audiences = primarily: funders, media, potential new program partners, and secondarily: researcher users.
* Service and resource catalog. "what has been built that is useful for me". Audiences = primarily: researcher users, secondarily: potential new program partners, peer consortia.

Some challenges and working constraints that we're aware of:
* How to represent the work of the program partners equitably? Not all partner work is delivering a public-facing service, but it's important to document and represent
* How to achieve coherent messaging and branding, across the range of partner projects
* How to centre GUARDIANS as a BioCommons-sponsored and -coordinated activity while recognizing BPA and NCRIS funding, and the delivery work done by partners?
---
Some prior art may be found at https://guardians-infrastructure.github.io/guardians-lp-model/, where our wonderful senior business analyst developed an early prototype for feedback.
---

## My early goals
* establish "what it is" that we actually need to build
* establish whom we are building this for
* get something up and running, for initial feedback
---
### guidelines
* use up-to-date web content formats, conventions, idioms
* identify any similar programs of work, evaluate how successful their web presence(s) are, and use that to inform this work
* I want to spend no more than 4 hours on this initial phase. At the end of this I want something ready for user testing. I imagine this four hours will be spent on conversations with you, scoping the project, writing specs, finding and creating content & resources, deploying code. 
### non-goals
It is a non-goal to go back to stakeholders to establish what they want. It's better to put something out there for feedback than do endless rounds of requirements gathering.

## Ways of working
* Ask me for more information at any point, if you feel it's important. But don't get hung up on minor clarifications.
* Push back against anything I propose that doesn't make sense to you.
* Probe for assumptions, check for unknown unknowns (what haven't I asked?)
* Stay keen, but keep the tone professional. I don't need hype.

##
Task 1.
Draft a tight one-page project delivery plan.
```


# GUARDIANS web presence — 4-hour delivery plan

## Purpose

Deliver a lightweight, testable GUARDIANS web prototype that answers two questions:

1. **What is GUARDIANS?**
2. **What has GUARDIANS produced that I can use, reference, or engage with?**

The site should serve funders, media, partners, peer infrastructure programs, and researcher users, but it should not try to satisfy all of them equally on day one.

The working model should be:

> GUARDIANS is a BioCommons-coordinated national infrastructure program, delivered with partners, that helps Australian researchers discover, access, share, and analyse human genomics and related omics data securely and responsibly.

That framing is consistent with the current BioCommons description of GUARDIANS as national digital infrastructure for secure discovery, access and analysis of human genomics data. ([Australian BioCommons][1])

---

## Product shape

Build **two connected page types**, not a sprawling website.

### 1. Program landing page

Purpose: communication, credibility, orientation.

Sections:

1. Hero statement
2. “What GUARDIANS is”
3. “Why it matters”
4. “What we are building”
5. Key capability areas
6. Partner delivery model
7. Featured outputs / services
8. Funding and coordination acknowledgement
9. Contact / get involved

### 2. Outputs catalogue

Purpose: service/resource discovery.

Each item should have:

| Field           | Purpose                                                                          |
| --------------- | -------------------------------------------------------------------------------- |
| Name            | What is it called?                                                               |
| Type            | Service, tool, dataset, repository, policy/guidance, training, code, publication |
| Capability area | Discovery, access, analysis, repository, governance, identity, training          |
| User value      | What can someone do with it?                                                     |
| Status          | Available, pilot, in development, planned                                        |
| Lead partner(s) | Attribution without making the IA partner-first                                  |
| Link            | Where to go next                                                                 |

This avoids the current prototype’s main risk: it is structured heavily around projects and partners, which is useful internally but not always how external users think. The prototype already has strong raw material: project pages, product/service areas, publications, open-source code, user pathways, partner references, and “by the numbers” content. ([guardians-infrastructure.github.io][2])

---

## Key design decision

Use **capabilities as the primary organising principle**, and **partners as attribution**.

Do not make the primary navigation:

> Partner A / Partner B / Partner C

Use:

> Discover data
> Access data securely
> Analyse data
> Share and manage data
> Governance, ethics and policy
> Training and support

Then, inside each capability, show which partner projects contribute.

This is how similar infrastructure programs avoid looking like a list of funded subprojects. ELIXIR, for example, separates “services and resources”, “programme”, “impact”, “collaboration”, nodes, platforms and communities rather than leading only with institutional structure. ([elixir-europe.org][3]) GA4GH similarly leads with action pathways such as open calls, products, participation, news and events. ([ga4gh.org][4])

---

## What to build in 4 hours

### Hour 1 — Decide the content model

Deliver:

* one-page information architecture
* page section list
* catalogue schema
* status taxonomy
* first-pass audience mapping

Concrete output:

```text
Home
Catalogue
About GUARDIANS
Partners
Updates / resources
Contact
```

Strong pushback: do **not** build a deep multi-level navigation for the first test. The existing prototype has many nested menu items; that is likely too much for first-pass user testing. ([guardians-infrastructure.github.io][2])

---

### Hour 2 — Convert existing material into structured content

Use the existing prototype and BioCommons page as source material.

Create:

* 1 concise hero statement
* 3–5 capability cards
* 6–10 catalogue entries
* partner/funding acknowledgement
* 2–3 calls to action

Avoid placeholders. The current prototype still contains obvious placeholder text and uncleared content, including lorem ipsum, an uncleared quote, and a stray “fintech startup” footer section. Those must be removed before testing. ([guardians-infrastructure.github.io][2])

---

### Hour 3 — Implement the prototype

Use the fastest maintainable path:

* static HTML / Astro / Next static export
* Tailwind or existing BioCommons-compatible styling
* GitHub Pages is fine for this phase
* no CMS
* no dynamic backend
* no authentication
* no partner-specific subsite structure

The deliverable is a **content prototype**, not a production platform.

---

### Hour 4 — QA and prepare testing

Minimum QA:

* mobile layout
* broken links
* obvious placeholder scan
* accessibility basics: headings, contrast, alt text, link labels
* “Can I understand this in 30 seconds?” test
* “Can I find something useful in 2 clicks?” test

Prepare a short feedback prompt:

1. What do you think GUARDIANS is?
2. Who do you think this site is for?
3. What would you click next?
4. What feels missing or unclear?
5. Did anything feel misleading or overclaimed?

---

# Recommended first version structure

## Hero

**GUARDIANS is building national digital infrastructure for secure, responsible human genomics and omics data sharing in Australia.**

Supporting text:

> Coordinated by Australian BioCommons and delivered with national partners, GUARDIANS helps researchers discover, access, analyse and share sensitive human omics data using interoperable infrastructure, standards, governance support and training.

Primary CTA:

> Explore outputs and services

Secondary CTA:

> Learn about the program

---

## Capability areas

Use 5 cards:

1. **Data discovery**
   Helping researchers find relevant human genomics and omics datasets.

2. **Secure access**
   Shared identity, access management and governance-aware access workflows.

3. **Data commons and repositories**
   Infrastructure for managing, sharing and stewarding priority datasets.

4. **Federated and scalable analysis**
   Approaches that support analysis across distributed infrastructure.

5. **Governance, policy and training**
   Legal, ethical, operational and workforce support for responsible data sharing.

These map well to the BioCommons GUARDIANS deliverables: Data Commons, National Genome Repository, Access and Security, Innovation Pilots, and Expertise and Training. ([Australian BioCommons][1])

---

## Catalogue filters

For the initial version, use simple static filters or grouped sections:

* Services and tools
* Data infrastructure
* Guidance and governance
* Training and support
* Publications and code
* Pilots and in-development work

Avoid “available to researchers” as the only category, because some partner outputs are not services but are still legitimate program deliverables.

---

# Main changes from my previous answer

1. **Narrower scope:** two page types, not a general microsite.
2. **More explicit use of the existing prototype:** treat it as raw content and IA evidence, not just prior art.
3. **Clearer pushback:** do not use partner/project structure as the top-level IA.
4. **More concrete catalogue schema:** this is the most important reusable asset from the first phase.
5. **Less emphasis on visual identity:** useful, but not the bottleneck.
6. **More emphasis on removing unsafe prototype content:** placeholders and uncleared quotes will undermine testing.
7. **Sharper success criteria:** comprehension and findability, not polish.

# Definition of done

After 4 hours, you should have:

* a live prototype URL
* one landing page
* one catalogue page
* 6–10 real catalogue entries
* no lorem ipsum or uncleared quotes
* clear BioCommons / BPA / NCRIS / partner acknowledgement
* a five-question feedback script
* enough structure to decide whether the next iteration should become a BioCommons page, standalone microsite, or catalogue-backed resource

The governing principle should be:

> Build the smallest public-facing artefact that can test the message, the audience model, and the catalogue structure.

[1]: https://www.biocommons.org.au/guardians?utm_source=chatgpt.com "GUARDIANS — Australian BioCommons"
[2]: https://guardians-infrastructure.github.io/guardians-lp-model/ "GUARDIANS"
[3]: https://elixir-europe.org/ "Welcome to ELIXIR | ELIXIR"
[4]: https://www.ga4gh.org/?utm_source=chatgpt.com "GA4GH"

