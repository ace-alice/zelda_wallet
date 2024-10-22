import './utils/initData'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { registerSW } from 'virtual:pwa-register'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import 'virtual:svg-icons-register'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import { i18n } from '@/locale'
// import 'xgplayer/dist/index.min.css'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

// 引入字体
import './assets/fonts/index.scss'

// 路由守卫
import './guard'

// 注册SW 并自动更新提示
// registerSW({ immediate: true })

// 引入全局样式
import './theme/index.scss'

// 处理dom的默认行为
import 'default-passive-events'
import { loadCssById } from './utils/loadCssById'
import directives from './directives'

loadCssById(() => {
  const app = createApp(App)

  // 注册全局 event mitt方法
  app.config.globalProperties.mittBus = mitt()

  // 全局注册指令
  Object.keys(directives).forEach((directive) => {
    app.directive(directive, (directives as any)[directive])
  })

  const pinia = createPinia()

  // 使用 pinia-plugin-persistedstate 插件
  pinia.use(
    createPersistedState({
      key: (id) => `__persisted__${id}`
    })
  )

  app.use(pinia)
  app.use(router).use(i18n)
  app.use(i18n)
  app.use(ElementPlus)
  app.mount('#app')
})
