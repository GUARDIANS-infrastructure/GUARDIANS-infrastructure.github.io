export const withBase = (path: string) => {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  if (path === "/") {
    return `${base}/`;
  }

  return path.startsWith("/") ? `${base}${path}` : path;
};
