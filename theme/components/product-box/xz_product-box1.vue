<template>
  <div>
    <div class="img-wrapper" style="margin-botton:20px">
      <div class="lable-block">
        <span class="lable3" v-if="product.new">new</span>
        <span class="lable4" v-if="product.sale">on sale</span>
      </div>
      <div class="front" style="width:100%;height:25vh;text-align:center;">
        <nuxt-link :to="{ path: '/product/sidebar/'+product.prodId}">
          <img :src="'http://img-test.gz-yami.com/' + product.pic" :id="product.prodId" class="img-fluid bg-img"
            :alt="product.title" :key="index" style="height:100%" />
        </nuxt-link>
      </div>
    </div>
    <div class="product-detail">
      <nuxt-link :to="{ path: '/product/sidebar/'+product.prodId}">
        <h6
          style="height:50px;line-height: 25px;margin: 15px 0 0px 0;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
          {{ product.prodName }}</h6>
      </nuxt-link>

      <h4 v-if="product.oriPrice">
        ￥{{ product.price }}
        <del>{{ product.oriPrice }}</del>
      </h4>
      <h4 v-else style="line-height:30px;padding-bottom:20px">￥{{ product.price }}</h4>

    </div>
  </div>
</template>

<script>
  export default {
    props: ["product", "index", 'moreBuyProdList'],
    data() {
      return {
        imageSrc: "",
        quickviewProduct: {},
        compareProduct: {},
        cartProduct: {},
        showquickview: false,
        showCompareModal: false,
        cartval: false,
        variants: {
          productId: "",
          image: ""
        },
        dismissSecs: 5,
        dismissCountDown: 0
      };
    },
    computed: {

    },
    methods: {
      getImgUrl(path) {
        return require("@/assets/images/" + path);
      },
      // addToCart: function(product) {
      //   this.cartval = true;
      //   this.cartProduct = product;
      //   this.$emit("opencartmodel", this.cartval, this.cartProduct);
      //   this.$store.dispatch("cart/addToCart", product);
      // },
      // addToWishlist: function(product) {
      //   this.dismissCountDown = this.dismissSecs;
      //   this.$emit("showalert", this.dismissCountDown);
      //   this.$store.dispatch("products/addToWishlist", product);
      // },
      // showQuickview: function(productData) {
      //   this.showquickview = true;
      //   this.quickviewProduct = productData;
      //   this.$emit("openquickview", this.showquickview, this.quickviewProduct);
      // },
      // addToCompare: function(product) {
      //   this.showCompareModal = true;
      //   this.compareProduct = product;
      //   this.$emit(
      //     "showCompareModal",
      //     this.showCompareModal,
      //     this.compareProduct
      //   );
      //   this.$store.dispatch("products/addToCompare", product);
      // },
      // Color(variants) {
      //   const uniqColor = [];
      //   for (let i = 0; i < Object.keys(variants).length; i++) {
      //     if (uniqColor.indexOf(variants[i].color) === -1) {
      //       uniqColor.push(variants[i].color);
      //     }
      //   }
      //   return uniqColor;
      // },
      // productColorchange(color, product) {
      //   product.variants.map(item => {
      //     if (item.color === color) {
      //       product.images.map(img => {
      //         if (img.image_id === item.image_id) {
      //           this.imageSrc = img.src;
      //         }
      //       });
      //     }
      //   });
      // },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown;
        this.$emit("alertseconds", this.dismissCountDown);
      },
      discountedPrice(product) {
        const price = product.price - (product.price * product.discount) / 100;
        return price;
      }
    }
  };
</script>