import { useEffect, useMemo, useState } from "preact/hooks";
import { lucideIconSegments, type LucideIconName } from "../icons/lucide";
import { withBase } from "../utils/paths";

type CatalogueItem = {
  slug: string;
  title: string;
  summary: string;
  userValue: string;
  capability: string;
  outputType: string;
  status: string;
  visibility: string;
  leadOrganisations: string[];
  contributingOrganisations: string[];
  contributionTypes: string[];
  href?: string;
  featured: boolean;
};

type Props = {
  items: CatalogueItem[];
  capabilities: string[];
  outputTypes: string[];
  statusValues: string[];
  visibilityValues: string[];
};

const emptyFilterState = {
  capability: [] as string[],
  outputType: [] as string[],
  status: [] as string[],
  visibility: [] as string[],
};

const filterParamNames = {
  capability: "capability",
  outputType: "type",
  status: "status",
  visibility: "visibility",
} as const;

type FilterName = keyof typeof emptyFilterState;

type FilterState = typeof emptyFilterState;

type QuickFilter = {
  label: string;
  description: string;
  icon: LucideIconName;
  filters: Partial<FilterState>;
};

type FilterGroupProps = {
  label: string;
  name: FilterName;
  options: string[];
  selected: string[];
  onToggle: (name: FilterName, value: string) => void;
};

