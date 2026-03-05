import { defineConfig } from "@solidjs/start/config";

const githubRepo = process.env.GITHUB_REPOSITORY;
const repoName = githubRepo?.split("/")[1];
const inferredBase =
  repoName && !repoName.endsWith(".github.io") ? `/${repoName}/` : "/";
const basePath = process.env.BASE_PATH ?? inferredBase;
const baseURL = basePath === "/" ? "/" : basePath.replace(/\/+$/, "");

export default defineConfig({
  server: {
    baseURL,
    prerender: {
      crawlLinks: true,
    },
  },
  vite: {
    define: {
      "import.meta.env.APP_BASE_PATH": JSON.stringify(baseURL),
    },
  } as any,
});
