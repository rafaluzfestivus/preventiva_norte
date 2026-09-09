// eslint-config-next ships a native ESLint 9 flat-config array (the
// combined "next" + "next/typescript" rule sets) as its default export, so
// no FlatCompat/legacy-shareable-config bridging is needed. The previous
// FlatCompat-wrapped setup crashed with
// "TypeError: Converting circular structure to JSON" under ESLint 9.x +
// eslint-config-next — inherited from the este fork and never actually run.
import nextConfig from "eslint-config-next";

const eslintConfig = [...nextConfig];

export default eslintConfig;
