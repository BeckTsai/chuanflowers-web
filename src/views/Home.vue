<template>
  <div class="home">
    <banner :text="'留連時有限，繾綣意難終。'" :img-list="imgList" />
    <courses />
    <project />
    <about />
  </div>
</template>

<script>
import Banner from '../components/common/Banner.vue'
import Courses from '../components/Home/Courses.vue'
import Project from '../components/Home/Project.vue'
import About from '../components/Home/About.vue'
import pic1 from '../assets/image/Home/banner_1.png'
import pic2 from '../assets/image/Home/banner_2.png'
import pic3 from '../assets/image/Home/banner_3.png'
import mobilePic1 from '../assets/image/Home/banner_m_1.png'
import mobilePic2 from '../assets/image/Home/banner_m_2.png'
import mobilePic3 from '../assets/image/Home/banner_m_3.png'

export default {
  name: 'Home',
  components: {
    Banner,
    Courses,
    Project,
    About,
  },
  data: () => ({
    imgList: [
      { pc: pic1, mobile: mobilePic1 },
      { pc: pic2, mobile: mobilePic2 },
      { pc: pic3, mobile: mobilePic3 },
    ],
  }),
}
</script>
