import {
  getShopCartInfo,
  postAddToCart,
  deleteCartItem,
} from "../../pages/service/api";

export default {
  namespaced: true,

  state: {
    shopCartInfo: [],
    shopCartItems: [],
    addToCart: {},
  },
  actions: {
    // 获取用户购物车信息
    async getShopCart(context, payload) {
      const { data } = await getShopCartInfo({});
      console.log(data, "data----获取用户购物车信息");
      const is_true = !(data && typeof data == "object" && Array.isArray(data));
      if (is_true) {
        return;
      }

      const shopCartInfo = [];
      for (let i = 0; i < data.length; i++) {
        const { shopCartItemDiscounts } = data[i];
        const { shopCartItems } = shopCartItemDiscounts[0];
        console.log(shopCartItems, "------shopCartItems");
        shopCartInfo.push(...shopCartItems);
      }

      context.commit("save", {
        shopCartInfo,
      });
    },

    // 加入购物车
    async addToCart(context, payload) {
      console.log(payload, "加入购物车");
      try {
        const parent = {
          basketId: 0,
          count: payload.num,
          prodId: payload.prodId,
          shopId: payload.shopId,
          skuId: payload.skuList[0].skuId,
        };
        const { data } = await postAddToCart(parent);
        console.log(data, "加入购物车----data");
        context.commit("save", { addToCart: data });
        alert("加入购物车成功");
      } catch (err) {
        alert("加入购物车失败");
      }
    },

    // 删除购物车列表
    async deleteCart({ commit, state }, payload) {
      console.log(payload, "删除购物车列表");
      const param = [payload.basketId];
      let { shopCartInfo } = state;
      console.log(state.shopCartInfo, "-----shopCartInfo");
      const { data } = await deleteCartItem(param);
      shopCartInfo = shopCartInfo.filter(
        (item) => item.prodId !== payload.prodId
      );
      commit("save", {
        shopCartInfo,
      });
      console.log(data, "----------deleteCart");
    },

    async plus({ dispatch, commit, state }, payload) {
      try {
        const parent = {
          basketId: 0,
          count: 1,
          prodId: payload.prodId,
          shopId: payload.shopId,
          shopId: payload.shopId,
          skuId: payload.skuId,
        };
        await postAddToCart(parent);
        dispatch("getShopCart");
      } catch (err) {
        console.log(err, "--------err");
      }
    },

    async reduce({ dispatch, commit, state }, payload) {
      console.log(payload, "减-----reduce");

      try {
        const parent = {
          basketId: 0,
          count: -1,
          prodId: payload.prodId,
          shopId: payload.shopId,
          shopId: payload.shopId,
          skuId: payload.skuId,
        };
        await postAddToCart(parent);
        dispatch("getShopCart");
      } catch (err) {
        console.log(err, "--------reduce");
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
