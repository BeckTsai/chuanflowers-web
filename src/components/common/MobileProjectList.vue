<template>
  <div>
    <swiper ref="bannerSwiper" class="swiper" :options="swiperOption" :style="{ height: `${height}px` }">
      <swiper-slide v-for="(img, idx) in imgList" :key="idx">
        <picture>
          <img class="h-full" :src="img.pc" />
        </picture>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'MobileProjectList',
}
</script>

<style lang="scss" scoped></style>
