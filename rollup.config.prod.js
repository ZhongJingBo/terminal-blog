import { basePlugins } from "./rollup.config.mjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/main.tsx",
  output: {
    dir: "./dist",
    chunkFileNames: "[name]-[hash].js", // 指定 chunk 文件名的格式
    format: "es",
    sourcemap: true, // 生成源映射文件
    manualChunks: (id) => {
      // 分离 node_modules 中的第三方依赖
      if (id.includes("node_modules")) {
        // 检查是否是我们定义的需要单独分包的依赖
        const packageName = vendorPackages.find((pkg) =>
          id.includes(`/node_modules/${pkg}`)
        );
        if (packageName) {
          return `vendor-${packageName}`;
        }
        // 其他第三方依赖打包到 vendor
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
    },
  },
  plugins: [...basePlugins, terser()],
};
