import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs"; 
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";
import htmlTemplate from "rollup-plugin-generate-html-template";
import clear from "rollup-plugin-clear"; 
import esbuild from "rollup-plugin-esbuild"; 
import livereload from "rollup-plugin-livereload"; // 热更新实时刷新页面 websocket 连接 和 HMR关系？
import postcss from "rollup-plugin-postcss"; 
import resolve from "@rollup/plugin-node-resolve"; 
import typescript from "rollup-plugin-typescript2";
import mdx from "@mdx-js/rollup"; 
import json from "@rollup/plugin-json"; 
import progress from "rollup-plugin-progress"; 
//import terser from "@rollup/plugin-terser";
export default {
  input: "src/index.tsx",
  output: {
    file: "./dist/bundle.js",
    format: "es",
  },
  plugins: [
    clear(["dist"]),
    babel({
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
      exclude: "node_modules/**", // 只编译源代码
    }), 
    mdx(),
    json(),
    commonjs(),
    resolve({
      extensions: [".mjs", ".js", ".json", ".ts", ".tsx"],
    }),
    typescript(),
    postcss({
      extensions: [".css"],
      extract: true,
      modules: true,
    }),

    esbuild({
      sourceMap: true,
      target: "es2015",
      loaders: { ".tsx": "ts" },
      tsconfig: "tsconfig.json",
    }),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    progress({
      default: true,
    }),
    // terser(), 线上开启
    serve({
      open: true,
      contentBase: ["dist"],
      historyApiFallback: true, 
      port: 8080, 
    }),
    livereload(),
    htmlTemplate({
      template: "./src/index.html",
      target: "./dist/index.html",
    }),
  ],
};

