import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _eb5821b8 = () => interopDefault(import('../pages/landing.vue' /* webpackChunkName: "pages/landing" */))
const _f973ba9c = () => interopDefault(import('../pages/blog/blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _ec411a38 = () => interopDefault(import('../pages/blog/blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _086376aa = () => interopDefault(import('../pages/blog/blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _739191e1 = () => interopDefault(import('../pages/blog/blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _06767734 = () => interopDefault(import('../pages/collection/full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _069ca4f4 = () => interopDefault(import('../pages/collection/list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _fe1122aa = () => interopDefault(import('../pages/collection/metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _8dc7e2a4 = () => interopDefault(import('../pages/collection/no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _f6ff3986 = () => interopDefault(import('../pages/collection/right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _1f5f818d = () => interopDefault(import('../pages/collection/sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _0d50a1af = () => interopDefault(import('../pages/collection/six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _27715a1a = () => interopDefault(import('../pages/collection/three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _3b42ce0a = () => interopDefault(import('../pages/page/404.vue' /* webpackChunkName: "pages/page/404" */))
const _6dcbbbe0 = () => interopDefault(import('../pages/page/about.vue' /* webpackChunkName: "pages/page/about" */))
const _99fc5aaa = () => interopDefault(import('../pages/page/collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _f27cbbec = () => interopDefault(import('../pages/page/coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _e361884e = () => interopDefault(import('../pages/page/faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _b482db56 = () => interopDefault(import('../pages/page/lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _083ee6f2 = () => interopDefault(import('../pages/page/order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _d2fe9e36 = () => interopDefault(import('../pages/page/review.vue' /* webpackChunkName: "pages/page/review" */))
const _45a71196 = () => interopDefault(import('../pages/page/search.vue' /* webpackChunkName: "pages/page/search" */))
const _2b22e8bc = () => interopDefault(import('../pages/page/typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _3c1799c7 = () => interopDefault(import('../pages/product/bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _0f43f2d2 = () => interopDefault(import('../pages/product/four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _84d97fbc = () => interopDefault(import('../pages/service/api.js' /* webpackChunkName: "pages/service/api" */))
const _1b251ff4 = () => interopDefault(import('../pages/shop/bags/index.vue' /* webpackChunkName: "pages/shop/bags/index" */))
const _2a5a9376 = () => interopDefault(import('../pages/shop/beauty/index.vue' /* webpackChunkName: "pages/shop/beauty/index" */))
const _cfdf2d70 = () => interopDefault(import('../pages/shop/electronics-1/index.vue' /* webpackChunkName: "pages/shop/electronics-1/index" */))
const _c7936a36 = () => interopDefault(import('../pages/shop/fashion/index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _05517bca = () => interopDefault(import('../pages/shop/fashion-2/index.vue' /* webpackChunkName: "pages/shop/fashion-2/index" */))
const _cb93a2ea = () => interopDefault(import('../pages/shop/fashion-3/index.vue' /* webpackChunkName: "pages/shop/fashion-3/index" */))
const _d0d0d538 = () => interopDefault(import('../pages/shop/flower/index.vue' /* webpackChunkName: "pages/shop/flower/index" */))
const _04d3c81f = () => interopDefault(import('../pages/shop/furniture/index.vue' /* webpackChunkName: "pages/shop/furniture/index" */))
const _109ab028 = () => interopDefault(import('../pages/shop/gym/index.vue' /* webpackChunkName: "pages/shop/gym/index" */))
const _4fe13730 = () => interopDefault(import('../pages/shop/jewellery/index.vue' /* webpackChunkName: "pages/shop/jewellery/index" */))
const _68f47a76 = () => interopDefault(import('../pages/shop/kids/index.vue' /* webpackChunkName: "pages/shop/kids/index" */))
const _d950b306 = () => interopDefault(import('../pages/shop/pets/index.vue' /* webpackChunkName: "pages/shop/pets/index" */))
const _fa985ed6 = () => interopDefault(import('../pages/shop/shoes/index.vue' /* webpackChunkName: "pages/shop/shoes/index" */))
const _3f7b43c8 = () => interopDefault(import('../pages/shop/tools/index.vue' /* webpackChunkName: "pages/shop/tools/index" */))
const _b6f8808a = () => interopDefault(import('../pages/shop/vegetables/index.vue' /* webpackChunkName: "pages/shop/vegetables/index" */))
const _1f2dc488 = () => interopDefault(import('../pages/shop/watch/index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
const _12ce44f8 = () => interopDefault(import('../pages/shop/xz_fashion/index.vue' /* webpackChunkName: "pages/shop/xz_fashion/index" */))
const _1ad0fd34 = () => interopDefault(import('../pages/utils/api.js' /* webpackChunkName: "pages/utils/api" */))
const _a9e5a75e = () => interopDefault(import('../pages/utils/request.js' /* webpackChunkName: "pages/utils/request" */))
const _23e27d42 = () => interopDefault(import('../pages/blog/widgets/blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _245b53aa = () => interopDefault(import('../pages/blog/widgets/blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _0a233e8f = () => interopDefault(import('../pages/page/account/cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _59176b96 = () => interopDefault(import('../pages/page/account/checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _2fabe281 = () => interopDefault(import('../pages/page/account/contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _3690fe96 = () => interopDefault(import('../pages/page/account/dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _31eb1348 = () => interopDefault(import('../pages/page/account/forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _6c8f80ec = () => interopDefault(import('../pages/page/account/login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _f9255dcc = () => interopDefault(import('../pages/page/account/login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _37d35b8a = () => interopDefault(import('../pages/page/account/profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _167b3512 = () => interopDefault(import('../pages/page/account/register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _6aa65b34 = () => interopDefault(import('../pages/page/account/wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _3c6e61a2 = () => interopDefault(import('../pages/page/compare/compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _3c7c7923 = () => interopDefault(import('../pages/page/compare/compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _746d26ac = () => interopDefault(import('../pages/page/element/banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _3de4117e = () => interopDefault(import('../pages/page/element/category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _1154fe6b = () => interopDefault(import('../pages/page/element/collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _0e58febf = () => interopDefault(import('../pages/page/element/home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _2ba4f673 = () => interopDefault(import('../pages/page/element/logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _cd288e16 = () => interopDefault(import('../pages/page/element/multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _42074d02 = () => interopDefault(import('../pages/page/element/product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _063531c8 = () => interopDefault(import('../pages/page/element/product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _1a8f08e5 = () => interopDefault(import('../pages/page/element/service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _5d8a0f28 = () => interopDefault(import('../pages/page/portfolio/masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _7a548c26 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _7a62a3a7 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _7a70bb28 = () => interopDefault(import('../pages/page/portfolio/mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _00aa56dc = () => interopDefault(import('../pages/page/portfolio/portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _d6227446 = () => interopDefault(import('../pages/page/portfolio/portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _293334de = () => interopDefault(import('../pages/page/portfolio/portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _1efd6606 = () => interopDefault(import('../pages/product/sidebar/no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _6eb3ace5 = () => interopDefault(import('../pages/product/sidebar/right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _262eb643 = () => interopDefault(import('../pages/product/three-column/thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _22d72e1f = () => interopDefault(import('../pages/product/three-column/thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _7553afb4 = () => interopDefault(import('../pages/product/three-column/thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _7928666a = () => interopDefault(import('../pages/product/thumbnail-image/image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _7f8190a6 = () => interopDefault(import('../pages/product/thumbnail-image/left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _45de86fc = () => interopDefault(import('../pages/product/thumbnail-image/right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _4c0d6b3f = () => interopDefault(import('../pages/page/account/auth/auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _0f394232 = () => interopDefault(import('../pages/shop/bags/components/banner.vue' /* webpackChunkName: "pages/shop/bags/components/banner" */))
const _0ff7511d = () => interopDefault(import('../pages/shop/bags/components/blog.vue' /* webpackChunkName: "pages/shop/bags/components/blog" */))
const _c5a5b20e = () => interopDefault(import('../pages/shop/bags/components/category.vue' /* webpackChunkName: "pages/shop/bags/components/category" */))
const _088f6189 = () => interopDefault(import('../pages/shop/bags/components/category2.vue' /* webpackChunkName: "pages/shop/bags/components/category2" */))
const _1b65c3ac = () => interopDefault(import('../pages/shop/bags/components/categorytab.vue' /* webpackChunkName: "pages/shop/bags/components/categorytab" */))
const _3e921172 = () => interopDefault(import('../pages/shop/bags/components/instagram.vue' /* webpackChunkName: "pages/shop/bags/components/instagram" */))
const _f85167ba = () => interopDefault(import('../pages/shop/bags/components/productcategoryslider.vue' /* webpackChunkName: "pages/shop/bags/components/productcategoryslider" */))
const _676ebeb6 = () => interopDefault(import('../pages/shop/bags/components/productslider.vue' /* webpackChunkName: "pages/shop/bags/components/productslider" */))
const _cb726b4e = () => interopDefault(import('../pages/shop/bags/components/services.vue' /* webpackChunkName: "pages/shop/bags/components/services" */))
const _77d0761c = () => interopDefault(import('../pages/shop/bags/components/slider.vue' /* webpackChunkName: "pages/shop/bags/components/slider" */))
const _7fce3131 = () => interopDefault(import('../pages/shop/beauty/components/about.vue' /* webpackChunkName: "pages/shop/beauty/components/about" */))
const _087df62e = () => interopDefault(import('../pages/shop/beauty/components/blog.vue' /* webpackChunkName: "pages/shop/beauty/components/blog" */))
const _0edc5654 = () => interopDefault(import('../pages/shop/beauty/components/instagram.vue' /* webpackChunkName: "pages/shop/beauty/components/instagram" */))
const _046c6a8b = () => interopDefault(import('../pages/shop/beauty/components/product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/product-slider" */))
const _69421aed = () => interopDefault(import('../pages/shop/beauty/components/slider.vue' /* webpackChunkName: "pages/shop/beauty/components/slider" */))
const _0a7567fa = () => interopDefault(import('../pages/shop/beauty/components/top-product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/top-product-slider" */))
const _114a82fc = () => interopDefault(import('../pages/shop/beauty/components/video-tutorial.vue' /* webpackChunkName: "pages/shop/beauty/components/video-tutorial" */))
const _c94575a4 = () => interopDefault(import('../pages/shop/electronics-1/components/collection_banner.vue' /* webpackChunkName: "pages/shop/electronics-1/components/collection_banner" */))
const _10e6cf74 = () => interopDefault(import('../pages/shop/electronics-1/components/product_tab.vue' /* webpackChunkName: "pages/shop/electronics-1/components/product_tab" */))
const _e7d73d20 = () => interopDefault(import('../pages/shop/electronics-1/components/slider.vue' /* webpackChunkName: "pages/shop/electronics-1/components/slider" */))
const _1532ac86 = () => interopDefault(import('../pages/shop/fashion-2/components/banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/banner" */))
const _4737a8a2 = () => interopDefault(import('../pages/shop/fashion-2/components/collection.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection" */))
const _55b0d28c = () => interopDefault(import('../pages/shop/fashion-2/components/collection-banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection-banner" */))
const _42d8b4b1 = () => interopDefault(import('../pages/shop/fashion-2/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion-2/components/instagram" */))
const _5a637da4 = () => interopDefault(import('../pages/shop/fashion-2/components/product.vue' /* webpackChunkName: "pages/shop/fashion-2/components/product" */))
const _74d3c0f2 = () => interopDefault(import('../pages/shop/fashion-2/components/slider.vue' /* webpackChunkName: "pages/shop/fashion-2/components/slider" */))
const _3f9842fe = () => interopDefault(import('../pages/shop/fashion-3/components/banner.vue' /* webpackChunkName: "pages/shop/fashion-3/components/banner" */))
const _5de1ed83 = () => interopDefault(import('../pages/shop/fashion-3/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_slider" */))
const _cd90bd3a = () => interopDefault(import('../pages/shop/fashion-3/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_tab" */))
const _81f54b9a = () => interopDefault(import('../pages/shop/fashion-3/components/slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/slider" */))
const _705ea858 = () => interopDefault(import('../pages/shop/fashion/components/banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _3f2f7a64 = () => interopDefault(import('../pages/shop/fashion/components/blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
const _adc23a1e = () => interopDefault(import('../pages/shop/fashion/components/collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _443e6c36 = () => interopDefault(import('../pages/shop/fashion/components/instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _59a889f9 = () => interopDefault(import('../pages/shop/fashion/components/logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _eefb4e46 = () => interopDefault(import('../pages/shop/fashion/components/product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _3186f76e = () => interopDefault(import('../pages/shop/fashion/components/product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _00957b8a = () => interopDefault(import('../pages/shop/fashion/components/services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
const _206880e6 = () => interopDefault(import('../pages/shop/fashion/components/slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _60ac8ae6 = () => interopDefault(import('../pages/shop/flower/components/blog.vue' /* webpackChunkName: "pages/shop/flower/components/blog" */))
const _d1bcc882 = () => interopDefault(import('../pages/shop/flower/components/category_tab.vue' /* webpackChunkName: "pages/shop/flower/components/category_tab" */))
const _2e9f8cdc = () => interopDefault(import('../pages/shop/flower/components/collection_banner.vue' /* webpackChunkName: "pages/shop/flower/components/collection_banner" */))
const _0c3cf3d7 = () => interopDefault(import('../pages/shop/flower/components/instagram.vue' /* webpackChunkName: "pages/shop/flower/components/instagram" */))
const _ff872448 = () => interopDefault(import('../pages/shop/flower/components/product_slider.vue' /* webpackChunkName: "pages/shop/flower/components/product_slider" */))
const _0272086e = () => interopDefault(import('../pages/shop/flower/components/services.vue' /* webpackChunkName: "pages/shop/flower/components/services" */))
const _148e438c = () => interopDefault(import('../pages/shop/flower/components/slider.vue' /* webpackChunkName: "pages/shop/flower/components/slider" */))
const _33b23a0e = () => interopDefault(import('../pages/shop/flower/components/top_products.vue' /* webpackChunkName: "pages/shop/flower/components/top_products" */))
const _4fddff88 = () => interopDefault(import('../pages/shop/furniture/components/blog.vue' /* webpackChunkName: "pages/shop/furniture/components/blog" */))
const _2feab5ba = () => interopDefault(import('../pages/shop/furniture/components/category_tab.vue' /* webpackChunkName: "pages/shop/furniture/components/category_tab" */))
const _8a01b712 = () => interopDefault(import('../pages/shop/furniture/components/collection_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/collection_banner" */))
const _7777345e = () => interopDefault(import('../pages/shop/furniture/components/parallax_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/parallax_banner" */))
const _58c535c7 = () => interopDefault(import('../pages/shop/furniture/components/slider.vue' /* webpackChunkName: "pages/shop/furniture/components/slider" */))
const _5a2d3051 = () => interopDefault(import('../pages/shop/gym/components/blog.vue' /* webpackChunkName: "pages/shop/gym/components/blog" */))
const _0156589c = () => interopDefault(import('../pages/shop/gym/components/collection-banner.vue' /* webpackChunkName: "pages/shop/gym/components/collection-banner" */))
const _dddf0eda = () => interopDefault(import('../pages/shop/gym/components/instagram.vue' /* webpackChunkName: "pages/shop/gym/components/instagram" */))
const _b503ed38 = () => interopDefault(import('../pages/shop/gym/components/logo-slider.vue' /* webpackChunkName: "pages/shop/gym/components/logo-slider" */))
const _43679f6b = () => interopDefault(import('../pages/shop/gym/components/product-list.vue' /* webpackChunkName: "pages/shop/gym/components/product-list" */))
const _0c0b5850 = () => interopDefault(import('../pages/shop/gym/components/slider.vue' /* webpackChunkName: "pages/shop/gym/components/slider" */))
const _5092cff6 = () => interopDefault(import('../pages/shop/gym/components/top-collection.vue' /* webpackChunkName: "pages/shop/gym/components/top-collection" */))
const _c23c3596 = () => interopDefault(import('../pages/shop/jewellery/components/category.vue' /* webpackChunkName: "pages/shop/jewellery/components/category" */))
const _159a008b = () => interopDefault(import('../pages/shop/jewellery/components/instagram.vue' /* webpackChunkName: "pages/shop/jewellery/components/instagram" */))
const _5caba03b = () => interopDefault(import('../pages/shop/jewellery/components/parallax-banner.vue' /* webpackChunkName: "pages/shop/jewellery/components/parallax-banner" */))
const _61a447f6 = () => interopDefault(import('../pages/shop/jewellery/components/product-slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-slider" */))
const _f3ecd860 = () => interopDefault(import('../pages/shop/jewellery/components/product-tab.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-tab" */))
const _c808eed6 = () => interopDefault(import('../pages/shop/jewellery/components/services.vue' /* webpackChunkName: "pages/shop/jewellery/components/services" */))
const _1ed79358 = () => interopDefault(import('../pages/shop/jewellery/components/slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/slider" */))
const _6cbdc040 = () => interopDefault(import('../pages/shop/kids/components/collection_banner.vue' /* webpackChunkName: "pages/shop/kids/components/collection_banner" */))
const _27aa5116 = () => interopDefault(import('../pages/shop/kids/components/collection_slider.vue' /* webpackChunkName: "pages/shop/kids/components/collection_slider" */))
const _2f1b0885 = () => interopDefault(import('../pages/shop/kids/components/instagram.vue' /* webpackChunkName: "pages/shop/kids/components/instagram" */))
const _006162f0 = () => interopDefault(import('../pages/shop/kids/components/logo_slider.vue' /* webpackChunkName: "pages/shop/kids/components/logo_slider" */))
const _cae7a332 = () => interopDefault(import('../pages/shop/kids/components/parallax_banner.vue' /* webpackChunkName: "pages/shop/kids/components/parallax_banner" */))
const _7c13d424 = () => interopDefault(import('../pages/shop/kids/components/product_slider.vue' /* webpackChunkName: "pages/shop/kids/components/product_slider" */))
const _941bc4c4 = () => interopDefault(import('../pages/shop/kids/components/slider.vue' /* webpackChunkName: "pages/shop/kids/components/slider" */))
const _54c3ff34 = () => interopDefault(import('../pages/shop/pets/components/blog.vue' /* webpackChunkName: "pages/shop/pets/components/blog" */))
const _56e912a7 = () => interopDefault(import('../pages/shop/pets/components/collection-banner.vue' /* webpackChunkName: "pages/shop/pets/components/collection-banner" */))
const _340830a2 = () => interopDefault(import('../pages/shop/pets/components/logo-slider.vue' /* webpackChunkName: "pages/shop/pets/components/logo-slider" */))
const _7119b30e = () => interopDefault(import('../pages/shop/pets/components/parallax-banner.vue' /* webpackChunkName: "pages/shop/pets/components/parallax-banner" */))
const _6a8f0ec3 = () => interopDefault(import('../pages/shop/pets/components/product-slider.vue' /* webpackChunkName: "pages/shop/pets/components/product-slider" */))
const _6e887725 = () => interopDefault(import('../pages/shop/pets/components/slider.vue' /* webpackChunkName: "pages/shop/pets/components/slider" */))
const _61b3dc4c = () => interopDefault(import('../pages/shop/pets/components/top-collection.vue' /* webpackChunkName: "pages/shop/pets/components/top-collection" */))
const _539c84e1 = () => interopDefault(import('../pages/shop/shoes/components/about.vue' /* webpackChunkName: "pages/shop/shoes/components/about" */))
const _86832704 = () => interopDefault(import('../pages/shop/shoes/components/blog.vue' /* webpackChunkName: "pages/shop/shoes/components/blog" */))
const _74891fdb = () => interopDefault(import('../pages/shop/shoes/components/brand.vue' /* webpackChunkName: "pages/shop/shoes/components/brand" */))
const _1045a9da = () => interopDefault(import('../pages/shop/shoes/components/category.vue' /* webpackChunkName: "pages/shop/shoes/components/category" */))
const _0ef18a70 = () => interopDefault(import('../pages/shop/shoes/components/category2.vue' /* webpackChunkName: "pages/shop/shoes/components/category2" */))
const _0ed55b6e = () => interopDefault(import('../pages/shop/shoes/components/category3.vue' /* webpackChunkName: "pages/shop/shoes/components/category3" */))
const _f1a2bbb4 = () => interopDefault(import('../pages/shop/shoes/components/collectionbanner.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionbanner" */))
const _069bb95b = () => interopDefault(import('../pages/shop/shoes/components/collectionslider.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionslider" */))
const _8c05b6ea = () => interopDefault(import('../pages/shop/shoes/components/collectiontab.vue' /* webpackChunkName: "pages/shop/shoes/components/collectiontab" */))
const _5ea25ef4 = () => interopDefault(import('../pages/shop/shoes/components/instagram.vue' /* webpackChunkName: "pages/shop/shoes/components/instagram" */))
const _54f59e84 = () => interopDefault(import('../pages/shop/shoes/components/productSlider.vue' /* webpackChunkName: "pages/shop/shoes/components/productSlider" */))
const _6baaf509 = () => interopDefault(import('../pages/shop/shoes/components/service.vue' /* webpackChunkName: "pages/shop/shoes/components/service" */))
const _0f3e3d3d = () => interopDefault(import('../pages/shop/shoes/components/slider.vue' /* webpackChunkName: "pages/shop/shoes/components/slider" */))
const _0bb9b864 = () => interopDefault(import('../pages/shop/tools/components/about.vue' /* webpackChunkName: "pages/shop/tools/components/about" */))
const _4783f066 = () => interopDefault(import('../pages/shop/tools/components/category.vue' /* webpackChunkName: "pages/shop/tools/components/category" */))
const _7163d914 = () => interopDefault(import('../pages/shop/tools/components/logo_slider.vue' /* webpackChunkName: "pages/shop/tools/components/logo_slider" */))
const _2692188e = () => interopDefault(import('../pages/shop/tools/components/product-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-slider" */))
const _5774d346 = () => interopDefault(import('../pages/shop/tools/components/product-tab-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-tab-slider" */))
const _6fb6901c = () => interopDefault(import('../pages/shop/tools/components/select-vehical.vue' /* webpackChunkName: "pages/shop/tools/components/select-vehical" */))
const _e9f4e694 = () => interopDefault(import('../pages/shop/tools/components/service.vue' /* webpackChunkName: "pages/shop/tools/components/service" */))
const _398b7bf0 = () => interopDefault(import('../pages/shop/tools/components/slider.vue' /* webpackChunkName: "pages/shop/tools/components/slider" */))
const _2da58c2e = () => interopDefault(import('../pages/shop/vegetables/components/banner.vue' /* webpackChunkName: "pages/shop/vegetables/components/banner" */))
const _76bbb7b8 = () => interopDefault(import('../pages/shop/vegetables/components/blog.vue' /* webpackChunkName: "pages/shop/vegetables/components/blog" */))
const _3f6b06b3 = () => interopDefault(import('../pages/shop/vegetables/components/product_slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/product_slider" */))
const _f09a7c40 = () => interopDefault(import('../pages/shop/vegetables/components/services.vue' /* webpackChunkName: "pages/shop/vegetables/components/services" */))
const _a5dab93a = () => interopDefault(import('../pages/shop/vegetables/components/slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/slider" */))
const _578a38a8 = () => interopDefault(import('../pages/shop/vegetables/components/special_products.vue' /* webpackChunkName: "pages/shop/vegetables/components/special_products" */))
const _76629636 = () => interopDefault(import('../pages/shop/watch/components/blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
const _e6c5327e = () => interopDefault(import('../pages/shop/watch/components/category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
const _e18d2282 = () => interopDefault(import('../pages/shop/watch/components/categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
const _35321ab6 = () => interopDefault(import('../pages/shop/watch/components/collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
const _41629f02 = () => interopDefault(import('../pages/shop/watch/components/instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
const _71b8e002 = () => interopDefault(import('../pages/shop/watch/components/logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
const _44e34b98 = () => interopDefault(import('../pages/shop/watch/components/product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
const _ec91ebbe = () => interopDefault(import('../pages/shop/watch/components/services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
const _545e07e4 = () => interopDefault(import('../pages/shop/watch/components/slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
const _4c83d5a9 = () => interopDefault(import('../pages/shop/watch/components/timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
const _43380551 = () => interopDefault(import('../pages/shop/watch/components/top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
const _24d74477 = () => interopDefault(import('../pages/shop/xz_fashion/components/banner.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/banner" */))
const _10475aad = () => interopDefault(import('../pages/shop/xz_fashion/components/blog.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/blog" */))
const _28efcd72 = () => interopDefault(import('../pages/shop/xz_fashion/components/collection_banner.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/collection_banner" */))
const _38833092 = () => interopDefault(import('../pages/shop/xz_fashion/components/instagram.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/instagram" */))
const _1917a93a = () => interopDefault(import('../pages/shop/xz_fashion/components/logo_slider.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/logo_slider" */))
const _262f3408 = () => interopDefault(import('../pages/shop/xz_fashion/components/product_slider.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/product_slider" */))
const _b2a8b8ec = () => interopDefault(import('../pages/shop/xz_fashion/components/product_tab.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/product_tab" */))
const _79578be9 = () => interopDefault(import('../pages/shop/xz_fashion/components/services.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/services" */))
const _b77748a8 = () => interopDefault(import('../pages/shop/xz_fashion/components/slider.vue' /* webpackChunkName: "pages/shop/xz_fashion/components/slider" */))
const _9143f09c = () => interopDefault(import('../pages/collection/leftsidebar/_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _4c7e4cf4 = () => interopDefault(import('../pages/product/sidebar/_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _684a019f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/landing",
    component: _eb5821b8,
    name: "landing"
  }, {
    path: "/blog/blog-detail",
    component: _f973ba9c,
    name: "blog-blog-detail"
  }, {
    path: "/blog/blog-leftsidebar",
    component: _ec411a38,
    name: "blog-blog-leftsidebar"
  }, {
    path: "/blog/blog-nosidebar",
    component: _086376aa,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _739191e1,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/collection/full-width",
    component: _06767734,
    name: "collection-full-width"
  }, {
    path: "/collection/list-view",
    component: _069ca4f4,
    name: "collection-list-view"
  }, {
    path: "/collection/metro",
    component: _fe1122aa,
    name: "collection-metro"
  }, {
    path: "/collection/no-sidebar",
    component: _8dc7e2a4,
    name: "collection-no-sidebar"
  }, {
    path: "/collection/right-sidebar",
    component: _f6ff3986,
    name: "collection-right-sidebar"
  }, {
    path: "/collection/sidebar-popup",
    component: _1f5f818d,
    name: "collection-sidebar-popup"
  }, {
    path: "/collection/six-grid",
    component: _0d50a1af,
    name: "collection-six-grid"
  }, {
    path: "/collection/three-grid",
    component: _27715a1a,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _3b42ce0a,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _6dcbbbe0,
    name: "page-about"
  }, {
    path: "/page/collection",
    component: _99fc5aaa,
    name: "page-collection"
  }, {
    path: "/page/coming-soon",
    component: _f27cbbec,
    name: "page-coming-soon"
  }, {
    path: "/page/faq",
    component: _e361884e,
    name: "page-faq"
  }, {
    path: "/page/lookbook",
    component: _b482db56,
    name: "page-lookbook"
  }, {
    path: "/page/order-success",
    component: _083ee6f2,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _d2fe9e36,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _45a71196,
    name: "page-search"
  }, {
    path: "/page/typography",
    component: _2b22e8bc,
    name: "page-typography"
  }, {
    path: "/product/bundle-product",
    component: _3c1799c7,
    name: "product-bundle-product"
  }, {
    path: "/product/four-image",
    component: _0f43f2d2,
    name: "product-four-image"
  }, {
    path: "/service/api",
    component: _84d97fbc,
    name: "service-api"
  }, {
    path: "/shop/bags",
    component: _1b251ff4,
    name: "shop-bags"
  }, {
    path: "/shop/beauty",
    component: _2a5a9376,
    name: "shop-beauty"
  }, {
    path: "/shop/electronics-1",
    component: _cfdf2d70,
    name: "shop-electronics-1"
  }, {
    path: "/shop/fashion",
    component: _c7936a36,
    name: "shop-fashion"
  }, {
    path: "/shop/fashion-2",
    component: _05517bca,
    name: "shop-fashion-2"
  }, {
    path: "/shop/fashion-3",
    component: _cb93a2ea,
    name: "shop-fashion-3"
  }, {
    path: "/shop/flower",
    component: _d0d0d538,
    name: "shop-flower"
  }, {
    path: "/shop/furniture",
    component: _04d3c81f,
    name: "shop-furniture"
  }, {
    path: "/shop/gym",
    component: _109ab028,
    name: "shop-gym"
  }, {
    path: "/shop/jewellery",
    component: _4fe13730,
    name: "shop-jewellery"
  }, {
    path: "/shop/kids",
    component: _68f47a76,
    name: "shop-kids"
  }, {
    path: "/shop/pets",
    component: _d950b306,
    name: "shop-pets"
  }, {
    path: "/shop/shoes",
    component: _fa985ed6,
    name: "shop-shoes"
  }, {
    path: "/shop/tools",
    component: _3f7b43c8,
    name: "shop-tools"
  }, {
    path: "/shop/vegetables",
    component: _b6f8808a,
    name: "shop-vegetables"
  }, {
    path: "/shop/watch",
    component: _1f2dc488,
    name: "shop-watch"
  }, {
    path: "/shop/xz_fashion",
    component: _12ce44f8,
    name: "shop-xz_fashion"
  }, {
    path: "/utils/api",
    component: _1ad0fd34,
    name: "utils-api"
  }, {
    path: "/utils/request",
    component: _a9e5a75e,
    name: "utils-request"
  }, {
    path: "/blog/widgets/blog-list",
    component: _23e27d42,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _245b53aa,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/cart",
    component: _0a233e8f,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _59176b96,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _2fabe281,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _3690fe96,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _31eb1348,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _6c8f80ec,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _f9255dcc,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/profile",
    component: _37d35b8a,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _167b3512,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _6aa65b34,
    name: "page-account-wishlist"
  }, {
    path: "/page/compare/compare-1",
    component: _3c6e61a2,
    name: "page-compare-compare-1"
  }, {
    path: "/page/compare/compare-2",
    component: _3c7c7923,
    name: "page-compare-compare-2"
  }, {
    path: "/page/element/banner",
    component: _746d26ac,
    name: "page-element-banner"
  }, {
    path: "/page/element/category",
    component: _3de4117e,
    name: "page-element-category"
  }, {
    path: "/page/element/collection-banner",
    component: _1154fe6b,
    name: "page-element-collection-banner"
  }, {
    path: "/page/element/home-slider",
    component: _0e58febf,
    name: "page-element-home-slider"
  }, {
    path: "/page/element/logo-slider",
    component: _2ba4f673,
    name: "page-element-logo-slider"
  }, {
    path: "/page/element/multi-slider",
    component: _cd288e16,
    name: "page-element-multi-slider"
  }, {
    path: "/page/element/product-slider",
    component: _42074d02,
    name: "page-element-product-slider"
  }, {
    path: "/page/element/product-tabs",
    component: _063531c8,
    name: "page-element-product-tabs"
  }, {
    path: "/page/element/service",
    component: _1a8f08e5,
    name: "page-element-service"
  }, {
    path: "/page/portfolio/masonary-fullwidth",
    component: _5d8a0f28,
    name: "page-portfolio-masonary-fullwidth"
  }, {
    path: "/page/portfolio/mesonary-grid-2",
    component: _7a548c26,
    name: "page-portfolio-mesonary-grid-2"
  }, {
    path: "/page/portfolio/mesonary-grid-3",
    component: _7a62a3a7,
    name: "page-portfolio-mesonary-grid-3"
  }, {
    path: "/page/portfolio/mesonary-grid-4",
    component: _7a70bb28,
    name: "page-portfolio-mesonary-grid-4"
  }, {
    path: "/page/portfolio/portfolio-2-col",
    component: _00aa56dc,
    name: "page-portfolio-portfolio-2-col"
  }, {
    path: "/page/portfolio/portfolio-3-col",
    component: _d6227446,
    name: "page-portfolio-portfolio-3-col"
  }, {
    path: "/page/portfolio/portfolio-4-col",
    component: _293334de,
    name: "page-portfolio-portfolio-4-col"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _1efd6606,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebar",
    component: _6eb3ace5,
    name: "product-sidebar-right-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _262eb643,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _22d72e1f,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _7553afb4,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _7928666a,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _7f8190a6,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _45de86fc,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/page/account/auth/auth",
    component: _4c0d6b3f,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/bags/components/banner",
    component: _0f394232,
    name: "shop-bags-components-banner"
  }, {
    path: "/shop/bags/components/blog",
    component: _0ff7511d,
    name: "shop-bags-components-blog"
  }, {
    path: "/shop/bags/components/category",
    component: _c5a5b20e,
    name: "shop-bags-components-category"
  }, {
    path: "/shop/bags/components/category2",
    component: _088f6189,
    name: "shop-bags-components-category2"
  }, {
    path: "/shop/bags/components/categorytab",
    component: _1b65c3ac,
    name: "shop-bags-components-categorytab"
  }, {
    path: "/shop/bags/components/instagram",
    component: _3e921172,
    name: "shop-bags-components-instagram"
  }, {
    path: "/shop/bags/components/productcategoryslider",
    component: _f85167ba,
    name: "shop-bags-components-productcategoryslider"
  }, {
    path: "/shop/bags/components/productslider",
    component: _676ebeb6,
    name: "shop-bags-components-productslider"
  }, {
    path: "/shop/bags/components/services",
    component: _cb726b4e,
    name: "shop-bags-components-services"
  }, {
    path: "/shop/bags/components/slider",
    component: _77d0761c,
    name: "shop-bags-components-slider"
  }, {
    path: "/shop/beauty/components/about",
    component: _7fce3131,
    name: "shop-beauty-components-about"
  }, {
    path: "/shop/beauty/components/blog",
    component: _087df62e,
    name: "shop-beauty-components-blog"
  }, {
    path: "/shop/beauty/components/instagram",
    component: _0edc5654,
    name: "shop-beauty-components-instagram"
  }, {
    path: "/shop/beauty/components/product-slider",
    component: _046c6a8b,
    name: "shop-beauty-components-product-slider"
  }, {
    path: "/shop/beauty/components/slider",
    component: _69421aed,
    name: "shop-beauty-components-slider"
  }, {
    path: "/shop/beauty/components/top-product-slider",
    component: _0a7567fa,
    name: "shop-beauty-components-top-product-slider"
  }, {
    path: "/shop/beauty/components/video-tutorial",
    component: _114a82fc,
    name: "shop-beauty-components-video-tutorial"
  }, {
    path: "/shop/electronics-1/components/collection_banner",
    component: _c94575a4,
    name: "shop-electronics-1-components-collection_banner"
  }, {
    path: "/shop/electronics-1/components/product_tab",
    component: _10e6cf74,
    name: "shop-electronics-1-components-product_tab"
  }, {
    path: "/shop/electronics-1/components/slider",
    component: _e7d73d20,
    name: "shop-electronics-1-components-slider"
  }, {
    path: "/shop/fashion-2/components/banner",
    component: _1532ac86,
    name: "shop-fashion-2-components-banner"
  }, {
    path: "/shop/fashion-2/components/collection",
    component: _4737a8a2,
    name: "shop-fashion-2-components-collection"
  }, {
    path: "/shop/fashion-2/components/collection-banner",
    component: _55b0d28c,
    name: "shop-fashion-2-components-collection-banner"
  }, {
    path: "/shop/fashion-2/components/instagram",
    component: _42d8b4b1,
    name: "shop-fashion-2-components-instagram"
  }, {
    path: "/shop/fashion-2/components/product",
    component: _5a637da4,
    name: "shop-fashion-2-components-product"
  }, {
    path: "/shop/fashion-2/components/slider",
    component: _74d3c0f2,
    name: "shop-fashion-2-components-slider"
  }, {
    path: "/shop/fashion-3/components/banner",
    component: _3f9842fe,
    name: "shop-fashion-3-components-banner"
  }, {
    path: "/shop/fashion-3/components/product_slider",
    component: _5de1ed83,
    name: "shop-fashion-3-components-product_slider"
  }, {
    path: "/shop/fashion-3/components/product_tab",
    component: _cd90bd3a,
    name: "shop-fashion-3-components-product_tab"
  }, {
    path: "/shop/fashion-3/components/slider",
    component: _81f54b9a,
    name: "shop-fashion-3-components-slider"
  }, {
    path: "/shop/fashion/components/banner",
    component: _705ea858,
    name: "shop-fashion-components-banner"
  }, {
    path: "/shop/fashion/components/blog",
    component: _3f2f7a64,
    name: "shop-fashion-components-blog"
  }, {
    path: "/shop/fashion/components/collection_banner",
    component: _adc23a1e,
    name: "shop-fashion-components-collection_banner"
  }, {
    path: "/shop/fashion/components/instagram",
    component: _443e6c36,
    name: "shop-fashion-components-instagram"
  }, {
    path: "/shop/fashion/components/logo_slider",
    component: _59a889f9,
    name: "shop-fashion-components-logo_slider"
  }, {
    path: "/shop/fashion/components/product_slider",
    component: _eefb4e46,
    name: "shop-fashion-components-product_slider"
  }, {
    path: "/shop/fashion/components/product_tab",
    component: _3186f76e,
    name: "shop-fashion-components-product_tab"
  }, {
    path: "/shop/fashion/components/services",
    component: _00957b8a,
    name: "shop-fashion-components-services"
  }, {
    path: "/shop/fashion/components/slider",
    component: _206880e6,
    name: "shop-fashion-components-slider"
  }, {
    path: "/shop/flower/components/blog",
    component: _60ac8ae6,
    name: "shop-flower-components-blog"
  }, {
    path: "/shop/flower/components/category_tab",
    component: _d1bcc882,
    name: "shop-flower-components-category_tab"
  }, {
    path: "/shop/flower/components/collection_banner",
    component: _2e9f8cdc,
    name: "shop-flower-components-collection_banner"
  }, {
    path: "/shop/flower/components/instagram",
    component: _0c3cf3d7,
    name: "shop-flower-components-instagram"
  }, {
    path: "/shop/flower/components/product_slider",
    component: _ff872448,
    name: "shop-flower-components-product_slider"
  }, {
    path: "/shop/flower/components/services",
    component: _0272086e,
    name: "shop-flower-components-services"
  }, {
    path: "/shop/flower/components/slider",
    component: _148e438c,
    name: "shop-flower-components-slider"
  }, {
    path: "/shop/flower/components/top_products",
    component: _33b23a0e,
    name: "shop-flower-components-top_products"
  }, {
    path: "/shop/furniture/components/blog",
    component: _4fddff88,
    name: "shop-furniture-components-blog"
  }, {
    path: "/shop/furniture/components/category_tab",
    component: _2feab5ba,
    name: "shop-furniture-components-category_tab"
  }, {
    path: "/shop/furniture/components/collection_banner",
    component: _8a01b712,
    name: "shop-furniture-components-collection_banner"
  }, {
    path: "/shop/furniture/components/parallax_banner",
    component: _7777345e,
    name: "shop-furniture-components-parallax_banner"
  }, {
    path: "/shop/furniture/components/slider",
    component: _58c535c7,
    name: "shop-furniture-components-slider"
  }, {
    path: "/shop/gym/components/blog",
    component: _5a2d3051,
    name: "shop-gym-components-blog"
  }, {
    path: "/shop/gym/components/collection-banner",
    component: _0156589c,
    name: "shop-gym-components-collection-banner"
  }, {
    path: "/shop/gym/components/instagram",
    component: _dddf0eda,
    name: "shop-gym-components-instagram"
  }, {
    path: "/shop/gym/components/logo-slider",
    component: _b503ed38,
    name: "shop-gym-components-logo-slider"
  }, {
    path: "/shop/gym/components/product-list",
    component: _43679f6b,
    name: "shop-gym-components-product-list"
  }, {
    path: "/shop/gym/components/slider",
    component: _0c0b5850,
    name: "shop-gym-components-slider"
  }, {
    path: "/shop/gym/components/top-collection",
    component: _5092cff6,
    name: "shop-gym-components-top-collection"
  }, {
    path: "/shop/jewellery/components/category",
    component: _c23c3596,
    name: "shop-jewellery-components-category"
  }, {
    path: "/shop/jewellery/components/instagram",
    component: _159a008b,
    name: "shop-jewellery-components-instagram"
  }, {
    path: "/shop/jewellery/components/parallax-banner",
    component: _5caba03b,
    name: "shop-jewellery-components-parallax-banner"
  }, {
    path: "/shop/jewellery/components/product-slider",
    component: _61a447f6,
    name: "shop-jewellery-components-product-slider"
  }, {
    path: "/shop/jewellery/components/product-tab",
    component: _f3ecd860,
    name: "shop-jewellery-components-product-tab"
  }, {
    path: "/shop/jewellery/components/services",
    component: _c808eed6,
    name: "shop-jewellery-components-services"
  }, {
    path: "/shop/jewellery/components/slider",
    component: _1ed79358,
    name: "shop-jewellery-components-slider"
  }, {
    path: "/shop/kids/components/collection_banner",
    component: _6cbdc040,
    name: "shop-kids-components-collection_banner"
  }, {
    path: "/shop/kids/components/collection_slider",
    component: _27aa5116,
    name: "shop-kids-components-collection_slider"
  }, {
    path: "/shop/kids/components/instagram",
    component: _2f1b0885,
    name: "shop-kids-components-instagram"
  }, {
    path: "/shop/kids/components/logo_slider",
    component: _006162f0,
    name: "shop-kids-components-logo_slider"
  }, {
    path: "/shop/kids/components/parallax_banner",
    component: _cae7a332,
    name: "shop-kids-components-parallax_banner"
  }, {
    path: "/shop/kids/components/product_slider",
    component: _7c13d424,
    name: "shop-kids-components-product_slider"
  }, {
    path: "/shop/kids/components/slider",
    component: _941bc4c4,
    name: "shop-kids-components-slider"
  }, {
    path: "/shop/pets/components/blog",
    component: _54c3ff34,
    name: "shop-pets-components-blog"
  }, {
    path: "/shop/pets/components/collection-banner",
    component: _56e912a7,
    name: "shop-pets-components-collection-banner"
  }, {
    path: "/shop/pets/components/logo-slider",
    component: _340830a2,
    name: "shop-pets-components-logo-slider"
  }, {
    path: "/shop/pets/components/parallax-banner",
    component: _7119b30e,
    name: "shop-pets-components-parallax-banner"
  }, {
    path: "/shop/pets/components/product-slider",
    component: _6a8f0ec3,
    name: "shop-pets-components-product-slider"
  }, {
    path: "/shop/pets/components/slider",
    component: _6e887725,
    name: "shop-pets-components-slider"
  }, {
    path: "/shop/pets/components/top-collection",
    component: _61b3dc4c,
    name: "shop-pets-components-top-collection"
  }, {
    path: "/shop/shoes/components/about",
    component: _539c84e1,
    name: "shop-shoes-components-about"
  }, {
    path: "/shop/shoes/components/blog",
    component: _86832704,
    name: "shop-shoes-components-blog"
  }, {
    path: "/shop/shoes/components/brand",
    component: _74891fdb,
    name: "shop-shoes-components-brand"
  }, {
    path: "/shop/shoes/components/category",
    component: _1045a9da,
    name: "shop-shoes-components-category"
  }, {
    path: "/shop/shoes/components/category2",
    component: _0ef18a70,
    name: "shop-shoes-components-category2"
  }, {
    path: "/shop/shoes/components/category3",
    component: _0ed55b6e,
    name: "shop-shoes-components-category3"
  }, {
    path: "/shop/shoes/components/collectionbanner",
    component: _f1a2bbb4,
    name: "shop-shoes-components-collectionbanner"
  }, {
    path: "/shop/shoes/components/collectionslider",
    component: _069bb95b,
    name: "shop-shoes-components-collectionslider"
  }, {
    path: "/shop/shoes/components/collectiontab",
    component: _8c05b6ea,
    name: "shop-shoes-components-collectiontab"
  }, {
    path: "/shop/shoes/components/instagram",
    component: _5ea25ef4,
    name: "shop-shoes-components-instagram"
  }, {
    path: "/shop/shoes/components/productSlider",
    component: _54f59e84,
    name: "shop-shoes-components-productSlider"
  }, {
    path: "/shop/shoes/components/service",
    component: _6baaf509,
    name: "shop-shoes-components-service"
  }, {
    path: "/shop/shoes/components/slider",
    component: _0f3e3d3d,
    name: "shop-shoes-components-slider"
  }, {
    path: "/shop/tools/components/about",
    component: _0bb9b864,
    name: "shop-tools-components-about"
  }, {
    path: "/shop/tools/components/category",
    component: _4783f066,
    name: "shop-tools-components-category"
  }, {
    path: "/shop/tools/components/logo_slider",
    component: _7163d914,
    name: "shop-tools-components-logo_slider"
  }, {
    path: "/shop/tools/components/product-slider",
    component: _2692188e,
    name: "shop-tools-components-product-slider"
  }, {
    path: "/shop/tools/components/product-tab-slider",
    component: _5774d346,
    name: "shop-tools-components-product-tab-slider"
  }, {
    path: "/shop/tools/components/select-vehical",
    component: _6fb6901c,
    name: "shop-tools-components-select-vehical"
  }, {
    path: "/shop/tools/components/service",
    component: _e9f4e694,
    name: "shop-tools-components-service"
  }, {
    path: "/shop/tools/components/slider",
    component: _398b7bf0,
    name: "shop-tools-components-slider"
  }, {
    path: "/shop/vegetables/components/banner",
    component: _2da58c2e,
    name: "shop-vegetables-components-banner"
  }, {
    path: "/shop/vegetables/components/blog",
    component: _76bbb7b8,
    name: "shop-vegetables-components-blog"
  }, {
    path: "/shop/vegetables/components/product_slider",
    component: _3f6b06b3,
    name: "shop-vegetables-components-product_slider"
  }, {
    path: "/shop/vegetables/components/services",
    component: _f09a7c40,
    name: "shop-vegetables-components-services"
  }, {
    path: "/shop/vegetables/components/slider",
    component: _a5dab93a,
    name: "shop-vegetables-components-slider"
  }, {
    path: "/shop/vegetables/components/special_products",
    component: _578a38a8,
    name: "shop-vegetables-components-special_products"
  }, {
    path: "/shop/watch/components/blog",
    component: _76629636,
    name: "shop-watch-components-blog"
  }, {
    path: "/shop/watch/components/category",
    component: _e6c5327e,
    name: "shop-watch-components-category"
  }, {
    path: "/shop/watch/components/categorytabs",
    component: _e18d2282,
    name: "shop-watch-components-categorytabs"
  }, {
    path: "/shop/watch/components/collectionbanners",
    component: _35321ab6,
    name: "shop-watch-components-collectionbanners"
  }, {
    path: "/shop/watch/components/instagram",
    component: _41629f02,
    name: "shop-watch-components-instagram"
  }, {
    path: "/shop/watch/components/logo_slider",
    component: _71b8e002,
    name: "shop-watch-components-logo_slider"
  }, {
    path: "/shop/watch/components/product_slider",
    component: _44e34b98,
    name: "shop-watch-components-product_slider"
  }, {
    path: "/shop/watch/components/services",
    component: _ec91ebbe,
    name: "shop-watch-components-services"
  }, {
    path: "/shop/watch/components/slider",
    component: _545e07e4,
    name: "shop-watch-components-slider"
  }, {
    path: "/shop/watch/components/timer_banner",
    component: _4c83d5a9,
    name: "shop-watch-components-timer_banner"
  }, {
    path: "/shop/watch/components/top_products",
    component: _43380551,
    name: "shop-watch-components-top_products"
  }, {
    path: "/shop/xz_fashion/components/banner",
    component: _24d74477,
    name: "shop-xz_fashion-components-banner"
  }, {
    path: "/shop/xz_fashion/components/blog",
    component: _10475aad,
    name: "shop-xz_fashion-components-blog"
  }, {
    path: "/shop/xz_fashion/components/collection_banner",
    component: _28efcd72,
    name: "shop-xz_fashion-components-collection_banner"
  }, {
    path: "/shop/xz_fashion/components/instagram",
    component: _38833092,
    name: "shop-xz_fashion-components-instagram"
  }, {
    path: "/shop/xz_fashion/components/logo_slider",
    component: _1917a93a,
    name: "shop-xz_fashion-components-logo_slider"
  }, {
    path: "/shop/xz_fashion/components/product_slider",
    component: _262f3408,
    name: "shop-xz_fashion-components-product_slider"
  }, {
    path: "/shop/xz_fashion/components/product_tab",
    component: _b2a8b8ec,
    name: "shop-xz_fashion-components-product_tab"
  }, {
    path: "/shop/xz_fashion/components/services",
    component: _79578be9,
    name: "shop-xz_fashion-components-services"
  }, {
    path: "/shop/xz_fashion/components/slider",
    component: _b77748a8,
    name: "shop-xz_fashion-components-slider"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _9143f09c,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _4c7e4cf4,
    name: "product-sidebar-id"
  }, {
    path: "/",
    component: _684a019f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
