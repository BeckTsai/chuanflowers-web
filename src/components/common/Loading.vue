<template>
  <transition name="fade">
    <div
      v-show="!pageLoaded"
      class="fixed top-0 left-0 w-full bg-white flex justify-center items-center z-10"
      :style="heightStyle"
    >
      <div class="text serif-text">留連時有限，繾綣意難終。</div>
    </div>
  </transition>
</template>

<script>
import device from '../../mixins/device'

export default {
  mixins: [device],
  data: () => ({
    height: window.innerHeight,
    pageLoaded: false,
  }),
  mounted() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.pageLoaded = true
      }, 2000)
    })
  },
  beforeDestroy() {
    window.removeEventListener('load')
  },
}
</script>

<style lang="scss" scoped>
@keyframes colorTransition {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.text {
  height: max-content;
  font-size: 20px;
  writing-mode: vertical-rl;
  letter-spacing: 9px;
  z-index: 1;
  animation: colorTransition 0.75s 0.5;
  @screen lg {
    font-size: 25px;
  }
  @screen 2xl {
    font-size: 30px;
  }
}
</style>
