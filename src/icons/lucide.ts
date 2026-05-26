type IconSegment =
  | {
      type: "circle";
      attrs: Record<string, string>;
    }
  | {
      type: "ellipse";
      attrs: Record<string, string>;
    }
  | {
      type: "path";
      attrs: Record<string, string>;
    }
  | {
      type: "rect";
      attrs: Record<string, string>;
    };

export const lucideIconSegments = {
  "book-open-check": [
    { type: "path", attrs: { d: "M12 21V7" } },
    { type: "path", attrs: { d: "m16 12 2 2 4-4" } },
    {
      type: "path",
      attrs: {
        d: "M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",
      },
    },
  ],
  "calendar-range": [
    { type: "rect", attrs: { width: "18", height: "18", x: "3", y: "4", rx: "2" } },
    { type: "path", attrs: { d: "M16 2v4" } },
    { type: "path", attrs: { d: "M3 10h18" } },
    { type: "path", attrs: { d: "M8 2v4" } },
    { type: "path", attrs: { d: "M17 14h-6" } },
    { type: "path", attrs: { d: "M13 18H7" } },
    { type: "path", attrs: { d: "M7 14h.01" } },
    { type: "path", attrs: { d: "M17 18h.01" } },
  ],
  "code-xml": [
    { type: "path", attrs: { d: "m18 16 4-4-4-4" } },
    { type: "path", attrs: { d: "m6 8-4 4 4 4" } },
    { type: "path", attrs: { d: "m14.5 4-5 16" } },
  ],
  "database-search": [
    { type: "path", attrs: { d: "M21 11.693V5" } },
    { type: "path", attrs: { d: "m22 22-1.875-1.875" } },
    { type: "path", attrs: { d: "M3 12a9 3 0 0 0 8.697 2.998" } },
    { type: "path", attrs: { d: "M3 5v14a9 3 0 0 0 9.28 2.999" } },
    { type: "circle", attrs: { cx: "18", cy: "18", r: "3" } },
    { type: "ellipse", attrs: { cx: "12", cy: "5", rx: "9", ry: "3" } },
  ],
  "external-link": [
    { type: "path", attrs: { d: "M15 3h6v6" } },
    { type: "path", attrs: { d: "M10 14 21 3" } },
    {
      type: "path",
      attrs: {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      },
    },
  ],
  "file-text": [
    {
      type: "path",
      attrs: {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      },
    },
    { type: "path", attrs: { d: "M14 2v5a1 1 0 0 0 1 1h5" } },
    { type: "path", attrs: { d: "M10 9H8" } },
    { type: "path", attrs: { d: "M16 13H8" } },
    { type: "path", attrs: { d: "M16 17H8" } },
  ],
  flag: [
    {
      type: "path",
      attrs: {
        d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
      },
    },
  ],
  handshake: [
    { type: "path", attrs: { d: "m11 17 2 2a1 1 0 1 0 3-3" } },
    {
      type: "path",
      attrs: {
        d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
      },
    },
    { type: "path", attrs: { d: "m21 3 1 11h-2" } },
    { type: "path", attrs: { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" } },
    { type: "path", attrs: { d: "M3 4h8" } },
  ],
  mail: [
    { type: "path", attrs: { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" } },
    { type: "rect", attrs: { x: "2", y: "4", width: "20", height: "16", rx: "2" } },
  ],
  megaphone: [
    {
      type: "path",
      attrs: {
        d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
      },
    },
    {
      type: "path",
      attrs: { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" },
    },
    { type: "path", attrs: { d: "M8 6v8" } },
  ],
  "message-square": [
    {
      type: "path",
      attrs: {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      },
    },
  ],
  milestone: [
    { type: "path", attrs: { d: "M12 13v8" } },
    { type: "path", attrs: { d: "M12 3v3" } },
    {
      type: "path",
      attrs: {
        d: "M18.172 6a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
      },
    },
  ],
  "mouse-pointer-click": [
    { type: "path", attrs: { d: "M14 4.1 12 6" } },
    { type: "path", attrs: { d: "m5.1 8-2.9-.8" } },
    { type: "path", attrs: { d: "m6 12-1.9 2" } },
    { type: "path", attrs: { d: "M7.2 2.2 8 5.1" } },
    {
      type: "path",
      attrs: {
        d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
      },
    },
  ],
  workflow: [
    { type: "rect", attrs: { width: "8", height: "8", x: "3", y: "3", rx: "2" } },
    { type: "path", attrs: { d: "M7 11v4a2 2 0 0 0 2 2h4" } },
    { type: "rect", attrs: { width: "8", height: "8", x: "13", y: "13", rx: "2" } },
  ],
} as const satisfies Record<string, readonly IconSegment[]>;

export type LucideIconName = keyof typeof lucideIconSegments;

export const lucideIconMarkup = Object.fromEntries(
  Object.entries(lucideIconSegments).map(([name, segments]) => [
    name,
    segments
      .map((segment) => {
        const attrs = Object.entries(segment.attrs)
          .map(([key, value]) => `${key}="${value}"`)
          .join(" ");

        return `<${segment.type} ${attrs} />`;
      })
      .join(""),
  ]),
) as Record<LucideIconName, string>;
