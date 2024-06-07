import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 用于代理跨域等一些配置
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
});
