<template>
  <div
    class="container"
    :class="isMobile ? 'container-mobile' : 'container-desktop'"
  >
    <h2 class="title-section" :class="'title-section-' + breakpoint">
      ¿QUIENES SOMOS?
    </h2>
    <div class="desc-container">
      <h3 class="subtitle-section center-text">Turing-IA, tu mejor opción</h3>
      <p class="about-section">
        Somos una Empresa de Analítica e Inteligencia de Negocios en México con
        presencia internacional, conformada por especialistas en proyectos de
        Business Analytics. Contamos con mas de 15 años de experiencia brindando
        soluciones innovadoras en más de 10 industrias y diferentes áreas
        funcionales. Contamos con los mejores Especialistas en Análisis
        Descriptivos, Predictivos y Prescriptivos, equipados con las
        certificaciones más importantes en el desarrollo de Análisis de Datos
        mediante Knowledge Discovery in Database (KDD)
      </p>
      <img class="img-who elevation-10" :src="data7" alt="img-who-whe-are" />
    </div>
    <div class="methods">
      <h2 class="title-section" :class="'title-section-' + breakpoint">
        NUESTRAS METODOLOGÍAS
      </h2>
      <p class="methods-section">
        Nuestros expertos están comprometidos en desarrollar proyectos
        respaldados por metodologías ágiles e innovadoras, que aseguran el éxito
        de nuestras soluciones de analítica.
      </p>
      <div class="img-collection d-flex justify-center mb-6">
        <img
          class="img-methods"
          v-for="i in 5"
          :key="i"
          :src="arrImages[i - 1]"
          alt="img-methods"
          :class="i % 2 === 0 ? 'img-top' : 'img-bottom'"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";
import data7 from "@/assets/imgs/data-7.jpg";
import pmi from "@/assets/imgs/pmi2.png";
import blueprint from "@/assets/imgs/blueprint.png";
import scrum from "@/assets/imgs/scrum.png";
import driven from "@/assets/imgs/driven.jpg";
import bussines from "@/assets/imgs/bussines.png";
const { name } = useDisplay();
const breakpoint = computed(() => name.value);
const isMobile = computed(() => {
  if (
    breakpoint.value === "xs" ||
    breakpoint.value === "sm" ||
    breakpoint.value === "md"
  )
    return true;
  else return false;
});
const arrImages = [pmi, blueprint, scrum, driven, bussines];
</script>
<style scoped>
.container {
  background: white;
}

.container-desktop {
  margin: 12vh 5% 0 5%;
}

.container-mobile {
  margin: 0vh 5%;
}

.desc-container {
  width: 100%;
}

.subtitle-section {
  font-size: 35px;
  text-align: start;
}

.about-section {
  float: left;
  font-size: 27px;
  width: 50%;
}

.img-who {
  display: block;
  margin: 0px auto;
  width: 400px;
  height: 500px;
  border-radius: 10%;
}

.img-who:hover {
  transition: 0.5s all;
  border: 3px outset #131b85;
}

.methods {
  width: 100%;
}

.methods-section {
  font-size: 27px;
}

.img-methods {
  width: 400px;
  height: 200px;
  float: left;
  margin: 20px;
}

.img-top {
  margin-top: 150px;
}
</style>