<template>
  <div class="container-wrap pt-10 px-4 xl:px-20 xl:pt-16">
    <div ref="footer" class="relative flex flex-col-reverse justify-between xl:flex-row">
      <div class="left relative pt-16 pb-40 xl:flex xl:pt-0">
        <div class="text-xs mr-20 2xl:text-base">
          <div class="title text-lg mb-5 xl:text-xl">PROJECT</div>
          <div class="item mb-5" @click="$router.push('/project/floral_bouquet')">
            <span class="serif-text mr-3">花束</span>Floral bouquet
          </div>
          <div class="item mb-5" @click="$router.push('/project/wreath')">
            <span class="serif-text mr-3">花圈</span>Wreath
          </div>
          <div class="item mb-5" @click="$router.push('/project/floral_box')">
            <span class="serif-text mr-3">花禮/花盒/盆花</span>Floral box
          </div>
          <div class="item mb-5" @click="$router.push('/project/bridal_bouquet')">
            <span class="serif-text mr-3">捧花/胸花</span>Bridal bouquet
          </div>
          <div class="item mb-5" @click="$router.push('/project/wedding_decor')">
            <span class="serif-text mr-3">婚禮佈置</span>Wedding decor
          </div>
        </div>
        <div class="text-base mr-20">
          <div class="title text-lg mb-5 xl:text-xl">FOLLOW US</div>
          <div class="">
            <link-btn
              class="link mb-5 xl:text-xs 2xl:text-base"
              :text="'Facebook'"
              @event="clickHandler('https://www.facebook.com/chuanflowers')"
            />
            <link-btn
              class="link mb-5 xl:text-xs 2xl:text-base"
              :text="'Instagram'"
              @click="clickHandler('https://www.instagram.com/chuanflowers')"
            />
          </div>
        </div>
        <div class="text-base 2xl:text-base">
          <div class="title text-lg mb-5 xl:text-xl">CONTACT</div>
          <div class="">
            <div class="mb-5 select-text">chuanflowers@gmail.com</div>
          </div>
        </div>
      </div>
      <div class="right pb-16 pr-16 xl:mb-16 xl:pb-0">
        <div class="title text-xl tracking-widest">CHUAN Flowers</div>
        <div class="serif-text mt-2 text-sm tracking-widest">繾 綣</div>
        <div class="mt-9 text-xs">40349</div>
        <div class="serif-text text-xs cursor-pointer" @click="openWindow">台中市西區中美街299巷14號1樓</div>
        <div class="mt-6 text-xs cursor-pointer" @click="openWindow">
          1F., No. 14, Ln. 299, Zhongmei St., West Dist., Taichung City 403, Taiwan
        </div>
      </div>
      <div class="copy-right absolute bottom-8 text-xs">Copyright © CHUAN FLOWERS. All rights reserved.</div>
    </div>
  </div>
</template>

<script>
import LinkBtn from './common/LinkBtn.vue'

// import setScroll from '../mixins/setScroll'

export default {
  name: 'Footer',
  // mixins: [setScroll],
  components: {
    LinkBtn,
  },
  data() {
    return {
      active: false,
    }
  },
  // watch: {
  //   scrollPosition() {
  //     const imageLimit = this.getImageLimit('footer')
  //     if (!this.active) {
  //       this.active = imageLimit < this.scrollPosition
  //     }
  //   },
  // },
  methods: {
    clickHandler(url) {
      window.open(url)
    },
    openWindow() {
      window.open('https://g.page/chuanflowers?share', 'google map')
    },
    getImageLimit(el) {
      return this.$refs[el].offsetTop + this.$refs[el].offsetHeight / 3
    },
  },
}
</script>

<style lang="scss" scoped>
// .set-scroll {
//   transition: 1s linear;
//   transform: translate3d(0, 20px, 0);
//   opacity: 0;
// }

// .scroll-position {
//   transform: translate3d(0, 0, 0);
//   opacity: 1;
// }

.container-wrap {
  background-color: $grey7;
}

.left {
  width: 70%;
}

.item {
  transition: color 0.3s;
  @apply cursor-pointer;
  &:hover {
    color: $pink;
  }
}

.link {
  /deep/ {
    @screen xl {
      .text {
        min-width: 55px;
      }
      .arrow-right {
        width: 13px;
        height: 13px;
      }
    }
    @screen 2xl {
      .text {
        @apply mr-12;
        min-width: 74px;
      }
    }
  }
}

.copy-right {
  color: $pink;
}

.title {
  color: $pink;
}

.right {
  border-bottom: 1px solid $grey6;
  @screen xl {
    @apply pl-16;
    border-bottom: none;
    border-left: 1px solid $grey6;
  }
}
</style>
