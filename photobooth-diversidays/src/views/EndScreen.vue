<template>
  <div class="container bg-custom-blue">
    <div>
      <div class="header mt-6">
      <UniqueLogo :width="'100%'" :height="'100%'" :padding="'50px'"/>
      <h2 class="text-white px-10 home-title">
        Déconstruire les préjugés pour
        <span class="text-custom-yellow">
          Bâtir L’AVENIR
        </span>
        ENSEMBLE
      </h2>
    </div>
    <div class="px-10">
      <ImageFramesCustomSVG :width="'100%'" :height="'100%'" class="p-20 pt-0" :image="this.image"/>
      <p class="text-white">
        Rendez-vous le 5 décembre
        à la villette !
      </p>
    </div>
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
    Camera
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
