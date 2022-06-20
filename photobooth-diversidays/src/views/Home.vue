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
      <ImageFramesSVG :width="'100%'" :height="'100%'" class="p-10"/>
      <p class="text-white subtitle-home">
        Participez à notre grande mosaïque photos de la diversité !
      </p>
      <router-link class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded block w-1/3 m-auto my-3 text-xl btn-home" to="/Webcam">
        <p class="block w-full m-auto text-center">
        C’est parti
        <Camera class="mx-1 w-4 inline" />
        </p>
      </router-link>
      <div class="flex">
        <Flashcode class="w-1/2 ml-0"/>
        <img src="../assets/diversidays.png" class="w-1/4 m-auto mr-2 p-4"/>
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
  import UniqueLogo from '../components/SVG/UniqueLogo.vue'
  import ImageFramesSVG from '../components/SVG/ImageFramesSVG.vue'
  import Camera from '../components/SVG/Camera.vue'
  import Flashcode from '../components/UI/Flashcode.vue'
undefined
export default {
  components: {
    UniqueLogo,
    ImageFramesSVG,
    Camera,
    Flashcode
},
  setup: () => {
    if(localStorage.getItem('current_image')){
      localStorage.removeItem('current_image');
    }
  }
}
</script>
