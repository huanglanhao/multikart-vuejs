<template>
  <div id="mySidenav" class="sidenav" :class="{ openSide:leftSidebarVal }">
    <a class="sidebar-overlay" @click="closeLeftBar(leftSidebarVal)"></a>
    <nav>
      <a @click="closeLeftBar(leftSidebarVal)">
        <div class="sidebar-back text-left">
          <i class="fa fa-angle-left pr-2" aria-hidden="true"></i> 返回
        </div>
      </a>
      <!-- Sample menu definition -->
      <ul id="sub-menu" class="sidebar-menu">
        <li v-for="(item, index) in categoryList" :key="index">
          <!-- <a href="javascript:void(0)" @click="setActive(item.title)">{{item.title}} -->
          <!-- <span class="sub-arrow"></span> -->
          <!-- </a> -->
          <nuxt-link :to="{ path: '/collection/xz_leftsidebar/all'}">{{item.categoryName}}</nuxt-link>
          <!-- <ul :class="{ opensub1: isActive('bags') }">
            <li>
              <a href="#">shopper bags</a>
            </li>
          </ul>-->
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("xz_home");
export default {
  props: ["leftSidebarVal"],
  data() {
    return {
      activeItem: "clothing"
    };
  },
  computed: {
    ...mapState(["categoryList"])
  },
  methods: {
    closeLeftBar(val) {
      val = false;
      this.$emit("closeVal", val);
    },
    isActive: function(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function(menuItem) {
      if (this.activeItem === menuItem) {
        this.activeItem = "";
      } else {
        this.activeItem = menuItem;
      }
    }
  }
};
</script>
