import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

const isDev = process.env.npm_lifecycle_event === "dev" || process.argv.includes("dev");

export default defineConfig({
  integrations: [preact()],
  output: "static",
  base: isDev ? "/" : "/website",
});
