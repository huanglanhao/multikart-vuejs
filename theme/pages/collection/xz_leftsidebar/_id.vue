<template>
  <div>
    <Header />
    <section class="section-b-space ratio_asos">
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <sidebar @allFilters="allfilter" @priceVal="pricefilterArray" @categoryfilter="getCategoryFilter" />
            </div>
            <div class="collection-content col">
              <div class="page-main-content">
                <div class="row">
                  <div class="col-sm-12">
                    <ul class="product-filter-tags">
                      <li class="mr-1" v-for="(tag,index) in allfilters" :key="index">
                        <a href="javascript:void(0)" class="filter_tag">{{tag}}<i class="ti-close"
                            @click="removeTags(tag)"></i></a>
                      </li>
                      <li class="clear_filter" v-if="allfilters.length > 0"><a href="javascript:void(0)"
                          class="clear_filter" @click="removeAllTags()">全部清除</a></li>
                    </ul>
                    <div class="collection-product-wrapper">
                      <div class="product-top-filter">
                        <div class="row">
                          <div class="col-12">
                            <div class="product-filter-content">
                              <div class="search-count">
                                <h5>显示{{ prodListByTagId.total }}个结果中的产品1-12 </h5>
                              </div>
                              <div class="collection-view">
                                <ul>
                                  <li @click="gridView()">
                                    <i class="fa fa-th grid-layout-view"></i>
                                  </li>
                                  <li @click="listView()">
                                    <i class="fa fa-list-ul list-layout-view"></i>
                                  </li>
                                </ul>
                              </div>
                              <div class="collection-grid-view">
                                <ul>
                                  <li>
                                    <img :src='"@/assets/images/icon/2.png"' @click="grid2()"
                                      class="product-2-layout-view" />
                                  </li>
                                  <li>
                                    <img :src='"@/assets/images/icon/3.png"' @click="grid3()"
                                      class="product-3-layout-view" />
                                  </li>
                                  <li>
                                    <img :src='"@/assets/images/icon/4.png"' @click="grid4()"
                                      class="product-4-layout-view" />
                                  </li>
                                  <li>
                                    <img :src='"@/assets/images/icon/6.png"' @click="grid6()"
                                      class="product-6-layout-view" />
                                  </li>
                                </ul>
                              </div>
                              <div class="product-page-filter">
                                <select @change="onChangeSort($event)">
                                  <option value="all">排序</option>
                                  <option value="a-z">按字母排序, A-Z</option>
                                  <option value="z-a">按字母排序, Z-A</option>
                                  <option value="low">价格从低到高</option>
                                  <option value="high">价格从高到低</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="product-wrapper-grid" :class="{'list-view':listview == true}">
                        <div class="row">
                          <!--<div class="col-sm-12">
                            <div class="text-center section-t-space section-b-space" v-if="filterProduct.length == 0">
                              <img :src='"@/assets/images/empty-search.jpg"' class="img-fluid" alt />
                              <h3 class="mt-3">对不起的！找不到您要找的产品！！！</h3>
                              <div class="col-12 mt-3">
                                <nuxt-link :to="{ path: '/'}" class="btn btn-solid">继续购物</nuxt-link>
                              </div>
                            </div>
                          </div>-->
                          <div class="col-grid-box"
                            :class="{'col-lg-3':col4 == true, 'col-lg-4':col3 == true, 'col-lg-6':col2 == true, 'col-lg-2':col6 == true, 'col-lg-12':listview == true}"
                            v-for="(product,index) in prodListByTagId.records" :key="index" v-show="setPaginate(index)">
                            <div class="product-box">
                              <productBox1 @opencartmodel="showCart" @showCompareModal="showCoampre"
                                @openquickview="showQuickview" @showalert="alert" @alertseconds="alert"
                                :product="product" :index="index" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="product-pagination mb-0" v-if="filterProduct.length > this.paginate">
                        <div class="theme-paggination-block">
                          <div class="row">
                            <div class="col-xl-6 col-md-6 col-sm-12">
                              <nav aria-label="Page navigation">
                                <ul class="pagination">
                                  <li class="page-item" :class="{'disable': current == 1 }">
                                    <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current-1)">
                                      <span aria-hidden="true">
                                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                      </span>
                                    </a>
                                  </li>
                                  <li class="page-item" v-for="(page_index, index) in this.pages" :key="index"
                                    :class="{'active': page_index == current}">
                                    <a class="page-link" href="javascrip:void(0)"
                                      @click.prevent="updatePaginate(page_index)">{{ page_index }}</a>
                                  </li>
                                  <li class="page-item"
                                    :class="{'disable': prodListByTagId.current == prodListByTagId.size }">
                                    <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current+1)">
                                      <span aria-hidden="true">
                                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                            <div class="col-xl-6 col-md-6 col-sm-12">
                              <div class="product-search-count-bottom">
                                <h5>显示{{ prodListByTagId.total }}个结果中的产品1-12 </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-alert :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="alert">
      <p>Product Is successfully added to your wishlist.</p>
    </b-alert>
    <quickviewModel :openModal="showquickviewmodel" :productData="quickviewproduct" />
    <compareModel :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />
    <cartModel :openCart="showcartmodal" :productData="cartproduct" @closeCart="closeCartModal"
      :products="filterProduct" />
    <Footer />
  </div>
