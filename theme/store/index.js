import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
import menu from './modules/menu'
import products from './modules/products'
import cart from './modules/cart'
import filter from './modules/filter'
import layout from './modules/layout'

import xz_home from './modules/xz_home'
Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      blog,
      menu,
      products,
      cart,
      filter,
      layout,
      xz_home
    }
  })
}
export default createStore
