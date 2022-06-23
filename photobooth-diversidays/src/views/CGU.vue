<template>
  <div class="container bg-custom-blue p-6">
    <div class="overflow-y-auto h-4/6 bg-white p-4 m-4 rounded-lg font-bold">
      <h2 class="text-gray-900 text-xl lg:text-2xl font-semibold py-6">Politique de données & CGU</h2>
      <p>
        Ce document informe les Utilisateurs sur les technologies qui aident Diversidays (Unique) à atteindre les objectifs décrits ci-dessous. Ces technologies permettent au propriétaire d'accéder et de stocker des informations (par exemple en utilisant un cookie) ou d'utiliser des ressources (par exemple en exécutant un script) sur l'appareil d'un utilisateur lorsqu'il interagit avec la borne photo

        Pour des raisons de simplicité, toutes ces technologies sont définies comme des "traceurs" dans le présent document, sauf s'il y a une raison de les différencier.
        Par exemple, alors que les cookies peuvent être utilisés à la fois sur les navigateurs web et mobiles, il serait inexact de parler de cookies dans le contexte des applications mobiles, car ils constituent un traceur basé sur le navigateur. C'est pourquoi, dans le présent document, le terme "cookies" n'est utilisé que lorsqu'il est spécifiquement destiné à indiquer ce type particulier de traceur.

        Certaines des fins pour lesquelles les traceurs sont utilisés peuvent également nécessiter le consentement de l'utilisateur, en fonction de la loi applicable. Lorsque le consentement est donné, il peut être librement retiré à tout moment en suivant les instructions fournies dans ce document.

        Webcam Toy utilise des Trackers gérés directement par le Propriétaire (Trackers dits " first-party ") et des Trackers permettant de bénéficier de services fournis par un tiers (Trackers dits " third-party "). Sauf indication contraire dans le présent document, les prestataires tiers peuvent accéder aux Trackers qu'ils gèrent.

        Traduit avec www.DeepL.com/Translator (version gratuite)
      </p>
    </div>
      <router-link class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded block m-auto my-3 text-xl btn-home" to="/Webcam">
        <p class="block w-full m-auto text-center">
        J'accepte les CGU
        </p>
      </router-link>
      <router-link class="bg-transparent border border-custom-pink text-white font-bold py-2 px-4 rounded block m-auto my-3 text-xl btn-home" to="/">
        <p class="block w-full m-auto text-center">
        Annuler
        </p>
      </router-link>
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
