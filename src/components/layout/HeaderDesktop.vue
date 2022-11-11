<template>
  <div class="container header">
    <div class="title-page">
      <h2 class="title-turing">TURING-IA</h2>
    </div>
    <div class="menu">
      <v-btn class="item-menu" @click="goTo('Inicio')">Inicio</v-btn>
      <v-btn class="item-menu" @click="goTo('Nosotros')">Nosotros</v-btn>
      <v-btn class="item-menu" @click="goTo('Servicios')">Servicios</v-btn>
      <v-btn class="item-menu">Tableau</v-btn>
      <v-btn class="item-menu">Portal</v-btn>
      <v-btn class="item-menu">Blog</v-btn>
      <v-btn class="item-menu">Contacto</v-btn>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goTo = (to) => {
  if (typeof to === "string") {
    router.push({
      name: to,
      params: {},
    });
  }
};
</script>
<style scoped>
.header {
  position: fixed;
  z-index: 2000;
  width: 100%;
  height: 75px;
  background: rgba(19, 27, 133, 1);
}

.container {
  width: 100%;
  height: 70px;
}

.title-page {
  width: 50%;
}

.title-turing {
  margin-left: 10%;
  font-size: 30px;
  line-height: 2;
  color: white;
}

.menu {
  width: 50%;
}

.title-page,
.menu {
  height: 100%;
  display: inline-block;
}

.item-menu {
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  color: white;
  background: none;
  box-shadow: none;
  margin-right: 20px;
}
</style>;
