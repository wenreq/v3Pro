/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-01 22:11:41
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-02 21:35:40
 * @FilePath: /V3_Project/src/router/index.ts
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/views/Index.vue';
import AddGoodVue from '@/views/AddGood.vue';
import Login from '@/views/Login.vue';

const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/add',
      name: 'add',
      component: AddGoodVue,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});

export default router;
