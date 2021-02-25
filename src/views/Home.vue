<template>
  <div class="home">
    <banner />
    <courses />
  </div>
</template>

<script>
import Banner from '../components/Home/Banner.vue'
import Courses from '../components/Home/Courses.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Courses,
  },
}
</script>
