import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// 根据环境变量动态设置 base 路径
// 默认 waterwithin,可通过 VITE_BASE_PATH 覆盖
const basePath = process.env.VITE_BASE_PATH || '/waterwithin/';

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 部署需要设置 base 为仓库名路径
  // 不同仓库部署时,设置环境变量 VITE_BASE_PATH=/repoName/ 即可
  base: basePath,
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }),
    tsconfigPaths()
  ],
})
