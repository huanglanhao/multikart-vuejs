<template>
  <div>
    <Header />
    <Slider />
    <CollectionBanner />

    <div v-for="(itme,index) in tagProdList" :key="index">
      <ProductSlider
        :products="itme.productDtoList"
        :title="itme.title"
        @openQuickview="showQuickview"
        @openCompare="showCoampre"
        @openCart="showCart"
      />
    </div>
    <Banner />
    <!-- <ProductTab
      :products="products"
      :category="category"
      @openQuickview="showQuickview"
      @openCompare="showCoampre"
      @openCart="showCart"
    />-->
    <Services />
    <!-- <Blog /> -->
    <Instagram />
    <LogoSlider />
    <Footer />
    <!-- <quickviewModel :openModal="showquickviewmodel" :productData="quickviewproduct" /> -->
    <!-- <compareModel
      :openCompare="showcomparemodal"
      :productData="comapreproduct"
      @closeCompare="closeCompareModal"
    /> -->
    <!-- <cartModel
      :openCart="showcartmodal"
      :productData="cartproduct"
      @closeCart="closeCartModal"
      :products="products"
    /> -->
    <!-- <newsletterModel /> -->
  </div>
</template>
<script>
import { mapState, createNamespacedHelpers } from "vuex";
import Header from "../../../components/header/xz_header1";
import Footer from '../../../components/footer/footer1'
// import quickviewModel from "../../../components/widgets/quickview";
// import compareModel from "../../../components/widgets/compare-popup";
// import cartModel from "../../../components/cart-model/cart-modal-popup";
// import newsletterModel from "../../../components/widgets/newsletter-popup";
import Slider from "./components/slider";
import CollectionBanner from "./components/collection_banner";
import ProductSlider from "./components/product_slider";
import Banner from './components/banner'
// import ProductTab from "./components/product_tab";
import Services from './components/services'
import Blog from './components/blog'
import Instagram from './components/instagram'
import LogoSlider from './components/logo_slider'

const { mapActions } = createNamespacedHelpers("xz_home");

export default {
  components: {
    Header,
    Slider,
    CollectionBanner,
    ProductSlider,
    Banner,
    // ProductTab,
    Services,
    Blog,
    Instagram,
    LogoSlider,
    Footer,
    // quickviewModel,
    // compareModel,
    // cartModel,
    // newsletterModel
  },
  data() {
    return {
      products: [],
      category: [],
      // tagProdList: [],
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {}
    };
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist,
      tagProdList: state => state.xz_home.tagProdList, // 首页商品分类列表
      prodTagsList: state => state.xz_home.prodTagsList, // 商品分类标签
    })
  },
  mounted() {
    this.productsArray();
    this.getIndexImgList();
    this.getHomeTagProdList();
    this.getProdTagList();
    this.getCategoryList();
  },
  methods: {
    ...mapActions(["getIndexImgList", "getHomeTagProdList",'getProdTagList','getCategoryList']),
    productsArray: function() {
      this.productslist.map(item => {
        if (item.type === "fashion") {
          this.products.push(item);
          item.collection.map(i => {
            const index = this.category.indexOf(i);
            if (index === -1) this.category.push(i);
          });
        }
      });
    },
    showQuickview(item, productData) {
      this.showquickviewmodel = item;
      this.quickviewproduct = productData;
    },
    showCoampre(item, productData) {
      this.showcomparemodal = item;
      this.comapreproduct = productData;
    },
    closeCompareModal(item) {
      this.showcomparemodal = item;
    },
    showCart(item, productData) {
      this.showcartmodal = item;
      this.cartproduct = productData;
    },
    closeCartModal(item) {
      this.showcartmodal = item;
    }
  }
};
</script>
