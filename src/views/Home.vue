<template>
  <div class="home">
    <banner />
    <courses />
    <project />
    <about />
  </div>
</template>

<script>
import Banner from '../components/Home/Banner.vue'
import Courses from '../components/Home/Courses.vue'
import Project from '../components/Home/Project.vue'
import About from '../components/Home/About.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Courses,
    Project,
    About,
  },
}
</script>
