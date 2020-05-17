<template>
  <div>
    <section class="p-0">
      <div class="slide-1 home-slider">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in items" :key="index">
              <div
                class="home text-left"
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
                          <nuxt-link
                            :to="{ path: '/collection/left-sidebar'}"
                            class="btn btn-solid"
                          >立即购买</nuxt-link>
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
  </div>
</template>

<script>
import { getIndexImgs } from "../../../service/api";

export default {
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      items: [
        {
          imagepath: require("@/assets/images/home-banner/9.jpg"),
          title: "每一次",
          subtitle: "中等",
          alignclass: "p-left"
        },
        {
          imagepath: require("@/assets/images/home-banner/10.jpg"),
          title: "欢迎来到时尚界",
          subtitle: "men watch",
          alignclass: "p-left"
        },
        {
          imagepath: require("@/assets/images/home-banner/11.jpg"),
          title: "欢迎来到时尚界",
          subtitle: "women watch",
          alignclass: "p-left"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    async getIndexImg() {
      const {data} = await getIndexImgs();
      console.log(data,'------data')
    }
  }
};
</script>
