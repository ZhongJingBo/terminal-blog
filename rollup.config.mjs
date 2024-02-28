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
  input: "src/main.tsx",
  output: {
    file: "./dist/bundle.js",
    format: "es",
    sourcemap: true, // 生成源映射文件
    inlineDynamicImports: true, // 内联动态导入
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

// rollup 打包react-rourter 动态路由报错 替换为vite进行打包 rollup作为构建工具，使用react- router动态由报错
// 看一下 @vitejs/plugin-react 如何解决
