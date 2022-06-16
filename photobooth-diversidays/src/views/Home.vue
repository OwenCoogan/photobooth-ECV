<template>
  <div class="container bg-custom-blue">
    <div>
      <div class="header my-6">
      <UniqueLogo :width="'100%'" :height="'100%'"/>
      <h2 class="text-white">
        Déconstruire les préjugés pour
        <span class="text-custom-yellow">
          Bâtir L’AVENIR
        </span>
        ENSEMBLE
      </h2>
    </div>
    <div class="">
      <ImageFramesSVG/>
      <p class="text-white">
        Participez à notre grande mosaïque photos de la diversité !
      </p>
      <router-link class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" to="/Webcam">

      </router-link>
    </div>
    </div>
  </div>
</template>

<script>
  import UniqueLogo from '../components/SVG/UniqueLogo.vue'
  import ImageFramesSVG from '../components/SVG/ImageFramesSVG.vue'
export default {
  components: {
    UniqueLogo,
    ImageFramesSVG
  }
}
</script>
