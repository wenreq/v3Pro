import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// ts Notice: 错误提示：找不到模块 “path” 或其相应的类型声明 或者 找不到名称 “__dirname”
// Reserved: 对node进行类型声明 `yarn add @types/node -D` OR `npm i @types/node --D`
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite' // 不加这个配置，ElMessage出不来

const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // 按需引入，主题色的配置，需要加上 importStyle: 'sass'
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass'
      })],
    }),
    // 用于内部方法调用，样式缺失的现象，如 ElMessage 等
    ElementPlus()
  ],
  resolve: {
    alias: {
      '~': resolve('./'),
      '@': path.resolve(__dirname, 'src')
    },
  },
  base: mode == 'development' ? './' : (mode == 'beta' ? '//s.baidu.com/beta/xxx' : '//s.baidu.com/release/xxx'), // 静态资源路径配置
  server: {
    proxy: {
      '/api': {
        target: 'http://backend-api-02.newbee.ltd/manage-api/v1', // 凡是遇到 /api 路径的请求，都映射到 target 属性
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 重写 api 为 空，就是去掉它
      }
    }
  },
  css: {
    preprocessorOptions: {
      // 覆盖掉 element-plus 包中的主题变量文件
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    }
  },
})
