/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-01 22:05:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-04 23:46:44
 * @FilePath: /V3_Project/src/main.ts
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router';
// ts Notice: This is error message; it is must configure the tsconfig file "baseUrl" and "paths" properties
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.mount('#app');
