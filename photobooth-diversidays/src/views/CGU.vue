<template>
  <div class="container bg-custom-blue">
    <div class="">
    </div>
  </div>
</template>

<script>
  import UniqueLogo from '../components/SVG/UniqueLogo.vue'
  import ImageFramesSVG from '../components/SVG/ImageFramesSVG.vue'
  import Camera from '../components/SVG/Camera.vue'
  import ImageFramesCustomSVG from '../components/SVG/ImageFramesCustomSVG.vue'
export default {
  components: {
    UniqueLogo,
    ImageFramesSVG,
    ImageFramesCustomSVG,
    Camera,
  },
  data() {
    return {
      image: localStorage.getItem("current_image")
    }
  }
}
</script>

<style>

</style>
