<template>
  <div class="container" :class="'container-' + breakpoint">
    <h2 class="title-section" :class="'title-section-' + breakpoint">
      QUE REALIZAMOS
    </h2>
    <div class="desc-container">
      <h3 class="desc-section center-text">
        Contribuimos con su empresa para mejorar la toma de decisiones a través
        de sus datos.
      </h3>
    </div>
    <div v-if="!isMobile" class="img-empresa elevation-5">
      <div class="btn-more"><h2>MÁS INFORMACIÓN</h2></div>
    </div>
    <v-btn v-else class="btn-info">MÁS INFORMACIÓN</v-btn>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";
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
</script>
<style scoped>
.container {
  background: white;
}

.container-xxl,
.container-xl,
.container-lg {
  margin: 14vh 5% 0 5%;
}

.container-md,
.container-sm,
.container-xs {
  margin: 0vh 5%;
}

.img-empresa {
  display: block;
  margin: 20px auto;
  border-radius: 100%;
  height: 400px;
  width: 400px;
  background-image: url("@/assets/imgs/empresa.jpg");
}

.btn-more {
  position: relative;
  background: rgb(70, 113, 229, 0.5);
  height: 400px;
  width: 400px;
  border-radius: 100%;
  opacity: 0;
}

.img-empresa:hover {
  transition: 0.5s all;
  transform: scale(1.1);
}

.img-empresa:hover .btn-more {
  opacity: 1;
}

.btn-more h2 {
  padding: 48% 22%;
  line-height: 1;
  color: white;
}

.btn-more:hover {
  cursor: pointer;
}

.desc-container {
  display: block;
  margin: 0px auto;
  width: 70%;
}
.btn-info {
  display: block;
  margin: 3vh auto;
  background: rgb(70, 113, 229);
  color: white;
}
</style>