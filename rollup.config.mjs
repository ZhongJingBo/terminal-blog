import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";
import fs from "fs";
import clear from "rollup-plugin-clear";
import esbuild from "rollup-plugin-esbuild";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";
import mdx from "@mdx-js/rollup";
import json from "@rollup/plugin-json";
import progress from "rollup-plugin-progress";
import html from "@rollup/plugin-html";

export const basePlugins = [
  clear({
    targets: ["dist"], // 指定要清除的输出目录
  }),
  replace({
    preventAssignment: true,
    "process.env.NODE_ENV": JSON.stringify("production"),
  }),

  json(),
  commonjs(),
  resolve({
    extensions: [".mjs", ".js", ".json", ".ts", ".tsx"],
  }),
  esbuild({
    include: /\.[jt]sx?$/,
    sourceMap: true,
    target: "es2015",
    tsconfig: "tsconfig.json",
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  }),

  postcss({
    extensions: [".css"],
    extract: true,
    modules: true,
  }),
  mdx(),
  dynamicImportVars(),
  progress({
    default: true,
  }),
  html({
    fileName: "index.html",
    template: () => {
      // 读取外部 HTML 模板文件
      const templateContent = fs.readFileSync("index.html", "utf-8");
      return templateContent;
    },
  }),
];


export default {
  input: "src/main.tsx",
  output: {
    dir: "./dist",
    chunkFileNames: "[name]-[hash].js", // 指定 chunk 文件名的格式
    format: "es",
    sourcemap: true, // 生成源映射文件
  },
  plugins: [
    ...basePlugins,
    serve({
      open: true,
      contentBase: ["dist"],
      historyApiFallback: true,
      port: 8082,
    }),
  
    livereload(),
  ],
};


