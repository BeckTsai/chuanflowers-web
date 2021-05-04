<template>
  <div class="base-wrapper fixed top-0 left-0 w-full h-full">
    <transition name="fadeOut">
      <div v-show="showDialog" class="mask fixed top-0 left-0 w-full h-full" />
    </transition>
    <transition name="scroll">
      <div v-show="showDialog" class="menu-wrapper fixed top-0 left-0 w-full h-full">
        <transition-group name="opacity" class="flex justify-between w-full h-full">
          <div
            v-show="showDialog"
            class="h-full pt-6 pl-5 xl:pt-0 xl:pl-28 xl:flex xl:flex-col xl:justify-center"
            :key="'left'"
          >
            <div class="text-xs tracking-widest">CATEGORY</div>
            <div class="mt-14 mb-16">
              <div
                class="nav flex items-center h-12 cursor-pointer xl:h-14"
                @mouseenter="hoverCurrentItem = 'pic2'"
                @mouseleave="hoverCurrentItem = 'pic1'"
                @click="changeRoute('/')"
              >
                <div class="nav-line" />
                <div class="nav-title text-3xl">HOME</div>
                <div class="nav-sub-title serif-text ml-2 text-base">首頁</div>
              </div>
              <div
                class="nav flex items-center h-12 cursor-pointer xl:h-14"
                @mouseenter="hoverCurrentItem = 'pic3'"
                @mouseleave="hoverCurrentItem = 'pic1'"
                @click="changeRoute('/courses')"
              >
                <div class="nav-line" />
                <div class="nav-title text-3xl">COURSES</div>
                <div class="nav-sub-title serif-text ml-2 text-base">檔期活動</div>
              </div>
              <div
                class="nav flex items-center h-12 cursor-pointer xl:h-14"
                @mouseenter="hoverCurrentItem = 'pic4'"
                @mouseleave="hoverCurrentItem = 'pic1'"
                @click="changeRoute('/project')"
              >
                <div class="nav-line" />
                <div class="nav-title text-3xl">PROJECT</div>
                <div class="nav-sub-title serif-text ml-2 text-base">花藝作品</div>
              </div>
            </div>
            <div>
              <div class="title mb-4 text-lg tracking-widest">FOLLOW US</div>
              <link-btn
                class="link mb-3"
                :text="'Facebook'"
                @event="clickHandler('https://www.facebook.com/chuanflowers')"
              />
              <link-btn
                class="link"
                :text="'Instagram'"
                @click="clickHandler('https://www.instagram.com/chuanflowers')"
              />
            </div>
            <div class="mt-10">
              <div class="title mb-4 text-lg tracking-widest">CONTACT</div>
              <div class="text-base">chuanflowers@gmail.com</div>
            </div>
          </div>
          <div v-show="showDialog" class="relative w-2/5 h-full hidden xl:block" :key="'right'">
            <transition name="fade">
              <img
                v-show="hoverCurrentItem === 'pic1'"
                class="absolute top-0 right-0 h-full"
                src="@/assets/image/menu/pic1.png"
              />
            </transition>
            <transition name="fade">
              <img
                v-show="hoverCurrentItem === 'pic2'"
                class="absolute top-0 right-0 h-full"
                src="@/assets/image/menu/pic2.png"
              />
            </transition>
            <transition name="fade">
              <img
                v-show="hoverCurrentItem === 'pic3'"
                class="absolute top-0 right-0 h-full"
                src="@/assets/image/menu/pic3.png"
              />
            </transition>
            <transition name="fade">
              <img
                v-show="hoverCurrentItem === 'pic4'"
                class="absolute top-0 right-0 h-full"
                src="@/assets/image/menu/pic4.png"
              />
            </transition>
          </div>
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
import LinkBtn from './common/LinkBtn.vue'

export default {
  name: 'BaseMenu',
  components: {
    LinkBtn,
  },
  props: {
    showDialog: Boolean,
  },
  data: () => ({
    hoverCurrentItem: 'pic1',
  }),
  methods: {
    changeRoute(route) {
      this.$emit('update:showDialog', false)
      this.$router.push(route)
    },
  },
}
</script>

<style lang="scss" scoped>
// mask animetion
.fadeOut-enter,
.fadeOut-leave-to {
  opacity: 0;
}

.fadeOut-enter-active {
  transition: opacity 0.5s;
}

.fadeOut-leave-active {
  transition: opacity 0.5s 1s;
}

// image animetion
.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// menu animetion
.scroll-enter-active,
.scroll-leave-active {
  transition: 0.5s 0.5s cubic-bezier(0.75, 0.165, 0.715, 0.585);
}

.scroll-leave-active {
  transition-delay: 0.7s;
}

.scroll-enter,
.scroll-leave-to {
  transform: translate3d(0, -100%, 0);
}

.scroll-enter-to,
.scroll-leave {
  transform: translate3d(0, 0, 0);
}

// menu fade in
.opacity-enter-active,
.opacity-leave-active {
  transition: opacity 0.5s 1.3s cubic-bezier(0.75, 0.165, 0.715, 0.585);
}

.opacity-leave-active {
  transition-delay: 0s;
}

.opacity-enter,
.opacity-leave-to {
  opacity: 0;
}

.base-wrapper {
  z-index: 3;
}

.mask {
  background-color: rgba(0, 0, 0, 0.15);
}

.menu-wrapper {
  background-color: $pink;
}

.nav {
  &:hover {
    .nav-line {
      width: 44px;
      margin-right: 10px;
    }
    .nav-title {
      color: $grey3;
    }
    .nav-sub-title {
      opacity: 1;
    }
  }
}

.nav-line {
  width: 0;
  height: 1px;
  background-color: $grey1;
  transition: width 0.3s;
}

.nav-title {
  color: $grey1;
  transition: color 0.3s;
  @screen xl {
    font-size: 40px;
  }
}

.nav-sub-title {
  opacity: 0;
  transition: opacity 0.3s;
}

.title {
  color: $grey1;
}

.link:hover {
  /deep/ {
    .text {
      color: $grey1 !important;
    }
    .arrow-right {
      color: $grey1 !important;
    }
  }
}
</style>
