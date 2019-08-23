// @ts-nocheck
import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.ts", // our source file
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
    {
      file: pkg.browser,
      format: "umd",
      name: "wrapping",
    },
  ],
  external: [],
  plugins: [typescript({ typescript: require("typescript") }), terser()],
};
