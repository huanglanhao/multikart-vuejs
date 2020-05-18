import { getProdInfo } from "../../pages/service/api";

export default {
  namespaced: true,

  state: {
    prodInfo: {},
  },
  actions: {
    async getProdInfo(context, payload) {
      console.log(payload, "商品详情页");
      const { data } = await getProdInfo(payload);

      console.log(data, "商品详情页");
      context.commit("save", { prodInfo: data });
    },
  },

  mutations: {
    save(state, payload) {
      for (let [keys, value] of Object.entries(payload)) {
        state[`${keys}`] = value;
      }
    },
  },
};
