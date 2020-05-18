import { api } from "../utils/api";
import { stringify } from "qs";

const {
  email_login,
  index_imgs,
  home_tag_prod_list,
  prod_tag_list,
  category_list,
  page_prod_list,
  prod_Info,
  prodComm,
} = api;

import request from "../utils/request";

// 邮箱登陆
export function emailLogin(params) {
  return request({
    method: "post",
    url: email_login,
    data: JSON.stringify(params),
  });
}

// 首页所有标签商品
export function getHomeTagProds() {
  console.log(home_tag_prod_list, "---home_tag_prod_list");
  return request({
    method: "get",
    url: home_tag_prod_list,
  });
}

// 商品分类
export function getCategorys() {
  return request({
    method: "get",
    url: category_list,
  });
}

// 分类列表
export function getPageProds(params) {
  return request({
    method: "get",
    url: page_prod_list,
    data: params,
  });
}

// 轮播图
export function getIndexImgs() {
  return request({
    method: "get",
    url: index_imgs,
  });
}

// 获取商品分组
export function getProdTags() {
  return request({
    method: "get",
    url: prod_tag_list,
  });
}

// 商品详情
export function getProdInfo(params) {
  return request({
    method: "get",
    url: `${prod_Info}?${stringify(params)}`,
  });
}

export function getProdComm() {
  return request({
    method: "get",
    url: prodComm,
  });
}
