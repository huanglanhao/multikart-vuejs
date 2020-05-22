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
  prod_comm,
  lasted_prod_page,
  more_buy_prod_list,
  shop_cart,
  change_item,
  prod_list_by_tagId,
  delete_item,
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

// 评论
export function getProdComm() {
  return request({
    method: "get",
    url: prod_comm,
    data: JSON.stringify(params),
  });
}

// 新品推荐
export function getLastedProdPage(params) {
  return request({
    method: "get",
    url: `${lasted_prod_page}?${stringify(params)}`,
  });
}

// 每日疯抢
export function getMoreBuyProdList() {
  return request({
    method: "get",
    url: more_buy_prod_list,
  });
}

// 获取用户购物车信息
export function getShopCartInfo(params) {
  return request({
    method: "post",
    url: shop_cart,
    data: JSON.stringify(params),
  });
}

// 加入购物车
export function postAddToCart(params) {
  return request({
    method: "post",
    url: change_item,
    data: JSON.stringify(params),
  });
}

export function deleteCartItem(params) {
  return request({
    method: "delete",
    url: delete_item,
    data: JSON.stringify(params),
  });
}

// 通过分组标签获取商品列表
export function getProdListByTagId(params) {
  return request({
    method: "get",
    url: `${prod_list_by_tagId}?${stringify(params)}`,
  });
}
