<template>
  <div class="video-section">
    <video autoplay muted loop>
      <source :src="angel" type="video/mp4" />
    </video>
  </div>
  <div class="phrase" :class="'phrase-' + breakpoint">
    <h2 :class="'welcome-' + breakpoint">Bienvenido</h2>
    <h3>Hacemos los datos fáciles de usar</h3>
  </div>
  <img
    class="logo-turing"
    :src="turing"
    alt="Logo Turing"
    :class="'logo-turing-' + breakpoint"
  />
</template>
<script setup>
import angel from "@/assets/video/angel.mp4";
import turing from "@/assets/imgs/logo-turing.jpg";
import { computed } from "vue";
import { useDisplay } from "vuetify";
const { name } = useDisplay();
const breakpoint = computed(() => name.value);
</script>
<style scoped>
.video-section {
  position: relative;
  z-index: 1;
  height: 70vh;
}

video {
  width: 100vw;
  object-fit: cover;
  height: 100%;
}

.phrase {
  position: relative;
  z-index: 2;
  margin-left: 5%;
  margin-top: -50vh;
}

.phrase h2 {
  color: #4671e5;
}

.phrase-xxl h2,
.phrase-xl h2,
.phrase-lg h2 {
  font-size: 100px;
}

.phrase-md h2 {
  font-size: 80px;
}

.phrase-sm h2,
.phrase-xs h2 {
  font-size: 50px;
}

.phrase h3 {
  font-size: 50px;
  width: 450px;
  color: white;
}



.phrase-xs h3 {
  font-size: 40px;
}

.logo-turing-xxl,
.logo-turing-xl,
.logo-turing-lg {
  position: relative;
  z-index: 2;
  margin-right: 5%;
  float: right;
  margin-top: -30vh;
  height: 300px;
}

.logo-turing-md,
.logo-turing-sm,
.logo-turing-xs {
  opacity: 0;
}
</style>