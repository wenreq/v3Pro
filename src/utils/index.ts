/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-02 12:32:42
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-02 22:30:49
 * @FilePath: /V3_Project/src/utils/index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved. 
 */
export function localGet (key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    return value
  }
}

export function localSet (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove (key) {
  window.localStorage.removeItem(key)
}

export const pathMap = {
  index: '首页',
  login: '登录',
  add: '添加商品'
}