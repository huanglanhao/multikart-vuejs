<template>
  <div>
    <Header />
    <section class="section-b-space">
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <productSidebar />
            </div>
            <div class="col-lg-9 col-sm-12 col-xs-12 productdetail">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-6">

                    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(prodInfo, index) in (prodInfo.imgs || '').split(',')"
                          :key="index">
                          <img :src="'http://img-test.gz-yami.com/' + prodInfo" :id="prodInfo.shopId"
                            class="img-fluid bg-img" :alt="prodInfo.brief" />
                          <!--<img
                            :src="getImgUrl(product.src)"
                            :id="product.image_id"
                            class="img-fluid bg-img"
                            :alt="product.alt"
                          />-->
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 slider-nav-images">
                        <div v-swiper:mySwiper1="swiperOption1">
                          <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item, index) in (prodInfo.imgs || '').split(',')"
                              :key="index">
                              <img :src="'http://img-test.gz-yami.com/' + item" :id="prodInfo.shopId"
                                class="img-fluid bg-img" :alt="prodInfo.brief" @click="slideTo(index)" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 rtl-text">
                    <div class="product-right">
                      <h2>{{ prodInfo.prodName }}</h2>
                      <h4 v-if="getDetail.sale">
                        <del>{{
                          (prodInfo.price * curr.curr) | currency(curr.symbol)
                        }}</del>
                      </h4>
                      <h3 v-if="getDetail.sale">
                        {{
                          (discountedPrice(getDetail) * curr.curr)
                            | currency(curr.symbol)
                        }}
                      </h3>
                      <h3 v-else>
                        {{
                          (prodInfo.price * curr.curr) | currency(curr.symbol)
                        }}
                      </h3>

                      <div class="product-description border-product">
                        <h6 class="product-title size-text">
                          分类
                        </h6>
                        <div class="size-box">
                          <ul style="width: 100%;display: inline-flex;flex-wrap: wrap; height: 10vw;overflow: auto;">
                            <li class="product-title" style="width:230px;height:40px;border-radius:10px;margin:10px 0"
                              v-bind:class="{ active: selectedSize == size }" v-for="(size, index) in prodInfo.skuList"
                              :key="index">
                              <a href="javascript:void(0)" @click="changeSizeVariant(size)"
                                style="font-size: 14px">{{ size.skuName }}</a>
                            </li>
                          </ul>
                        </div>
                        <div
                          style="width: 100%;display: inline-flex;justify-content: space-around;align-items: center;">
                          <div>
                            <p>库存：{{ prodInfo.totalStocks }}</p>
                            <!--<h5 class="avalibility" v-if="counter <= prodInfo.totalStocks">
                              <span>有货</span>
                            </h5>
                            <h5 class="avalibility" v-if="counter > prodInfo.totalStocks">
                              <span>缺货</span>
                            </h5>-->
                          </div>
                          <div class="qty-box" style="margin-top:0">
                            <h6 class="product-title" style="margin-right:5px">购买数量:</h6>
                            <div class="input-group">
                              <span class="input-group-prepend">
                                <button type="button" class="btn quantity-left-minus" data-type="minus" data-field
                                  @click="decrement()" :disabled="counter >= prodInfo.totalStocks">
                                  <i class="ti-angle-left"></i>
                                </button>
                              </span>
                              <input type="text" name="quantity" class="form-control input-number"
                                :disabled="counter >  prodInfo.totalStocks" v-model="counter" />
                              <span class="input-group-prepend">
                                <button type="button" class="btn quantity-right-plus" data-type="plus" data-field
                                  @click="increment()">
                                  <i class="ti-angle-right"></i>
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="product-buttons">
                        <button class="btn btn-solid" title="加入购物车" @click="newaddToCart(prodInfo, counter)"
                          :disabled="prodInfo.totalStocks <= 0">
                          加入购物车
                        </button>
                        <nuxt-link :to="{ path: '/page/account/hlh_purchase' }">
                          <button class="btn btn-solid" title="立即购买" @click="buyNow(prodInfo, counter)"
                            :disabled="prodInfo.totalStocks == 0">
                            立即购买
                          </button>
                        </nuxt-link>
                        <button type="button" class="wishlist-btn" @click="addToWishlist(prodInfo)" style="border:0">
                          <i class="fa fa-heart" style="border:0"></i>
                          <span class="title-font">收藏</span>
                        </button>
                      </div>
                      <div class="border-product">
                        <h6 class="product-title">产品描述</h6>
                        <p>{{ prodInfo.brief }}</p>
                      </div>

                      <!--<div class="border-product">
                        <h6 class="product-title">时间提醒</h6>
                        <Timer date="December 20, 2020" />
                      </div>-->
                    </div>
                  </div>
                </div>
              </div>
              <section class="tab-product m-0">
                <div class="row">
                  <div class="col-sm-12 col-lg-12">
                    <b-tabs card>
                      <b-tab title="描述" active>
                        <p>品名: {{ prodInfo.prodName }}</p>
                        <p>描述: {{ prodInfo.brief }}</p>

                      </b-tab>
                      <b-tab title="细节">
                        <b-card-text>
                          <div class="blog-content" v-html="prodInfo.content" style="overflow: auto;"></div>
                        </b-card-text>
                      </b-tab>
                      <b-tab title="视频">
                        <b-card-text>
                          <div class="mt-3 text-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/BUWzX78Ye_8"
                              allow="autoplay; encrypted-media" allowfullscreen></iframe>
                          </div>
                        </b-card-text>
                      </b-tab>
                      <b-tab title="评论">
                        <b-card-text>
                          <form class="theme-form">
                            <div class="form-row">
                              <div class="col-md-12">
                                <div class="media">
                                  <label>评级</label>
                                  <div class="media-body ml-3">
                                    <div class="rating three-star">
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <label for="name">姓名</label>
                                <input type="text" class="form-control" id="name" placeholder="输入您的姓名" required />
                              </div>
                              <div class="col-md-6">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" id="email" placeholder="输入您的Email" required />
                              </div>
                              <div class="col-md-12">
                                <label for="review">标题</label>
                                <input type="text" class="form-control" id="review" placeholder="请输入您的标题" required />
                              </div>
                              <div class="col-md-12">
                                <label for="review">内容</label>
                                <textarea class="form-control" placeholder="请输入您的内容" id="exampleFormControlTextarea1"
                                  rows="6"></textarea>
                              </div>
                              <div class="col-md-12">
                                <button class="btn btn-solid" type="submit">
                                  提交您的评论
                                </button>
                              </div>
                            </div>
                          </form>
                        </b-card-text>
                      </b-tab>
                    </b-tabs>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <relatedProduct :productTYpe="productTYpe" :productId="productId" />
      <b-modal id="modal-1" size="md" centered hide-footer>
        <template v-slot:modal-title>{{ getDetail.title }}</template>
        <img src="../../../assets/images/size-chart.jpg" alt="size-chart" class="img-fluid" />
      </b-modal>
    </section>
    <Footer />
  </div>
