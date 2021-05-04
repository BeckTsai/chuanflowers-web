<template>
  <div class="header fixed flex justify-between items-center w-full h-14 pt-4 px-6 xl:pt-8 xl:px-24 xl:h-20">
    <div class="w-20 xl:w-28" @click="$router.push('/')">
      <img src="../assets/image/logo.png" alt="chuan" class="w-full" />
    </div>
    <div :class="['menu-btn', { 'menu-active': btnStatus }]" @click="btnStatus = !btnStatus">
      <div class="relative flex flex-col justify-between h-2.5">
        <div class="menu-line w-full" />
        <div class="menu-line w-full" />
      </div>
      <div class="menu-text text-xs xl:text-base">Menu</div>
    </div>
    <base-menu v-show="btnStatus" :show-dialog.sync="btnStatus" />
  </div>
</template>

<script>
import BaseMenu from './BaseMenu.vue'
import hasDialog from '../mixins/has-dialog'

export default {
  name: 'Header',
  components: {
    BaseMenu,
  },
  mixins: [hasDialog],
  data: () => ({
    btnStatus: false,
  }),
  watch: {
    btnStatus(nv) {
      this.toggleRootOverflowHidden(nv)
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes rotateRight {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(-4px) rotate(-45deg);
  }
}

@keyframes rotateLeft {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(4px) rotate(45deg);
  }
}

@keyframes rotateRightReverse {
  0% {
    transform: translateY(-4px) rotate(-45deg);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes rotateLeftReverse {
  0% {
    transform: translateY(4px) rotate(45deg);
  }
  50% {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeOutDown {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  100% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}

.header {
  z-index: 2;
}

.menu-btn {
  z-index: 4;
  width: 31px;
  color: $white;
  cursor: pointer;
  user-select: none;
  @screen xl {
    width: 41px;
  }
}

.menu-line {
  height: 2px;
  background-color: $white;
  transform: translateY(0) rotate(0);
  animation: rotateRightReverse 0.4s;
  &:first-child {
    animation: rotateLeftReverse 0.4s;
  }
}

.menu-text {
  animation: fadeInUp 0.4s;
}

.menu-active {
  .menu-line {
    background-color: #000;
    transition: background-color 0.4s 0.1s;
    animation-direction: normal;
    animation: rotateRight 0.4s;
    transform: translateY(-4px) rotate(-45deg);

    &:first-child {
      animation: rotateLeft 0.4s;
      transform: translateY(4px) rotate(45deg);
    }
  }

  .menu-text {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
    animation: fadeOutDown 0.4s;
  }
}
</style>
