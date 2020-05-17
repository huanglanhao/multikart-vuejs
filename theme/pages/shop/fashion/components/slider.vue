<template>
  <div>
    <!-- <h2 class="title">{{ $t('home.title') }}</h2> -->
    <!-- <h2 class="subtitle">{{ $t('home.introduction') }}</h2> -->
    <!-- Home slider -->
    <section class="p-0">
      <div class="slide-1 home-slider">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in items" :key="index">
              <div
                class="home text-center"
                :class="item.alignclass"
                v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain">
                        <div>
                          <h4>{{ item.title }}</h4>
                          <h1>{{ item.subtitle }}</h1>
                          <h4>{{ item.describetitle }}</h4>
                          <nuxt-link :to="{ path: '/collection/leftsidebar/all'}" class="btn btn-solid">立即购买</nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </section>
    <!-- Home slider end -->
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/home-banner/1-1.png'),
          title: '10代超薄游戏本',
          subtitle: '轻薄便携',
          describetitle: '144GHz屏 畅玩电竞游戏',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/1-2.png'),
          title: 'PHONE',
          subtitle: '炫彩大屏',
          describetitle: 'HOT',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/1-3.png'),
          title: '暖春战役',
          subtitle: '满3免1专区',
          describetitle: '05.01 - 05.30',
          alignclass: 'p-left'
        }
      ]
    }
  }
}
</script>
