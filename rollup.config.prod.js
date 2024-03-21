import {basePlugins} from './rollup.config.mjs'
import terser  from '@rollup/plugin-terser'

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
      terser()
    ],
  };