function FilterGroup(props: FilterGroupProps) {
  return (
    <fieldset class="filters__group">
      <legend>{props.label}</legend>
      <div class="filters__chips">
        {props.options.map((option) => {
          const id = `${props.name}-${option.replace(/\W+/g, "-").toLowerCase()}`;

          return (
            <label class="filters__chip" for={id}>
              <input
                id={id}
                type="checkbox"
                checked={props.selected.includes(option)}
                onChange={() => props.onToggle(props.name, option)}
              />
              <span>{option}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

const matchesOne = (selected: string[], value: string) =>
  selected.length === 0 || selected.includes(value);

const sortFeaturedFirst = (items: CatalogueItem[]) =>
  [...items].sort((first, second) => {
    if (first.featured !== second.featured) {
      return first.featured ? -1 : 1;
    }

    return first.title.localeCompare(second.title);
  });

const badgeClassForValue = (value: string) => {
  const className = value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `badge badge--${className}`;
};

const linkLabelForItem = (item: CatalogueItem) => {
  const href = item.href;

  if (!href || href.startsWith("mailto:")) {
    return "Enquire";
  }

  if (item.outputType === "Software / tool") {
    return "View code";
  }

  if (item.outputType === "Documentation / guidance") {
    return "Read guidance";
  }

  if (item.outputType === "Publication / report") {
    return "Read report";
  }

  if (item.outputType === "Data resource") {
    return "View data resource";
  }

  if (item.outputType === "Infrastructure component") {
    return "View component";
  }

  return "Open service";
};

const linkIconForItem = (item: CatalogueItem) => {
  if (!item.href || item.href.startsWith("mailto:")) {
    return "mail";
  }

  if (item.outputType === "Software / tool") {
    return "code-xml";
  }

  if (
    item.outputType === "Documentation / guidance" ||
    item.outputType === "Publication / report"
  ) {
    return "file-text";
  }

  return "external-link";
};

function InlineLucideIcon(props: { className: string; icon: LucideIconName }) {
  return (
    <svg
      class={props.className}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {lucideIconSegments[props.icon].map((segment) => {
        if (segment.type === "circle") {
          return <circle {...segment.attrs} />;
        }

        if (segment.type === "ellipse") {
          return <ellipse {...segment.attrs} />;
        }

        if (segment.type === "rect") {
          return <rect {...segment.attrs} />;
        }

        return <path {...segment.attrs} />;
      })}
    </svg>
  );
}

const quickFilters: QuickFilter[] = [
  {
    label: "Find data",
    description: "Discover available and pilot data records and repository capabilities.",
    icon: "database-search",
    filters: {
      capability: ["Data discovery", "Data commons and repositories"],
      status: ["Available", "Pilot"],
    },
  },
  {
    label: "Use a service",
    description: "Browse available and pilot services.",
    icon: "workflow",
    filters: {
      outputType: ["Service"],
      status: ["Available", "Pilot"],
    },
  },
  {
    label: "Build infrastructure",
    description: "Find available tools and infrastructure components for delivery teams.",
    icon: "blocks",
    filters: {
      outputType: ["Software / tool", "Infrastructure component"],
      status: ["Available"],
    },
  },
  {
    label: "Access guidance",
    description: "Find available guidance for governance, access, and operations.",
    icon: "book-open-check",
    filters: {
      capability: ["Governance, policy and operations"],
      status: ["Available"],
    },
  },
];

const filterEntries = Object.entries(filterParamNames) as [
  FilterName,
  (typeof filterParamNames)[FilterName],
][];

const formatFilterLabel = (name: FilterName) =>
  ({
    capability: "Capability",
    outputType: "Output type",
    status: "Status",
    visibility: "Visibility",
  })[name];

const hasFilterValue = (filters: FilterState, name: FilterName, value: string) =>
  filters[name].includes(value);

const quickFilterIsActive = (filters: FilterState, quickFilter: QuickFilter) =>
  Object.entries(quickFilter.filters).every(([name, values]) =>
    (values ?? []).every((value) =>
      hasFilterValue(filters, name as FilterName, value),
    ),
  );

export default function CatalogueFilters(props: Props) {
  const [filters, setFilters] = useState(emptyFilterState);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setFilters({
      capability: params.getAll(filterParamNames.capability),
      outputType: params.getAll(filterParamNames.outputType),
      status: params.getAll(filterParamNames.status),
      visibility: params.getAll(filterParamNames.visibility),
    });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();

    for (const [key, values] of Object.entries(filters) as [FilterName, string[]][]) {
      for (const value of values) {
        params.append(filterParamNames[key], value);
      }
    }

    const search = params.toString();
    const next = `${withBase("/services-resources")}${search ? `?${search}` : ""}#catalogue`;
    window.history.replaceState({}, "", next);
  }, [filters]);

  const filteredItems = useMemo(() => {
    const matchingItems = props.items.filter((item) => {
      return (
        matchesOne(filters.capability, item.capability) &&
        matchesOne(filters.outputType, item.outputType) &&
        matchesOne(filters.status, item.status) &&
        matchesOne(filters.visibility, item.visibility)
      );
    });

    return sortFeaturedFirst(matchingItems);
  }, [filters, props.items]);

  const toggleFilter = (name: FilterName, value: string) => {
    setFilters((current) => {
      const values = current[name];
      const nextValues = values.includes(value)
        ? values.filter((item) => item !== value)
        : [...values, value];

      return { ...current, [name]: nextValues };
    });
  };

  const applyQuickFilter = (quickFilter: QuickFilter) => {
    setFilters((current) => {
      const isActive = quickFilterIsActive(current, quickFilter);
      const next = { ...emptyFilterState };

      if (isActive) {
        return next;
      }

      for (const [name, values] of Object.entries(quickFilter.filters) as [
        FilterName,
        string[],
      ][]) {
        next[name] = [...values];
      }

      return next;
    });
  };

  const removeFilter = (name: FilterName, value: string) => {
    setFilters((current) => ({
      ...current,
      [name]: current[name].filter((item) => item !== value),
    }));
  };

  const activeFilterCount = Object.values(filters).reduce(
    (count, values) => count + values.length,
    0,
  );

  const selectedDescriptions = filterEntries.flatMap(([name]) =>
    filters[name].map((value) => ({ name, value })),
  );

  return (
    <div class="filters">
      <section class="filters__quick" aria-labelledby="popular-pathways">
        <div class="filters__quick-heading">
          <div>
            <h3 id="popular-pathways">Popular pathways</h3>
            <p>Start with a common task, then refine the results if needed.</p>
          </div>
        </div>
        <div class="filters__quick-grid">
          {quickFilters.map((quickFilter) => {
            const isActive = quickFilterIsActive(filters, quickFilter);

            return (
              <button
                class={`filters__quick-card${isActive ? " is-active" : ""}`}
                type="button"
                aria-pressed={isActive}
                onClick={() => applyQuickFilter(quickFilter)}
              >
                <span class="filters__quick-title">
                  <InlineLucideIcon className="filters__quick-icon" icon={quickFilter.icon} />
                  <span>{quickFilter.label}</span>
                </span>
                <small>{quickFilter.description}</small>
              </button>
            );
          })}
        </div>
      </section>

      <div class="filters__summary">
        <div>
          <p>
            {filteredItems.length} catalogue item
            {filteredItems.length === 1 ? "" : "s"} shown
            {activeFilterCount > 0
              ? ` across ${activeFilterCount} selected filter${activeFilterCount === 1 ? "" : "s"}`
              : ""}
          </p>
          {selectedDescriptions.length > 0 && (
            <div class="filters__active" aria-label="Selected filters">
              {selectedDescriptions.map(({ name, value }) => (
                <button
                  class="filters__active-chip"
                  type="button"
                  onClick={() => removeFilter(name, value)}
                >
                  <span>{formatFilterLabel(name)}: {value}</span>
                  <span aria-hidden="true">×</span>
                </button>
              ))}
            </div>
          )}
        </div>
        {activeFilterCount > 0 && (
          <button
            class="filters__button"
            type="button"
            onClick={() => setFilters(emptyFilterState)}
          >
            Clear filters
          </button>
        )}
      </div>

      <details class="filters__details">
        <summary>More filters</summary>
        <div class="filters__toolbar">
          <FilterGroup
            label="Capability area"
            name="capability"
            options={props.capabilities}
            selected={filters.capability}
            onToggle={toggleFilter}
          />
          <FilterGroup
            label="Output type"
            name="outputType"
            options={props.outputTypes}
            selected={filters.outputType}
            onToggle={toggleFilter}
          />
          <FilterGroup
            label="Status"
            name="status"
            options={props.statusValues}
            selected={filters.status}
            onToggle={toggleFilter}
          />
          <FilterGroup
            label="Visibility / access"
            name="visibility"
            options={props.visibilityValues}
            selected={filters.visibility}
            onToggle={toggleFilter}
          />
        </div>
      </details>

      {filteredItems.length === 0 ? (
        <div class="filters__empty">
          No catalogue items match the current filters. Try removing one or
          more filters, or contact the GUARDIANS team if you need help finding
          the right pathway.
        </div>
      ) : (
        <div class="grid grid-2">
          {filteredItems.map((item) => (
            <article class="card" id={item.slug}>
              <div class="chips">
                <span class={badgeClassForValue(item.status)}>{item.status}</span>
                <span class={badgeClassForValue(item.visibility)}>{item.visibility}</span>
                <span class="badge">{item.outputType}</span>
              </div>
              <div class="stack-md">
                <div class="card__heading">
                  <h3>{item.title}</h3>
                  <a class="card__link" href={withBase(item.href ?? "/contact")}>
                    <InlineLucideIcon className="card__link-icon" icon={linkIconForItem(item)} />
                    {linkLabelForItem(item)}
                  </a>
                </div>
                <p>{item.summary}</p>
                {item.intendedUsers.length > 0 && (
                  <div class="card__audience">
                    <strong>For:</strong>
                    <div class="meta-list">
                      {item.intendedUsers.map((user: string) => (
                        <span class="chip">{user}</span>
                      ))}
                    </div>
                  </div>
                )}
                <p>
                  <strong>User value:</strong> {item.userValue}
                </p>
              </div>
              <div class="stack-md">
                <div class="meta-list">
                  <span class="chip">{item.capability}</span>
                </div>
                <p>
                  <strong>Lead organisation{item.leadOrganisations.length === 1 ? "" : "s"}:</strong>{" "}
                  {item.leadOrganisations.join(", ")}
                </p>
                {item.contributingOrganisations.length > 0 && (
                  <p>
                    <strong>Contributing organisation{item.contributingOrganisations.length === 1 ? "" : "s"}:</strong>{" "}
                    {item.contributingOrganisations.join(", ")}
                  </p>
                )}
                <p>
                  <strong>Contribution types:</strong>{" "}
                  {item.contributionTypes.join(", ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
