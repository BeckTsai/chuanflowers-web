<template>
  <div class="schedule-content-wrap">
    <div class="schedule-contain">
      <div class="relative xl:flex">
        <div
          class="schedule-title w-4/5 text-xl mx-auto flex justify-between items-center xl:justify-start xl:w-full xl:absolute"
        >
          <div class="title-field flex flex-1 xl:flex-none justify-around xl:justify-start items-center">
            <div>COURSES</div>
            <div class="line" />
          </div>
          <div class="text text-sm serif-text">檔期活動</div>
        </div>
        <div class="img-wrap">
          <img v-lazy="require('@/assets/image/Courses/01.jpg')" />
        </div>
        <div class="content pt-7 justify-between items-end xl:pt-32 2xl:pt-40 xl:flex xl:flex-col">
          <div class="text-xs serif-text">
            <div class="inner-title">年節花藝課程</div>
            <div class="inner-text">
              學了花藝之後每年過年我媽都叫我要帶一盆花回家，說初一別人來家裡玩她可以拿來炫耀，很有面子，順便幫我打廣告。
            </div>
          </div>
          <link-btn
            class="mt-16 mb-4 xl:mt-12 xl:mb-0 2xl:mb-4 2xl:mt-16"
            :text="'Read More'"
            @event="$router.push('courses')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkBtn from '../common/LinkBtn.vue'
// import getImageLimit from '@/mixins/getImageLimit.js'

export default {
  name: 'Courses',
  components: {
    LinkBtn,
  },
  // mixins: [getImageLimit],
  // watch: {
  //   scrollPosition() {
  //     const imageLimit = this.getImageLimit('scheduleContent')
  //     if (!this.active) {
  //       this.active = imageLimit < this.scrollPosition
  //     }
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.set-scroll {
  transition: 1s linear;
  transform: translate3d(0, 20px, 0);
  opacity: 0;
}

.scroll-position {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}

.schedule-content-wrap {
  background-color: $grey7;
  color: $grey3;
}

.schedule-contain {
  padding: 32% 18px 7%;
  @screen md {
    padding-top: 15%;
  }
  @screen xl {
    padding: 10% 10% 7% 11%;
  }
}

.schedule-title {
  margin-bottom: 25px;
  letter-spacing: 7px;
  @screen xl {
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
  padding-left: 9px;
  @screen xl {
    width: 32%;
    padding-left: 2px;
    font-size: 22px;
    letter-spacing: 2.2px;
  }
}

.line {
  width: 50%;
  height: 1px;
  background-color: $grey3;
  @screen md {
    width: 84%;
  }
}

.img-wrap {
  width: 100%;
  > img {
    width: 100%;
  }
  @screen xl {
    width: 53%;
  }
}

.content {
  @screen xl {
    width: 47%;
    padding-left: 8%;
  }
}

.inner-title {
  margin-bottom: 11px;
  font-size: 15px;
  letter-spacing: 1.5px;
  color: $pink;
  @screen xl {
    font-size: 20px;
    letter-spacing: 2px;
  }
}

.inner-text {
  letter-spacing: 2.4px;
  line-height: 30px;
  @screen xl {
    @apply text-sm;
    letter-spacing: 2.8px;
    line-height: 30px;
  }
}
</style>
