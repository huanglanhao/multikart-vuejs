import { api } from '../utils/api'

const {
  email_login,
  index_imgs,
  home_tag_prod_list,
  prod_tag_list 
} = api

import request from '../utils/request'

// 邮箱登陆
export function emailLogin(params) {
  return request({
    method: 'post',
    url: email_login,
    data: JSON.stringify(params)
  })
}

// 首页所有标签商品
export function getHomeTagProdList() {
  return request({
    method: 'get',
    url: home_tag_prod_list,
  })
}
// 轮播图
export function getIndexImgs() {
  return request({
    method: 'get',
    url: index_imgs,
  })
}

// 获取商品分组
export function getProdTagList() {
  return request({
    method: 'get',
    url: prod_tag_list,
  })
}
