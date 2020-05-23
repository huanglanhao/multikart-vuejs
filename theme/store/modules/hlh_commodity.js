import {
  getProdInfo,
  getLastedProdPage,
  getMoreBuyProdList,
  getProdListByTagId,
  getProdComm,
  getCollection,
  postAddOrCancel,
} from "../../pages/service/api";

export default {
  namespaced: true,

  state: {
    prodInfo: {},
    records: [],
    moreBuyProdList: [],
    prodListByTagId: {},
    userCollection: [],
  },
  actions: {
    async getProdInfo(context, payload) {
      console.log(payload, "商品详情页");
      const { data } = await getProdInfo(payload);

      console.log(data, "商品详情页");
      context.commit("save", { prodInfo: data });
    },

    // 新品推荐
    async getLastedProdPage(context, payload) {
      const parma = {
        current: 1,
        size: 10,
      };
      const { data } = await getLastedProdPage(parma);
      console.log(data, "新品推荐");
      context.commit("save", { records: data.records });
    },

    // 每日疯抢
    async getMoreBuyProdList(context, payload) {
      const { data } = await getMoreBuyProdList(payload);
      console.log(data, "每日疯抢");
      context.commit("save", { moreBuyProdList: data.records });
    },

    // 通过分组标签获取商品列表
    async getProdByTagId(context, payload) {
      console.log("通过分组标签获取商品列表");
      const parma = {
        tagId: 1,
        current: 1,
        size: 12,
      };
      const { data } = await getProdListByTagId(parma);
      console.log(data, "data-----data");
      context.commit("save", { prodListByTagId: data });
    },

    // 根据商品返回评论分页数据
    async prodCommPageByProd(context, payload) {
      console.log(payload, "根据商品返回评论分页数据");
      // const paramt = {
      //   evaluate: null,
      //   prodId: payload.prodId,
      //   current: 1,
      //   size: 10,
      // };
      // await getProdComm(paramt);
    },

    // 获取用户收藏商品列表
    async getUserCollection(context, payload) {
      const params = {
        current: 1,
        size: 10,
      };
      const { data } = await getCollection(params);

      context.commit("save", { userCollection: data });
      console.log(data, "获取用户收藏商品列表");
    },

    // 添加/取消收藏复制
    async addOrCancel({ commit, state }, payload) {
      console.log(payload, "-------addOrCancel");
      try {
        const { prodId } = payload;
        let { userCollection } = state;

        await postAddOrCancel(prodId);
        userCollection = userCollection.filter(
          (item) => item.prodId !== prodId
        );

        commit("save", { userCollection });
      } catch (err) {
        console.log(err, "收藏/取消失败");
      }
    },
  },

  mutations: {
    save(state, payload) {
      for (let [keys, value] of Object.entries(payload)) {
        state[`${keys}`] = value;
      }
      console.log(state, "-----save");
    },
  },
};
