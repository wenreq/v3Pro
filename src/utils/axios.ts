/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-02 10:35:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-06 17:28:32
 * @FilePath: /V3_Project/src/utils/axios.ts
 * @Description: axios 二次封装
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
import axios from 'axios';
import router from '@/router';
import config from '~/config';
// ts Notice: This is error message; it is must configure the tsconfig file "baseUrl" and "paths" properties
import { ElMessage } from 'element-plus';
import { localGet } from './index';

// 处理  类型“AxiosResponse<any, any>”上不存在属性“errorinfo”。ts(2339) 脑壳疼！关键一步。
declare module 'axios' {
  interface AxiosResponse<T = any> {
    list: null;
    carouselUrl: null;
    redirectUrl: null;
    carouselRank: null;
    totalCount: null;
    currPage: null;
    // 这里追加你的参数
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance;
}

axios.defaults.baseURL = config[import.meta.env.MODE].baseUrl;
// 携带 cookie，对目前的项目没有什么作用，因为我们是 token 鉴权
axios.defaults.withCredentials = true;
// 请求头，headers 信息
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers['token'] = localGet('token') || '';
// 默认 post 请求，使用 application/json 形式
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截器，内部根据返回值，重新组装，统一管理
axios.interceptors.response.use((res) => {
  if (typeof res.data !== 'object') {
    ElMessage('服务端异常！');
    return Promise.reject(res);
  }
  if (res.data.resultCode != 200) {
    if (res.data.message) ElMessage(res.data.message);
    if (res.data.resultCode == 419) {
      router.push({ path: '/login' });
    }
    return Promise.reject(res.data);
  }

  return res.data.data;
});

export default axios;
