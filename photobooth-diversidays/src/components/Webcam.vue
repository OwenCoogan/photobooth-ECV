<template>
  <div class="web-camera-container relative h-screen w-auto overflow-hidden">
    <UniqueLogo :width="'100%'" :height="'100%'" :padding="'50px'" class="absolute z-50"/>
  <div class="camera-box" :class="{ 'flash' : isShotPhoto }">
    <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
    <video v-show="!isPhotoTaken" ref="camera" autoplay class="absolute min-w-auto min-h-full max-w-none" :style="{left}"></video>
    <canvas v-show="isPhotoTaken" id="photoTaken" class="absolute min-w-auto min-h-full max-w-none" ref="canvas" :width="450" :height="337.5" :style="{left}"></canvas>
  </div>

  <div v-if="!isPhotoTaken"  class="camera-shoot">
    <Counter @takePhotoEvent="takePhoto" class=" counter-alignement"/>
  </div>
  <div v-if="isPhotoTaken" class="camera-download absolute bottom-10 left-1/2 buttons-alignement flex">
    <router-link :to="'/EndScreen'"  id="downloadPhoto" download="my-photo.jpg" class="text-white bg-custom-pink hover:text-white focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 w-3/4" role="button" @click="downloadImage">
      <p class="w-full block text-center px-24">Valider</p>
    </router-link>
    <button type="button" @click="revert" class="text-custom-pink border bg-white border-custom-pink hover:bg-custom-pink hover:text-white focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2">
      <Revert/>
  </button>
  </div>
</div>

</template>

<script>
import Camera from '../components/SVG/Camera.vue'
import Counter from '../components/Counter.vue'
import Revert from '../components/SVG/Revert.vue'
import UniqueLogo from '../components/SVG/UniqueLogo.vue'
export default {
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',
      left: '-70%',
      canvas:null,
    }
  },
  components: {
    Camera,
    Counter,
    Revert,
    UniqueLogo,
  },
  mounted() {
    console.log('sup')
    this.toggleCamera()
  },
  methods: {
    toggleCamera() {
        this.isCameraOpen = true;
        this.createCameraElement();
    },

    createCameraElement() {
      this.isLoading = true;
      const constraints = (window.constraints = {
				audio: false,
				video: true
			});
			navigator.mediaDevices
				.getUserMedia(constraints)
				.then(stream => {
          this.isLoading = false;
					this.$refs.camera.srcObject = stream;
				})
				.catch(error => {
          this.isLoading = false;
					alert("May the browser didn't support or there is some errors.");
				});
    },

    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

			tracks.forEach(track => {
				track.stop();
			});
    },

    takePhoto() {
      if(!this.isPhotoTaken) {
        this.isShotPhoto = true;
        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }

      this.isPhotoTaken = !this.isPhotoTaken;

      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
      this.link = this.$refs.canvas.toDataURL('image/jpeg');
      this.canvas = document.getElementById("photoTaken").toDataURL("image/jpeg");
      console.log(this.canvas)
      localStorage.setItem("current_image", this.canvas)
    },

    revert(){
      this.isPhotoTaken = false;
      this.isCameraOpen = true
    },
    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
    .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    }
  }
  }
</script>
