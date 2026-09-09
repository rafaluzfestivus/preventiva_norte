// eslint-config-next's bare default export only contains the "next" rule
// block plus an ignores block — it does NOT include the "core-web-vitals"
// or "typescript" rule sets. Those must be imported and spread explicitly
// to actually get TypeScript-aware linting (e.g. @typescript-eslint/no-explicit-any).
// (No FlatCompat/legacy-shareable-config bridging is needed here — these are
// native ESLint 9 flat-config arrays.)
import cwv from "eslint-config-next/core-web-vitals";
import ts from "eslint-config-next/typescript";

const eslintConfig = [...cwv, ...ts];

export default eslintConfig;
