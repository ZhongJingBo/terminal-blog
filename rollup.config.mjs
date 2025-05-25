import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
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
import dev from "rollup-plugin-dev";
import terser from "@rollup/plugin-terser";

// 环境变量
const isProduction = process.env.NODE_ENV === "production";

// 共享的 manualChunks 配置
export const getManualChunks = (id) => {
  // 分离 node_modules 中的第三方依赖
  if (id.includes("node_modules")) {
    // 基础框架相关
    if (
      id.includes("/node_modules/react") ||
      id.includes("/node_modules/react-dom")
    ) {
      return "vendor-react";
    }
    // 路由相关
    if (
      id.includes("/node_modules/react-router") ||
      id.includes("/node_modules/react-router-dom")
    ) {
      return "vendor-router";
    }
    // Markdown 相关
    if (
      id.includes("/node_modules/marked-react") ||
      id.includes("/node_modules/marked")
    ) {
      return "vendor-markdown";
    }
    // 其他第三方依赖
    return "vendor";
  }

  // 分离页面级组件
  if (id.includes("/src/pages/")) {
    const match = id.match(/\/src\/pages\/([^/]+)/);
    if (match && match[1]) {
      return `page-${match[1]}`;
    }
  }

  // 分离组件
  if (id.includes("/src/component/")) {
    return "components";
  }

  // 分离 hooks
  if (id.includes("/src/hooks/")) {
    return "hooks";
  }

  // 其他业务代码
  if (id.includes("/src/")) {
    return "main";
  }
};

// 共享的输出配置
export const getOutputConfig = (isProduction) => ({
  dir: "./dist",
  format: "es",
  sourcemap: !isProduction,
  manualChunks: getManualChunks,
  chunkFileNames: (chunkInfo) => {
    if (chunkInfo.name.startsWith("vendor-")) {
      return "vendor/[name]-[hash].js";
    }
    if (chunkInfo.name.startsWith("page-")) {
      return "pages/[name]-[hash].js";
    }
    return "[name]-[hash].js";
  },
});

export const basePlugins = [
  clear({
    targets: ["dist"],
  }),
  replace({
    preventAssignment: true,
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  }),
  json(),
  commonjs(),
  resolve({
    extensions: [".mjs", ".js", ".json", ".ts", ".tsx"],
  }),
  esbuild({
    include: /\.[jt]sx?$/,
    sourceMap: !isProduction,
    target: "es2015",
    tsconfig: "tsconfig.json",
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    minify: isProduction,
  }),
  postcss({
    extensions: [".css", ".scss", ".sass"],
    extract: true,
    modules: true,
    use: ["sass"],
    minimize: isProduction,
  }),
  mdx(),
  dynamicImportVars(),
  progress({
    default: true,
  }),
  html({
    fileName: "index.html",
    template: () => {
      const templateContent = fs.readFileSync("index.html", "utf-8");
      return templateContent;
    },
  }),
];

export default {
  input: "src/main.tsx",
  output: getOutputConfig(true),
  plugins: [
    ...basePlugins,
    dev({
      dirs: ["dist"],
      host: "localhost",
      port: 8083,
      force: true,
      spa: true,
      server: { connectionTimeout: 3000 },
      proxy: [{ from: "/api", to: "http://postforge.zhongzhong.top/" }],
    }),
  ],
};
