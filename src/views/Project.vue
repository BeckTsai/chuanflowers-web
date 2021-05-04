<template>
  <div>
    <banner :text="'我們擁有彼此的盛開。'" :img-list="imgList" />
  </div>
</template>

<script>
import Banner from '../components/common/Banner.vue'
import pic1 from '../assets/image/project/banner_1.png'
import pic2 from '../assets/image/project/banner_2.png'
import pic3 from '../assets/image/project/banner_3.png'
import mobilePic1 from '../assets/image/project/banner_m_1.png'
import mobilePic2 from '../assets/image/project/banner_m_2.png'
import mobilePic3 from '../assets/image/project/banner_m_3.png'

export default {
  name: 'Project',
  components: {
    Banner,
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

<style lang="scss" scoped></style>
