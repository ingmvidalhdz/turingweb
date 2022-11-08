<template>
  <div class="container">
    <h2 class="title-section">QUE REALIZAMOS</h2>
    <div class="desc-container">
      <h3 class="desc-section center-text">
        Contribuimos con su empresa para mejorar la toma de decisiones a través
        de sus datos.
      </h3>
    </div>
    <img class="img-empresa elevation-10" :src="empresa" alt="Img empresa" />
    <v-btn class="btn-info">MÁS INFORMACIÓN</v-btn>
    <h2 class="title-section">LA MANERA IDEAL PARA MANEJAR TUS DATOS</h2>
    <div class="desc-container">
      <h3 class="desc-section justify-text">
        Somos el socio estratégico que necesitas para potenciar los datos de tu
        organización. Contamos con más de 15 años de experiencia brindando
        soluciones innovadoras, adaptadas a las necesidades de nuestros
        clientes, en más de 10 industrias y diferentes áreas funcionales.
      </h3>
    </div>
    <div class="way-video"></div>
    <h2 class="title-section">TECNOLOGIAS QUE UTILIZAMOS</h2>
  </div>
</template>
<script setup>
import empresa from "@/assets/empresa.jpg";
</script>
<style scoped>
.container {
  background: white;
  margin: 20vh 5% 0 5%;
}

.title-section {
  color: #4671e5;
  font-size: 50px;
  text-align: center;
  margin-top: 50px;
}

.desc-section {
  font-size: 25px;
}

.img-empresa {
  display: block;
  margin: 20px auto;
  border-radius: 100%;
  height: 400px;
  width: 400px;
}

.btn-info {
  display: block;
  margin: 20px auto;
  color: white;
  background: #4671e5;
  font-size: 20px;
}

.btn-info:hover {
  transition: 0.5s all;
  transform: scale(1.2);
  background: white;
  color: #4671e5;
  border: 1px solid #4671e5;
}

.desc-container {
  display: block;
  margin: 0px auto;
  width: 70%;
}

.way-video {
  display: block;
  margin: 0 auto;
  width: 500px;
  height: 500px;
}
</style>