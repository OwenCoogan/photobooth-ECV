<template>
  <div class="web-camera-container relative h-screen w-auto overflow-hidden">
  <div class="camera-box" :class="{ 'flash' : isShotPhoto }">
    <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
    <video v-show="!isPhotoTaken" ref="camera" autoplay class="absolute min-w-auto min-h-full max-w-none" :style="{left}"></video>
    <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
  </div>

  <div v-if="!isPhotoTaken"  class="camera-shoot">
    <Counter @takePhotoEvent="takePhoto" class=" counter-alignement"/>
  </div>
  <div v-if="isPhotoTaken" class="camera-download absolute bottom-0 left-1/2">

    <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
      Download
    </a>
    <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="revert">
      Retake Picture
    </a>
  </div>
</div>

</template>

<script>
import Camera from '../components/SVG/Camera.vue'
import Counter from '../components/Counter.vue'
export default {
  data() {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',
      left: '-70%',
    }
  },
  components: {
    Camera,
    Counter
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
