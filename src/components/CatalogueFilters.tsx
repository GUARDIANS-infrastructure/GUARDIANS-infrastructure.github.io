import { useEffect, useMemo, useState } from "preact/hooks";

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
  draftInferred: boolean;
};

type Props = {
  items: CatalogueItem[];
  capabilities: string[];
  outputTypes: string[];
  statusValues: string[];
  visibilityValues: string[];
  partners: string[];
};

const emptyFilterState = {
  capability: "",
  outputType: "",
  status: "",
  visibility: "",
  partner: "",
};

export default function CatalogueFilters(props: Props) {
  const [filters, setFilters] = useState(emptyFilterState);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setFilters({
      capability: params.get("capability") ?? "",
      outputType: params.get("type") ?? "",
      status: params.get("status") ?? "",
      visibility: params.get("visibility") ?? "",
      partner: params.get("partner") ?? "",
    });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(filters)) {
      if (!value) continue;
      params.set(key === "outputType" ? "type" : key, value);
    }

    const search = params.toString();
    const next = `${window.location.pathname}${search ? `?${search}` : ""}#catalogue`;
    window.history.replaceState({}, "", next);
  }, [filters]);

  const filteredItems = useMemo(() => {
    return props.items.filter((item) => {
      const partnerMatch =
        !filters.partner ||
        item.leadPartner === filters.partner ||
        item.contributingPartners.includes(filters.partner);

      return (
        (!filters.capability || item.capability === filters.capability) &&
        (!filters.outputType || item.outputType === filters.outputType) &&
        (!filters.status || item.status === filters.status) &&
        (!filters.visibility || item.visibility === filters.visibility) &&
        partnerMatch
      );
    });
  }, [filters, props.items]);

  const updateFilter = (name: keyof typeof emptyFilterState, value: string) => {
    setFilters((current) => ({ ...current, [name]: value }));
  };

  return (
    <div class="filters">
      <div class="filters__toolbar">
        <label>
          Capability area
          <select
            value={filters.capability}
            onChange={(event) =>
              updateFilter("capability", event.currentTarget.value)
            }
          >
            <option value="">All capability areas</option>
            {props.capabilities.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
        </label>
        <label>
          Output type
          <select
            value={filters.outputType}
            onChange={(event) =>
              updateFilter("outputType", event.currentTarget.value)
            }
          >
            <option value="">All output types</option>
            {props.outputTypes.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
        </label>
        <label>
          Status
          <select
            value={filters.status}
            onChange={(event) =>
              updateFilter("status", event.currentTarget.value)
            }
          >
            <option value="">All status values</option>
            {props.statusValues.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
        </label>
        <label>
          Visibility / access
          <select
            value={filters.visibility}
            onChange={(event) =>
              updateFilter("visibility", event.currentTarget.value)
            }
          >
            <option value="">All visibility values</option>
            {props.visibilityValues.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
        </label>
        <label>
          Partner
          <select
            value={filters.partner}
            onChange={(event) =>
              updateFilter("partner", event.currentTarget.value)
            }
          >
            <option value="">All partners</option>
            {props.partners.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
        </label>
      </div>

      <div class="filters__summary">
        <p>
          {filteredItems.length} catalogue item
          {filteredItems.length === 1 ? "" : "s"} shown
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
                {item.draftInferred && <span class="badge">Draft</span>}
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
                    <a class="chip" href={`/partners-contributions#${partner}`}>
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
                <a class="card__link" href={item.href ?? "/contact"}>
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
