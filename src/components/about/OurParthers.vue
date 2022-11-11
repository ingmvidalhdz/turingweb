<template>
  <div class="container">
    <h2 class="title-section" :class="'title-section-' + breakpoint">
      NUESTROS SOCIOS
    </h2>
    <v-row no-gutters>
      <v-col
        v-for="item in arrImages1"
        :key="item"
        cols="12"
        lg="3"
        xl="3"
        xxl="3"
      >
        <a :href="item.link" target="blank">
          <img class="arr-images-1" :src="item.img" alt="arrimages1"
        /></a>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        v-for="item in arrImages2"
        :key="item"
        cols="12"
        lg="3"
        xl="3"
        xxl="3"
      >
        <a :href="item.link" target="blank">
          <img class="arr-images-2" :src="item.img" alt="arrimages1" />
        </a>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import tableau from "@/assets/imgs/tableau-partner.png";
import salesforce from "@/assets/imgs/salesforce.jpg";
import dell from "@/assets/imgs/dell.png";
import hp from "@/assets/imgs/hp.png";
import redHat from "@/assets/imgs/redhat.png";
import microsoft from "@/assets/imgs/microsoft.png";
import kaspersky from "@/assets/imgs/kaspersky.png";
import ibm from "@/assets/imgs/ibm.png";
import { computed } from "vue";
import { useDisplay } from "vuetify";
const { name } = useDisplay();
const breakpoint = computed(() => name.value);
const arrImages1 = [
  {
    img: tableau,
    link: "https://www.tableau.com/es-mx",
  },
  {
    img: salesforce,
    link: "https://www.salesforce.com/mx/",
  },
  {
    img: dell,
    link: "https://www.dell.com/en-us",
  },
  {
    img: hp,
    link: "https://www.hp.com/mx-es/home.html",
  },
];
const arrImages2 = [
  {
    img: redHat,
    link: "https://www.redhat.com/en",
  },
  {
    img: microsoft,
    link: "https://www.microsoft.com/es-mx/",
  },
  {
    img: kaspersky,
    link: "https://latam.kaspersky.com/",
  },
  {
    img: ibm,
    link: "https://www.ibm.com/mx-es",
  },
];
</script>
<style scoped>
.arr-images-1,
.arr-images-2 {
  width: 130px;
  height: 90px;
  display: block;
  margin: 50px auto;
}

.arr-images-1:hover,
.arr-images-2:hover {
  transition: 0.5s all;
  transform: scale(1.5);
  cursor: pointer;
}
</style>