</template>
<script>
  import {
    mapState,
    mapGetters,
    createNamespacedHelpers
  } from "vuex";
  import Header from "../../../components/header/xz_header1";
  import Footer from "../../../components/footer/hlh_footer1";
  import Breadcrumbs from "../../../components/widgets/breadcrumbs";
  import Timer from "../../../components/widgets/timer";
  import productSidebar from "../../../components/widgets/hlh_product-sidebar";
  import relatedProduct from "../../../components/widgets/related-products";

  const c_mapActions = createNamespacedHelpers("hlh_commodity").mapActions;
  const s_mapActions = createNamespacedHelpers("shopCart").mapActions;

  export default {
    components: {
      Header,
      Footer,
      Breadcrumbs,
      Timer,
      productSidebar,
      relatedProduct,
    },
    data() {
      return {
        counter: 1,
        activeColor: "",
        selectedSize: "",
        qty: "",
        size: [],
        productTYpe: "",
        productId: "",
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 20,
          freeMode: true,
        },
        swiperOption1: {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          centeredSlides: false,
        },
      };
    },

    computed: {
      ...mapState({
        currency: (state) => state.products.currency,
        prodInfo: (state) => state.hlh_commodity.prodInfo,
        // addToCart: state => state.shopCart.addToCart
      }),
      ...mapGetters({
        curr: "products/changeCurrency",
      }),
      getDetail: function () {
        return this.$store.getters["products/getProductById"](
          this.$route.params.id
        );
      },

    },
    mounted() {
      // For displaying default color and size on pageload
      this.uniqColor = this.getDetail.variants[0].color;
      // this.sizeVariant(this.getDetail.variants[0].image_id);
      // Active default color
      this.activeColor = this.uniqColor;
      this.changeSizeVariant(this.getDetail.variants[0].size);
      // related product type
      this.relatedProducts();
      this.getProdInfo({
        prodId: this.$route.params.id,
      });
      this.getMoreBuyProdList();
      this.prodCommPageByProd()
    },
    methods: {
      ...c_mapActions(["getProdInfo", "getMoreBuyProdList", "prodCommPageByProd", "addOrCancel"]),
      ...s_mapActions(["addToCart"]),
      priceCurrency: function () {
        this.$store.dispatch("products/changeCurrency");
      },
      addToWishlist: function (prodInfo) {
        console.log("收藏")
        this.addOrCancel(prodInfo)
      },
      discountedPrice(product) {
        const price = product.price - (product.price * product.discount) / 100;
        return price;
      },
      // Related Products display
      relatedProducts() {
        this.productTYpe = this.getDetail.type;
        this.productId = this.getDetail.id;
      },
      // Display Unique Color
      Color(variants) {
        const uniqColor = [];
        for (let i = 0; i < Object.keys(variants).length; i++) {
          if (uniqColor.indexOf(variants[i].color) === -1) {
            uniqColor.push(variants[i].color);
          }
        }
        return uniqColor;
      },
      // add to cart

      // 加入购物车
      newaddToCart: function (prodInfo, qty) {
        try {
          console.log('加入购物车')
          this.addToCart({
            ...prodInfo,
            num: qty
          })
        } catch (err) {
          console.log('加入购物车失败')
        }
      },

      buyNow: function (product, qty) {
        try {
          console.log('立即购买')
          // this.addToCart({
          //   ...prodInfo,
          //   num: qty
          // })
        } catch (err) {
          console.log('立即购买失败')
        }
        // product.quantity = qty || 1;
        // this.$store.dispatch("cart/addToCart", product);
        // this.$router.push("/page/account/checkout");
      },
      // Item Count
      increment() {
        this.counter++;
      },
      decrement() {
        if (this.counter > 1) this.counter--;
      },
      // Change size variant
      changeSizeVariant(variant) {
        this.selectedSize = variant;
      },
      getImgUrl(path) {
        return require("@/assets/images/" + path);
      },
      swiper() {
        console.log(this.$refs, ' this.$refs')
        return this.$refs.mySwiper.swiper;
      },

      slideTo(id) {
        this.swiper().slideTo(id, 1000, false);
      },
      sizeVariant(id, slideId, color) {
        this.swiper().slideTo(slideId, 1000, false);
        this.size = [];
        this.activeColor = color;
        this.prodInfo.imgs.split(',')[1].filter((item) => {
          console.log(item, 'itemitem')
          if (id === item.image_id) {
            this.size.push(item.size);
          }
        });
      },
    },
  };
</script>