<template>
  <div class="link-wrapper cursor-pointer text-base md:text-lg" @click="$emit('event')">
    <div class="flex justify-between items-center mb-2">
      <div class="text mr-7 xl:mr-14">{{ text }}</div>
      <svg
        viewBox="0 0 16 16"
        width="1em"
        height="1em"
        focusable="false"
        role="img"
        aria-label="chevron right"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="arrow-right"
        data-v-1b3db224=""
      >
        <g data-v-1b3db224="">
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="btn-line" />
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>

<style lang="scss" scoped>
.link-wrapper {
  width: max-content;
  &:hover {
    .text {
      color: $pink;
    }
    .arrow-right {
      color: $pink;
      transform: translateX(100%);
    }
    .btn-line {
      opacity: 0;
    }
  }
}

.text {
  width: max-content;
  min-width: 70px;
  transition: color 0.4s;

  @screen md {
    min-width: 83px;
  }
}

.arrow-right {
  width: 18px;
  height: 18px;
  transition: transform 0.4s;
}

.btn-line {
  height: 1px;
  background-color: $grey3;
  transition: opacity 0.4s;
}
</style>
