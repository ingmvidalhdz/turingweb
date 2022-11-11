<template>
  <div
    class="container"
    :class="isMobile ? 'container-mobile' : 'container-desktop'"
  >
    <h2 class="title-section" :class="'title-section-' + breakpoint">
      SERVICIOS EN TURING-IA
    </h2>
    <div class="desc-services">
      <p>
        Proporcionamos a nuestros clientes una gama de productos y servicios
        relacionados con el analisis de datos, mediante el uso de tecnologias
        como Tableau, Salesforce, PMI, Scrum.
      </p>
      <h3><strong>Expertos en:</strong></h3>
      <div class="list-services">
        <ul>
          <li>Tableau</li>
          <li>Business Intelligence</li>
          <li>Business Analyst</li>
          <li>Data Analyst</li>
          <li>Machine Learning</li>
          <li>Inteligencia Artificial</li>
          <li>Data Mining</li>
          <li>Big Data</li>
        </ul>
      </div>
    </div>
    <img :src="servicios" class="img-servicios elevation-15" />
  </div>
</template>
<script setup>
import servicios from "@/assets/imgs/servicios.jpg";
import { computed } from "vue";
import { useDisplay } from "vuetify";
const { name } = useDisplay();
const breakpoint = computed(() => name.value);
</script>
<style scoped>
.container-desktop {
  margin: 12vh 5% 0 5%;
}

.container-mobile {
  margin: 0vh 5%;
}

.desc-services {
  width: 50%;
}

.desc-services p {
  font-size: 25px;
}

.desc-services h3 {
  font-size: 25px;
}

li {
  font-size: 25px;
  margin-left: 40px;
}

.desc-services,
.img-servicios {
  display: inline-block;
}

.img-servicios {
  width: 50%;
}
</style>