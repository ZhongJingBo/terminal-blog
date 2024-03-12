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

export default {
  input: "src/main.tsx",
  output: {
    dir: "./dist",
    chunkFileNames: "[name]-[hash].js", // 指定 chunk 文件名的格式
    format: "es",
    sourcemap: true, // 生成源映射文件
  },
  plugins: [
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

    // terser(), 线上开启
    html({
      fileName: "index.html",
      template: () => {
        // 读取外部 HTML 模板文件
        const templateContent = fs.readFileSync("index.html", "utf-8");
        return templateContent;
      },
    }),
    serve({
      open: true,
      contentBase: ["dist"],
      historyApiFallback: true,
      port: 8080,
    }),
    livereload(),
  ],
};

/*
  1. 使用dynamicImportVars包解决了动态路由不跳转到新页面的问题 但是直接新开动态路由页面依然会报同样的错误
  2. 打包好的 index.html  src="bundle.js" 改为 src="/bundle.js"

    请注意/in /index.js，这很重要。如果您将其设为relative( <script src="index.js"></script>)，则可能会导致 CSR 出现问题。

    稍微长一点的答案：

    客户端路由器（CSR）通过包装浏览器位置 api 来工作，您可以在页面中创建它可以拦截的特殊链接。

    当你第一次加载页面时，通过在浏览器中输入url，页面中还没有运行javascript，因此请求发送到服务器，服务器必须知道这是一个前端页面并返回根html，即使服务器端没有任何匹配的路由。

    rollup-plugin-serve 中的标志historyApiFallback: true将其配置为每次无法匹配 url 时从公共文件夹返回 index.html 页面。

    当引用 index.html 中的相关资源时，这可能会导致问题。例如：

    呼叫一个端点/users/1
    Rollup 服务无法找到其资源，因此默认返回index.html
    index.html 引用相对的index.js<script src="index.js"></script>
    浏览器尝试通过 get for 来获取资源/users/1/index.js
    Rollupserve找不到静态资源，默认返回index.html



    rollup 如何实现组件的按需加载  chunks



    类似krump的开发列表 
    input中根据标签搜索到对应数据信息
**/

// rollup-plugin-preserve-modules
