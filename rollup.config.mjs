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

// 定义需要分离的第三方依赖
const vendorPackages = ['react', 'react-dom', 'react-router-dom', 'marked-react'];

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
    extensions: [".css", ".scss", ".sass"],
    extract: true,
    modules: true,
    use: ['sass']
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
    format: "es",
    sourcemap: true,
    manualChunks: (id) => {
      // 分离 node_modules 中的第三方依赖
      if (id.includes('node_modules')) {
        // 检查是否是我们定义的需要单独分包的依赖
        const packageName = vendorPackages.find(pkg => id.includes(`/node_modules/${pkg}`));
        if (packageName) {
          return `vendor-${packageName}`;
        }
        // 其他第三方依赖打包到 vendor
        return 'vendor';
      }
      
      // 分离页面级组件
      if (id.includes('/src/pages/')) {
        const match = id.match(/\/src\/pages\/([^/]+)/);
        if (match && match[1]) {
          return `page-${match[1]}`;
        }
      }

      // 分离组件
      if (id.includes('/src/component/')) {
        return 'components';
      }

      // 分离 hooks
      if (id.includes('/src/hooks/')) {
        return 'hooks';
      }

      // 其他业务代码
      if (id.includes('/src/')) {
        return 'main';
      }
    },
    chunkFileNames: (chunkInfo) => {
      if (chunkInfo.name.startsWith('vendor-')) {
        return 'vendor/[name]-[hash].js';
      }
      if (chunkInfo.name.startsWith('page-')) {
        return 'pages/[name]-[hash].js';
      }
      return '[name]-[hash].js';
    },
  },
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
    livereload(),
  ],
};
