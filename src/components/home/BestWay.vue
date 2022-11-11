<template>
  <div class="container">
    <div class="desc-section">
      <h2 class="title-section">LA MANERA IDEAL PARA MANEJAR TUS DATOS</h2>
      <div class="desc-container">
        <h3 class="justify-text" :class="'why-' + breakpoint">
          Somos el socio estratégico que necesitas para potenciar los datos de
          tu organización. Contamos con más de 15 años de experiencia brindando
          soluciones innovadoras, adaptadas a las necesidades de nuestros
          clientes, en más de 10 industrias y diferentes áreas funcionales.
        </h3>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";
const { name } = useDisplay();
const breakpoint = computed(() => name.value);
</script>
<style scoped>
.container {
  background-image: url("../../assets/imgs/data-1.jpg");
  background-size: cover;
}

.desc-section {
  background: rgba(0, 2, 90, 0.5);
}

.desc-container {
  display: block;
  margin: 0px auto;
  width: 70%;
  color: white;
  padding: 10px;
  padding-bottom: 10vh;
}

.title-section {
  color: white;
}

.why-xxl,
.why-xl,
.why-lg {
  font-weight: lighter;
  font-size: 30px;
}

.why-md,
.why-sm,
.why-xs {
  font-weight: lighter;
  font-size: 20px;
}
</style>