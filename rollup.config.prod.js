import { basePlugins, getOutputConfig } from "./rollup.config.mjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/main.tsx",
  output: getOutputConfig(false),
  plugins: [...basePlugins, terser()],
};
