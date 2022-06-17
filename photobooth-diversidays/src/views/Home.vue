<template>
  <div class="container bg-custom-blue">
    <div>
      <div class="header my-6">
      <UniqueLogo :width="'100%'" :height="'100%'" :padding="'50px'"/>
      <h2 class="text-white px-10">
        Déconstruire les préjugés pour
        <span class="text-custom-yellow">
          Bâtir L’AVENIR
        </span>
        ENSEMBLE
      </h2>
    </div>
    <div class="px-10">
      <ImageFramesSVG :width="'100%'" :height="'100%'" />
      <p class="text-white">
        Participez à notre grande mosaïque photos de la diversité !
      </p>
      <router-link class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded block w-1/2 m-auto my-3" to="/Webcam">
        C’est parti
        <Camera class="mx-1 w-4 inline" />
      </router-link>
    </div>
    </div>
  </div>
</template>

<script>
  import UniqueLogo from '../components/SVG/UniqueLogo.vue'
  import ImageFramesSVG from '../components/SVG/ImageFramesSVG.vue'
  import Camera from '../components/SVG/Camera.vue'
export default {
  components: {
    UniqueLogo,
    ImageFramesSVG,
    Camera
  }
}
</script>
