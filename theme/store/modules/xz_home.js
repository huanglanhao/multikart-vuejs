
import { getIndexImgs, getHomeTagProdList } from '../../pages/service/api'

export default {
  namespaced: true,

  state: {
    indexImgs: [
      {
        imagepath: require('@/assets/images/home-banner/1-1.png'),
        title: '10代超薄游戏本',
        subtitle: '轻薄便携',
        describetitle: '144GHz屏 畅玩电竞游戏',
        alignclass: 'p-left'
      },
    ],// 轮播图
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

      console.log(indexImgs,'----getIndexImgList-----')

      context.commit('save', {indexImgs});
    },
    // 获取首页所有标签商品
  },
  mutations: {

    save(state, payload) {
      state= {
        ...state,
        ...payload
      }
      console.log(state,'----state')
    }
  },
};
