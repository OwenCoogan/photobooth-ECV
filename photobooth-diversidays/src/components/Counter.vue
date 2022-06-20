<template>
  <button class="fixed bg-custom-pink bg-opacity-75 rounded-full shadow-md bottom-10  w-24 h-24 right-1/2" @click="startCounter">
    <div>
      <div class="justify-center items-center">
        <div class="flex justify-center items-center select-none bg-custom-pink text-white text-xl font-bold p-4 m-4 rounded-full h-16 w-16">
          <Camera  v-if="timerStarted===false" class="m-auto w-2/3"/>
          <span v-if="timerStarted===true" class="text-2xl text-white font-bold">{{this.timerCount}}</span>
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
      timerStarted:false,
      timerCount:5
    }
  },
  methods:{
    startCounter(){
      this.timerStarted = true;
      this.timerCount = 5;
      this.timer = setInterval(() => {
        this.timerCount--;
        console.log(this.timerCount)
        if(this.timerCount===0){
          this.timerStarted = false;
          clearInterval(this.timer);
          return this.$emit('takePhotoEvent');
        }
      }, 1000);
    }
  }
})
</script>
