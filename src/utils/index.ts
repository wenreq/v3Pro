/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-04 20:21:08
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-06 17:50:53
 * @FilePath: /V3_Project/src/utils/index.ts
 * @Description: 一些函数的封装
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
export function localGet(key) {
  const value = window.localStorage.getItem(key);
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    return value;
  }
}

/**
 * @description: 封装设置 localStorage 函数
 * @param {String} key 存起来的名字
 * @param {Any} value 存起来的值
 */
export function localSet(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function localRemove(key) {
  window.localStorage.removeItem(key);
}

export const pathMap = {
  index: '首页',
  login: '登录',
  add: '添加商品',
  swiper: '轮播图配置',
  hot: '热销商品配置',
  new: '新品上线配置',
  recommend: '为你推荐配置',
};

// 单张图片上传
export const uploadImgServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/file';
