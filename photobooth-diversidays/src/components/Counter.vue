<template>
  <button class="fixed bg-custom-pink bg-opacity-75 rounded-full shadow-md bottom-10  w-24 h-24 right-1/2" @click="startCounter">
    <div>
      <div class="justify-center items-center">
        <div class="flex justify-center items-center select-none bg-custom-pink text-white text-xl font-bold p-4 m-4 rounded-full h-16 w-16">
          <Camera class="m-auto w-2/3" v-if="timerCount=5"/>
          <span v-else class="text-2xl">{{ timerCount }}</span>
        </div>
      </div>
    </div>
  </button>
</template>
<script>
import { defineComponent } from "vue";
import Camera from '../components/SVG/Camera.vue'
export default defineComponent({
  components: {
    Camera
  },
  data() {
    return {
      timerCount: 5,
    }
  },
  methods:{
    startCounter() {
      this.timer = setInterval(() => {
        this.timerCount--;
        if (this.timerCount === 0) {
          this.takePhoto();
          clearInterval(this.timer);
        }
      }, 1000);
    },
    takePhoto(){
      console.log("aze")
    },
    watch: {
      timerCount: {
          handler(value) {
            if (value > 0) {
              setTimeout(() => {
                  this.timerCount--;
              }, 1000);
            }
          },
          immediate: true
      }

    }
  }
})
</script>
