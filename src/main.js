// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles.css' // 创建一个全局样式文件

createApp(App)
  .use(router)
  .mount('#app')