// const url ='http://120.77.140.132:9901';
export const api = {
  email_login: "/api/mail/login",

  index_imgs: "/api/indexImgs", // 轮播图
  prod_tag_list: "/api/prod/tag/prodTagList", // 商品分类标签
  category_list: "/api/category/categoryInfo", // 商品分类列表
  page_prod_list: "/api/prod/pageProd", // 加载分类列表
  home_tag_prod_list: "/api/prod/tagProdList", // 首页所有标签商品接口
  prod_Info: "/api/prod/prodInfo", //商品详情
  prod_comm: "/api/prod/prodComm/prodCommPageByProd", //评论
  lasted_prod_page: "/api/prod/lastedProdPage", //新品推荐
  more_buy_prod_list: "/api/prod/moreBuyProdList", //每日疯抢
  shop_cart: "/api/p/shopCart/info", //购物车信息
  change_item: "/api/p/shopCart/changeItem", //添加、修改用户购物车物品
  prod_list_by_tagId: "/api/prod/prodListByTagId", //通过分组标签获取商品列表
  delete_item: "/api/p/shopCart/deleteItem", //删除用户购物车物品
};
