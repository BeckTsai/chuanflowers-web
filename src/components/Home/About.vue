<template>
  <div class="relative text-lg xl:flex">
    <div class="left w-full">
      <img class="w-full" src="@/assets/image/Home/about.png" />
    </div>
    <div class="right serif-text flex flex-col justify-center items-center w-full text-white xl:relative">
      <div class="content flex-col flex justify-center writing-mode font-normal">
        <div>花能夠訴說所有沒能說出口的話語，</div>
        <div>傳達所有不該被時間拘束的情感。</div>
      </div>
      <div class="sub-text text-center xl:absolute xl:bottom-8 xl:right-8">工作室採預約制服務，請先訊息/電話預約</div>
    </div>
    <div
      class="about-title absolute w-4/5 text-xl text-white mx-auto flex justify-between items-center xl:w-4/6 xl:justify-start 2xl:w-4/5"
    >
      <div class="title-field flex flex-1 xl:flex-none justify-around xl:justify-start items-center">
        <div>ABOUT</div>
        <div class="line bg-white" />
      </div>
      <div class="text text-sm">
        <span class="serif-text">繾綣 </span>
        <span>Chuan</span>
      </div>
    </div>
  </div>
</template>

<script>
// import getImageLimit from '@/mixins/getImageLimit.js'

export default {
  name: 'About',
  // mixins: [getImageLimit],
  // watch: {
  //   scrollPosition() {
  //     const imageLimit = this.getImageLimit('about')
  //     if (!this.active) {
  //       this.active = imageLimit < this.scrollPosition
  //     }
  //   },
  // },
}
</script>

<style lang="scss" scoped>
// .set-scroll {
//   transition: 1s 0.2s linear;
//   transform: translate3d(0, 20px, 0);
//   opacity: 0;
// }

// .scroll-position {
//   transform: translate3d(0, 0, 0);
//   opacity: 1;
// }

.writing-mode {
  writing-mode: vertical-rl;
}

.about-title {
  top: 37px;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 25px;
  letter-spacing: 7px;
  @screen xl {
    left: 207px;
    transform: translateX(0);
    margin-bottom: 0;
    top: 40px;
    font-size: 35px;
  }
}

.title-field {
  @screen xl {
    width: 61%;
    padding-left: 60px;
  }
}

.text {
  @apply ml-2;
  letter-spacing: 2.2px;
  @screen xl {
    width: 32%;
    padding-left: 2px;
    font-size: 22px;
  }
}

.line {
  width: 50%;
  height: 1px;
  @screen md {
    width: 84%;
  }
  @screen xl {
    width: 100%;
  }
}

.right {
  background-color: $pink;
  padding-bottom: 17px;
}

.content {
  @apply pt-24;
  @apply pb-4;
  letter-spacing: 13px;
  @screen xl {
    @apply p-0;
    font-size: 25px;
    letter-spacing: 13px;
  }

  div:first-child {
    margin-left: 14px;
  }
}

.sub-text {
  font-size: 13px;
}
</style>
