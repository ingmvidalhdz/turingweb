<template>
  <div class="container">
    <h2 class="title-section" :class="'title-section-' + breakpoint">
      ¿POR QUE SOMOS DIFERENTES?
    </h2>
    <div class="differences">
      <div class="difference df-1 elevation-10">
        <div class="desc-dif">
          <h2 class="title-dif">SCRUM</h2>
          <p class="p-dif">
            Profesionales con conocimientos y competencias acreditadas De todas
            las formas que existen para poder desarrollar software, únicamente
            de manera colaborativa es como se logra. Es por eso que aplicamos la
            metodología Scrum para llevar más allá tus objetivos
          </p>
        </div>
      </div>
      <div class="difference df-2 elevation-10">
        <div class="desc-dif">
          <h2 class="title-dif">Data Driven</h2>
          <p class="p-dif">
            Tomamos decisiones estratégicas basadas en la interpretación y el
            análisis de datos. Es decir, se trata de ver la manera cómo se
            estructuran y organizan los datos con el fin de aplicarlos a su
            negocio y mejorar sus estrategias.
          </p>
        </div>
      </div>
      <div class="difference df-3 elevation-10">
        <div class="desc-dif">
          <h2 class="title-dif">Conocimiento</h2>
          <ul class="p-dif">
            <li>Big Data</li>
            <li>Data Mining</li>
            <li>Data to Insight</li>
            <li>Bussines Inteligence</li>
            <li>Machine Learning</li>
          </ul>
        </div>
      </div>
    </div>
    <h2 class="title-section" :class="'title-section-' + breakpoint">
      PREMIOS
    </h2>
    <div class="awards d-flex justify-center mb-6">
      <div class="award" v-for="i in 3" :key="i">
        <v-icon class="icon-award">mdi-trophy-award </v-icon>
        <h4>{{ awards[i - 1] }}</h4>
        <img :src="tableau" alt="img-tableau" class="img-tableau" />
      </div>
    </div>
  </div>
</template>
<script setup>
import tableau from "@/assets/imgs/tableau.png";
import { computed } from "vue";
import { useDisplay } from "vuetify";
const { name } = useDisplay();
const breakpoint = computed(() => name.value);
const awards = [
  "Ganador del OPI",
  "Ganador del Parthner boot camp",
  "Ganador del OPI",
];
</script>
<style scoped>
.container {
  width: 100%;
}

.difference {
  width: 33.33%;
  height: 400px;
  display: inline-block;
  background-size: cover;
}

.difference:hover {
  transition: 0.5s all;
  transform: scale(1.1);
}

.df-1 {
  background-image: url("@/assets/imgs/scrum.jfif");
}

.df-2 {
  background-image: url("@/assets/imgs/data-driven.jpg");
}

.df-3 {
  background-image: url("@/assets/imgs/masters.jfif");
}

.desc-dif {
  display: block;
  margin: 60px auto;
  padding: 50px;
}

.desc-dif .title-dif,
.desc-dif .p-dif {
  opacity: 0;
}

.desc-dif:hover {
  background: rgba(65, 116, 163, 0.5);
  cursor: pointer;
}

.desc-dif:hover .title-dif,
.desc-dif:hover .p-dif {
  transition: 0.5s all;
  backdrop-filter: blur(2px);
  opacity: 1;
}

.title-dif {
  color: white;
  font-size: 50px;
  text-align: center;
}

.p-dif {
  color: white;
  font-size: 20px;
  text-align: justify;
}

.award {
  width: 33.35%;
}

.icon-award {
  color: rgb(255, 187, 0);
  font-size: 100px;
  display: block;
  margin: 10px auto;
}

.award h4 {
  text-align: center;
  font-size: 20px;
}

.img-tableau {
  height: 100px;
  width: 150px;
  display: block;
  margin: 0px auto;
}
</style>