</template>
<script>
  import {
    mapGetters,
    mapState,
    createNamespacedHelpers
  } from 'vuex'
  import productBox1 from '../../../components/product-box/xz_product-box1'
  import Header from '../../../components/header/xz_header1'
  import Footer from '../../../components/footer/hlh_footer1'
  import Breadcrumbs from '../../../components/widgets/breadcrumbs'
  import sidebar from '../../../components/widgets/hlh_collection-sidebar'
  import quickviewModel from '../../../components/widgets/quickview'
  import compareModel from '../../../components/widgets/compare-popup'
  import cartModel from '../../../components/cart-model/cart-modal-popup'

  const mapActions = createNamespacedHelpers("hlh_commodity").mapActions;
  export default {
    components: {
      Header,
      Footer,
      Breadcrumbs,
      productBox1,
      sidebar,
      quickviewModel,
      compareModel,
      cartModel
    },
    data() {
      return {
        bannerimagepath: require('@/assets/images/side-banner.png'),
        col2: false,
        col3: false,
        col4: true,
        col6: false,
        listview: false,
        priceArray: [],
        allfilters: [],
        items: [],
        current: 1,
        paginate: 12,
        paginateRange: 3,
        pages: [],
        paginates: '',
        showquickviewmodel: false,
        showcomparemodal: false,
        showcartmodal: false,
        quickviewproduct: {},
        comapreproduct: {},
        cartproduct: {},
        dismissSecs: 5,
        dismissCountDown: 0,
        swiperOption: {
          loop: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    computed: {
      ...mapState({
        prodListByTagId: (state) => state.hlh_commodity.prodListByTagId,
      }),
      ...mapGetters({
        filterProduct: 'filter/filterProducts',
        tags: 'filter/setTags',
        curr: 'products/changeCurrency'
      })
    },
    mounted() {
      this.updatePaginate(1)

      // 通过分组标签获取商品列表
      this.getProdByTagId()
    },
    methods: {
      ...mapActions(["getProdByTagId"]),
      onChangeSort(event) {
        this.$store.dispatch('filter/sortProducts', event.target.value)
      },
      gridView() {
        this.col4 = true
        this.col2 = false
        this.col3 = false
        this.col6 = false
        this.listview = false
      },
      listView() {
        this.listview = true
        this.col4 = false
        this.col2 = false
        this.col3 = false
        this.col6 = false
      },
      grid2() {
        this.col2 = true
        this.col3 = false
        this.col4 = false
        this.col6 = false
        this.listview = false
      },
      grid3() {
        this.col3 = true
        this.col2 = false
        this.col4 = false
        this.col6 = false
        this.listview = false
      },
      grid4() {
        this.col4 = true
        this.col2 = false
        this.col3 = false
        this.col6 = false
        this.listview = false
      },
      grid6() {
        this.col6 = true
        this.col2 = false
        this.col3 = false
        this.col4 = false
        this.listview = false
      },
      removeTags(val) {
        this.allfilters.splice(this.allfilters.indexOf(val), 1)
      },
      removeAllTags() {
        this.allfilters.splice(0, this.allfilters.length)
      },
      getCategoryFilter() {
        this.updatePaginate(1)
        this.$store.dispatch('filter/getCategoryFilter', this.$route.params.id)
      },
      allfilter(selectedVal) {
        this.allfilters = selectedVal
        this.$store.dispatch('filter/setTags', selectedVal)
        this.getPaginate()
        this.updatePaginate(1)
      },
      pricefilterArray(item) {
        this.getCategoryFilter()
        this.$store.dispatch('filter/priceFilter', item)
        this.getPaginate()
        this.updatePaginate(1)
      },
      getPaginate() {
        this.paginates = Math.round(this.filterProduct.length / this.paginate)
        this.pages = []
        for (let i = 0; i < this.paginates; i++) {
          this.pages.push(i + 1)
        }
      },
      setPaginate(i) {
        if (this.current === 1) {
          return i < this.paginate
        } else {
          return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate))
        }
      },
      updatePaginate(i) {
        this.current = i
        let start = 0
        let end = 0
        if (this.current < this.paginateRange - 1) {
          start = 1
          end = start + this.paginateRange - 1
        } else {
          start = this.current - 1
          end = this.current + 1
        }
        if (start < 1) {
          start = 1
        }
        if (end > this.paginates) {
          end = this.paginates
        }
        this.pages = []
        for (let i = start; i <= end; i++) {
          this.pages.push(i)
        }
        return this.pages
      },
      alert(item) {
        this.dismissCountDown = item
      },
      showQuickview(item, productData) {
        this.showquickviewmodel = item
        this.quickviewproduct = productData
      },
      showCoampre(item, productData) {
        this.showcomparemodal = item
        this.comapreproduct = productData
      },
      closeCompareModal(item) {
        this.showcomparemodal = item
      },
      showCart(item, productData) {
        this.showcartmodal = item
        this.cartproduct = productData
      },
      closeCartModal(item) {
        this.showcartmodal = item
      }
    }
  }
</script>