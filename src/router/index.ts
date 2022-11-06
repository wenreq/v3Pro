/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-01 22:11:41
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-06 17:41:53
 * @FilePath: /V3_Project/src/router/index.ts
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/views/Index.vue';
import AddGoodVue from '@/views/AddGood.vue';
import Login from '@/views/Login.vue';
import Swiper from '@/views/Swiper.vue';
import IndexConfig from '@/views/IndexConfig.vue';

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
    {
      path: '/swiper',
      name: 'swiper',
      component: Swiper,
    },
    {
      path: '/hot',
      name: 'hot',
      component: IndexConfig,
    },
    {
      path: '/new',
      name: 'new',
      component: IndexConfig,
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: IndexConfig,
    },
  ],
});

export default router;
