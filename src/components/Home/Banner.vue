<template>
  <div class="relative w-full">
    <swiper ref="bannerSwiper" class="swiper" :options="swiperOption" :style="{ height: `${height}px` }">
      <swiper-slide v-for="(img, idx) in imgList" :key="idx">
        <picture>
          <source class="w-full" :style="heightStyle" :srcset="img.mobile" media="(max-width: 1024px)" />
          <img class="banner-img h-full" :src="img.pc" />
        </picture>
      </swiper-slide>
    </swiper>
    <div class="serif-text text absolute top-1/2 left-1/2 font-black">留連時有限，繾綣意難終。</div>
    <div class="scroll-wrap">
      <div class="scroll-indocator" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import device from '../../mixins/device'
import pic1 from '../../assets/image/Home/banner_1.png'
import pic2 from '../../assets/image/Home/banner_2.png'
import pic3 from '../../assets/image/Home/banner_3.png'
import mobilePic1 from '../../assets/image/Home/banner_m_1.png'
import mobilePic2 from '../../assets/image/Home/banner_m_2.png'
import mobilePic3 from '../../assets/image/Home/banner_m_3.png'

export default {
  name: 'Banner',
  component: {
    Swiper,
    SwiperSlide,
  },
  mixins: [device],
  data: () => ({
    swiperOption: {
      effect: 'fade',
      allowTouchMove: false,
      loop: true,
      speed: 10000,
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      on: {
        imagesReady() {
          this.autoplay.start()
        },
      },
    },
    imgList: [
      { pc: pic1, mobile: mobilePic1 },
      { pc: pic2, mobile: mobilePic2 },
      { pc: pic3, mobile: mobilePic3 },
    ],
    height: window.innerHeight,
  }),
  mounted() {},
}
</script>

<style lang="scss" scoped>
@keyframes ScrollnavigateAnimation {
  0% {
    height: 0;
  }

  45% {
    height: 100%;
  }

  55% {
    height: 100%;
    top: 0;
  }

  100% {
    height: 0;
    top: 100%;
  }
}

.banner-img {
  transform: scale(1);
  transition: transform 15s linear;
  @screen md {
    width: 100%;
  }
  @screen xl {
    width: initial;
  }
}

.text {
  height: max-content;
  transform: translate3d(-50%, -50%, 0);
  font-size: 20px;
  writing-mode: vertical-rl;
  letter-spacing: 9px;
  color: #fff;
  z-index: 1;
  @screen lg {
    font-size: 25px;
  }
  @screen 2xl {
    font-size: 30px;
  }
}

.scroll-wrap {
  position: absolute;
  width: 100%;
  height: 90px;
  bottom: 0;
  text-align: center;
}

.swiper {
  /deep/ {
    .swiper-slide-prev,
    .swiper-slide-active {
      img {
        transform: scale(1.1);
      }
    }
  }
}

.scroll-indocator {
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  width: 1px;
  height: 70px;
  color: #fff;
  z-index: 1;
  background-color: #797878;

  &::before,
  &::after {
    width: 1px;
    height: 70px;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: auto;
    content: '';
  }

  &::after {
    background-color: #c3c3c3;
    animation: ScrollnavigateAnimation 2s infinite cubic-bezier(0.77, 0, 0.18, 1);
  }
  @screen xl {
    .scroll-wrap {
      height: 90px;
      &::before,
      &::after {
        height: 90px;
      }
    }
  }
}
</style>
