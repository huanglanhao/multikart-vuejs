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

        <li>
          <a href="javascript:void(0)" @click="setActive('bags')">bags
            <span class="sub-arrow"></span>
          </a>
          <ul :class="{ opensub1: isActive('bags') }">
            <li>
              <a href="#">shopper bags</a>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['leftSidebarVal'],
  data() {
    return {
      activeItem: 'clothing'
    }
  },
  methods: {
    closeLeftBar(val) {
      val = false
      this.$emit('closeVal', val)
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      if (this.activeItem === menuItem) {
        this.activeItem = ''
      } else {
        this.activeItem = menuItem
      }
    }
  }
}
</script>
