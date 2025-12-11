import convexPlugin from "@convex-dev/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([
    "**/*.js",
    "**/*.cjs",
    "**/*.mjs",
    ".next/**",
    ".vscode/**",
    "app/**",
    "components/**",
    "convex/_generated/**",
    "lib/**",
    "providers/**",
    "scripts/**",
  ]),

  tseslint.configs.base,

  ...convexPlugin.configs.recommended,
]);
