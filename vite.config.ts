import { axios } from 'axios';
import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'//vit 中解析VUE文件的插件

import AutoImport from 'unplugin-auto-import/vite' //自动引入插件 vue 等api 不需要import
import Components from 'unplugin-vue-components/vite'//自动引入VUE组件插件 ，不需要import
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// Element自动导入 图标
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import electron from "vite-plugin-electron";
import renderer from "vite-plugin-electron-renderer";

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  plugins: [
    Vue(),
    electron({
      entry: "electron/main/index.ts",
    }),
    renderer(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: [
        'vue',
        'vue-router', 
        'pinia',
        {
          'axios': [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
        },
      ],
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],

      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),

    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        //自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],//"ep"为elemetplus图标组
        }),
      ],

      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
    Icons({
      autoInstall: true,
    }),
    //Inspect(),
  ],
  build: {
    outDir: 'dist', // 设置输出目录
    /** 单个 chunk 文件的大小超过 2048KB 时发出警告 */
    chunkSizeWarningLimit: 2048,
    /** 禁用 gzip 压缩大小报告 */
    reportCompressedSize: false,
    /** 打包后静态资源目录 */
    assetsDir: "static",
    rollupOptions: {
      output: {
        /**
           * 分块策略
           * 1. 注意这些包名必须存在，否则打包会报错
           * 2. 如果你不想自定义 chunk 分割策略，可以直接移除这段配置
           */
        manualChunks: {
          vue: ["vue", "vue-router", 'pinia', 'axios'],
          element: ["element-plus", "@element-plus/icons-vue"],
        }
      },
    },
  }
})