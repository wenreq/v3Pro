/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-01 22:05:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-06 13:55:44
 * @FilePath: /V3_Project/src/vite-env.d.ts
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
