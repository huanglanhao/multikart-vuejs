
import { getIndexImgs, getHomeTagProds } from '../../pages/service/api'
import Vue from 'vue'

export default {
  namespaced: true,

  state: {
    indexImgs: [],// 轮播图
    tagProdList: [] // 分类商品列表
  },
  actions: {

    // 获取轮播图
    async  getIndexImgList(context, payload) {
      const { data } = await getIndexImgs()

      const is_true = !(data && typeof data == 'object' && Array.isArray(data))
      if (is_true) {
        return
      }

      const indexImgs = data.map(item => {
        return Object.assign(item, {
          imagepath: require('@/assets/images/home-banner/1-1.png'),
          title: '',
          subtitle: '',
          describetitle: '',
          alignclass: ''
        })
      })

      context.commit('save', { indexImgs });
    },
    // 获取首页所有标签商品
    async  getHomeTagProdList(context, payload) {
      console.log('getHomeTagProdList')
      const { data } = await getHomeTagProds()
      console.log(data, '------------------getHomeTagProdList')

      const is_true = !(data && typeof data == 'object' && Array.isArray(data))
      if (is_true) {
        return
      }

      const tagProdList = data.map(item => {

        const productDtoList = item.productDtoList.map(pitme => {
          return {
            id: pitme.prodId,
            title: pitme.prodName,
            description: pitme.brief,
            oriPrice: pitme.oriPrice,
            price: pitme.price,
            // sale: true,
            pic: 'pro3/39.jpg' || pitme.pic,
          }
        })

        console.log(productDtoList, '------productDtoList')

        return {
          id: item.di,
          title: item.title,
          seq: item.seq,
          style: item.style,
          productDtoList
        }
      })

      context.commit('save', { tagProdList });
    },
  },
  mutations: {

    save(state, payload) {

      for (let [keys, value] of Object.entries(payload)) {
        state[`${keys}`] = value
      }
      // state.indexImgs=payload.indexImgs
    }
  },
};
