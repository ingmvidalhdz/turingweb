<template>
  <div class="container">
    <h2 class="title-section" :class="'title-section-' + breakpoint">
      TECNOLOGIAS QUE UTILIZAMOS
    </h2>
    <div class="images" v-for="i in 4" :key="i">
      <img
        class="img-tec"
        :class="'img-tec-' + breakpoint"
        :src="arrImages[i - 1]"
        alt="Technology-img"
      />
    </div>
  </div>
</template>
<script setup>
import scrum from "@/assets/imgs/scrum.png";
import pimi2 from "@/assets/imgs/pmi2.png";
import salesforce from "@/assets/imgs/salesforce.jpg";
import tableau from "@/assets/imgs/tableau.png";
import { computed } from "vue";
import { useDisplay } from "vuetify";
const { name } = useDisplay();
const breakpoint = computed(() => name.value);
const arrImages = [tableau, salesforce, pimi2, scrum];
</script>
<style scoped>
.container {
  background-size: cover;
}

.images {
  width: 90%;
  display: block;
  margin: 0px auto;
}

.img-tec-xxl,
.img-tec-xl,
.img-tec-lg {
  float: left;
  width: 350px;
  height: 250px;
  margin: 0px 30px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  padding-bottom: 5vh;
}

.img-tec-md,
.img-tec-sm {
  display: block;
  margin: 0px auto;
  width: 300px;
  height: 250px;
  padding-bottom: 5vh;
}

.img-tec-xs {
  display: block;
  margin: 0px auto;
  width: 250px;
  height: 150px;
  padding-bottom: 5vh;
}

.img-tec:hover {
  transition: 0.5s all;
  transform: scale(1.1);
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
}
</style>