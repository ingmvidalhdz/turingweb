<template>
  <div class="video-section">
    <video autoplay muted loop>
      <source :src="angel" type="video/mp4" />
    </video>
  </div>
  <div class="phrase">
    <h2>Bienvenido</h2>
    <h3>Hacemos los datos fáciles de usar</h3>
  </div>
  <img class="logo-turing" :src="turing" alt="Logo Turing" />
</template>
<script setup>
import angel from "@/assets/video/angel.mp4";
import turing from "@/assets/logo-turing.jpg";
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

.phrase h2,
h3 {
  color: white;
}

.phrase h2 {
  font-size: 100px;
  color: #4671e5;
}

.phrase h3 {
  font-size: 50px;
  width: 450px;
}

.logo-turing {
  position: relative;
  z-index: 2;
  margin-right: 5%;
  float: right;
  margin-top: -30vh;
  height: 300px;
}
</style>