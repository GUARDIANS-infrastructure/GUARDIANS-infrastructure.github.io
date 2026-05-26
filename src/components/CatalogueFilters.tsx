import { useEffect, useMemo, useState } from "preact/hooks";
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
  leadPartner: string;
  contributingPartners: string[];
  contributionTypes: string[];
  relatedPartners: string[];
  href?: string;
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

    for (const [key, values] of Object.entries(filters) as [
      FilterName,
      string[],
    ][]) {
      for (const value of values) {
        params.append(filterParamNames[key], value);
      }
    }

    const search = params.toString();
    const next = `${withBase("/services-resources")}${search ? `?${search}` : ""}#catalogue`;
    window.history.replaceState({}, "", next);
  }, [filters]);

  const filteredItems = useMemo(() => {
    return props.items.filter((item) => {
      return (
        matchesOne(filters.capability, item.capability) &&
        matchesOne(filters.outputType, item.outputType) &&
        matchesOne(filters.status, item.status) &&
        matchesOne(filters.visibility, item.visibility)
      );
    });
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

  const activeFilterCount = Object.values(filters).reduce(
    (count, values) => count + values.length,
    0,
  );

  return (
    <div class="filters">
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

      <div class="filters__summary">
        <p>
          {filteredItems.length} catalogue item
          {filteredItems.length === 1 ? "" : "s"} shown
          {activeFilterCount > 0
            ? ` across ${activeFilterCount} selected filter${activeFilterCount === 1 ? "" : "s"}`
            : ""}
        </p>
        <button
          class="filters__button"
          type="button"
          onClick={() => setFilters(emptyFilterState)}
        >
          Clear filters
        </button>
      </div>

      {filteredItems.length === 0 ? (
        <div class="filters__empty">
          No sample items match the current filters. This prototype leaves
          unsupported content areas empty rather than inventing additional
          entries.
        </div>
      ) : (
        <div class="grid grid-2">
          {filteredItems.map((item) => (
            <article class="card" id={item.slug}>
              <div class="chips">
                <span class="badge badge-strong">{item.status}</span>
                <span class="badge">{item.visibility}</span>
                <span class="badge">{item.outputType}</span>
              </div>
              <div class="stack-md">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p>
                  <strong>User value:</strong> {item.userValue}
                </p>
              </div>
              <div class="stack-md">
                <div class="meta-list">
                  <span class="chip">{item.capability}</span>
                  <span class="chip">Lead: {item.leadPartner}</span>
                </div>
                {item.contributingPartners.length > 0 && (
                  <p>
                    <strong>Contributing partners:</strong>{" "}
                    {item.contributingPartners.join(", ")}
                  </p>
                )}
                <p>
                  <strong>Contribution types:</strong>{" "}
                  {item.contributionTypes.join(", ")}
                </p>
                <div class="meta-list">
                  {item.relatedPartners.map((partner) => (
                    <a class="chip" href={withBase(`/partners-contributions#${partner}`)}>
                      Partner entry
                    </a>
                  ))}
                </div>
              </div>
              <div class="card__footer">
                <div class="meta-list">
                  {item.intendedUsers?.map?.((user: string) => (
                    <span class="chip">{user}</span>
                  ))}
                </div>
                <a class="card__link" href={withBase(item.href ?? "/contact")}>
                  {item.href
                    ? "Use or view resource"
                    : "Contact about this item"}
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
